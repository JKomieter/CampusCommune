import { FaHashtag } from "react-icons/fa";



const LiveDiscussionHeader = ({
    title
}: {
    title: string
}) => {
    return (
            <div className=" bg-slate-400 py-3 lg:px-5 md:px-4 px-3 w-full flex items-center justify-between">
                <div className="w-full flex items-center gap-2">
                    <FaHashtag size={26} color="red" />
                    <p className="text-white text-xs md:text-sm">
                        {title}
                    </p>
                </div>
            </div>
    )
}

export default LiveDiscussionHeader;