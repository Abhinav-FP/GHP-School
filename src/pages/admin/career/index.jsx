import Details from "@/pages/api/admin/Details";
import Header from "../Component/Header";
import Nodata from "../Component/Nodata";
import SideBarAdmin from "../Component/SideBar";
import React, { useState, useEffect } from "react";
import Modal from "../Component/Modal";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import Loading from "../Component/Loading";

function Index() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    const handleDeleteClose = () => {
        setIsDeleteOpen(false);
    };


    const handleClose = () => {
        setIsOpen(false);
    };
    const [formData, setFormData] = useState({
        qualification: '',
        experience: '',
        description: '',
        designation: ''
    });
    const [listing, setListing] = useState([]);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const principleData = async () => {
        setLoading(true);
        try {
            const main = new Details();
            const response = await main.careerget();
            setListing(response?.data.data || []);
        } catch (err) {
            console.error("Error fetching data:", err);
            setListing([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        principleData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const main = new Details();
            const response = await main.careerpost(formData);
            if (response?.data?.status) {
                toast.success(response.data.message);
                handleClose();
                principleData();

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
            toast.error(error?.response?.data?.data?.message || "An error occurred");
        } finally {
            setLoading(false);
        }
    };
const[deltedata, setDelete] =useState("");
    const handleopen = (item) => {
        setIsDeleteOpen(true);
        setDelete(item)
    };

    const handleClick = (e) => {
        e.preventDefault();
        setLoading(true);
        const main = new Details();
        const response = main.careerdelete({uuid:deltedata});
        response
            .then((res) => {
                if (res && res?.data && res?.data?.status) {
                    toast.success(res.data.message);
                    setLoading(false);
                    handleDeleteClose();
                    principleData();
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
                <div className="w-full lg:w-[calc(100%-304px)]">
                    <Header title={"Manage Career"} />
                    <div className="px-4 py-2 lg:px-10 lg:py-2.5">
                        <div className="bg-white rounded-[20px] mb-[30px]">
                            <div className="py-3 lg:py-[23px] px-4 md:px-6 lg:px-10 flex flex-wrap justify-between items-center border-b border-black border-opacity-10">
                                <h3 className="text-base lg:text-lg font-semibold text-[#1E1E1E] mb-3 sm:mb-0 tracking-[-0.03em]">Career</h3>
                                <div className="flex items-center space-x-2">
                                    <button onClick={() => setIsOpen(true)} className="text-white bg-[#0367F7] hover:bg-white hover:text-[#0367F7] text-sm font-normal tracking-[-0.03em] py-2 px-3 xl:px-3.5 border border-[#0367F7] rounded-md outline-none focus:outline-none ease-linear transition-all duration-150">
                                        Add New Vacancy
                                    </button>
                                </div>
                            </div>
                            <div className="overflow-x-auto">
                                {loading? (
                                    <div className="text-center mt-4">
                                        <Loading/>
                                        </div> ) :  ( listing.length < 0 ? (
                                    <Nodata />
                                ) : (
                                    <table className="min-w-full">
                                        <thead>
                                            <tr>
                                                <th className="pl-4 md:pl-6 lg:pl-10 pr-3 py-3 text-sm font-medium text-[#8D929A] text-left uppercase tracking-[-0.03em]">S. No.</th>
                                                <th className="pl-4 md:pl-6 lg:pl-10 pr-3 py-3 text-sm font-medium text-[#8D929A] text-left uppercase tracking-[-0.03em]">Designation</th>
                                                <th className="px-3 py-3 text-sm font-medium text-[#8D929A] text-left uppercase tracking-[-0.03em]">Qualification</th>
                                                <th className="pl-4 md:pl-6 lg:pl-10 pr-3 py-3 text-sm font-medium text-[#8D929A] text-left uppercase tracking-[-0.03em]">Experience</th>
                                                <th className="px-3 py-3 text-sm font-medium text-[#8D929A] text-left uppercase tracking-[-0.03em]">Description</th>
                                                <th className="pr-4 md:pr-6 lg:pr-10 pl-3 py-3 text-sm font-medium text-[#8D929A] text-left uppercase tracking-[-0.03em] text-center">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {listing.map((item, index) => (
                                                <tr key={item.id} className="bg-white border-t transition duration-300 ease-in-out hover:bg-gray-100">
                                                    <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[15px] font-medium text-[#46494D]">{index + 1}</td>
                                                    <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[15px] font-medium text-[#46494D]">{item.designation}</td>
                                                    <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[15px] font-medium text-[#46494D]">{item.qualification}</td>
                                                    <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[15px] font-medium text-[#46494D]">{item.experience}</td>
                                                    <td className="px-3 py-4 text-[15px] font-medium text-[#46494D]">{item.description}</td>
                                                    <td className="px-3 py-4 text-[15px] font-medium text-[#46494D] text-center space-x-2">
                                                        <button
                                                                       onClick={() => handleopen(item?.uuid)}
                                                            className="text-[#FF1B1B] h-[30px] w-[30px] bg-[#FF1B1B] bg-opacity-10 hover:bg-opacity-30 rounded inline-flex items-center justify-center"
                                                        >
                                                            {/* SVG for delete icon */}
                                                            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M3 18C2.45 18 1.97933 17.8043 1.588 17.413C1.19667 17.0217 1.00067 16.5507 1 16V3H0V1H5V0H11V1H16V3H15V16C15 16.55 14.8043 17.021 14.413 17.413C14.0217 17.805 13.5507 18.0007 13 18H3ZM13 3H3V16H13V3ZM5 14H7V5H5V14ZM9 14H11V5H9V14Z" fill="#FF1B1B" />
                                                            </svg>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                ))
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    <div className="relative bg-white w-full rounded-[30px] lg:rounded-[40px] m-auto">
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="absolute top-5 right-6 text-gray-700 hover:text-gray-900"
                        >
                            {/* Close button SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="border-b border-black border-opacity-10 pt-6 pb-5 px-6">
                            <h2 className="text-xl lg:text-2xl text-[#212121] font-semibold">Add New Principle</h2>
                        </div>
                        <form onSubmit={handleSubmit} className="p-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-[#212121]">Designation</label>
                                    <input
                                        type="text"
                                        name="designation"
                                        value={formData.designation}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-[#0367F7] focus:ring focus:ring-[#0367F7] focus:ring-opacity-50"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#212121]">Qualification</label>
                                    <input
                                        type="text"
                                        name="qualification"
                                        value={formData.qualification}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-[#0367F7] focus:ring focus:ring-[#0367F7] focus:ring-opacity-50"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#212121]">Experience</label>
                                    <input
                                        type="text"
                                        name="experience"
                                        value={formData.experience}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-[#0367F7] focus:ring focus:ring-[#0367F7] focus:ring-opacity-50"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#212121]">Description</label>
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-[#0367F7] focus:ring focus:ring-[#0367F7] focus:ring-opacity-50"
                                        rows="3"
                                        required
                                    />
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="text-white bg-[#0367F7] hover:bg-opacity-90 text-sm font-normal tracking-[-0.03em] py-2 px-4 border border-[#0367F7] rounded-md"
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

                <Modal isOpen={isDeleteOpen} onClose={handleDeleteClose}>
                    <style>
                        {`
                          /* Corrected CSS for modal width */
                          #modal .sm\\:max-w-2xl {
                          margin: auto;
                          box-shadow:none;
                          max-width: 561px !important; /* Ensure !important is spelled correctly */
                          }
                      `}
                    </style>
                    <div className="relative bg-white w-full rounded-[30px] lg:rounded-[40px] h-auto m-auto">
                        <button
                            type="button"
                            onClick={handleDeleteClose}
                            className="absolute top-5 md:top-6 lg:top-9 right-6 lg:right-10 text-gray-700 hover:text-gray-900"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

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
