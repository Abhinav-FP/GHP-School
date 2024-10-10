import Details from "@/pages/api/admin/Details";
import Modal from "../Component/Modal";
import React, { useState } from "react";
import toast from "react-hot-toast";

function ViewAdmission({ item }) {
    console.log("item", item)
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => {
        setIsOpen(false);
    };
    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="text-[#0367F7] h-[40px] w-[120px] bg-[#0367F7] bg-opacity-10 hover:bg-opacity-30 hover:text-white transition-all duration-300 ease-in-out rounded-md inline-flex items-center justify-center font-semibold text-sm"
            >
                View
            </button>

            {isOpen && (
                <Modal isOpen={isOpen} onClose={handleClose}>
                    <div className="relative bg-white w-full rounded-[30px] lg:rounded-[40px] h-auto m-auto">
                        <div className="border-b border-black border-opacity-10 pt-6 pb-5 px-6 lg:pt-8 lg:pb-6 lg:px-10">
                            <h2 className="text-xl lg:text-2xl text-[#212121] tracking-[-0.04em] font-semibold mb-0">
                                View Admission
                            </h2>
                        </div>
                        <div className="flex flex-wrap justify-center">
                            <div className="p-6">
                                <h2 className="text-xl font-bold text-[#000000] capitalize">{item.name}</h2>
                                <p className="text-sm text-gray-500">DOB: {item.dobWords}</p>

                                <table className="min-w-full table-auto mt-4">
                                    <thead>
                                        <tr className="bg-gray-200">
                                            <th className="p-2 text-left">Field</th>
                                            <th className="p-2 text-left">Details</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        <tr>
                                            <td className="p-2 font-medium text-gray-700">Address:</td>
                                            <td className="p-2">{item.address}</td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 font-medium text-gray-700">Email:</td>
                                            <td className="p-2">{item.email}</td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 font-medium text-gray-700">Aadhar:</td>
                                            <td className="p-2">{item.aadhar}</td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 font-medium text-gray-700">Cast:</td>
                                            <td className="p-2">{item.belongs}</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <h3 className="text-lg font-semibold mt-4">Family Details:</h3>
                                <table className="min-w-full table-auto mt-2">
                                    <thead>
                                        <tr className="bg-gray-200">
                                            <th className="p-2 text-left">Relation</th>
                                            <th className="p-2 text-left">Details</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        <tr>
                                            <td className="p-2 font-medium text-gray-700">Father:</td>
                                            <td className="p-2">{item.fatherName} (Phone: {item.fatherPhone}, Occupation: {item.fatherOccupation}, Email: {item?.fatheremail})</td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 font-medium text-gray-700">Mother:</td>
                                            <td className="p-2">{item.motherName} (Phone: {item.motherPhone}, Occupation: {item.motherOccupation})</td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 font-medium text-gray-700">Guardian:</td>
                                            <td className="p-2">{item.guardianName} (Phone: {item.guardianPhone}, Occupation: {item.guardianOccupation})</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <h3 className="text-lg font-semibold mt-4">Admission Details:</h3>
                                <table className="min-w-full table-auto mt-2">
                                    <thead>
                                        <tr className="bg-gray-200">
                                            <th className="p-2 text-left">Detail</th>
                                            <th className="p-2 text-left">Info</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        <tr>
                                            <td className="p-2 font-medium text-gray-700">Class:</td>
                                            <td className="p-2">{item.class} (Percentage: {item.class_percentage})</td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 font-medium text-gray-700">Facility:</td>
                                            <td className="p-2">{item.facility}</td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 font-medium text-gray-700">Optional:</td>
                                            <td className="p-2">{item.optional}</td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 font-medium text-gray-700">Scholar:</td>
                                            <td className="p-2">{item.scholar}</td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 font-medium text-gray-700">School:</td>
                                            <td className="p-2">{item.school}</td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 font-medium text-gray-700">Sibling:</td>
                                            <td className="p-2">{item.sibling}</td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 font-medium text-gray-700">Type:</td>
                                            <td className="p-2">{item.type}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    );
}

export default ViewAdmission;
