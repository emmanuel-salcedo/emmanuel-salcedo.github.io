// components/footer.tsx
"use client";

import Link from 'next/link';
import { FaHome, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-primary text-text-dark py-4 w-full mt-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <Link href="/" passHref>
            <div className="bg-primary-dark hover:bg-primary-dark text-text-primary font-bold p-3 rounded-full transition duration-300 cursor-pointer flex items-center justify-center">
              <FaHome size={24} />
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/emmanuelsalcedo/" passHref>
            <div className="bg-primary-dark hover:bg-primary-dark text-text-primary font-bold p-3 rounded-full transition duration-300 cursor-pointer flex items-center justify-center">
              <FaLinkedin size={24} />
            </div>
          </Link>
          <Link href="https://github.com/emmanuel-salcedo" passHref>
            <div className="bg-primary-dark hover:bg-primary-dark text-text-primary font-bold p-3 rounded-full transition duration-300 cursor-pointer flex items-center justify-center">
              <FaGithub size={24} />
            </div>
          </Link>
        </div>
        <p className="text-sm text-text-primary">
          &copy; {new Date().getFullYear()} Emmanuel Salcedo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
