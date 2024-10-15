import React from 'react'
import Vision from "../../../public/Home/Vision.png"
import Results from "../../../public/Home/Results.jpg"
import Facilities from "../../../public/Home/Facilities.png"
import Assembly from "../../../public/Home/Assembly.jpg"
import Image from 'next/image'
import Link from 'next/link'


export default function VisionMission() {
  const data = [
    {
      heading: "Vision",
      text: "The School’s vision is to provide a learning environment that encourages children to bring out the best in themselves and which supports their all-round development, through discovering the joy of learning, awakening and illuminating their intellect in multi-dimensional ways, and instilling abiding values in themselves.",
      btnText: "About Us ",
      to:"/about#vision",
      imgsrc: Vision,
    },
    {
      heading: "Results",
      text: "Explore our students' remarkable achievements and academic milestones. Dive into the details of our latest exam results and witness the success stories that define our commitment to excellence.",
      btnText: "Read More",
      to:"/academics#results",
      imgsrc: Results,
    },
    {
      heading: "Facilities",
      text: "Bal Vishwa Bharti School offers state-of-the-art classrooms, well-equipped science and computer labs, and a resource-rich library to foster academic excellence. The School Hall can accommodate 520 people.",
      btnText: "View More",
      to:"/facilities",
      imgsrc: Facilities,
    },
    {
      heading: "Our Pre-Primary Program",
      text: "Our Pre-Primary section offers a nurturing and stimulating environment where young children explore, learn, and grow. With play-based activities and dedicated educators, we lay the foundation for a lifelong love of learning.",
      btnText: "Apply Now",
      to:"/admissions#form",
      imgsrc: Assembly,
    },
  ];
  return (
    <div className='z-[1] relative bg-white py-[50px] md:py-[70px] lg:py-[100px]'>
      <div className="container sm:container md:container lg:max-w-[1204px] px-4 mx-auto ">

        {data && data.map((item, index) => (
          <div className="flex flex-wrap items-center bg-[#ECE1C5]" key={index}>
            {index % 2 === 0 ? (
              <>
                <div className="w-full md:w-6/12 md:order-2">

                <Image
                  blurDataURL={`${item.imgsrc}?q=1`} placeholder="blur"
                    src={item.imgsrc}
                    alt={item?.heading}
                    className="object-cover w-full"
                    loading='lazy'
                  />
                </div>
                <div className="w-full md:order-1 md:w-6/12 px-[25px] py-[25px] lg:p-[40px]">
                  <h1 className='merriweather-font font-normal  text-2xl md:text-3xl lg:text-4xl mb-2 text-[#1E1E1E]  tracking-[-0.04em]'>
                    {item?.heading}
                  </h1>
                  <p className='text-[#666666] text-base font-medium gotham-font tracking-[-0.04em] mb-5 lg:mb-[32px]'>
                    {item?.text}
                  </p>

                  <Link href={item?.to} className="button-animation rounded px-8 lg:px-10 py-2.5 text-white text-base lg:text-lg font-normal tracking-[-0.04em]">
                    {item?.btnText}
                  </Link>
                </div>

              </>
            ) : (
              <>
                <div className="w-full md:w-6/12 md:order-1">
                  <Image
                  blurDataURL={`${item.imgsrc}?q=1`} placeholder="blur"
                    src={item.imgsrc}
                    alt={item?.heading}
                    className="object-cover w-full"
                    loading='lazy'
                  />
                </div>
                <div className="w-full md:w-6/12 p-[30px] lg:p-[40px] md:order-1">
                  <h1 className='merriweather-font font-normal  text-2xl md:text-3xl lg:text-4xl mb-2 text-[#1E1E1E]  tracking-[-0.04em]'>
                    {item?.heading}
                  </h1>
                  <p className='text-[#666666] text-base font-medium gotham-font tracking-[-0.04em] mb-6 lg:mb-[32px]'>
                    {item?.text}
                  </p>
                  <Link href={item?.to} className="button-animation rounded px-8 lg:px-10 py-2.5 text-white text-base lg:text-lg font-normal tracking-[-0.04em]">
                    {item?.btnText}
                  </Link>
                </div>
              </>
            )
            }
          </div>
        ))}
      </div>
    </div>
  )
}
