import React from "react";
import { FcSalesPerformance, FcApproval, FcProcess } from "react-icons/fc";
import services from "../../../assets/Images/services.png";

const iconsData = [
  { icon: <FcSalesPerformance />, text: "Monitor Progress", position: "left" },
  { icon: <FcApproval />, text: "Practice Coding", position: "bottom" },
  { icon: <FcProcess />, text: "Learn Algorithm", position: "right" },
];

const Home = () => {
  return (
    <div className="flex flex-row mt-12 ">
      <div className="w-1/2">
        <img src={services} alt="" className="h-[300px]" />
      </div>
      <div className="flex flex-col w-1/2 ">
      <h1 className="text-2xl mt-12 font-semibold">Comprehensive Solutions for Real-Time</h1>
        <p className="text-lg mt-4">
          Track your projects in real-time with our live progress monitoring
          service, ensuring transparency and informed decision-making. Enhance
          your coding skills through interactive algorithm challenges and
          structured learning paths, preparing you for technical interviews and
          career advancement.
        </p>
      </div>
    </div>
  );
};

export default Home;
