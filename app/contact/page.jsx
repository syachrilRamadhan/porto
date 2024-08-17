"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+62) 851 5870 5548",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "syachrilbls99@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Ciputat, Tangerang Selatan",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message =
      `Halo Syachril Ramadhan, perkenalkan saya :%0A` +
      `Firstname: ${formData.firstname}%0A` +
      `Lastname: ${formData.lastname}%0A` +
      `Email: ${formData.email}%0A` +
      `Phone: ${formData.phone}%0A` +
      `Service: ${formData.service}%0A` +
      `Message: ${formData.message}%0A%0A` +
      `Best regards,%0A${formData.firstname} ${formData.lastname}`;

    const whatsappURL = `https://wa.me/6285158705548?text=${message}`;

    window.location.href = whatsappURL;
  };

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className="py-6">
      <div className="container mxx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Lets Work Together or Hire Me !</h3>
              <p className="text-white/60">Of course, we would be very happy if we could work together on a project or in a company.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Input name="firstname" type="text" placeholder="Firstname" value={formData.firstname} onChange={handleChange} />
                <Input name="lastname" type="text" placeholder="Lastname" value={formData.lastname} onChange={handleChange} />
                <Input name="email" type="email" placeholder="Email address" value={formData.email} onChange={handleChange} />
                <Input name="phone" type="text" placeholder="Phone number" value={formData.phone} onChange={handleChange} />
              </div>
              <Select name="service" onValueChange={(value) => setFormData((prev) => ({ ...prev, service: value }))}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Website">Website</SelectItem>
                    <SelectItem value="Company Profile">Company Profile</SelectItem>
                    <SelectItem value="Landing Page">Landing Page</SelectItem>
                    <SelectItem value="Mobile Application">Mobile Application</SelectItem>
                    <SelectItem value="I Want Hire You">I Want Hire You</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea name="message" className="h-[200px]" placeholder="Type your message here." value={formData.message} onChange={handleChange} />
              <Button size="md" className="max-w-40">
                Submit Message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[20px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
