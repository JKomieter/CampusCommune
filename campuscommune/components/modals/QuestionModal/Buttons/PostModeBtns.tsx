import { PiImagesLight } from "react-icons/pi";





const PostModeBtns = () => {
    return (
      <div className="w-full flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-3 ">
          <p
            className="text-neutral-700 font-semibold p-1 cursor-pointer transition-all duration-300 rounded-sm text-sm hover:border-blue-700"
            style={{ borderWidth: "1px" }}
          >
            Aa
          </p>
          <span
            className="p-1 rounded-sm hover:border-blue-700 cursor-pointer transition-all duration-300 "
            style={{ borderWidth: "1px" }}
          >
            <PiImagesLight size={19} className="text-neutral-700" />
          </span>
        </div>
        <button className="flex items-center justify-center bg-blue-600 rounded-3xl">
          <p className="text-neutral-100 text-sm font-semibold px-3 py-2">
            Post
          </p>
        </button>
      </div>
    );
}

export default PostModeBtns;