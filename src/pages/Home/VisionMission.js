import React from 'react'
import Vision from "../../../public/Home/Vision.png"
import Results from "../../../public/Home/Results.png"
import Facilities from "../../../public/Home/Facilities.png"
import Assembly from "../../../public/Home/Assembly.png"
import Image from 'next/image'


export default function VisionMission() {
    const data=[
        {
            heading:"Vision",
            text:"The School’s vision is to provide a learning environment that encourages children to bring out the best in themselves and which supports their all-round development, through discovering the joy of learning, awakening and illuminating their intellect in multi-dimensional ways, and instilling abiding values in themselves.",
            btnText:"About Us ",
            imgsrc:Vision,
        },
        {
            heading:"Results",
            text:"Explore our students' remarkable achievements and academic milestones. Dive into the details of our latest exam results and witness the success stories that define our commitment to excellence.",
            btnText:"Read More",
            imgsrc:Results,
        },
        {
            heading:"Facilities",
            text:"Bal Vishwa Bharti School offers state-of-the-art classrooms, well-equipped science and computer labs, and a resource-rich library to foster academic excellence. The School Hall can accommodate 520 people.",
            btnText:"View more",
            imgsrc:Facilities,
        },
        {
            heading:"Our Pre-Primary Program",
            text:"Our Pre-Primary section offers a nurturing and stimulating environment where young children explore, learn, and grow. With play-based activities and dedicated educators, we lay the foundation for a lifelong love of learning.",
            btnText:"Apply Now",
            imgsrc:Assembly,
        },
    ];
  return (
    <div className=" container mt-10">
        {data && data.map((item, index) => (
  <div className="flex w-full" key={index}>
    <div className="w-1/2 bg-[#ECE1C5]">
      <h1>{item?.heading}</h1>
      <p>{item?.text}</p>
      <button className="bg-[#EE834E] text-white">
        {item?.btnText}
      </button>
    </div>
    <div className="w-1/2">
        <Image 
          src={item.imgsrc} 
          alt={`School Image`} 
          width={500} 
          height={300} 
          className="object-cover"
        />
    </div>
  </div>
))}             
    </div>
  )
}
