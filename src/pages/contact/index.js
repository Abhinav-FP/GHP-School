import Layout from '@/Component/Layout'
import React from 'react';
import GetTouch from './GetTouch';
import EnquirySec from './EnquirySec';
import Donate from './Donate';


export default function index() {
  return (
    <Layout>
      <div className='bg-no-repeat bg-center bg-cover pt-[102px] md:pt-[152px] md:pt-[195px] pb-[70px]  md:pb-[100px] lg:pb-[132px] lg:h-[500px]  bg-black bg-opacity-40 bg-blend-overlay' style={{ backgroundImage: `url('/Facilities/Banner.png')` }}  >
        <div className="container sm:container md:container lg:max-w-[1232px] px-4 mx-auto ">
          <h1 className='text-white merriweather-font font-normal tracking-[-0.04em] text-center text-3xl md:text-4xl lg:text-5xl mb-0'>
            Reach Out to us and Inspire the Change
          </h1>
        </div>
      </div>
      <GetTouch />
      <EnquirySec />
      <Donate />
    </Layout>

  )
}
