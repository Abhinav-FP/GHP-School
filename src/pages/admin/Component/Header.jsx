import React, { useState } from "react";
import PhoneSideBar from "./PhonesideBar";

function Header({ title }) {
  
  const [sideOpen, setSideOpen] = useState(false);

  const toggleSidebar = () => {
    setSideOpen(!sideOpen);
  };

  

  return (
    <>
      <div className="px-4 py-2 lg:px-10 lg:py-2.5">
        <div className="flex justify-between items-center">
          {/* Title */}
          <h2 className="hidden lg:block text-[#1E1E1E] font-semibold text-[26px]">
            {title || "Dashboard"}
          </h2>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={sideOpen}
              onClick={toggleSidebar}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Menu Icon */}
              <svg
                className={`${sideOpen ? "hidden" : "block"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* Close Menu Icon */}
              <svg
                className={`${sideOpen ? "block" : "hidden"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Profile and Additional Actions */}
          <div className="flex justify-end items-center space-x-3">
            {/* Add more buttons or profile options here */}
            <img
              src={"/Header/Logo.png"}
              alt="Profile"
              className="h-10 w-10 rounded-full object-cover lg:h-14 lg:w-14"
            />
          </div>
        </div>
      </div>

      {/* PhoneSideBar Component */}
      <div className="block lg:hidden">
                {sideOpen && <PhoneSideBar sideOpen={sideOpen} toggleSidebar={toggleSidebar} />}
            </div>
    </>
  );
}

export default Header;
