import PostActions from "@/components/Feed/Post/PostActions";
import PostInfo from "@/components/Feed/Post/PostInfo";
import PostMedia from "@/components/Feed/Post/PostMedia";
import UserPostDisplay from "@/components/Feed/Post/UserPostDisplay";
import { PostType } from "@/types"



const PostItem: React.FC<PostType> = ({
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
}) => {

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
                    upvotes={upvotes}
                    downvotes={downvotes}
                    answers={answers}
                />
            </div>
        </div>
    )
}

export default PostItem;