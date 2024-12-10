import React from 'react'
import GRSS from "../assets/images/grsslogo.png"; // Replace with the actual WIE logo path
import wissal from "../assets/images/wissal.png"; // Replace with the actual image paths
import edem from "../assets/images/edem.png";
import karim from "../assets/images/karim.png";
import bachir from "../assets/images/bachir.png";
import saif from "../assets/images/saif.png";

const GRSSSection = () => {
    const members = [
        {
          name: "Wissal Boulabiar",
          email: "boulabiar.wissal@supcom.tn",
          phone: "999999999",
          image: wissal,
        },
        {
          name: "Edem Koubaa",
          email: "koubaa.edam@supcom.tn",
          phone: "999999999",
          image: edem,
        },
        {
          name: "Karim Lamouri",
          email: "Lamouri.karim@supcom.tn",
          phone: "999999999",
          image: karim,
        },
        {
          name: "Mohamed Bachir Bouaziz",
          email: "bouaziz.mohamedbachir@supcom.tn",
          phone: "999999999",
          image: bachir,
        },
        {
          name: "Saifeddine Benturkia",
          email: "benturkia.saifeddine@supcom.tn",
          phone: "999999999",
          image: saif,
        },
      ];
    
      return (
        <section className="bg-[#f5effb] py-10 px-6 lg:px-20">
          {/* First Row: Logo + First 3 Members */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
            {/* Logo */}
            <div className="flex justify-center items-center">
              <div className="w-40 h-40 bg-white rounded-full shadow-md flex items-center justify-center pb-3 ">
                <img
                  src={GRSS}
                  alt="GRSS Logo"
                  className="object-contain h-30 w-30"
                />
              </div>
            </div>
    
            {/* First Three Members */}
            {members.slice(0, 3).map((member, index) => (
              <div
                key={index}
                className="  p-6 flex flex-col items-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 object-cover rounded-lg mb-4"
                />
                <h2 className="text-lg font-bold text-purple-900">
                  {member.name}
                </h2>
                <p className="text-sm text-gray-600">mail: {member.email}</p>
                <p className="text-sm text-gray-600">tel: {member.phone}</p>
              </div>
            ))}
          </div>
    
          {/* Second Row: Last 2 Members */}
          <div className="flex justify-center gap-6 mt-10">
      {members.slice(3).map((member, index) => (
        <div
          key={index}
          className=" p-6 flex flex-col items-center max-w-xs"
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-40 h-40 object-cover rounded-lg mb-4"
          />
          <h2 className="text-lg font-bold text-purple-900">{member.name}</h2>
          <p className="text-sm text-gray-600">mail: {member.email}</p>
          <p className="text-sm text-gray-600">tel: {member.phone}</p>
        </div>
      ))}
    </div>
        </section>
      );
    };

export default GRSSSection