import QuestionActions from "@/components/QuestionPost/QuestionActions";
import QuestionInfo from "@/components/QuestionPost/QuestionInfo";
import QuestionMedia from "@/components/QuestionPost/QuestionMedia";
import UserQuestionDisplay from "@/components/QuestionPost/UserQuestionDisplay";
import { Question } from "@/types"



const QuestionItem: React.FC<Question> = ({
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
                <UserQuestionDisplay
                    author_id={author_id}
                    author_name={author_name}
                    author_photo={author_photo}
                    author_major={author_major}
                    author_year={author_year}
                    created_at={created_at}
                />
                <QuestionInfo
                    title={title}
                    body={body}
                />
                <QuestionMedia
                    image={image}
                />
                <QuestionActions
                    upvotes={upvotes}
                    downvotes={downvotes}
                    answers={answers}
                />
            </div>
        </div>
    )
}

export default QuestionItem;