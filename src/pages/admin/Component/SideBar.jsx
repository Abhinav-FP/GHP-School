import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "../../../../public/Header/Logo.png";
import { useRouter } from 'next/router';
import { AiOutlineProduct } from "react-icons/ai";
import { CiSliderHorizontal } from "react-icons/ci";
import { FaWpforms } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { RiUserSearchLine } from "react-icons/ri";
import { TbUserSearch } from "react-icons/tb";
import { RiPriceTag2Line } from "react-icons/ri";
import { RiMessageFill } from "react-icons/ri";
import { GrScorecard } from "react-icons/gr";
import { FaDiscourse } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { GiKnightBanner } from "react-icons/gi";
import { RiGalleryLine } from "react-icons/ri";

function SideBarAdmin() {
    const pathname = usePathname();

    const handleclick = () => {
        console.log("logout")
    };
    const [isOpen, SetIsopen] = useState(false);
    const router = useRouter();
    const handleLogout = () => {
        localStorage.removeItem('token');

        router.push('/admin/login');
    };



    return (<>
        <div className={`z-50 custom_scroll w-[260px] md:w-[304px] fixed  left-0 top-0 bottom-0 overflow-y-auto  lg:block bg-white ${isOpen ? 'block' : 'hidden'}`} >
            <div className="px-4 py-4 md:px-6 md:py-6 lg:px-[28px] lg:py-8">
                <div className='mb-5 md:mb-10 lg:mb-[53px] text-center'>
                    <img className="max-w-full block m-auto" src={"/Header/Logo.png"} alt='img' />
                </div>
                <ul className="space-y-3">
                    <li>
                        <Link href="/admin"
                            className={`px-[15px] flex flex-wrap items-center py-[7px] rounded-full text-base tracking-[-0.03em] font-medium hover:text-[#EE834E] ${pathname === "/admin" ? 'bg-[#EE834E] bg-opacity-10 text-[#EE834E]' : 'text-[#8D929A] '}`}
                        >
                            <svg className="inline align-middle mr-[4px]" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.4622 7.5V2.5H18.1289V7.5H11.4622ZM3.12891 10.8333V2.5H9.79557V10.8333H3.12891ZM11.4622 17.5V9.16667H18.1289V17.5H11.4622ZM3.12891 17.5V12.5H9.79557V17.5H3.12891Z" fill="currentColor" />
                            </svg>
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/banner"
                            className={`px-[15px] flex flex-wrap items-center py-[7px] rounded-full text-base tracking-[-0.03em] font-medium hover:text-[#EE834E] ${pathname === "/admin/banner" ? 'bg-[#EE834E] bg-opacity-10 text-[#EE834E]' : 'text-[#8D929A] '}`}
                        >
                            <GiKnightBanner size={24} className="inline align-middle mr-[4px]" />
                            Banner
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/donation"
                            className={`px-[15px] flex flex-wrap items-center py-[7px] rounded-full text-base tracking-[-0.03em] font-medium hover:text-[#EE834E] ${pathname === "/admin/donation" ? 'bg-[#EE834E] bg-opacity-10 text-[#EE834E]' : 'text-[#8D929A] '}`}
                        >
                            <AiOutlineProduct size={24} className="inline align-middle mr-[4px]" />
                            Donation
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/admission"
                            className={`px-[15px] flex flex-wrap items-center py-[7px] rounded-full text-base tracking-[-0.03em] font-medium hover:text-[#EE834E] ${pathname === "/admin/admission" ? 'bg-[#EE834E] bg-opacity-10 text-[#EE834E]' : 'text-[#8D929A] '}`}
                        >

                            <CiSliderHorizontal size={24} className="inline align-middle mr-[4px]" />
                            Admission Slider
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/admissionform"
                            className={`px-[15px] flex flex-wrap items-center py-[7px] rounded-full text-base tracking-[-0.03em] font-medium hover:text-[#EE834E] ${pathname === "/admin/admissionform" ? 'bg-[#EE834E] bg-opacity-10 text-[#EE834E]' : 'text-[#8D929A] '}`}
                        >
                            <FaWpforms size={24} className="inline align-middle mr-[4px]" />
                            Admission Form
                        </Link>
                    </li>

                    <li>
                        <Link href="/admin/faculty"
                            className={`px-[15px] flex flex-wrap items-center py-[7px] rounded-full text-base tracking-[-0.03em] font-medium hover:text-[#EE834E] ${pathname === "/admin/faculty" ? 'bg-[#EE834E] bg-opacity-10 text-[#EE834E]' : 'text-[#8D929A] '}`}
                        >
                            <CiUser size={24} className="inline align-middle mr-[4px]" />
                            Faculty
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/principle"
                            className={`px-[15px] flex flex-wrap items-center py-[7px] rounded-full text-base tracking-[-0.03em] font-medium   text-[#0367F7] hover:text-[#EE834E] ${pathname === "/admin/principle" ? 'bg-[#EE834E] bg-opacity-10 text-[#EE834E]' : 'text-[#8D929A] '}`}
                        >
                            <CiUser size={24} className="inline align-middle mr-[4px]" />
                            &nbsp; Manage Principle
                        </Link>
                    </li>

                    <li>
                        <Link href="/admin/director"
                            className={`px-[15px] flex flex-wrap items-center py-[7px] rounded-full text-base tracking-[-0.03em] font-medium   text-[#0367F7] hover:text-[#EE834E] ${pathname === "/admin/director" ? 'bg-[#EE834E] bg-opacity-10 text-[#EE834E]' : 'text-[#8D929A] '}`}
                        >
                            <CiUser size={24} className="inline align-middle mr-[4px]" />
                            &nbsp; Manage Director
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/vacancy"
                            className={`px-[15px] flex flex-wrap items-center py-[7px] rounded-full text-base tracking-[-0.03em] font-medium   text-[#0367F7] hover:text-[#EE834E] ${pathname === "/admin/vacancy" ? 'bg-[#EE834E] bg-opacity-10 text-[#EE834E]' : 'text-[#8D929A] '}`}
                        >
                            z                            <RiUserSearchLine size={24} className="inline align-middle mr-[4px]" />
                            &nbsp; Manage Vacancy
                        </Link>
                    </li>

                    <li>
                        <Link href="/admin/career"
                            className={`px-[15px] flex flex-wrap items-center py-[7px] rounded-full text-base tracking-[-0.03em] font-medium   text-[#0367F7] hover:text-[#EE834E] ${pathname === "/admin/career" ? 'bg-[#EE834E] bg-opacity-10 text-[#EE834E]' : 'text-[#8D929A] '}`}
                        >
                            <TbUserSearch size={24} className="inline align-middle mr-[4px]" /> &nbsp; Manage Career
                        </Link>
                    </li>

                    <li>
                        <Link href="/admin/fees"
                            className={`px-[15px] flex flex-wrap items-center py-[7px] rounded-full text-base tracking-[-0.03em] font-medium   text-[#0367F7] hover:text-[#EE834E] ${pathname === "/admin/fees" ? 'bg-[#EE834E] bg-opacity-10 text-[#EE834E]' : 'text-[#8D929A] '}`}
                        >
                            <RiPriceTag2Line size={24} className="inline align-middle mr-[4px]" />
                            &nbsp; Manage Fees structure
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/inquiry"
                            className={`px-[15px] flex flex-wrap items-center py-[7px] rounded-full text-base tracking-[-0.03em] font-medium   text-[#0367F7] hover:text-[#EE834E] ${pathname === "/admin/inquiry" ? 'bg-[#EE834E] bg-opacity-10 text-[#EE834E]' : 'text-[#8D929A] '}`}
                        >
                            <RiMessageFill size={24} className="inline align-middle mr-[4px]" />
                            &nbsp; Enquiry
                        </Link>
                    </li>

                    <li>
                        <Link href="/admin/result"
                            className={`px-[15px] flex flex-wrap items-center py-[7px] rounded-full text-base tracking-[-0.03em] font-medium   text-[#0367F7] hover:text-[#EE834E] ${pathname === "/admin/result" ? 'bg-[#EE834E] bg-opacity-10 text-[#EE834E]' : 'text-[#8D929A] '}`}
                        >
                            <GrScorecard size={24} className="inline align-middle mr-[4px]" />
                            &nbsp; Result
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/syllabus"
                            className={`px-[15px] flex flex-wrap items-center py-[7px] rounded-full text-base tracking-[-0.03em] font-medium   text-[#0367F7] hover:text-[#EE834E] ${pathname === "/admin/syllabus" ? 'bg-[#EE834E] bg-opacity-10 text-[#EE834E]' : 'text-[#8D929A] '}`}
                        >
                            <FaDiscourse size={24} className="inline align-middle mr-[4px]" />  &nbsp; Syllabus
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/gallery"
                            className={`px-[15px] flex flex-wrap items-center py-[7px] rounded-full text-base tracking-[-0.03em] font-medium   text-[#0367F7] hover:text-[#EE834E] ${pathname === "/admin/gallery" ? 'bg-[#EE834E] bg-opacity-10 text-[#EE834E]' : 'text-[#8D929A] '}`}
                        >
                            <RiGalleryLine size={24} className="inline align-middle mr-[4px]" />
                            &nbsp; Gallery
                        </Link>
                    </li>

                    <li>
                        <Link href="/admin/paymenthistory"
                            className={`px-[15px] flex flex-wrap items-center py-[7px] rounded-full text-base tracking-[-0.03em] font-medium   text-[#0367F7] hover:text-[#EE834E] ${pathname === "/admin/paymenthistory" ? 'bg-[#EE834E] bg-opacity-10 text-[#EE834E]' : 'text-[#8D929A] '}`}
                        >
                            <MdOutlinePayment size={24} className="inline align-middle mr-[4px]" />
                            &nbsp; Payment History
                        </Link>
                    </li>

                    <li>
                        <button onClick={handleLogout} className="px-[15px] flex flex-wrap items-center py-[7px]  rounded-full text-base tracking-[-0.03em] font-medium text-[#FF1B1B] hover:text-[#EE834E]">
                            <CiLogout size={24} className="inline align-middle mr-[4px]" />
                            Logout
                        </button>
                    </li>

                </ul>
            </div>
        </div>

    </>);
};
export default SideBarAdmin;