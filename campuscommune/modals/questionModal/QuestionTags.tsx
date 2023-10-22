import { Chip } from '@nextui-org/react'
import { Swiper, SwiperSlide } from 'swiper/react'
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css'
import { useMemo, useState } from 'react'
import { categoryColor } from '@/categorycolor'

const QuestionTagsSelect = ({
  text,
  setCategories,
}: {
  text: string,
  setCategories: React.Dispatch<React.SetStateAction<string[]>>,
}) => {
  const categories = Object.keys(categoryColor);

  
  const getRelatedTags = useMemo(() => {
    // get the related tags from the text and description
    // use categories to get the related tags and return them
    const textSplit = text?.toLocaleLowerCase()?.split(' ');
    const relatedTags = new Set<string>(textSplit?.filter(word => categories.includes(word)));
    setCategories(Array.from(relatedTags));
    return Array.from(relatedTags);
  }, [text, categories]);


  return (
    <Swiper
    //modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={2}
      className='w-full flex flex-row gap-2 items-center'
    >
      <SwiperSlide>
        <Chip color='primary' className='cursor-pointer md:text-sm text-xs'>
          All
        </Chip>
      </SwiperSlide>
      {getRelatedTags?.map(tag => (
        <SwiperSlide>
          <Chip
            key={tag}
            className='cursor-pointer md:text-sm text-xs capitalize'
            color='primary'
          >
            {tag}
          </Chip>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default QuestionTagsSelect
