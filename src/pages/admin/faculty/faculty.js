import Details from '@/pages/api/admin/Details';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Modal from '../Component/Modal';
import { BiEdit } from 'react-icons/bi';

export default function Faculty({ getTeachers, item }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: item?.name || '',
    subjects: item?.subjects || '',
    grades: item?.grades || '',
    srNo: item?.srNo || ""
  });
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const main = new Details();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("subjects", formData.subjects);
    data.append("grades", formData.grades);
    data.append("srNo", formData.srNo || "0");
    data.append("_id", item?._id || '');
    const response = item?._id ? (main.editFaculty(data)) : (main.addFaculty(data));
    ("response", response);
    response
      .then((res) => {
        if (res && res?.data && res?.data?.status) {
          toast.success(res.data.message);
          handleClose();
          setLoading(false);
          getTeachers();
        } else {
          toast.error(res.data.message);
          setLoading(false);
        }
        setFormData({
          name: '',
          subjects: '',
          grades: ''
        });
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
        setLoading(false);
      });
  };

  return (
    <>  {item?._id ?
      <div className=" h-[30px] w-[30px] bg-[#46494D]    text-white button-animation bg-opacity-10 hover:bg-opacity-30 rounded inline-flex items-center justify-center">
        <BiEdit size={18} />
      </div>
      :
      <button onClick={() => setIsOpen(true)} className="button-animation rounded text-white font-normal tracking-[-0.04em] text-sm font-normal py-2 px-3 xl:px-3.5  outline-none focus:outline-none ease-linear transition-all duration-150">
        Add New Faculty
      </button>
    }
      {isOpen &&
        <Modal isOpen={isOpen} onClose={handleClose}>
          <div className="relative bg-white w-full rounded-[30px] lg:rounded-[40px] h-auto m-auto">
            <div className="border-b border-black border-opacity-10 pt-6 pb-5 px-6 lg:pt-8 lg:pb-6 lg:px-10">
              <h2 className="text-xl lg:text-2xl  text-[#212121] tracking-[-0.04em] font-semibold mb-0">
                {
                  item?._id ? 'Edit Faculty' : 'Add New Faculty'
                }
              </h2>
            </div>
            <div className="py-6 lg:py-8 ">
              <form onSubmit={handleSubmit}>
                <div className=' max-h-full overflow-y-auto customscroll px-6 lg:px-10 '>
                  <div className="mb-3 lg:mb-[25px]">
                    <label className="font-medium text-sm lg:text-base tracking-[-0.03em] block text-[#8D929A] mb-1 lg:mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full h-11 lg:h-[54px]  appearance-none block bg-white text-[#46494D] text-base border border-gray-300 rounded-lg py-3 px-3 lg:px-5 leading-tight focus:outline-none"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-3 lg:mb-[25px]">
                    <label className="font-medium text-sm lg:text-base tracking-[-0.03em] block text-[#8D929A] mb-1 lg:mb-2">
                      Subjects
                    </label>
                    <input
                      type="text"
                      name="subjects"
                      value={formData.subjects}
                      onChange={handleChange}
                      className="w-full h-11 lg:h-[54px]  appearance-none block bg-white text-[#46494D] text-base border border-gray-300 rounded-lg py-3 px-3 lg:px-5 leading-tight focus:outline-none"
                      placeholder="Enter subjects"
                    />
                  </div>
                  <div className="mb-3 lg:mb-[25px]">
                    <label className="font-medium text-sm lg:text-base tracking-[-0.03em] block text-[#8D929A] mb-1 lg:mb-2">
                      Grades
                    </label>
                    <input
                      type="text"
                      name="grades"
                      value={formData.grades}
                      onChange={handleChange}
                      className="w-full h-11 lg:h-[54px]  appearance-none block bg-white text-[#46494D] text-base border border-gray-300 rounded-lg py-3 px-3 lg:px-5 leading-tight focus:outline-none"
                      placeholder="Enter grades"
                    />
                  </div>


                  <div className="flex justify-start">
                    <button
                      type="submit"
                      className="button-animation rounded text-white font-normal tracking-[-0.04em] text-sm font-normal py-2 px-4 outline-none focus:outline-none ease-linear transition-all duration-150"
                    >
                      {loading ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Modal>}
    </>



  );
}