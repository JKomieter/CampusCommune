import QuestionModeBtns from "./QuestionModeBtns";
import PostModeBtns from "./PostModeBtns";

interface BottomActionsProps {
  mode: string;
  step: number;
  handleChangeStep: () => void;
  handleAddQuestion: () => void;
  setStep: (step: number) => void;
  setText: (text: string) => void;
}

const BottomActions: React.FC<BottomActionsProps> = ({
  mode,
  handleChangeStep,
  step,
  handleAddQuestion,
  setStep,
  setText,
}) => {
  return (
    <>
      {mode === "question" ? (
        <QuestionModeBtns
          step={step}
          handleChangeStep={handleChangeStep}
          handleAddQuestion={handleAddQuestion}
          setStep={setStep}
          setText={setText}
        />
      ) : (
        <PostModeBtns />
      )}
    </>
  );
};

export default BottomActions;
