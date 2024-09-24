import React, { useEffect } from 'react';
import Details from '@/pages/api/admin/Details';
import Sidebar from '@/Component/Sidebar';

export default function AdminLayout({ children, title, subhead }) {
    // useEffect(() => {
    //     setLoading(true);
    //     const main = new Details();
    //     main
    //       .verify()
    //       .then((r) => {
    //         setTeachers(r?.data?.faculties);
    //       })
    //       .catch((err) => {
    //         setTeachers([]);
    //         console.log("error", err);
    //       });
    //   }, []);
  return (
    <div className='flex  max-h-screen overflow-auto'>
        <div className='bg-[#f0f0f0] w-[400px] p-6 text-gray-500'>
          <Sidebar />
        </div>
        <div className='p-12 content  w-[calc(100%-300px)]   overflow-auto'>
          <div className='pb-10 bborder-b-4'> 
          <h2 className='font-bold text-2xl mb-2 text-black'>{title || 'Hello, Admin'}   </h2>
          <p className='text-gray-300 text-lg'>{subhead || "Login mangement for school website"}</p>
          </div>
          {children}
        </div>

        
    </div>
  );
}

