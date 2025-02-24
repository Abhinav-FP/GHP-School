import Details from "@/pages/api/admin/Details";
import Header from "../Component/Header";
import LoadingData from "../Component/Loading";
import SideBarAdmin from "../Component/SideBar";
import React, { useState, useEffect } from "react";
import Modal from "../Component/Modal";
import DeleteEnquiry from "./DeleteEnquiry";
import AdminLayout from "@/layout/AdminLayout";
// import NoData from "../Component/NoData"; // Uncomment if you want to use this

function Index() {
    const [listing, setListing] = useState([]); // Corrected the spelling
    const [loading, setLoading] = useState(false);

    const getEnquiryData = () => {
        setLoading(true);
        const main = new Details();
        main
            .inquiryget()
            .then((r) => {
                setLoading(false);
                setListing(r?.data?.enquiries || []); // Updated data structure handling
            })
            .catch((err) => {
                setLoading(false);
                setListing([]);
                console.error("Error fetching data", err);
            });
    };

    useEffect(() => {
        getEnquiryData();
    }, []);

    return (
        <AdminLayout>
        <div className="md:flex flex-wrap bg-[#F5F6FB] items-start">
            <SideBarAdmin />
            {/* Main Content */}
            <div className="w-full lg:ml-[304px] lg:w-[calc(100%-304px)]">
                <Header title={"Manage Inquiries"} />
                <div className="px-4 py-2 lg:px-10 lg:py-2.5">
                    <div className="bg-white rounded-[20px] mb-[30px]">
                        <div className="py-3 py-4 lg:py-[23px] px-4 md:px-6 lg:px-10 flex flex-wrap justify-between items-center border-b border-black border-opacity-10">
                            <h3 className="text-base lg:text-lg font-semibold text-[#1E1E1E] mb-3 sm:mb-0 tracking-[-0.03em]">
                                Inquiries
                            </h3>
                        </div>

                        <div className="overflow-x-auto">
                            {loading ? (
                                <LoadingData />
                            ) : listing.length === 0 ? (
                                // <NoData /> // Uncomment this if you want to use a NoData component
                                <>No Data</>
                            ) : (
                                <table className="min-w-full">
                                    <thead>
                                        <tr>
                                            <th className="pl-4 md:pl-6 lg:pl-10 pr-3 py-3 text-sm font-medium text-[#8D929A] text-left uppercase tracking-[-0.03em]">
                                                S. No.
                                            </th>
                                            <th className="pl-4 md:pl-6 lg:pl-10 pr-3 py-3 text-sm font-medium text-[#8D929A] text-left uppercase tracking-[-0.03em]">
                                                Name
                                            </th>
                                            <th className="pl-4 md:pl-6 lg:pl-10 pr-3 py-3 text-sm font-medium text-[#8D929A] text-left uppercase tracking-[-0.03em]">
                                                Email
                                            </th>
                                            <th className="px-3 py-3 text-sm font-medium text-[#8D929A] text-left uppercase tracking-[-0.03em]">
                                                Phone
                                            </th>
                                            <th className="pr-4 md:pr-6 lg:pr-10 pl-3 py-3 text-sm font-medium text-[#8D929A] text-left uppercase tracking-[-0.03em] text-center">
                                                Message
                                            </th>
                                            <th className="pr-4 md:pr-6 lg:pr-10 pl-3 py-3 text-sm font-medium text-[#8D929A] text-left uppercase tracking-[-0.03em] text-center">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {listing.map((item, index) => (
                                            <tr
                                                key={index} // Use unique keys instead of index
                                                className="bg-white border-t transition duration-300 ease-in-out hover:bg-gray-100"
                                            >
                                                <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[15px] font-medium text-[#46494D]">
                                                    {index + 1}
                                                </td>
                                                <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[15px] font-medium text-[#46494D]">
                                                    {item.name}
                                                </td>
                                                <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[15px] font-medium text-[#46494D]">
                                                    {item.email}
                                                </td>
                                                <td className="px-3 py-4 text-[15px] font-medium text-[#46494D]">
                                                    {item.contact}
                                                </td>
                                                <td className="px-3 py-4 text-[15px] font-medium text-[#46494D]">
                                                    {item.message}
                                                </td>
                                                <td className="px-3 py-4 text-[15px] font-medium text-[#46494D] text-center space-x-2">
                                                    <div className="flex space-x-2 justify-center">
                                                        <DeleteEnquiry id={item?._id} getenquirydata={getEnquiryData} />
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </AdminLayout>
    );
}

export default Index;
