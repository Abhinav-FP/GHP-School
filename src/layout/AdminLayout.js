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
        localStorage && localStorage.removeItem("token");
        router.push("/admin/login");
        toast.error("Please log in first.");
      });
  }


  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    fetchData(signal);
    return () => controller.abort();
  }, []);
  return (
    <>
        {children}

    </>
     
  );
}

