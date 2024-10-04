import Details from "@/pages/api/admin/Details";
import Modal from "./Modal";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

function Delete({ grade , getfeesdata}) {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleClick = (e) => {
        e.preventDefault();
        setLoading(true);
        const main = new Details();
        const response = main.feedelete({ grade: grade });
        response
            .then((res) => {
                if (res && res?.data && res?.data?.status) {
                    toast.success(res.data.message);
                    setLoading(false);
                    handleClose();
                    getfeesdata();
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

    return (<>
        <button
            onClick={() => setIsOpen(true)}
            className="text-[#0367F7] h-[30px] w-[30px] bg-[#0367F7] bg-opacity-10 hover:bg-opacity-30 rounded inline-flex items-center justify-center"
        >
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 18C2.45 18 1.97933 17.8043 1.588 17.413C1.19667 17.0217 1.00067 16.5507 1 16V3H0V1H5V0H11V1H16V3H15V16C15 16.55 14.8043 17.021 14.413 17.413C14.0217 17.805 13.5507 18.0007 13 18H3ZM13 3H3V16H13V3ZM5 14H7V5H5V14ZM9 14H11V5H9V14Z" fill="#FF1B1B" />
            </svg>
        </button>
        {isOpen &&
            <Modal isOpen={isOpen} onClose={handleClose}>
                <div className=" max-w-[200px] relative bg-white w-full rounded-[30px] lg:rounded-[40px] h-auto m-auto">
                    <button
                        type="button"
                        onClick={handleClose}
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
                                onClick={handleClose}
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
            </Modal>}
    </>);
}

export default Delete;