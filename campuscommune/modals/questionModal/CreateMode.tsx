import React, { useState } from "react";
import CreateStepOne from "./CreateStepOne";
import LoadingMode from "./LoadingMode";
import FinalStep from "./FinalStep";

interface CreateModeProps {
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<"question" | "post">>;
  step: number;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  image: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
}



const CreateMode: React.FC<CreateModeProps> = ({
  mode,
  setMode, 
  step, 
  text, 
  setText, 
  image, 
  setImage, 
  title, 
  setTitle, 
  description, 
  setDescription,
  setCategories,
}) => {

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
        setCategories={setCategories}
      />
    ),
    2: <LoadingMode />,
    3: <FinalStep text={text} setCategories={setCategories} />,
  } as Record<number, JSX.Element>;

  return (
    <>
      {Step[step]}
    </>
  );
};

export default CreateMode;
