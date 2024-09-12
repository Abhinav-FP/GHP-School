import React from 'react'
import Image from 'next/image'
import Logo from "../../../public/Header/Logo.png"
import Link from 'next/link'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Header() {
  return (
    <div className="flex">
        <div>
            <Image src={Logo} alt="BVBS School logo"/>
        </div>
        <div className="flex">
            <Link href="/">
            About
            <MdOutlineKeyboardArrowDown />
            </Link>
            <Link href="/">
            Academies
            <MdOutlineKeyboardArrowDown />
            </Link>
            <Link href="/">
            Facilities\
            <MdOutlineKeyboardArrowDown />
            </Link>
            <Link href="/">
            Contact
            <MdOutlineKeyboardArrowDown />
            </Link>
        </div>

    </div>
  )
}
