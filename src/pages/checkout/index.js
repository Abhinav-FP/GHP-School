import Layout from "@/layout/Layout";
import React, { useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { formatMultiPrice } from "@/hooks/ValueData";

export default function Index() {
  const cartItemsRedux = useSelector((state) => state.cart.cartItems);
  console.log("cartItemsRedux", cartItemsRedux);
  // const cartItems = [
  //   {
  //     Image: "/Facilities/Gallery1.png",
  //     Title: "Tuition Fees with Book & Uniform Set",
  //     Qty: "X1",
  //     Amount: "15000",
  //   },
  //   {
  //     Image: "/Facilities/Gallery1.png",
  //     Title: "Tuition Fees with Book & Uniform Set",
  //     Qty: "X1",
  //     Amount: "15000",
  //   },
  // ];
  const totalPrice = cartItemsRedux.reduce((sum, item) => {
    return sum + Number(item?.price * item?.quantity);
  }, 0);

  return (
    <Layout>
      <div className="w-full bg-white py-[50px] md:py-[70px] lg:py-[100px]">
        <div className="mx-auto container sm:container md:container lg:max-w-[1232px] px-4">
          <div className="flex flex-wrap -mx-4 md:-mx-6 lg:-mx-10">
            <div className="w-full lg:w-6/12 px-4 md:px-6 lg:px-10">
              <div className="bg-[#ECE1C5]">
                <div className="px-4 lg:px-[40px] pt-4 lg:pt-[28px] pb-4 lg:pb-[18px]  border-b border-black border-opacity-10">
                  <h2 className="merriweather-font font-normal  text-2xl md:text-3xl lg:text-4xl mb-0 text-[#1E1E1E]  tracking-[-0.04em]">
                    Sponsor Now
                  </h2>
                </div>
                <div className="px-4 lg:px-[40px] py-4 lg:py-[30px] ">
                  <div className="mb-4 lg:mb-6">
                    <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                      full Name<em className="text-[#EE834E]">*</em>{" "}
                    </label>
                    <input
                      type="text"
                      className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
                    />
                  </div>
                  <div className="mb-4 lg:mb-6">
                    <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                      Contact Number<em className="text-[#EE834E]">* </em>
                    </label>
                    <input
                      type="text"
                      className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
                    />
                  </div>
                  <div className="mb-4 lg:mb-6">
                    <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                      Adhaar Card<em className="text-[#EE834E]">*</em>{" "}
                    </label>
                    <input
                      type="file"
                      className="bg-white border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
                    />
                  </div>

                  <div className="mb-4 lg:mb-6">
                    <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                      Pan Card<em className="text-[#EE834E]">*</em>{" "}
                    </label>
                    <input
                      type="file"
                      className="bg-white border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
                    />
                  </div>
                  <div className="mb-4 lg:mb-6">
                    <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                      Email address<em className="text-[#EE834E]">*</em>{" "}
                    </label>
                    <input
                      type="email"
                      className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
                    />
                  </div>
                  <div className="w-full">
                    <button
                      type="submit"
                      className="bg-[#EE834E] lg:w-[253px] hover:bg-[#ECCD6E] rounded px-8 lg:px-12 py-2 lg:py-3.5 text-white text-base lg:text-lg font-normal tracking-[-0.04em]"
                      fdprocessedid="1gg5s"
                    >
                      Pay Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4 md:px-6 lg:px-10">
              <div className="pt-4 lg:pt-[28px] pb-4 lg:pb-[18px]  border-b border-black border-opacity-10">
                <h2 className="merriweather-font font-normal  text-2xl md:text-3xl lg:text-4xl mb-0 text-[#1E1E1E]  tracking-[-0.04em]">
                  Your Sponsorships
                </h2>
              </div>
              <div className="">
                <table className="w-full">
                  <thead>
                    <tr>
                      <td className="text-[#1E1E1E] text-base py-3 tracking-[-0.04em] uppercase merriweather-font font-normal border-b border-black border-opacity-10">
                        Product
                      </td>
                      <td className="text-[#1E1E1E] text-base py-3 px-3 tracking-[-0.04em] uppercase merriweather-font font-normal border-b border-black border-opacity-10">
                        QTY
                      </td>
                      <td className="text-[#1E1E1E]  text-right text-base py-3 px-3 tracking-[-0.04em] uppercase merriweather-font font-normal border-b border-black border-opacity-10 pr-0">
                        Amount
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItemsRedux &&
                      cartItemsRedux.map((item, index) => (
                        <tr key={index}>
                          <td className="text-[#1E1E1E] font-medium text-base py-3.5 tracking-[-0.04em] border-b border-black border-opacity-10">
                            <div className="flex items-center ">
                              <div className="bg-[#E1E1E1] w-[70px] lg:w-[91px]">
                                <Image
                                  blurDataURL={`${item.imgUrl}?q=1`}
                                  placeholder="blur"
                                  width={91}
                                  height={86}
                                  src={item.imgUrl}
                                  alt={item.name}
                                  className="object-cover max-w-full"
                                  loading="lazy"
                                />
                              </div>
                              <div className="w-[calc(100%-71px)] lg:w-[calc(100%-91px)] max-w-[179px] pl-2.5 tracking-[-0.04em] text-[#1E1E1E] font-medium merriweather-font font-normal text-base md:text-lg lg:text-xl">
                                {item.name}
                              </div>
                            </div>
                          </td>
                          <td className="text-[#1E1E1E] font-medium text-base py-3.5 px-3 tracking-[-0.04em] border-b border-black border-opacity-10">
                            {item.quantity}
                          </td>
                          <td className="text-[#EE834E] text-right font-medium text-base py-3.5 px-3 pr-0 tracking-[-0.04em] border-b border-black border-opacity-10">
                            {formatMultiPrice(item.price) || 0}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td
                        colSpan={2}
                        className="text-[#1E1E1E] uppercase merriweather-font font-normal text-xl lg:text-2xl py-3.5 tracking-[-0.04em] border-b border-black border-opacity-10"
                      >
                        Total
                      </td>
                      <td className="text-[#EE834E] text-right py-3.5 px-3 pr-0 tracking-[-0.04em] text-xl lg:text-2xl border-b border-black border-opacity-10 merriweather-font">
                        {formatMultiPrice(totalPrice) || 0}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
