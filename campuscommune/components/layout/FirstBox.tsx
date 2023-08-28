import { FaRegQuestionCircle } from "react-icons/fa";
import { HiOutlinePencil, HiOutlinePencilAlt } from "react-icons/hi";
import { auth } from "@/firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useMemo } from "react";
import { useAskModalStore } from "@/store/askModalPopupStore";
import { Avatar } from "@nextui-org/react";


const FirstBox = () => {

  const [user] = useAuthState(auth);
  const { setOpen } = useAskModalStore();

  const getCurrentUserEmailFirstChar = useMemo(() => {
    let letter = "C";
    if (user) {
      const email = user?.email;
      letter = email?.charAt(0).toUpperCase() as string;
    }
    return letter;
  }, [user]);

  return (
    <div className="w-full py-1 px-1 rounded-md shadow-lg bg-white flex flex-col item-center gap-2">
      <div className="w-full flex flex-row items-center gap-3">
        <span className="pr-0.5">
          <Avatar
            src="https://publichealth.uga.edu/wp-content/uploads/2020/01/Thomas-Cameron_Student_Profile.jpg"
            size="md"
            className="z-0"
          />
        </span>
        <input
          onClick={() => setOpen(true)}
          type="text"
          placeholder="What's on your mind?"
          className="w-full px-2 py-1 rounded-2xl focus:outline-none bg-neutral-200"
        />
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
