'use client'
import Image from 'next/image'
import { IoClose } from 'react-icons/io5'

interface PostMediaProps {
  image: string
  setImage: React.Dispatch<React.SetStateAction<string>>
}

const PostMedia: React.FC<PostMediaProps> = ({ image, setImage }) => {
  return (
    <>
    {image && (
        <div className='h-full px-3 py-2 flex flex-col gap-3 overflow-y-scroll'>

          <div className='h-full shadow-inner overflow-y-scroll'>
            <span
              onClick={() => setImage("")}
              className='rounded-full p-1 bg-black text-neutral-200 absolute flex items-center justify-center z-10 cursor-pointer'
            >
              <IoClose size={18} className='text-neutral-200' />
            </span>
            <Image
              src={image}
              objectFit='cover'
              className='object-cover'
              width={500}
              height={800}
              alt='Post Image'
              blurDataURL='/images/postLazy.jpg'
            />
          </div>

        </div>
    )}
    </>
    
  )
}

export default PostMedia
