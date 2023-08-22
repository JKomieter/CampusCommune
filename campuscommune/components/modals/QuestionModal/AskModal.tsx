"use client";
import { useAskModalStore } from "@/store/askModalPopupStore";
import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import { IoClose } from "react-icons/io5";
import { db, auth } from "@/firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import BottomActions from "./Buttons/BottomActions";
import CreateMode from "./CreateMode";
import { addDoc, collection } from "firebase/firestore";
import toast from "react-hot-toast";
import { usePostLoadingStore } from "@/store/postLoading";

// component for the modal that pops up when the user clicks on the "Ask a question" button
const AskModal = () => {
  const { isOpen, setOpen } = useAskModalStore();
  const [user] = useAuthState(auth);
  const [mode, setMode] = useState<"question" | "post">("question");
  const [ step, setStep ] = useState<number>(1);
  const [text, setText] = useState<string>("");
  const questionsCollectionRef = collection(db, "questions");

  const { setPostLoading } = usePostLoadingStore();

  console.log("user", user);

  const handleAddQuestion = useCallback(async () => {
    if (text.length === 0) return;
    setPostLoading(true);

    const Question = {
      text,
      author_id: user?.uid || "",
      author_name: user?.displayName || "",
      created_at: new Date(),
      type: "question",
    };

    await addDoc(questionsCollectionRef, Question);
    setOpen(false);
    setStep(1);
    setText("");

    setTimeout(() => {
      setPostLoading(false);
    }, 2000);

    toast.success("Question added successfully!");
    
  }, [text]);

  const handleChangeStep = useCallback(() => {
    if (text.length === 0) return;
    setStep(2);
    setTimeout(() => {
      setStep(3);
    }, 3000);
  }, [text]);

  if (!isOpen) return null;

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black bg-opacity-80 z-50 fixed ">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2 }}
        className={`md:rounded-md rounded-2xl xl:w-[50%]
            lg:w-[65%] md:w-[80%] sm:w-[90%] w-[100%] bg-neutral-100 md:h-[78%] h-[99%] flex flex-col gap-2`}
      >
        <div className="w-full flex item-center justify-between p-3">
          <IoClose
            size={25}
            className="cursor-pointer"
            onClick={() => {
              setOpen(false);
              setStep(1);
              setText("");
            }}
          />
        </div>
        <CreateMode
          mode={mode}
          setMode={setMode}
          step={step}
          text={text}
          setText={setText}
        />
        <div className="w-full h-full flex items-end justify-end">
          <div
            className="py-3 px-3 w-full border-t-neutral-700 flex items-end justify-end gap-3"
            style={{ borderTopWidth: "0.5px" }}
          >
            <BottomActions
              mode={mode}
              step={step}
              handleChangeStep={handleChangeStep}
              handleAddQuestion={handleAddQuestion}
              setStep={setStep}
              setText={setText}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AskModal;
