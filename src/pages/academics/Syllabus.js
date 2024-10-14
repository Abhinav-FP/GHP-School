import React, { useEffect, useState } from "react";
import Details from '../api/admin/Details';

export default function Index() {
    const [listing, setLisitng] = useState("");
    const [Loading, setLoading] = useState(false);

    const syllabus = () => {
      setLoading(true);
      const main = new Details();
      main
        .syllabusGet()
        .then((r) => {
          setLoading(false);
          setLisitng(r?.data?.syllabus);
        })
        .catch((err) => {
          setLoading(false);
          setLisitng([]);
          console.log("error", err);
        });
    };
  
    useEffect(() => {
        syllabus();
    }, []);
    // const gradeItems = [
    //     {
    //         ClassGrade: 'RBSC Syllabus for VII Grade ',
    //         link: 'PDFlink1' 
    //     },   
    //     {
    //         ClassGrade: 'RBSC Syllabus for VIII Grade',
    //         link: 'PDFlink2' 
    //     },   
    //     {
    //         ClassGrade: 'RBSC Syllabus for IX Grade',
    //         link: 'PDFlink3' 
    //     },   
    //     {
    //         ClassGrade: 'RBSC Syllabus for X Grade',
    //         link: 'PDFlink4' 
    //     },  
    //     {
    //         ClassGrade: 'RBSC Syllabus for XI ARTS Grade',
    //         link: 'PDFlink4' 
    //     },  
    //     {
    //         ClassGrade: 'RBSC Syllabus for XI COM Grade',
    //         link: 'PDFlink4' 
    //     },      
    // ];
   
    return (
        <>
            <div className='pb-[40px] md:pb-[80px] lg:pb-[100px]  bg-white'>
                <div className="container sm:container md:container lg:max-w-[1204px] px-4 mx-auto " id="syllabus">
                    <h2 className='merriweather-font font-normal  text-2xl md:text-3xl lg:text-4xl mb-6 lg:mb-[36px] text-[#1E1E1E]  tracking-[-0.04em] text-center'>Syllabus</h2>

                    <table className='w-full '>
                        <thead>
                            <tr className='bg-[#36C9B4]'>
                                <td width={81} className='text-white text-sm px-3.5 py-5 tracking-[-0.04em] uppercase'>Sr. No.</td>
                                <td className='text-white text-sm px-3.5 lg:px-[30px] py-5 tracking-[-0.04em] uppercase'>Grade</td>
                                <td className='text-white text-sm px-3.5 lg:px-[30px] py-5 tracking-[-0.04em] uppercase'>Download</td>
                            </tr>
                        </thead>
                        <tbody>
                             {listing && listing?.map((item, index) => (
                                <tr key={index}>
                                    <td className='text-[#666666] text-base px-3.5 py-5 tracking-[-0.04em] border border-black border-opacity-10'>
                                        {index + 1}
                                    </td>
                                    <td className='text-[#666666] uppercase text-base px-3.5 lg:px-[30px] py-5 tracking-[-0.04em] border border-black border-opacity-10'>
                                        {item?.text}
                                    </td>
                                    <td className='text-[#666666] text-base px-3.5 lg:px-[30px] py-5 tracking-[-0.04em] border border-black border-opacity-10'> 
                                        <button 
                                        onClick={() =>
                                            (window.location.href = `${item?.link}`)
                                          }
                                        className='text-[#EE834E] hover:text-[#ECCD6E] underline'>
                                        Download PDF
                                        </button> 
                                    </td>

                                </tr>
                             ))}
                        </tbody>
                    </table>
                 
                </div>
            </div>
        </>
    )
}





