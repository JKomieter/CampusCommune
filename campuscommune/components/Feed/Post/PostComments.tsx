import { Avatar } from "@nextui-org/react";
import PostCommentsList from "./PostComentsList";
import { Comment } from "@/types";

const PostComments = ({
    openComments,
    author_photo,
    comments,
    isLoading,
}: {
    openComments: boolean;
    author_photo: string;
    comments: Comment[];
    isLoading: boolean;
}) => {

    if (!openComments) return false;

    return (
        <div className="w-full py-1 flex flex-col gap-4">
            <div className="flex flex-row w-full items-center justify-between bg-neutral-300 py-2 px-3 gap-1">
                <span className="pr-1">
                    <Avatar
                        src={author_photo || "https://publichealth.uga.edu/wp-content/uploads/2020/01/Thomas-Cameron_Student_Profile.jpg"}
                        size="sm"
                        className="z-0"
                    />
                </span>
                <textarea
                    placeholder="Add a comment..."
                    className="w-full p-1 rounded-3xl focus:outline-none bg-white text-xs md:text-sm"
                />
                <button
                    className="md:w-[25%] w-[35%] flex items-center justify-center bg-blue-600 rounded-3xl">
                    <p className="text-neutral-100 md:text-xs text-[7px] font-semibold px-3 py-3">Add comment</p>
                </button>
            </div>
            <PostCommentsList
                isLoading={isLoading}
                comments={comments}
            />
        </div>
    )
}

export default PostComments