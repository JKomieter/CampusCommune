import Image from 'next/image';
import { UserQuestionDisplayProps } from '@/types';
import { BsDot } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';
import { BadgesLvlOne } from '../svgs';


const UserQuestionDisplay: React.FC<UserQuestionDisplayProps> = ({
    authorId,
    authorName,
    authorPhotoURL,
    authorMajor,
    authorYear,
    createdAt,
}) => {

    const date = new Date(createdAt?.seconds * 1000);

    return (
      <div className="flex flex-row items-center justify-between px-3 py-2 gap-3 w-full">
        <div className="w-10 h-10">
          <span className="w-full h-full overflow-hidden rounded-full bg-neutral-900">
            <Image
              src={"/images/defaultUser.jpg"}
              alt={authorName}
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover"
            />
          </span>
        </div>
        <div className="w-full flex flex-col gap-1">
          <div className="w-full flex flex-row items-start justify-between">
            <div className="w-full flex flex-row gap-1">
              <span className="text-sm font-bold text-neutral-800">
                {authorName}
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
              {authorMajor} {authorYear}
            </span>
            <BsDot size={18} className="text-neutral-500" />
            <span className="text-sm text-neutral-500">
              {date.toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    );
}

export default UserQuestionDisplay;