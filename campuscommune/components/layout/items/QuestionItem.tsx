import QuestionActions from "@/components/QuestionPost/QuestionActions";
import QuestionInfo from "@/components/QuestionPost/QuestionInfo";
import QuestionMedia from "@/components/QuestionPost/QuestionMedia";
import UserQuestionDisplay from "@/components/QuestionPost/UserQuestionDisplay";
import { Question } from "@/types"



const QuestionItem: React.FC<Question> = ({
    authorId,
    authorName,
    authorPhotoURL,
    authorMajor,
    authorYear,
    title,
    body,
    createdAt,
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
                    authorId={authorId}
                    authorName={authorName}
                    authorPhotoURL={authorPhotoURL}
                    authorMajor={authorMajor}
                    authorYear={authorYear}
                    createdAt={createdAt}
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