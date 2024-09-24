import Layout from '@/layout/Layout'
import React from 'react';
import CareerBg from '../../../public/Career/careerbg.jpg';
import Image from 'next/image';

export default function index() {
  return (
    <Layout>
      <div className=''  >
        <Image className='w-full object-cover' height={867} width={1440} src={CareerBg} alt='img' ></Image>
      </div>
      
    </Layout>
  )
}
