// app/projects/page.tsx

"use client";
import Link from 'next/link';
import Image from 'next/image';
import { projectsData } from '@/lib/data';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  return (
    <div className="container mx-auto p-8">
      <motion.h1
        className="text-5xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projectsData.map((project) => (
          <motion.div
            key={project.slug}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-primary-dark text-white text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="text-center">
                <Link href={`/projects/${project.slug}`} passHref>
                  <span className="inline-block bg-primary text-white px-4 py-2 rounded-full transition hover:bg-primary-dark cursor-pointer">
                    Learn More
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
