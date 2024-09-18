import Image from 'next/image'
import React from 'react'

export default function Infrastructure() {
    const infraData = [
        {
            title: 'Science Laboratories',
            imgsrc: "/Facilities/Icon1.png",
            description: 'Equipped with dedicated laboratory for Physics, Chemistry, and Biology to foster hands-on learning.'
        },
        {
            title: 'CCTV security',
            imgsrc: "/Facilities/Icon2.png",
            description: 'Comprehensive CCTV surveillance to ensure safety and security across the school campus.'
        },
        {
            title: 'Computer Laboratory',
            imgsrc: "/Facilities/Icon3.png",
            description: 'State-of-the-art computer laboratory to enhance digital literacy and technical skills.'
        },
        {
            title: 'Assembly Hall',
            imgsrc: "/Facilities/Icon4.png",
            description: 'Spacious assembly hall for gatherings, events, and cultural activities.'
        },
        {
            title: 'Smart Classrooms',
            imgsrc: "/Facilities/Icon5.png",
            description: 'Interactive smart classrooms for an engaging and modern learning experience.'
        },
        {
            title: 'Library',
            imgsrc: "/Facilities/Icon6.png",
            description: 'A well-stocked library fostering a love for reading and knowledge exploration.'
        },
        {
            title: 'Air-conditioned classrooms for pre-primary',
            imgsrc: "/Facilities/Icon7.png",
            description: 'Comfortable air-conditioned pre-primary classrooms to ensure a cool learning environment.'
        },
        {
            title: 'Children Play Area',
            imgsrc: "/Facilities/Icon8.png",
            description: 'A fun and safe play area designed to nurture physical development and playfulness.'
        },
    ]
    return (
        <div className='bg-white pb-[40px] md:pb-[80px] lg:pb-[100px]'>
            <div className="container sm:container md:container lg:max-w-[1232px] px-4 mx-auto">
                <div className='bg-[#ECE1C5]'>
                    <div className='px-[30px] lg:px-[50px] py-6 lg:py-10 border-b border-black border-opacity-10'>
                        <h2 className='merriweather-font font-normal text-2xl md:text-3xl lg:text-4xl mb-2.5 text-[#1E1E1E] tracking-[-0.04em] text-center'>Infrastructure</h2>
                        <p className='max-w-[965px] text-center tracking-[-0.04em] mx-auto text-center text-[#666666] text-base font-medium '>BVBS School offers state-of-the-art infrastructure, including modern classrooms, advanced science and computer laboratories, and a serene Saraswati Mandir. Our campus is designed to create a conducive environment for holistic education and the overall development of our students.</p>
                    </div>
                    <div className='py-6 lg:py-10 px-[30px] lg:px-[50px]'>
                        <div className="flex -mx-[15px] flex-wrap">
                            {infraData && infraData?.map((item, index) => (
                                <div key={index} className="w-full md:w-6/12 px-[15px] mb-5 lg:mb-[30px]">
                                    <Image className='mb-3 lg:mb-5' src={item?.imgsrc} alt={item?.title} width={40} height={40} />
                                    <h3 className=' text-xl lg:text-2xl merriweather-font tracking-[-0.04em] font-normal mb-3 lg:mb-[10px]'>{item?.title}</h3>
                                    <p className='text-sm lg:text-base tracking-[-0.04em] font-medium text-[#666666]'>{item?.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
