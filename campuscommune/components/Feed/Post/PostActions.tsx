import VoteActions from "./VoteActions";
import { PostActionProps } from "@/types";
import { TbMessageCircle } from "react-icons/tb";
import { PiShareFatBold } from "react-icons/pi";
import { BsThreeDots } from "react-icons/bs";
import ToolTipContent from "./ToolTipContent";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";



interface PostActionPropsII extends PostActionProps {
  setOpenComments: React.Dispatch<React.SetStateAction<boolean>>;
  openComments: boolean;
  handleOpenComments: (post_title: string) => void;
}

const PostActions: React.FC<PostActionPropsII> = ({
  upvotes,
  downvotes,
  answers,
  handleUpvote,
  title,
  comments,
  setOpenComments,
  openComments,
  handleOpenComments,
}) => {
  return (
    <div className="w-full px-3 flex flex-row items-center justify-between pb-3">
      <div className="flex flex-row md:gap-5 gap-2">
        <VoteActions
          comments={comments}
          upvotes={upvotes}
          downvotes={downvotes}
          answers={answers}
          handleUpvote={handleUpvote}
          title={title}
        />
        <div
          onClick={() => {
            handleOpenComments(title)
            setOpenComments(!openComments)
          }}
          className="flex flex-row items-center gap-1 rounded-3xl py-1 px-2 cursor-pointer hover:bg-neutral-200">
          <TbMessageCircle size={20} className="text-neutral-500" />
          <p className="text-neutral-500 text-sm">{comments.length || 0}</p>
        </div>
        <div className="flex flex-row items-center gap-1 rounded-3xl py-1 px-2 cursor-pointer hover:bg-neutral-200">
          <PiShareFatBold size={20} className="text-neutral-500" />
          <p className="text-neutral-500 text-sm">3</p>
        </div>
      </div>
      <div className="cursor-pointer">
        <Popover placement="top" color="default">
          <PopoverTrigger>
            <button className="p-0">
              <BsThreeDots size={20} className="text-neutral-500" />
            </button>
          </PopoverTrigger>
          <PopoverContent>
            <ToolTipContent />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default PostActions;
