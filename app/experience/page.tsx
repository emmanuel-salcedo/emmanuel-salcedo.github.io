"use client";

import React from "react";
import { experiencesData } from "@/lib/data";
import { motion } from "framer-motion";

const Experiences: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-8 p-8">
      <h1 className="text-4xl font-bold mb-12 text-primary dark:text-primary-dark">My Professional Journey</h1>
      <div className="relative w-full max-w-3xl">
        {experiencesData.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            className="mb-16 flex w-full relative justify-center"
          >
            <div className="flex flex-col items-center bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-2xl transition-transform transform hover:-translate-y-2 relative">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                className="absolute top-[-20px] transform flex items-center justify-center rounded-full bg-primary dark:bg-primary-dark text-white text-5xl shadow-xl"
                style={{
                  width: "300px", // Fixed width for the icon
                  height: "65px", // 50% longer height for the icon
                }}
              >
                {experience.icon}
              </motion.div>
              <div className="flex flex-col items-center mt-10 mb-10 justify-center">
                <h5 className="text-sm text-gray-500 dark:text-gray-400 mt-1 text-center">{experience.date}</h5>
                <h3 className="text-xl font-semibold mt-2 mb-2 text-center text-gray-900 dark:text-gray-100">{experience.title}</h3>
                <h4 className="text-lg text-gray-600 dark:text-gray-300 text-center">
                  {experience.company}, {experience.location}
                </h4>
                <p className="text-base text-gray-800 dark:text-gray-200 mt-2 text-center">{experience.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
