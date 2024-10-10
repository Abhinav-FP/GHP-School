import Header from "../Component/Header";
import SideBarAdmin from "../Component/SideBar";
import React, { useEffect, useState } from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import Details from "@/pages/api/admin/Details";
import careerbg from "../../../../public/Career/careerbg.jpg"
import Modal from "../Component/Modal";
import Image from "../Component/Image";


function Index() {
    const [listing, setLisitng] = useState([]);
    const [data, setData] = useState([]); // Holds images fetched by category
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [imagedataPreview, setImageDataPreview] = useState(null);
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

    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => {
        setIsOpen(false);
    };
    const [formData, setFormData] = useState({
        photo: "",
        caption: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(file);
            setImagePreview(URL.createObjectURL(file));
            uploadImage(file); // Pass the file directly here
        }
    };

    const uploadImage = async (file) => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Client-ID fa9cff918a9554a");

        const formdata = new FormData();
        formdata.append("image", file);
        formdata.append("type", "image");
        formdata.append("title", "Simple upload");
        formdata.append("description", "This is a simple image upload in Imgur");

        try {
            const response = await fetch("https://api.imgur.com/3/upload", {
                method: "POST",
                headers: myHeaders,
                body: formdata,
                redirect: "follow",
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log('Image uploaded successfully:', data);
            if (data?.data?.link) {
                setImageDataPreview(data.data.link);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const record = new FormData();
        record.append("caption", formData.caption);
        record.append("photo", imagePreview);
        try {
            const main = new Details();
            const response = await main.ResultAdd(record);

            if (response?.data?.status) {
                toast.success(response.data.message);
                handleClose();  // Close any modal or form after success
                resultgetData();  // Refresh or fetch updated result data
            } else {
                toast.error(response.data.message);
            }
            setFormData({
                qualification: '',
                experience: '',
                description: '',
                designation: ''
            });
        } catch (error) {
            toast.error(error?.response?.data?.message || "An error occurred");
        } finally {
            setLoading(false);
        }
    };



    return (<>
        <div className="md:flex flex-wrap bg-[#F5F6FB] listings-start">
            <SideBarAdmin />
            <div className="w-full lg:ml-[304px] lg:w-[calc(100%-304px)]">
                <Header title={"Gallery"} />
                <div className="px-4 py-2 lg:px-10 lg:py-2.5">

                    <div className="bg-white rounded-[20px] mb-[30px]">
                        <div className="py-3 py-4 lg:py-[23px] px-4 md:px-6 lg:px-10 flex flex-wrap justify-between items-center border-b border-black  border-opacity-10">
                            <h3 className=" text-base lg:text-lg font-semibold text-[#1E1E1E] mb-3 sm:mb-0 tracking-[-0.03em]">Gallery  </h3>
                            <button onClick={() => setIsOpen(true)} className="button-animation rounded text-white font-normal tracking-[-0.04em] text-sm font-normal py-2 px-3 xl:px-3.5  outline-none focus:outline-none ease-linear transition-all duration-150">
                                Add New Gallery
                            </button>
                        </div>
                    </div>
                    <div className="bg-white rounded-[20px] mb-[30px]">
                        <div className="py-3 lg:py-[23px] px-4 md:px-6 lg:px-10 flex flex-wrap justify-between listings-center border-b border-black border-opacity-10">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5">
                                {listing &&
                                    listing.map((item, index) => (
                                        <div
                                            key={index}
                                            className="relative w-full overflow-hidden cursor-pointer"
                                            onClick={() => handleImageClick(item?.caption)}
                                        >
                                            <Image
                                                blurDataURL={`${item?.url}?q=1`}
                                                placeholder="blur"
                                                width={387}
                                                height={310}
                                                src={item?.url ? item?.url : careerbg}
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
                </div>
            </div>

            {isOpen && (
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    <div className="relative bg-white w-full rounded-[30px] lg:rounded-[40px] m-auto">

                        <div className="border-b border-black border-opacity-10 pt-6 pb-5 px-6">
                            <h2 className="text-xl lg:text-2xl text-[#212121] font-semibold">Add New Gallery</h2>
                        </div>
                        <form onSubmit={handleSubmit} className="p-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-[#212121]"> Avatar</label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-[#0367F7] outline-0"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#212121]">Show Avatar</label>
                                    {imagePreview && <img src={imagePreview} alt="Preview" className="mt-2 w-48 h-48 object-cover text-center" />}

                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#212121]">Caption</label>
                                    <input
                                        type="text"
                                        name="caption"
                                        value={formData.caption}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-[#0367F7] outline-0"
                                        required
                                    />
                                </div>

                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="text-white button-animation text-sm font-normal tracking-[-0.03em] py-2 px-4 border-0 min-w-[100px] rounded-md"
                                    >
                                        {loading ? "Saving..." : "Save"}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </Modal>
            )}
        </div>


    </>);
}

export default Index;