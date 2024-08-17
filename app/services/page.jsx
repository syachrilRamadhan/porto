"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Website",
    description:
      "Get a website specifically designed to meet your business needs. We offer professional, responsive and user-friendly website solutions. From an attractive design to advanced features, your website will be an effective tool for attracting customer attention and increasing your online visibility.",
    href: "#",
  },
  {
    num: "02",
    title: "Company Profile",
    description:
      "We develop effective and engaging landing pages to help you achieve your marketing and conversion goals. With a design specifically designed to grab visitors' attention and encourage action, your landing page will become an important tool in your marketing campaign.",
    href: "#",
  },
  {
    num: "03",
    title: "Landing Page",
    description:
      "Make a strong first impression with our company profile site designed to showcase the uniqueness and strengths of your business. A professional and informative company profile will help build credibility and provide potential customers with the information they need.",
    href: "#",
  },
  {
    num: "04",
    title: "Mobile Application",
    description:
      "Develop intuitive and efficient mobile applications to increase user engagement and expand your business reach. We build reliable apps for multiple platforms, including iOS and Android, with features designed specifically to meet your needs.",
    href: "#",
  },
];

const Service = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container max-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, trasnsition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-bold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/30 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
