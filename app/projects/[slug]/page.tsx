import { notFound } from "next/navigation";
import { projectsData } from "@/lib/data";
import ProjectDetails from "./ProjectDetails";
import { generateStaticParams } from "./generateStaticParams";

export { generateStaticParams };

interface Params {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: Params) {
  const { slug } = params;

  // Find the project based on the slug
  const project = projectsData.find((proj) => proj.slug === slug);

  if (!project) {
    return notFound();
  }

  return <ProjectDetails project={project} />;
}
