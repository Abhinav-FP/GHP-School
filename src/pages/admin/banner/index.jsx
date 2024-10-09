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
function Index() {
    const [isOpen, setIsOpen] = useState(false);
    const [listing, setLisitng] = useState([])
    const [Loading, setLoading] = useState(false)
    const [imagePreview, setImagePreview] = useState(null);
    const [formdata, setFormdata] = useState({
        "item": "",
        "image": null,
        "Paragraph": null,
        "third": null,
        "fourth": null,
        "total": null,
    });



    const handleClose = () => {
        setIsOpen(false);
    };



    const handlesenddata = (item) => {
        setIsOpen(true);
        setFormdata({
            text: item.text || '',
            id: item?._id,
            show: item?.show
        });
    };

    const BannerGetData = () => {
        setLoading(true);
        const main = new Details();
        main.BannerGet()
            .then((r) => {
                console.log("r", r)
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
        BannerGetData();
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
            const res = await main.admissionPost(formdata);
            if (res?.data) {
                toast.success(res.data.message);
                handleClose();
                getfeesdata();
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
        <div className="md:flex flex-wrap  bg-[#F5F6FB] items-start">
            <SideBarAdmin />
            {/* right sidebar  */}
            <div className="w-full lg:ml-[304px] lg:w-[calc(100%-304px)]">
                <Header title={"Manage  Banner"} />
                {/* Overview */}
                <div className="px-4 py-2 lg:px-10 lg:py-2.5">
                    {/*  */}
                    <div className="bg-white rounded-[20px] mb-[30px]">
                        <div className="py-3 py-4 lg:py-[23px] px-4 md:px-6 lg:px-10 flex flex-wrap justify-between items-center border-b border-black  border-opacity-10">
                            <h3 className=" text-base lg:text-lg font-semibold text-[#1E1E1E] mb-3 sm:mb-0 tracking-[-0.03em]">Banner  </h3>
                            <button onClick={() => setIsOpen(true)} className="button-animation rounded text-white font-normal tracking-[-0.04em] text-sm font-normal py-2 px-3 xl:px-3.5  outline-none focus:outline-none ease-linear transition-all duration-150">
                                Add New Banner
                            </button>  
                        </div>
                        <div className="w-full p-6">
                            {Loading ? (
                                <LoadingData />
                            ) : (
                                listing?.length < 0 ? (
                                    // <Nodata />
                                    <NoData />
                                ) : (
                                          <div className="flex flex-wrap -mx-2.5 ">
                                            {listing?.map((item, index) => (
                                                <div key={item.id} className="flex flex-col justify-start w-full sm:w-6/12 lg:w-6/12 xl:w-3/12 px-2.5 mb-3 lg:mb-0">                                                    
                                                    <div className="w-full bg-[#f9f9f9] mb-4 relative">
                                                        <img
                                                            src={item?.photo}
                                                            alt={item?.heading}
                                                            className="mx-auto rounded block w-full object-cover h-[207px]"
                                                        />
                                                         <div className="absolute top-0 right-0">
                                                            <Delete className="!rounded-full" srNo={item?.srNo} BannerGetData={BannerGetData} />
                                                        </div>
                                                    </div>
                                                   
                                                    <h3 className="lg:min-h-[64px] merriweather-font font-normal tracking-[-0.04em] text-xl lg:text-[24px] text-[#1E1E1E] mb-2 lg:mb-2.5">
                                                        {item?.heading
                                                        }
                                                    </h3>
                                                    <p className="text-[#666666] font-medium text-base gotham-font mb-1.5 tracking-[-0.04em] mb-5 md:mb-6 lg:mb-[30px]  min-h-[107px]">
                                                        {item?.text}
                                                    </p>
                                                  
                                                </div>
                                            ))} 
                                         </div>
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
                                        type="file"
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