import Image from 'next/image'
import React from 'react'

export default function Sports() {
  return (
    <div className="container mt-10">
        <div className="flex" style={{ height: '400px' }}>
            <div className="w-1/2 bg-[#EE834E] text-white">
            <p>{`Sports is not just about winning; it's about the passion, the teamwork, the perseverance, and the growth that happens both on and off the field.`}</p>
            <p>List of sports</p>
            <ul className="list-disc list-inside">
                <li>Arm wrestling</li>
                <li>Yoga</li>
                <li>Chess</li>
                <li>Kho- Kho</li>
                <li>Kabaddi</li>
                </ul>            
            </div>
            <div className="w-1/2 relative">
            <Image 
             src="/Facilities/Sports.png" 
             alt="Sports" 
             layout="fill" 
             objectFit="cover" 
            />
            </div>
        </div>
    </div>
  )
}
