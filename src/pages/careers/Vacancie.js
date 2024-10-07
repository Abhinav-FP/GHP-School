import React, { useEffect, useState } from "react";
import Details from "../api/admin/Details";

function Vacancie({ listing, loading, handleClick }) {
  const VacancieList = [
    {
      title: "Arts Teacher",
      decription:
        "BVBS School is looking for an enthusiastic Art Teacher with 1-2 years of experience to inspire students’ creativity and artistic skills.",
      exp: "1-2 Years Experience",
      qualification: "B.Ed. in Arts",
    },
    {
      title: "English Teacher",
      decription:
        "BVBS School is seeking a dynamic English Teacher with 3-4 years of experience to engage students and enhance their language skills.",
      exp: "3-4 Years Experience",
      qualification: "B.Ed. in Englishs",
    },
  ];

  return (
    <div className="bg-white pb-[50px] md:pb-[70px] lg:pb-[100px]">
      <div className="container sm:container md:container lg:max-w-[1204px] px-4 mx-auto">
        <h2 className="merriweather-font font-normal text-2xl md:text-3xl lg:text-4xl mb-2.5 text-[#1E1E1E] tracking-[-0.04em] text-center">
          Our Vacancies
        </h2>
        <p className="max-w-[965px] text-center tracking-[-0.04em] mx-auto text-center text-[#666666] text-base font-medium mb-6 lg:mb-10">
          Established in July 1990, BVBS School has been a beacon of excellence
          in education for over three decades. Join our dedicated team and
          contribute to a legacy of inspiring young minds and fostering a love
          for learning.
        </p>

        <div className="w-full space-y-3 lg:space-y-5">
          {listing &&
            listing.map((item, index) => (
              <div className="bg-[#ECE1C5] p-6 lg:p-10" key={index}>
                <div className="flex flex-wrap -mx-3 lg:-mx-6.5 items-center">
                  <div className="w-full lg:w-9/12 px-3 lg:px-6 mb-6 lg:mb-0">
                    <h2 className="text-left merriweather-font font-normal text-xl  lg:text-2xl mb-2 text-[#1E1E1E] tracking-[-0.04em]">
                      {item.designation}
                    </h2>
                    <p className="tracking-[-0.04em] mx-auto text-[#666666] text-base font-medium mb-4 lg:mb-6 ">
                      {item.description}
                    </p>
                    <div className="pt-4 lg:pt-6 border-t border-opacity-10 border-black">
                      <div className="tracking-[-0.04em] text-[#666666] text-sm font-medium mb-0">
                        <span>{item.experience}</span> &nbsp; | &nbsp;{" "}
                        <span>{item.qualification}</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-3/12 px-3 lg:px-6 lg:text-right">
                    <button
                      className="bg-[#EE834E] lg:min-w-[210px] text-center hover:bg-[#ECCD6E] rounded px-8 lg:px-12 py-2 lg:py-3.5 text-white text-base lg:text-lg font-normal tracking-[-0.04em]"
                      onClick={() => handleClick(item.designation)} 
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
export default Vacancie;
