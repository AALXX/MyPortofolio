"use client";
import React, { RefObject } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

export default function StartPart() {
  return (
    <AnimatePresence>
      <motion.h1
        className="text-white text-center align-middle 2xl:text-bigHello lg:text-[25rem] text-9xl font-Exo_2 sm:mb-32 w-full md:text-[14rem]"
        initial="hidden"
        animate={{
          opacity: 0.2,
          transition: {
            delay: 1.5,
          },
        }}
        variants={{
          hidden: {
            opacity: 0,
          },
        }}
      >
        HELLO
      </motion.h1>

      <div className="flex absolute flex-col justify-center h-44 sm:mb-32 mt-14">
        <h1 className="text-white text-xs sm:text-[2rem] lg:text-5xl self-center">I 'm Alex </h1>
        <h1 className="text-white text-xs sm:text-[2rem] lg:text-5xl mt-8">Self Thought Full Stack Web Developer</h1>
      </div>
    </AnimatePresence>
  );
}
