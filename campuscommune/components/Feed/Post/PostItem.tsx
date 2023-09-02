import PostActions from "@/components/Feed/Post/PostActions";
import PostInfo from "@/components/Feed/Post/PostInfo";
import PostMedia from "@/components/Feed/Post/PostMedia";
import UserPostDisplay from "@/components/Feed/Post/UserPostDisplay";
import { PostType } from "@/types"
import React, { useCallback, useState } from "react";
import PostComments from "./PostComments";
import { db } from "@/firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";
import toast from "react-hot-toast";
import { Comment } from "@/types";


interface PostItemProps extends PostType {
    handleUpvote: (post_id: string) => void;
 }


const PostItem: React.FC<PostItemProps> = ({
    id,
    author_id,
    author_name,
    author_photo,
    author_major,
    author_year,
    title,
    body,
    created_at,
    tags,
    upvotes,
    downvotes,
    image,
    answers,
    handleUpvote,
}) => {
    const commentsCollectionRef = collection(db, "comments");
    const [ comments, setComments ] = useState<Comment[]>([]);
    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    const handleOpenComments = useCallback(async (post_title: string) => {
        setIsLoading(true);
        try {
            const commentsRefQuery = query(commentsCollectionRef, where("post_title", "==", post_title));
            const commentsSnapshot = await getDocs(commentsRefQuery);

            setTimeout(() => {
                setComments(commentsSnapshot.docs.map((doc) => doc.data()) as Comment[]);
            }, 5000);
        } catch (error) {
            console.log(error);
            toast.error("Error opening comments");
        }
        setIsLoading(false);
    }, []);

    const [openComments, setOpenComments] = React.useState<boolean>(false);

    return (
        <div className="w-full bg-white shadow-lg rounded-md overflow-y-visible">
            <div className="w-full flex flex-col gap-4 items-start">
                <UserPostDisplay
                    author_id={author_id}
                    author_name={author_name}
                    author_photo={author_photo}
                    author_major={author_major}
                    author_year={author_year}
                    created_at={created_at}
                />
                <PostInfo
                    title={title}
                    body={body}
                />
                <PostMedia
                    image={image}
                />
                <PostActions
                    comments={comments}
                    upvotes={upvotes}
                    downvotes={downvotes}
                    answers={answers}
                    handleUpvote={handleUpvote}
                    title={title}
                    setOpenComments={setOpenComments}
                    openComments={openComments}
                    handleOpenComments={handleOpenComments}
                />
                <PostComments
                    comments={comments}
                    openComments={openComments}
                    author_photo={author_photo}
                    isLoading={isLoading}
                />
            </div>
        </div>
    )
}

export default PostItem;