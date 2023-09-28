import { Chip } from '@nextui-org/react'
import { Swiper, SwiperSlide } from 'swiper/react'
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css'
import { useState } from 'react'

const QuestionTagsSelect = () => {
  // this is fake tag items to display  the tags related to the question
  const tags = ['Coding', 'Programming', 'Web Development', 'React']
  const [selectedTags, setSelectedTags] = useState<string[]>([])


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
      {tags.map(tag => (
        <SwiperSlide onClick={() => setSelectedTags((prev) => [...prev, tag])}>
          <Chip
            key={tag}
            className='cursor-pointer md:text-sm text-xs'
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
