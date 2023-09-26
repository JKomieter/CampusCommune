import { DiscussionMessage } from "@/types";
import MessageItem from "../../../components/MessageItem";
import MessageSkeleton from "../../../components/MessageSkeleton";



const LiveDiscussionMessages = ({
    messages,
    currentUserEmail
}: {
    messages: DiscussionMessage[]
    currentUserEmail: string
}) => {


    return (
        <div style={{ height: "70vh", backgroundColor: "#f0f7ff"}} className="w-full overflow-y-scroll flex flex-col ">
            {
                messages?.length > 0 ? messages?.map((message) => (
                    <MessageItem
                        key={message.text}
                        message={message} currentUserEmail={currentUserEmail}
                    />
                )) : (
                    <MessageSkeleton />
                )
            }
        </div>
    )
}

export default LiveDiscussionMessages;