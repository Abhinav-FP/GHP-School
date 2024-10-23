import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
export default function Banner() {
    const slides = [
        { bgImage: '/Facilities/Facilities1.jpg' },
        { bgImage: '/Facilities/Facilities2.jpg' },
        { bgImage: '/Facilities/Facilities3.jpg' },
        { bgImage: '/Facilities/Facilities4.jpg' },
        { bgImage: '/Facilities/Facilities5.jpg' },
    ];

  return (
    <>
      <div className="top-0 lg:top-5 z-[-1] relative">
      <div className="absolute h-full flex items-center left-0 w-full top-1/2 -translate-y-1/2 sliderbg z-20">
                    <div className="mx-auto container sm:container md:container lg:max-w-[1204px] px-4">
                      <h2 className="capitalize merriweather-font font-medium tracking-[-0.04em] text-center text-3xl text-white md:text-4xl lg:text-5xl mb-3">
                      Creating the Perfect Learning Environment
                      </h2>
                    </div>
                  </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          // pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
        >
          {slides &&
            slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  className="slide-content relative"
                  style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    maxHeight: "500px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "2rem",
                    fontWeight: "bold",
                  }}
                >
                  <Image blurDataURL={`${slide.bgImage}?q=1`} placeholder="blur"
                  src={slide.bgImage}
                  className="w-full lg:h-[500px] object-cover"
                  alt="BVBS School Facilities" layout="responsive" width="1000" height="1000"
                  priority="true"
                />
                  
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      {/* <div className="z-[1] relative bg-[#EE834E] py-[35px] md:py-[40px] lg:py-[62px]">
        <div className="mx-auto container sm:container md:container lg:max-w-[1204px] px-4">
          <div className="grid gap-5 lg:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-5">
            {data &&
              data?.map((item, index) => (
                <div
                  className="flex flex-col text-white lg:w-[170px]"
                  key={index}
                >
                  <h3 className="uppercase text-lg md:text-xl lg:text-2xl merriweather-font tracking-[-0.04em] md:mb-2">
                    {item?.text1}
                  </h3>
                  <p className="uppercase font-medium tracking-[-0.04em] text-base">
                    {item?.text2}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div> */}
    </>
  );
}
