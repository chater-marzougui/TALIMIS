import React from "react";
import ChatSearch from "../components/ChatSearch";
import CourseContent from "../components/CourseContent";
import Footer from "../components/Footer";
import SubscribeNow from "../components/SubscribeNow";

const BrainMate = () => {
  return (
   <>
     <ChatSearch />
     <CourseContent />
     <SubscribeNow></SubscribeNow>
     <Footer />
   </>
  );
};

export default BrainMate;
