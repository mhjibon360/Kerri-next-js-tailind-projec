"use client";
import { useEffect, useState } from "react";
import Caption from "./global/Caption";
import Image from "next/image";
import Link from "next/link";
import { blogdata } from "../data/Blog";
import { API_BASE_URL, IMAGE_BASE_URL } from "@/config/config";
import moment from "moment";

const Blog = () => {
  const [blogcap, setblogcap] = useState("");
  useEffect(() => {
    const fetchblocap = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/blog/caption/data`);
        const data = await response.json();
        setblogcap(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchblocap();
  }, []);


  // fetch blog post

  const [blog, setblog] = useState([]);

  useEffect(() => {
    const fetchblogpost=async ()=>{
      try{
        const response=await fetch(`${API_BASE_URL}/blog/data`);
        const data=await response.json();
        setblog(data);
        console.log(data);

      }
      catch(error){
        console.log(error)
      }
    }
    fetchblogpost();
  }, [])




  return (
    <section className=" mb-20 mt-20 py-20 bg-[#F8F9FA]" id="blog">
      <div className="container mx-auto px-4">
        <Caption
          title={blogcap.title}
          details={blogcap.details}
        />
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blog.map((blogitem) => (
            <div
              className=" bg-white rounded-sm shadow-sm p-2"
              key={blogitem.id}
            >
              <Image
                src={`${IMAGE_BASE_URL}/${blogitem.image}`}
                height={400}
                width={500}
                className="rounded-sm"
                alt="blog image"
              />
              <div className=" p-3">
                <Link href={""}>
                  <h2 className=" font-semibold  mb-3 block text-xl hover:text-primary transition-all">
                    {blogitem.title}
                  </h2>
                </Link>
                <ul className=" my-4 flex items-center space-x-2.5">
                  <li>
                    {/* <span>{formatDate(blogitem.created_at)}</span> */}
                    <span> {moment(blogitem.created_at).fromNow()} </span>
                  </li>
                  <li>
                    <Link href={"/"}>
                      <span className=" text-primary font-medium">
                        {blogitem.author_name}
                      </span>
                    </Link>
                  </li>
                </ul>
                <p className=" capitalize text-dark opacity-80">
                  {blogitem.details}
                </p>
                <Link
                  href={"/"}
                  className=" font-semibold block mt-3 hover:text-primary transition-all capitalize"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
