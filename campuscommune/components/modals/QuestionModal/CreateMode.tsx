import React, { useState } from "react";
import CreateStepOne from "./CreateStepOne";
import LoadingMode from "./LoadingMode";
import FinalStep from "./FinalStep";

interface CreateModeProps {
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<"question" | "post">>;
  step: number;
  text: string;
  setText: (text: string) => void;
  image: File | undefined;
  setImage: React.Dispatch<React.SetStateAction<File | undefined>>;
  title: string;
  setTitle: (title: string) => void;
  description: string;
  setDescription: (description: string) => void;
}


const CreateMode: React.FC<CreateModeProps> = ({ mode, setMode, step, text, setText, image, setImage, title, setTitle, description, setDescription }) => {

  const Step = {
    1: (
      <CreateStepOne
        text={text}
        setText={setText}
        mode={mode}
        setMode={setMode}
        image={image}
        setImage={setImage}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
      />
    ),
    2: <LoadingMode />,
    3: <FinalStep text={text} />,
  } as Record<number, JSX.Element>;

  return (
    <>
      {Step[step]}
    </>
  );
};

export default CreateMode;
