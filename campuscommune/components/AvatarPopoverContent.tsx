import { Avatar, user } from "@nextui-org/react"
import { BiBookmarks } from "react-icons/bi";
import { BsStars } from "react-icons/bs";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { LuMessageSquare } from "react-icons/lu";
import { MdKeyboardArrowRight, MdOutlineAttachMoney } from "react-icons/md";
import { RiDraftLine } from "react-icons/ri";
import { VscGraph } from "react-icons/vsc";
import { useRouter } from "next/navigation";
import { Switch } from "@nextui-org/react";


interface AvatarPopoverContentProps {
    user_photo: string;
    user_name: string;
    user_email: string;
}

const topItems = [
    {
        name: "Messages",
        icon: LuMessageSquare,
        link: "/messages",
    },
    {
        name: "Create Ad",
        icon: HiOutlineSpeakerphone,
        link: "/create-ad",
    },
    {
        name: "Monetization",
        icon: MdOutlineAttachMoney,
        link: "/monetization",
    },
    {
        name: "Your contents and stats",
        icon: VscGraph,
        link: "/stats",
    },
    {
        name: "Bookmarks",
        icon: BiBookmarks,
        link: "/bookmarks",
    },
    {
        name: "Drafts",
        icon: RiDraftLine,
        link: "/drafts",
    },
    {
        name: "Try Campus Commune Premium",
        icon: BsStars,
        link: "/premium",
    }
]

const bottomItems = [
    {
        name: "Settings",
        link: "/settings",
    },
    {
        name: "Languages",
        link: "/languages",
    },
    {
        name: "Help",
        link: "/help",
    },
    {
        name: "Logout",
        link: "/logout",
    }
]

const AvatarPopoverContent: React.FC<AvatarPopoverContentProps> = ({
    user_photo,
    user_name,
    user_email,
}) => {

    const router = useRouter();
    console.log(user_name)

    return (
        <div className="flex flex-col justify-start">
            <div
                onClick={() => router.push(`/profile/${user_name.split(" ").join("-")}`)}
                style={{ borderBottomWidth: "0.4px" }}
                className="flex flex-col gap-2 px-3 py-5 cursor-pointer duration-200 transition-all hover:opacity-60 border-neutral-600 w-full">
                <span>
                    <Avatar
                        src={user_photo || "https://publichealth.uga.edu/wp-content/uploads/2020/01/Thomas-Cameron_Student_Profile.jpg"}
                        size="md"
                    />
                </span>
                <div className="flex flex-row w-full items-center justify-between gap-14">
                    <p className="text-lg font-semibold text-neutral-600">{user_name}</p>
                    <MdKeyboardArrowRight size={20} className="text-neutral-600" />
                </div>
            </div>
            <div className="flex flex-col w-full justify-start">
                {topItems.map((item) => (
                    <div
                        key={item.name}
                        onClick={() => router.push(item.link)}
                        className="w-full p-3 cursor-pointer hover:bg-neutral-100 flex flex-row gap-1">
                        <item.icon size={20} className="text-neutral-600" />
                        <p className="text-sm text-neutral-600">{item.name}</p>
                    </div>
                ))}
            </div>
            <div className="flex flex-col w-full justify-start">
                <span className="text-xs px-3 py-1 text-neutral-600 flex flex-row items-center justify-between cursor-pointer duration-200 transition-all hover:bg-neutral-100 border-neutral-600">
                    <p className="text-xs text-neutral-600">Dark mode</p>
                    <Switch />
                </span>
                {bottomItems.map((item) => (
                    <p key={item.name} className="text-xs px-3 py-1 text-neutral-600 cursor-pointer duration-200 transition-all hover:bg-neutral-100 border-neutral-600">{item.name}</p>
                ))}
            </div>
        </div>
    )
}

export default AvatarPopoverContent;