import React from 'react'

export default function AgeCriteria() {
  const ageData=[
    {
      Grade:"Nursery",
      Age:"3+ years",
    },
    {
      Grade:"LKG",
      Age:"3+ years",
    },
    {
      Grade:"UKG",
      Age:"3+ years",
    },
    {
      Grade:"Class 1",
      Age:"3+ years",
    },
    {
      Grade:"Class 2 to 10",
      Age:"Corresponding age increase of one year per class",
    },
    {
      Grade:"For admission in Class 10",
      Age:" The student should generally be at least 14 to 15 years old.",
    },
  ];
  return (
<div className="container mt-10">
        <h2>Age Criteria</h2>
        <p>The minimum age criteria for admission as per the Rajasthan Board (RBSE) typically are as follows:</p>
        <table className="border border-gray-200">
        <thead>
          <tr className="bg-[#36C9B4] text-white">
            <th className="py-2 px-4 border border-gray-200 text-left">Grade</th>
            <th className="py-2 px-4 border border-gray-200 text-left">Minimum Age</th>
          </tr>
        </thead>
        <tbody>
          {ageData && ageData?.map((item,index)=>(
            <tr key={index}>
            <td className="py-2 px-4 border border-gray-200">{item?.Grade}</td>
            <td className="py-2 px-4 border border-gray-200">{item?.Age}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
