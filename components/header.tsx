"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[999] bg-primary bg-opacity-80 shadow-lg backdrop-blur-md">
      <motion.div
        className="flex items-center justify-between h-[4.5rem] px-6 sm:h-[3.25rem] sm:px-12 whitespace-nowrap"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <Link href="/" className="text-xl font-semibold text-text-primary whitespace-nowrap hover:text-text-secondary transition">
          Emmanuel Salcedo
        </Link>
        <nav className="flex items-center">
          <div className="hidden md:flex items-center gap-5 text-[0.9rem] font-medium text-text-primary">
            {links.map((link) => (
              <motion.li
                className="relative list-none"
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * links.indexOf(link) }}
              >
                <Link
                  className={clsx(
                    "px-3 py-2 hover:text-text-secondary transition"
                  )}
                  href={link.hash}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-text-primary focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </nav>
      </motion.div>
      {isOpen && (
        <motion.div
          className="md:hidden bg-primary bg-opacity-95 shadow-lg backdrop-blur-md flex flex-col items-center w-full py-4"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <ul className="flex flex-col items-center gap-4 text-[1rem] font-medium text-text-primary">
            {links.map((link) => (
              <li key={link.hash} className="list-none">
                <Link
                  className="px-3 py-2 hover:text-text-secondary transition"
                  href={link.hash}
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
}
