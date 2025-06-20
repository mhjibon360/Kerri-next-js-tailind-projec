"use client";
import { useEffect, useState } from "react";
import Caption from "./global/Caption";
import { contactinfo } from "../data/Contact";
import { API_BASE_URL } from "@/config/config";
const Contact = () => {
  const [contactcap, setcontactcap] = useState("");
  useEffect(() => {
    const fetchcontacap = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/contact/caption/data`);
        const data = await response.json();
        setcontactcap(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchcontacap();
  }, []);

  // contact item api data
  const [contact, setcontact] = useState([]);
  useEffect(() => {
    const fetchcontact = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/contact/data`);
        const data = await response.json();
        setcontact(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchcontact();
  }, []);

  return (
    <section className=" mb-20" id="contact">
      <div className="container mx-auto px-4">
        <Caption
          title={`${contactcap.title}`}
          details={`${contactcap.details}`}
        />

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {contact.map((citem) => {
            const Icon = citem.icon;
            return (
              <div className=" text-center p-4" key={citem.id}>
                <span className="text-center text-5xl  text-primary flex items-center justify-center">
                  <i className={`${citem.icon} text-center text-5xl  text-primary flex items-center justify-center`}></i>
                </span>
                <h3 className=" text-xl font-semibold capitalize mt-2 mb-1">
                  {citem.title}
                </h3>
                <small className=" text-lg font-normal">{citem.details}</small>
              </div>
            );
          })}
        </div>

        <div className=" mt-10">
          <form action="" method="post">
            <div className=" flex items-center space-x-0 lg:space-x-5 space-y-4 lg:space-y-0 flex-col lg:flex-row my-4">
              <input
                type="text"
                className=" w-full px-3 py-3 border border-gray-400 rounded-sm focus:outline-none focus:border-primary transition-all duration-150 font-medium"
                autoComplete="off"
                placeholder=" Your Name.."
              />
              <input
                type="text"
                className=" w-full px-3 py-3 border border-gray-400 rounded-sm focus:outline-none focus:border-primary transition-all duration-150 font-medium"
                autoComplete="off"
                placeholder=" Your E-mail.."
              />
            </div>
            <div className="my-4">
              <input
                type="text"
                className=" w-full px-3 py-3 border border-gray-400 rounded-sm focus:outline-none focus:border-primary transition-all duration-150 font-medium"
                autoComplete="off"
                placeholder=" Your Subject.."
              />
            </div>
            <div className="my-4">
              <textarea
                className=" w-full px-3 py-3 border border-gray-400 rounded-sm focus:outline-none focus:border-primary transition-all duration-150 font-medium"
                autoComplete="off"
                placeholder=" Your Message.."
              ></textarea>
            </div>
            <div className="my-4 text-end">
              <button className=" rounded-sm px-6 py-3.5 font-medium text-white uppercase  bg-primary cursor-pointer text-end">
                send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
