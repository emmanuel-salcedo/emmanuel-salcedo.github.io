"use client";
import { motion } from 'framer-motion';

import Link from 'next/link';

export default function ResumePage() {
  return (
    <div className="container mx-auto p-8">
      <motion.h1
        className="text-5xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Resume
      </motion.h1>
      <div className="text-center mb-4">
        <Link href="/EmmanuelSalcedoResume.pdf" passHref>
          <span className="inline-block bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition cursor-pointer">
            Download Resume
          </span>
        </Link>
      </div>
      <div className="flex justify-center">
        <div className="pdf-container">
          <iframe
            id="resume-iframe"
            src="/EmmanuelSalcedoResume.pdf"
            className="pdf-iframe"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
