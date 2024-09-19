import React from 'react'

export default function AgeCriteria() {
  const ageData = [
    {
      Grade: "Nursery",
      Age: "3+ years",
    },
    {
      Grade: "LKG",
      Age: "3+ years",
    },
    {
      Grade: "UKG",
      Age: "3+ years",
    },
    {
      Grade: "Class 1",
      Age: "3+ years",
    },
    {
      Grade: "Class 2 to 10",
      Age: "Corresponding age increase of one year per class",
    },
    {
      Grade: "For admission in Class 10",
      Age: " The student should generally be at least 14 to 15 years old.",
    },
  ];
  return (
    <div className="bg-white pb-[40px] md:pb-[80px] lg:pb-[100px]" id="ageCriteria">
      <div className="container sm:container md:container lg:max-w-[1232px] px-4 mx-auto">
        <h2 className='merriweather-font font-normal  text-2xl md:text-3xl lg:text-4xl mb-3 lg:mb-4 text-[#1E1E1E]  tracking-[-0.04em] text-center'>Age Criteria</h2>
        <p className='text-[#666666] font-medium text-base gotham-font text-center mb-1.5 tracking-[-0.04em] text-center mb-6 lg:mb-10'>The minimum age criteria for admission as per the Rajasthan Board (RBSE) typically are as follows:</p>
        <div className='overflow-x-auto'>
          <table className="border border-gray-200 w-full">
            <thead>
              <tr className="bg-[#36C9B4] text-white">
                <th width="55%" className="text-white text-left text-sm px-3.5 lg:px-[40px] py-5 tracking-[-0.04em] uppercase font-medium">Grade</th>
                <th width="45%" className="text-white text-left text-sm px-3.5 lg:px-[40px] py-5 tracking-[-0.04em] uppercase font-medium">Minimum Age</th>
              </tr>
            </thead>
            <tbody>
              {ageData && ageData?.map((item, index) => (
                <tr key={index}>
                  <td className="text-[#666666] text-base px-3.5 lg:px-[40px] py-5 tracking-[-0.04em] border border-black border-opacity-10">{item?.Grade}</td>
                  <td className="text-[#666666] text-base px-3.5 lg:px-[40px] py-5 tracking-[-0.04em] border border-black border-opacity-10">{item?.Age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
