import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { BiDonateHeart } from "react-icons/bi";
import { LuSchool } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { AiOutlineYoutube } from "react-icons/ai";

export default function Footer() {
  return (
    <div className='flex '>
        <div className='flex flex-col'>
            <h3>BAL VISHWA BHARTI PUBLIC SR SEC SCHOOL</h3>
            <p><IoCallOutline/> 01412282790/ 01412282298/ 90018-69684</p>
            <p><CiMail/> bvbpschool74@gmail.com/ bvbschool74@gmail.com</p>
            <p><CiLocationOn/> D-74, Ghiya Marg, Bani Park, Jaipur, Rajasthan 302016</p>
        </div>
        <div className='flex flex-col'>
            <h3>Quick Links </h3>
            <p><IoCallOutline/> Careers</p>
            <p><BiDonateHeart/> Sponsor/ Donations</p>
            <p><LuSchool/> Infrastructure</p>
        </div>
        <div className='flex flex-col'>
            <h3>Follow us on </h3>
            <p><FaFacebook/> Bal Vishwa Bharti</p>
            <p><IoLogoInstagram/> @bvbschool</p>
            <p><AiOutlineYoutube />@bvbschool-t9z</p>
        </div>
    </div>
  )
}
