import Image from 'next/image'
import React from 'react'
import PrincipalImg from "../../../public/About/Principal.png";

export default function Principal() {
  return (
    <div className="container my-10 bg-[#ECE1C5]">
    <h2 className="capitalize">Message from the principal</h2>
    <div className="flex">
    <Image src={PrincipalImg} height={100} width={100}/>
    <div className="flex flex-col">
    <p>We at Bal Vishwa Bharti Public School are committed to providing a balanced education that nurtures both academic excellence and personal growth. Our dedicated educators strive to inspire students to become confident, compassionate, and well-rounded individuals. We understand that true growth happens when students engage in collaborative projects, participate in sports, and explore their interests outside the academic sphere. Our diverse range of extracurricular programs is designed to foster teamwork, build leadership skills, and encourage a balanced lifestyle. Our faculty and students together build a vibrant school community, where every child is encouraged to reach their full potential.</p>
    <p>- Usha Kiran Sharma</p>
    </div>
    </div>
  </div>
  )
}
