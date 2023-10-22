"use client";
import { useAskModalStore } from "@/store/useAskModalPopupStore";
import { useCallback, useState } from "react";
import { db } from "@/firebase/config";
import { addDoc, collection } from "firebase/firestore";
import toast from "react-hot-toast";
import { usePostLoadingStore } from "@/store/usePostLoading";
import useGetCurrentUser from "@/hooks/useGetCurrentUser";
import BottomActions from "../buttons/BottomActions";
import CreateMode from "./CreateMode";
import { ModalFooter } from "@nextui-org/react";
import { Answer, QuestionType } from "@/types";



// component for the modal that pops up when the user clicks on the "Ask a question" button
const AskModal = () => {
  const { isOpen, setOpen } = useAskModalStore();
  const [mode, setMode] = useState<"question" | "post">("question");
  const [step, setStep] = useState<number>(1);
  const [text, setText] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const questionsCollectionRef = collection(db, "questions");
  const postsCollectionRef = collection(db, "posts");
  const { setPostLoading } = usePostLoadingStore();
  const { currentUser } = useGetCurrentUser();
  const [categories, setCategories] = useState<string[]>([]);


  const handleAddQuestion = useCallback(async () => {
    if (text.length === 0) return;
    try {
      setPostLoading(true);
      console.log([...categories]);
      const Question = {
        text,
        author_id: currentUser.email,
        author_name: currentUser.username,
        author_email: currentUser.email,
        created_at: new Date(),
        type: "question",
        category: categories,
        pass: false,
        answers: [] as Answer[],
      } as unknown as QuestionType;

      await addDoc(questionsCollectionRef, Question);
      setOpen(false);
      setStep(1);
      setText("");

      setTimeout(() => {
        setPostLoading(false);
      }, 2000);

      toast.success("Question added successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Error adding question");
    }

  }, [text]);

  const handleAddPost = useCallback(async () => {
    if (title.split("").length < 1 && description.split("").length < 1) return;
    try {
      setPostLoading(true);

      const Post = {
        title: title,
        body: description,
        author_email: currentUser.email,
        author_major: currentUser.major,
        author_name: currentUser.username,
        created_at: new Date(),
        type: "post",
        image: image as string,
      };

      await addDoc(postsCollectionRef, Post);
      setOpen(false);
      setStep(1);
      setText("");

      setTimeout(() => {
        setPostLoading(false);
      }, 2000);

      toast.success("Post added successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Error adding post");
    }
    
  }, []);

  const handleChangeStep = useCallback(() => {
    if (text.length === 0) return;
    setStep(2);
    setTimeout(() => {
      setStep(3);
    }, 3000);
  }, [text]);


  return (
      <div
        className={`flex flex-col gap-2 overflow-y-scroll `}
      >
        <CreateMode
          mode={mode}
          setMode={setMode}
          step={step}
          text={text}
          setText={setText}
          image={image}
          setImage={setImage}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          setCategories={setCategories}
        />
        <ModalFooter 
        style={{ borderTopWidth: "0.5px" }}
        className="w-full py-3 px-3 border-t-neutral-700 flex items-end justify-end gap-3">
            <BottomActions
              mode={mode}
              step={step}
              handleChangeStep={handleChangeStep}
              handleAddQuestion={handleAddQuestion}
              setStep={setStep}
              setText={setText}
              image={image}
              setImage={setImage}
              handleAddPost={handleAddPost}
            />
        </ModalFooter>
      </div>
  );
};

export default AskModal;
