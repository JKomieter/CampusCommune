import { DiscussionType } from "@/types"
import { IconType } from "react-icons";
import { useRouter } from "next/navigation";
import { RiSuitcaseLine } from "react-icons/ri";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { categoryIcon, categoryColor } from "../../../categorycolor";


const CatIconWrapper = ({ category, size }: { category: string[], size: number }) => {
    const CatIcon = categoryIcon[category[0] as keyof typeof categoryIcon] as IconType;
    const catColor = categoryColor[category[0] as keyof typeof categoryColor] as string;


    return <CatIcon size={size} color={catColor} />;
};

const DiscussionSidebarItem = ({
    discussion,
    index
}: {
    discussion: DiscussionType
    index: number
}) => {
    const router = useRouter();

    const styleIndex = index % 2 === 0 ? " dark:bg-gray-700" : "bg-neutral-200 dark:bg-gray-800";

    return (
        <div
            onClick={() => router.push(`/join-discussion/${discussion.title}`)}
            className={`flex items-center px-2 py-3 cursor-pointer text-gray-900 ${styleIndex}
            dark:text-white hover:bg-gray-200 dark:hover:bg-neutral-600`}>
            <CatIconWrapper category={discussion.category} size={20} />
            <span className="ml-3 md:text-[13px] text-sm">{discussion.title}</span>
        </div>
    )
}


export default DiscussionSidebarItem;