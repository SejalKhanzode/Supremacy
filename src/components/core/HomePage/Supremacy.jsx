import React from "react";
import supremacy from "../../../assets/Images/whysupremacy.png";

const Supremacy = () => {
  return (
    <div className=" w-[100vw] bg-[#e5e7eb] m-36">
      <div className="flex mt-28 mb-28 ">
        <div className="m-16 pl-10">
          <h1 className="font-bold text-lg pb-5">Enhanced Learning Experience with Structured Pathways</h1>
          <p>
            Explore a comprehensive roadmap on Data Structures and Algorithms,
            participate in interactive coding challenges, engage in real-time
            competitions, and join a vibrant community for collaborative
            learning and support. Stay updated with regular notifications to
            keep your skills sharp every day.
          </p>
        </div>
        <img src={supremacy} alt="" className="w-[500px] h-[400px] mr-36" />
      </div>
    </div>
  );
};

export default Supremacy;
