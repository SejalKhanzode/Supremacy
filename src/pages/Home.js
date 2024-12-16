import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdQuiz } from "react-icons/md";
import { BsClipboardDataFill } from "react-icons/bs";
import { DiCodeigniter } from "react-icons/di";
import { HiMiniCodeBracketSquare } from "react-icons/hi2";

// components
import Services from "../components/core/HomePage/Services";
import Features from "../components/core/HomePage/Features";
import WhySupremacy from "../components/core/HomePage/Supremacy";
import StartLearning from "../components/core/HomePage/StartLearning";
import FAQs from "../components/core/HomePage/FAQs";

const Home = () => {
  return (
    <div>
      {/*Section1  */}
      <div
        className="relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center 
      justify-between"
      >
        {/* section 1 */}
        <div>
          <div className="flex flex-col items-center justify-center h-screen">
            <div className="text-center">
              <h1 className="text-3xl">
                Fuel Your Future with <span className="font-semibold">Supreme DSA Mastery!</span>
              </h1>
              <p className="text-md text-richblack-700">
                Unleash Your Potential - Supremacy Awaits Your Algorithmic
                Journey.
              </p>
            </div>

            <div class="flex flex-row gap-12 mt-10">
              <div class="items-center">
                <MdQuiz class="w-8 h-8 ml-5" />
                <p class="ml-2">Quizzes</p>
              </div>
              <div class=" items-center">
                <BsClipboardDataFill class="w-8 h-8 ml-6" />
                <p class="ml-2">Analytics</p>
              </div>
              <div class="items-center">
                <DiCodeigniter class="w-8 h-8 ml-2" />
                <p class="ml-2">DSA</p>
              </div>
              <div class="items-center">
                <HiMiniCodeBracketSquare class="w-8 h-8 ml-4" />
                <p class="ml-2">Coding</p>
              </div>
            </div>

            <div>
              <Link to={"/signup"}>
                <div
                  className=" group mt-8 p-1 mx-auto rounded-full bg-black font-bold text-white
            transition-all duration-200 hover:scale-95 w-fit"
                >
                  <div
                    className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
                transition-all duration-200"
                  >
                    <p>Explore now</p>
                    <FaArrowRight />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* section 2 */}
        <Services />
        <Features />
        <WhySupremacy />
        <StartLearning />
        <FAQs />
      </div>
    </div>
  );
};

export default Home;
