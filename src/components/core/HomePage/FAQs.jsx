import React from "react";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const FAQs = () => {
  const faqData = [
    {
      question: "What about language support?",
      answer:
        "We support a list of the main languages: Javascript, Ruby, Python, C#, Java, PHP, C, C++, Objective-C, Swift, Elixir, Typescript, Bash, Clojure, Haskell, Go and Coffeescript and many more.",
    },
    {
      question: "Do I need to be technical to use this?",
      answer:
        "Not at all, if you dont know the first thing about computers this will still work for you. Our system evaluates your prospective developers code and programming aptitude",
    },
    {
      question: "What is the difficulty level of questions?",
      answer:
        "The difficulty level of questions is variable. There are questions ranging from easy to difficult levels and hence gives the students a chance to test all kinds of waters.",
    },
  ];
  // State to keep track of the active FAQ item (which one is open)
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to toggle the active FAQ item
  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className=" bg-[#f4e7e7] w-[100vw] ">
      <div className="m-12 flex">
        <div className="w-[40%]">
          <h1 className="font-bold text-2xl m-5">FAQs</h1>
          <p className="text-lg m-5">Here are frequently asked questions to clear all your doubts.</p>
        </div>
        
          <div className="w-[50%] ml-10">
            
            <ul className="">
           
              {faqData.map((faq, index) => (
                <li
                  key={index}
                  className={`faq-item ${
                    index === activeIndex ? "active" : ""
                  }`}
                > <div className="border-b-2 border-richblack-800"></div>
                  <div
                    className="m-4 text-[1rem] font-semibold"
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.question}
                    <span className="float-right"><FaChevronDown/>  </span>
                  </div>
                  {index === activeIndex && (
                    <div className="m-4 text-[1rem]">
                      <span
                        className={`dropdown-icon ${
                          index === activeIndex ? "active" : ""
                        }`}
                      ></span>
                      {faq.answer}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
      </div>
    </div>
  );
};

export default FAQs;
