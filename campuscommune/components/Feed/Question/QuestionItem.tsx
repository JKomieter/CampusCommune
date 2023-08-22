import { QuestionType } from "@/types";
import { QuestionBulb } from "@/components/svgs";
import { IoIosArrowForward } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { BsDot } from "react-icons/bs";

const QuestionItem: React.FC<QuestionType> = ({
  author_id,
  author_name,
  text,
  answers,
  followers,
  pass,
  created_at,
}) => {
  return (
    <div className="w-full bg-white shadow-lg rounded-md overflow-y-visible flex flex-col gap-3 overflow-x-hidden">
      <div
        style={{ borderBottomWidth: "0.3px" }}
        className="border-b-neutral-500 w-full px-3 py-2 flex flex-row items-center justify-between hover:bg-neutral-100 cursor-pointer"
      >
        <div className="flex flex-row gap-2 items-center">
          <QuestionBulb className="text-2xl" />
          <p className="text-xs md:text-sm text-neutral-500">
            Question for you
          </p>
        </div>
        <IoIosArrowForward size={18} className="text-neutral-600" />
      </div>
      <div className="w-full flex flex-row justify-between items-center px-3">
        <p className="w-full font-semibold text-neutral-800 hover:underline cursor-pointer">
          {text}
        </p>
        <IoClose size={18} className="text-neutral-600" />
      </div>

      <div className="w-full flex flex-row gap-1 px-3 items-center">
        <p className="text-neutral-400 font-semibold md:text-sm text-xs">
          {answers?.length || 54} answer
        </p>
        <BsDot size={18} className="text-neutral-400" />
        <p className="text-neutral-400 md:text-sm text-xs">
          Last followed 6h ago
        </p>
      </div>
    </div>
  );
};

export default QuestionItem;
