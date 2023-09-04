import { Comment } from "@/types";
import { Avatar } from "@nextui-org/react";
import { BsDot } from "react-icons/bs";




const CommentItem: React.FC<Comment> = ({
    author_email,
    author_photo,
    author_name,
    created_at,
    body,
    downvotes,
    upvotes,
    replies,
}) => {
    return (
        <div 
        style={{borderBottomWidth: "0.7px"}}
        className="w-full flex flex-row gap-2 items-start px-3 border-neutral-400 py-2">
            <Avatar
                src={author_photo || "https://publichealth.uga.edu/wp-content/uploads/2020/01/Thomas-Cameron_Student_Profile.jpg"}
                size="md"
                className="z-0"
            />
            <div className="flex w-full flex-col gap-0.5">
                <div className="flex flex-row gap-0.5 items-center">
                    <p className="text-neutral-600 text-sm font-semibold">
                        {author_name}
                    </p>
                    <BsDot size={15} className="text-neutral-500" />
                    <p className="text-neutral-500 text-xs">
                        {created_at.toDate().toDateString()}
                    </p>
                </div>
                <span className="text-sm text-neutral-600">
                    {body}
                </span>
                
            </div>
        </div>
    )
};

export default CommentItem;