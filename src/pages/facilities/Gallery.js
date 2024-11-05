import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import Details from "../api/admin/Details";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import Loader from "@/Component/Loader";

export default function Gallery() {
  const [listing, setLisitng] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [count, setCount] = useState(0);

  const modalRef = useRef(null);

  const getGallery = () => {
    setLoading(true);
    const main = new Details();
    main
      .getGallery()
      .then((r) => {
        setLisitng(r?.data?.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setLisitng([]);
        console.log("error", err);
        if (count <= 2) {
          getGallery();
        }
      });
  };

  const getGallerybyCategory = (name) => {
    const main = new Details();
    main
      .getGallerybyCategory(name)
      .then((r) => {
        setLoading(false);
        setData(r?.data?.data);
        setShowModal(true);
        setCurrentImageIndex(0);
      })
      .catch((err) => {
        setData([]);
        console.log("error", err);
      });
  };

  useEffect(() => {
    getGallery();
  }, []);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  const handleImageClick = (name) => {
    getGallerybyCategory(name);
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrevious = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + data.length) % data.length
    );
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-white pb-[40px] md:pb-[80px] lg:pb-[100px]" id="activities">
      <div className="container sm:container md:container lg:max-w-[1204px] px-4 mx-auto">
        <h2 className="merriweather-font font-normal text-2xl md:text-3xl lg:text-4xl mb-2.5 text-[#1E1E1E] tracking-[-0.04em] text-center">
          Gallery
        </h2>
        <p className="max-w-[965px] text-center tracking-[-0.04em] mx-auto text-center text-[#666666] text-base font-medium mb-10 lg:mb-[50px]">
          Explore our gallery to see the vibrant life and activities at BVBS School.
        </p>

        {loading ? (
          <Loader />
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {listing &&
              listing.map((item, index) => (
                <div
                  key={index}
                  className="relative w-full overflow-hidden h-full cursor-pointer"
                  onClick={() => handleImageClick(item?.caption)}
                >
                  <Image
                    width={387}
                    height={310}
                    src={item?.url}
                    alt={item?.caption}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                  <div className="galleryBg absolute bottom-0 left-0 h-full w-full z-0"></div>
                  <h3 className="capitalize absolute bottom-4 left-6 right-6 text-white z-10 merriweather-font font-normal text-xl lg:text-2xl">
                    {item?.caption.replace("-", " ")}
                  </h3>
                </div>
              ))}
          </div>
        )}

        {showModal && data.length > 0 && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div
              ref={modalRef}
              className="relative w-full h-full flex justify-center items-center"
            >
              <button className="absolute top-4 right-4 text-white z-10" onClick={closeModal}>
                <IoMdClose size={24} />
              </button>
              <button
                className="absolute left-4 top-[50%] transform -translate-y-1/2 text-white z-10"
                onClick={handlePrevious}
              >
                <GrPrevious size={24} />
              </button>
              <Image
                src={data[currentImageIndex]?.url}
                alt={data[currentImageIndex]?.caption}
                layout="fill"
                objectFit="contain"
                className="max-w-full max-h-full"
              />
              <div className="gallery-text absolute p-[15px] sm:p-[30px] w-full bottom-0 left-0 text-white capitalize text-lg sm:text-xl font-semibold z-10">
                <p className="px-4 py-2 inline-block rounded">
                  {data[currentImageIndex]?.description}
                </p>
              </div>
              <button
                className="absolute right-4 top-[50%] transform -translate-y-1/2 text-white z-10"
                onClick={handleNext}
              >
                <GrNext size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
