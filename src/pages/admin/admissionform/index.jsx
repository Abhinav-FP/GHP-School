import Details from "@/pages/api/admin/Details";
import Header from "../Component/Header";
import LoadingData from "../Component/Loading";
import SideBarAdmin from "../Component/SideBar";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import NoData from "../Component/NoData";
import ViewAdmission from "./ViewAdmission";
import AdminLayout from "@/layout/AdminLayout";

function Index() {
    const [isOpen, setIsOpen] = useState(false);
    const [listing, setLisitng] = useState([]);
    const [Loading, setLoading] = useState(false);

    const admissionFormGetData = () => {
        setLoading(true);
        const main = new Details();
        main.admissionForm()
            .then((r) => {
                console.log("r", r);
                setLoading(false);
                setLisitng(r?.data?.banners);
            })
            .catch((err) => {
                setLoading(false);
                setLisitng([]);
                console.log("error", err);
            });
    };

    useEffect(() => {
        admissionFormGetData();
    }, []);

    const router = useRouter();

    return (
        <>
            <AdminLayout>
                <div className="md:flex flex-wrap bg-[#F5F6FB] listings-start">
                    <SideBarAdmin />
                    <div className="w-full lg:ml-[304px] lg:w-[calc(100%-304px)]">
                        <Header title={"Manage Admission"} />
                        <div className="px-4 py-2 lg:px-10 lg:py-2.5">
                            <div className="bg-white rounded-[20px] mb-[30px]">
                                <div className="py-3 py-4 lg:py-[23px] px-4 md:px-6 lg:px-10 flex flex-wrap justify-between listings-center border-b border-black border-opacity-10">
                                    <h3 className="text-lg lg:text-xl merriweather-font font-normal text-[#1E1E1E] mb-3 sm:mb-0 tracking-[-0.03em]">Admission</h3>
                                </div>
                                <div className="overflow-x-auto">
                                    {Loading ? (
                                        <LoadingData />
                                    ) : (
                                        listing?.length === 0 ? (
                                            <NoData />
                                        ) : (
                                            <table className="min-w-full">
                                                <thead>
                                                    <tr className="bg-[#36C9B4] text-white">
                                                        <th className="pl-4 md:pl-6 lg:pl-10 pr-3 py-3 lg:py-3.5 text-sm font-medium  text-left uppercase tracking-[-0.03em]  text-white ">Name</th>
                                                        <th className="pl-4 md:pl-6 lg:pl-10 pr-3 py-3 lg:py-3.5 text-sm font-medium  text-left uppercase tracking-[-0.03em]  text-white ">DOB</th>
                                                        <th className="pl-4 md:pl-6 lg:pl-10 pr-3 py-3 lg:py-3.5 text-sm font-medium  text-left uppercase tracking-[-0.03em]  text-white ">Email</th>
                                                        <th className="pl-4 md:pl-6 lg:pl-10 pr-3 py-3 lg:py-3.5 text-sm font-medium  text-left uppercase tracking-[-0.03em]  text-white ">Class</th>
                                                        <th className="pl-4 md:pl-6 lg:pl-10 pr-3 py-3 lg:py-3.5 text-sm font-medium  text-left uppercase tracking-[-0.03em]  text-white ">school</th>
                                                        <th className="pl-4 md:pl-6 lg:pl-10 pr-3 py-3 lg:py-3.5 text-sm font-medium  text-left uppercase tracking-[-0.03em]  text-white ">type</th>
                                                        <th className="pl-4 md:pl-6 lg:pl-10 pr-3 py-3 lg:py-3.5 text-sm font-medium  text-left uppercase tracking-[-0.03em]  text-white ">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {listing.map((item, index) => (
                                                        <tr key={index} className="bg-white border-t border-black border-opacity-10 transition duration-300 ease-in-out hover:bg-gray-100">
                                                            <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[15px] font-medium text-[#666666] tracking-[-0.03em]">{item.name} </td>
                                                            <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[15px] font-medium text-[#666666] tracking-[-0.03em]">{item.dobWords} </td>
                                                            <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[15px] font-medium text-[#666666] tracking-[-0.03em]">{item.email}</td>
                                                            <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[15px] font-medium text-[#666666] tracking-[-0.03em]">{item.class}</td>
                                                            <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[15px] font-medium text-[#666666] tracking-[-0.03em]">
                                                                {item?.school}
                                                            </td>
                                                            <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[15px] font-medium text-[#666666] tracking-[-0.03em]">
                                                                {item?.type}
                                                            </td>
                                                            <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[15px] font-medium text-[#666666] tracking-[-0.03em]">
                                                                <ViewAdmission item={item} />
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

            </AdminLayout>

        </>
    );
}

export default Index;
