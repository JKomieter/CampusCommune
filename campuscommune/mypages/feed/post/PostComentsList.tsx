import React from 'react';
import { Comment } from '@/types';
import { BeatLoader } from 'react-spinners';
import CommentItem from '../../../components/CommentItem';


const PostCommentsList = ({
    comments,
    isLoading,
}:{
    comments: Comment[];
    isLoading: boolean;
}) => {

    if (isLoading) return (
        <div className="w-full h-full flex items-center justify-center">
            <BeatLoader color="#0088ff" size={15} />
        </div>
    )
    
    return (
        <div className="w-full  flex flex-col gap-1">
            {comments.map((comment) => (
                <CommentItem 
                    key={comment.created_at.toDate().toDateString()}
                    {...comment}
                />
            ))}
        </div>
    )
}

export default PostCommentsList;