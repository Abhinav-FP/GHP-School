import Details from "@/pages/api/admin/Details";
import Header from "../Component/Header";
import LoadingData from "../Component/Loading";
import SideBarAdmin from "../Component/SideBar";
import React, { useState, useEffect } from "react";
import Modal from "../Component/Modal";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import NoData from "../Component/NoData";
import Link from "next/link";

function Index() {
    const [isOpen, setIsOpen] = useState(false);
    const [listing, setLisitng] = useState([]);
    const [Loading, setLoading] = useState(false);
    const [formdata, setFormdata] = useState({
        text: "",
    });

    console.log("formdata", formdata)

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleopen = (listing) => {
        setIsOpen(true);
        setFormdata({
            text: listing.text || '',
        });
    };

    const admissionGetData = () => {
        setLoading(true);
        const main = new Details();
        main.admissionGet()
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

    useEffect(() => {
        admissionGetData();
    }, []);

    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({
            ...formdata,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const main = new Details();
        try {
            const res = await main.admissionEdit(formdata);
            if (res?.data) {
                toast.success(res.data.message);
                handleClose();
                admissionGetData();
            } else {
                toast.error(res.message);
            }
        } catch (error) {
            toast.error("An error occurred while updating.");
        } finally {
            setLoading(false);
        }
    };

    const handleToggleShow = async (currentStatus) => {
        setLoading(true);
        const main = new Details();
        try {
            const newStatus = !currentStatus;
            const res = await main.admissionPost({ show: newStatus });
            if (res?.data) {
                toast.success("Status updated successfully");
                admissionGetData();
            } else {
                toast.error(res.message);
            }
        } catch (error) {
            toast.error("An error occurred while updating the status.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="md:flex flex-wrap bg-[#F5F6FB] listings-start">
                <SideBarAdmin />
                <div className="w-full lg:ml-[304px] lg:w-[calc(100%-304px)]">
                    <Header title={"Manage Admission Slider"} />
                    <div className="px-4 py-2 lg:px-10 lg:py-2.5">
                        <div className="bg-white rounded-[20px] mb-[30px]">
                            <div className="py-3 py-4 lg:py-[23px] px-4 md:px-6 lg:px-10 flex flex-wrap justify-between listings-center border-b border-black border-opacity-10">
                                <h3 className="text-base lg:text-lg font-semibold text-[#1E1E1E] mb-3 sm:mb-0 tracking-[-0.03em]"> Admission Slider</h3>
                            </div>

                            {listing?.show === true && (
        <div className='z-[1] relative px-6 overflow-hidden md:px-8 lg:px-10 py-5 bg-[#EE834E]'>
          <div className="marquee flex items-center md:px-8 lg:px-10 text-white text-2xl lg:text-[32px] merriweather-font tracking-[-0.04em]">
              {[1, 2, 3].map((item, index) => (
                <span className='pr-4' key={index}>
                  <svg
                    className='inline'
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
                  {listing?.text} – Apply Now!
                </span>
              ))}
          </div>
        </div>
      )}
                            <div className="overflow-x-auto">
                                {Loading ? (
                                    <LoadingData />
                                ) : (
                                    listing?.length === 0 ? (
                                        <NoData />
                                    ) : (
                                        <table className="min-w-full">
                                            <thead>
                                                <tr>
                                                    <th className="pl-4 md:pl-6 lg:pl-10 pr-3 py-3 lg:py-3.5 text-sm font-medium text-[#8D929A] text-left uppercase tracking-[-0.03em]">Text</th>
                                                    <th className="pl-4 md:pl-6 lg:pl-10 pr-3 py-3 lg:py-3.5 text-sm font-medium text-[#8D929A] text-left uppercase tracking-[-0.03em]">Show</th>
                                                    <th className="pl-4 md:pl-6 lg:pl-10 pr-3 py-3 lg:py-3.5 text-sm font-medium text-[#8D929A] text-left uppercase tracking-[-0.03em]">Action</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="bg-white border-t transition duration-300 ease-in-out hover:bg-gray-100">
                                                    <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[15px] font-medium text-[#46494D] tracking-[-0.03em]">{listing.text}</td>
                                                    <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[15px] font-medium text-[#46494D] tracking-[-0.03em]">
                                                        <button
                                                            onClick={() => handleToggleShow(listing.show)}
                                                            className={`px-3 py-1 rounded ${listing.show ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                                                            {listing.show ? "True" : "False"}
                                                        </button>
                                                    </td>
                                                    <td className="px-3 py-4 text-[15px] font-medium text-[#46494D] text-center tracking-[-0.03em] space-x-2">
                                                        <div className="flex space-x-2 justify-center">
                                                            <button
                                                                onClick={() => handleopen(listing)}
                                                                 className="text-[#0367F7] h-[30px] w-[30px] bg-[#0367F7] bg-opacity-10 hover:bg-opacity-30 rounded inline-flex items-center justify-center"
                                                            >
                                                                <svg className="inline" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M4 14.5349L8.413 14.5199L18.045 4.97988C18.423 4.60188 18.631 4.09988 18.631 3.56588C18.631 3.03188 18.423 2.52988 18.045 2.15188L16.459 0.565875C15.703 -0.190125 14.384 -0.186125 13.634 0.562875L4 10.1049V14.5349ZM15.045 1.97988L16.634 3.56288L15.037 5.14488L13.451 3.55988L15.045 1.97988ZM6 10.9389L12.03 4.96588L13.616 6.55188L7.587 12.5229L6 12.5279V10.9389Z" fill="#0367F7" />
                                                                    <path d="M2 18.5219H16C17.103 18.5219 18 17.6249 18 16.5219V7.85388L16 9.85388V16.5219H5.158C5.132 16.5219 5.105 16.5319 5.079 16.5319C5.046 16.5319 5.013 16.5229 4.979 16.5219H2V2.52188H8.847L10.847 0.521875H2C0.897 0.521875 0 1.41888 0 2.52188V16.5219C0 17.6249 0.897 18.5219 2 18.5219Z" fill="#0367F7" />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <Modal isOpen={isOpen} onClose={handleClose}>
                    <div className="relative bg-white w-full rounded-[30px] lg:rounded-[40px] h-auto m-auto">
                        <div className="border-b border-black border-opacity-10 pt-6 pb-5 px-6 lg:pt-8 lg:pb-6 lg:px-10">
                            <h2 className="text-xl lg:text-2xl text-[#212121] tracking-[-0.04em] font-semibold mb-0">Fees</h2>
                        </div>
                        <div className="py-6 lg:py-8">
                            <form onSubmit={handleSubmit}>
                                <div className='max-h-full overflow-y-auto customscroll px-6 lg:px-10'>
                                    {/* Form fields */}
                                    <div className="mb-3 lg:mb-[25px]">
                                        <label className="font-medium text-sm lg:text-base tracking-[-0.03em] block text-[#8D929A] mb-1 lg:mb-2">grade</label>
                                        <input
                                            name="text"
                                            value={formdata?.text}
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full h-11 lg:h-[54px] font-semibold appearance-none block bg-white text-[#46494D] text-base border border-gray-300 rounded-lg py-3 px-3 lg:px-5 leading-tight focus:outline-none"
                                        />
                                    </div>
                                    {/* Other form fields for first, second, third, and fourth */}
                                </div>
                                <div className="px-6 lg:px-10 mb-3 lg:mb-8">
                                    <button
                                        type="submit"
                                        className="h-11 lg:h-12 w-full bg-[#0367F7] text-white text-base font-medium rounded-lg hover:bg-opacity-90"
                                    >
                                        {Loading ? "Loading.." : "Submit"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    );
}

export default Index;
