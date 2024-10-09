import React, { useEffect, useState } from 'react';
import Details from '@/pages/api/admin/Details';
import Sidebar from '@/Component/Sidebar';
import SideBarAdmin from '@/pages/admin/Component/SideBar';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';

export default function AdminLayout({ children, title, subhead }) {
  const [Loading, setLoading] = useState(false)
  const router = useRouter();
  const [content, setContent] = useState([]);
  const fetchData = () => {
    const main = new Details();
    const response = main.verify();
    response
      .then((res) => {
        if (res.data) {
          setContent(res.data.data);
        } else {
        }
      }).catch((error) => {
        console.log("error", error);
        localStorage && localStorage.removeItem("token");
        router.push("/admin/login");
        toast.error("Please log in first.");
      });
  }

  useEffect(() => {
    fetchData()
  }, []);


  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    fetchData(signal);
    return () => controller.abort();
  }, []);
  return (
    <div className='flex  max-h-screen overflow-auto'>
      <div className='bg-[#f0f0f0]   text-gray-500 w-full' >
        <SideBarAdmin />
      
      <div className='p-12 content lg:ml-[300px] lg:w-[calc(100%-300px)]   overflow-auto'>
        <div className='pb-10 bborder-b-4'>
          <h2 className='font-bold text-2xl mb-2 text-black'>{title || 'Hello, Admin'}</h2>
          <p className='text-gray-300 text-lg'>{subhead || "Login mangement for school website"}</p>
        </div>
        {children}
      </div>
      </div>


    </div>
  );
}

