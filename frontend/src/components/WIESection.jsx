import React from "react";
import { motion } from "framer-motion";
import wieLogo from "../assets/images/wie-logo.png"; // Replace with the actual WIE logo path
import nermine from "../assets/images/nermine.png"; // Replace with the actual image paths
import lobna from "../assets/images/lobna.png";
import emna from "../assets/images/emna.png";
import rania from "../assets/images/rania.png";
import ons from "../assets/images/ons.png";

const WIESection = () => {
  const members = [
    {
      name: "Nermine Ezzine",
      email: "nermine.ezzine@supcom.tn",
      phone: "999999999",
      image: nermine,
    },
    {
      name: "Lobna Elabed",
      email: "lobna.elabed@supcom.tn",
      phone: "999999999",
      image: lobna,
    },
    {
      name: "Emna Belguith",
      email: "emna.belghith@supcom.tn",
      phone: "999999999",
      image: emna,
    },
    {
      name: "Rania Ezzedine",
      email: "rania.ezzedine@supcom.tn",
      phone: "999999999",
      image: rania,
    },
    {
      name: "Ons Alaya",
      email: "ons.alaya@supcom.tn",
      phone: "999999999",
      image: ons,
    },
  ];

  // Animation Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time between animations for each child
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-[#f5effb] py-10 px-6 lg:px-20">
      {/* First Row: Logo + First 3 Members */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center"
      >
        {/* Logo */}
        <motion.div variants={item} className="flex justify-center items-center">
          <div className="w-40 h-40 bg-white rounded-full shadow-md flex items-center justify-center">
            <img
              src={wieLogo}
              alt="WIE Logo"
              className="w-30 h-30 object-contain"
            />
          </div>
        </motion.div>

        {/* First Three Members */}
        {members.slice(0, 3).map((member, index) => (
          <motion.div
            key={index}
            variants={item}
            className="p-6 flex flex-col items-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-40 h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-bold text-purple-900">{member.name}</h2>
            <p className="text-sm text-gray-600">mail: {member.email}</p>
            <p className="text-sm text-gray-600">tel: {member.phone}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Second Row: Last 2 Members */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex justify-center gap-6 mt-10"
      >
        {members.slice(3).map((member, index) => (
          <motion.div
            key={index}
            variants={item}
            className="p-6 flex flex-col items-center max-w-xs"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-40 h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-bold text-purple-900">{member.name}</h2>
            <p className="text-sm text-gray-600">mail: {member.email}</p>
            <p className="text-sm text-gray-600">tel: {member.phone}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WIESection;
