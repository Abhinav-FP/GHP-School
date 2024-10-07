import Details from "@/pages/api/admin/Details";
import Header from "../Component/Header";
// import Nodata from "../Component/Nodata";
import LoadingData from "../Component/Loading";
import SideBarAdmin from "../Component/SideBar";
import React, { useState, useEffect } from "react";
import Modal from "../Component/Modal";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import NoData from "../Component/NoData";
function Index() {
    const [isOpen, setIsOpen] = useState(false);
    const [listing, setLisitng] = useState([])
    console.log(listing)
    const [Loading, setLoading] = useState(false)
    const getPayment = () => {
        setLoading(true);
        const main = new Details();
        main.Sysllabas()
            .then((r) => {
                setLoading(false);
                setLisitng(r?.data?.syllabus);
            })
            .catch((err) => {
                setLoading(false);
                setLisitng([]);
                console.log("error", err);
            });
    };

    useEffect(() => {
        getPayment();
    }, []);
    

    return (<>
        <div className="md:flex flex-wrap  bg-[#F5F6FB] items-start">
            <SideBarAdmin />
            {/* right sidebar  */}
            <div className="w-full lg:w-[calc(100%-304px)]">
                <Header title={"Syllabus"} />
                {/* Overview */}
                <div className="px-4 py-2 lg:px-10 lg:py-2.5">
                    {/*  */}
                    <div className="bg-white rounded-[20px] mb-[30px]">
                        <div className="py-3 py-4 lg:py-[23px] px-4 md:px-6 lg:px-10 flex flex-wrap justify-between items-center border-b border-black  border-opacity-10">
                            <h3 className=" text-base lg:text-lg font-semibold text-[#1E1E1E] mb-3 sm:mb-0 tracking-[-0.03em]">Syllabus  </h3>
                           
                        </div>
                        <div className="overflow-x-auto">
                            {Loading ? (
                                <LoadingData />
                            ) : (
                                listing?.length < 0 ? (
                                    // <Nodata />
                                    <NoData />
                                ) : (
                                    <table className="min-w-full">
                                        <thead>
                                            <tr>
                                                <th className="pl-4 md:pl-6 lg:pl-10 pr-3 py-3 lg:py-3.5 text-sm font-medium text-[#8D929A] text-left uppercase tracking-[-0.03em]">
                                                    S. No.
                                                </th>
                                                <th className="pl-4 md:pl-6 lg:pl-10 pr-3 py-3 lg:py-3.5 text-sm font-medium text-[#8D929A] text-left uppercase tracking-[-0.03em]">
                                                    Class 
                                                </th>
                                                <th className="pl-4 md:pl-6 lg:pl-10 pr-3 py-3 lg:py-3.5 text-sm font-medium text-[#8D929A] text-left uppercase tracking-[-0.03em]">
                                                Syllabus Link
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {listing?.map((item, index) => (
                                                <tr key={item.id} className="bg-white border-t transition duration-300 ease-in-out hover:bg-gray-100">
                                                    <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[15px] font-medium text-[#46494D] tracking-[-0.03em]">
                                                        {index + 1}
                                                    </td>
                                                    <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[15px] font-medium text-[#46494D] tracking-[-0.03em]">
                                                        {item?.text}
                                                    </td>
                                                    <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[15px] font-medium text-[#46494D] tracking-[-0.03em]">
                                                        {item?.link
                                                        }
                                                    </td>
                                                    
                                                 
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {isOpen &&
            <Modal isOpen={isOpen} onClose={handleClose}>
                <div className="relative bg-white w-full rounded-[30px] lg:rounded-[40px] h-auto m-auto">
                    <div className="border-b border-black border-opacity-10 pt-6 pb-5 px-6 lg:pt-8 lg:pb-6 lg:px-10">
                        <h2 className="text-xl lg:text-2xl  text-[#212121] tracking-[-0.04em] font-semibold mb-0">Fees  </h2>
                    </div>
                    <div className="py-6 lg:py-8 ">
                        <form>
                            <div className=' max-h-full overflow-y-auto customscroll px-6 lg:px-10 '>



                                <div className="mb-3 lg:mb-[25px]">
                                    <label className="font-medium text-sm lg:text-base tracking-[-0.03em] block text-[#8D929A] mb-1 lg:mb-2">grade</label>
                                    <input
                                        name="grade"
                                        value={formdata?.grade}
                                        onChange={handleChange}
                                        type="text"
                                        className="w-full h-11 lg:h-[54px] font-semibold appearance-none block bg-white text-[#46494D] text-base border border-gray-300 rounded-lg py-3 px-3 lg:px-5 leading-tight focus:outline-none"

                                    />
                                    {/* <p message={errors?.name} className="!text-red-600" /> */}


                                </div>
                                <div className="mb-3 lg:mb-[25px]">
                                    <label className="font-medium text-sm lg:text-base tracking-[-0.03em] block text-[#8D929A] mb-1 lg:mb-2">first</label>
                                    <input
                                        name="first"
                                        value={formdata?.first}
                                        onChange={handleChange}
                                        type="text"
                                        className="w-full h-11 lg:h-[54px] font-semibold appearance-none block bg-white text-[#46494D] text-base border border-gray-300 rounded-lg py-3 px-3 lg:px-5 leading-tight focus:outline-none"

                                    />
                                    {/* <p message={errors?.name} className="!text-red-600" /> */}


                                </div>
                                <div className="mb-3 lg:mb-[25px]">
                                    <label className="font-medium text-sm lg:text-base tracking-[-0.03em] block text-[#8D929A] mb-1 lg:mb-2">second</label>
                                    <input
                                        name="second"
                                        value={formdata?.second}
                                        onChange={handleChange}
                                        type="text"
                                        className="w-full h-11 lg:h-[54px] font-semibold appearance-none block bg-white text-[#46494D] text-base border border-gray-300 rounded-lg py-3 px-3 lg:px-5 leading-tight focus:outline-none"

                                    />
                                    {/* <p message={errors?.name} className="!text-red-600" /> */}


                                </div>
                                <div className="mb-3 lg:mb-[25px]">
                                    <label className="font-medium text-sm lg:text-base tracking-[-0.03em] block text-[#8D929A] mb-1 lg:mb-2">third</label>
                                    <input
                                        name="third"
                                        value={formdata?.third}
                                        onChange={handleChange}
                                        type="text"
                                        className="w-full h-11 lg:h-[54px] font-semibold appearance-none block bg-white text-[#46494D] text-base border border-gray-300 rounded-lg py-3 px-3 lg:px-5 leading-tight focus:outline-none"

                                    />
                                    {/* <p message={errors?.name} className="!text-red-600" /> */}


                                </div>
                                <div className="mb-3 lg:mb-[25px]">
                                    <label className="font-medium text-sm lg:text-base tracking-[-0.03em] block text-[#8D929A] mb-1 lg:mb-2">fourth</label>
                                    <input
                                        name="fourth"
                                        value={formdata?.fourth}
                                        onChange={handleChange}
                                        type="text"
                                        className="w-full h-11 lg:h-[54px] font-semibold appearance-none block bg-white text-[#46494D] text-base border border-gray-300 rounded-lg py-3 px-3 lg:px-5 leading-tight focus:outline-none"

                                    />
                                    {/* <p message={errors?.name} className="!text-red-600" /> */}


                                </div>
                                <div className="mb-3 lg:mb-[25px]">
                                    <label className="font-medium text-sm lg:text-base tracking-[-0.03em] block text-[#8D929A] mb-1 lg:mb-2">total</label>
                                    <input
                                        name="total"
                                        value={formdata?.total}
                                        onChange={handleChange}
                                        type="text"
                                        readonly
                                        className="w-full h-11 lg:h-[54px] font-semibold appearance-none block bg-white text-[#46494D] text-base border border-gray-300 rounded-lg py-3 px-3 lg:px-5 leading-tight focus:outline-none"
                                    />
                                </div>

                            </div>
                            {/* Submit Button */}
                            <div className="flex justify-end pt-3 px-6 lg:px-10 ">
                                <button type="submit"
                                    onClick={handleSubmit}
                                    className="w-full text-white bg-[#0367F7] hover:text-[#0367F7] hover:bg-white text-[17px] font-medium tracking-[-0.04em] h-11 lg:h-[54px] py-2.5 px-12 border border-[#0367F7] rounded-full outline-none focus:outline-none ease-linear transition-all duration-150">
                                    {Loading ? "Processing.." : "fees"}

                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>}
    </>);
}

export default Index;