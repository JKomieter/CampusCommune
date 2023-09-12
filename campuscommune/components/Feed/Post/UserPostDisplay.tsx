import { UserPostDisplayProps } from '@/types';
import { BsDot } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';
import { BadgesLvlOne } from '../../svgs';
import { Avatar } from '@nextui-org/react';


const UserPostDisplay: React.FC<UserPostDisplayProps> = ({
    author_id,
    author_name,
    author_photo,
    author_major,
    author_year,
    created_at,
}) => {
    return (
      <div className="flex flex-row items-center justify-between px-3 py-2 gap-3 w-full">
        <div className="w-10 h-10">
          <span className="w-full h-full overflow-hidden rounded-full bg-neutral-900">
            <Avatar
              src={ author_photo || "https://publichealth.uga.edu/wp-content/uploads/2020/01/Thomas-Cameron_Student_Profile.jpg"}
              size="md"
            />
          </span>
        </div>
        <div className="w-full flex flex-col gap-1">
          <div className="w-full flex flex-row items-start justify-between">
            <div className="w-full flex flex-row gap-1">
              <span className="text-sm font-bold text-neutral-800">
                {author_name}
                <BadgesLvlOne className="inline-block ml-1 text-blue-400 text-lg" />
              </span>
              <BsDot size={18} className="text-neutral-800" />
              <p className="text-sm text-blue-400 cursor-pointer font-semibold">
                Follow
              </p>
            </div>
            <IoClose size={18} className="text-neutral-500" />
          </div>
          <div className="w-full flex flex-row gap-1">
            <span className="text-sm text-neutral-500">
              {author_major} {author_year}
            </span>
            <BsDot size={18} className="text-neutral-500" />
            <span className="text-sm text-neutral-500">
          {/* {created_at.toDateString() || "2 days ago"} */}
              2 days ago
            </span>
          </div>
        </div>
      </div>
    );
}

export default UserPostDisplay;