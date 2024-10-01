import Image from 'next/image'
import React from 'react'

export default function Sports() {
  return (
    <div className='bg-white pb-[40px] md:pb-[80px] lg:pb-[100px]' id="sports">
      <div className="container sm:container md:container lg:max-w-[1232px] px-4 mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-5/12 bg-[#EE834E] text-white px-[40px] py-[50px]">
            <h3 className='merriweather-font font-normal text-base lg:text-xl xl:leading-[25px]  mb-6 lg:mb-10 tracking-[-0.04em] text-left'>{`Sports is not just about winning; it's about the passion, the teamwork, the perseverance, and the growth that happens both on and off the field.`}</h3>
            <h4 className='merriweather-font font-normal text-xl lg:text-2xl xl:leading-[25px]  mb-2.5 lg:m-3.5 tracking-[-0.04em] text-left'>List of sports</h4>
            <ul className="list-disc list-inside tracking-[-0.04em] text-base lg:text-lg font-medium pl-4">
                <li>Arm wrestling</li>
                <li>Yoga</li>
                <li>Chess</li>
                <li>Kho- Kho</li>
                <li>Kabaddi</li>
                </ul>            
            </div>
            <div className="w-full lg:w-7/12 relative">
            <Image 
             src="/Facilities/Sports.png" 
             alt="Sports" 
             
             objectFit="cover" className='w-full'  height={420} width={692} 
            ></Image>
            </div>
        </div>
    </div>
    </div>
  )
}
