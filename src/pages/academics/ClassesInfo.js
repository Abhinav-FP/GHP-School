import React from 'react';
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useState } from "react";
import Image from 'next/image';

export default function index() {
    const [activeIndex, setActiveIndex] = useState(0);

    const faqItems = [
        {
            title: '1. Pre Primary (Nursery, LKG, UKG) ',
            Subtitle: 'Learners Aged: 6-11 years',
            content: 'At BVBS, we believe that knowledge is actively constructed by the student, not passively absorbed from textbooks. In our primary classes, "hands-on" learning is essential for developing lifelong competencies. Following the RBSE curriculum, we design activities that cater to children"s interests—communication, inquiry, construction, and artistic expression. Aligned with our philosophy, "Let learning be a joy and teaching a pleasure," we enrich education through field trips, experiments, hobbies, and life skills, aiming to develop each child"s potential and prepare them for a rapidly evolving world.',



        },
        {
            title: '2. Primary (Grade I - Grade V) ',
            Subtitle: 'Learners Aged: 6-11 years',
            content: 'At BVBS, we believe that knowledge is actively constructed by the student, not passively absorbed from textbooks. In our primary classes, "hands-on" learning is essential for developing lifelong competencies. Following the RBSE curriculum, we design activities that cater to children"s interests—communication, inquiry, construction, and artistic expression. Aligned with our philosophy, "Let learning be a joy and teaching a pleasure," we enrich education through field trips, experiments, hobbies, and life skills, aiming to develop each child"s potential and prepare them for a rapidly evolving world.',
            bgImages: [
                '/Academic/primaryimg01.png',
                '/Academic/primaryimg02.png'
            ]
        },
        {
            title: '3. Secondary (Grade VI - Grade X)  ',
            Subtitle: 'Learners Aged: 6-11 years',
            content: 'At BVBS, we believe that knowledge is actively constructed by the student, not passively absorbed from textbooks. In our primary classes, "hands-on" learning is essential for developing lifelong competencies. Following the RBSE curriculum, we design activities that cater to children"s interests—communication, inquiry, construction, and artistic expression. Aligned with our philosophy, "Let learning be a joy and teaching a pleasure," we enrich education through field trips, experiments, hobbies, and life skills, aiming to develop each child"s potential and prepare them for a rapidly evolving world.',
            bgImages: [
                '/Academic/primaryimg01.png',
                '/Academic/primaryimg02.png'
            ]
        },
        {
            title: '4. Senior Secondary (Grade XI - Grade XII)  ',
            Subtitle: 'Learners Aged: 6-11 years',
            content: 'At BVBS, we believe that knowledge is actively constructed by the student, not passively absorbed from textbooks. In our primary classes, "hands-on" learning is essential for developing lifelong competencies. Following the RBSE curriculum, we design activities that cater to children"s interests—communication, inquiry, construction, and artistic expression. Aligned with our philosophy, "Let learning be a joy and teaching a pleasure," we enrich education through field trips, experiments, hobbies, and life skills, aiming to develop each child"s potential and prepare them for a rapidly evolving world.',
            bgImages: [
                '/Academic/primaryimg01.png',
                '/Academic/primaryimg02.png'
            ]
        },


    ];

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };
    return (
        <>
            <div className='pb-[100px]'>
                <div className="container sm:container md:container lg:max-w-[1232px] px-4 mx-auto ">
                    <ul>
                        {faqItems.map((item, index) => (
                            <li key={index} className="[&:not(:last-child)]:mb-5 bg-[#ECE1C5] ">
                                <button
                                    onClick={() => handleToggle(index)}
                                    className="w-full flex justify-between items-center text-[#1E1E1E]  text-left  merriweather-font px-4 md:px-8 lg:px-12 py-4 lg:py-6 text-xl md:text-3xl lg:text-4xl font-normal focus:outline-none tracking-[-0.04em]"
                                >
                                    {item.title}
                                    {activeIndex === index ? <FaMinus className="text-[#1E1E1E]" size={18} /> : <FaPlus className="text-[#1E1E1E]" size={18} />}
                                </button>
                                {activeIndex === index && (
                                    <div className="px-4 md:px-8 lg:px-12  py-4 lg:py-6  leading-[22px] border-t border-black border-opacity-10">
                                        <h3 className='tracking-[-0.04em] merriweather-font text-black text-lg md:text-xl lg:text-2xl mb-2 md:mb-3 lg:mb-4'>
                                            {item.Subtitle}
                                        </h3>
                                        <p className='text-[#666666] gotham-font text-base font-medium mb-5 md:mb-6 lg:mb-[30px]'>
                                            {item.content}
                                        </p>
                                        <div className='flex flex-wrap -mx-3.5'>

                                            {/* Loop through bgImages array */}
                                            {item.bgImages && item.bgImages.map((bgImage, imgIndex) => (
                                                <div key={imgIndex} className="w-full md:w-4/12 px-2.5 mb-3 md:mb-0">
                                                    <Image
                                                        className="block mx-auto mb-6"
                                                        src={bgImage}
                                                        alt={`img-${imgIndex}`}
                                                        width={347} // Replace with the appropriate width
                                                        height={303} // Replace with the appropriate height
                                                    />
                                                </div>
                                            ))}


                                        </div>

                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                    <div className='mt-2.5'>
                        <h4 className='text-[#EE834E] mb-2 lg:mb-3 merriweather-font font-normal tracking-[-0.04em] text-xl lg:text-2xl'>School Timings: Monday to Saturday</h4>
                        <ul className='text-[#666666] gotham-font font-sm lg:font-base tracking-[-0.04em] font-medium  list-disc pl-5 space-y-1'>
                            <li>Summer - 8:00am - 1:30pm </li>
                            <li>Winter - 8:30am - 2:00pm</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}





