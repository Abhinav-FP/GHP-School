import React from 'react'
import Modal from '../Component/Modal'

export default function AddSyllabus() {
  return (
    <>
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
                            <label className="capitalize font-medium text-sm lg:text-base tracking-[-0.03em] block text-[#8D929A] mb-1 lg:mb-2">class</label>
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
                            {Loading ? "Processing.." : "Add Syllabus"}

                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Modal>} 
    </>
  
  )
}
