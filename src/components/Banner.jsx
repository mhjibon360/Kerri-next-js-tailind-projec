'use client';
import Link from 'next/link'
import React from 'react'
import Typewriter from 'typewriter-effect';
const Banner = () => {
    return (
        <section className='h-[100vh] w-full bg-no-repeat bg-cover bg-center text-white' style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.739), rgba(0, 0, 0, 0.727)),url('images/header-bg.jpg')", backgroundAttachment: 'fixed' }} id='home'>
            <div className="container mx-auto px-4 flex items-center h-full justify-center text-center">
                <div className=' '>
                    <h4 className=' capitalize text-xl font-semibold'>Welcome</h4>
                    <h2 className=' text-2xl md:text-3xl lg:text-4xl xl:text-5xl capitalize font-semibold block mt-6 mb-9'>
                        <span className=' text-primary'>
                            <Typewriter
                                options={{
                                    strings: [" Photographer.", "I'M A Designer.", "I'M A Fullstack Developer.", "I'M A ui/ux expert.", "I'M A Software Enginner."],
                                    autoStart: true,
                                    loop: true,
                                    delay: 75,
                                }}
                            />
                        </span>
                    </h2>
                    <p className=' text-base leading-relaxed mb-9 w-full md:w-[600px] lg:w-[560px]'>It is a long established fact that a reader will be of a page when  established fact looking at its layout.</p>
                    <Link href={"/"} download={"images/header-bg.jpg"} className=' capitalize font-medium text-base rounded-full px-6 py-3 border border-white  mt-5 transition-all hover:bg-white hover:text-dark '>download cv</Link>
                </div>

            </div>
        </section>
    )
}

export default Banner