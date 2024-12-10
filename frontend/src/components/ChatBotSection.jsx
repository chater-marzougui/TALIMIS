import React from 'react';
import ChatImage from '../assets/images/chatImage.png'; // Replace with the actual image path

const ChatbotSection = () => {
  return (
    <section className="py-16 px-6 bg-[#f5effb]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Chatbox */}
        <div className="relative w-full md:w-1/2 bg-gray-100 rounded-xl shadow-lg p-6">
          {/* Circular Decoration */}
          <div className="absolute top-2 left-2 w-10 h-10 bg-purple-500 rounded-full"></div>

          {/* Chat Window */}
          <div className="relative">
            <div className="absolute top-2 right-2 flex items-center space-x-2">
              <button className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center shadow">
                ✖
              </button>
              <button className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center shadow">
                ✔
              </button>
            </div>
            <div className="bg-blue-100 text-gray-700 rounded-full px-4 py-2 inline-block mt-6">
              ask me anything
            </div>
          </div>

          {/* Image in Blank Space */}
          <div className="mt-10 flex justify-center">
            <img
              src={ChatImage}
              alt="Chat Illustration"
              className="max-w-full h-auto"
            />
          </div>

          {/* Success Message */}
          <div className="absolute bottom-2 left-2 bg-green-100 text-green-700 text-xs rounded-full px-4 py-2 shadow-lg">
            Your request was sent successfully
          </div>
        </div>

        {/* Description */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold text-[#2F327D] mb-4">
            Besoin de quelques ressources ?
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Les enseignants peuvent demander à un mentor des ressources
            supplémentaires pour obtenir des outils, des stratégies ou des
            matériaux supplémentaires qui peuvent soutenir leur enseignement,
            aider à améliorer la gestion de la classe ou enrichir
            l'apprentissage des élèves.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChatbotSection;
