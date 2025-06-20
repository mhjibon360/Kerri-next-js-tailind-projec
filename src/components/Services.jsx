"use client";
import Caption from "./global/Caption";
import { LuChartSpline } from "react-icons/lu";
import { API_BASE_URL } from "@/config/config";
import { useEffect, useState } from "react";
const Services = () => {
  const [sercap, setsercap] = useState("");
  useEffect(() => {
    const fetchap = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/services/caption/data`);
        const data = await response.json();
        setsercap(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchap();
  }, []);

  const [servicesdata, setservicesdata] = useState([]);

  useEffect(() => {
    const fetchservicesitem = async () => {
      try {
        const response = await fetch("http://kerri-nextportfolio.test/api/services/data");
        const data = await response.json();
        setservicesdata(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchservicesitem();
  }, []);

  return (
    <section className=" py-20 bg-[#F8F9FA] mt-20 mb-20" id="services">
      <div className="container mx-auto px-4">
        <Caption title={sercap.title} details={sercap.details} />
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicesdata.map((item) => {
            return (
              <div
                className="text-center shadow-sm py-8 px-10 rounded-md border border-gray-300 group"
                key={item.id}
              >
                <span className="flex items-center justify-center">
                  <i className={`${item.icon} text-center  text-4xl text-primary`}></i>
                </span>
                <h3 className=" font-semibold text-xl capitalize block mt-4 mb-1.5">
                  {item.title}
                </h3>
                <div className=" h-0.5 w-20 mx-auto bg-primary rounded-full shadow-sm group-hover:w-30 transition-all delay-100 duration-200"></div>
                <p className=" capitalize text-dark leading-normal mt-4 text-md font-medium opacity-75">
                  There are many variations of passages of but the majority have
                  suffered alteration in some form.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
