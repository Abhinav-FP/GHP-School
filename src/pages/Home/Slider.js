import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Details from "../api/admin/Details";
import Image from "next/image";
export default function Slider() {
  const [listing, setLisitng] = useState([]);
  const [Loading, setLoading] = useState(false);
  const getbanner = () => {
    setLoading(true);
    const main = new Details();
    main
      .gethomebanner()
      .then((r) => {
        setLoading(false);
        setLisitng(r?.data?.banners);
      })
      .catch((err) => {
        setLoading(false);
        setLisitng([]);
        console.log("error", err);
      });
  };

  useEffect(() => {
    getbanner();
  }, []);

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
      <div className="sticky top-0 lg:top-5 z-0">
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
          {listing &&
            listing.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  className="slide-content relative"
                  style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    maxHeight: "700px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "2rem",
                    fontWeight: "bold",
                  }}
                >
                  <Image blurDataURL={`${slide.photo}?q=1`} placeholder="blur"
                  src={slide.photo}
                  className="w-full max-h-[700px] object-cover"
                  alt={slide?.heading} layout="responsive" width="1000" height="1000"
                  priority="true"
                />
                  <div className="absolute h-full flex items-center left-0 w-full top-1/2 -translate-y-1/2 sliderbg ">
                    <div className="mx-auto container sm:container md:container lg:max-w-[1232px] px-4">
                      <h2 className="merriweather-font font-medium tracking-[-0.04em] text-center text-3xl  md:text-4xl lg:text-5xl mb-3">
                        {slide?.heading}
                      </h2>
                      <p className="max-w-[759px] mx-auto font-medium tracking-[-0.04em]  text-center text-sm md:text-base lg:text-xl">
                        {slide?.text}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className="z-[1] relative bg-[#EE834E] py-[35px] md:py-[40px] lg:py-[62px]">
        <div className="mx-auto container sm:container md:container lg:max-w-[1232px] px-4">
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
      </div>
    </>
  );
}
