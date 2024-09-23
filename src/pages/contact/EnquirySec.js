import React from "react";
import Image from 'next/image';
import InquiryformBanner from '../../../public/Contacts/InquiryformBanner.png';
import Captcha from '../../../public/Contacts/captcha.png';


function EnquirySec() {
    return (
        <div className="bg-white pb-[50px] md:pb-[70px] lg:pb-[100px]">
            <div className='container sm:container md:container lg:max-w-[1232px] px-4 mx-auto'>
                <div className='flex flex-wrap items-center -mx-4 grid-cols-4'>
                    <div className='w-full lg:w-6/12 px-4 mb-6 lg:mb-0'>
                        <Image  className="w-full" src={InquiryformBanner} alt="img" />
                    </div>
                    <div className='w-full lg:w-6/12 px-4'>
                        <div className="bg-[#ECE1C5]">
                            <div className="px-4 lg:px-[30px] py-4 lg:py-[28px]  border-b border-black border-opacity-10">
                                <h2 className="merriweather-font font-normal  text-2xl md:text-3xl lg:text-4xl mb-1 text-[#1E1E1E]  tracking-[-0.04em]">Make an inquiry </h2>
                                <p className="text-black font-medium text-base tracking-[-0.04em] mb-0">Explore partnership opportunities or space rental with BVBS School. Complete the enquiry form to connect with us and discuss your needs.</p>
                            </div>
                            <div className="px-4 lg:px-[30px] py-4 lg:py-[30px] ">
                                <div className="mb-4 lg:mb-6">
                                  <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">Name </label>
                                  <input type="text" className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none" />
                                </div>
                                <div className="mb-4 lg:mb-6">
                                  <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">Email  </label>
                                  <input type="email" className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none" />
                                </div>

                                <div className="mb-4 lg:mb-6">
                                  <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">Contact no </label>
                                  <input type="text" className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none" />
                                </div>

                                <div className="mb-4 lg:mb-6">
                                  <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">Message </label>
                                  <textarea type="text" className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-32 lg:h-[157px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"></textarea>
                                </div>
                                <div className="flex flex-warp -mx-4">
                                    <div className="px-4 items-center w-full lg:w-7/12">
                                        <Image src={Captcha} />
                                    </div>
                                    <div className="px-4 items-center w-full lg:w-5/12 text-right">
                                    <button type="submit" class="bg-[#EE834E] hover:bg-[#ECCD6E] rounded px-8 lg:px-12 py-2 lg:py-3.5 text-white text-base lg:text-lg font-normal tracking-[-0.04em]" fdprocessedid="1gg5s">Submit</button>
                                    </div>

                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default EnquirySec;