"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaDribbble } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { API_BASE_URL, IMAGE_BASE_URL } from "@/config/config";
const Aboutus = () => {
  const [about, setabout] = useState("");
  useEffect(() => {
    const fetchabout = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/about/data`);
        const data = await response.json();
        setabout(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchabout();
  }, []);

  const [socialmedia, setsocialmedia] = useState([]);

  useEffect(() => {
    const socialmediadata = async () => {
      const response = await fetch(
        "http://kerri-nextportfolio.test/api/social/media/data"
      );
      const data = await response.json();
      setsocialmedia(data);
      console.log(data);
    };
    socialmediadata();
  }, []);

  return (
    <section className=" mt-20 " id="about">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className=" w-full md:w-5/12">
          <Image
            src={`${IMAGE_BASE_URL}/${about.image}`}
            height={500}
            width={500}
            alt="about profile image"
            className=" w-full object-cover"
          />
        </div>
        <div className="w-full md:w-7/12 pl-0 lg:pl-10 mt-10 lg:mt-0">
          <h4 className=" font-bold text-xl md:text-3xl text-dark mt-2 mb-3 font-montseraat">
            {about.title}
          </h4>
          {/* <h2 className=' font-medium text-2xl mt-1 mb-4 capitalize'>Hello! <span className=' text-primary'>I'M Kerri Deo.</span></h2> */}
          <h2 className=" font-medium text-2xl mt-1 mb-4 capitalize">
            {about.heading}
          </h2>
          <p className="font-nunito text-dark text-sm capitalize  font-medium leading-relaxed mb-3">
            {about.details}
          </p>

          <ul className=" flex items-center space-x-3.5">
            {socialmedia.map((item, index) => {
              return (
                <li key={item.id}>
                  <Link href={item.link}>
                    <span className=" h-10 w-10 border border-dark flex items-center justify-center rounded-full hover:text-primary hover:border-primary transition-all">
                      <i className={item.icon}></i>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
