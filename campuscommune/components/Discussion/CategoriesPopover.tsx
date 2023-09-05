import { GoDotFill } from "react-icons/go";



const CategoriesPopover = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row w-full justify-between">
                <div className="flex flex-row gap-1 px-5 py-2 cursor-pointer hover:bg-neutral-100">
                    <GoDotFill size={20} color="#ffb703" className="text-neutral-700" />
                    <p className="text-xs">
                        Hobbies
                    </p>
                </div>
                <div className="flex flex-row gap-1 px-5 py-2 cursor-pointer hover:bg-neutral-100">
                    <GoDotFill size={20} color="#219ebc" className="text-neutral-700" />
                    <p className="text-xs">
                        Video
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CategoriesPopover;

