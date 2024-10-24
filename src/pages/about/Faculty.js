import React, { useEffect, useState } from "react";
import Details from "../api/admin/Details";
import Loader from "@/Component/Loader";

export default function Faculty() {
  const [Teachers, setTeachers] = useState([])
  const [Loading, setLoading] = useState(false);
  const [count,setCount]=useState(0);
  const getFacilities = () => {
    setLoading(true);
    const main = new Details();
    main
      .getFaculty()
      .then((r) => {
        setLoading(false);
        setTeachers(r?.data?.faculties);
      })
      .catch((err) => {
        setLoading(false);
        setTeachers([]);
        console.log("error", err);
        setCount(count+1);
        if(count<=2)
          {
            getFacilities();
          }
      });
  };

  useEffect(() => {
    getFacilities();
  }, []);
  return (
    <div className="bg-white pt-[40px] md:pt-[80px] lg:pt-[100px]" id="faculty">
      <div className="container sm:container md:container lg:max-w-[1204px] px-4 mx-auto">
        <h2 className='merriweather-font font-normal  text-2xl md:text-3xl lg:text-4xl mb-3 lg:mb-4 text-[#1E1E1E]  tracking-[-0.04em] text-center'>Faculty</h2>
        {Loading ? (
          <Loader/>
        ) : (
        <div className='overflow-x-auto'>
          <table className="border border-gray-200 w-full">
            <thead>
              <tr className="bg-[#36C9B4] text-white">
                <th width="15%" className="text-white text-left text-sm px-3.5 lg:px-[40px] py-5 tracking-[-0.04em] capitalize font-medium">Sr. No.</th>
                <th width="25%" className="text-white text-left text-sm px-3.5 lg:px-[40px] py-5 tracking-[-0.04em] uppercase font-medium">Name of the teacher</th>
                <th width="35%" className="text-white text-left text-sm px-3.5 lg:px-[40px] py-5 tracking-[-0.04em] uppercase font-medium">Subject</th>
                <th width="25%" className="text-white text-left text-sm px-3.5 lg:px-[40px] py-5 tracking-[-0.04em] uppercase font-medium">Grade/Class</th>
              </tr>
            </thead>
            <tbody>
              {Teachers && Teachers?.map((item, index) => (
                <tr key={index}>
                  <td className="text-[#666666] text-base px-3.5 lg:px-[40px] py-5 tracking-[-0.04em] border border-black border-opacity-10">{index + 1}</td>
                  <td className="text-[#666666] text-base px-3.5 lg:px-[40px] py-5 tracking-[-0.04em] border border-black border-opacity-10">{item?.name}</td>
                  <td className="text-[#666666] text-base px-3.5 lg:px-[40px] py-5 tracking-[-0.04em] border border-black border-opacity-10">{item?.subjects}</td>
                  <td className="text-[#666666] text-base px-3.5 lg:px-[40px] py-5 tracking-[-0.04em] border border-black border-opacity-10">{item?.grades}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        )}
      </div>
    </div>
  )
}
