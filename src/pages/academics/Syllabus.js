import React from 'react';

export default function index() {
  
    const gradeItems = [
        {
            ClassGrade: 'RBSC Syllabus for VII Grade ',
            link: 'PDFlink1' 
        },   
        {
            ClassGrade: 'RBSC Syllabus for VIII Grade',
            link: 'PDFlink2' 
        },   
        {
            ClassGrade: 'RBSC Syllabus for IX Grade',
            link: 'PDFlink3' 
        },   
        {
            ClassGrade: 'RBSC Syllabus for X Grade',
            link: 'PDFlink4' 
        },  
        {
            ClassGrade: 'RBSC Syllabus for XI ARTS Grade',
            link: 'PDFlink4' 
        },  
        {
            ClassGrade: 'RBSC Syllabus for XI COM Grade',
            link: 'PDFlink4' 
        },      
    ];

   
    return (
        <>
            <div className='pb-[100px]'>
                <div className="container sm:container md:container lg:max-w-[1232px] px-4 mx-auto ">
                    <h2 className='merriweather-font font-normal  text-2xl md:text-3xl lg:text-4xl mb-2 text-[#1E1E1E]  tracking-[-0.04em] text-center'>Syllabus</h2>

                    <table className='w-full '>
                        <thead>
                            <tr>
                                <td>Sr. No.</td>
                                <td>Grade</td>
                                <td>Download</td>
                            </tr>
                        </thead>
                        <tbody>
                             {gradeItems.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        {item.ClassGrade}
                                    </td>
                                    <td>
                                        {item.link}
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





