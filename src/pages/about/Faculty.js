import React from 'react'

export default function Faculty() {
  const teacters=[
    {
      "name": "Ved Prakash Sharma",
      "subjects": "Mathematics",
      "grades": "10th Grade"
    },
    {
      "name": "Ramesh Chandra Sharma",
      "subjects": "Sanskrit, Hindi",
      "grades": "XI SCI"
    },
    {
      "name": "Shambhu Dayal Sharma",
      "subjects": "Accountancy, Social Science",
      "grades": "XII SCI"
    },
    {
      "name": "Satya Narayan Sinwal",
      "subjects": "Business Study, Economics",
      "grades": "8th Grade, 10th Grade"
    },
    {
      "name": "Anju Sharma",
      "subjects": "Maths, EVS",
      "grades": "IV Grade"
    },
    {
      "name": "Ashok Kumar Gupta",
      "subjects": "Maths",
      "grades": "XII COM"
    },
    {
      "name": "Bharat Bhushan Khandelwal",
      "subjects": "Physics",
      "grades": "V Grade"
    },
    {
      "name": "Poornima Srivastava",
      "subjects": "Maths, Hindi, Moral Science",
      "grades": "V Grade"
    },
    {
      "name": "Pramod Kumar Sharma",
      "subjects": "PTI",
      "grades": "8th Grade, 10th Grade"
    },
    {
      "name": "Sunita Vyas",
      "subjects": "(KG) Maths",
      "grades": "UKG Grade"
    },
    {
      "name": "Purnima Gharti",
      "subjects": "Social Science",
      "grades": "8th Grade, 10th Grade"
    },
    {
      "name": "Reena Sharma",
      "subjects": "English, History, Sociology",
      "grades": "XII ARTS"
    },
    {
      "name": "Radhika Tailor",
      "subjects": "Chemistry",
      "grades": "8th Grade, 10th Grade"
    },
    {
      "name": "Meena Sharma",
      "subjects": "Computer, EVS, Hindi",
      "grades": "II Grade"
    },
    {
      "name": "Neha Sharma",
      "subjects": "(KG) Hindi",
      "grades": "NURSERY"
    },
    {
      "name": "Ritu Sharma",
      "subjects": "History, Hindi",
      "grades": "8th Grade, 10th Grade"
    },
    {
      "name": "Shobha Kanwar",
      "subjects": "Maths, G.K., Moral Science",
      "grades": "8th Grade, 10th Grade"
    },
    {
      "name": "Manju Sharma",
      "subjects": "Political Science, Sociology (Hindi Medium), GIAI",
      "grades": "8th Grade, 10th Grade"
    },
    {
      "name": "Pratibha Sharma",
      "subjects": "(KG) English",
      "grades": "LKG"
    },
    {
      "name": "Sudarshna Sharma",
      "subjects": "Political Science, English",
      "grades": "XI ARTS"
    },
    {
      "name": "Ruchi Khanna",
      "subjects": "Science, EVS, English",
      "grades": "VI Grade"
    },
    {
      "name": "Rajshree Vyas",
      "subjects": "Hindi",
      "grades": "III Grade"
    },
    {
      "name": "Nisha Chandani",
      "subjects": "Social Science, Science, English",
      "grades": "8th Grade, 10th Grade"
    },
    {
      "name": "Rekha",
      "subjects": "English, History",
      "grades": "8th Grade, 10th Grade"
    },
    {
      "name": "Rinku Sharma",
      "subjects": "Social Science, English, Science",
      "grades": "IX Grade"
    },
    {
      "name": "Priyanka Sharma",
      "subjects": "Sanskrit, Hindi",
      "grades": "8th Grade, 10th Grade"
    },
    {
      "name": "Jyoti Medalwat",
      "subjects": "Biology, Science",
      "grades": "8th Grade, 10th Grade"
    },
    {
      "name": "Ritesh Singh",
      "subjects": "Dance",
      "grades": "8th Grade, 10th Grade"
    },
    {
      "name": "Priyanka Kanwar",
      "subjects": "Computer",
      "grades": "8th Grade, 10th Grade"
    },
    {
      "name": "Santosh Sharma",
      "subjects": "(KG) Hindi, English, Maths",
      "grades": "8th Grade, 10th Grade"
    },
  ];

  return (
    <div className="bg-white pt-[40px] md:pt-[80px] lg:pt-[100px]" id="faculty">
      <div className="container sm:container md:container lg:max-w-[1232px] px-4 mx-auto">
        <h2 className='merriweather-font font-normal  text-2xl md:text-3xl lg:text-4xl mb-3 lg:mb-4 text-[#1E1E1E]  tracking-[-0.04em] text-center'>Faculty</h2>
        <div className='overflow-x-auto'>
          <table className="border border-gray-200 w-full">
            <thead>
              <tr className="bg-[#36C9B4] text-white">
              <th width="15%" className="text-white text-left text-sm px-3.5 lg:px-[40px] py-5 tracking-[-0.04em] capitalize font-medium">Sr. No.</th>
              <th width="25%" className="text-white text-left text-sm px-3.5 lg:px-[40px] py-5 tracking-[-0.04em] uppercase font-medium">Name of the teacher</th>
                <th width="35%" className="text-white text-left text-sm px-3.5 lg:px-[40px] py-5 tracking-[-0.04em] uppercase font-medium">Subject</th>
                <th width="25%" className="text-white text-left text-sm px-3.5 lg:px-[40px] py-5 tracking-[-0.04em] uppercase font-medium">Grade/Class</th>
              </tr>
            </thead>
            <tbody>
              {teacters && teacters?.map((item, index) => (
                <tr key={index}>
                  <td className="text-[#666666] text-base px-3.5 lg:px-[40px] py-5 tracking-[-0.04em] border border-black border-opacity-10">{index+1}</td>
                  <td className="text-[#666666] text-base px-3.5 lg:px-[40px] py-5 tracking-[-0.04em] border border-black border-opacity-10">{item?.name}</td>
                  <td className="text-[#666666] text-base px-3.5 lg:px-[40px] py-5 tracking-[-0.04em] border border-black border-opacity-10">{item?.subjects}</td>
                  <td className="text-[#666666] text-base px-3.5 lg:px-[40px] py-5 tracking-[-0.04em] border border-black border-opacity-10">{item?.grades}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
