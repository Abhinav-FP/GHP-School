import Details from "@/pages/api/admin/Details";
import Modal from "../Component/Modal";
import React, { useState } from "react";
import toast from "react-hot-toast";

function ViewAdmission({ item }) {
  console.log("item", item);
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-[100px] button-animation rounded text-white font-normal tracking-[-0.04em] text-sm font-normal py-2 px-3 xl:px-3.5  outline-none focus:outline-none ease-linear transition-all duration-150"
      >
        View
      </button>

      {isOpen && (
        <Modal isOpen={isOpen} onClose={handleClose}>
          {/* Inline CSS in JSX */}
          <style>
            {`
                                        /* Corrected CSS for modal width */
                                        #modal .modal-dialog {
                                        max-width: 800px !important; /* Ensure !important is spelled correctly */
                                        }
                                    `}
          </style>
          <div
            className="relative bg-white w-full rounded-[30px] lg:rounded-[40px] h-auto m-auto"
            style={{ maxWidth: "1000px" }}
          >
            <div className="border-b border-black border-opacity-10 pt-6 pb-5 px-6 lg:pt-6 lg:pb-6 ">
              <h2 className="merriweather-font font-normal  text-xl md:text-2xl  mb-0 text-[#1E1E1E]  tracking-[-0.04em]  ">
                View Admission
              </h2>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="p-6 w-full">
                <div className="flex gap-4 items-end">
                  {item?.image ? (
                    <div className="w-28 h-28">
                      <img
                        src={item?.image}
                        alt="Preview"
                        className="w-full h-full object-cover border border-gray-300 mb-4 rounded-md"
                      />
                    </div>
                  ) : (
                    <></>
                  )}
                  <div className="flex flex-col">
                    <h2 className="merriweather-font font-normal  text-lg md:text-xl  mb-0 text-[#1E1E1E]  tracking-[-0.04em] ">
                      {item.name}
                    </h2>
                    <p className="text-sm tracking-[-0.04em] text-[#666666]">
                      DOB: {item.dobWords}
                    </p>
                  </div>
                </div>

                <table className="min-w-full table-auto mt-4">
                  <thead>
                    <tr className="bg-[#36C9B4] text-white">
                      <th
                        width="25%"
                        className="text-white text-left text-sm px-3 lg:px-5 py-2 tracking-[-0.04em] capitalize font-medium"
                      >
                        Field
                      </th>
                      <th
                        width="75%"
                        className="text-white text-left text-sm px-3 lg:px-5 py-2 tracking-[-0.04em] capitalize font-medium"
                      >
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="text-[#666666] text-base px-3 lg:px-5 py-2 tracking-[-0.04em] border border-black border-opacity-10 font-medium">
                        Address:
                      </td>
                      <td className="text-[#666666] text-base px-3 lg:px-5 py-2 tracking-[-0.04em] border border-black border-opacity-10 font-normal">
                        {item.address}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-[#666666] text-base px-3 lg:px-5 py-2 tracking-[-0.04em] border border-black border-opacity-10 font-medium">
                        Email:
                      </td>
                      <td className="text-[#666666] text-base px-3 lg:px-5 py-2 tracking-[-0.04em] border border-black border-opacity-10 font-normal">
                        {item.email}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-[#666666] text-base px-3 lg:px-5 py-2 tracking-[-0.04em] border border-black border-opacity-10 font-medium">
                        Aadhar:
                      </td>
                      <td className="text-[#666666] text-base px-3 lg:px-5 py-2 tracking-[-0.04em] border border-black border-opacity-10 font-normal">
                        {item.aadhar}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-[#666666] text-base px-3 lg:px-5 py-2 tracking-[-0.04em] border border-black border-opacity-10 font-medium">
                        Cast:
                      </td>
                      <td className="text-[#666666] text-base px-3 lg:px-5 py-2 tracking-[-0.04em] border border-black border-opacity-10 font-normal">
                        {item.belongs}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <h3 className="merriweather-font font-normal  text-lg md:text-xl  mb-0 text-[#1E1E1E]  tracking-[-0.04em] mt-6">
                  Family Details:
                </h3>
                <table className="min-w-full table-auto mt-2">
                  <thead>
                    <tr className="bg-[#36C9B4] text-white">
                      <th
                        width="25%"
                        className="text-white text-left text-sm px-3 lg:px-5 py-2 tracking-[-0.04em] capitalize font-medium"
                      >
                        Relation
                      </th>
                      <th
                        width="75%"
                        className="text-white text-left text-sm px-3 lg:px-5 py-2 tracking-[-0.04em] capitalize font-medium"
                      >
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="text-[#666666] text-base px-3 lg:px-5 py-2 tracking-[-0.04em] border border-black border-opacity-10 font-medium">
                        Father:
                      </td>
                      <td className="text-[#666666] text-base px-3 lg:px-5 py-2 tracking-[-0.04em] border border-black border-opacity-10 font-normal">
                        {item.fatherName} (Phone: {item.fatherPhone},
                        Occupation: {item.fatherOccupation}, Email:{" "}
                        {item?.fatheremail})
                      </td>
                    </tr>
                    <tr>
                      <td className="text-[#666666] text-base px-3 lg:px-5 py-2 tracking-[-0.04em] border border-black border-opacity-10 font-medium">
                        Mother:
                      </td>
                      <td className="text-[#666666] text-base px-3 lg:px-5 py-2 tracking-[-0.04em] border border-black border-opacity-10 font-normal">
                        {item.motherName} (Phone: {item.motherPhone},
                        Occupation: {item.motherOccupation})
                      </td>
                    </tr>
                    <tr>
                      <td className="text-[#666666] text-base px-3 lg:px-5 py-2 tracking-[-0.04em] border border-black border-opacity-10 font-medium">
                        Guardian:
                      </td>
                      <td className="text-[#666666] text-base px-3 lg:px-5 py-2 tracking-[-0.04em] border border-black border-opacity-10 font-normal">
                        {item.guardianName} (Phone: {item.guardianPhone},
                        Occupation: {item.guardianOccupation})
                      </td>
                    </tr>
                  </tbody>
                </table>

                <h3 className="merriweather-font font-normal  text-lg md:text-xl  mb-0 text-[#1E1E1E]  tracking-[-0.04em] mt-6">
                  Admission Details:
                </h3>
                <table className="min-w-full table-auto mt-2">
                  <thead>
                    <tr className="bg-[#36C9B4] text-white">
                      <th
                        width="25%"
                        className="text-white text-left text-sm px-3 lg:px-5 py-2 tracking-[-0.04em] capitalize font-medium"
                      >
                        Detail
                      </th>
                      <th
                        width="75%"
                        className="text-white text-left text-sm px-3 lg:px-5 py-2 tracking-[-0.04em] capitalize font-medium"
                      >
                        Info
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="text-[#666666] text-base px-3 lg:px-5 py-2 tracking-[-0.04em] border border-black border-opacity-10 font-medium">
                        Class:
                      </td>
                      <td className="text-[#666666] text-base px-3 lg:px-5 py-2 tracking-[-0.04em] border border-black border-opacity-10 font-normal">
                        {item.class} (Percentage: {item.class_percentage})
                      </td>
                    </tr>
                    <tr>
                      <td className="text-[#666666] text-base px-3 lg:px-5 py-2 tracking-[-0.04em] border border-black border-opacity-10 font-medium">
                        Facility:
                      </td>
                      <td className="text-[#666666] text-base px-3 lg:px-5 py-2 tracking-[-0.04em] border border-black border-opacity-10 font-normal">
                        {item.facility}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-[#666666] text-base px-3 lg:px-5 py-2 tracking-[-0.04em] border border-black border-opacity-10 font-medium">
                        Optional:
                      </td>
                      <td className="text-[#666666] text-base px-3 lg:px-5 py-2 tracking-[-0.04em] border border-black border-opacity-10 font-normal">
                        {item.optional}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-[#666666] text-base px-3 lg:px-5 py-2 tracking-[-0.04em] border border-black border-opacity-10 font-medium">
                        Scholar:
                      </td>
                      <td className="text-[#666666] text-base px-3 lg:px-5 py-2 tracking-[-0.04em] border border-black border-opacity-10 font-normal">
                        {item.scholar}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-[#666666] text-base px-3 lg:px-5 py-2 tracking-[-0.04em] border border-black border-opacity-10 font-medium">
                        School:
                      </td>
                      <td className="text-[#666666] text-base px-3 lg:px-5 py-2 tracking-[-0.04em] border border-black border-opacity-10 font-normal">
                        {item.school}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-[#666666] text-base px-3 lg:px-5 py-2 tracking-[-0.04em] border border-black border-opacity-10 font-medium">
                        Sibling:
                      </td>
                      <td className="text-[#666666] text-base px-3 lg:px-5 py-2 tracking-[-0.04em] border border-black border-opacity-10 font-normal">
                        {item.sibling}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-[#666666] text-base px-3 lg:px-5 py-2 tracking-[-0.04em] border border-black border-opacity-10 font-medium">
                        Type:
                      </td>
                      <td className="text-[#666666] text-base px-3 lg:px-5 py-2 tracking-[-0.04em] border border-black border-opacity-10 font-normal">
                        {item.type}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <h3 className="merriweather-font font-normal  text-lg md:text-xl  mb-0 text-[#1E1E1E]  tracking-[-0.04em] mt-6">
                  Documents Uploaded:
                </h3>
                {item?.birth || item?.additional ? (
                  <table className="min-w-full table-auto mt-2">
                    <thead>
                      <tr className="bg-[#36C9B4] text-white">
                        <th
                          width="25%"
                          className="text-white text-left text-sm px-3 lg:px-5 py-2 tracking-[-0.04em] capitalize font-medium"
                        >
                          Name
                        </th>
                        <th
                          width="75%"
                          className="text-white text-left text-sm px-3 lg:px-5 py-2 tracking-[-0.04em] capitalize font-medium"
                        >
                          Link
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="text-[#666666] text-base px-3 lg:px-5 py-2 tracking-[-0.04em] border border-black border-opacity-10 font-medium">
                          Birth Cerificate:
                        </td>
                        <td className="text-[#0000FF] text-base px-3 lg:px-5 py-2 tracking-[-0.04em] border border-black border-opacity-10 font-normal">
                          <a href={item?.birth} target="blank">
                            Click here
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-[#666666] text-base px-3 lg:px-5 py-2 tracking-[-0.04em] border border-black border-opacity-10 font-medium">
                          Additional Document:
                        </td>
                        <td className="text-[#0000FF] text-base px-3 lg:px-5 py-2 tracking-[-0.04em] border border-black border-opacity-10 font-normal">
                          <a href={item?.additional} target="blank">
                            Click here
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <p className="text-sm tracking-[-0.04em] text-[#666666]">
                    No Documents were uploaded by the student
                  </p>
                )}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default ViewAdmission;
