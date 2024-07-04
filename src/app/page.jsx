"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Homepage = () => {
  const router = useRouter();
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleDownloadCV = () => {
    window.open('./CV.pdf', '_blank');
  }

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 100) {
      router.push('/about');
    }
  }, [scrollPosition, router]);

  return (
    <motion.div
      className="h-screen overflow-hidden"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="w-full h-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-40">
        {/* Text Container */}
        <div className="h-full flex flex-col gap-6 items-center justify-center">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center">
            This is <span className="underline">Nazmul</span>  <span className="underline">Hossain</span>
          </h1>
          {/* Description */}
          <p className="text-center w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
            Dedicated to building responsive and engaging websites, I merge functionality with design to deliver impactful digital experiences. Lets create something extraordinary together.
          </p>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <button
              className="p-4 rounded-lg ring-1 ring-black bg-black text-white"
              onClick={handleDownloadCV}
            >
              DownLoad CV
            </button>
            <button
              className="p-4 rounded-lg ring-1 ring-black"
              onClick={() => router.push('/contact')}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;