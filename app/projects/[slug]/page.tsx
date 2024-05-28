// app/projects/[slug]/page.tsx
import { useRouter } from 'next/navigation';
import { projectsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const project = projectsData.find((p) => p.title.toLowerCase().replace(/\s+/g, '-') === params.slug);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="container mx-auto p-8">
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {project.title}
      </motion.h1>
      <Image
        src={project.imageUrl}
        alt={project.title}
        width={800}
        height={400}
        className="rounded-lg mb-8"
      />
      <p className="text-lg mb-8">{project.text}</p>
      <ul className="flex flex-wrap gap-2 mb-8">
        {project.tags.map((tag, index) => (
          <li key={index} className="bg-primary-dark text-white px-3 py-1 rounded-full">
            {tag}
          </li>
        ))}
      </ul>
      {project.githubLink && project.githubLink.trim() !== "" && (
        <div className="flex justify-center lg:justify-start">
          <Link href={project.githubLink} passHref>
            <span className="inline-block bg-primary-dark text-white px-6 py-3 rounded-lg hover:bg-primary transition cursor-pointer">
              View on GitHub
            </span>
          </Link>
        </div>
      )}
    </div>
  );
}
