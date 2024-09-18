import Image from 'next/image';
import React from 'react'

export default function Houses() {
    const houseData=[
        {
            imagesrc:"/Facilities/House1.png",
            name:"Guru Vashishtha",
            color:"text-[#0E2A73]",
            paragraph:"Named after the revered sage and teacher of Lord Rama, Guru Vashishtha symbolizes wisdom, righteousness, and the pursuit of knowledge. This house inspires students to uphold moral values and seek enlightenment.",
        },
        {
            imagesrc:"/Facilities/House2.png",
            name:"Dronacharya",
            color:"text-[#8E0C16]",
            paragraph:"Named after the legendary teacher of the Pandavas and Kauravas, Dronacharya represents excellence in education, discipline, and mastery of skills. This house encourages students to strive for perfection in their endeavours.",
        },
        {
            imagesrc:"/Facilities/House3.png",
            name:"Chanakya",
            color:"text-[#F1A200]",
            paragraph:"Named after the ancient Indian philosopher and strategist, Chanakya embodies intelligence, strategy, and the art of leadership. This house motivates students to develop critical thinking and leadership qualities.",
        },
        {
            imagesrc:"/Facilities/House4.png",
            name:"Swami Vivekanand",
            color:"text-[#5A7C1E]",
            paragraph:"Named after the great Indian spiritual leader and philosopher, Swami Vivekanand stands for spiritual wisdom, strength, and the power of youth. This house inspires students to live with purpose and make a positive impact on society.",
        },
    ];
  return (
    <div className="container mt-10">
        <h1 className="capitalize">Distinct Colors, Shared Values</h1>
        <div className="flex gap-2">
            {houseData && houseData?.map((item,index)=>(
                <div key={index} className="flex flex-col">
                    <Image width={80} height={100} src={item.imagesrc} alt={item.name} />
                    <h2 className={`text-xl font-bold ${item.color}`}>{item.name}</h2>
                    <p className="text-base">{item.paragraph}</p>

                </div>
            ))}
            
        </div>
    </div>
  )
}
