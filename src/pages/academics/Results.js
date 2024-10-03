import Image from 'next/image';
import React, { useEffect, useState } from "react";
import Details from '../api/admin/Details';
const ProfileCard = ({ percentage, name, imagesrc }) => {
    return (
        <div className='text-center w-full sm:w-6/12 md:w-4/12 lg:w-auto px-4 lg:px-0 mb-5 lg:mb-0'>
            <Image className='max-w-full mx-auto rounded-full  block mb-6 md:mb-8 lg:mb-10' src={imagesrc} alt={name} width={210} height={210} />
            <h3 className='text-[#EE834E] merriweather-font font-normal tracking-[-0.04em] text-center mb-1 text-lg md:text-xl lg:text-2xl'>{percentage}%</h3>
            <p className='text-[#1E1E1E] text-base font-medium uppercase tracking-[-0.04em]'>{name}</p>
        </div>
    );
};

export default function Results() {
    const [selected, setSelected] = useState('Arts'); // Match with XIIdata keys

    const handleSelect = (category) => {
        setSelected(category);
    };
    const [result, SetResult] = useState([])
    const [Loading, setLoading] = useState(false)

    const XIIdata = {
        "science": [
            {
                percentage: "96.33%",
                name: "Science Student 1",
                imagesrc: "/Academic/Student.png"
            },
            {
                percentage: "95.67%",
                name: "Science Student 2",
                imagesrc: "/Academic/Student.png"
            },
        ],
        "commerce": [
            {
                percentage: "96.33%",
                name: "Commerce Student 1",
                imagesrc: "/Academic/Student.png"
            },
            {
                percentage: "95.67%",
                name: "Commerce Student 2",
                imagesrc: "/Academic/Student.png"
            },
        ],
        "Arts": [
            {
                percentage: "96.33%",
                name: "Arts Student 1",
                imagesrc: "/Academic/Student.png"
            },
            {
                percentage: "95.67%",
                name: "Arts Student 2",
                imagesrc: "/Academic/Student.png"
            },
        ],
    };
    const classID = "X";
    const resultmanage = async (classID) => {
        setLoading(true);
        const main = new Details();
        const response = main.resultget(classID);
        try {
            const res = await response;
            SetResult(res?.data?.data)
        } catch (error) {
            console.log("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        resultmanage(classID);
    }, [classID]);
    return (

        <div className='pb-[40px] md:pb-[80px] lg:pb-[100px]'>
            <div className="container sm:container md:container lg:max-w-[1232px] px-4 mx-auto" id="results">
                <h2 className='merriweather-font font-normal capitalize text-2xl md:text-3xl lg:text-4xl mb-6 lg:mb-[36px] text-[#1E1E1E]  tracking-[-0.04em] text-center'>100% results</h2>
                <h3 className='tracking-[-0.04em] merriweather-font text-[#1E1E1E] text-lg md:text-xl lg:text-2xl mb-6 lg:mb-[36px] text-center'>Grade X</h3>
                <div className="flex flex-wrap lg:grid lg:gap-8 text-center lg:grid-cols-5 ">
                    {result && result.map((item, index) => (
                        <ProfileCard key={index} percentage={item.percentage} name={item.name} imagesrc={item.photo} />
                    ))}
                </div>
                <div className='pt-12 mt-12 border-t border-black border-opacity-10'>
                    <h3 className='tracking-[-0.04em] merriweather-font text-[#1E1E1E] text-lg md:text-xl lg:text-2xl mb-4 text-center'>Grade XII</h3>
                    <div className="flex space-x-2 md:space-x-3 lg:space-x-4 mb-8 justify-center">
                        <button
                            className={`min-w-[104px] lg:min-w-[164px] px-4 py-2 border font-medium tracking-[-0.04em] rounded-xl text-base ${selected === 'Arts' ? 'bg-[#EE834E] border-[#EE834E] text-white' : 'border-[#9A9A9A] text-[#9A9A9A]'}`}
                            onClick={() => handleSelect('Arts')}>
                            ARTS
                        </button>
                        <button
                            className={`min-w-[104px] lg:min-w-[164px] px-4 py-2 border font-medium tracking-[-0.04em] rounded-xl text-base ${selected === 'commerce' ? 'bg-[#EE834E] border-[#EE834E] text-white' : 'border-[#9A9A9A] text-[#9A9A9A]'}`}
                            onClick={() => handleSelect('commerce')} >
                            COMMERCE
                        </button>
                        <button
                            className={`min-w-[104px] lg:min-w-[164px] px-4 py-2 border font-medium tracking-[-0.04em] rounded-xl text-base ${selected === 'science' ? 'bg-[#EE834E] border-[#EE834E] text-white' : 'border-[#9A9A9A] text-[#9A9A9A]'}`}
                            onClick={() => handleSelect('science')} >
                            SCIENCE
                        </button>
                    </div>
                    {XIIdata && XIIdata[selected] && (
                        <div className="flex flex-wrap lg:grid lg:gap-8 text-center lg:grid-cols-5">
                            {XIIdata[selected].map((item, index) => (
                                <ProfileCard key={index} percentage={item.percentage} name={item.name} imagesrc={item.imagesrc} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

