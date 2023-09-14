import PostActions from "@/pages/feed/post/PostActions";
import PostInfo from "@/pages/feed/post/PostInfo";
import PostMedia from "@/components/PostMedia";
import UserPostDisplay from "@/pages/feed/post/UserPostDisplay";
import { PostType } from "@/types"
import React, { useCallback, useEffect, useState } from "react";
import PostComments from "../pages/feed/post/PostComments";
import { db } from "@/firebase/config";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { Comment } from "@/types";


interface PostItemProps extends PostType {
    handleUpvote: (post_id: string) => void;
    currentUserEmail: string;
    currentUserPhoto: string;
    currentUserFullname: string;
}


const PostItem: React.FC<PostItemProps> = ({
    author_email,
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
    currentUserEmail,
    currentUserPhoto,
    currentUserFullname,
    handleUpvote,
}) => {
    const commentsCollectionRef = collection(db, "comments");
    const [comments, setComments] = useState<Comment[]>([]);
    const [openComments, setOpenComments] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    
    const handleOpenComments = useCallback(async (post_title: string) => {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        setOpenComments(!openComments);
    }, []);


    useEffect(() => {
        const getComments = async () => {
            const commentsRefQuery = query(commentsCollectionRef, where("post_title", "==", title));
            const unsubscribe = onSnapshot(commentsRefQuery, (snapshot) => {
                setComments(snapshot.docs.map((doc) => doc.data()) as Comment[]);
            });
        };

        return () => {
            getComments();
        }
    }, []);


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
                    currentUserEmail={currentUserEmail}
                    currentUserPhoto={currentUserPhoto}
                    post_title={title}
                    currentUserFullname={currentUserFullname}
                    author_email={author_email}
                    author_name={author_name} />
            </div>
        </div>
    )
}

export default PostItem;