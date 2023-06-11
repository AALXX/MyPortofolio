"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function Footer() {
  const router = useRouter();

  const MoveToFirstPage = () => {
    if (router.pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }, 20);
    } else {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="flex bg-footer-gray lg:h-24 h-14  sm:h-[6rem] w-full justify-between mb-auto">
      <div className="flex sm:flex-col">
        <img className="h-8 w-8 ml-4 mt-3" src="/favicon.ico" />
        <h1 className="mt-auto sm:mt-2 lg:text-xs sm:text-[.55rem] text-[.4rem] font-Exo_2 mb-3 ml-4">&copy; Official Alex Serban Portofolio, 2022,All rights reserved.</h1>
      </div>
      <div className="hidden sm:flex ml-20 flex-col self-center sm:mt-5">
        {/* <AnimLink to="about" spy={true} smooth={true} offset={-80} duration={500}>
          <button className="sm:text-xs text-[.3rem] font-Exo_2 " onClick={MoveToFirstPage}>
            About Me
          </button>
        </AnimLink> */}

        {/* <AnimLink to="projects" spy={true} smooth={true} offset={-80} duration={500}>
          <button className="sm:text-xs text-[.3rem] font-Exo_2 lg:mt-2" onClick={MoveToFirstPage}>
            My Projects
          </button>
        </AnimLink> */}

        <Link href={"/contact"}>
          <button className="sm:text-xs text-[.4rem] font-Exo_2 lg:mt-2">Contact Me</button>
        </Link>
      </div>
      <div className="flex w-80 justify-center">
        <Link href={"https://www.instagram.com/s3rbvn/"} className="sm:h-7 h-5 self-center sm:mt-8 mr-4 cursor-pointer">
          <img className="sm:h-7 h-5" src="/assets/footer/instagram-logo.svg" />
        </Link>

        <Link href={"https://www.fiverr.com/alexx_s"} className="sm:h-7 h-5 self-center sm:mt-8 mr-4 cursor-pointer">
          <img className="sm:h-7 h-5" src="/assets/footer/fiverr-logo.svg" />
        </Link>

        <Link href={"https://github.com/AALXX"} className="sm:h-7 h-5 self-center sm:mt-8 mr-4 cursor-pointer">
          <img className="sm:h-7 h-5" src="/assets/footer/github-logo.svg" />
        </Link>
      </div>
    </div>
  );
}
