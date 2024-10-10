import Layout from "@/layout/Layout";
import React from "react";
import Image from "next/image";
import ThankyouImage from "../../../public/ThankYou/thankyou.png";

export default function Success() {
  return (
    <Layout>
      <div className="w-full bg-white py-[50px] md:py-[70px] lg:py-[100px]">
        <div className="mx-auto container sm:container md:container lg:max-w-[1204px] px-4 text-center">
          <Image
            src={ThankyouImage}
            className="mx-auto block mb-8 md:mb-10 lg:mb-14"
            alt="img"
          ></Image>
          <h2 className="merriweather-font font-normal  text-2xl md:text-3xl lg:text-4xl mb-2 text-[#1E1E1E]  tracking-[-0.04em] mb-3 lg:mb-4">
            Thank You for Your Application!
          </h2>
          <p className="max-w-[708px] mx-auto text-[#666666] text-base font-medium gotham-font tracking-[-0.04em] mb-4 lg:mb-[28px]">
            Your application has been successfully received.We appreciate your
            interest in our school and thank you for choosing us for your
            child's education.
          </p>
          <a
            href=""
            className="inline-block bg-white hover:bg-[#EE834E] rounded px-6 lg:px-10 py-2 lg:py-2.5 text-[#EE834E] hover:text-white font-normal tracking-[-0.04em] border border-[#EE834E] "
          >
            Download Invoice{" "}
          </a>
        </div>
      </div>
    </Layout>
  );
}
