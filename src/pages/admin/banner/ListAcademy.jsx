import Details from "@/pages/api/admin/Details";
import Header from "../Component/Header";
import LoadingData from "../Component/Loading";
import SideBarAdmin from "../Component/SideBar";
import React, { useState, useEffect } from "react";
import NoData from "../Component/NoData";
import AdminLayout from "@/layout/AdminLayout";
import AddAcademy from "./AddAcademy";
import { FaEye } from "react-icons/fa";
import Link from "next/link";
function ListAcademy() {
    const [listing, setLisitng] = useState([])
    console.log("listing", listing)
    const [Loading, setLoading] = useState(false)
    const getNotificationdata = () => {
        setLoading(true);
        const main = new Details();
        main.Academy()
            .then((r) => {
                console.log(r)
                setLoading(false);
                console.log("r.data.Notification", r?.data?.academics)
                setLisitng(r?.data?.academics);
            })
            .catch((err) => {
                setLoading(false);
                setLisitng([]);
                console.log("error", err);
            });
    };

    useEffect(() => {
        getNotificationdata();
    }, []);




    return (<>

        {/* right sidebar  */}
        <div className="w-full lg:ml-[304px] lg:w-[calc(100%-304px)]">
            <Header title={"Manage Academcies Calendar"} />
            {/* Overview */}
            <div className="px-4 py-2 lg:px-10 lg:py-2.5">
                {/*  */}
                <div className="bg-white rounded-[20px] mb-[30px]">
                    <div className="py-3 py-4 lg:py-[23px] px-4 md:px-6 lg:px-10 flex flex-wrap justify-between items-center border-b border-black  border-opacity-10">
                        <h3 className=" text-base lg:text-lg font-semibold text-[#1E1E1E] mb-3 sm:mb-0 tracking-[-0.03em]">Manage Academcies Calendar
                        </h3>
                        {/* <AddAcademy getNotificationdata={getNotificationdata} /> */}
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
                                            Academcies
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
                                                    <Link
                                                        href={item?.link}
                                                        target="_blank"
                                                        className="button-animation rounded text-white font-normal tracking-[-0.04em] text-sm font-normal py-2 px-3 xl:px-3.5  outline-none focus:outline-none ease-linear transition-all duration-150">
                                                        Academcies
                                                    </Link>
                                                </td>
                                                <td className="px-3 py-4 text-[15px] font-medium text-[#46494D]  tracking-[-0.03em] space-x-2">
                                                    <div className="flex space-x-2 justify-center">
                                                        <a
                                                            href={item?.viewLink}
                                                            target="_blank"
                                                            className="cursor-pointer">
                                                            <FaEye size={24} />
                                                        </a>
                                                        {/* <Delete id={item?._id} getNotificationdata={getNotificationdata} /> */}
                                                        <AddAcademy item={item} getNotificationdata={getNotificationdata} />
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
    </>);
}

export default ListAcademy;