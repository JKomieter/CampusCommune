import React from 'react';
import { Comment } from '@/types';
import { BeatLoader } from 'react-spinners';


const PostCommentsList = ({
    comments,
    isLoading,
}:{
    comments: Comment[];
    isLoading: boolean;
}) => {

    if (isLoading) return (
        <div className="w-full h-full flex items-center justify-center">
            <BeatLoader color="#333" size={15} />
        </div>
    )
    
    return (
        <div className="w-full px-3">
            {comments.map((comment) => (
                <div className="">{comment.body}</div>
            ))}
        </div>
    )
}

export default PostCommentsList;