import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import axios from "axios";

export default function Follow() {
  const [posts, setPosts] = useState();
  useEffect(() => {
    try {
      const tokenValidityIncrease = axios.get(
        `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN}`
      );
    } catch (error) {
      console.log("Failed to start render server");
    }
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://graph.instagram.com/v21.0/${process.env.NEXT_PUBLIC_INSTAGRAM_ID}/media?fields=id,caption,comments_count,like_count,media_url,video_url,media_type,permalink&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN}`
        );
        const data = await response.json();
        setPosts([...data?.data, ...data?.data]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  console.log("posts", posts);
  return (
    <div className="bg-[#36C9B4] py-[50px] md:py-[70px] lg:py-[100px] z-[1] relative">
      <div className="container sm:container md:container lg:max-w-[1204px] px-4 mx-auto">
        <h2 className="merriweather-font font-normal  text-2xl md:text-3xl lg:text-4xl mb-2 text-black text-center tracking-[-0.04em] capitalize">
          Follow us on Instagram and stay updated
        </h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {posts &&
            posts?.map((item, index) => (
              <SwiperSlide key={index}>
                <Link href={item?.permalink} target="blank">
                  <img src={item?.media_url} alt="instagram post" />
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}
