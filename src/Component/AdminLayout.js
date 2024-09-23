import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import Details from '@/pages/api/admin/Details';

export default function AdminLayout({ children }) {
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
    <div>
        {/* <Sidebar /> */}
        {children}
    </div>
  );
}

