"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <h2 className="text-4xl font-bold p-3">About me</h2>
      <p className="mb-3">
        Hello! I&apos;m Emmanuel. I recently graduated from{" "}
        <span className="font-medium">California State University, Monterey Bay (CSU MB)</span> with a{" "}
        <span className="font-medium">bachelor&apos;s degree in Computer Science</span>. I am currently looking for my next role as a{" "}
        <span className="font-medium">Data Analyst</span>. I have a passion for technology, data, and{" "}
        <span className="italic">storytelling through data visualization</span>. My core stack includes{" "}
        <span className="font-medium">React, Next.js, Node.js, and MongoDB</span>, and I am skilled in Python, SQL, and Tableau. 
        I am always looking to learn new technologies and improve my skills.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I love playing the guitar and piano, traveling with my wife, and hanging out with my Corgi named Nano. 
        I enjoy exploring new places and trying out different cuisines. I am also passionate about{" "}
        <span className="font-medium">learning new things</span>. Currently, I am learning about{" "}
        <span className="font-medium">Japanese culture and language</span> in preparation for my upcoming trip to Japan. 
        I believe in continuous growth and am always eager to take on new challenges.
      </p>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          duration: 0.2,
        }}
        className="mx-auto mt-8 flex flex-col items-center"
      >
        <Image
          src="/nano.jpg"
          alt="Emmanuel and nano at google"
          width={192}
          height={192}
          quality={95}
          priority={true}
          className="h-48 w-48 rounded-lg object-cover border-[0.35rem] border-white shadow-xl"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            type: "tween",
            duration: 0.3,
          }}
          className="mt-4 border border-white p-2 rounded-lg shadow-md"
        >
          <p className="text-gray-700">Nano and Me at Google Campus</p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
