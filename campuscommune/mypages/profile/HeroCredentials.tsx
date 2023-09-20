import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiCake2Line, RiGraduationCapLine, RiSuitcaseLine } from "react-icons/ri";
import { TbShare2 } from "react-icons/tb";

const items = [
    {
        name: "Add employment credential",
        icon: RiSuitcaseLine,
        link: "/profile/credentials/employment"
    },
    {
        name: "Add education credential",
        icon: RiGraduationCapLine,
        link: "/profile/credentials/education"
    },
    {
        name: "Add location credential",
        icon: HiOutlineLocationMarker,
        link: "/profile/credentials/location"
    },
]


const HeroCredentials = ({
    join_date
}: {
    join_date: any;
}) => {
    return (
        <div className="w-full flex flex-col gap-4 md:basis-1/3">
            <div 
            style={{ borderBottomWidth: "1px" }}
            className="flex flex-row items-center justify-between border-neutral-400 pb-2">
                <p className="text-neutral-700 font-semibold md:text-sm text-xs">
                    Credentials & Highlights
                </p>
                <span
                    style={{ borderWidth: "1px" }}
                    className="rounded-full p-1 border-neutral-400 cursor-pointer flex 
                    items-center justify-center hover:bg-neutral-200 duration-200 transition-all">
                    <TbShare2 size={22} className="text-neutral-600" />
                </span>
            </div>
            <div className="flex flex-col justify-start w-full">
                {items.map((item,) => (
                    <div 
                    key={item.name}
                    className="w-full flex flex-row gap-1 py-1.5 cursor-pointer">
                        <item.icon size={18} className="text-neutral-600" />
                        <p className="md:text-sm text-xs text-blue-700 hover:underline">
                            {item.name}
                        </p>
                    </div>
                ))}
                <div className="w-full flex flex-row gap-1 py-1.5 cursor-pointer">
                    <RiCake2Line size={18} className="text-neutral-600" />
                    <p className="md:text-sm text-xs hover:underline">
                        Joined {join_date?.toDate()?.toDateString()}
                    </p>
                </div>
            </div>
        </div>
    )
};

export default HeroCredentials;