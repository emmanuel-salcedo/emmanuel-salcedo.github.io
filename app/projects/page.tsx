import Project from '@/components/project';
import Projects from '@/components/projects';
import SectionHeading from '@/components/section-heading';
import { projectsData } from '@/lib/data';
import React from 'react';

export default function About() {
  return (
    <div className="flex flex-col items-center gap-8 p-8">
      <h1 className="text-4xl font-bold mb-12 text-primary dark:text-primary-dark">My Professional Journey</h1>
      <div className="relative w-full max-w-3xl">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
