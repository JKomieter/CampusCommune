import { FaSearch } from "react-icons/fa";
import FilterResults from "./FilterResults";



const NotesTopics = () => {
    return (
        <div className="md:flex hidden basis-1/5 flex-col gap-5" style={{ minWidth: "200px" }}>
            <div className="w-full h-full flex flex-col gap-4">
                <div className="bg-white rounded-md flex flex-row w-full gap-0.5 items-center p-1 shadow-md">
                    <FaSearch className="text-neutral-500" />
                    <input
                        type="text"
                        placeholder="Search Notes"
                        className="w-full h-9 rounded-md py-3 bg-transparent focus:outline-none"
                    />
                </div>
                {/* <SearchResults /> */}
                <FilterResults />
            </div>
        </div>
    )
};

export default NotesTopics;