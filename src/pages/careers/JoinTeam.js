import React from 'react';
import Image from 'next/image';
import Captcha from '../../../public/Contacts/captcha.png';

export default function JoinTeam() {
    return (
        <div className='bg-white py-[40px] md:py-[80px] lg:py-[100px]'>
            <div className='container sm:container md:container lg:max-w-[1232px] px-4 mx-auto'>
                <h2 class="merriweather-font font-normal text-2xl md:text-3xl lg:text-4xl mb-2.5 text-[#1E1E1E] tracking-[-0.04em] text-center">Shape the future with us</h2>
                <p className='max-w-[965px] text-center tracking-[-0.04em] mx-auto text-center text-[#666666] text-base font-medium mb-6 lg:mb-10'>Established in July 1990, BVBS School has been a beacon of excellence in education for over three decades. Join our dedicated team and contribute to a legacy of inspiring young minds and fostering a love for learning.</p>

                <div className='bg-[#ECE1C5]'>
                    <div className='px-[30px] lg:px-[50px] pt-6 lg:pt-[30px] pb-4 border-b border-black border-opacity-10'>
                        <h2 class="merriweather-font font-normal text-2xl md:text-3xl lg:text-4xl mb-2.5 text-[#1E1E1E] tracking-[-0.04em] text-center">Join our team</h2>
                    </div>
                    <div className='py-6 lg:py-[30px] px-[20px] lg:px-[40px]'>
                        <div className='flex -mx-2.5 flex-wrap'>
                            <div className='w-full md:w-6/12 px-2.5 mb-4 lg:mb-6'>
                                <label class="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">Name<em className='text-[#FF5400]'>*</em> </label>
                                <input type="text" class="border border-black border-opacity-10 px-3.5 py-2 w-full appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none" />
                            </div>
                            <div className='w-full md:w-6/12 px-2.5 mb-4 lg:mb-6'>
                                <label class="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">SurName </label>
                                <input type="text" class="border border-black border-opacity-10 px-3.5 py-2 w-full appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none" />
                            </div>
                            <div className='w-full md:w-6/12 px-2.5 mb-4 lg:mb-6'>
                                <label class="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">Email<em className='text-[#FF5400]'>*</em> </label>
                                <input type="text" class="border border-black border-opacity-10 px-3.5 py-2 w-full appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none" />
                            </div>
                            <div className='w-full md:w-6/12 px-2.5 mb-4 lg:mb-6'>
                                <label class="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">Contact No<em className='text-[#FF5400]'>*</em> </label>
                                <input type="text" class="border border-black border-opacity-10 px-3.5 py-2 w-full appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none" />
                            </div>
                            <div className='w-full md:w-6/12 px-2.5 mb-4 lg:mb-6'>
                                <label class="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">Position and subject<em className='text-[#FF5400]'>*</em> </label>
                                <select type="text" class="border border-black border-opacity-10 px-3.5 py-2 w-full appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none" >
                                    <option>Teacher</option>
                                </select>
                            </div>
                            <div className='w-full md:w-6/12 px-2.5 mb-4 lg:mb-6'>
                                <label class="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">Experience (in years) </label>
                                <input type="text" class="border border-black border-opacity-10 px-3.5 py-2 w-full appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none" />
                            </div>
                            
                            <div className='w-full md:w-12/12 px-2.5 mb-4 lg:mb-6'>
                                <label class="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">Upload resume </label>
                                <input type="file" class="bg-white border border-black border-opacity-10 px-3.5 py-2 w-full appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none" />
                            </div>
                            <div className='w-full md:w-12/12 px-2.5 mb-4 lg:mb-6'>
                                <label class="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">Tell us about yourself </label>
                                <textarea type="file" class="bg-white border border-black border-opacity-10 px-3.5 py-2 w-full appearance-none h-11 lg:h-[139px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"></textarea>
                            </div>
                            <div className='w-full md:w-6/12 px-2.5 mb-4 lg:mb-0'>
                            <Image src={Captcha} />
                            </div>
                            <div className='w-full md:w-6/12 px-2.5 mb-4 lg:mb-0 lg:text-right'>
                            <button type="submit" class="bg-[#EE834E] lg:min-w-[253px] text-center hover:bg-[#ECCD6E] rounded px-8 lg:px-12 py-2 lg:py-3.5 text-white text-base lg:text-lg font-normal tracking-[-0.04em]" fdprocessedid="1gg5s">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}