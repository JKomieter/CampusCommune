import { useAskModalStore } from "@/store/askModalPopupStore";
import { PiImagesLight } from "react-icons/pi";

interface BottomActionsProps {
  mode: string;
  handleChangeStep: () => void;
}

const BottomActions: React.FC<BottomActionsProps> = ({ mode, handleChangeStep }) => {
  const { setOpen } = useAskModalStore();

  return (
    <>
      {mode === "question" ? (
        <div className="flex items-center gap-3">
          <span
            className="text-sm text-neutral-600 cursor-pointer"
            onClick={() => setOpen(false)}
          >
            Cancel
          </span>
          <button 
            onClick={handleChangeStep}
          className="flex items-center justify-center bg-blue-600 rounded-3xl">
            <p className="text-neutral-100 text-sm font-semibold px-3 py-2">
              Add question
            </p>
          </button>
        </div>
      ) : (
        <div className="w-full flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-3 ">
            <p
              className="text-neutral-700 font-semibold p-1 cursor-pointer transition-all duration-300 rounded-sm text-sm hover:border-blue-700"
              style={{ borderWidth: "1px" }}
            >
              Aa
            </p>
            <span
              className="p-1 rounded-sm hover:border-blue-700 cursor-pointer transition-all duration-300 "
              style={{ borderWidth: "1px" }}
            >
              <PiImagesLight size={19} className="text-neutral-700" />
            </span>
          </div>
          <button className="flex items-center justify-center bg-blue-600 rounded-3xl">
            <p className="text-neutral-100 text-sm font-semibold px-3 py-2">
              Post
            </p>
          </button>
        </div>
      )}
    </>
  );
};

export default BottomActions;
