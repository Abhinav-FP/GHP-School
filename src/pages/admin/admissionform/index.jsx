import Details from "@/pages/api/admin/Details";
import Header from "../Component/Header";
import LoadingData from "../Component/Loading";
import SideBarAdmin from "../Component/SideBar";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import NoData from "../Component/NoData";

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
            <div className="md:flex flex-wrap bg-[#F5F6FB] listings-start">
                <SideBarAdmin />
                <div className="w-full lg:w-[calc(100%-304px)]">
                    <Header title={"Manage Admission"} />
                    <div className="px-4 py-2 lg:px-10 lg:py-2.5">
                        <div className="bg-white rounded-[20px] mb-[30px]">
                            <div className="py-3 py-4 lg:py-[23px] px-4 md:px-6 lg:px-10 flex flex-wrap justify-between listings-center border-b border-black border-opacity-10">
                                <h3 className="text-base lg:text-lg font-semibold text-[#1E1E1E] mb-3 sm:mb-0 tracking-[-0.03em]">Admission</h3>
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
                                                <tr>
                                                    <th className="pl-4 md:pl-6 lg:pl-10 pr-3 py-3 lg:py-3.5 text-sm font-medium text-[#8D929A] text-left uppercase tracking-[-0.03em]">Name</th>
                                                    <th className="pl-4 md:pl-6 lg:pl-10 pr-3 py-3 lg:py-3.5 text-sm font-medium text-[#8D929A] text-left uppercase tracking-[-0.03em]">DOB</th>
                                                    <th className="pl-4 md:pl-6 lg:pl-10 pr-3 py-3 lg:py-3.5 text-sm font-medium text-[#8D929A] text-left uppercase tracking-[-0.03em]">address</th>
                                                    <th className="pl-4 md:pl-6 lg:pl-10 pr-3 py-3 lg:py-3.5 text-sm font-medium text-[#8D929A] text-left uppercase tracking-[-0.03em]">Email</th>
                                                    <th className="pl-4 md:pl-6 lg:pl-10 pr-3 py-3 lg:py-3.5 text-sm font-medium text-[#8D929A] text-left uppercase tracking-[-0.03em]">Father </th>
                                                    <th className="pl-4 md:pl-6 lg:pl-10 pr-3 py-3 lg:py-3.5 text-sm font-medium text-[#8D929A] text-left uppercase tracking-[-0.03em]">Mother</th>
                                                    <th className="pl-4 md:pl-6 lg:pl-10 pr-3 py-3 lg:py-3.5 text-sm font-medium text-[#8D929A] text-left uppercase tracking-[-0.03em]">Guardian</th>
                                                    <th className="pl-4 md:pl-6 lg:pl-10 pr-3 py-3 lg:py-3.5 text-sm font-medium text-[#8D929A] text-left uppercase tracking-[-0.03em]">Class</th>
                                                    <th className="pl-4 md:pl-6 lg:pl-10 pr-3 py-3 lg:py-3.5 text-sm font-medium text-[#8D929A] text-left uppercase tracking-[-0.03em]">facility</th>
                                                    <th className="pl-4 md:pl-6 lg:pl-10 pr-3 py-3 lg:py-3.5 text-sm font-medium text-[#8D929A] text-left uppercase tracking-[-0.03em]">optional</th>
                                                    <th className="pl-4 md:pl-6 lg:pl-10 pr-3 py-3 lg:py-3.5 text-sm font-medium text-[#8D929A] text-left uppercase tracking-[-0.03em]">scholar</th>
                                                    <th className="pl-4 md:pl-6 lg:pl-10 pr-3 py-3 lg:py-3.5 text-sm font-medium text-[#8D929A] text-left uppercase tracking-[-0.03em]">school</th>
                                                    <th className="pl-4 md:pl-6 lg:pl-10 pr-3 py-3 lg:py-3.5 text-sm font-medium text-[#8D929A] text-left uppercase tracking-[-0.03em]">sibling</th>
                                                    <th className="pl-4 md:pl-6 lg:pl-10 pr-3 py-3 lg:py-3.5 text-sm font-medium text-[#8D929A] text-left uppercase tracking-[-0.03em]">type</th>


                                                </tr>
                                            </thead>
                                            <tbody>
                                                {listing.map((item, index) => (
                                                    <tr key={index} className="bg-white border-t transition duration-300 ease-in-out hover:bg-gray-100">
                                                        <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[15px] font-medium text-[#46494D] tracking-[-0.03em]">{item.name} casts: {item?.belongs}</td>
                                                        <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[15px] font-medium text-[#46494D] tracking-[-0.03em]">{item.dobWords} </td>
                                                        <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[15px] font-medium text-[#46494D] tracking-[-0.03em]">{item.address} </td>

                                                        <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[15px] font-medium text-[#46494D] tracking-[-0.03em]">{item.email}</td>
                                                        <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[15px] font-medium text-[#46494D] tracking-[-0.03em]">name :{item.fatherName} phone:{item?.fatherPhone} Occupation:{item?.fatherOccupation} email :{item?.fatheremail}  </td>
                                                        <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[15px] font-medium text-[#46494D] tracking-[-0.03em]">                                                            name : {item.guardianName} phone : {item?.guardianPhone}  Occupation:{item?.guardianOccupation}
                                                            name : {item.motherName} phone : {item?.motherPhone}  Occupation:{item?.motherOccupation}
                                                        </td>
                                                        <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[15px] font-medium text-[#46494D] tracking-[-0.03em]">
                                                            name : {item.guardianName} phone : {item?.guardianPhone}  Occupation:{item?.guardianOccupation}

                                                        </td>
                                                        <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[15px] font-medium text-[#46494D] tracking-[-0.03em]">{item.class} class percentage: {item?.class_percentage}</td>
                                                        <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[15px] font-medium text-[#46494D] tracking-[-0.03em]">
                                                            {item?.facility}
                                                        </td>
                                                        <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[15px] font-medium text-[#46494D] tracking-[-0.03em]">
                                                            {item?.optional}
                                                        </td>
                                                        <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[15px] font-medium text-[#46494D] tracking-[-0.03em]">
                                                            {item?.scholar}
                                                        </td>
                                                        <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[15px] font-medium text-[#46494D] tracking-[-0.03em]">
                                                            {item?.school}
                                                        </td>
                                                        <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[15px] font-medium text-[#46494D] tracking-[-0.03em]">
                                                            {item?.sibling}
                                                        </td>
                                                        <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[15px] font-medium text-[#46494D] tracking-[-0.03em]">
                                                            {item?.type}
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
        </>
    );
}

export default Index;
