import Image from 'next/image'
import React from 'react'

export default function SisterSchools() {
  return (
    <div className="bg-white py-[50px] mt:py-[70px] lg:py-[100px]">
      <div className="container sm:container md:container lg:max-w-[1232px] px-4 mx-auto">
        <div className="bg-[#ECE1C5] pt-[40px] md:pt-[60px] lg:pt-[80px] pb-[24px] md:py-[44px] lg:pb-[40px] px-5 lg:px-10">
          <h2 className="merriweather-font font-normal  text-2xl md:text-3xl lg:text-4xl mb-6 lg:mb-[30px] text-[#1E1E1E]  tracking-[-0.04em] mb-2 capitalize text-center">sister schools and colleges in Powai, Mumbai</h2>
          <div className="flex  flex-wrap -mx-2 -lg:mx-5 justify-center">
            <div className='w-full sm-w-6/12 lg:w-4/12 px-2 lg:px-5 mb-4 lg:mb-10'>
              <div className='bg-white h-[212px] flex items-center justify-center'>
                <Image src={"/About/School1.png"} width={200} height={200} layout="intrinsic" />
              </div>
            </div>
            <div className='w-full sm-w-6/12 lg:w-4/12 px-2 lg:px-5 mb-4 lg:mb-10'>
              <div className='bg-white h-[212px] flex items-center justify-center'>
                <Image src={"/About/School2.png"} width={200} height={200} layout="intrinsic" />
              </div>
            </div>
            <div className='w-full sm-w-6/12 lg:w-4/12 px-2 lg:px-5 mb-4 lg:mb-10'>
              <div className='bg-white h-[212px] flex items-center justify-center'>
                <Image src={"/About/School3.png"} width={200} height={200} layout="intrinsic" />
              </div>
            </div>
            <div className='w-full sm-w-6/12 lg:w-4/12 px-2 lg:px-5 mb-4 lg:mb-10'>
              <div className='bg-white h-[212px] flex items-center justify-center'>
                <Image src={"/About/School4.png"} width={200} height={200} layout="intrinsic" />
              </div>
            </div>
            <div className='w-full sm-w-6/12 lg:w-4/12 px-2 lg:px-5 mb-4 lg:mb-10'>
              <div className='bg-white h-[212px] flex items-center justify-center'>
                <Image src={"/About/School5.png"} width={200} height={200} layout="intrinsic" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
