import Details from "@/pages/api/admin/Details";
import Header from "../Component/Header";
// import Nodata from "../Component/Nodata";
import SideBarAdmin from "../Component/SideBar";
import React, { useState, useEffect } from "react";
import Modal from "../Component/Modal";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import Loading from "../Component/Loading";
import NoData from "../Component/NoData";
import Image from "next/image";

function Index() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [imagedataPreview, setImageDataPreview] = useState(null);
    console.log("imagePreview", imagePreview, selectedImage, imagedataPreview)
    const [formData, setFormData] = useState({
        rollNo: "",
        name: "",
        photo: "",
        grade: "",
        stream: "",
        percentage: "",
    });
    const [listing, setListing] = useState([]);
    const [loading, setLoading] = useState(false);
    const [deltedata, setDelete] = useState("");
    const handleopen = (item) => {
        setIsDeleteOpen(true);
        setDelete(item?._id)
    };
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(file);
            setImagePreview(URL.createObjectURL(file));
            uploadImage(file);
        }
    };
    const handleDeleteClose = () => {
        setIsDeleteOpen(false);
    };
    const handleClose = () => {
        setIsOpen(false);
    };

    const router = useRouter();

    const sportsGetData = async () => {
        setLoading(true);
        try {
            const main = new Details();
            const response = await main.sportsGet();
            console.log("response", response)
            setListing(response?.data.sport || []);
        } catch (err) {
            console.error("Error fetching data:", err);
            setListing([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        sportsGetData();
    }, []);

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
        record.append("image", imagePreview);
        try {
            const main = new Details();
            const response = await main.sportsAdd(record);
            if (response?.data?.status) {
                toast.success(response.data.message);
                handleClose();
                sportsGetData();
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





    const handleClick = (e) => {
        e.preventDefault();
        setLoading(true);
        const main = new Details();
        const response = main.sportsDelete({ id: deltedata });
        response
            .then((res) => {
                if (res && res?.data && res?.data?.status) {
                    toast.success(res.data.message);
                    setLoading(false);
                    handleDeleteClose();
                    resultgetData();
                } else {
                    toast.error(res.data.message);
                    setLoading(false);
                }
                setLoading(false);
            })
            .catch((error) => {
                toast.error(error?.response?.data?.message);
                setLoading(false);
            });
    };


    return (
        <>
            <div className="md:flex flex-wrap bg-[#F5F6FB] items-start">
                <SideBarAdmin />
                <div className="w-full lg:ml-[304px] lg:w-[calc(100%-304px)]">
                    <Header title={"Manage Sports"} />
                    <div className="px-4 py-2 lg:px-10 lg:py-2.5">
                        <div className="bg-white rounded-[20px] mb-[30px]">
                            <div className="py-3 lg:py-[23px] px-4 md:px-6 lg:px-10 flex flex-wrap justify-between items-center border-b border-black border-opacity-10">
                                <h3 className="text-base lg:text-lg font-semibold text-[#1E1E1E] mb-3 sm:mb-0 tracking-[-0.03em]">Sports</h3>
                                <div className="flex items-center space-x-2">
                                    <button onClick={() => setIsOpen(true)} className="text-white bg-[#0367F7] hover:bg-white hover:text-[#0367F7] text-sm font-normal tracking-[-0.03em] py-2 px-3 xl:px-3.5 border border-[#0367F7] rounded-md outline-none focus:outline-none ease-linear transition-all duration-150">
                                        Add Sports
                                    </button>
                                </div>
                            </div>
                            <div className="px-4 py-2 lg:px-10 lg:py-2.5">
                                <div className="bg-white rounded-[20px] mb-[30px]">
                                    <div className="py-3 lg:py-[23px] px-4 md:px-6 lg:px-10 flex flex-wrap justify-between listings-center border-b border-black border-opacity-10">
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5">
                                            {listing &&
                                                listing.map((item, index) => (
                                                    <div
                                                        key={index}
                                                        className="relative w-full overflow-hidden cursor-pointer"
                                                    >
                                                        <Image
                                                            blurDataURL={`${item?.url}?q=1`}
                                                            placeholder="blur"
                                                            width={387}
                                                            height={310}
                                                            src={item?.image}
                                                            alt={item?.caption}
                                                            className="object-cover"
                                                            loading="lazy"
                                                        />
                                                        <div className="absolute top-0 right-0 bg-white">
                                                            <button
                                                                onClick={() => handleopen(item)}
                                                                className="text-[#0367F7] h-[30px] w-[30px] bg-[#0367F7] bg-opacity-10 hover:bg-opacity-30 rounded inline-flex items-center justify-center"
                                                            >
                                                                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M3 18C2.45 18 1.97933 17.8043 1.588 17.413C1.19667 17.0217 1.00067 16.5507 1 16V3H0V1H5V0H11V1H16V3H15V16C15 16.55 14.8043 17.021 14.413 17.413C14.0217 17.805 13.5507 18.0007 13 18H3ZM13 3H3V16H13V3ZM5 14H7V5H5V14ZM9 14H11V5H9V14Z" fill="#FF1B1B" />
                                                                </svg>
                                                            </button>

                                                        </div>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    <div className="relative bg-white w-full rounded-[30px] lg:rounded-[40px] m-auto">

                        <div className="border-b border-black border-opacity-10 pt-6 pb-5 px-6">
                            <h2 className="text-xl lg:text-2xl text-[#212121] font-semibold">Add New Result</h2>
                        </div>
                        <form onSubmit={handleSubmit} className="p-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-[#212121]">Student Avatar</label>
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
            {isDeleteOpen && (

                <Modal isOpen={isDeleteOpen} onClose={handleDeleteClose} >
                    <div className="relative bg-white w-full rounded-[30px] lg:rounded-[40px] m-auto">

                        <div className="border-b border-black border-opacity-10 pt-6 pb-5 px-6 lg:pt-8 lg:pb-6 lg:px-10">
                            <h2 className="text-xl lg:text-2xl text-[#212121] tracking-[-0.04em] font-semibold mb-0">
                                Delete
                            </h2>
                        </div>

                        <div className="py-6 lg:py-8">
                            <div className="max-h-[60vh] overflow-y-auto customscroll px-6 lg:px-10">
                                <p>Are you sure you want to delete this Services. </p>
                            </div>

                            <div className="flex justify-end px-6 lg:px-10 py-4 space-x-4">
                                <button
                                    onClick={handleDeleteClose}
                                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleClick}
                                    className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded hover:bg-red-700"
                                >
                                    {loading ? "Processing..." : "Delete"}
                                </button>

                            </div>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    );
}

export default Index;
