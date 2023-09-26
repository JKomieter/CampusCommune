import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Avatar } from '@nextui-org/react';


const SpaceSwiper = ({
    contributors
}: {
    contributors: {
        user_photo: string;
        user_name: string;
        user_email: string;
        user_role: string;
    }[]
}) => {
    return (
        <div className="w-full mt-2">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className='flex flex-col'>
                    {
                        contributors?.slice(0, 4).map((contributor) => (
                            <div key={contributor.user_email} className="flex flex-row gap-1 items-center mt-2">
                                <Avatar
                                    src={contributor.user_photo}
                                    alt=""
                                    size="sm"
                                />
                                <p style={{ color: "#e5e4e4" }} className="text-xs">
                                    {contributor.user_name}, {contributor.user_role}
                                </p>
                            </div>
                        ))
                    }
                </SwiperSlide>
                <SwiperSlide>
                    
                </SwiperSlide>
                <SwiperSlide>

                </SwiperSlide>
            </Swiper>
        </div>
    )
};


export default SpaceSwiper;