import Image from 'next/image'
import React from 'react'
import PrincipalImg from "../../../public/About/Principal.png";

export default function Principal() {
  return (
    <div className="bg-[#ECE1C5] py-[50px] md:py-[70px] lg:py-[100px]">
        <div className="container sm:container md:container lg:max-w-[1232px] px-4 mx-auto">
          <h2 className="merriweather-font font-normal  text-2xl md:text-3xl lg:text-4xl mb-2 text-[#1E1E1E]  tracking-[-0.04em] mb-4 lg:mb-[37px] text-center ">Message from the principal</h2>
          <div className="flex flex-wrap -mx-4 items-center">
            <div className="w-full md:w-6/12 px-4 ">
               <Image className="max-w-full block mx-auto mb-3 md:mb-0" src={PrincipalImg} height={500} width={407} />
            </div>
            <div className="w-full md:w-6/12 px-4">
              <p className="text-[#666666] font-medium text-base gotham-font mb-5 lg:mb-[28px] tracking-[-0.04em] ">We at Bal Vishwa Bharti Public School are committed to providing a balanced education that nurtures both academic excellence and personal growth. Our dedicated educators strive to inspire students to become confident, compassionate, and well-rounded individuals. We understand that true growth happens when students engage in collaborative projects, participate in sports, and explore their interests outside the academic sphere. Our diverse range of extracurricular programs is designed to foster teamwork, build leadership skills, and encourage a balanced lifestyle. Our faculty and students together build a vibrant school community, where every child is encouraged to reach their full potential.</p>
              <p className="libre-baskerville font-normal text-xl md:text-[26px]  mb-0 text-[#EE834E]  tracking-[-0.04em]">- Usha Kiran Sharma</p>
            </div>
          </div>
        </div>
      </div>
  )
}
