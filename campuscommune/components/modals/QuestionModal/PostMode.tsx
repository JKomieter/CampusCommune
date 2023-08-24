import { Avatar } from "@nextui-org/react";
import { MdKeyboardArrowRight } from "react-icons/md";
import PostMedia from "./PostMedia";

interface PostModeProps {
  image: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}

const PostMode: React.FC<PostModeProps> = ({
  image,
  setImage,
  title,
  setTitle,
  description,
  setDescription,
}) => {


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
      <div className="px-3 w-full pb-2">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='w-full border-none outline-none bg-transparent text-sm'
          placeholder='Add a title...'
        />
      </div>
      <PostMedia image={image} setImage={setImage} />
      <div className="px-3 w-full pt-2">
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className='w-full h-full border-none outline-none bg-transparent pb-3 text-sm'
          placeholder='Add a description...'
        />
      </div>
    </>
  );
}

export default PostMode;