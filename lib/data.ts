import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaDatabase } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import SnapshotImg from "@/public/Snapshot.png";
import pkdexappImg from "@/public/pkdexapp.png";

export const links = [
  {
    name: "Home",
    hash: "/",
  },
  {
    name: "About",
    hash: "/about",
  },
  {
    name: "Projects",
    hash: "/projects",
  },
  {
    name: "Experience",
    hash: "/experience",
  },
  {
    name: "Resume",
    hash: "/resume",
  },
] as const;

export const experiencesData = [
  {
    title: "Hadoop Framework Intern on PayPal Hadoop Platform (SRE / OPS) Team",
    company: "PayPal Inc.",
    location: "San Jose, CA",
    description:
      "Enhanced data processing efficiency and reliability on the PayPal Hadoop Platform, contributing to a 20% improvement in system performance through Python scripting for data manipulation. Performed advanced monitoring and troubleshooting, safeguarding the integrity of critical big data infrastructure and enabling a 15% increase in analytics accuracy and fraud detection efficiency. Initiated strategic technical improvements, resolving system performance issues and enhancing overall system reliability by 25%.",
    icon: React.createElement(FaPaypal),
    date: "January 2020 - March 2020",
  },
  {
    title: "Data Analyst Intern on Site Reliability Engineering: Actionable Insights Team",
    company: "PayPal Inc.",
    location: "San Jose, CA",
    description:
      "Developed and executed 100+ advanced SQL queries per month for comprehensive data analysis, supporting strategic business decisions. Created and optimized 10+ dashboards for real-time monitoring of key performance indicators, improving data visualization and enhancing stakeholder understanding by 40%. Presented insights from complex datasets to stakeholders, influencing a 10% improvement in decision-making efficiency. Conducted rigorous data validation and cleaning, enhancing the accuracy of analytical outputs by over 95%. Streamlined data collection processes in collaboration with cross-functional teams, boosting data analysis efficiency by 20% and operational resilience by 30%.",
    icon: React.createElement(FaPaypal),
    date: "March 2020 - August 2020",
  },
  {
    title: "Studio Manager/Project Manager",
    company: "Vision Latina Network",
    location: "San Jose, CA/Los Angeles, CA",
    description:
      "Led cross-functional teams in executing 15+ high-stakes projects annually, enhancing studio productivity by 20%. Implemented a data-driven decision-making framework that improved operational efficiency by 25% and contributed to a 30% organizational growth over 3 years. Coordinated deployment of innovative technology solutions, reducing project delivery times by 15% while maintaining 100% compliance with high production standards. Developed strategic plans to optimize studio operations and resource allocation, resulting in significant cost savings. Mentored junior staff, fostering a collaborative and high-performing team culture.",
    icon: React.createElement(FaBuilding),
    date: "August 2020 - July 2023",
  },
  {
    title: "Google Certification",
    company: "Google",
    location: "Online",
    description:
      "Completed Google Data Analytics Professional Certificate. Gained expertise in data analysis, data visualization, and data-driven decision-making. Developed skills in using Google Analytics, SQL, R, and Tableau. Applied knowledge to real-world projects, enhancing proficiency in data manipulation and presentation.",
    icon: React.createElement(FaGoogle),
    date: "2023",
  },
  {
    title: "Bachelor's Degree in Computer Science",
    company: "California State University, Monterey Bay",
    location: "Seaside, CA",
    description:
      "Graduated from California State University, Monterey Bay in December 2023. Acquired comprehensive knowledge in computer science principles, software development, data structures, algorithms, and database management. Completed various projects demonstrating practical application of theoretical knowledge. Actively participated in coding competitions and hackathons, enhancing problem-solving and teamwork skills.",
    icon: React.createElement(LuGraduationCap),
    date: "December 2023",
  },
  {
    title: "Full-Stack Developer",
    company: "Freelancer",
    location: "Los Angeles, CA",
    description:
      "Currently working as a full-stack developer with a stack including React, Next.js, TypeScript, Tailwind, Prisma, and MongoDB. Open to full-time opportunities. Built and maintained scalable web applications, improving user experience and system performance. Collaborated with cross-functional teams to deliver high-quality software solutions on time. Engaged in continuous learning and professional development to stay current with industry trends and technologies.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "SnapShot Web Application for OACYS Solutions",
    description: "A web application to monitor network devices in real-time.",
    text:
      "Led the development of the SnapShot web application, achieving a 30% increase in real-time network device monitoring efficiency for OACYS Solutions. Engineered a Flask-based robust backend, managing large data sets and implementing RESTful API endpoints, which improved data retrieval efficiency by 40%. Designed a dynamic frontend with HTML, CSS, and JavaScript, incorporating interactive data visualizations that boosted user engagement by 50%. Conducted statistical analysis on network performance data, uncovering trends that led to a 20% improvement in network optimization strategies. Automated ETL processes for network data, reducing manual effort by 60% and minimizing data processing errors by over 90%. Collaborated with IT infrastructure teams, aligning KPI reporting with organizational objectives and driving a 25% enhancement in data-centric network management solutions.",
    tags: ["Flask", "HTML", "CSS", "JavaScript", "RESTful API"],
    imageUrl: SnapshotImg,
    slug: "snapshot-web-application",
    githubLink: "https://github.com/itoptics/Snapshot",
  },
  {
    title: "Simple Pokédex Android App",
    description: "An Android app to explore Pokémon data.",
    text:
      "Created a Simple Pokédex Android App that communicated with the Pokemon API, providing a user-friendly interface to explore Pokémon data. Implemented efficient data retrieval and display mechanisms using Java and SQL, ensuring smooth user experience. The app allows users to search for Pokémon, view detailed information about each Pokémon, and maintain a list of their favorite Pokémon. The project involved designing a clean and intuitive UI, optimizing data requests to the API, and ensuring that the app performs well on various Android devices.",
    tags: ["Android", "Java", "CSS", "API", "SQL"],
    imageUrl: pkdexappImg,
    slug: "simple-pokedex-android-app",
    // No GitHub link for this project
  },
] as const;

export const skillsData = [
  "SQL",
  "Python",
  "Java",
  "C++",
  "JavaScript",
  "HTML",
  "CSS",
  "Tableau",
  "Flask",
  "Git",
  "Data Analysis",
  "Data Visualization",
  "Excel",
  "Communication",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Django",
  "Framer Motion",
  "R",
  "Google Analytics",
] as const;
