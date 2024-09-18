import Layout from '@/Component/Layout'
import React from 'react'
import Houses from './Houses'
import Infrastructure from './Infrastructure'
import Sports from './Sports'
import Gallery from './Gallery'

export default function index() {
    return (
        <Layout>
            <div className=' bg-no-repeat bg-center bg-cover pt-[195px] pb-[135px] lg:h-[500px] bg-black bg-opacity-40 bg-blend-overlay bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url('/Facilities/Banner.png')` }}  >
                <div className="container sm:container md:container lg:max-w-[1232px] px-4 mx-auto ">
                    <h1 className='text-white text-5xl tracking-[-0.04em] libre-baskerville text-center mb-2.5'>
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
