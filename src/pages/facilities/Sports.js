import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React from "react";

export default function Sports() {
  const slides = [
    { bgImage: "/Facilities/Sports1.png" },
    { bgImage: "/Facilities/Sports2.JPG" },
    { bgImage: "/Facilities/Sports3.JPG" },
  ];

  return (
    <div className="bg-white pb-[40px] md:pb-[80px] lg:pb-[100px]" id="sports">
      <div className="container sm:container md:container lg:max-w-[1204px] px-4 mx-auto">
        <div className="flex flex-wrap items-center bg-[#EE834E]">
          <div className="h-full w-full lg:w-5/12 text-white px-[40px] py-[50px]">
            <div className="">
              <h3 className="merriweather-font font-normal text-base lg:text-xl xl:leading-[25px] mb-6 lg:mb-10 tracking-[-0.04em] text-left">{`"Sports is not just about winning; it's about the passion, the teamwork, the perseverance, and the growth that happens both on and off the field."`}</h3>
              <h4 className="capitalize merriweather-font font-normal text-xl lg:text-2xl xl:leading-[25px] mb-2.5 lg:m-3.5 tracking-[-0.04em] text-left">
                List of sports
              </h4>
              <ul className="list-disc list-inside tracking-[-0.04em] text-base lg:text-lg font-medium pl-4">
                <li>Arm wrestling</li>
                <li>Yoga</li>
                <li>Chess</li>
                <li>Kho-Kho</li>
                <li>Kabaddi</li>
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-7/12 relative custom-swiper-navigation">
            <Swiper
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={true} // Enable navigation
              modules={[Autoplay, Pagination, Navigation]}
            >
              {slides &&
                slides.map((item, index) => (
                  <SwiperSlide
                    className="!h-[250px] sm:!h-[300px] lg:!h-[470px]"
                    key={index}
                  >
                    <Image
                      blurDataURL={`${item?.bgImage}?q=1`}
                      placeholder="blur"
                      src={item?.bgImage}
                      alt="Sports"
                      objectFit="cover"
                      className="object-cover w-full !h-full"
                      height={470}
                      width={692}
                      loading="lazy"
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
