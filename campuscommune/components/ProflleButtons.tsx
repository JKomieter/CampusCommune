import { Button, Popover, PopoverTrigger, PopoverContent, Chip, } from "@nextui-org/react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaRegBell, FaRegQuestionCircle } from "react-icons/fa";
import { PiDotsThreeOutlineBold } from "react-icons/pi";


const ProfileButtons = () => {
    return (
        <div className="w-full flex flex-row gap-2 mt-4">
            <button className="flex flex-row gap-1 justify-center items-center rounded-3xl px-3 bg-blue-500">
                <AiOutlineUserAdd size={15} color="white" />
                <span className="text-sm text-white">Follow</span>
            </button>
            <button 
            style={{ borderWidth: "0.7px" }}
            className="sm:flex hidden flex-row gap-1 justify-center items-center rounded-3xl px-3 border-neutral-500" >
                <FaRegBell size={15} className="text-neutral-700" />
                <span className="text-sm text-neutral-700">Notify me</span>
            </button>
            <button 
                style={{ borderWidth: "0.7px" }}
                className="flex flex-row gap-1 justify-center items-center rounded-3xl px-3 border-neutral-500" >
                <FaRegQuestionCircle size={15} color="black" />
                <span className="text-xs">Ask</span>
            </button>
            <div className="">
                <Popover showArrow>
                    <PopoverTrigger>
                        <span style={{ borderWidth: "1px" }} 
                        className="rounded-full p-2 flex justify-center items-center border-neutral-400 cursor-pointer">
                            <PiDotsThreeOutlineBold size={20} className="text-neutral-700" />
                        </span>
                    </PopoverTrigger>
                    <PopoverContent className="rounded-md">
                        <div className="flex flex-col">
                            <div className="px-1 py-1 hover:underline cursor-pointer w-full">
                                Notify me
                            </div>
                            <div className="px-1 py-1 hover:underline cursor-pointer w-full">
                                Mute this user
                            </div>
                            <div className="px-1 py-1 hover:underline cursor-pointer w-full">
                                Block
                            </div>
                            <div className="px-1 py-1 hover:underline cursor-pointer w-full">
                                Report
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    )
};


export default ProfileButtons;