import React from 'react';
import Image from 'next/image';
import SchoolBg from '../../../public/About/schoolbg.png';

export default function ComingSoon() {
  return (
    <div className='relative'>
      <Image className='w-full object-cover' height={867} width={1440} src={SchoolBg} alt='img' ></Image>
      <div className="absolute h-full flex items-center left-0 w-full top-1/2 -translate-y-1/2 sliderbg ">
        <div className="mx-auto container sm:container md:container lg:max-w-[1232px] px-4 text-center">
          <h2 className="capitalize merriweather-font font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-0 text-[#ECE1C5] tracking-[-0.04em] ">gopal sharma memorial school</h2>
          <h2 className="uppercase text-[50px] sm:text-[60px]  md:text-[100px]  lg:text-[141px] text-[#E6E6E6] merriweather-font font-normal tracking-[-0.04em]">COMING SOON</h2>
          <p className="uppercase text-white text-base lg:text-xl">Admissions Open in March 2025</p>
        </div>
      </div>
    </div>   
  )
}
