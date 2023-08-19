import { Avatar } from "@nextui-org/react";
import { MdKeyboardArrowRight } from "react-icons/md";

interface PostModeProps {
    
}

const PostMode = () => {
    return (
      <>
        <div className="w-full p-3 flex flex-row gap-2 items-center ">
          <Avatar
            src="https://publichealth.uga.edu/wp-content/uploads/2020/01/Thomas-Cameron_Student_Profile.jpg"
            size="md"
            alt="Avatar"
          />
          <div className="flex flex-col items-start">
            <p className="text-sm font-semibold text-neutral-800">Eku Kintoh</p>
            <div
              style={{ borderWidth: "0.5px" }}
              className="rounded-2xl px-2 py-1 border-neutral-600 flex flex-row items-center gap-2"
            >
              <p className="text-sm text-neutral-600">Choose credential</p>
              <MdKeyboardArrowRight size={16} className="text-neutral-600" />
            </div>
          </div>
        </div>
      </>
    )
}

export default PostMode;