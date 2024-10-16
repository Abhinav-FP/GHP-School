import Layout from '@/layout/Layout'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ThankyouImage from '../../../public/ThankYou/thankyou.png';
import { useRouter } from 'next/router';
import Details from '../api/admin/Details';

export default function Success() {
  const router = useRouter();
  const  slug  = router.query.success;
  const [listing, setLisitng] = useState("");
  const [Loading, setLoading] = useState(false);
  const link = () => {
    if(slug){
      setLoading(true);
      const main = new Details();
      main
      .getInvoice(slug)
      .then((r) => {
        setLoading(false);
        setLisitng(r?.data?.data);
      })
      .catch((err) => {
        setLoading(false);
        setLisitng([]);
        console.log("error", err);

        });
      }
  };

  useEffect(() => {
    link();
  }, [slug]);
  return (
    <Layout>
      <div className='w-full bg-white py-[50px] md:py-[70px] lg:py-[100px]'>
        <div className='mx-auto container sm:container md:container lg:max-w-[1204px] px-4 text-center'>
             <Image src={ThankyouImage} className='mx-auto block mb-8 md:mb-10 lg:mb-14'  alt='img'></Image>   
             <h2 className='merriweather-font font-normal  text-2xl md:text-3xl lg:text-4xl mb-2 text-[#1E1E1E]  tracking-[-0.04em] mb-3 lg:mb-4'>Thank You for Your Generosity!</h2> 
             <p className='max-w-[708px] mx-auto text-[#666666] text-base font-medium gotham-font tracking-[-0.04em] mb-4 lg:mb-[28px]'>Your donation has been successfully received, and we are incredibly grateful for your support. Your contribution will make a meaningful difference and help us continue our mission.
             Please check your email for the invoice. To avail tax benefits under Section 80G, kindly download and print a copy of the invoice.</p>
             <a href={listing?.link || ""} target="blank" className='inline-block bg-white hover:bg-[#EE834E] rounded px-6 lg:px-10 py-2 lg:py-2.5 text-[#EE834E] hover:text-white font-normal tracking-[-0.04em] border border-[#EE834E] '>Download Invoice </a>
        </div>
      </div> 
    </Layout>
  )
}
