"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtn from "@/components/WorkSliderBtn";

const projects = [
  {
    num: "01",
    category: "backend",
    title: "project 1",
    description:
      "PT Kliring Penjaminan Efek Indonesia (KPEI) was founded in 1996 with the function of being a Clearing and Guarantee Institution or Central Counterparty (CCP) for the Indonesian capital market. Based on Law Number 8 of 1995 concerning Capital Markets, the Government of the Republic of Indonesia then established KPEI as part of the Self-Regulatory Organization (SRO) of the Indonesian capital market together with PT Bursa Efek Indonesia (BEI) and PT Kustodian Sentral Efek Indonesia (KSEI).",
    stack: [{ name: "Java" }, { name: "Springboot Framework" }],
    name: "KPEI OTCD",
    image: "/assets/work/kpei.png",
    live: "https://www.idclear.co.id/id",
    github: "",
  },
  {
    num: "02",
    category: "full stack",
    title: "project 2",
    description:
      "BPKP is a government institution that is responsible for supervising both financial and development issues in Indonesia. Each province must have 1 BPKP representative who is tasked with reporting on the development and financial budget they carry out. Based on the budget that has been given to each region. This website was created with the aim of making it easy for BPKP to monitor all development and financial activities under it.",
    stack: [{ name: "Laravel" }, { name: "Next Js" }, { name: "Chakra UI" }],
    name: "SIMA-NG",
    image: "/assets/work/bpkp.png",
    live: "https://sima-ng.bpkp.go.id",
    github: "",
  },
  {
    num: "03",
    category: "backend",
    title: "project 3",
    description: "UBC is a skin care product released by Umi Al Fatih which focuses on beauty products.",
    stack: [{ name: "Golang" }, { name: "Mux" }],
    name: "UBC",
    image: "/assets/work/ubc.jpg",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "full stack",
    title: "project 4",
    description:
      "Low-code is a software development methodology that uses a platform with a graphical interface and drag-and-drop functionality to enable users to design and build applications with little or no manual code writing. The platform provides pre-built components and visual tools that enable developers and non-technical users to create applications more quickly and efficiently.",
    stack: [{ name: "Next Js" }, { name: "Golang" }, { name: "Mongoose" }],
    name: "Bangun Lowcode",
    image: "",
    live: "",
    github: "",
  },
];
const Project = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const curIndex = swiper.activeIndex;
    setProject(projects[curIndex]);
  };
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-6xl leading-none font-bold text-transparent text-outline">{project.num}</div>
              <div className="text-4xl font-semibold">
                <h2 className="text-accent">{project.name}</h2>
              </div>
              <h2 className="text-[40px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
              {projects.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image src={project.image} fill className="object-cover" alt="Coming Soon" />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtn
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover-text-primary text-[22px] w-[44px] h-[44px] flex  justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Project;
