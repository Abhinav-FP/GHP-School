import React from 'react';
import AcademicBg from "../../../public/Academic/academic_bg.png";

export default function index() {
    return (
        <> 
        
            <div style={{ backgroundImage: `url(${AcademicBg.src})` }} className=' bg-no-repeat bg-center bg-cover pt-[102px] md:pt-[152px] md:pt-[195px] pb-[70px]  md:pb-[100px] lg:pb-[132px]' id="calendar">                 
                <div className="container sm:container md:container lg:max-w-[1232px] px-4 mx-auto ">
                    <h1 className='text-black merriweather-font font-normal tracking-[-0.04em] text-center text-3xl md:text-4xl lg:text-5xl mb-2.5'>Academic Year at a Glance</h1>
                    <p className='text-black font-medium tracking-[-0.04em]  text-center text-sm md:text-base lg:text-xl mb-6 lg:mb-10'>(2024 - 2025)</p>
                    <div className='text-center'>
                        <a href='#' className='button-animation text-white inline-block tracking-[-0.04em] rounded text-lg font-normal px-16 py-3.5'>Download</a>
                    </div>
                </div>
            </div>
        </>
    )
}


