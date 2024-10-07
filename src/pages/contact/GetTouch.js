import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

function GetTouch() {
  return (
    <div className="bg-white py-[50px] md:py-[70px] lg:py-[100px]" id="touch">
      <div className="container sm:container md:container lg:max-w-[1204px] px-4 mx-auto" >
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-6/12 px-4 mb-6 lg:mb-0">
            <h2 className="merriweather-font font-normal  text-2xl md:text-3xl lg:text-4xl mb-5 md:mb-6 lg:mb-8 text-[#1E1E1E]  tracking-[-0.04em]">
              Get in Touch
            </h2>
            <h3 className="merriweather-font font-normal uppercase tracking-[-0.04em] text-xl lg:text-2xl text-[#1E1E1E] mb-4 lg:mb-5">
              BAL VISHWA BHARTI PUBLIC SR SEC SCHOOL
            </h3>
            <div className="space-y-2.5">
              <p className="relative pl-6 text-[#1E1E1E] opacity-80 tracking-[-0.04em] text-base font-medium gotham-font">
                <IoCallOutline
                  size={18}
                  className="absolute left-0 top-1/2 -translate-y-1/2"
                />
                <a href="tel:01412282790">01412282790</a>/{" "}
                <a href="tel:01412282298">01412282298</a>/{" "}
                <a href="tel:+919001869684">90018-69684</a>
              </p>
              <p className="relative pl-6 text-[#1E1E1E] opacity-80 tracking-[-0.04em] text-base font-medium gotham-font">
                <CiMail
                  className="absolute left-0 top-1/2 -translate-y-1/2"
                  size={18}
                />
                <a href="mailto:bvbpschool74@gmail.com">
                  bvbpschool74@gmail.com
                </a>
                /{" "}
                <a href="mailto:bvbschool74@gmail.com">bvbschool74@gmail.com</a>
              </p>
              <p className="relative pl-6 text-[#1E1E1E] opacity-80 tracking-[-0.04em] text-base font-medium gotham-font">
                <a href="https://www.google.com/maps/dir//D,+74,+Ghiya+Marg,+Sindhi+Colony,+Bani+Park,+Jaipur,+Rajasthan+302032+@26.931568,75.791982/@27.7436422,76.5794786,7z/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x396db3efafa594ef:0x2da3b3ab79a793f4!3e0">
                  <CiLocationOn
                    size={18}
                    className="absolute left-0 top-1/2 -translate-y-1/2"
                  />{" "}
                  D-74, Ghiya Marg, Bani Park, Jaipur, Rajasthan 302016
                </a>
              </p>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d222.31967111126167!2d75.79197175989164!3d26.931576820166637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d26.931562!2d75.7920073!4m5!1s0x396db3efafa594ef%3A0x2da3b3ab79a793f4!2sD%2C%2074%2C%20Ghiya%20Marg%2C%20Sindhi%20Colony%2C%20Bani%20Park%2C%20Jaipur%2C%20Rajasthan%20302032!3m2!1d26.9315642!2d75.7919816!5e0!3m2!1sen!2sin!4v1727153589766!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: "0" }} 
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
export default GetTouch;
