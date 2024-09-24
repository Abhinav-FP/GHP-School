import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaCalendarAlt,
  FaMoneyBillWave,
  FaChartBar,
  FaFileAlt,
  FaChevronRight,
} from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 767);
    }

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (index) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      {isMobile ? (
        <button
          onClick={toggleSidebar}
          type="button"
          className="absolute top-4 right-0"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            />
          </svg>
        </button>
      ) : null}

      {!isMobile || (isMobile && isOpen) ? (
        <aside
          className={`transition-transform sticky top-0 
              translate-x-0  `}
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto">
            <ul className="space-y-2 font-medium">
              <li>
                <Link
                  href="#"
                  className="flex items-center p-2 hover:bg-gray-100 whitespace-nowrap"
                >
                  <FaCalendarAlt className="w-5 h-5 " />
                  <span className="ms-3 truncate">Dashboard</span>
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => toggleDropdown(1)}
                  className="flex items-center w-full p-2 text-base transition duration-75 rounded-lg group hover:bg-gray-100"
                >
                  {/* <FaMoneyBillWave className="w-5 h-5" /> */}
                  <span className="flex-1 ms-3 text-left truncate">About</span>
                  <IoMdArrowDropdown
                    className={`w-3 h-3 transform ${
                      dropdownOpen[1] ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <ul
                  className={`${
                    dropdownOpen[1] ? "" : "hidden"
                  } py-2 space-y-2`}
                >
                  <li>
                    <Link
                      href="#"
                      className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 hover:bg-gray-100 whitespace-nowrap"
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 hover:bg-gray-100 whitespace-nowrap"
                    >
                      Billing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 hover:bg-gray-100 whitespace-nowrap"
                    >
                      Invoice
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center p-2 rounded-lg  hover:bg-gray-100 whitespace-nowrap"
                >
                  <FaChartBar className="w-5 h-5" />
                  <span className="ms-3 truncate">Others</span>
                  <span className="ms-3 inline-flex items-center justify-center px-2 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    Pro
                  </span>
                </Link>
              </li>
              {/* Additional list items... */}
            </ul>
          </div>
        </aside>
      ) : (
        <></>
      )}
    </>
  );
}
