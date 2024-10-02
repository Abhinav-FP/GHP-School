import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { formatMultiPrice } from '@/hooks/ValueData';

function Donate() {
    const TuitionFees = [
        {
            imagesrc: "/Contacts/Tutionfees.png",
            title: "Tuition Fees/Child",
            amount: "11100",
            content: "Sponsor a child’s entire education for one academic year, covering tuition and giving them the foundation for a brighter future.",

        },
        {
            imagesrc: "/Contacts/BookSet.png",
            title: "Book Set/Child",
            amount: "3100",
            content: "Provide a child with the complete book set, ensuring they are equipped to succeed in their studies.",
        },
        {
            imagesrc: "/Contacts/UniformSet.png",
            title: "Uniform Set/Child",
            amount: "2100",
            content: "Sponsor a child’s school and sports uniform set, helping them feel confident and prepared for both academic and extracurricular activities.",
        },
        {
            imagesrc: "/Contacts/UniformWithBookset.png",
            title: "Tuition Fees with Book & Uniform Set",
            amount: "15000",
            content: "Support a child’s complete academic journey by covering their tuition, book set and uniforms, giving them everything they need to thrive for a full year.",
        },
    ];
    return (
        <div className="bg-white pb-[50px] md:pb-[70px] lg:pb-[100px]" >
            <div className='container sm:container md:container lg:max-w-[1232px] px-4 mx-auto'>
                <h2 className='merriweather-font font-normal  text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-5 text-[#1E1E1E]  tracking-[-0.04em] text-center'>Donate Today, Shape Tomorrow</h2>
                <p className='text-[#666666] font-medium text-base gotham-font text-center mb-1.5 tracking-[-0.04em] text-center mb-8 md:mb-10 lg:mb-14 mx-auto max-w-[883px] text-center'>{`Support BVBS School's mission as an NGO by contributing to our initiatives. You can sponsor a child’s education, donate books and stationery, or sponsor a set of uniforms. In addition, your contributions are eligible for tax benefits under Section 80G. Contact us to make a difference in our students' lives while enjoying tax benefits.`}</p>
                <div className='flex flex-wrap -mx-2.5 '>
                    {TuitionFees && TuitionFees?.map((item, index) => (
                        <div className='w-full sm:w-6/12 lg:w-3/12 px-2.5 mb-3 lg:mb-0' key={index}>
                            <div className='w-full h-[207px] bg-[#f9f9f9]'>
                                <Image className='mx-auto mb-4 lg:mb-5 block' width={285} height={207} src={item.imagesrc} alt={item.name} />
                            </div>
                            <div className='pt-4 lg:pt-6'>
                                <h3 className='lg:min-h-[64px] merriweather-font font-normal tracking-[-0.04em] text-xl lg:text-2xl text-[#1E1E1E] mb-2 lg:mb-2.5'>{item.title}</h3>
                                <p className='text-[#EE834E] text-lg lg:text-xl tracking-[-0.04em] uppercase mb-4 lg:mb-5'>AMOUNT : {formatMultiPrice(item?.amount) ?? 0}</p>
                                <p className='text-[#666666] font-medium text-base gotham-font mb-1.5 tracking-[-0.04em] mb-8 md:mb-10 lg:mb-14  min-h-[107px]'>{item.content}</p>
                                <Link href='contact/donation/123' className='block text-[#EE834E] hover:bg-[#EE834E] hover:text-white border border-[#EE834E] text-base lg:text-lg rounded px-4 py-3 text-center tracking-[-0.04em]'>Sponsor Now</Link>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
};
export default Donate;