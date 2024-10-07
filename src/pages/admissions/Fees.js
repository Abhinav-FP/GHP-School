import React, { useEffect, useState } from "react";

import Details from '../api/admin/Details';

export default function Fees() {

    const [Fees, setFees] = useState([])
    const [Loading, setLoading] = useState(false)
    const getFeesStruture = () => {
      setLoading(true);
      const main = new Details();
      main
        .getfees()
        .then((r) => {
          setLoading(false);
          setFees(r?.data?.fees);
        })
        .catch((err) => {
          setLoading(false);
          setTeachers([]);
          console.log("error", err);
        });
    };
  
    useEffect(() => {
        getFeesStruture();
    }, []);
    const feesData = [
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
        <div className='bg-white pb-[40px] md:pb-[80px] lg:pb-[100px]' id="fees">
            <div className="container sm:container md:container lg:max-w-[1204px] px-4 mx-auto">
                <h2 className='merriweather-font font-normal  text-2xl md:text-3xl lg:text-4xl mb-3 lg:mb-4 text-[#1E1E1E]  tracking-[-0.04em] text-center'>Fee Structure</h2>
                <div className='overflow-x-auto mb-6 lg:mb-10'>
                <table className="border border-gray-200 w-full">
                    <thead>
                        <tr className="bg-[#36C9B4] text-white">
                            <th width="80px" className="text-white text-sm px-3.5 py-5 tracking-[-0.04em] uppercase  font-medium">Sr. No.</th>
                            <th   className="text-white text-sm px-3.5 lg:px-[30px] py-5 tracking-[-0.04em] uppercase font-medium">CLASS</th>
                            <th width="127px" className="text-white text-sm px-3.5 lg:px-[30px] py-5 tracking-[-0.04em] uppercase font-medium">I</th>
                            <th width="127px" className="text-white text-sm px-3.5 lg:px-[30px] py-5 tracking-[-0.04em] uppercase font-medium">II</th>
                            <th width="127px" className="text-white text-sm px-3.5 lg:px-[30px] py-5 tracking-[-0.04em] uppercase font-medium">III</th>
                            <th width="127px" className="text-white text-sm px-3.5 lg:px-[30px] py-5 tracking-[-0.04em] uppercase font-medium">IV</th>
                            <th width="150px" className="text-white text-sm px-3.5 lg:px-[30px] py-5 tracking-[-0.04em] uppercase font-medium">Total Fees</th>

                        </tr>
                    </thead>
                    <tbody>
                        {Fees && Fees?.map((item, index) => (
                            <tr key={index}>
                                <td className="text-[#666666] text-base px-3.5 py-5 tracking-[-0.04em] border border-black border-opacity-10 font-medium">{index + 1}</td>
                                <td className="text-[#666666] text-base px-3.5 lg:px-[30px] py-5 tracking-[-0.04em] border border-black border-opacity-10 font-medium">{item?.grade}</td>
                                <td className="text-[#666666] text-base px-3.5 lg:px-[30px] py-5 tracking-[-0.04em] border border-black border-opacity-10 font-medium">{item?.first}</td>
                                <td className="text-[#666666] text-base px-3.5 lg:px-[30px] py-5 tracking-[-0.04em] border border-black border-opacity-10 font-medium">{item?.second}</td>
                                <td className="text-[#666666] text-base px-3.5 lg:px-[30px] py-5 tracking-[-0.04em] border border-black border-opacity-10 font-medium">{item?.third}</td>
                                <td className="text-[#666666] text-base px-3.5 lg:px-[30px] py-5 tracking-[-0.04em] border border-black border-opacity-10 font-medium">{item?.fourth}</td>
                                <td className="text-[#EE834E] text-base px-3.5 lg:px-[30px] py-5 tracking-[-0.04em] border border-black border-opacity-10 font-medium">{item?.total}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>                
                </div>
                <h2 className="tracking-[-0.04em] merriweather-font text-xl lg:text-2xl mb-2 md:mb-2.5 capitalize text-[#EE834E]">Please note :</h2>
                <ol className="list-decimal font-normal Gotham-reguler list-inside text-[#666666] text-sm lg:text-base tracking-[-0.04em] italic">
                    <li>Registration fee Rs. 500/- only for new admission.</li>
                    <li>Renewal fee Rs. 200/- for students of X class passed from this school.</li>
                    <li>Conveyance Charges - Only for the students availing conveyance facility.</li>
                </ol>
            </div>
        </div>
    )
}
