import { Avatar } from "@nextui-org/react";
import PostCommentsList from "./PostComentsList";
import { Comment } from "@/types";
import { toast } from "react-hot-toast";
import { useCallback, useState } from "react";
import { db } from "@/firebase/config";
import { addDoc, collection } from "firebase/firestore";

const PostComments = ({
    openComments,
    author_photo,
    comments,
    isLoading,
    author_email,
    post_title,
    author_name,
    currentUserEmail,
    currentUserPhoto,
    currentUserFullname,
}: {
    openComments: boolean;
    author_photo: string;
    comments: Comment[];
    isLoading: boolean;
    author_email: string;
    post_title: string;
    author_name: string;
    currentUserEmail: string;
    currentUserPhoto: string;
    currentUserFullname: string;
}) => {
    const [comment, setComment] = useState<string>("");
    const commentsCollectionRef = collection(db, "comments");


    const handleComment = useCallback(async () => {
        try {
            const newComment: Comment = {
                author_email: currentUserEmail,
                author_name: currentUserFullname,
                author_photo: currentUserPhoto,
                body: comment,
                post_title: post_title,
                created_at: new Date(),
                downvotes: [],
                upvotes: [],
                replies: [],
            }

            await addDoc(commentsCollectionRef, newComment);
            toast.success("Commented");
        } catch (error) {
            console.log(error);
            toast.error("Failed to comment");
        }
    }, [comment]);

    if (!openComments) return false;

    return (
        <div className="w-full py-1 flex flex-col gap-4">
            <div className="flex flex-row w-full items-center justify-between bg-neutral-300 py-2 px-3 gap-1">
                <span className="pr-1">
                    <Avatar
                        src={author_photo || "https://publichealth.uga.edu/wp-content/uploads/2020/01/Thomas-Cameron_Student_Profile.jpg"}
                        size="md"
                        className="z-0"
                    />
                </span>
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Add a comment..."
                    className="w-full p-1 rounded-3xl focus:outline-none bg-white text-xs md:text-sm"
                />
                <button
                    onClick={handleComment}
                    className="md:w-[25%] w-[35%] flex items-center justify-center bg-blue-600 rounded-3xl">
                    <p className="w-full text-neutral-100 lg:text-sm text-xs font-semibold px-3 py-3 ">Add</p>
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