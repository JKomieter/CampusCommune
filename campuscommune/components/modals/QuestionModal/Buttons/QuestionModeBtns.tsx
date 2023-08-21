import { useAskModalStore } from "@/store/askModalPopupStore";

interface QuestionModeBtnsProps {
  handleChangeStep: () => void;
  step: number;
  handleAddQuestion: () => void;
  setStep: (step: number) => void;
  setText: (text: string) => void;
}

const QuestionModeBtns: React.FC<QuestionModeBtnsProps> = ({
  handleChangeStep,
  step,
  handleAddQuestion,
  setStep,
  setText,
}) => {
  const { setOpen } = useAskModalStore();

  const ButtonSteps = {
    1: (
      <button
        onClick={handleChangeStep}
        className="flex items-center justify-center bg-blue-600 rounded-3xl"
      >
        <p className="text-neutral-100 text-sm font-semibold px-3 py-2">
          Add question
        </p>
      </button>
    ),
    3: (
      <button
        onClick={handleAddQuestion}
        className="flex items-center justify-center bg-blue-600 rounded-3xl"
      >
        <p className="text-neutral-100 text-sm font-semibold px-3 py-2">Done</p>
      </button>
    ),
  } as Record<number, JSX.Element>;

  return (
    <div className="flex items-center gap-3">
      <span
        className="text-sm text-neutral-600 cursor-pointer"
        onClick={() => {
          setOpen(false);
          setStep(1);
          setText("");
        }}
      >
        Cancel
      </span>
      {ButtonSteps[step]}
    </div>
  );
};

export default QuestionModeBtns;
