import Layout from '@/layout/Layout'
import React from 'react'
import Houses from './Houses'
import Infrastructure from './Infrastructure'
import Sports from './Sports'
import Gallery from './Gallery'

export default function index() {
    return (
        <Layout>
            <div className='bg-no-repeat bg-center bg-cover pt-[102px] md:pt-[152px] md:pt-[195px] pb-[70px]  md:pb-[100px] lg:pb-[132px] lg:h-[500px]  bg-black bg-opacity-40 bg-blend-overlay' style={{ backgroundImage: `url('/Facilities/Banner.png')` }}  >
                <div className="container sm:container md:container lg:max-w-[1204px] px-4 mx-auto ">
                    <h1 className='text-white merriweather-font font-normal tracking-[-0.04em] text-center text-3xl md:text-4xl lg:text-5xl mb-0'>
                        Creating the Perfect Learning Environment
                    </h1>
                </div>
            </div>
            <Houses/>
            <Infrastructure/>
            <Sports/>
            <Gallery/>
        </Layout>
    )
}
