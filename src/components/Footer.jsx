import Link from 'next/link'
import React from 'react'
import { FaDribbble } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className=' py-20 bg-dark2' >
            <div className="container mx-auto px-4 text-center text-white">
                <ul className=' flex items-center space-x-3.5 justify-center mb-5'>
                    <li>
                        <Link href={""}>
                            <span className=' h-11 w-11 border bg-[#313131] border-[#313131] flex items-center justify-center rounded-full  hover:border-primary transition-all'>
                                <FaFacebookF className='text-[#ABABAB] hover:text-primary transition-all' />
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href={""}>
                            <span className=' h-11 w-11 border bg-[#313131] border-[#313131] flex items-center justify-center rounded-full  hover:border-primary transition-all'>
                                <FaLinkedinIn className='text-[#ABABAB] hover:text-primary transition-all' />
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href={""}>
                            <span className=' h-11 w-11 border bg-[#313131] border-[#313131] flex items-center justify-center rounded-full  hover:border-primary transition-all'>
                                <FaPinterestP className='text-[#ABABAB] hover:text-primary transition-all' />
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href={""}>
                            <span className=' h-11 w-11 border bg-[#313131] border-[#313131] flex items-center justify-center rounded-full  hover:border-primary transition-all'>
                                <FaTwitter className='text-[#ABABAB] hover:text-primary transition-all' />
                            </span>
                        </Link>
                    </li>

                </ul>
                <p className=' text-[#ABABAB]'>2025 &copy; Kerri. Design by MehediDeveloper.</p>
            </div>
        </footer>
    )
}

export default Footer