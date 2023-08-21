import { AiOutlinePlus } from "react-icons/ai";
import { GrNotes } from "react-icons/gr";
import { RiDiscussLine } from "react-icons/ri";
import { MdOutlineExplore } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";


// component for Sidebar quick access buttons
const Spaces = () => {
    return (
      <div className="md:flex hidden basis-1/5">
        <div className="flex flex-col gap-6 items-start bg-white fixed shadow-lg px-4 py-3 rounded-md">
          <div className="cursor-pointer flex items-center gap-2">
            <AiOutlinePlus size={20} className="text-neutral-800" />
            <p>Create Space</p>
          </div>
          <div className="cursor-pointer  flex items-center gap-2">
            <GrNotes size={20} className="text-neutral-800" />
            <p>Share Notes</p>
          </div>
          <div className="cursor-pointer  flex items-center gap-2">
            <RiDiscussLine size={20} className="text-neutral-800" />
            <p>Join Discussions</p>
          </div>
          <div className="cursor-pointer  flex items-center gap-2">
            <MdOutlineExplore size={20} className="text-neutral-800" />
            <p>Explore Courses</p>
          </div>
          <div className="cursor-pointer  flex items-center gap-2">
            <FaChalkboardTeacher size={20} className="text-neutral-800" />
            <p>Find Tutors</p>
          </div>
        </div>
      </div>
    );
}

export default Spaces;