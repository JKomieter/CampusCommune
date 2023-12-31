import { currentUserType } from "@/types";
import { Avatar } from "@nextui-org/react";
import { BiPencil } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import { TbShare2 } from "react-icons/tb";
import { SiFacebook } from "react-icons/si";
import ProfileAbout from "./ProfileAbout";
import ProfileBtns from "./ProfileBtns";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { FaTwitter } from "react-icons/fa";


const Hero: React.FC<currentUserType> = ({
    full_name,
    email,
    profile_pic,
    followers,
    followings,
    join_date,
    major,
    answers_given,
    questions_asked,
    level,
    about_me,
}) => {

    const levels = {
        1: "Freshman",
        2: "Sophomore",
        3: "Junior",
        4: "Senior",
    } as Record<number, string>;


    return (
        <div className="flex flex-col gap-4 w-full ">
            <div className="flex flex-row gap-2 items-start w-full">
                <div className="pr-2">
                    <Avatar
                        src={profile_pic || "https://collegelifemadeeasy.com/wp-content/uploads/2023/01/black-women-scholarships.jpg"} 
                        size="lg"
                        alt="Profile"
                        style={{width: "120px", height: "120px"}}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="text-neutral-700 font-bold text-lg md:text-xl lg:text-2xl">
                        {full_name}
                    </h2>
                    <div className="italic md:text-sm text-xs">
                    {major}, {levels[level]}
                    </div>
                    <div className="flex flex-row items-center gap-1">
                        <p className="md:text-sm text-xs text-neutral-500">
                            {followers?.length || 0} followers
                        </p>
                        <BsDot size={14} className="text-neutral-400" />
                        <p className="md:text-sm text-xs text-neutral-500">
                            {followings?.length || 0} following
                        </p>
                    </div>
                   <ProfileBtns email={email} />
                </div>
            </div>
            <ProfileAbout about_me={about_me} />
            <div className="flex flex-row gap-3 items-center justify-between w-full">
                <span
                    style={{ borderWidth: "1px" }}
                    className="w-full py-2 rounded-2xl flex items-center justify-center duration-200 transition-all
                     border-neutral-400 gap-1 cursor-pointer hover:bg-neutral-200">
                    <BiPencil size={18} className="text-neutral-600" />
                    <p className="md:text-sm text-xs text-neutral-600">
                        Edit Profile
                    </p>
                </span>
                <Popover>
                    <PopoverTrigger>
                        <span
                            style={{ borderWidth: "1px" }}
                            className="rounded-full p-2 border-neutral-400 cursor-pointer flex 
                            items-center justify-center hover:bg-neutral-200 duration-200 transition-all">
                            <TbShare2 size={22} className="text-neutral-600" />
                        </span>
                    </PopoverTrigger>
                    <PopoverContent className="rounded-md">
                        <div className="flex flex-col ">
                            <div className="flex flex-row gap-1 items-center p-2 w-full hover:underline cursor-pointer">
                                <SiFacebook size={10} className="text-[#4267B2]" />
                                <p className="md:text-xs text-[10px] text-neutral-600">
                                    Facebook
                                </p>
                            </div>
                            <div className="flex flex-row gap-1 items-center p-2 w-full hover:underline cursor-pointer">
                                <FaTwitter size={10} className="text-[#26a7de]" />
                                <p className="md:text-xs text-[10px] text-neutral-600">
                                    Twitter
                                </p>
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    )
};

export default Hero;
