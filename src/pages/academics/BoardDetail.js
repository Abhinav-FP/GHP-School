import React from 'react'; 
import BoradLogo from '../../../public/Academic/boradlogo.png';
import Image from 'next/image';

export default function index() {
    return (
        <>
            <div  className='bg-white py-[40px] md:py-[80px] lg:py-[100px]'>                 
                <div className="container sm:container md:container lg:max-w-[1232px] px-4 mx-auto ">
                    <div className='border-t border-b border-black border-opacity-10 py-[45px]'>
                         <div className='flex flex-wrap -mx-[30px] items-center'>
                             <div className='w-full md:w-6/12 px-[30px] text-center border-r border-black border-opacity-10 py-[26px]'>
                                <Image className='block mx-auto mb-6 ' src={BoradLogo} alt="img" ></Image>
                                <p className='text-[#1E1E1E] text-2xl merriweather-font tracking-[-0.04em]'>Rajasthan Board</p>
                             </div>
                             <div className='w-full md:w-6/12 px-[30px] '>
                                <p className='tracking-[-0.04em] text-[#666666] text-2xl merriweather-font '>At Bal Vishwa Bharti School, we provide high-quality education from Nursery to Grade XII, following the Rajasthan Board of Secondary Education (RBSE) curriculum. Our English Medium instruction enhances global language proficiency and prepares students for national and international success, fostering intellectual growth and critical thinking.</p>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </>
    )
}


