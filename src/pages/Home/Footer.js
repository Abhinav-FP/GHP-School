import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { BiDonateHeart } from "react-icons/bi";
import { LuSchool } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { AiOutlineYoutube } from "react-icons/ai";
import { HiOutlineBriefcase } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="z-[1] relative bg-[#FCFBF4] py-[40px] md:py-[60px] lg:py-[70px] ">
        <div className="container sm:container md:container lg:max-w-[1204px] px-4 mx-auto ">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full lg:w-7/12 px-2 mb-6 lg:mb-0">
              <h3 className="text-[#1E1E1E] text-center md:text-left pb-3 md:pb-4 lg:pb-5 border-b border-black border-opacity-10 text-xl lg:text-2xl merriweather-font font-medium lg:inline-block tracking-[-0.04em] mb-5">
                BAL VISHWA BHARTI PUBLIC SR SEC SCHOOL
              </h3>
              <div className="space-y-2.5 text-center  md:text-left flex md:block justify-center flex-col items-center">
                <p className="min-w-[200px] flex-wrap justify-center sm:min-w-[420px] flex md:block relative md:pl-6 text-[#1E1E1E] opacity-90 tracking-[-0.04em] text-base font-medium gotham-font">
                  <IoCallOutline size={18} className="md:absolute left-0 md:top-1/2 md:-translate-y-1/2 inline align-text-top mr-2 md:mr-0" />
                  <a href="tel:01412282790">01412282790</a><span>/</span>{" "}
                  <a href="tel:01412282298">01412282298</a><span>/</span>{" "}
                  <a href="tel:+919001869684">90018-69684</a>
                </p>
                <p className="min-w-[200px] flex-wrap justify-center sm:min-w-[420px] flex md:block relative md:pl-6 text-[#1E1E1E] opacity-90 tracking-[-0.04em] text-base font-medium gotham-font">
                  <CiMail size={18} className="md:absolute left-0 md:top-1/2 md:-translate-y-1/2 inline align-text-top mr-2 md:mr-0 mt-[3px] md:mt-0" />
                  <a href="mailto:bvbpschool74@gmail.com">
                    bvbpschool74@gmail.com
                  </a>/
                  {/* <span className="hidden md:inline">/</span> */}
                   {/* <br className="md:hidden"></br>  */}
                   {" "}
                  <a href="mailto:bvbpschool@yahoo.com">
                  bvbpschool@yahoo.com
                  </a>
                </p>
                <p className="min-w-[200px] flex-wrap justify-center sm:min-w-[420px] flex md:block relative md:pl-6 text-[#1E1E1E] opacity-90 tracking-[-0.04em] text-base font-medium gotham-font">
                  <a
                    target="_blank"
                    href="https://www.google.com/maps/dir//D,+74,+Ghiya+Marg,+Sindhi+Colony,+Bani+Park,+Jaipur,+Rajasthan+302032+@26.931568,75.791982/@27.7436422,76.5794786,7z/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x396db3efafa594ef:0x2da3b3ab79a793f4!3e0"
                  >
                    <CiLocationOn size={18} className="md:absolute left-0 md:top-1/2 md:-translate-y-1/2 align-text-top inline mr-2 md:mr-0" />{" "}
                    D-74, Ghiya Marg, Bani Park, Jaipur, Rajasthan 302016
                  </a>
                </p>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-2/12 px-2 mb-6 md:mb-0">
              <h3 className="text-center md:text-left text-[#1E1E1E] pb-3 md:pb-4 lg:pb-5 border-b border-black border-opacity-10 text-xl lg:text-2xl merriweather-font font-medium  tracking-[-0.04em] mb-5">
                 <span className="inline-flex min-w-[95px] md:block ">Quick Links</span>
              </h3>
              <div className="space-y-2.5 text-center md:text-left flex md:block justify-center flex-col items-center">
                <p className="min-w-[180px] flex  relative md:pl-6 text-[#1E1E1E] opacity-90 tracking-[-0.04em] text-base font-medium gotham-font">
                  <Link
                    href="/careers"
                    className="text-[#1E1E1E] hover:text-[#EE834E]"
                  >
                    <HiOutlineBriefcase  size={18} className="md:absolute left-0 md:top-1/2 md:-translate-y-1/2 align-text-top inline mr-2 md:mr-0" />{" "}
                    Careers
                  </Link>
                </p>
                <p className="min-w-[180px] flex  relative md:pl-6 text-[#1E1E1E] opacity-90 tracking-[-0.04em] text-base font-medium gotham-font">
                  <Link
                    href="/contact#donate"
                    className="text-[#1E1E1E] hover:text-[#EE834E]"
                  >
                    <BiDonateHeart size={18} className="md:absolute left-0 md:top-1/2 md:-translate-y-1/2 align-text-top inline mr-2 md:mr-0" />{" "}
                    Sponsor/ Donations
                  </Link>
                </p>
                <p className="min-w-[180px] flex  relative md:pl-6 text-[#1E1E1E] opacity-90 tracking-[-0.04em] text-base font-medium gotham-font">
                  <Link
                    href="/facilities#infrastructure"
                    className="text-[#1E1E1E] hover:text-[#EE834E]"
                  >
                    <LuSchool size={18} className="md:absolute left-0 md:top-1/2 md:-translate-y-1/2 align-text-top inline mr-2 md:mr-0" />{" "}
                    Infrastructure
                  </Link>
                </p>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 px-2 md:flex md:justify-end">
              <div>
                <h3 className="text-center md:text-left text-[#1E1E1E] pb-3 md:pb-4 lg:pb-5 border-b border-black border-opacity-10 text-xl lg:text-2xl merriweather-font font-medium  tracking-[-0.04em] mb-5 lg:inline-block">
                <span className="inline-flex min-w-[95px] md:block ">Follow us on </span>
                </h3>
                <div className="space-y-2.5 text-center md:text-left flex md:block justify-center flex-col items-center">
                  <p className="w-[160px] flex relative md:pl-6 text-[#1E1E1E] opacity-90 tracking-[-0.04em] text-base font-medium gotham-font">
                    <a  href="https://www.facebook.com/profile.php?id=61557061876412" target="blank" className="text-[#1E1E1E] hover:text-[#EE834E]">
                      <FaFacebook size={18} className="md:absolute left-0 md:top-1/2 md:-translate-y-1/2 align-text-top inline mr-2 md:mr-0" />{" "}
                      Bal Vishwa Bharti
                    </a>
                  </p>
                  <p className="w-[160px] flex relative md:pl-6 text-[#1E1E1E] opacity-90 tracking-[-0.04em] text-base font-medium gotham-font">
                    <a href="https://www.instagram.com/bvbschool?igsh=ZTR5ZWl3bmdjYThv" target="blank" className="text-[#1E1E1E] hover:text-[#EE834E]">
                      <IoLogoInstagram size={18} className="md:absolute left-0 md:top-1/2 md:-translate-y-1/2 align-text-top inline mr-2 md:mr-0" />{" "}
                      @bvbschool
                    </a>
                  </p>
                  <p className="w-[160px] flex relative md:pl-6 text-[#1E1E1E] opacity-90 tracking-[-0.04em] text-base font-medium gotham-font">
                    <a href="https://www.youtube.com/@bvbschool-t9z" target="blank" className="text-[#1E1E1E] hover:text-[#EE834E]">
                      <AiOutlineYoutube size={20} className="md:absolute left-0 md:top-1/2 md:-translate-y-1/2 align-text-top inline mr-2 md:mr-0" />
                      @bvbschool-t9z
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="z-[1] relative bg-[#FCFBF4] border-t border-black border-opacity-10 py-5">
        <div className="container sm:container md:container lg:max-w-[1204px] px-4 mx-auto">
          <p className="text-[#1E1E1E] opacity-50 tracking-[-0.04em] font-medium text-center text-base">
            © Bal Vishwa Bharti School, 2024
          </p>
        </div>
      </div>
    </>
  );
}
