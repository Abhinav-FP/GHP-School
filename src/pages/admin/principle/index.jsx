import Details from "@/pages/api/admin/Details";
import Header from "../Component/Header";
import LoadingData from "../Component/Loading";
import SideBarAdmin from "../Component/SideBar";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Modal from "../Component/Modal";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import NoData from "../Component/Nodata";


function Index() {
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => {
        setIsOpen(false);
    };
    const handleOpen = () => {
        setIsOpen(true);
    };

    const handlesenddata = (item) => {
        setIsOpen(true);  // Open the modal
        setFormdata({     // Prepopulate form with the item's data
            name: item.name || '',
            text: item.text || '',
            photo: item.photo || '',
            type: "principle"
        });
        setImagePreview(item.photo); // Set the image preview
    };

    const [imagePreview, setImagePreview] = useState(null);

    const router = useRouter();

    const [listing, setLisitng] = useState([])
    const [Loading, setLoading] = useState(false)
    const principledata = () => {
        setLoading(true);
        const main = new Details();
        main
            .getprinciple()
            .then((r) => {
                setLoading(false);
                setLisitng(r?.data?.principal);
            })
            .catch((err) => {
                setLoading(false);
                setLisitng([]);
                console.log("error", err);
            });
    };

    useEffect(() => {
        principledata();
    }, []);

    const [formdata, setFormdata] = useState({
        name: '',
        text: '',
        photo: '',
        type: "principle"

    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({
            ...formdata,
            [name]: value
        });
    };
    const [principleImage, setprinciple] = useState("")
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
        setFormdata({
            ...formdata,
            photo: file,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const main = new Details();
        const data = new FormData();
        data.append("name", formdata.name);
        data.append("text", formdata.text);
        data.append("photo", formdata.photo);
        let response = main.addprinciple(data);
        response
            .then((res) => {
                if (res?.data?.status) {
                    toast.success(res.data.message);
                    handleClose();
                    principledata();
                } else {
                    toast.error(res.data.message);
                }
                setLoading(false);
            })
            .catch((error) => {
                toast.error(error?.response?.data?.message);
                setLoading(false);
            });
    };


    return (<>
        <div className="md:flex flex-wrap  bg-[#F5F6FB] items-start">
            <SideBarAdmin />
            {/* right sidebar  */}
            <div className="w-full lg:w-[calc(100%-304px)]">
                <Header title={"Manage Principle"} />
                {/* Overview */}
                <div className="px-4 py-2 lg:px-10 lg:py-2.5">
                    {/*  */}
                    <div className="bg-white rounded-[20px] mb-[30px]">
                        <div className="py-3 py-4 lg:py-[23px] px-4 md:px-6 lg:px-10 flex flex-wrap justify-between items-center border-b border-black  border-opacity-10">
                            <h3 className=" text-base lg:text-lg font-semibold text-[#1E1E1E] mb-3 sm:mb-0 tracking-[-0.03em]">Principle  </h3>
                        </div>
                        <div className="overflow-x-auto">
                            {Loading ? (
                                <LoadingData />
                            ) : (
                                (listing?.length < 0 ? (
                                    <NoData />
                                ) : (
                                    <table className="min-w-full">
                                        <thead>
                                            <tr>
                                                <th className="pl-4 md:pl-6 lg:pl-10  pr-3 py-3 lg:py-3.5 text-sm font-medium text-[#8D929A]  text-left uppercase tracking-[-0.03em]">S. No.  </th>
                                                <th className="pl-4 md:pl-6 lg:pl-10  pr-3 py-3 lg:py-3.5 text-sm font-medium text-[#8D929A]  text-left uppercase tracking-[-0.03em]">Image  </th>

                                                <th className="pl-4 md:pl-6 lg:pl-10  pr-3 py-3 lg:py-3.5 text-sm font-medium text-[#8D929A]  text-left uppercase tracking-[-0.03em]">Name  </th>
                                                <th className="px-3 py-3 lg:py-3.5 text-sm font-medium text-[#8D929A]  text-left uppercase tracking-[-0.03em]">Description</th>
                                                <th className="pr-4 md:pr-6 lg:pr-10 pl-3 py-3 lg:py-3.5 text-sm font-medium text-[#8D929A]  text-left uppercase tracking-[-0.03em]  text-center">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="bg-white border-t transition duration-300 ease-in-out hover:bg-gray-100">
                                                <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[15px] font-medium text-[#46494D] tracking-[-0.03em]">
                                                    {listing?.srNo}
                                                </td>
                                                <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[15px] font-medium text-[#46494D] tracking-[-0.03em]">
                                                    <Image width={200} height={200} src={listing?.photo} alt={listing?.name} />
                                                </td>
                                                <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[15px] font-medium text-[#46494D] tracking-[-0.03em]">
                                                    {listing?.name}
                                                </td>
                                                <td className="px-3 py-4 text-[15px] font-medium text-[#46494D] tracking-[-0.03em]">
                                                    {listing?.text}
                                                </td>
                                                <td className="px-3 py-4 text-[15px] font-medium text-[#46494D] text-center tracking-[-0.03em] space-x-2">
                                                    <div className="flex space-x-2 justify-center">
                                                        <button
                                                            onClick={() => handlesenddata(listing)}
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
                                ))
                            )}
                        </div>
                    </div>



                </div>
            </div>
        </div>
        {isOpen &&
            <Modal isOpen={isOpen} onClose={handleClose}>
                <style>
                    {`
                                    /* Corrected CSS for modal width */
                                    #modal .sm\\:max-w-2xl {
                                    margin: auto;
                                    box-shadow:none;
                                    max-width: 561px !important; /* Ensure !important is spelled correctly */
                                    }
                                `}
                </style>
                <div className="relative bg-white w-full rounded-[30px] lg:rounded-[40px] h-auto m-auto">
                    <button
                        type="button"
                        onClick={handleClose}
                        className="absolute top-5 md:top-6 lg:top-9 right-6 lg:right-10 text-gray-700 hover:text-gray-900">
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
                        <h2 className="text-xl lg:text-2xl  text-[#212121] tracking-[-0.04em] font-semibold mb-0">Edit  Principle </h2>
                    </div>
                    <div className="py-6 lg:py-8 ">
                        <form>
                            <div className=' max-h-full overflow-y-auto customscroll px-6 lg:px-10 '>
                                <div className="mb-3 lg:mb-[25px]">
                                    <label className="font-medium text-sm lg:text-base tracking-[-0.03em] block text-[#8D929A] mb-1 lg:mb-2">Upload Image</label>
                                    <input
                                        type="file"
                                        name="photo"
                                        onChange={(e) => handleImageChange(e)}
                                        className="w-full h-11 lg:h-[54px] font-semibold appearance-none block bg-white text-[#46494D] text-base border border-gray-300 rounded-lg py-3 px-3 lg:px-5 leading-tight focus:outline-none"
                                    />
                                </div>
                                <div className="mb-3 lg:mb-[25px]">
                                    <label className="font-medium text-sm lg:text-base tracking-[-0.03em] block text-[#8D929A] mb-1 lg:mb-2">Upload Image</label>
                                    <img
                                        src={imagePreview ? imagePreview : formdata?.photo}
                                        alt={formdata?.name}
                                    />
                                </div>

                                <div className="mb-3 lg:mb-[25px]">
                                    <label className="font-medium text-sm lg:text-base tracking-[-0.03em] block text-[#8D929A] mb-1 lg:mb-2">name</label>
                                    <input
                                        name="name"
                                        value={formdata?.name}
                                        onChange={handleChange}
                                        type="text"
                                        className="w-full h-11 lg:h-[54px] font-semibold appearance-none block bg-white text-[#46494D] text-base border border-gray-300 rounded-lg py-3 px-3 lg:px-5 leading-tight focus:outline-none"

                                    />
                                    {/* <p message={errors?.name} className="!text-red-600" /> */}


                                </div>

                                <div className="mb-3 lg:mb-[25px]">
                                    <label className="font-medium text-sm lg:text-base tracking-[-0.03em] block text-[#8D929A] mb-1 lg:mb-2">Desciption</label>
                                    <textarea
                                        name="text"
                                        value={formdata?.text}
                                        onChange={handleChange}
                                        rows={5}
                                        cols={5}
                                        className="w-full font-semibold appearance-none block bg-white text-[#46494D] text-base border border-gray-300 rounded-lg py-3 px-3 lg:px-5 leading-tight focus:outline-none"
                                    >
                                    </textarea>
                                    {/* <p message={errors?.name} className="!text-red-600" /> */}


                                </div>
                            </div>
                            {/* Submit Button */}
                            <div className="flex justify-end pt-3 px-6 lg:px-10 ">
                                <button type="submit"
                                    onClick={handleSubmit}
                                    className="w-full text-white bg-[#0367F7] hover:text-[#0367F7] hover:bg-white text-[17px] font-medium tracking-[-0.04em] h-11 lg:h-[54px] py-2.5 px-12 border border-[#0367F7] rounded-full outline-none focus:outline-none ease-linear transition-all duration-150">
                                    {Loading ? "Processing.." : "Edit Principle"}

                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>}
    </>);
}

export default Index;