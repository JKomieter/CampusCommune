"use client";
import { Avatar } from "@nextui-org/react";
import { BiMenu } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa";
import { FiMessageSquare, FiSearch } from "react-icons/fi";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config";


const Desktop = () => {

    const [user] = useAuthState(auth);

    return (
        <div className="hidden lg:flex w-full items-center justify-between gap-6">
            <div className="flex flex-row gap-1 items-center cursor-pointer">
                <FiMessageSquare size={25} />
                <span className="md:text-lg font-semibold">Comm<span className="text-[#FF725E] md:text-xl text-lg">X</span></span>
            </div>
            <div
                className="flex flex-row py-2 min-w-[150px] w-full gap-1 items-center"
            >
                <FiSearch size={24} className="text-neutral-400" />
                <input
                    type="text"
                    placeholder="Search discussions"
                    className="w-full outline-none bg-transparent text-neutral-800"
                />
            </div>
            <div className="flex w-full flex-row items-center gap-6">
                <div className="flex flex-row items-center gap-2 cursor-pointer hover:text-[#FF725E]">
                    <h3 className="hover:text-neutral-600 text-neutral-600">
                        Latest Topics
                    </h3>
                    <BiMenu size={19} />
                </div>
                <FaRegBell size={20} className="text-neutral-600" />
                <span className="">
                    <Avatar
                        src="https://publichealth.uga.edu/wp-content/uploads/2020/01/Thomas-Cameron_Student_Profile.jpg"
                        size="md"
                        className="z-0"
                    />
                </span>
            </div>
        </div>
    )
}

export default Desktop;