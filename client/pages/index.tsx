import AboutMePart from "../Components/AboutMePart/AboutMePart";
import Projects from "../Components/MyProjectsPart/Projects";
import StartPart from "../Components/StartPart/StartPart";

import axios from "axios"
import { FC } from "react";

interface ProjectsProps {
  error: boolean,
  projects: any
}


const Home: FC<ProjectsProps> = (props) => {


  return (
    <>
      <div className="flex w-screen flex-col">
        <div className='flex justify-center items-center h-laptop_view_1920 '>
          <StartPart />
        </div>

        <div className='flex flex-col bg-nav-gray h-laptop_view_1920 w-full'>
          <AboutMePart />
        </div>

        <div className='flex flex-col lg:h-laptop_view_1920 w-full sm:h-[90rem]'>
          <Projects projects={props.projects} />
        </div>

      </div>
    </>
  )
}

export default Home;

export async function getServerSideProps() {

  const response = await axios.get(`${process.env.SERVER_BACKEND}/get-projects/data`);
  return {
    props: {
      error: response.data.error,
      projects: response.data.projects,
    },
  };
}
