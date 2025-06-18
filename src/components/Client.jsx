'use client';
import React from 'react'
import Caption from './global/Caption'
import { VscQuote } from "react-icons/vsc";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {clientdata} from "../data/Client";

const Client = () => {
    return (
        <section className='mt-20 py-20 bg-[#F8F9FA]' id='client'>
            <div className="container mx-auto px-4">
                <Caption title="Our Client" details="It is a long established fact that a reader will be of a page when established fact looking at its layout." />
                <div>


                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        autoplay={true}
                        loop={true}
                    >

                        {
                            clientdata.map((item) => {
                                
                                return (
                                    <SwiperSlide>
                                        <div className=' w-full max-w-[600px] mx-auto text-center' key={item.id}>
                                            <VscQuote className=' text-center mx-auto text-6xl text-primary mb-5' />
                                            <Image src={item.image} height={100} width={100} className='mx-auto text-center rounded-full' alt='client image' />
                                            <p className=' italic capitalize text-dark2 mt-8 mb-6'>
                                                " {item.message}"
                                            </p>
                                            <strong className=' mt-2 capitalize font-medium text-sm'>{item.clientname}</strong>
                                        </div>
                                    </SwiperSlide>
                                )
                            })

                        }

                    </Swiper>



                    {/* <div className=' w-full max-w-[600px] mx-auto text-center'>
                        <VscQuote className=' text-center mx-auto text-6xl text-primary mb-5' />
                        <Image src="/images/testi-3.jpg" height={100} width={100} className='mx-auto text-center rounded-full' alt='client image' />
                        <p className=' italic capitalize text-dark2 mt-8 mb-6'>
                            " The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here."
                        </p>
                        <strong className=' mt-2 capitalize font-medium text-sm'>evony verty,envato</strong>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Client