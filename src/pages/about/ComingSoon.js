import React, { useEffect, useState } from "react";
import Image from "next/image";
import SchoolBg from "../../../public/About/schoolbg.png";
import Details from "../api/admin/Details";
import Loader from "@/Component/Loader";

export default function ComingSoon() {
  const [listing, setLisitng] = useState("");
  const [Loading, setLoading] = useState(false);
  // const [count, setCount] = useState(0);
  const principle = () => {
    setLoading(true);
    const main = new Details();
    main
      .comingsoonsGet()
      .then((r) => {
        setLoading(false);
        setLisitng(r?.data?.data);
      })
      .catch((err) => {
        setLoading(false);
        setLisitng([]);
        console.log("error", err);
        // setCount(count + 1);
        // if (count <= 2) {
        //   principle();
        // }
      });
  };

  useEffect(() => {
    principle();
  }, []);

  return (
    <>
      {listing?.show === true &&
        (Loading ? (
          <Loader />
        ) : (
          <div className="relative">
            <Image
              blurDataURL={`${listing?.image}?q=1`}
              placeholder="blur"
              className="w-full object-cover min-h-[520px] lg:min-h-min"
              height={867}
              width={1440}
              src={listing?.image}
              alt="img"
              loading="lazy"
            />
            <div className="absolute h-full flex items-center left-0 w-full top-1/2 -translate-y-1/2 bg-black bg-opacity-30">
              <div className="mx-auto container sm:container md:container lg:max-w-[1204px] px-4 text-center">
                <h2 className="capitalize merriweather-font font-normal text-[1.65rem] sm:text-2xl md:text-4xl lg:text-[60px] mb-0 text-[#ECE1C5] tracking-[-0.04em] leading-tight">
                  {listing?.text1}
                  <span className="capitalize text-white block lg:mt-6">
                    {listing?.text2}
                  </span>
                </h2>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
