'use client';
import React, { useEffect, useState } from 'react'
import { navitem } from '@/data/Navdata'
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Link ,scrollSpy  } from 'react-scroll';
const Menubar = () => {

    const [mobile, setmobile] = useState(false);

    const responsivenav = () => {
        setmobile(!mobile)
    }

    const [navbg, setnavbg] = useState(false)

    useEffect(() => {
        const bghandlebar = () => {
            if (window.scrollY > 100) setnavbg(true)
            else setnavbg(false)
        }
        window.addEventListener('scroll', bghandlebar)
        return () => {
            window.removeEventListener('scroll', bghandlebar)
        }
    }, [])



    return (
        <header className={`fixed  left-0 w-full  bg-transparent shadow-sm py-2  transition-all duration-500 delay-300 z-50 ${navbg ? 'bg-white py-4 shadow-md top-0 text-black' : 'top-4'}`} >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* logo */}
                <Link href={"/"}>
                    <h2 className={`font-bold  capitalize inline-block  ${navbg ? 'text-black text-2xl md:text-2xl' : 'text-white text-xl md:text-2xl'}`}>Mehed<span className=' text-primary'>i</span></h2>
                </Link>
                {/* menu item */}
                <ul className='hidden lg:flex items-center space-x-6'>
                    {
                        navitem.map((item, index) => (
                            <li key={item.id}>
                                <Link href={"/"} className={`font-nunito capitalize  text-base  font-semibold hover:text-primary transition-all duration-300 ${navbg ? 'text-black' : 'text-white'}`} to={item.link} smooth={true} spy={true} duration={500}  activeClass="text-primary">{item.title}</Link>
                            </li>
                        ))
                    }
                    <li >
                        {/* <ThemeToggle /> */}
                    </li>
                </ul>
                <div className=' bg-white text-dark rounded-sm h-8 w-9 flex items-center justify-center cursor-pointer lg:hidden' onClick={responsivenav}>
                    {mobile ? <RxCross2 /> : <FaBarsStaggered />}
                </div>
                {/* mobile navbar */}
                <ul className={`bg-white flex flex-col  shadow-md py-10  space-y-5 items-center transform transition-all duration-500 delay-300 h-full w-52 fixed top-0  ${mobile?'left-0':'-left-64'}`}>
                    {
                        navitem.map((item, index) => (
                            <li key={item.id}>
                                <Link href={"/"}   className='font-nunito capitalize text-black text-sm  font-semibold hover:text-primary transition-all duration-300' to={item.link} smooth={true} spy={true} duration={500}  activeClass="text-primary">{item.title}</Link>
                            </li>
                        ))
                    }
                </ul>
                 
            </div>
        </header>
    )
}

export default Menubar