import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaDatabase } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import SnapshotImg from "@/public/snapshot.png";
import pkdexappImg from "@/public/pkdexapp.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "SnapShot Web Application for OACYS Solutions",
    description:
      "Led the development of the SnapShot web application, achieving a 30% increase in real-time network device monitoring efficiency for OACYS Solutions. Engineered a Flask-based robust backend, managing large data sets and implementing RESTful API endpoints, which improved data retrieval efficiency by 40%.",
    tags: ["Flask", "HTML", "CSS", "JavaScript", "RESTful API"],
    imageUrl: SnapshotImg,
  },
  {
    title: "Simple Pokédex Android App",
    description:
      "Created a Simple Pokedex Android App that communicated with the Pokemon API.",
    tags: ["Amdrpod", "Java", "CSS", "API", "SQL"],
    imageUrl: pkdexappImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "Data Analysis",
  "Data Visualization",
  "SQL",
  "Excel",
  "Communication",
] as const;
