import Image from 'next/image';
import React from 'react'

export default function Gallery() {
    const data = [
        {
            name: "Annual Day ",
            image: "/Facilities/Gallery1.png",
        },
        {
            name: "Assembly",
            image: "/Facilities/Gallery2.png",
        },
        {
            name: "Seminars",
            image: "/Facilities/Gallery3.png",
        },
        {
            name: "Activities",
            image: "/Facilities/Gallery4.png",
        },
        {
            name: "Festivals",
            image: "/Facilities/Gallery5.png",
        },
        {
            name: "Recognition & Awards",
            image: "/Facilities/Gallery6.png",
        },
        {
            name: "School rooms",
            image: "/Facilities/Gallery7.png",
        },
        {
            name: "Special Days",
            image: "/Facilities/Gallery8.png",
        },
        {
            name: "Summer camp",
            image: "/Facilities/Gallery9.png",
        },
    ];
    return (
        <div className="container my-10">
            <h2>Gallery</h2>
            <p>
                Explore our gallery to see the vibrant life and activities at BVBS School. From events and achievements to daily moments, experience the essence of our school community through these images.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"> {/* Grid layout for responsive design */}
                {data && data?.map((item, index) => (
                    <div key={index} className="relative w-full h-[200px] overflow-hidden"> {/* Set a height and width */}
                        <Image
                            src={item?.image}
                            alt={item?.name}
                            fill
                            className="object-cover"
                        />
                        <h3 className="absolute bottom-0 left-0 text-white p-2">{item?.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
    
}
