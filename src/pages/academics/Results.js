import Image from 'next/image';
import React, { useState } from 'react';

const ProfileCard = ({ percentage, name, imagesrc }) => {
    return (
        <div>
            <Image src={imagesrc} alt={name} width={200} height={200} />
            <p>{percentage}</p>
            <p>{name}</p>
        </div>
    );
};

export default function Results() {
    const [selected, setSelected] = useState('Arts'); // Match with XIIdata keys

    const handleSelect = (category) => {
        setSelected(category);
    };

    const data = [
        {
            percentage: "96.33%",
            name: "Tanishka Meena",
            imagesrc: "/Academic/Student.png"
        },
        {
            percentage: "95.67%",
            name: "Tanisha Kumawat",
            imagesrc: "/Academic/Student.png"
        },
        {
            percentage: "94.33%",
            name: "Vishesh Saini",
            imagesrc: "/Academic/Student.png"
        },
        {
            percentage: "92.33%",
            name: "Darshil Deegwal",
            imagesrc: "/Academic/Student.png"
        },
        {
            percentage: "91.17%",
            name: "Vaishali Bhardwaj",
            imagesrc: "/Academic/Student.png"
        },
    ];

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

    return (
        <div className="container my-10">
            <h2>100% results</h2>
            <h2>Grade X</h2>
            <div className="flex">
                {data && data.map((item, index) => (
                    <ProfileCard key={index} percentage={item.percentage} name={item.name} imagesrc={item.imagesrc} />
                ))}
            </div>
            <h2>Grade XII</h2>
            <div className="flex space-x-2">
                <button
                    className={`px-4 py-2 border ${selected === 'Arts' ? 'bg-[#EE834E] text-white' : 'border-gray-400 text-gray-600'}`}
                    onClick={() => handleSelect('Arts')}
                >
                    ARTS
                </button>
                <button
                    className={`px-4 py-2 border ${selected === 'commerce' ? 'bg-[#EE834E] text-white' : 'border-gray-400 text-gray-600'}`}
                    onClick={() => handleSelect('commerce')}
                >
                    COMMERCE
                </button>
                <button
                    className={`px-4 py-2 border ${selected === 'science' ? 'bg-[#EE834E] text-white' : 'border-gray-400 text-gray-600'}`}
                    onClick={() => handleSelect('science')}
                >
                    SCIENCE
                </button>
            </div>
            {XIIdata && XIIdata[selected] && (
                <div className="flex">
                    {XIIdata[selected].map((item, index) => (
                        <ProfileCard key={index} percentage={item.percentage} name={item.name} imagesrc={item.imagesrc} />
                    ))}
                </div>
            )}
        </div>
    );
}

