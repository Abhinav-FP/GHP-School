import Link from "next/link";
import Details from "../api/admin/Details";
import React, { useEffect, useState } from "react";

function AdmissionLine() {
  const [listing, setListing] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [count, setCount] = useState(0);

  const getBanner = () => {
    setLoading(true);
    const main = new Details();
    main
      .Adminline()
      .then((r) => {
        setLoading(false);
        const data = r?.data?.data;
        setListing(data);
      })
      .catch((err) => {
        setLoading(false);
        // setCount(count + 1);
        // if (count <= 2) {
        //   getBanner();
        // }
        console.log("error", err);
      });
  };

  useEffect(() => {
    getBanner();
  }, []);

  return (
    <>
      {listing?.show === true && (
        <div className="z-[1] relative px-6 overflow-hidden md:px-8 lg:px-10 py-5 bg-[#EE834E]">
          <div className="marquee flex items-center md:px-8 lg:px-10 text-white text-2xl lg:text-[32px] merriweather-font tracking-[-0.04em]">
            {[1, 2, 3].map((item, index) => (
              <span className="pr-4" key={index}>
                <svg
                  className="inline"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 0L17.7813 10.2187L28 14L17.7813 17.7813L14 28L10.2187 17.7813L0 14L10.2187 10.2187L14 0Z"
                    fill="white"
                  />
                </svg>
                {listing?.text} –{" "}
                <Link href="/admissions#form">Apply Now!</Link>
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default AdmissionLine;
