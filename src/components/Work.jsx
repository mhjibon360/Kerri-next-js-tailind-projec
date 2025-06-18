'use client';
import Image from 'next/image'
import React from 'react'
import Caption from './global/Caption'
import { useEffect, useRef } from 'react';
import { categoryname } from "../data/portfolio"
import { portfolioitem } from "../data/portfolio"

const Work = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            import('mixitup').then((mixitup) => {
                mixitup.default(containerRef.current);
            });
        }
    }, []);

    return (
        <section className=' mt-20 mb-20' id='work'>
            <div className="container mx-auto px-4">
                <Caption title="Our Works" details="It is a long established fact that a reader will be of a page when established fact looking at its layout." />

                <ul className='mb-10 flex items-center space-x-6 justify-center text-cente flex-wrap'>
                    {
                        categoryname.map((categoryitem) => {
                            return (
                                <li key={categoryitem.id}>
                                    <button data-filter={categoryitem.dataurl} className=' px-2 py-1 text-dark2 rounded-md uppercase font-medium text-sm cursor-pointer hover:bg-primary hover:border-primary hover:text-white'>{categoryitem.name}</button>
                                </li>
                            )
                        })
                    }


                </ul>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7' ref={containerRef}>

                    {
                        portfolioitem.map((portitem) => {
                            return (
                                <div className={`portfolio mix ${portitem.categoryslug}`} key={portitem.id}>
                                    <div className='overlry'></div>
                                    <Image src={portitem.image} height={500} width={300} className='portfolio-image' alt='portfolio image' />
                                    <div className='hover-content'>
                                        <small className='capitalize text-base'>{portitem.categoryname}</small>
                                        <h1 className='text-lg capitalize font-semibold'>{portitem.projecttitle}</h1>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
            </div>
        </section>
    )
}

export default Work
