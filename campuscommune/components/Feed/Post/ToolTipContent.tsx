import { BiCopy, BiBookmark } from "react-icons/bi";
import { TbMessage2Cancel } from "react-icons/tb";
import { TfiMenuAlt } from "react-icons/tfi";
import { PiWarningBold } from "react-icons/pi";

const ToolTipContentItems = [
    {
        icon: BiCopy,
        text: "Copy link"
    },
    {
        icon: TbMessage2Cancel,
        text: "Not interested in this"
    },
    {
        icon: BiBookmark,
        text: "Bookmark"
    }, 
    {
        icon: TfiMenuAlt,
        text: "Log"
    }, 
    {
        icon: PiWarningBold,
        text: "Report"
    }
];


const ToolTipContent = () => {
    return (
        <div className="flex flex-col items-center justify-start">
            {ToolTipContentItems.map((item) => (
                <div className="flex flex-row gap-1 w-full hover:bg-neutral-100 cursor-pointer p-2">
                    <span>
                        <item.icon size={15} className="text-neutral-500" />
                    </span>
                    <p className="text-xs text-neutral-500">
                        {item.text}
                    </p>
                </div>
            ))}
        </div>
    )
};

export default ToolTipContent;