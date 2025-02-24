import AcademicBg from "../../../public/Academic/academic_bg.png";
import React, { useState, useEffect } from "react";
import Details from "../api/admin/Details";

export default function Index({getFinancialYear}) {
  const [listing, setLisitng] = useState([])
  const [Loading, setLoading] = useState(false)
  const getcalendar = () => {
    setLoading(true);
    const main = new Details();
    main.Academy()
      .then((r) => {
        console.log(r)
        setLoading(false);
        console.log("r.data.Notification", r?.data?.academics)
        setLisitng(r?.data?.academics);
      })
      .catch((err) => {
        setLoading(false);
        setLisitng([]);
        console.log("error", err);
      });
  };

  useEffect(() => {
    getcalendar();
  }, []);

  return (
    <>
      <div
        style={{ backgroundImage: `url(${AcademicBg.src})` }}
        className=" bg-no-repeat bg-center bg-cover pt-[102px] md:pt-[152px] md:pt-[195px] pb-[70px]  md:pb-[100px] lg:pb-[132px]"
        id="calendar"
      >
        <div className="container sm:container md:container lg:max-w-[1204px] px-4 mx-auto ">
          <h1 className="text-black merriweather-font font-normal tracking-[-0.04em] text-center text-3xl md:text-4xl lg:text-5xl mb-2.5">
            Academic Year at a Glance
          </h1>
          <p className="text-black font-medium tracking-[-0.04em]  text-center text-sm md:text-base lg:text-xl mb-6 lg:mb-10">
            ({getFinancialYear()})  

            
          </p>
          <div className="flex justify-center gap-4 mx-3 text-center">
            <button
              onClick={() =>
              (window.location.href =
                `${listing?.link || ""}`)
              }
              className="button-animation text-white inline-block tracking-[-0.04em] rounded text-lg font-normal px-16 py-3.5"
            >
              Download
            </button>

            {/* <button
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1yUkPqi_dp_amTZMtSO3V7wb-jSGSXhYw/view",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="button-animation text-white inline-block tracking-[-0.04em] rounded text-lg font-normal px-16 py-3.5"
            >
              View
            </button> */}

          </div>
        </div>
      </div>
    </>
  );
}
