"use client";
import { motion } from "framer-motion";


const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="w-full h-screen px-4 sm:px-8 md:px-12 lg:px-16 xl:px-40">
        {/* Text Container */}
        <div className="h-full flex flex-col gap-6 items-center justify-center">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center">
            Crafting experiences
          </h1>
          {/* Description */}
          <p className="text-center w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor
            illo facere vero! Laborum hic unde impedit eaque laboriosam quibusdam!
            Quas doloribus, minus blanditiis ab dolor ipsum dicta impedit
            laboriosam!
          </p>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
