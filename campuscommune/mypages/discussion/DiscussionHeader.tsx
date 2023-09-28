"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { LuMessageSquarePlus } from "react-icons/lu";
import { useDiscussionSidebarStore } from "@/store/useDiscussionSidebarStore";
import useGetCurrentUser from "@/hooks/useGetCurrentUser";


const DiscussionHeader = () => {
    const { toggleSidebar } = useDiscussionSidebarStore();
    const { currentUser } = useGetCurrentUser();


    return (
        <div className="flex w-full items-center justify-between gap-6 mt-20 lg:px-36 md:px-16 sm:px-12 px-3 py-2 bg-neutral-400">
            <span onClick={() => toggleSidebar(true)} className="md:hidden flex w-full">
                <GiHamburgerMenu size={24}/>
            </span>
            <div className="flex flex-row gap-2 items-center cursor-pointer justify-center">
                <span onClick={() => toggleSidebar(true)} className="hidden md:flex w-full">
                    <GiHamburgerMenu size={25} />
                </span>
                <span className="md:text-lg font-semibold">Comm<span className="text-[#FF725E] md:text-xl text-lg">X</span></span>
            </div>
            <span className="md:hidden flex w-full justify-end">
                <FiSearch size={24} className="text-neutral-400 " />
            </span>  
            <div
                className="md:flex hidden flex-row py-2 min-w-[380px] w-full gap-1 items-center"
            >
                <FiSearch size={24} className="text-neutral-400" />
                <input
                    type="text"
                    placeholder="Search discussions"
                    className="w-full outline-none bg-transparent text-neutral-800"
                />
            </div>
            <div className="md:flex hidden flex-row items-center justify-end gap-2 cursor-pointer hover:text-[#FF725E] w-full">
                <h3 className="hover:text-neutral-600 text-neutral-600 text-sm xl:flex hidden">
                    Latest Topics
                </h3>
                <GiHamburgerMenu size={25} />
            </div>
            <div className="md:flex hidden flex-row items-center gap-2 text-neutral-600 justify-center">
                <p className="lowercase">
                    {currentUser?.username}
                </p>
                <IoIosArrowDown size={20} />
            </div>
            <div className="w-full text-right md:flex hidden gap-1 items-center justify-end cursor-pointer ">
                <LuMessageSquarePlus size={29}  />
                <p className="text-neutral-600 text-sm md:flex hidden">
                    Start a discussion
                </p>
            </div>
        </div>
    )
}

export default DiscussionHeader;