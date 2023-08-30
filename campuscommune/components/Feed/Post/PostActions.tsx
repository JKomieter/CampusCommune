import VoteActions from "./VoteActions";
import { PostActionProps } from "@/types";
import { TbMessageCircle } from "react-icons/tb";
import { PiShareFatBold } from "react-icons/pi";
import { BsThreeDots } from "react-icons/bs";

const PostActions: React.FC<PostActionProps> = ({
  upvotes,
  downvotes,
  answers,
  handleUpvote,
  title,
}) => {
  return (
    <div className="w-full px-3 flex flex-row items-center justify-between pb-3">
      <div className="flex flex-row md:gap-5 gap-2">
        <VoteActions
          upvotes={upvotes}
          downvotes={downvotes}
          answers={answers}
          handleUpvote={handleUpvote}
          title={title}
        />
        <div className="flex flex-row items-center gap-1 rounded-3xl p-1">
          <TbMessageCircle size={20} className="text-neutral-500" />
          <p className="text-neutral-500 text-sm">{answers?.length || 0}</p>
        </div>
        <div className="flex flex-row items-center gap-1 rounded-3xl p-1">
          <PiShareFatBold size={20} className="text-neutral-500" />
          <p className="text-neutral-500 text-sm">3</p>
        </div>
      </div>
      <span className="cursor-pointer">
        <BsThreeDots size={20} className="text-neutral-500" />
      </span>
    </div>
  );
};

export default PostActions;
