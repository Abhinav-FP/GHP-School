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
import Delete from "./Delete";
import AdminLayout from "@/layout/AdminLayout";
function Index() {
    const [isOpen, setIsOpen] = useState(false);
    const [listing, setLisitng] = useState([])
    const [Loading, setLoading] = useState(false)
    const [formdata, setFormdata] = useState({
        "grade": "",
        "first": null,
        "second": null,
        "third": null,
        "fourth": null,
        "total": null,
    });
    const [Id, setId] = useState("")
    useEffect(() => {
        const total =
            Number(formdata.first) +
            Number(formdata.second) +
            Number(formdata.third) +
            Number(formdata.fourth);
        setFormdata((prevData) => ({
            ...prevData,
            total: total,
        }));
    }, [formdata.first, formdata.second, formdata.third, formdata.fourth]);

    const handleClose = () => {
        setIsOpen(false);
    };


    console.log("listing", listing)


    const handlesenddata = (item) => {
        setIsOpen(true);
        setFormdata({
            "grade": item?.grade || "",
            "first": item?.first || " ",
            "second": item?.second || "",
            "third": item?.third || " ",
            "fourth": item?.fourth || " ",
            "total": item?.total || "",

        });
        setId(item?._id)
    };

    const getfeesdata = () => {
        setLoading(true);
        const main = new Details();
        main.getfees()
            .then((r) => {
                setLoading(false);
                setLisitng(r?.data?.fees);
            })
            .catch((err) => {
                setLoading(false);
                setLisitng([]);
                console.log("error", err);
            });
    };

    useEffect(() => {
        getfeesdata();
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
            let res;
            if (Id) {
                res = await main.feesEdit(formdata);
            } else {
                res = await main.feesAdd(formdata);
            }
            if (res?.data) {
                toast.success(res.data.message);
                getfeesdata();
                handleClose();
                setFormdata(
                    {
                        "grade": "",
                        "first": null,
                        "second": null,
                        "third": null,
                        "fourth": null,
                        "total": null,
                    }
                )
                setId("")
            } else {
                toast.error(res.message);
            }
        } catch (error) {
            toast.error("An error occurred while updating.");
        } finally {
            setLoading(false);
        }
    };




    return (<>
        <AdminLayout>
            <div className="md:flex flex-wrap  bg-[#F5F6FB] items-start">
                <SideBarAdmin />
                {/* right sidebar  */}
                <div className="w-full lg:ml-[304px] lg:w-[calc(100%-304px)]">
                    <Header title={"Manage Fees structure"} />
                    {/* Overview */}
                    <div className="px-4 py-2 lg:px-10 lg:py-2.5">
                        {/*  */}
                        <div className="bg-white rounded-[20px] mb-[30px]">
                            <div className="py-3 py-4 lg:py-[23px] px-4 md:px-6 lg:px-10 flex flex-wrap justify-between items-center border-b border-black  border-opacity-10">
                                <h3 className=" text-base lg:text-lg font-semibold text-[#1E1E1E] mb-3 sm:mb-0 tracking-[-0.03em]">Fees  </h3>
                                <button onClick={() => setIsOpen(true)} className="button-animation rounded text-white font-normal tracking-[-0.04em] text-sm font-normal py-2 px-3 xl:px-3.5  outline-none focus:outline-none ease-linear transition-all duration-150">
                                    Add New Fees
                                </button>
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
                                                        I
                                                    </th>
                                                    <th className="px-3 py-3 lg:py-3.5 text-sm font-medium text-[#8D929A] text-left uppercase tracking-[-0.03em]">
                                                        II
                                                    </th>
                                                    <th className="pr-4 md:pr-6 lg:pr-10 pl-3 py-3 lg:py-3.5 text-sm font-medium text-[#8D929A] text-left uppercase tracking-[-0.03em] text-center">
                                                        III
                                                    </th>
                                                    <th className="pr-4 md:pr-6 lg:pr-10 pl-3 py-3 lg:py-3.5 text-sm font-medium text-[#8D929A] text-left uppercase tracking-[-0.03em] text-center">
                                                        IV
                                                    </th>
                                                    <th className="pr-4 md:pr-6 lg:pr-10 pl-3 py-3 lg:py-3.5 text-sm font-medium text-[#8D929A] text-left uppercase tracking-[-0.03em] text-center">
                                                        Total Fees
                                                    </th>
                                                    <th className="pr-4 md:pr-6 lg:pr-10 pl-3 py-3 lg:py-3.5 text-sm font-medium text-[#8D929A] text-left uppercase tracking-[-0.03em] text-center">
                                                        Action
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
                                                            {item?.grade}
                                                        </td>
                                                        <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[15px] font-medium text-[#46494D] tracking-[-0.03em]">
                                                            {item?.first
                                                            }
                                                        </td>
                                                        <td className="px-3 py-4 text-[15px] font-medium text-[#46494D] tracking-[-0.03em]">
                                                            {item?.second}
                                                        </td>
                                                        <td className="px-3 py-4 text-[15px] font-medium text-[#46494D] tracking-[-0.03em]">
                                                            {item?.third}
                                                        </td>
                                                        <td className="px-3 py-4 text-[15px] font-medium text-[#46494D] tracking-[-0.03em]">
                                                            {item?.fourth
                                                            }
                                                        </td>
                                                        <td className="px-3 py-4 text-[15px] font-medium text-[#46494D] tracking-[-0.03em]">
                                                            {item?.total
                                                            }
                                                        </td>
                                                        <td className="px-3 py-4 text-[15px] font-medium text-[#46494D] text-center tracking-[-0.03em] space-x-2">
                                                            <div className="flex space-x-2 justify-center">
                                                                <button
                                                                    onClick={() => handlesenddata(item)}
                                                                    className="text-[#0367F7] h-[30px] w-[30px] bg-[#0367F7] bg-opacity-10 hover:bg-opacity-30 rounded inline-flex items-center justify-center"
                                                                >
                                                                    <svg className="inline" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M4 14.5349L8.413 14.5199L18.045 4.97988C18.423 4.60188 18.631 4.09988 18.631 3.56588C18.631 3.03188 18.423 2.52988 18.045 2.15188L16.459 0.565875C15.703 -0.190125 14.384 -0.186125 13.634 0.562875L4 10.1049V14.5349ZM15.045 1.97988L16.634 3.56288L15.037 5.14488L13.451 3.55988L15.045 1.97988ZM6 10.9389L12.03 4.96588L13.616 6.55188L7.587 12.5229L6 12.5279V10.9389Z"
                                                                            fill="#0367F7"
                                                                        />
                                                                        <path
                                                                            d="M2 18.5219H16C17.103 18.5219 18 17.6249 18 16.5219V7.85388L16 9.85388V16.5219H5.158C5.132 16.5219 5.105 16.5319 5.079 16.5319C5.046 16.5319 5.013 16.5229 4.979 16.5219H2V2.52188H8.847L10.847 0.521875H2C0.897 0.521875 0 1.41888 0 2.52188V16.5219C0 17.6249 0.897 18.5219 2 18.5219Z"
                                                                            fill="#0367F7"
                                                                        />
                                                                    </svg>
                                                                </button>

                                                                <Delete grade={item?.grade} />
                                                            </div>
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
                                        className="w-full text-white button-animation hover:button-animation hover:bg-white text-[17px] font-medium tracking-[-0.04em] h-11 lg:h-[54px] py-2.5 px-12 border border-button-animation rounded-full outline-none focus:outline-none ease-linear transition-all duration-150">
                                        {Loading ? "Processing.." : "fees"}

                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Modal>}
        </AdminLayout>
    </>);
}

export default Index;