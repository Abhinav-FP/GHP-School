import React, { useState } from "react";
import Image from 'next/image';
import Logo from "../../../public/Header/Logo.png";
import Link from 'next/link';  // Correct import for Link
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter(); // Initialize the router
  const url = router.pathname; // Get the current URL

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <nav className="bg-white py-3 lg:py-3.5">
        <div className="mx-auto container sm:container md:container lg:max-w-[1232px] px-4">
          <div className="relative flex items-center justify-between">
            <div className="flex-shrink-0">
              <Link href="/"><Image className="max-w-full w-auto max-h-[70px] md:max-h-[70px] lg:max-h-[91px]" src={Logo} alt="BVBS School logo" /></Link>
            </div>
            <div className="hidden lg:ml-6 lg:block">
              <div className="flex space-x-6 lg:space-x-8 xl:space-x-10">
                {/* <!-- Current: "text-[#EE834E]" --> */}
                <Link href="/" className={'text-[17px] tracking-[-0.04em] font-medium hover:text-[#EE834E] ' + (url === '/' ? 'text-[#EE834E]' : 'text-[#1E1E1E]')}>
                  About
                  <MdOutlineKeyboardArrowDown className="inline" size={18} />
                </Link>
                <Link href="/academies" className={'text-[17px] tracking-[-0.04em] font-medium hover:text-[#EE834E] ' + (url.startsWith('/academies') ? 'text-[#EE834E]' : 'text-[#1E1E1E]')}>
                  Academies
                  <MdOutlineKeyboardArrowDown className="inline" size={18} />
                </Link>
                <Link href="/facilities" className={'text-[17px] tracking-[-0.04em] font-medium hover:text-[#EE834E] ' + (url === '/facilities' ? 'text-[#EE834E]' : 'text-[#1E1E1E]')}>
                  Facilities
                  <MdOutlineKeyboardArrowDown className="inline" size={18} />
                </Link>
                <Link href="/admissions" className={'text-[17px] tracking-[-0.04em] font-medium hover:text-[#EE834E] ' + (url.startsWith('/admissions') ? 'text-[#EE834E]' : 'text-[#1E1E1E]')}>
                  Admissions
                  <MdOutlineKeyboardArrowDown className="inline" size={18} />
                </Link>
                <Link href="/contact" className={'text-[17px] tracking-[-0.04em] font-medium hover:text-[#EE834E] ' + (url.startsWith('/contact') ? 'text-[#EE834E]' : 'text-[#1E1E1E]')}>
                  Contact
                  <MdOutlineKeyboardArrowDown className="inline" size={18} />
                </Link>
              </div>
            </div>

            <div className="flex lg:hidden">
              {/* <!-- Mobile menu button --> */}
              <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded={menuOpen} onClick={toggleMenu}>
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                {/* <!--
                    Icon when menu is closed.

                    Menu open: "hidden", Menu closed: "block"
                --> */}
                <svg className={`${menuOpen ? 'hidden' : 'block'} h-6 w-6`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                {/* <!--
                        Icon when menu is open.

                        Menu open: "block", Menu closed: "hidden"
                    --> */}
                <svg className={`${menuOpen ? 'block' : 'hidden'} h-6 w-6`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

          </div>
        </div>

        {/* <!-- mobile menu */}
        <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <Link href="/" className="px-3 py-2 block text-[17px] tracking-[-0.04em] font-medium text-black hover:text-[#0367F7]">Home</Link>
            <Link href="/subscription" className={' px-3 py-2 block  text-[17px] tracking-[-0.04em] font-medium  hover:text-[#0367F7]  ' + (url.startsWith('/subscription') ? 'text-[#0367F7]' : '')}>Subscription</Link>
            <a href="#pricing" className="px-3 py-2 block  text-[17px] tracking-[-0.04em] font-medium text-black hover:text-[#0367F7]">Pricing</a>
            <Link href="/about" className="px-3 py-2 block text-[17px] tracking-[-0.04em] font-medium text-black hover:text-[#0367F7]">About</Link>
            <Link href="/contact" className="px-3 py-2 block text-[17px] tracking-[-0.04em] font-medium text-black hover:text-[#0367F7]">Contact</Link>
          </div>

        </div>
      </nav>



    </>
  )
}
