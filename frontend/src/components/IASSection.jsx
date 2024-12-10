import React from "react";
import ias from "../assets/images/ias.png"; // Replace with the actual GRSS logo path
import Mariem from "../assets/images/Mariem.png"; // Replace with the actual image paths
import habib from "../assets/images/habib.png";
import amal from "../assets/images/amal.png";
import seif from "../assets/images/seif.png";
import mehdi from "../assets/images/mehdi.png";

const IASSection = () => {
    const members = [
        {
          name: "Mariem Louhichi",
          email: "mariem.louhichi@supcom.tn",
          phone: "999999999",
          image: Mariem,
        },
        {
          name: "Habib Bekir",
          email: "habib.bekir@supcom.tn",
          phone: "999999999",
          image: habib,
        },
        {
          name: "Amal Dhouib",
          email: "amal.dhouib@supcom.tn",
          phone: "999999999",
          image: amal,
        },
        {
          name: "Seif Eddine GHARBI",
          email: "seifeddine.gharbi@supcom.tn",
          phone: "999999999",
          image: seif,
        },
        {
          name: "Mehdi Feki",
          email: "mehdi.feki@supcom.tn",
          phone: "999999999",
          image: mehdi,
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
                  src={ias}
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
}

export default IASSection