import { useCallback, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import toast from "react-hot-toast";


const AnswerModal = ({
    onClose,
    author_name,
    text,
    answer,
    setAnswer,
}: {
    onClose: () => void;
    author_name: string;
    text: string;
    answer: string;
    setAnswer: React.Dispatch<React.SetStateAction<string>>;
}) => {
    
    const firstLetter = author_name.charAt(0).toUpperCase() || "A";

    return (
        <div className="flex flex-col mt-4 gap-3">
            <div className="flex flex-row gap-2">
                <div className="pr-1">
                    <span className="w-12 h-12 rounded-full flex text-xl font-semibold
                    justify-center items-center bg-blue-700 text-neutral-100">
                        {firstLetter}
                    </span>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-base font-semibold text-neutral-700 capitalize">
                        {author_name}
                    </p>
                    <div
                        style={{ borderWidth: "0.5px" }}
                        className="rounded-2xl px-2 py-1 border-neutral-600 flex flex-row items-center gap-2"
                    >
                        <p className="text-sm text-neutral-600">Choose credential</p>
                        <MdKeyboardArrowRight size={16} className="text-neutral-600" />
                    </div>
                </div>
            </div>
            <div className="text-neutral-700 text-lg font-semibold">
                {text}
            </div>
            <div>
                <textarea
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    className="w-full h-52 rounded-md border-none py-2 focus:outline-none"
                    placeholder="Write your answer here..."
                />
            </div>
        </div>
    )
};

export default AnswerModal;