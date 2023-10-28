import { PostActionProps } from "@/types";
import { BsDot } from "react-icons/bs";
import { TbArrowBigUpFilled, TbArrowBigDown } from "react-icons/tb";
import { Tooltip, Button } from "@nextui-org/react";


const VoteActions: React.FC<PostActionProps> = ({
    upvotes,
    downvotes,
    handleUpvote,
    title
}) => {
    
    return (
      <div
        className="rounded-3xl flex flex-row gap-1 justify-between border-neutral-300 bg-neutral-100"
        style={{ borderWidth: "0.4px" }}
      >
        <div 
        onClick={(e) => handleUpvote(e, title)}
        className="flex flex-row gap-1 px-2 py-1 items-center justify-between cursor-pointer">
          <TbArrowBigUpFilled size={22} color="#FF725E" className="font-bold" />
          <span className="flex flex-row gap-1 item-center ">
            <p className="text-blue-700 text-sm">Upvote</p>
            <BsDot size={16} className="text-blue-700" />
            <p className="text-blue-700 text-sm">{upvotes?.length || 0}</p>
          </span>
        </div>
        <div className="h-full w-[1px] bg-neutral-300"></div>
        <Tooltip showArrow placement="top" content="Downvote" color="default" className="rounded-md">
          <div className="px-2 py-1 flex items-center justify-center">
            <TbArrowBigDown size={24} color="#FF725E" className="font-bold" />
          </div>
        </Tooltip>
      </div>
    );
}


export default VoteActions;