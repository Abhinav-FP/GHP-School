import Image from 'next/image'
import React from 'react'

export default function SisterSchools() {
  return (
    <div className="container my-10 bg-[#ECE1C5]">
        <h2 className="capitalize">sister schools and colleges in Powai, Mumbai</h2>
        <div className="flex">
        <Image src={"/About/School1.png"}  width={200} height={200} layout="intrinsic" />
        <Image src={"/About/School2.png"}  width={200} height={200} layout="intrinsic" />
        <Image src={"/About/School3.png"}  width={200} height={200} layout="intrinsic" />
        <Image src={"/About/School4.png"}  width={200} height={200} layout="intrinsic" />
        <Image src={"/About/School5.png"}  width={200} height={200} layout="intrinsic" />
        </div>
    </div>
  )
}
