import { QuestionActionProps } from "@/types";
import { BsDot } from "react-icons/bs";
import { TbArrowBigUpFilled, TbArrowBigDown } from "react-icons/tb";

const VoteActions: React.FC<QuestionActionProps> = ({
    upvotes,
    downvotes,
}) => {
    return (
      <div
        className="rounded-3xl flex flex-row gap-1 justify-between border-neutral-300 bg-neutral-100"
        style={{ borderWidth: "0.4px" }}
      >
        <div className="flex flex-row gap-1 px-2 py-1 items-center justify-between">
          <TbArrowBigUpFilled size={22} color="#BAB86C" className="font-bold" />
          <span className="flex flex-row gap-1 item-center ">
            <p className="text-[#BAB86C] text-sm">Upvote</p>
            <BsDot size={16} className="text-[#BAB86C]" />
            <p className="text-[#BAB86C] text-sm">{upvotes}</p>
          </span>
        </div>
        <div className="h-full w-[1px] bg-neutral-300"></div>
        <div className="px-2 py-1 flex items-center justify-center">
          <TbArrowBigDown size={24} color="#BAB86C" className="font-bold" />
        </div>
      </div>
    );
}


export default VoteActions;