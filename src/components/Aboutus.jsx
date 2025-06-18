import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaDribbble } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
const Aboutus = () => {
  return (
    <section className=' mt-20 ' id='about'>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className=' w-full md:w-5/12'>
          <Image src="/images/about.jpg" height={500} width={500} alt='about profile image' className=' w-full object-cover' />
        </div>
        <div className='w-full md:w-7/12 pl-0 lg:pl-10 mt-10 lg:mt-0'>
          <h4 className=' font-bold text-xl md:text-3xl text-dark mt-2 mb-3 font-montseraat'>About <span className=' font-medium'>Me</span></h4>
          <h2 className=' font-medium text-2xl mt-1 mb-4 capitalize'>Hello! <span className=' text-primary'>I'M Kerri Deo.</span></h2>
          <p className='font-nunito text-dark text-sm capitalize  font-medium leading-relaxed mb-3'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
          <p className='font-nunito text-dark text-sm capitalize  font-medium leading-relaxed mb-3'> 
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
          </p>
          <p className='font-nunito text-dark text-sm capitalize  font-medium leading-relaxed mb-3'> 
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
          </p>
          <ul className=' flex items-center space-x-3.5'>
            <li>
              <Link href={""}>
              <span className=' h-10 w-10 border border-dark flex items-center justify-center rounded-full hover:text-primary hover:border-primary transition-all'><FaDribbble /></span>
              </Link>
            </li>
            <li>
              <Link href={""}>
              <span className=' h-10 w-10 border border-dark flex items-center justify-center rounded-full hover:text-primary hover:border-primary transition-all'><FaFacebookF /></span>
              </Link>
            </li>
            <li>
              <Link href={""}>
              <span className=' h-10 w-10 border border-dark flex items-center justify-center rounded-full hover:text-primary hover:border-primary transition-all'><FaLinkedinIn /></span>
              </Link>
            </li>
            <li>
              <Link href={""}>
              <span className=' h-10 w-10 border border-dark flex items-center justify-center rounded-full hover:text-primary hover:border-primary transition-all'><FaTwitter /></span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

    </section>
  )
}

export default Aboutus