import Image from "next/image";
import React from "react";

export default function Houses() {
  const houseData = [
    {
      imagesrc: "/Facilities/House1.png",
      name: "Guru Vashishtha",
      color: "text-[#0E2A73]",
      paragraph:
        "Named after the revered sage and teacher of Lord Rama, Guru Vashishtha symbolizes wisdom, righteousness, and the pursuit of knowledge. This house inspires students to uphold moral values and seek enlightenment.",
    },
    {
      imagesrc: "/Facilities/House2.png",
      name: "Dronacharya",
      color: "text-[#8E0C16]",
      paragraph:
        "Named after the legendary teacher of the Pandavas and Kauravas, Dronacharya represents excellence in education, discipline, and mastery of skills. This house encourages students to strive for perfection in their endeavours.",
    },
    {
      imagesrc: "/Facilities/House3.png",
      name: "Chanakya",
      color: "text-[#F1A200]",
      paragraph:
        "Named after the ancient Indian philosopher and strategist, Chanakya embodies intelligence, strategy, and the art of leadership. This house motivates students to develop critical thinking and leadership qualities.",
    },
    {
      imagesrc: "/Facilities/House4.png",
      name: "Swami Vivekanand",
      color: "text-[#5A7C1E]",
      paragraph:
        "Named after the great Indian spiritual leader and philosopher, Swami Vivekanand stands for spiritual wisdom, strength, and the power of youth. This house inspires students to live with purpose and make a positive impact on society.",
    },
  ];
  return (
    <div className="bg-white py-[40px] md:py-[80px] lg:py-[100px]">
      <div
        className="container sm:container md:container lg:max-w-[1232px] px-4 mx-auto"
        id="houses"
      >
        <h1 className="capitalize merriweather-font font-normal  text-2xl md:text-3xl lg:text-4xl mb-2 text-[#1E1E1E]  tracking-[-0.04em] mb-4 lg:mb-5 text-center ">
          Distinct Colors, Shared Values
        </h1>
        <div className="flex flex-wrap -mx-4 lg:-mx-[11px]">
          {houseData &&
            houseData?.map((item, index) => (
              <div
                key={index}
                className="w-full sm:w-6/12 lg:w-3/12 px-4 lg:px-[11px] mb-5 lg:mb-0 text-center "
              >
                <Image
                  blurDataURL={`${item.imagesrc}?q=1`}
                  placeholder="blur"
                  className="mx-auto mb-4 lg:mb-5 block"
                  width={190}
                  height={210}
                  src={item.imagesrc}
                  alt={item.name}
                  loading="lazy"
                />
                <h2
                  className={`merriweather-font font-normal text-xl md:text-2xl tracking-[-0.04em] mb-3 lg:mb-4 ${item.color}`}
                >
                  {item.name}
                </h2>
                <p className="text-sm lg:text-base text-[#666666] tracking-[-0.04em] font-medium">
                  {item.paragraph}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
