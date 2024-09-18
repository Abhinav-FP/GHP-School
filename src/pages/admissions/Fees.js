import React from 'react'

export default function Fees() {
    const feesData=[
        {
            "Sr No": 1,
            "Class": "Nursery",
            "I": 3000,
            "II": 3000,
            "III": 3000,
            "IV": 3000,
            "total": 12000
        },
        {
            "Sr No": 2,
            "Class": "L.K.G.",
            "I": 3150,
            "II": 3150,
            "III": 3150,
            "IV": 3150,
            "total": 12600
        },
        {
            "Sr No": 3,
            "Class": "U.K.G.",
            "I": 3300,
            "II": 3300,
            "III": 3300,
            "IV": 3300,
            "total": 13200
        },
        {
            "Sr No": 4,
            "Class": "Class I",
            "I": 4250,
            "II": 4250,
            "III": 4250,
            "IV": 4250,
            "total": 17000
        },
        {
            "Sr No": 5,
            "Class": "Class II",
            "I": 4400,
            "II": 4400,
            "III": 4400,
            "IV": 4400,
            "total": 17600
        },
        {
            "Sr No": 6,
            "Class": "Class III",
            "I": 4500,
            "II": 4500,
            "III": 4500,
            "IV": 4500,
            "total": 18000
        },
        {
            "Sr No": 7,
            "Class": "Class IV",
            "I": 4950,
            "II": 4950,
            "III": 4950,
            "IV": 4950,
            "total": 19800
        },
        {
            "Sr No": 8,
            "Class": "Class V",
            "I": 5150,
            "II": 5150,
            "III": 5150,
            "IV": 5150,
            "total": 20600
        },
        {
            "Sr No": 9,
            "Class": "Class VI",
            "I": 5300,
            "II": 5300,
            "III": 5300,
            "IV": 5300,
            "total": 21200
        },
        {
            "Sr No": 10,
            "Class": "Class VII",
            "I": 5400,
            "II": 5400,
            "III": 5400,
            "IV": 5400,
            "total": 21600
        },
        {
            "Sr No": 11,
            "Class": "Class VIII",
            "I": 5500,
            "II": 5500,
            "III": 5500,
            "IV": 5500,
            "total": 22000
        },
        {
            "Sr No": 12,
            "Class": "Class XI",
            "I": 5700,
            "II": 5700,
            "III": 5700,
            "IV": 5700,
            "total": 22800
        },
        {
            "Sr No": 13,
            "Class": "Class X",
            "I": 6800,
            "II": 6800,
            "III": 6800,
            "IV": 6800,
            "total": 27200
        },
        {
            "Sr No": 14,
            "Class": "Class XI Science",
            "I": 7400,
            "II": 7400,
            "III": 7400,
            "IV": 7400,
            "total": 29600
        },
        {
            "Sr No": 15,
            "Class": "Class XI Commerce",
            "I": 7400,
            "II": 7400,
            "III": 7400,
            "IV": 7400,
            "total": 29600
        },
        {
            "Sr No": 16,
            "Class": "Class XI Arts",
            "I": 5300,
            "II": 5300,
            "III": 5300,
            "IV": 5300,
            "total": 21200
        },
        {
            "Sr No": 17,
            "Class": "Class XII Science",
            "I": 7600,
            "II": 7600,
            "III": 7600,
            "IV": 7600,
            "total": 30400
        },
        {
            "Sr No": 18,
            "Class": "Class XII Commerce",
            "I": 7600,
            "II": 7600,
            "III": 7600,
            "IV": 7600,
            "total": 30400
        },
        {
            "Sr No": 19,
            "Class": "Class XII Arts",
            "I": 5850,
            "II": 5850,
            "III": 5850,
            "IV": 5850,
            "total": 23400
        }
    ];
    
  return (
    <div className="container mt-10">
        <h2>Fee Structure</h2>
        <table className="border border-gray-200">
        <thead>
          <tr className="bg-[#36C9B4] text-white">
            <th className="py-2 px-4 border border-gray-200 text-left">Sr. No.</th>
            <th className="py-2 px-4 border border-gray-200 text-left">CLASS</th>
            <th className="py-2 px-4 border border-gray-200 text-left">I</th>
            <th className="py-2 px-4 border border-gray-200 text-left">II</th>
            <th className="py-2 px-4 border border-gray-200 text-left">III</th>
            <th className="py-2 px-4 border border-gray-200 text-left">IV</th>
            <th className="py-2 px-4 border border-gray-200 text-left uppercase">Total Fees</th>

          </tr>
        </thead>
        <tbody>
          {feesData && feesData?.map((item,index)=>(
            <tr key={index}>
            <td className="py-2 px-4 border border-gray-200">{index+1}</td>
            <td className="py-2 px-4 border border-gray-200">{item?.Class}</td>
            <td className="py-2 px-4 border border-gray-200">{item?.I}</td>
            <td className="py-2 px-4 border border-gray-200">{item?.II}</td>
            <td className="py-2 px-4 border border-gray-200">{item?.III}</td>
            <td className="py-2 px-4 border border-gray-200">{item?.IV}</td>
            <td className="py-2 px-4 border border-gray-200 text-[#EE834E]">{item?.total}</td>
          </tr>
          ))}
        </tbody>
      </table>
      <h2 className="text-[#EE834E] capitalize">Please note</h2>
      <ol className="list-decimal list-inside">
        <li>Registration fee Rs. 500/- only for new admission.</li>
        <li>Renewal fee Rs. 200/- for students of X class passed from this school.</li>
        <li>Conveyance Charges - Only for the students availing conveyance facility.</li>
      </ol>
    </div>
  )
}
