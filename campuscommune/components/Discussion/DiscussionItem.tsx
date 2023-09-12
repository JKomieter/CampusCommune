import { DiscussionListType } from '@/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade
} from 'swiper/modules'
import 'swiper/css'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { categoryColor, categoryIcon } from './CategoryColor'
import { BsDot } from 'react-icons/bs'
import AvatarCluster from './AvatarCluster'
import { IconType } from 'react-icons'
import formatNumber from '@/utils/formatNumber'
import {
  useDisclosure
} from '@nextui-org/react'
import DiscussionModal from './DiscussionModal'
import { useState } from 'react'
import useGetCurrentUser from '@/hooks/useGetCurrentUser'


interface DiscussionItemProps extends DiscussionListType {
  index: number
}


const DiscussionItem: React.FC<DiscussionItemProps> = ({
  title,
  description,
  participants,
  category,
  index,
  views,
  code
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const { currentUser } = useGetCurrentUser();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  

  let isEven = index % 2 === 0
  let color = 'bg-slate-300' || 'bg-slate-500'
  if (isEven) {
    color = 'bg-slate-300'
  } else {
    color = 'bg-slate-500'
  }


  const CatIcon = categoryIcon[
    category[0] as keyof typeof categoryIcon
  ] as IconType
  const catColor = categoryColor[category[0] as keyof typeof categoryColor]


  return (
    <>
      <Swiper
        onClick={() => onOpen()}
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
        spaceBetween={5}
        slidesPerView={1}
        navigation={true}
        className='rounded-sm w-full cursor-pointer hover:scale-[1.02] ease-in-out transition-all duration-300'
      >
        <SwiperSlide className={`py-6 px-3 ${color}`}>
          <div className='flex flex-row w-full items-center justify-between gap-4'>
            <h3
              className={`md:text-sm text-xs lg:text-base 
                    ${isEven ? 'text-neutral-700' : 'text-neutral-100'
                } min-w-[50%]`}
            >
              {title}
            </h3>
            <div className='flex flex-row gap-0 items-center justify-start'>
              <BsDot
                size={30}
                color={catColor}
                className={`text-[${catColor}]`}
              />
              <p
                className={`text-xs md:text-sm capitalize 
                        md:flex hidden ${isEven
                    ? 'text-neutral-700'
                    : 'text-neutral-100'
                  }`}
              >
                {category}
              </p>
              <CatIcon
                size={18}
                className={`${isEven ? 'text-neutral-700' : 'text-neutral-100'
                  } md:hidden flex`}
              />
            </div>
            <p
              className={`text-xs md:text-sm capitalize 
                         ${isEven
                  ? 'text-neutral-700'
                  : 'text-neutral-100'
                }`}
            >
              {formatNumber(views, 1)} views
            </p>
            <AvatarCluster />
            <span className='rounded-full p-1 flex items-center justify-center bg-neutral-100 cursor-pointer'>
              <MdKeyboardArrowRight size={24} className='text-blue-700' />
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`py-6 px-3 ${color}`}>Hey</SwiperSlide>
      </Swiper>
      {Object.keys(currentUser).length > 0 && <DiscussionModal
        title={title}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        currentUser={currentUser}
        code={code}
      />}
    </>
  )
}

export default DiscussionItem
