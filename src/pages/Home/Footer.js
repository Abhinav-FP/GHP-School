import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { BiDonateHeart } from "react-icons/bi";
import { LuSchool } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { AiOutlineYoutube } from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <div className='z-[1] relative px-6 overflow-hidden md:px-8 lg:px-10 py-5 bg-[#EE834E]'>
        <div className="marquee flex items-center  md:px-8 lg:px-10 text-white text-2xl lg:text-[32px] merriweather-font tracking-[-0.04em]">
          <span className='pr-4'>
            <svg className='inline' width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 0L17.7813 10.2187L28 14L17.7813 17.7813L14 28L10.2187 17.7813L0 14L10.2187 10.2187L14 0Z" fill="white" />
            </svg> Admissions open for Class 1st to Class 5th – Apply Now!
          </span>
          <span className='pr-4'>
            <svg className='inline' width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 0L17.7813 10.2187L28 14L17.7813 17.7813L14 28L10.2187 17.7813L0 14L10.2187 10.2187L14 0Z" fill="white" />
            </svg> Admissions open for Class 1st to Class 5th – Apply Now!
          </span>
        </div>
      </div>

      <div className='z-[1] relative bg-white py-[40px] md:py-[60px] lg:py-[70px] '>
        <div className='container sm:container md:container lg:max-w-[1232px] px-4 mx-auto '>
          <div className='flex flex-wrap -mx-2'>
            <div className='w-full md:w-7/12 md:w-7/12 px-2'>
              <h3 className='pb-5 border-b border-black border-opacity-10 text-xl lg:text-2xl merriweather-font font-medium inline-block tracking-[-0.04em] mb-5'>BAL VISHWA BHARTI PUBLIC SR SEC SCHOOL</h3>
              <div className='space-y-2.5'>
                <p className='relative pl-6 text-[#1E1E1E] opacity-80 tracking-[-0.04em] text-base font-medium gotham-font'><IoCallOutline className='absolute left-0 top-1/2 -translate-y-1/2' /> 01412282790/ 01412282298/ 90018-69684</p>
                <p className='relative pl-6 text-[#1E1E1E] opacity-80 tracking-[-0.04em] text-base font-medium gotham-font'><CiMail className='absolute left-0 top-1/2 -translate-y-1/2' /> bvbpschool74@gmail.com/ bvbschool74@gmail.com</p>
                <p className='relative pl-6 text-[#1E1E1E] opacity-80 tracking-[-0.04em] text-base font-medium gotham-font'><CiLocationOn className='absolute left-0 top-1/2 -translate-y-1/2' /> D-74, Ghiya Marg, Bani Park, Jaipur, Rajasthan 302016</p>
              </div>
            </div>
            <div className='w-full md:w-3/12 lg:w-2/12 px-2'>
              <h3 className='pb-5 border-b border-black border-opacity-10 text-xl lg:text-2xl merriweather-font font-medium  tracking-[-0.04em] mb-5'>Quick Links </h3>
              <div className='space-y-2.5'>
                <p className='relative pl-6 text-[#1E1E1E] opacity-80 tracking-[-0.04em] text-base font-medium gotham-font'><a href='' className='text-[#1E1E1E] hover:text-[#EE834E]'><IoCallOutline className='absolute left-0 top-1/2 -translate-y-1/2' /> Careers</a></p>
                <p className='relative pl-6 text-[#1E1E1E] opacity-80 tracking-[-0.04em] text-base font-medium gotham-font'><a href='' className='text-[#1E1E1E] hover:text-[#EE834E]'><BiDonateHeart className='absolute left-0 top-1/2 -translate-y-1/2' /> Sponsor/ Donations</a></p>
                <p className='relative pl-6 text-[#1E1E1E] opacity-80 tracking-[-0.04em] text-base font-medium gotham-font'><a href='' className='text-[#1E1E1E] hover:text-[#EE834E]'><LuSchool className='absolute left-0 top-1/2 -translate-y-1/2' /> Infrastructure</a></p>
              </div>
            </div>
            <div className='w-full md:w-3/12 lg:w-3/12 px-2 flex justify-end'>
              <div>
                <h3 className='pb-5 border-b border-black border-opacity-10 text-xl lg:text-2xl merriweather-font font-medium  tracking-[-0.04em] mb-5 inline-block'>Follow us on </h3>
                <div className='space-y-2.5'>
                  <p className='relative pl-6 text-[#1E1E1E] opacity-80 tracking-[-0.04em] text-base font-medium gotham-font'><a href='' className='text-[#1E1E1E] hover:text-[#EE834E]'><FaFacebook className='absolute left-0 top-1/2 -translate-y-1/2' /> Bal Vishwa Bharti</a></p>
                  <p className='relative pl-6 text-[#1E1E1E] opacity-80 tracking-[-0.04em] text-base font-medium gotham-font'><a href='' className='text-[#1E1E1E] hover:text-[#EE834E]'><IoLogoInstagram className='absolute left-0 top-1/2 -translate-y-1/2' /> @bvbschool</a></p>
                  <p className='relative pl-6 text-[#1E1E1E] opacity-80 tracking-[-0.04em] text-base font-medium gotham-font'><a href='' className='text-[#1E1E1E] hover:text-[#EE834E]'><AiOutlineYoutube className='absolute left-0 top-1/2 -translate-y-1/2' />@bvbschool-t9z</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='z-[1] relative bg-white border-t border-black border-opacity-10 py-5'>
        <div className='container sm:container md:container lg:max-w-[1232px] px-4 mx-auto'>
          <p className='text-[#1E1E1E] opacity-50 tracking-[-0.04em] font-medium text-center text-base'>© Bal Vishwa Bharti School, 2024</p>
        </div>
      </div>
    </>
  )
}
