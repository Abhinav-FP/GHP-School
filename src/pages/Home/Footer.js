import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { BiDonateHeart } from "react-icons/bi";
import { LuSchool } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { AiOutlineYoutube } from "react-icons/ai";
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <div className='z-[1] relative bg-[#FCFBF4] py-[40px] md:py-[60px] lg:py-[70px] '>
        <div className='container sm:container md:container lg:max-w-[1232px] px-4 mx-auto '>
          <div className='flex flex-wrap -mx-2'>
            <div className='w-full lg:w-7/12 px-2 mb-6 lg:mb-0'>
              <h3 className='pb-3 md:pb-4 lg:pb-5 border-b border-black border-opacity-10 text-xl lg:text-2xl merriweather-font font-medium lg:inline-block tracking-[-0.04em] mb-5'>BAL VISHWA BHARTI PUBLIC SR SEC SCHOOL</h3>
              <div className='space-y-2.5'>
                <p className='relative pl-6 text-[#1E1E1E] opacity-80 tracking-[-0.04em] text-base font-medium gotham-font'><IoCallOutline className='absolute left-0 top-1/2 -translate-y-1/2' /> 
                <a href="tel:01412282790">
                01412282790
                </a>
                /{" "} 
                <a href="tel:01412282298">
                 01412282298
                </a>
                /{" "}
                <a href="tel:+919001869684">
                90018-69684
                </a>
                </p>
                <p className='relative pl-6 text-[#1E1E1E] opacity-80 tracking-[-0.04em] text-base font-medium gotham-font'><CiMail className='absolute left-0 top-1/2 -translate-y-1/2' /> 
                <a href="mailto:bvbpschool74@gmail.com">
                bvbpschool74@gmail.com
                </a>
                /{" "}
                <a href="mailto:bvbschool74@gmail.com">
                bvbschool74@gmail.com
                  </a> 
                </p>
                <p className='relative pl-6 text-[#1E1E1E] opacity-80 tracking-[-0.04em] text-base font-medium gotham-font'>
                  <a href="https://www.google.com/maps/dir//D,+74,+Ghiya+Marg,+Sindhi+Colony,+Bani+Park,+Jaipur,+Rajasthan+302032+@26.931568,75.791982/@27.7436422,76.5794786,7z/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x396db3efafa594ef:0x2da3b3ab79a793f4!3e0">
                    <CiLocationOn className='absolute left-0 top-1/2 -translate-y-1/2' /> D-74, Ghiya Marg, Bani Park, Jaipur, Rajasthan 302016
                    </a>
                    </p>
              </div>
            </div>
            <div className='w-full md:w-6/12 lg:w-2/12 px-2 mb-6 md:mb-0'>
              <h3 className='pb-3 md:pb-4 lg:pb-5 border-b border-black border-opacity-10 text-xl lg:text-2xl merriweather-font font-medium  tracking-[-0.04em] mb-5'>Quick Links </h3>
              <div className='space-y-2.5'>
                <p className='relative pl-6 text-[#1E1E1E] opacity-80 tracking-[-0.04em] text-base font-medium gotham-font'><Link href='/careers' className='text-[#1E1E1E] hover:text-[#EE834E]'><IoCallOutline className='absolute left-0 top-1/2 -translate-y-1/2' /> Careers</Link></p>
                <p className='relative pl-6 text-[#1E1E1E] opacity-80 tracking-[-0.04em] text-base font-medium gotham-font'><Link href='/contact' className='text-[#1E1E1E] hover:text-[#EE834E]'><BiDonateHeart className='absolute left-0 top-1/2 -translate-y-1/2' /> Sponsor/ Donations</Link></p>
                <p className='relative pl-6 text-[#1E1E1E] opacity-80 tracking-[-0.04em] text-base font-medium gotham-font'><Link href='/facilities#infrastructure' className='text-[#1E1E1E] hover:text-[#EE834E]'><LuSchool className='absolute left-0 top-1/2 -translate-y-1/2' /> Infrastructure</Link></p>
              </div>
            </div>
            <div className='w-full md:w-6/12 lg:w-3/12 px-2 md:flex md:justify-end'>
              <div>
                <h3 className='pb-3 md:pb-4 lg:pb-5 border-b border-black border-opacity-10 text-xl lg:text-2xl merriweather-font font-medium  tracking-[-0.04em] mb-5 lg:inline-block'>Follow us on </h3>
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
      <div className='z-[1] relative bg-[#FCFBF4] border-t border-black border-opacity-10 py-5'>
        <div className='container sm:container md:container lg:max-w-[1232px] px-4 mx-auto'>
          <p className='text-[#1E1E1E] opacity-50 tracking-[-0.04em] font-medium text-center text-base'>© Bal Vishwa Bharti School, 2024</p>
        </div>
      </div>
    </>
  )
}
