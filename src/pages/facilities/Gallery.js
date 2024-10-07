import Image from "next/image";
import React, { useEffect, useState } from "react";
import Details from "../api/admin/Details";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";

export default function Gallery() {
  const [listing, setLisitng] = useState([]);
  const [data, setData] = useState([]); // Holds images fetched by category
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fetch all gallery items
  const getGallery = () => {
    setLoading(true);
    const main = new Details();
    main
      .getGallery()
      .then((r) => {
        setLoading(false);
        setLisitng(r?.data?.data);
      })
      .catch((err) => {
        setLoading(false);
        setLisitng([]);
        console.log("error", err);
      });
  };

  // Fetch images by category
  const getGallerybyCategory = (name) => {
    setLoading(true);
    const main = new Details();
    main
      .getGallerybyCategory(name)
      .then((r) => {
        setLoading(false);
        setData(r?.data?.data); // Save fetched images in `data`
        setShowModal(true); // Only show modal after data is fetched
        setCurrentImageIndex(0); // Reset image index to 0
      })
      .catch((err) => {
        setLoading(false);
        setData([]);
        console.log("error", err);
      });
  };

  useEffect(() => {
    getGallery(); // Fetch all gallery items on mount
  }, []);

  const handleImageClick = (name) => {
    getGallerybyCategory(name); // Fetch images by category when clicked
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data.length); // Loop forward through images
  };

  const handlePrevious = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + data.length) % data.length
    ); // Loop backward through images
  };

  const closeModal = () => {
    setShowModal(false); // Close modal
  };

  return (
    <div className="bg-white pb-[40px] md:pb-[80px] lg:pb-[100px]">
      <div
        className="container sm:container md:container lg:max-w-[1204px] px-4 mx-auto"
        id="activities"
      >
        <h2 className="merriweather-font font-normal text-2xl md:text-3xl lg:text-4xl mb-2.5 text-[#1E1E1E] tracking-[-0.04em] text-center">
          Gallery
        </h2>
        <p className="max-w-[965px] text-center tracking-[-0.04em] mx-auto text-center text-[#666666] text-base font-medium mb-10 lg:mb-[50px]">
          Explore our gallery to see the vibrant life and activities at BVBS
          School.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5">
          {listing &&
            listing.map((item, index) => (
              <div
                key={index}
                className="relative w-full overflow-hidden"
                onClick={() => handleImageClick(item?.caption)}
              >
                <Image
                  blurDataURL={`${item?.url}?q=1`}
                  placeholder="blur"
                  width={387}
                  height={310}
                  src={item?.url}
                  alt={item?.caption}
                  className="object-cover"
                  loading="lazy"
                />
                <div className="galleryBg absolute bottom-0 left-0 h-full w-full z-0"></div>
                <h3 className="capitalize absolute bottom-4 left-6 right-6 text-white z-10 merriweather-font font-normal text-xl lg:text-2xl">
                  {item?.caption.replace("-", " ")}
                </h3>
              </div>
            ))}
        </div>

        {/* Modal */}
        {showModal && data.length > 0 && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className="relative w-full h-full flex justify-center items-center">
              <button
                className="absolute top-4 right-4 text-white z-10"
                onClick={closeModal}
              >
                <IoMdClose size={24} />
              </button>
              <button
                className="absolute left-4 top-[50%] transform -translate-y-1/2 text-white z-10"
                onClick={handlePrevious}
              >
                <GrPrevious size={24} />
              </button>
              <Image
                blurDataURL={`${data[currentImageIndex]?.url}?q=1`}
                placeholder="blur"
                src={data[currentImageIndex]?.url}
                alt={data[currentImageIndex]?.caption}
                layout="fill"
                objectFit="contain"
                className="max-w-full max-h-full"
                loading="lazy"
              />
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
