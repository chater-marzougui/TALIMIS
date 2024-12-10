import React from "react";
import RAS from "../assets/images/RAS.png"; 
import hibatollah from "../assets/images/hibatollah.png"; 
import chater from "../assets/images/chater.png";
import raed from "../assets/images/raed.png";
import brahim from "../assets/images/brahim.png";
import youssef from "../assets/images/youssef.png";

const RASSection = () => {
  const members = [
    {
      name: "Hibatoallah Gouia",
      email: "hibatoallah.gouiaa@supcom.tn",
      phone: "999999999",
      image: hibatollah,
    },
    {
      name: "Chater Marzougui",
      email: "chater.marzougui@supcom.tn",
      phone: "999999999",
      image: chater,
    },
    {
      name: "Raed Ben Romdhane",
      email: "raed.benromdhane@supcom.tn",
      phone: "999999999",
      image: raed,
    },
    {
      name: "Brahim Ghouma",
      email: "brahim.benlamineghouma@supcom.tn",
      phone: "999999999",
      image: brahim,
    },
    {
      name: "Youssef Chaari",
      email: "youssef.chaari@supcom.tn",
      phone: "999999999",
      image: youssef,
    },
  ];

  return (
    <section className="bg-[#f5effb] py-10 px-6 lg:px-20">
    {/* First Row: Logo + First 3 Members */}
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
      {/* Logo */}
      <div className="flex justify-center items-center">
        <div className="w-40 h-40 bg-white rounded-full shadow-md flex items-center justify-center pb-3">
          <img
            src={RAS}
            alt="GRSS Logo"
            className="object-contain h-30 w-30"
          />
        </div>
      </div>

      {/* First Three Members */}
      {members.slice(0, 3).map((member, index) => (
        <div key={index} className="p-6 flex flex-col items-center">
          <img
            src={member.image}
            alt={member.name}
            className="w-40 h-40 object-cover rounded-lg mb-4"
          />
          <h2 className="text-lg font-bold text-purple-900">{member.name}</h2>
          <p className="text-sm text-gray-600">
            mail: {member.email}
          </p>
          <p className="text-sm text-gray-600">
            tel: {member.phone}
          </p>
        </div>
      ))}
    </div>

    {/* Second Row: Last 2 Members */}
    <div className="flex justify-center gap-6 mt-10">
      {members.slice(3).map((member, index) => (
        <div key={index} className="p-6 flex flex-col items-center max-w-xs">
          <img
            src={member.image}
            alt={member.name}
            className="w-40 h-40 object-cover rounded-lg mb-4"
          />
          <h2 className="text-lg font-bold text-purple-900">{member.name}</h2>
          <p className="text-sm text-gray-600">
            mail: {member.email}
          </p>
          <p className="text-sm text-gray-600">
            tel: {member.phone}
          </p>
        </div>
      ))}
    </div>
  </section>
   
  );
};

export default RASSection;
