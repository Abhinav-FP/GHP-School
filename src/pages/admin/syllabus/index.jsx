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
import Link from "next/link";
function Index() {
    const [isOpen, setIsOpen] = useState(false);
    const [listing, setLisitng] = useState([])
    const [Loading, setLoading] = useState(false)
    const [formdata, setFormdata] = useState({
        "text": "",
        "link": "",
    });

    const handleClose = () => {
        setIsOpen(false);
    };

    const getsyllabusdata = () => {
        setLoading(true);
        const main = new Details();
        main.Sysllabas()
            .then((r) => {
                console.log(r)
                setLoading(false);
                setLisitng(r?.data?.syllabus
                );
            })
            .catch((err) => {
                setLoading(false);
                setLisitng([]);
                console.log("error", err);
            });
    };

    useEffect(() => {
        getsyllabusdata();
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
            const res = await main.SysllabasAdd(formdata);
            if (res?.data) {
                toast.success(res.data.message);
                handleClose();
                getsyllabusdata();
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
                <Header title={"Manage Syllabus"} />
                {/* Overview */}
                <div className="px-4 py-2 lg:px-10 lg:py-2.5">
                    {/*  */}
                    <div className="bg-white rounded-[20px] mb-[30px]">
                        <div className="py-3 py-4 lg:py-[23px] px-4 md:px-6 lg:px-10 flex flex-wrap justify-between items-center border-b border-black  border-opacity-10">
                            <h3 className=" text-base lg:text-lg font-semibold text-[#1E1E1E] mb-3 sm:mb-0 tracking-[-0.03em]">Syllabus  </h3>
                             <button onClick={() => setIsOpen(true)}   className="button-animation rounded text-white font-normal tracking-[-0.04em] text-sm font-normal py-2 px-3 xl:px-3.5  outline-none focus:outline-none ease-linear transition-all duration-150">
                                Add New Syllabus
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
                                                    Syllabus
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
                                                        {item?.text
                                                        }
                                                    </td>
                                                    <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[15px] font-medium text-[#46494D] tracking-[-0.03em]">
                                                        <Link
                                                            href={item?.link}
                                                            target="_blank"
                                                            className="button-animation rounded text-white font-normal tracking-[-0.04em] text-sm font-normal py-2 px-3 xl:px-3.5  outline-none focus:outline-none ease-linear transition-all duration-150">
                                                            Syllabus
                                                        </Link>
                                                    </td>


                                                    <td className="px-3 py-4 text-[15px] font-medium text-[#46494D] text-center tracking-[-0.03em] space-x-2">
                                                        <div className="flex space-x-2 justify-center">
                                                            <Delete id={item?._id} getsyllabusdata={getsyllabusdata} />
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
                        <h2 className="text-xl lg:text-2xl  text-[#212121] tracking-[-0.04em] font-semibold mb-0">Syllabus   </h2>
                    </div>
                    <div className="py-6 lg:py-8 ">
                        <form>
                            <div className=' max-h-full overflow-y-auto customscroll px-6 lg:px-10 '>



                                <div className="mb-3 lg:mb-[25px]">
                                    <label className="font-medium text-sm lg:text-base tracking-[-0.03em] block text-[#8D929A] mb-1 lg:mb-2">class</label>
                                    <select
                                        className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
                                        name="text"
                                        value={formdata?.text}
                                        onChange={handleChange}
                                        id="text"
                                        required
                                    >
                                        <option value="" disabled>
                                            Select Class
                                        </option>
                                        <option value="LKG">LKG</option>
                                        <option value="UKG">UKG</option>
                                        <option value="class I">I</option>
                                        <option value="class II">II</option>
                                        <option value="class III">III</option>
                                        <option value="class IV">IV</option>
                                        <option value="class V">V</option>
                                        <option value="class VI">VI</option>
                                        <option value="class VII">VII</option>
                                        <option value="class VIII">VIII</option>
                                        <option value="class IX">IX</option>
                                        <option value="class X">X</option>
                                        <option value="class XI arts">XI Arts</option>
                                        <option value="class XI commerce">XI Commerce</option>
                                        <option value="class XI science">XI Science</option>
                                        <option value="class XII arts">XII Arts</option>
                                        <option value="class XII commerce">XII Commerce</option>
                                        <option value="class XII science">XII Science</option>
                                    </select>
                                    {/* <p message={errors?.name} className="!text-red-600" /> */}


                                </div>
                                <div className="mb-3 lg:mb-[25px]">
                                    <label className="font-medium text-sm lg:text-base tracking-[-0.03em] block text-[#8D929A] mb-1 lg:mb-2">link</label>
                                    <input
                                        name="link"
                                        value={formdata?.link}
                                        onChange={handleChange}
                                        type="text"
                                        className="w-full h-11 lg:h-[54px] font-semibold appearance-none block bg-white text-[#46494D] text-base border border-gray-300 rounded-lg py-3 px-3 lg:px-5 leading-tight focus:outline-none"

                                    />
                                    {/* <p message={errors?.name} className="!text-red-600" /> */}
                                </div>

                            </div>
                            {/* Submit Button */}
                            <div className="flex justify-end pt-3 px-6 lg:px-10 ">
                                <button type="submit"
                                    onClick={handleSubmit}
                                    className="w-full text-white button-animation hover:button-animation hover:bg-white text-[17px] font-medium tracking-[-0.04em] h-11 lg:h-[54px] py-2.5 px-12 border border-button-animation rounded-full outline-none focus:outline-none ease-linear transition-all duration-150">
                                    {Loading ? "Processing.." : "syllabus"}

                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>}
    </>);
}

export default Index;