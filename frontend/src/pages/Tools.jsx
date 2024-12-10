import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SubscribeNow from "../components/SubscribeNow";
import TeacherToolsDashboard from "./TeacherToolsDashboard";

const Tools = () => {
  return (
    <>
      {/* <Navbar></Navbar> */}
      <TeacherToolsDashboard />
      <SubscribeNow></SubscribeNow>
      <Footer></Footer>
    </>
  );
};

export default Tools;