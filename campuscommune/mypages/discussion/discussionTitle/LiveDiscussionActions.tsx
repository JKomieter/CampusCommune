import { AiOutlineFileGif } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";
import { Input } from "@nextui-org/react";
import { useCallback, useState } from "react";
import { FiGift } from "react-icons/fi";
import { BiSticker } from "react-icons/bi";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { db } from "@/firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { currentUserType } from "@/types";
import toast from "react-hot-toast";



const LiveDiscussionActions = ({
    title,
    currentUser
}:
    {
        title: string
        currentUser: currentUserType
    }) => {
    const [text, setText] = useState<string>("");
    const discussionMessagesCollectionRef = collection(db, "discussion_messages");

    const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (text.length === 0) return;
        console.log(text);
        // add message to discussion messages with title
        const message = {
            text: text,
            created_at: new Date(),
            sender_email: currentUser.email,
            sender_name: currentUser.full_name,
            sender_photo: currentUser.profile_pic,
            multimedia: {
                image: "",
                video: "",
                audio: "",
            },
            title: title
        }
        try {
            await addDoc(discussionMessagesCollectionRef, message);
            setText("");
        } catch (error) {
            console.log(error);
            toast.error("Message could not be sent. Please try again later.")
        }
    }, [text]);





    return (
        <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex items-center flex-row gap-2 px-3">
            <Input
                placeholder="Type a message..."
                variant="bordered"
                height={100}
                value={text}
                onChange={(e) => setText(e.target.value)}
                color="primary"
                startContent={
                    <IoIosAddCircle size={28} className="text-neutral-700 cursor-pointer" />
                }
                className="bg-gray-200 w-full py-2"
                endContent={
                    <div className="flex flex-row gap-2 items-center">
                        <AiOutlineFileGif size={25} className="text-neutral-700 cursor-pointer" />
                        <FiGift size={25} className="text-neutral-700 cursor-pointer" />
                        <BiSticker size={25} className="text-neutral-700 cursor-pointer" />
                        <MdOutlineEmojiEmotions size={25} className="text-neutral-700 cursor-pointer" />
                    </div>
                }
            />
            <button
                type="submit"
                className="bg-blue-600 text-white rounded-full py-2 px-4 border-orange-700"
            >
                Send
            </button>
        </form>

    )
}


export default LiveDiscussionActions;