import { DiscussionMessage } from "@/types"
import { Avatar } from "@nextui-org/react";



const MessageItem = ({
    message,
    currentUserEmail
}: {
    message: DiscussionMessage,
    currentUserEmail: string
}) => {

    const isCurrentUser = message.sender_email === currentUserEmail;

    return (
        <div className={`w-full px-3 py-4 items-center flex flex-row gap-2`}>
            <Avatar 
                src={message.sender_photo || "https://publichealth.uga.edu/wp-content/uploads/2020/01/Thomas-Cameron_Student_Profile.jpg"}
                size="sm"
            />
            <div className="flex flex-col ">
                <p className="text-[9px] text-neutral-700">
                    {"Just now"}
                </p>
                <p className="text-neutral-700 text-sm">
                    {message.text}
                </p>
            </div>
        </div>
    )
}


export default MessageItem;