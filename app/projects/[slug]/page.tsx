// app/projects/[slug]/page.tsx
"use client";
import { notFound } from "next/navigation";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";

export default function ProjectPage() {
  const { slug } = useParams();

  // Find the project based on the slug
  const project = projectsData.find((proj) => proj.slug === slug);

  if (!project) {
    return notFound();
  }

  return (
    <div className="container mx-auto p-8">
      <motion.h1
        className="text-5xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {project.title}
      </motion.h1>
      <div className="flex flex-col lg:flex-row items-center mb-12">
        <div className="lg:w-2/3 mb-6 lg:mb-0">
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={800}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/3 lg:ml-12 mt-6 lg:mt-0">
          <h2 className="text-3xl font-semibold mb-4">Tech Stack</h2>
          <ul className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <li
                key={index}
                className="bg-primary-dark px-3 py-1 text-sm uppercase tracking-wide text-white rounded-full"
              >
                {tag}
              </li>
            ))}
          </ul>
          {project.githubLink && (
            <div className="flex justify-center lg:justify-start">
              <Link href={project.githubLink} passHref>
                <span className="inline-block bg-primary-dark text-white px-6 py-3 rounded-lg hover:bg-primary transition cursor-pointer">
                  View on GitHub
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Description</h2>
        <p className="text-lg text-gray-800 leading-relaxed">
          {project.text}
        </p>
      </div>
    </div>
  );
}
