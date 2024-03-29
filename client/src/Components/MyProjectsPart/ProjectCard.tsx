import Link from "next/link";
import React, { FC, useState, useEffect } from "react";

interface ProjectProps {
  projectName: string;
  githubLink: string;
  description: string;
  projectLogo: string;
  lastupdate: number;
  languages: string;
}

const ProjectCard: FC<ProjectProps> = (props) => {
  const [projectSelected, setProjectSelected] = useState(false);
  const [projectOverlay, setProjectOverlay] = useState(false);
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    const d = new Date(props.lastupdate).toLocaleDateString("en-us", { weekday: "long", year: "numeric", month: "short", day: "numeric" });
    setLastUpdated(d.toString());
  }, []);

  return (
    <div className="flex flex-col bg-project-card-grey w-[20rem] h-[16rem] sm:w-[35rem] sm:h-[25rem] lg:w-[25rem] 2xl:w-project-card-width  2xl:h-project-card-height">
      {projectSelected ? (
        <div>
          <div className="flex 2xl:h-40  h-[5rem] sm:h-[8rem] ">
            <img className="2xl:w-28 2xl:h-28 2xl:mt-5 2xl:ml-5 " src={`/assets/ProjectImages/${props.projectLogo}_Logo.png`} />
            <div className="flex flex-col h-full w-full 2xl:ml-5 ml-1">
              <h1 className="text-white text-[.7rem] 2xl:text-2xl sm:text-[1rem] font-Exo_2 sm:mt-5 mt-2 ">Project Name: {props.projectName}</h1>
              <div className="flex w-full flex-col sm:mt-2">
                <h1 className="text-white text-[.7rem] 2xl:text-2xl sm:text-[1rem] font-Exo_2 h-full">Description:</h1>
                <h1 className="text-white text-[.6rem] sm:text-[0.7rem] sm:mt-2 font-Exo_2 h-full">{props.description}</h1>
              </div>
            </div>
          </div>
          <hr className="w-full self-center 2xl:mt-8" />
          <div className="flex sm:h-full sm:mt-8 flex-col mt-4 h-[8rem]">
            <div className="flex w-[90%] self-center h-10 bg-project-card-field-gray ">
              <img className="sm:h-8 h-4 self-center " src="/assets/ProjectImages/git_logo.svg" />
              <Link href={props.githubLink} className="text-black sm:ml-2 overflow-hidden font-Exo_2 text-[0.9rem] self-center">
                {props.githubLink}
              </Link>
            </div>

            <div className="flex w-[90%] self-center 2xl:mt-11 mt-4  h-10 bg-project-card-field-gray">
              <h1 className="text-black ml-4 font-Exo_2 self-center">Last updated: {lastUpdated}</h1>
            </div>

            <div className="flex w-[90%] self-center 2xl:mt-11 mt-4 h-10 bg-project-card-field-gray">
              <h1 className="text-black ml-4 font-Exo_2 self-center">Language used:</h1>
              <p className="ml-2 font-Exo_2 self-center">{props.languages}</p>
            </div>
            <button
              className="h-7 self-center mr-4 2xl:mt-14 mt-5"
              onClick={() => {
                setProjectSelected(!projectSelected);
              }}
            >
              <img className="sm:h-9 h-6" src="/assets/Projects/flipPage.svg" />
            </button>
          </div>
        </div>
      ) : (
        <div
          className="flex cursor-pointer h-full flex-col justify-center"
          onClick={() => {
            setProjectSelected(!projectSelected);
          }}
          onMouseEnter={() => {
            setProjectOverlay(true);
          }}
          onMouseLeave={() => {
            setProjectOverlay(false);
          }}
        >
          {projectOverlay ? (
            <div className="2xl:flex hidden flex-col justify-center w-[20rem] h-[12rem] sm:w-project-card-width sm:h-project-card-height bg-black absolute opacity-70">
              <img className="w-20 self-center" src="/assets/Projects/search.svg" alt="" />
            </div>
          ) : null}
          <img className="2xl:w-80 2xl:h-80 w-44 h-44 sm:w-52 sm:h-52 self-center" src={`/assets/ProjectImages/${props.projectLogo}_Logo.png`} />
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
