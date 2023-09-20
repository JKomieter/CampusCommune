"use client";
import { FaRegQuestionCircle } from "react-icons/fa";
import { HiOutlinePencil, HiOutlinePencilAlt } from "react-icons/hi";
import { useAskModalStore } from "@/store/useAskModalPopupStore";
import { Avatar, Popover, PopoverContent, PopoverTrigger, useDisclosure } from "@nextui-org/react";
import AvatarPopoverContent from "../../components/AvatarPopoverContent";
import { currentUserType } from "@/types";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db, auth } from "@/firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";
import AskModal from "@/modals/questionModal/AskModal";


const FirstBox = () => {

  const [user] = useAuthState(auth);
  const usersCollectionRef = collection(db, "user")
  const [currentUser, setCurrentUser] = useState<currentUserType>({} as currentUserType);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    const getCurrentUser = async () => {
      const userRef = query(usersCollectionRef, where("email", "==", user?.email || ""));
      const querySnapshot = await getDocs(userRef);
      setCurrentUser(querySnapshot.docs.map((doc) => doc.data())[0] as currentUserType);
    };

    getCurrentUser();
  }, [user]);


  return (
    <div className="w-full py-1 px-1 rounded-md shadow-lg bg-white flex flex-col item-center gap-2">
      <div className="w-full flex flex-row items-center gap-3">
        <div className="pr-0.5 cursor-pointer">
          <Popover
            showArrow
            placement="bottom" color="default">
            <PopoverTrigger>
              <Avatar
                src={currentUser?.profile_pic || "https://publichealth.uga.edu/wp-content/uploads/2020/01/Thomas-Cameron_Student_Profile.jpg"} 
                size="md"
                className="z-0"
              />
            </PopoverTrigger>
            <PopoverContent className="rounded-sm px-0 shadow-lg">
              <AvatarPopoverContent
                user_photo={currentUser?.profile_pic}
                user_name={currentUser?.full_name}
                user_email={currentUser?.email}
              />
            </PopoverContent>
          </Popover>
        </div>
        <input
          onClick={() => onOpen()}
          type="text"
          placeholder="What's on your mind?"
          className="w-full px-2 py-1 rounded-2xl focus:outline-none bg-neutral-200"
        />
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} >
          <ModalContent className="rounded-md xl:min-w-[50%]
        lg:min-w-[65%] md:min-w-[80%] sm:min-w-[90%] min-w-[100%] bg-neutral-100 md:min-h-[78%] min-h-[80%] overflow-y-scroll">
              {
                (onClose) => (
                  <ModalBody>
                    <ModalHeader>Make an impact!</ModalHeader>
                    <AskModal  />
                  </ModalBody>
                )
              }
            </ModalContent>
        </Modal>
      </div>
      <div className="flex items-center justify-evenly w-full">
        <div
          className="flex flex-row gap-2 cursor-pointer items-center justify-center 
           transition duration-500 p-1 w-full border-r-neutral-700"
          style={{ borderRightWidth: "2px" }}
        >
          <FaRegQuestionCircle size={18} className="text-neutral-700" />
          <p className="text-neutral-700 text-sm">Ask</p>
        </div>
        <div
          className="flex flex-row gap-2 cursor-pointer items-center justify-center 
           transition duration-500 p-1 w-full border-r-neutral-700"
          style={{ borderRightWidth: "2px" }}
        >
          <HiOutlinePencilAlt size={18} className="text-neutral-700" />
          <p className="text-neutral-700 text-sm">Answer</p>
        </div>
        <div
          className="flex flex-row gap-2 cursor-pointer items-center justify-center 
         transition duration-500 p-1 w-full"
        >
          <HiOutlinePencil size={18} className="text-neutral-700" />
          <p className="text-neutral-700 text-sm">Post</p>
        </div>
      </div>
    </div>
  );
};

export default FirstBox;
