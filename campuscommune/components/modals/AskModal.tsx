"use client";
import { useAskModalStore } from "@/store/askModalPopupStore";
import { motion } from "framer-motion";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import QuestionMode from "./QuestionMode";
import PostMode from "./PostMode";
import { db, auth } from "@/firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import BottomActions from "./BottomActions";

const AskModal = () => {
  const { isOpen, setOpen } = useAskModalStore();
  const [mode, setMode] = useState<"question" | "post">("question");
  const [text, setText] = useState<string>("");
  const [user] = useAuthState(auth);

  const handleAddQuestion = async () => {};

  const modeStyles = {
    borderBottomWidth: "4px",
    borderBottomLeftRadius: "3px",
    borderBottomRightRadius: "3px",
  };

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
            onClick={() => setOpen(false)}
          />
          <button className="flex items-center justify-center bg-blue-600 rounded-3xl">
            <p className="text-neutral-100 font-semibold px-3 py-2">Add</p>
          </button>
        </div>
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
          <PostMode />
        )}
        <div className="w-full h-full flex items-end justify-end">
          <div
            className="py-3 px-3 w-full border-t-neutral-700 flex items-end justify-end gap-3"
            style={{ borderTopWidth: "0.5px" }}
          >
            <BottomActions
              mode={mode}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AskModal;
