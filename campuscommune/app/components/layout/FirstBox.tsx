import { FaRegQuestionCircle } from "react-icons/fa";
import { HiOutlinePencil, HiOutlinePencilAlt } from "react-icons/hi";

const FirstBox = () => {
  return (
    <div className="w-full py-1 px-1 bg-neutral-200 rounded-md shadow-lg flex flex-col item-center gap-2">
      <div className="w-full flex flex-row items-center gap-3">
        <span className="p-2 rounded-full bg-neutral-800 w-10 h-10 flex items-baseline justify-center">
          <p className="text-lg text-neutral-200 ">J</p>
        </span>
        <input
          type="text"
          placeholder="What's on your mind?"
          className="w-full px-2 py-1 rounded-2xl focus:outline-none"
        />
      </div>
      <div className="flex items-center justify-evenly w-full">
        <div
          className="flex flex-row gap-2 items-center justify-center 
          hover:bg-neutral-300 transition duration-500 p-1 w-full border-r-neutral-700"
          style={{ borderRightWidth: "2px" }}
        >
          <FaRegQuestionCircle size={18} className="text-neutral-700" />
          <p className="text-neutral-700 text-sm">Ask</p>
        </div>
        <div
          className="flex flex-row gap-2 items-center justify-center 
          hover:bg-neutral-300 transition duration-500 p-1 w-full border-r-neutral-700"
          style={{ borderRightWidth: "2px" }}
        >
          <HiOutlinePencilAlt size={18} className="text-neutral-700" />
          <p className="text-neutral-700 text-sm">Answer</p>
        </div>
        <div
          className="flex flex-row gap-2 items-center justify-center 
        hover:bg-neutral-300 transition duration-500 p-1 w-full"
        >
          <HiOutlinePencil size={18} className="text-neutral-700" />
          <p className="text-neutral-700 text-sm">Post</p>
        </div>
      </div>
    </div>
  );
};

export default FirstBox;
