import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore, { Pagination, Autoplay } from 'swiper';

// Install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

export default function Slider() {
    const slides = [
        { bgImage: '/Home/Slider1.jpg' },
        { bgImage: '/Home/Slider2.jpg' },
        { bgImage: '/Home/Slider3.jpg' }
    ];

    const data = [
        {
            text1: "520 students",
            text2: "from Nursery to Grade XII",
        },
        {
            text1: "100% Results",
            text2: "achieved in Grade X and XII, RBSE 2024",
        },
        {
            text1: "800",
            text2: "people Assembly Hall Capacity",
        },
        {
            text1: "25:1",
            text2: "student-teacher ratio",
        },
        {
            text1: "35+",
            text2: "years in Education",
        },
    ];
    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }} // Slide automatically every 3 seconds
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="slide-content"
                            style={{
                                // backgroundImage: slide.bgImage,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center', 
                                maxHeight:'700px',
                                // display: 'flex',
                                // alignItems: 'center',
                                // justifyContent: 'center',
                                color: '#fff',
                                fontSize: '2rem',
                                fontWeight: 'bold'
                            }}
                        >
                            <img className='w-full max-h-[700px]' src={slide.bgImage} alt='img' />
                            <div className="absolute h-full flex items-center left-0 w-full top-1/2 -translate-y-1/2 sliderbg ">
                                <div className="mx-auto container sm:container md:container lg:max-w-[1232px] px-4">
                                    <h2 className='merriweather-font font-medium tracking-[-0.04em] text-3xl text-center md:text-4xl lg:text-5xl mb-3'>Welcome to Bal Vishwa Bharti School</h2>
                                    <p className='max-w-[759px] mx-auto font-medium tracking-[-0.04em]  text-center text-base xl:text-xl'>
                                        At Bal Vishwa Bharti School, we are committed to nurturing young minds through holistic education, fostering academic excellence, and instilling strong moral values to shape the leaders of tomorrow.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="bg-[#EE834E] flex gap-3">
                {data && data?.map((item, index) => (
                    <div className="flex flex-col text-white" key={index}>
                        <p>{item?.text1}</p>
                        <p>{item?.text2}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
