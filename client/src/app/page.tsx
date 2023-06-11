"use client";
import AboutMePart from "../Components/AboutMePart/AboutMePart";
import Projects from "../Components/MyProjectsPart/Projects";
import StartPart from "../Components/StartPart/StartPart";
const CardData = require("../../public/assets/Projects/projects.json");

const Home = () => {
  return (
    <>
      <div className="flex w-screen flex-col">
        <div className="flex justify-center items-center h-laptop_view_1920 ">
          <StartPart />
        </div>

        <div className="flex flex-col bg-nav-gray h-laptop_view_1920 w-full">
          <AboutMePart />
        </div>

        <div className="flex flex-col lg:h-laptop_view_1920 w-full sm:h-[90rem]">
          <Projects projects={CardData} />
        </div>
      </div>
    </>
  );
};

export default Home;
