"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { LuMessageSquarePlus } from "react-icons/lu";
import { useDiscussionSidebarStore } from "@/store/useDiscussionSidebarStore";
import useGetCurrentUser from "@/hooks/useGetCurrentUser";
import { BiSearch } from "react-icons/bi";
import { Button } from "@nextui-org/react";
import { RiDiscussLine } from "react-icons/ri";


const DiscussionHeader = () => {
    const { toggleSidebar } = useDiscussionSidebarStore();
    const { currentUser } = useGetCurrentUser();


    return (
        <div className="flex w-full items-center justify-between 
            gap-6 mt-20 lg:px-36 md:px-16 sm:px-12 px-3 py-2 bg-neutral-400"
        >
            <div className="flex flex-row gap-2 items-center">
                <GiHamburgerMenu 
                    size={20}
                    className="text-2xl cursor-pointer hover:bg-orange-500"
                    onClick={() => toggleSidebar(true)} 
                />
                <div className="text-lg font-semibold">
                    Comm<span className="text-[#FF725E] font-bold">X</span>
                </div>
            </div>
            <div className="flex flex-row gap-1 items-center">
                <BiSearch size={20} className="text-2xl cursor-pointer hover:bg-orange-500" />
                <input 
                    type="text" 
                    placeholder="Search for discussion" 
                    className="bg-transparent outline-none border-none text-lg font-semibold"
                />
            </div>
            <div className="">
                
            </div>
            <div>
                <Button color="primary" variant="bordered" startContent={<RiDiscussLine size={18} />}>
                    Start discussion
                </Button>
            </div>
        </div>
    )
}

export default DiscussionHeader;