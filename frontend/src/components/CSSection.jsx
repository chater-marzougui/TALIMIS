import React from "react";
import CSLogo from "../assets/images/CS.png"; // Replace with the actual CS logo path
import zeineb from "../assets/images/zeineb.png"; // Replace with the actual image paths
import ibtihel from "../assets/images/ibtihel.png";
import sahar from "../assets/images/sahar.png";
import dhouib from "../assets/images/dhouib.png";
import aziz from "../assets/images/aziz.png";
import boujmil from "../assets/images/boujmil.png";

const CSSection = () => {
  const members = [
    {
      name: "Zeineb Louati",
      email: "zeineb.louati@supcom.tn",
      phone: "999999999",
      image: zeineb,
    },
    {
      name: "Ibtihel Mhamdi",
      email: "ibtihel.mhamdi@supcom.tn",
      phone: "999999999",
      image: ibtihel,
    },
    {
      name: "Sahar Guebsi",
      email: "sahar.guebsi@supcom.tn",
      phone: "999999999",
      image: sahar,
    },
    {
      name: "Youssef Dhouib",
      email: "dhouib.youssef@supcom.tn",
      phone: "999999999",
      image: dhouib,
    },
    {
      name: "Mohamed Aziz Badri Khadhraoui",
      email: "khadhraoui.aziz@supcom.tn",
      phone: "999999999",
      image: aziz,
    },
    {
      name: "Youssef Boujmil",
      email: "boujmil.youssef@supcom.tn",
      phone: "999999999",
      image: boujmil,
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
              src={CSLogo}
              alt="CS Logo"
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

      {/* Second Row: Last 3 Members */}
      <div className="flex justify-center gap-6 mt-10 flex-wrap">
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

export default CSSection;
