import React from 'react';
import courseimg from '../assets/images/courseimg.png'; // Replace with the actual path to your video image

const VideoCourse = () => {
  const playlist = [
    {
      title: "Part 1: Fireside chat with Sal Khan and Hadi Partovi",
      duration: "1:57",
      thumbnail: courseimg, // Replace with actual thumbnail image
    },
    {
      title: "Part 2: Demystifying AI for educators",
      duration: "5:43",
      thumbnail: courseimg,
    },
    {
      title: "Part 3: Transforming learning with AI",
      duration: "1:57",
      thumbnail: courseimg,
    },
    {
      title: "Part 4: Ensuring a responsible approach to AI",
      duration: "6:43",
      thumbnail: courseimg,
    },
    {
      title: "Part 5: Bringing AI to the classroom",
      duration: "1:57",
      thumbnail: courseimg,
    },
  ];

  return (
    <section className=" text-white bg-[#f5effb] py-12 px-6">
      <div className=" bg-[#502B85] container mx-auto flex flex-col md:flex-row rounded-xl gap-8 p-8">
        {/* Video Section */}
        <div className="md:w-2/3 relative">
        <h1 className=' font-bold mb-7'> <span className='text-[#1f152c]'>Accueil | Cours | </span>Détails du cours</h1>
          <img
            src={courseimg}
            alt="Course Video"
            className="w-full h-auto rounded-lg shadow-md"
          />
          {/* Play Button */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-800 p-4 rounded-full shadow-lg cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="white"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.868v4.264a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        {/* Playlist Section */}
        <div className="md:w-1/3">
        <h1 className='text-2xl font-bold mb-7'>Playlist</h1>
          <div className="space-y-4">
            {playlist.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-white-400 rounded-lg hover:bg-purple-500 transition cursor-pointer"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h4 className="text-sm font-semibold text-black">{item.title}</h4>
                  <p className="text-xs text-black">{item.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoCourse;
