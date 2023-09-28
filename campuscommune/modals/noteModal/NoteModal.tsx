import { db, storage } from "@/firebase/config";
import { ModalHeader, ModalBody, ModalFooter, Modal, ModalContent, Button } from "@nextui-org/react";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { auth } from "@/firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import useGetCurrentUser from "@/hooks/useGetCurrentUser";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownSection,
    DropdownItem
} from "@nextui-org/react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { coursesList } from "@/courses";
import NoteMedia from "@/components/NoteMedia";


const longStyleString = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"



const NoteModal = ({onClose}: {onClose: () => void}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [user] = useAuthState(auth);
    const { currentUser } = useGetCurrentUser();
    const notesCollectionRef = collection(db, "notes");
    const [postLoading, setPostLoading] = useState<boolean>(false);
    const [media, setMedia] = useState<Blob>(new Blob());
    const [course, setCourse] = useState<string>("");


    const onSubmit = useCallback(async (data: Record<string, string>) => {
        const { title, description } = data;
        console.log(course, user?.email)
        try {
            const storageRef = ref(storage, `notes/${course}/${user?.email}`);
            await uploadBytes(storageRef, media);
            const url = await getDownloadURL(storageRef);

            const Note = {
                title: title,
                description: description,
                author_id: currentUser.email,
                author_name: currentUser.username,
                author_email: currentUser.email,
                created_at: new Date(),
                course: course,
                media_name: media.name,
                type: media.type,
                media_path: `notes/${course}/${user?.email}`
            };

            await addDoc(notesCollectionRef, Note);

            setTimeout(() => {
                setPostLoading(false);
            }, 2000);

            toast.success("Note added successfully!");
            onClose();
        } catch (error) {
            console.log(error);
            toast.error("Error adding note");
        }
    }, []);


    return (
        <>
            <ModalHeader>Share Notes</ModalHeader>
            <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6 mb-6 md:grid-cols-2">
                    <div className="flex flex-col gap-4 w-full">
                        <div className="w-full">
                            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Title
                            </label>
                            <input
                                type="text"
                                className={longStyleString}
                                style={{ borderWidth: "1px" }}
                                id="title"
                                {...register("title", { required: true })}
                            />
                            {errors.title && <span>This field is required</span>}
                        </div>
                        <div className="w-full">
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">
                                Description
                            </label>
                            <textarea
                                className={longStyleString}
                                style={{ borderWidth: "1px" }}
                                id="description"
                                {...register("description", { required: true })}
                            />
                            {errors.description && <span>This field is required</span>}
                        </div>
                        <div className="w-full h-full">
                            <Dropdown className="overflow-y-scroll">
                                <DropdownTrigger>    
                                    <label 
                                    style={{display: "flex", flexDirection: "row", justifyItems: "between", alignItems: "center"}} 
                                    htmlFor="course" className={longStyleString} >
                                        <p className="w-full">{course || "Course"}</p>
                                        <MdKeyboardArrowDown size={20} className="text-blue-600" />
                                    </label>
                                </DropdownTrigger>
                                <DropdownMenu className="overflow-y-scroll">
                                    <DropdownSection>
                                        {
                                            Object.entries(coursesList).map(([key, c]) => (
                                                <DropdownItem onClick={() => setCourse(coursesList[key])} key={key}>
                                                    {c}
                                                </DropdownItem>
                                            ))
                                        }
                                    </DropdownSection>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                        <NoteMedia media={media} setMedia={setMedia} /> 
                        <ModalFooter className="w-full flex flex-row gap-3 items-center">
                            <Button
                                type="submit"
                                color="primary"
                            >
                                {postLoading ? "Posting..." : "Post"}
                            </Button>
                            <span
                                className="text-red-500 cursor-pointer"
                                onClick={() => onClose()}
                            >
                                Cancel
                            </span>
                        </ModalFooter>
                    </div>
                </form>
            </ModalBody>
        </>
    )
};

export default NoteModal;