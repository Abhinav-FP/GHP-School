import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { BiDonateHeart } from "react-icons/bi";
import { LuSchool } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { AiOutlineYoutube } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="z-[1] relative bg-[#FCFBF4] py-[40px] md:py-[60px] lg:py-[70px] ">
        <div className="container sm:container md:container lg:max-w-[1204px] px-4 mx-auto ">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full lg:w-7/12 px-2 mb-6 lg:mb-0">
              <h3 className="pb-3 md:pb-4 lg:pb-5 border-b border-black border-opacity-10 text-xl lg:text-2xl merriweather-font font-medium lg:inline-block tracking-[-0.04em] mb-5">
                BAL VISHWA BHARTI PUBLIC SR SEC SCHOOL
              </h3>
              <div className="space-y-2.5">
                <p className="relative pl-6 text-[#1E1E1E] opacity-80 tracking-[-0.04em] text-base font-medium gotham-font">
                  <IoCallOutline className="absolute left-0 top-1/2 -translate-y-1/2" />
                  <a href="tel:01412282790">01412282790</a>/{" "}
                  <a href="tel:01412282298">01412282298</a>/{" "}
                  <a href="tel:+919001869684">90018-69684</a>
                </p>
                <p className="relative pl-6 text-[#1E1E1E] opacity-80 tracking-[-0.04em] text-base font-medium gotham-font">
                  <CiMail className="absolute left-0 top-1/2 -translate-y-1/2" />
                  <a href="mailto:bvbpschool74@gmail.com">
                    bvbpschool74@gmail.com
                  </a>
                  /{" "}
                  <a href="mailto:bvbschool74@gmail.com">
                    bvbschool74@gmail.com
                  </a>
                </p>
                <p className="relative pl-6 text-[#1E1E1E] opacity-80 tracking-[-0.04em] text-base font-medium gotham-font">
                  <a
                    target="_blank"
                    href="https://www.google.com/maps/dir//D,+74,+Ghiya+Marg,+Sindhi+Colony,+Bani+Park,+Jaipur,+Rajasthan+302032+@26.931568,75.791982/@27.7436422,76.5794786,7z/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x396db3efafa594ef:0x2da3b3ab79a793f4!3e0"
                  >
                    <CiLocationOn className="absolute left-0 top-1/2 -translate-y-1/2" />{" "}
                    D-74, Ghiya Marg, Bani Park, Jaipur, Rajasthan 302016
                  </a>
                </p>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-2/12 px-2 mb-6 md:mb-0">
              <h3 className="pb-3 md:pb-4 lg:pb-5 border-b border-black border-opacity-10 text-xl lg:text-2xl merriweather-font font-medium  tracking-[-0.04em] mb-5">
                Quick Links{" "}
              </h3>
              <div className="space-y-2.5">
                <p className="relative pl-6 text-[#1E1E1E] opacity-80 tracking-[-0.04em] text-base font-medium gotham-font">
                  <Link
                    href="/careers"
                    className="text-[#1E1E1E] hover:text-[#EE834E]"
                  >
                    <svg
                      className="absolute left-0 top-1/2 -translate-y-1/2"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.25 4.5H12V3.75C12 3.35218 11.842 2.97064 11.5607 2.68934C11.2794 2.40804 10.8978 2.25 10.5 2.25H7.5C7.10218 2.25 6.72064 2.40804 6.43934 2.68934C6.15804 2.97064 6 3.35218 6 3.75V4.5H3.75C3.15326 4.5 2.58097 4.73705 2.15901 5.15901C1.73705 5.58097 1.5 6.15326 1.5 6.75V13.5C1.5 14.0967 1.73705 14.669 2.15901 15.091C2.58097 15.5129 3.15326 15.75 3.75 15.75H14.25C14.8467 15.75 15.419 15.5129 15.841 15.091C16.2629 14.669 16.5 14.0967 16.5 13.5V6.75C16.5 6.15326 16.2629 5.58097 15.841 5.15901C15.419 4.73705 14.8467 4.5 14.25 4.5ZM7.5 3.75H10.5V4.5H7.5V3.75ZM15 13.5C15 13.6989 14.921 13.8897 14.7803 14.0303C14.6397 14.171 14.4489 14.25 14.25 14.25H3.75C3.55109 14.25 3.36032 14.171 3.21967 14.0303C3.07902 13.8897 3 13.6989 3 13.5V9.2925L6.51 10.5C6.58964 10.5107 6.67036 10.5107 6.75 10.5H11.25C11.3313 10.4984 11.4121 10.4858 11.49 10.4625L15 9.2925V13.5ZM15 7.71L11.13 9H6.87L3 7.71V6.75C3 6.55109 3.07902 6.36032 3.21967 6.21967C3.36032 6.07902 3.55109 6 3.75 6H14.25C14.4489 6 14.6397 6.07902 14.7803 6.21967C14.921 6.36032 15 6.55109 15 6.75V7.71Z"
                        fill="currentColor" // Use currentColor for the fill
                        fillOpacity="0.8"
                      />
                    </svg>
                    Careers
                  </Link>
                </p>
                <p className="relative pl-6 text-[#1E1E1E] opacity-80 tracking-[-0.04em] text-base font-medium gotham-font">
                  <Link
                    href="/contact#donate"
                    className="text-[#1E1E1E] hover:text-[#EE834E]"
                  >
                    <BiDonateHeart className="absolute left-0 top-1/2 -translate-y-1/2" />{" "}
                    Sponsor/ Donations
                  </Link>
                </p>
                <p className="relative pl-6 text-[#1E1E1E] opacity-80 tracking-[-0.04em] text-base font-medium gotham-font">
                  <Link
                    href="/facilities#infrastructure"
                    className="text-[#1E1E1E] hover:text-[#EE834E]"
                  >
                    <LuSchool className="absolute left-0 top-1/2 -translate-y-1/2" />{" "}
                    Infrastructure
                  </Link>
                </p>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 px-2 md:flex md:justify-end">
              <div>
                <h3 className="pb-3 md:pb-4 lg:pb-5 border-b border-black border-opacity-10 text-xl lg:text-2xl merriweather-font font-medium  tracking-[-0.04em] mb-5 lg:inline-block">
                  Follow us on{" "}
                </h3>
                <div className="space-y-2.5">
                  <p className="relative pl-6 text-[#1E1E1E] opacity-80 tracking-[-0.04em] text-base font-medium gotham-font">
                    <a href="https://www.facebook.com/profile.php?id=61557061876412" target="blank" className="text-[#1E1E1E] hover:text-[#EE834E]">
                      <FaFacebook className="absolute left-0 top-1/2 -translate-y-1/2" />{" "}
                      Bal Vishwa Bharti
                    </a>
                  </p>
                  <p className="relative pl-6 text-[#1E1E1E] opacity-80 tracking-[-0.04em] text-base font-medium gotham-font">
                    <a href="https://www.instagram.com/bvbschool?igsh=ZTR5ZWl3bmdjYThv" target="blank" className="text-[#1E1E1E] hover:text-[#EE834E]">
                      <IoLogoInstagram className="absolute left-0 top-1/2 -translate-y-1/2" />{" "}
                      @bvbschool
                    </a>
                  </p>
                  <p className="relative pl-6 text-[#1E1E1E] opacity-80 tracking-[-0.04em] text-base font-medium gotham-font">
                    <a href="https://www.youtube.com/@bvbschool-t9z" target="blank" className="text-[#1E1E1E] hover:text-[#EE834E]">
                      <AiOutlineYoutube className="absolute left-0 top-1/2 -translate-y-1/2" />
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
