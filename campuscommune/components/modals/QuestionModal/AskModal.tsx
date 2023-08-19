"use client";
import { useAskModalStore } from "@/store/askModalPopupStore";
import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import { IoClose } from "react-icons/io5";
import QuestionMode from "./QuestionMode";
import PostMode from "./PostMode";
import { db, auth } from "@/firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import BottomActions from "./BottomActions";
import CreateMode from "./CreateMode";

const AskModal = () => {
  const { isOpen, setOpen } = useAskModalStore();
  const [user] = useAuthState(auth);
  const [mode, setMode] = useState<"question" | "post">("question");
  const [ step, setStep ] = useState<number>(1);
  const [text, setText] = useState<string>("");


  const handleAddQuestion = async () => {};

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
              setOpen(false)
              setStep(1)}}
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
              handleChangeStep={handleChangeStep}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AskModal;
