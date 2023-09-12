"use client";
import { useAskModalStore } from "@/store/useAskModalPopupStore";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { db, auth } from "@/firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import BottomActions from "../Buttons/BottomActions";
import CreateMode from "./CreateMode";
import { addDoc, collection, getDocs, onSnapshot, query, where } from "firebase/firestore";
import toast from "react-hot-toast";
import { usePostLoadingStore } from "@/store/usePostLoading";
import { currentUserType } from "@/types";
import useGetCurrentUser from "@/services/useGetCurrentUser";



// component for the modal that pops up when the user clicks on the "Ask a question" button
const AskModal = () => {
  const { isOpen, setOpen } = useAskModalStore();
  const [user] = useAuthState(auth);
  const [mode, setMode] = useState<"question" | "post">("question");
  const [step, setStep] = useState<number>(1);
  const [text, setText] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<string>("");
  // const [currentUser, setCurrentUser] = useState<currentUserType>({} as currentUserType);
  const questionsCollectionRef = collection(db, "questions");
  const postsCollectionRef = collection(db, "posts");
  const usersCollectionRef = collection(db, "user");
  const { setPostLoading } = usePostLoadingStore();
  const { currentUser } = useGetCurrentUser();

  // useEffect(() => {
  //   const getCurrentUser = async () => {
  //     const userRef = query(usersCollectionRef, where("email", "==", user?.email || ""));
  //     const querySnapshot = await getDocs(userRef);
  //     setCurrentUser(querySnapshot.docs.map((doc) => doc.data())[0] as currentUserType);
  //   };

  //   getCurrentUser();
  // }, [user]);


  const handleAddQuestion = useCallback(async () => {
    if (text.length === 0) return;
    try {
      setPostLoading(true);

      const Question = {
        text,
        author_id: currentUser.email,
        author_name: currentUser.username,
        author_email: currentUser.email,
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

  if (!isOpen) return null;

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black bg-opacity-80 z-50 fixed ">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2 }}
        className={`md:rounded-md rounded-2xl xl:w-[50%]
            lg:w-[65%] md:w-[80%] sm:w-[90%] w-[100%] bg-neutral-100 md:h-[78%] h-[80%] flex flex-col gap-2`}
      >
        <div data-testid="close-icon"
        className="w-full flex item-center justify-between p-3">
          <IoClose
            size={28}
            className="cursor-pointer hover:bg-neutral-200 rounded-full p-1"
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
          image={image}
          setImage={setImage}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
        />
        <div className="w-full flex items-end justify-end">
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
              image={image}
              setImage={setImage}
              handleAddPost={handleAddPost}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AskModal;
