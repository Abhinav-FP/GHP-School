import React from 'react';
import AcademicBg from "../../../public/Academic/academic_bg.png";

export default function index() {
    return (
        <>
            <div style={{ backgroundImage: `url(${AcademicBg.src})` }} className=' bg-no-repeat bg-center bg-cover pt-[195px] pb-[135px]'>                 
                <div className="container sm:container md:container lg:max-w-[1232px] px-4 mx-auto ">
                    <h1 className='text-black text-5xl tracking-[-0.04em] libre-baskerville text-center mb-2.5'>Academic Year at a Glance</h1>
                    <p className='text-black tracking-[-0.04em] text-xl font-medium gotham-font text-center mb-6 lg:mb-10'>(2024 - 2025)</p>
                    <div className='text-center'>
                        <a href='#' className='bg-[#EE834E] text-white inline-block tracking-[-0.04em] rounded text-lg font-normal px-16 py-3.5'>Download</a>
                    </div>
                </div>
            </div>
        </>
    )
}


