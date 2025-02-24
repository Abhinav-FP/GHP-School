import Details from '@/pages/api/admin/Details';
import Modal from '../Component/Modal'
import React, { useState, useEffect } from "react";
import toast from 'react-hot-toast';
import { BiEdit } from 'react-icons/bi';

export default function AddNotification({ item, getNotificationdata }) {
    console.log("item" ,item)
    const [isOpen, setIsOpen] = useState(false);
    const [formdata, setFormdata] = useState({
        "text": item?.text || "",
        "link": item?.link || "",
        "_id": item?._id || "",
        "content": item?.content || ""
    });
    const [Loading, setLoading] = useState(false)
    const handleClose = () => {
        setIsOpen(false);
    };
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
            const res =
                item?._id ? await main.NotificationEdit(formdata) : await main.NotificationAdd(formdata);
            if (res?.data) {
                toast.success(res.data.message);
                handleClose();
                getNotificationdata();
                setFormdata({
                    "text": "",
                    "link": "",
                    "_id": "",
                    "content": ""
                })
            } else {
                toast.error(res.message);
            }
        } catch (error) {
            toast.error("An error occurred while updating.");
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            {item?._id ?
                <div  onClick={() => setIsOpen(true)} className=" h-[30px] w-[30px] bg-[#46494D]   cursor-pointer  text-white button-animation bg-opacity-10 hover:bg-opacity-30 rounded inline-flex items-center justify-center">
                    <BiEdit size={18} />
                </div>
                :
                <button onClick={() => setIsOpen(true)} className="button-animation rounded text-white font-normal tracking-[-0.04em] text-sm font-normal py-2 px-3 xl:px-3.5  outline-none focus:outline-none ease-linear transition-all duration-150">
                    Add Notification
                </button>
            }
            {isOpen &&
                <Modal isOpen={isOpen} onClose={handleClose}>
                    <div className="relative bg-white w-full rounded-[30px] lg:rounded-[40px] h-auto m-auto">
                        <div className="border-b border-black border-opacity-10 pt-6 pb-5 px-6 lg:pt-8 lg:pb-6 lg:px-10">
                            <h2 className="text-xl lg:text-2xl  text-[#212121] tracking-[-0.04em] font-semibold mb-0">Notification   </h2>
                        </div>
                        <div className="py-6 lg:py-8 ">
                            <form>
                                <div className=' max-h-full overflow-y-auto customscroll px-6 lg:px-10 '>



                                    <div className="mb-3 lg:mb-[25px]">
                                        <label className="capitalize font-medium text-sm lg:text-base tracking-[-0.03em] block text-[#8D929A] mb-1 lg:mb-2">title</label>
                                        <input
                                            name="text"
                                            value={formdata?.text}
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full h-11 lg:h-[54px] font-semibold appearance-none block bg-white text-[#46494D] text-base border border-gray-300 rounded-lg py-3 px-3 lg:px-5 leading-tight focus:outline-none"

                                        />
                                        {/* <p message={errors?.name} className="!text-red-600" /> */}


                                    </div>
                                    <div className="mb-3 lg:mb-[25px]">
                                        <label className="capitalize font-medium text-sm lg:text-base tracking-[-0.03em] block text-[#8D929A] mb-1 lg:mb-2">Content</label>
                                        <textarea
                                            name="content"
                                            value={formdata?.content}
                                            onChange={handleChange}
                                            type="text"
                                            rows="5"
                                            className="w-full font-semibold appearance-none block bg-white text-[#46494D] text-base border border-gray-300 rounded-lg py-3 px-3 lg:px-5 leading-tight focus:outline-none"
                                        >
                                        </textarea>
                                        {/* <p message={errors?.name} className="!text-red-600" /> */}
                                    </div>
                                    <div className="mb-3 lg:mb-[25px]">
                                        <label className="capitalize font-medium text-sm lg:text-base tracking-[-0.03em] block text-[#8D929A] mb-1 lg:mb-2">link</label>
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
                                        className="capitalize w-full text-white button-animation hover:button-animation hover:bg-white text-[17px] font-medium tracking-[-0.04em] h-11 lg:h-[54px] py-2.5 px-12 border border-button-animation rounded-full outline-none focus:outline-none ease-linear transition-all duration-150">
                                        {Loading ? "Processing.." : " Notification"}

                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Modal>}
        </>

    )
}