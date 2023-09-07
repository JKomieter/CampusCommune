import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y} from 'swiper/modules'
import 'swiper/css'

const ProfileNav = () => {
  return (
    <div className='w-full md:w-[60%] mt-4 md:text-sm text-xs font-semibold text-neutral-500'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={5}
        className='border-b-2 border-neutral-400'
      >
        <SwiperSlide
          style={{ borderBottomWidth: '2px', paddingBottom: '0.5rem' }}
          className='border-neutral-400 text-center text-[#FF725E] border-b-[#FF725E] border-b-2 cursor-pointer'
        >
          Profile
        </SwiperSlide>
        <SwiperSlide
          style={{ paddingBottom: '0.5rem' }}
          className=' text-center cursor-pointer '
        >
          Answers
        </SwiperSlide>
        <SwiperSlide
          style={{ paddingBottom: '0.5rem' }}
          className=' text-center cursor-pointer '
        >
          Questions
        </SwiperSlide>
        <SwiperSlide
          style={{ paddingBottom: '0.5rem' }}
          className=' text-center cursor-pointer '
        >
          Posts
        </SwiperSlide>
        <SwiperSlide
          style={{ paddingBottom: '0.5rem' }}
          className=' text-center cursor-pointer '
        >
          Followers
        </SwiperSlide>
        <SwiperSlide
          style={{ paddingBottom: '0.5rem' }}
          className=' text-center cursor-pointer '
        >
          Following
        </SwiperSlide>
        <SwiperSlide
          style={{ paddingBottom: '0.5rem' }}
          className=' text-center cursor-pointer '
        >
          Edits
        </SwiperSlide>
        <SwiperSlide
          style={{ paddingBottom: '0.5rem' }}
          className=' text-center cursor-pointer '
        >
          Activity
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ProfileNav
