import React, { useState } from "react";

function ContactForm() {
  const [record, setRecord] = useState({
    class: "",
    type: "",
    selectedDate: "",
  });
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setRecord((prevState) => ({ ...prevState, [name]: value }));
  };

  console.log("record", record);

  const handleDateChange = (event) => {
    const date = event.target.value;
    
    // Correctly updating the selectedDate field in the state
    setRecord((prevState) => ({ ...prevState, selectedDate: date }));

    // Convert to a human-readable format
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(date).toLocaleDateString('en-US', options);
    console.log(`Selected Date: ${formattedDate}`);
  };
  return (
    <div className="bg-white py-[50px] md:py-[70px] lg:py-[100px]">
      <div className="container sm:container md:container lg:max-w-[1232px] px-4 mx-auto ">
        <h1 className="merriweather-font font-normal text-center text-2xl md:text-3xl lg:text-4xl mb-2.5 text-[#1E1E1E]  tracking-[-0.04em]">
          Apply Now
        </h1>
        <p className="text-center text-base text-[#1E1E1E]  tracking-[-0.04em] opacity-80 font-medium mb-5  lg:mb-[30px]">
          (Form no : E01)
        </p>

        <div className="border-t border-black border-opacity-10 pt-10 lg:pt-[50px]">
          <div className="flex flex-wrap -mx-2.5">
            <div className="w-full lg:w-8/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Class
              </label>
              <select
                className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
                name="class"
                value={record.class}
                onChange={handleChange}
                id="class"
                required
              >
                <option value="" disabled>
                  Select Class
                </option>
                <option value="I">I</option>
                <option value="II">II</option>
                <option value="III">III</option>
                <option value="IV">IV</option>
                <option value="V">V</option>
                <option value="VI">VI</option>
                <option value="VII">VII</option>
                <option value="VIII">VIII</option>
                <option value="IX">IX</option>
                <option value="X">X</option>
                <option value="XI">XI</option>
                <option value="XII">XII</option>
              </select>
            </div>

            <div className="w-full lg:w-4/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Optional Subject
              </label>
              <input className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none" />
            </div>
            <div className="w-full lg:w-4/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Date of Admission{" "}
              </label>
              <input className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none" />
            </div>
            <div className="w-full lg:w-4/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Aadhar No.
              </label>
              <input className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none" />
            </div>
            <div className="w-full lg:w-4/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Scholar’s register no
              </label>
              <input className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none" />
            </div>
            <div className="w-full lg:w-8/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Full Name{" "}
              </label>
              <input className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none" />
            </div>
            <div className="w-full lg:w-4/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Type of Admission{" "}
              </label>
              <select
                className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
                name="type"
                value={record.type}
                onChange={handleChange}
                id="type"
                required
              >
                <option value="" disabled>
                  Select Type
                </option>
                <option value="new">New Admission</option>
                <option value="renwe">Renew after Class X for Grade XI</option>
              </select>
            </div>
            <div className="w-full lg:w-4/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Date of birth
              </label>
              <input
                type="date"
                value={record.selectedDate}
                onChange={handleDateChange}
                className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
              />
            </div>
            <div className="w-full lg:w-8/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Date of birth (In Words)
              </label>
              <input className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none" />
            </div>
            <div className="w-full lg:w-4/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Father’s name
              </label>
              <input className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none" />
            </div>
            <div className="w-full lg:w-4/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Occupation{" "}
              </label>
              <input className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none" />
            </div>
            <div className="w-full lg:w-4/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Father’s Phone Number*{" "}
              </label>
              <input className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none" />
            </div>
            <div className="w-full lg:w-4/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Mother’s name
              </label>
              <input className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none" />
            </div>
            <div className="w-full lg:w-4/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Occupation{" "}
              </label>
              <input className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none" />
            </div>
            <div className="w-full lg:w-4/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Mother’s Phone Number*{" "}
              </label>
              <input className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none" />
            </div>
            <div className="w-full lg:w-4/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Guardian’s name
              </label>
              <input className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none" />
            </div>
            <div className="w-full lg:w-4/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Occupation{" "}
              </label>
              <input className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none" />
            </div>
            <div className="w-full lg:w-4/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Guardian’s Phone Number*
              </label>
              <input className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none" />
            </div>
            <div className="w-full lg:w-12/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Father’s/Guardian’s Address
              </label>
              <textarea className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"></textarea>
            </div>
            <div className="w-full lg:w-6/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Father’s/Mother’s Email*
              </label>
              <input className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none" />
            </div>
            <div className="w-full lg:w-6/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Student’s Email
              </label>
              <input className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none" />
            </div>
            <div className="w-full lg:w-8/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Last School attended
              </label>
              <input className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none" />
            </div>
            <div className="w-full lg:w-4/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Class passed & Percentage
              </label>
              <input className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none" />
            </div>
            <div className="w-full lg:w-12/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Name of brother/sister studying in this school
              </label>
              <input className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none" />
            </div>
            <div className="w-full lg:w-12/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Candidate belongs to{" "}
              </label>
              <div className="flex flex-wrap space-x-3 lg:space-x-5">
                <div
                  className="border border-black p-3 lg:p-4 border-opacity-10 min-w-[154px]"
                  for="sc"
                >
                  <input
                    id="sc"
                    type="radio"
                    name="belongs"
                    value="sc"
                    className="w-5 h-5 lg:w-6 lg:h-6  bg-transparent rounded-full border border-gray-300 focus:ring-0 checked:bg-white checked:border-[#EE834E] cursor-pointer"
                    aria-labelledby="sc"
                    aria-describedby="sc"
                  />
                  <label
                    for="sc"
                    className="cursor-pointer ml-2 text-sm font-medium text-[#1E1E1E] opacity-80 "
                  >
                    SC
                  </label>
                </div>
                <div
                  className="border border-black p-3 lg:p-4 border-opacity-10 min-w-[154px]"
                  for="st"
                >
                  <input
                    id="st"
                    type="radio"
                    name="belongs"
                    value="st"
                    className="w-5 h-5 lg:w-6 lg:h-6  bg-transparent rounded-full border border-gray-300 focus:ring-0 checked:bg-white checked:border-[#EE834E] cursor-pointer"
                    aria-labelledby="st"
                    aria-describedby="st"
                  />
                  <label
                    for="st"
                    className="cursor-pointer ml-2 text-sm font-medium text-[#1E1E1E] opacity-80 "
                  >
                    ST
                  </label>
                </div>
                <div
                  className="border border-black p-3 lg:p-4 border-opacity-10 min-w-[154px]"
                  for="obc"
                >
                  <input
                    id="obc"
                    type="radio"
                    name="belongs"
                    value="obc"
                    className="w-5 h-5 lg:w-6 lg:h-6  bg-transparent rounded-full border border-gray-300 focus:ring-0 checked:bg-white checked:border-[#EE834E] cursor-pointer"
                    aria-labelledby="obc"
                    aria-describedby="obc"
                  />
                  <label
                    for="obc"
                    className="cursor-pointer ml-2 text-sm font-medium text-[#1E1E1E] opacity-80 "
                  >
                    OBC
                  </label>
                </div>
                <div
                  className="border border-black p-3 lg:p-4 border-opacity-10 min-w-[154px]"
                  for="general"
                >
                  <input
                    id="general"
                    type="radio"
                    name="belongs"
                    value="general"
                    className="w-5 h-5 lg:w-6 lg:h-6  bg-transparent rounded-full border border-gray-300 focus:ring-0 checked:bg-white checked:border-[#EE834E] cursor-pointer"
                    aria-labelledby="general"
                    aria-describedby="general"
                  />
                  <label
                    for="general"
                    className="cursor-pointer ml-2 text-sm font-medium text-[#1E1E1E] opacity-80 "
                  >
                    General
                  </label>
                </div>
                <div
                  className="border border-black p-3 lg:p-4 border-opacity-10 min-w-[154px]"
                  for="sbc"
                >
                  <input
                    id="sbc"
                    type="radio"
                    name="belongs"
                    value="sbc"
                    className="w-5 h-5 lg:w-6 lg:h-6  bg-transparent rounded-full border border-gray-300 focus:ring-0 checked:bg-white checked:border-[#EE834E] cursor-pointer"
                    aria-labelledby="sbc"
                    aria-describedby="sbc"
                  />
                  <label
                    for="sbc"
                    className="cursor-pointer ml-2 text-sm font-medium text-[#1E1E1E] opacity-80 "
                  >
                    SBC
                  </label>
                </div>
                <div
                  className="border border-black p-3 lg:p-4 border-opacity-10 min-w-[154px]"
                  for="ews"
                >
                  <input
                    id="ews"
                    type="radio"
                    name="belongs"
                    value="ews"
                    className="w-5 h-5 lg:w-6 lg:h-6  bg-transparent rounded-full border border-gray-300 focus:ring-0 checked:bg-white checked:border-[#EE834E] cursor-pointer"
                    aria-labelledby="ews"
                    aria-describedby="ews"
                  />
                  <label
                    for="ews"
                    className="cursor-pointer ml-2 text-sm font-medium text-[#1E1E1E] opacity-80 "
                  >
                    EWS
                  </label>
                </div>
                <div
                  className="border border-black p-3 lg:p-4 border-opacity-10 min-w-[154px]"
                  for="other"
                >
                  <input
                    id="other"
                    type="radio"
                    name="belongs"
                    value="other"
                    className="w-5 h-5 lg:w-6 lg:h-6  bg-transparent rounded-full border border-gray-300 focus:ring-0 checked:bg-white checked:border-[#EE834E] cursor-pointer"
                    aria-labelledby="other"
                    aria-describedby="other"
                  />
                  <label
                    for="other"
                    className="cursor-pointer ml-2 text-sm font-medium text-[#1E1E1E] opacity-80 "
                  >
                    Other
                  </label>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-12/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Whether conveyance facility needed
              </label>
              <div className="flex flex-wrap -mx-2.5">
                <div className="w-6/12 px-2.5 mb-2 lg:mb-0">
                  <div
                    className="border border-black p-3 lg:p-4 border-opacity-10 min-w-[154px]"
                    for="yes"
                  >
                    <input
                      id="yes"
                      type="radio"
                      name="facility"
                      value="yes"
                      className="w-5 h-5 lg:w-6 lg:h-6  bg-transparent rounded-full border border-gray-300 focus:ring-0 checked:bg-white checked:border-[#EE834E] cursor-pointer"
                      aria-labelledby="yes"
                      aria-describedby="yes"
                    />
                    <label
                      for="yes"
                      className="cursor-pointer ml-2 text-sm font-medium text-[#1E1E1E] opacity-80 tracking-[-0.04em] "
                    >
                      YES
                    </label>
                  </div>
                </div>
                <div className="w-6/12 px-2.5 mb-2 lg:mb-0">
                  <div
                    className="border border-black p-3 lg:p-4 border-opacity-10 min-w-[154px]"
                    for="no"
                  >
                    <input
                      id="no"
                      type="radio"
                      name="facility"
                      value="no"
                      className="w-5 h-5 lg:w-6 lg:h-6  bg-transparent rounded-full border border-gray-300 focus:ring-0 checked:bg-white checked:border-[#EE834E] cursor-pointer"
                      aria-labelledby="no"
                      aria-describedby="no"
                    />
                    <label
                      for="no"
                      className="cursor-pointer ml-2 text-base font-medium text-[#1E1E1E] opacity-80 tracking-[-0.04em]"
                    >
                      NO
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-12/12 px-2.5 mb-2">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                I Solemnly declare that
              </label>
              <ul className="space-y-2">
                <li className="relative pl-5">
                  <input
                    id=""
                    type="checkbox"
                    name=""
                    value="1"
                    className="absolute left-0 top-1 w-[14px] h-[14px] bg-transparent rounded-full border border-gray-300 focus:ring-0 checked:bg-[#EE834E] checked:border-[#EE834E] cursor-pointer"
                    aria-labelledby="1"
                    aria-describedby="1"
                  />
                  <label
                    for="1"
                    className="cursor-pointer ml-1 text-base font-normal text-[#1E1E1E] opacity-80 tracking-[-0.04em] italic "
                  >
                    The above information is correct.
                  </label>
                </li>
                <li className="relative pl-5">
                  <input
                    id=""
                    type="checkbox"
                    name=""
                    value="2"
                    className="absolute left-0 top-1 w-[14px] h-[14px] bg-transparent rounded-full border border-gray-300 focus:ring-0 checked:bg-[#EE834E] checked:border-[#EE834E] cursor-pointer"
                    aria-labelledby="2"
                    aria-describedby="2"
                  />
                  <label
                    for="2"
                    className="cursor-pointer ml-1 text-base font-normal text-[#1E1E1E] opacity-80 tracking-[-0.04em] italic "
                  >
                    I agree to abide by Rules and Regulations of the school and
                    the Education Department (Subject to any change that may be
                    made in them.)
                  </label>
                </li>
                <li className="relative pl-5">
                  <input
                    id=""
                    type="checkbox"
                    name=""
                    value="3"
                    className="absolute left-0 top-1 w-[14px] h-[14px] bg-transparent rounded-full border border-gray-300 focus:ring-0 checked:bg-[#EE834E] checked:border-[#EE834E] cursor-pointer"
                    aria-labelledby="3"
                    aria-describedby="3"
                  />
                  <label
                    for="3"
                    className="cursor-pointer ml-1 text-base font-normal text-[#1E1E1E] opacity-80 tracking-[-0.04em] italic "
                  >
                    The date of birth entered above is correct and no request
                    for any change will be made.
                  </label>
                </li>
                <li className="relative pl-5">
                  <input
                    id=""
                    type="checkbox"
                    name=""
                    value="4"
                    className="absolute left-0 top-1 w-[14px] h-[14px] bg-transparent rounded-full border border-gray-300 focus:ring-0 checked:bg-[#EE834E] checked:border-[#EE834E] cursor-pointer"
                    aria-labelledby="4"
                    aria-describedby="4"
                  />
                  <label
                    for="4"
                    className="cursor-pointer ml-1 text-base font-normal text-[#1E1E1E] opacity-80 tracking-[-0.04em] italic "
                  >
                    I have explained these rules and regulations to my
                    son/daughter and in case if he/she violates any rules and
                    regulations of the school or is involved in any breach of
                    discipline or neglect of studies, his/her name may be
                    struck-off the rolls of the school. The decision of the
                    management shall be final in all matters and binding on me
                    and my son/daughter.
                  </label>
                </li>
                <li className="relative pl-5">
                  <input
                    id=""
                    type="checkbox"
                    name=""
                    value="5"
                    className="absolute left-0 top-1 w-[14px] h-[14px] bg-transparent rounded-full border border-gray-300 focus:ring-0 checked:bg-[#EE834E] checked:border-[#EE834E] cursor-pointer"
                    aria-labelledby="5"
                    aria-describedby="5"
                  />
                  <label
                    for="5"
                    className="cursor-pointer ml-1 text-base font-normal text-[#1E1E1E] opacity-80 tracking-[-0.04em] italic "
                  >
                    The School will not be held responsible for any accident,
                    injuries of loss to the student while at the school or at
                    the time of participating in any activity.
                  </label>
                </li>
                <li className="relative pl-5">
                  <input
                    id=""
                    type="checkbox"
                    name=""
                    value="6"
                    className="absolute left-0 top-1 w-[14px] h-[14px] bg-transparent rounded-full border border-gray-300 focus:ring-0 checked:bg-[#EE834E] checked:border-[#EE834E] cursor-pointer"
                    aria-labelledby="6"
                    aria-describedby="6"
                  />
                  <label
                    for="6"
                    className="cursor-pointer ml-1 text-base font-normal text-[#1E1E1E] opacity-80 tracking-[-0.04em] italic "
                  >
                    Admission granted to a student will be provisional until the
                    relevant documents are not submitted duely signed/counter
                    signed by the concerned authorities.
                  </label>
                </li>
              </ul>
            </div>

            <div className="w-full lg:w-12/12 px-2.5 mb-10 md:mb-14 lg:mb-20">
              <p className="Gotham-reguler text-base lg:text-lg font-normal text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-0">
                Submitting the form does not guarantee admission. The student
                will be required to take a test, after which a physical copy of
                the following supporting documents must be submitted to the
                school:{" "}
              </p>
              <ul className="Gotham-reguler text-base lg:text-lg font-normal text-[#1E1E1E] tracking-[-0.04em] opacity-80 pl-5 list-disc">
                <li>{`Student's photograph`}</li>
                <li>Birth certificate</li>
                <li>Aadhar card</li>
                <li>Transfer/migration certificate</li>
                <li>Previous mark sheet</li>
                <li>Caste certificate</li>
              </ul>
            </div>
            <div className="w-full text-center">
              <button
                type="submit"
                className="bg-[#EE834E] hover:bg-[#ECCD6E] rounded px-8 lg:px-24 py-2 lg:py-3.5 text-white text-base lg:text-lg font-normal tracking-[-0.04em]"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactForm;
