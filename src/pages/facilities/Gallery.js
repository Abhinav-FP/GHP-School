import Image from 'next/image';
import React from 'react'

export default function Gallery() {
    const data = [
        {
            name: "Annual Day ",
            image: "/Facilities/Gallery1.png",
        },
        {
            name: "Assembly",
            image: "/Facilities/Gallery2.png",
        },
        {
            name: "Seminars",
            image: "/Facilities/Gallery3.png",
        },
        {
            name: "Activities",
            image: "/Facilities/Gallery4.png",
        },
        {
            name: "Festivals",
            image: "/Facilities/Gallery5.png",
        },
        {
            name: "Recognition & Awards",
            image: "/Facilities/Gallery6.png",
        },
        {
            name: "School rooms",
            image: "/Facilities/Gallery7.png",
        },
        {
            name: "Special Days",
            image: "/Facilities/Gallery8.png",
        },
        {
            name: "Summer camp",
            image: "/Facilities/Gallery9.png",
        },
    ];
    return (
        <div className='bg-white pb-[40px] md:pb-[80px] lg:pb-[100px]'>
            <div className="container sm:container md:container lg:max-w-[1232px] px-4 mx-auto">
                <h2 className='merriweather-font font-normal text-2xl md:text-3xl lg:text-4xl mb-2.5 text-[#1E1E1E] tracking-[-0.04em] text-center'>Gallery</h2>
                <p className='max-w-[965px] text-center tracking-[-0.04em] mx-auto text-center text-[#666666] text-base font-medium mb-10 lg:mb-[50px]'>
                    Explore our gallery to see the vibrant life and activities at BVBS School. From events and achievements to daily moments, experience the essence of our school community through these images.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5"> {/* Grid layout for responsive design */}
                    {data && data?.map((item, index) => (
                        <div key={index} className="relative w-full  overflow-hidden"> {/* Set a height and width */}
                            <Image
                                width={387} height={310}
                                src={item?.image}
                                alt={item?.name}
                                 
                                className="object-cover"
                            />
                            <div className='galleryBg absolute bottom-0 left-0 h-full w-full z-0'></div>
                            <h3 className="absolute bottom-4 left-6 right-6 text-white  z-10 merriweather-font font-normal text-xl lg:text-2xl  tracking-[-0.04em]">{item?.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

}
