import QuestionModeBtns from "./QuestionModeBtns";
import PostModeBtns from "./PostModeBtns";

interface BottomActionsProps {
  mode: string;
  step: number;
  handleChangeStep: () => void;
  handleAddQuestion: () => void;
  setStep: (step: number) => void;
  setText: (text: string) => void;
  image: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
  handleAddPost: () => void;
}

const BottomActions: React.FC<BottomActionsProps> = ({
  mode,
  handleChangeStep,
  step,
  handleAddQuestion,
  handleAddPost,
  setStep,
  setText,
  image,
  setImage,
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
        <PostModeBtns
          setImage={setImage}
          image={image}
          handleAddPost={handleAddPost}
        />
      )}
    </>
  );
};

export default BottomActions;
