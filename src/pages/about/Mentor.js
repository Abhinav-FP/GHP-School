import Image from 'next/image'
import React from 'react'
import MentorImg from "../../../public/About/Mentor.png";

export default function Mentor() {
  return (
    <div className="container mt-10">
        <h2>Our Mentor</h2>
        <Image src={MentorImg} alt="Shri Gopal Sharma" width={100} height={100}/>
        <p>This was the dream nurtured by Shri Gopal Sharma and today this dream has materialised and is taking shape in the form of our school. He was born in Jaipur on 8th July, 1938 to an educationist father, Shri Chandra Bhan Sharma and a pious mother Smt. Durga Devi Sharma. After a humble beginning he rose to carve a niche in the society.</p>
        <p>Qualities like fearlessness and honesty were deep-rooted in his mind from early childhood. After his initial schooling in Jaipur, he completed his formal education from Mumbai University. Editor, theatre personality, social worker and a successful business person, all rolled into one, he was a multi-faceted man with numerous talents.</p>
        <p>A hard-working and resourceful person, he was determined to make a mark in the field of education. He firmly believed in the concept that quality education should be imparted to all and this resulted in the birth of Powai English School at Powai.</p>
        <p>During his lifetime, Shri Gopal Sharma worked for the upliftment of the downtrodden. The long journey started by Shri Gopal Sharma in the field of education, is today spearheaded by his sons, Shri Prashant Sharma and Shri Dikshant Sharma.</p>
      </div>
  )
}
