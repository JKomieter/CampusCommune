import { currentUserType } from "@/types";
import { Avatar } from "@nextui-org/react";
import { useMemo } from "react";
import { BiPencil } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import { TbShare2 } from "react-icons/tb";
import ProfileAbout from "./ProfileAbout";
import ProfileBtns from "./ProfileBtns";



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
        <div className="flex flex-col gap-4 w-full md:basis-2/3">
            <div className="flex flex-row gap-2 items-start w-full">
                <div className="pr-2">
                    <Avatar
                        src={profile_pic || "https://publichealth.uga.edu/wp-content/uploads/2020/01/Thomas-Cameron_Student_Profile.jpg"} 
                        size="lg"
                        className="md:w-48 md:h-48 sm:w-32 sm:h-32 w-24 h-24"
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
                <span 
                style={{ borderWidth: "1px" }}
                className="rounded-full p-2 border-neutral-400 cursor-pointer flex 
                items-center justify-center hover:bg-neutral-200 duration-200 transition-all">
                    <TbShare2 size={22} className="text-neutral-600" />
                </span>
            </div>
        </div>
    )
};

export default Hero;
