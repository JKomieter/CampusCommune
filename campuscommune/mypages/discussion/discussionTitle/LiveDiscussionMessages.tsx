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
        <div className="h-[70vh] w-full overflow-y-scroll flex flex-col">
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