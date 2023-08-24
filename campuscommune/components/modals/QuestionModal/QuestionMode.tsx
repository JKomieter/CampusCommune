import { Avatar } from "@nextui-org/react";
import { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";

interface QuestionModeProps {
    text: string;
    setText: (text: string) => void;
}

const QuestionMode: React.FC<QuestionModeProps> = ({
    text,
    setText
}) => {

    return (
      <>
        <div
          className="w-full flex items-center justify-center p-3"
          style={{ lineHeight: "1.7rem" }}
        >
          <div className="bg-blue-100 p-3 w-full rounded-md text-blue-600">
            <h4 className="text-sm font-bold">
              Tips on getting good answers quickly
            </h4>
            <ul className="text-sm ml-2 mt-2 gap-2">
              <li>Make sure your question has not been asked already</li>
              <li>Keep your question short and to the point</li>
              <li>Double-check grammar and spelling</li>
            </ul>
          </div>
        </div>
        <div className="w-full flex items-center gap-2 p-3">
          <Avatar
            src="https://publichealth.uga.edu/wp-content/uploads/2020/01/Thomas-Cameron_Student_Profile.jpg"
            size="sm"
          />
          <BsFillPlayFill size={15} className="text-neutral-700" />
          <div
            className="rounded-2xl py-1 px-1.5 flex items-center justify-between gap-1.5 
            border-neutral-700 cursor-pointer hover:bg-neutral-200 transition duration-300"
            style={{ borderWidth: "0.4px" }}
          >
            <GoPeople size={17} className="text-neutral-700" />
            <p className="text-xs text-neutral-700">Public</p>
            <IoIosArrowDown size={15} className="text-neutral-700" />
          </div>
        </div>
        <div className="p-3 w-full h-full">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Start your question with "What", "How", "Why", etc.'
            className="outline-none py-2 h-full focus:outline-none md:text-lg text-sm bg-neutral-100 w-full "
          />
        </div>
      </>
    );
}

export default QuestionMode;