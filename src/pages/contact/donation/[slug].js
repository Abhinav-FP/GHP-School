import Layout from "@/layout/Layout";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addItem } from "@/redux/cartSlice";
import { useRouter } from "next/router";
import Details from "@/pages/api/admin/Details";
import { formatMultiPrice } from "@/hooks/ValueData";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Donation() {
  const router = useRouter();
  const { slug } = router.query;
  const [currentPageUrl, setCurrentPageUrl] = useState("");
  const [listing, setLisitng] = useState("");
  const [Loading, setLoading] = useState(false);
  const [Qty, setQty] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useDispatch();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title, // The title of the page or content
          text: 'Check out this page!', // Optional message
          url: window.location.href, // The current URL to be shared
        });
        console.log('Content shared successfully');
      } catch (error) {
        console.error('Error sharing content:', error);
      }
    } else {
      alert('Web Share API is not supported in your browser.');
    }
  };

  function Increment() {
    setQty(Qty + 1);
  }
  function decrement() {
    if (Qty <= 1) {
      return;
    }
    setQty(Qty - 1);
  }
  const currentUrl = window.location.href;
  console.log("curenturl",currentUrl);

  const handleAddItem = () => {
    const newItem = {
      id: listing?._id,
      name: listing?.name,
      price: listing?.price,
      quantity: Qty,
      imgUrl: listing?.photo,
    };
    dispatch(addItem(newItem));
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 5000);
  };

  useEffect(() => {
    if (slug) {
      setLoading(true);
      const main = new Details();
      main
        .donationgetwithId(slug)
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
  }, [slug]);

  // Set current page URL only on the client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPageUrl(window.location.href);
    }
  }, [router.asPath]);

  return (
    <Layout>
      <nav aria-label="breadcrumb" className="w-full">
        <div className="mx-auto container sm:container md:container lg:max-w-[1204px] px-4">
          <ol className="flex w-full flex-wrap items-center py-6 lg:pt-12 lg:pb-8 ">
            <li className="flex cursor-pointer items-center text-base md:text-lg lg:text-xl font-medium  antialiased text-[#7f7f7f]  transition-colors duration-300 hover:text-[#EE834E]">
              <a href="#">Home</a>
              <span className="pointer-events-none mx-1 select-none  text-base md:text-lg lg:text-xl font-medium  antialiased text-[#7f7f7f]">
                /
              </span>
            </li>
            <li className="flex cursor-pointer items-center text-base md:text-lg lg:text-xl font-medium  antialiased text-[#7f7f7f] transition-colors duration-300 hover:text-[#EE834E]">
              <a href="#">
                <span>Contact us</span>
              </a>
              <span className="pointer-events-none mx-2 select-none text-base md:text-lg lg:text-xl font-medium  antialiased text-[#7f7f7f]">
                /
              </span>
            </li>
            <li className="flex items-center text-base md:text-lg lg:text-xl font-medium  antialiased text-[#7f7f7f] transition-colors duration-300 hover:text-[#EE834E]">
              <span className="font-medium text-[#7f7f7f] transition-colors">
                Tuition Fees
              </span>
            </li>
          </ol>
        </div>
      </nav>
      <div className="w-full bg-white pb-[50px] md:pb-[70px] lg:pb-[100px]">
        <div className="mx-auto container sm:container md:container lg:max-w-[1204px] px-4">
          <div className="flex flex-wrap -mx-5 items-center">
            <div className="w-full md:w-6/12 px-5">
              <div className="bg-[#f9f9f9] h-[580px] flex items-center justify-center">
                <Image
                  blurDataURL={`${listing?.photo}?q=1`}
                  placeholder="blur"
                  src={listing?.photo}
                  alt="Img"
                  loading="lazy"
                  width="500"
                  height="500"
                />
              </div>
            </div>
            <div className="w-full md:w-6/12 px-5">
              <h1 className="merriweather-font font-normal  text-2xl md:text-3xl lg:text-4xl mb-4 lg:mb-6 text-[#1E1E1E]  tracking-[-0.04em]">
                {listing?.name} 
              </h1>
              <div className="text-[#EE834E] text-lg font-medium tracking-[-0.04em] uppercase mb-0">
                AMOUNT : {formatMultiPrice(listing?.price) || 0}
              </div>
              <div className="mt-5 lg:mt-[30px] mb-8 lg:mb-10 pt-5 lg:pt-[30px]  border-t border-black border-opacity-10">
                <p className="text-[#666666] font-medium text-base gotham-font mb-0 tracking-[-0.04em]">
                  {listing?.description}
                </p>
              </div>
              <div className="flex mb-4 lg:mb-6 ">
                <div className="min-w-[140px] flex border border-[#EE834E] rounded mr-4 lg:mr-[23px] py-[12px] justify-center items-center">
                  <button
                    className="text-[#EE834E] font-medium text-2xl tracking-[-0.04em]"
                    onClick={decrement}
                  >
                    -
                  </button>
                  <div className="text-[#EE834E] font-medium text-lg text-center w-[50px] mx-3.5 border-l border-r border-black border-opacity-10 py-[2px] tracking-[-0.04em]">
                    {Qty}
                  </div>
                  <button
                    className="text-[#EE834E] font-medium text-2xl tracking-[-0.04em]"
                    onClick={Increment}
                  >
                    +
                  </button>
                </div>
                <div className="w-full">
                  <button
                    className={`relative block w-full text-[#EE834E] border border-[#EE834E] text-base lg:text-lg rounded px-4 py-3.5 text-center tracking-[-0.04em] 
    ${
      isAdded
        ? "bg-[#EE834E] text-white"
        : "hover:bg-[#EE834E] hover:text-white"
    } transition-all duration-500`}
                    onClick={handleAddItem}
                    disabled={isAdded}
                  >
                    {isAdded ? "Added to cart" : "Add to cart"}
                  </button>
                </div>
              </div>
              <div className="w-full mb-8 lg:mb-10">
                <Link
                  href="/checkout"
                  className="block w-full text-white bg-[#EE834E] hover:text-white hover:bg-[#ECCD6E] border border-[#EE834E] hover:border-[#ECCD6E] text-base lg:text-lg rounded px-4 py-3.5 text-center tracking-[-0.04em]"
                >
                  Continue to checkout
                </Link>
              </div>
              <div className="w-full flex flex-wrap items-center">
                <div className="flex gap-2 mr-1.5 cursor-pointer items-center text-[#666666] text-sm font-medium  tracking-[-0.04em]"
                 onClick={()=>{handleShare()}}>
                  Share 
                  <FaLongArrowAltRight/>
                </div>
                {/* <ul className="flex flex-wrap items-center space-x-3">
                  <li>
                    <Link href="/" target="_blank" rel="noopener noreferrer">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.2876 2.68254C12.5999 1.98812 11.7809 1.43752 10.8782 1.06281C9.9756 0.688109 9.00741 0.496803 8.0301 0.50004C3.9351 0.50004 0.597598 3.83754 0.597598 7.93254C0.597598 9.24504 0.942598 10.52 1.5876 11.645L0.537598 15.5L4.4751 14.465C5.5626 15.0575 6.7851 15.3725 8.0301 15.3725C12.1251 15.3725 15.4626 12.035 15.4626 7.94004C15.4626 5.95254 14.6901 4.08504 13.2876 2.68254ZM8.0301 14.1125C6.9201 14.1125 5.8326 13.8125 4.8801 13.25L4.6551 13.115L2.3151 13.73L2.9376 11.45L2.7876 11.2175C2.17076 10.2328 1.84329 9.0945 1.8426 7.93254C1.8426 4.52754 4.6176 1.75254 8.0226 1.75254C9.6726 1.75254 11.2251 2.39754 12.3876 3.56754C12.9633 4.14044 13.4195 4.82195 13.7298 5.57254C14.0401 6.32313 14.1982 7.12785 14.1951 7.94004C14.2101 11.345 11.4351 14.1125 8.0301 14.1125ZM11.4201 9.49254C11.2326 9.40254 10.3176 8.95254 10.1526 8.88504C9.9801 8.82504 9.8601 8.79504 9.7326 8.97504C9.6051 9.16254 9.2526 9.58254 9.1476 9.70254C9.0426 9.83004 8.9301 9.84504 8.7426 9.74754C8.5551 9.65754 7.9551 9.45504 7.2501 8.82504C6.6951 8.33004 6.3276 7.72254 6.2151 7.53504C6.1101 7.34754 6.2001 7.25004 6.2976 7.15254C6.3801 7.07004 6.4851 6.93504 6.5751 6.83004C6.6651 6.72504 6.7026 6.64254 6.7626 6.52254C6.8226 6.39504 6.7926 6.29004 6.7476 6.20004C6.7026 6.11004 6.3276 5.19504 6.1776 4.82004C6.0276 4.46004 5.8701 4.50504 5.7576 4.49754H5.3976C5.2701 4.49754 5.0751 4.54254 4.9026 4.73004C4.7376 4.91754 4.2576 5.36754 4.2576 6.28254C4.2576 7.19754 4.9251 8.08254 5.0151 8.20254C5.1051 8.33004 6.3276 10.205 8.1876 11.0075C8.6301 11.2025 8.9751 11.315 9.2451 11.3975C9.6876 11.54 10.0926 11.5175 10.4151 11.4725C10.7751 11.42 11.5176 11.0225 11.6676 10.5875C11.8251 10.1525 11.8251 9.78504 11.7726 9.70254C11.7201 9.62004 11.6076 9.58254 11.4201 9.49254Z"
                          fill="#1E1E1E"
                          fillOpacity="0.8"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="/" target="_blank" rel="noopener noreferrer">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.85 0.5H11.15C13.55 0.5 15.5 2.45 15.5 4.85V11.15C15.5 12.3037 15.0417 13.4101 14.2259 14.2259C13.4101 15.0417 12.3037 15.5 11.15 15.5H4.85C2.45 15.5 0.5 13.55 0.5 11.15V4.85C0.5 3.69631 0.958302 2.58987 1.77409 1.77409C2.58987 0.958302 3.69631 0.5 4.85 0.5ZM4.7 2C3.98392 2 3.29716 2.28446 2.79081 2.79081C2.28446 3.29716 2 3.98392 2 4.7V11.3C2 12.7925 3.2075 14 4.7 14H11.3C12.0161 14 12.7028 13.7155 13.2092 13.2092C13.7155 12.7028 14 12.0161 14 11.3V4.7C14 3.2075 12.7925 2 11.3 2H4.7ZM11.9375 3.125C12.1861 3.125 12.4246 3.22377 12.6004 3.39959C12.7762 3.5754 12.875 3.81386 12.875 4.0625C12.875 4.31114 12.7762 4.5496 12.6004 4.72541C12.4246 4.90123 12.1861 5 11.9375 5C11.6889 5 11.4504 4.90123 11.2746 4.72541C11.0988 4.5496 11 4.31114 11 4.0625C11 3.81386 11.0988 3.5754 11.2746 3.39959C11.4504 3.22377 11.6889 3.125 11.9375 3.125ZM8 4.25C8.99456 4.25 9.94839 4.64509 10.6517 5.34835C11.3549 6.05161 11.75 7.00544 11.75 8C11.75 8.99456 11.3549 9.94839 10.6517 10.6517C9.94839 11.3549 8.99456 11.75 8 11.75C7.00544 11.75 6.05161 11.3549 5.34835 10.6517C4.64509 9.94839 4.25 8.99456 4.25 8C4.25 7.00544 4.64509 6.05161 5.34835 5.34835C6.05161 4.64509 7.00544 4.25 8 4.25ZM8 5.75C7.40326 5.75 6.83097 5.98705 6.40901 6.40901C5.98705 6.83097 5.75 7.40326 5.75 8C5.75 8.59674 5.98705 9.16903 6.40901 9.59099C6.83097 10.0129 7.40326 10.25 8 10.25C8.59674 10.25 9.16903 10.0129 9.59099 9.59099C10.0129 9.16903 10.25 8.59674 10.25 8C10.25 7.40326 10.0129 6.83097 9.59099 6.40901C9.16903 5.98705 8.59674 5.75 8 5.75Z"
                          fill="#1E1E1E"
                          fillOpacity="0.8"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="/" target="_blank" rel="noopener noreferrer">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.5 8C15.5 3.86 12.14 0.5 8 0.5C3.86 0.5 0.5 3.86 0.5 8C0.5 11.63 3.08 14.6525 6.5 15.35V10.25H5V8H6.5V6.125C6.5 4.6775 7.6775 3.5 9.125 3.5H11V5.75H9.5C9.0875 5.75 8.75 6.0875 8.75 6.5V8H11V10.25H8.75V15.4625C12.5375 15.0875 15.5 11.8925 15.5 8Z"
                          fill="#1E1E1E"
                          fillOpacity="0.8"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <svg
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 12C1.5875 12 1.2345 11.8533 0.941 11.5597C0.6475 11.2662 0.5005 10.913 0.5 10.5V1.5C0.5 1.0875 0.647 0.7345 0.941 0.441C1.235 0.1475 1.588 0.0005 2 0H14C14.4125 0 14.7657 0.147 15.0597 0.441C15.3538 0.735 15.5005 1.088 15.5 1.5V10.5C15.5 10.9125 15.3533 11.2657 15.0597 11.5597C14.7662 11.8538 14.413 12.0005 14 12H2ZM8 6.75L2 3V10.5H14V3L8 6.75ZM8 5.25L14 1.5H2L8 5.25ZM2 3V1.5V10.5V3Z"
                          fill="#1E1E1E"
                          fillOpacity="0.8"
                        />
                      </svg>
                    </Link>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
