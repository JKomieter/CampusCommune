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
            <BeatLoader color="#333" size={15} />
        </div>
    )
    
    return (
        <div className="w-full  flex flex-col gap-1">
            {comments.map((comment) => (
                <CommentItem 
                    key={comment.post_title}
                    {...comment}
                />
            ))}
        </div>
    )
}

export default PostCommentsList;