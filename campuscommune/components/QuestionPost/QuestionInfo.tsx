import { QuestionInfoProps } from "@/types"


const QuestionInfo: React.FC<QuestionInfoProps> = ({
    title,
    body,
}) => {
    return (
        <div className="flex flex-col gap-2 px-3 w-full">
            <div className="w-full font-bold text-neutral-900" style={{lineHeight: "1.8rem"}}>
                {title}
            </div>
            <div className="w-full text-neutral-800 text-sm" style={{lineHeight: "1.4rem"}}>
                {body}
            </div>
        </div>
    )
}

export default QuestionInfo;