"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[999] bg-primary bg-opacity-80 dark:bg-primary-dark dark:bg-opacity-75 shadow-lg backdrop-blur-md">
      <motion.div
        className="flex items-center justify-between h-[4.5rem] px-6 sm:h-[3.25rem] sm:px-12"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="text-xl font-semibold text-text-primary dark:text-text-dark">
          Emmanuel Salcedo
        </div>
        <nav className="flex items-center">
          <ul className="flex items-center gap-5 text-[0.9rem] font-medium text-text-primary dark:text-text-dark">
            {links.map((link) => (
              <motion.li
                className="relative"
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * links.indexOf(link) }}
              >
                <Link
                  className={clsx(
                    "px-3 py-2 hover:text-text-secondary dark:hover:text-text-light transition"
                  )}
                  href={link.hash}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
