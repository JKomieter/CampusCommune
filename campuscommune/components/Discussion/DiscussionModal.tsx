"use client";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, user } from "@nextui-org/react"
import { useForm } from "react-hook-form";
import AddUserLoader from "./AddUserLoader";
import { auth, db } from "@/firebase/config";
import { query, where, getDocs, doc, updateDoc, arrayUnion, collection } from "firebase/firestore";
import router from "next/router";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { currentUserType } from "@/types";


const DiscussionModal = ({
    isOpen,
    onOpenChange,
    isLoading,
    setIsLoading,
    title,
    currentUser,
    code
}: {
    isOpen: boolean;
    onOpenChange: () => void;
    isLoading: boolean;
    setIsLoading: (value: boolean) => void;
    title: string;
    currentUser: currentUserType;
    code: string;
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const discussionsCollectionRef = collection(db, "discussions");
    const usersCollectionRef = collection(db, "user");
    const [discussion_id, setDiscussion_id] = useState<string>("");
    const [userId, setUserId] = useState<string>("");
    const router = useRouter();


    const addUserToDiscussion = async () => {
        // add user to discussion participants
        
        const discussionRefQuery = query(discussionsCollectionRef, where("title", "==", title));
        const discussionSnapshot = await getDocs(discussionRefQuery);
        let discussion_id = "";
        discussionSnapshot.forEach((doc) => {
            discussion_id = doc.id;
        });
        console.log(discussion_id);
        const discussionRef = doc(db, "discussions", discussion_id);

        await updateDoc(discussionRef, {
            participants: arrayUnion(currentUser?.email),
        });
    };


    const addDiscussionToUserDatabase = async () => {
        // add discussion to user database
   
        const userRefQuery = query(usersCollectionRef, where("email", "==", currentUser?.email));
        const userSnapshot = await getDocs(userRefQuery);
        let userId = "";
        userSnapshot.forEach((doc) => {
            userId = doc.id;
        });
        console.log(userId);
        const userRef = doc(db, "user", userId);

        await updateDoc(userRef, {
            discussions: arrayUnion(title),
        });
    }


    const onSubmit = useCallback(async (data: Record<string, any>) => {
        // add user to discussion participants
        const { agree, email } = data;
        if (!agree) return;
        setIsLoading(true);

        try {

            await addDiscussionToUserDatabase();
            await addUserToDiscussion();

            toast.success("Successfully joined discussion");
            setIsLoading(false)
            router.push(`/join-discussion/${title}`);
        } catch (error) {
            console.log(error);
            toast.error("Error joining discussion. Try again.");
            setIsLoading(false);
        }
    }, []);
    

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                {onClose => (
                    <>
                        <ModalHeader className='flex flex-col gap-1'>
                            Join Discussion
                        </ModalHeader>
                    {    
                    isLoading ? 
                        <AddUserLoader /> 
                            :
                        <ModalBody>
                            <ul className='text-[10px] md:text-[12px] text-neutral-500'>
                                <li>
                                    <b>Respect:</b> Be respectful and considerate in your
                                    interactions. Avoid hate speech, harassment, or personal
                                    attacks.
                                </li>
                                <li>
                                    <b>Stay On Topic:</b> Keep discussions relevant to the
                                    chosen topic. Off-topic posts may be removed.
                                </li>
                                <li>
                                    <b>No Spam or Self-Promotion:</b> Avoid spamming or
                                    excessive self-promotion. Focus on meaningful contributions.
                                </li>
                            </ul>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-6">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" id="email" {...register("email", { required: true })}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required/>
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your full name</label>
                                    <input type="text" id="password" {...register("fullName", { required: true })}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                                </div>
                                <div className="flex items-start mb-6">
                                    <div className="flex items-center h-5">
                                        <input id="remember" type="checkbox" {...register("agree", { required: true })}
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                                    </div>
                                    <label htmlFor="agree" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Agree to the Rules and am Ready to Join</label>
                                </div>
                                <button type="submit" 
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Join</button>
                            </form>

                        </ModalBody>
                        
                        }
                        <ModalFooter>
                            <Button color='danger' variant='light' onPress={onClose}>
                                Close
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}


export default DiscussionModal