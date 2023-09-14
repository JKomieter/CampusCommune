import { text } from "stream/consumers";
import PostMode from "./PostMode";
import QuestionMode from "./QuestionMode";

interface CreateStepOneProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<"question" | "post">>;
  image: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}

const modeStyles = {
  borderBottomWidth: "4px",
  borderBottomLeftRadius: "3px",
  borderBottomRightRadius: "3px",
};

const CreateStepOne: React.FC<CreateStepOneProps> = ({
  text,
  setText,
  mode,
  setMode,
  image,
  setImage,
  title,
  setTitle,
  description,
  setDescription,
}) => {

  return (
    <>
      <div
        className="w-full flex flex-row items-center border-b-neutral-400"
        style={{ borderBottomWidth: "0.6px" }}
      >
        <div
          className="w-full text-center text-sm font-medium text-neutral-700 border-blue-600 cursor-pointer py-2"
          style={mode === "question" ? modeStyles : {}}
          onClick={() => setMode("question")}
        >
          Add Question
        </div>
        <div
          onClick={() => setMode("post")}
          className="w-full text-center text-sm font-medium text-neutral-700 border-blue-600 cursor-pointer py-2"
          style={mode === "post" ? modeStyles : {}}
        >
          Create Post
        </div>
      </div>
      {mode === "question" ? (
        <QuestionMode text={text} setText={setText} />
      ) : (
        <PostMode 
        image={image} 
        setImage={setImage} 
        title={title} 
        setTitle={setTitle} 
        description={description}
        setDescription={setDescription}
        />
      )}
    </>
  );
};

export default CreateStepOne;
