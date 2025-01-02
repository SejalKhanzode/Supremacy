import React from "react";
import way from "../../../assets/Images/way.png";
import engineering from "../../../assets/Images/engineering.png";
import bracket from "../../../assets/Images/bracket.png";
import { FaArrowRight } from "react-icons/fa";


const Features = () => {
  // Sample data for cards
  const cards = [
    {
      id: 1,
      imgSrc: engineering,
      title: "engineering",
      description:
        "Protecting your data at every layer is fundamental to how Intervue works",
    },
    {
      id: 2,
      imgSrc: bracket,
      title: "Compliances",
      description:
        "Enterprise grade compliance commitments where we have established controls to adhere to those commitments",
    },
    {
      id: 3,
      imgSrc: way,
      title: "Complete Roadmap",
      description: "Your roadmap to success with comprehensive guidance.",
    },
  ];

  return (
    <div className="w-[80vw]">
      <h1 className="text-center mb-14 text-2xl font-semibold">
        Features
      </h1>
      <div className="flex gap-7 m-20 mt-0 ">
        {cards.map((card) => (
          <div
            key={card.id}
            className="w-full p-4 shadow-sm shadow-gray-300 transition-all duration-700 hover:scale-110 flex flex-col"
          >
            <img
              src={card.imgSrc}
              alt={card.title}
              className="w-[40px] h-[40px]"
            />
            <div className="flex flex-col gap-2 ">
              <h3 className="mt-4 font-bold">{card.title}</h3>
              <p>{card.description}</p>
              <div className="flex-grow"></div> {/* Spacer */}
              <a href="/signup" className="absolute bottom-4 right-4 p-1 font-bold ">
                <FaArrowRight />
              </a>
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
