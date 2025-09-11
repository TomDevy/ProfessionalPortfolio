"use client";
import React from "react";
import { ProjectCard } from "../../components/sections/project-card";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Vesspor - Real Estate Investment Platform",
    description: "A modern platform enabling individuals to invest in real estate properties seamlessly.",
    image: "/vesspor.jpg",
    githubUrl: "", // Add link if you have the repo public, or leave empty
    liveUrl: "https://vesspor.com"
  },
  {
    title: "OA Academy - Digital Art Academy",
    description: "An engaging platform for a digital artist's mentorship academy, featuring class schedules, resources, and curated sessions for aspiring creatives.",
    image: "/OA Academy.jpeg",
    githubUrl: "", // Add link if you have the repo public
    liveUrl: "https://www.oaacademy.online/"
  },
  {
    title: "All In One Home Inspections - Home inspection booking website",
    description: "A modern website for a U.S.-based home inspection company, featuring online booking, service details, and a seamless user experience.",
    image: "/All in One Home Inspection.jpeg",
    githubUrl: "", // Add link if you have the repo public
    liveUrl: "https://www.allinonehomeinspections.com/"
  },
  {
    title: "OA Stores - E-commerce for Digital Arts & Materials",
    description: "An e-commerce website offering digital arts and creative materials for artists and enthusiasts.",
    image: "/oastores.jpg",
    githubUrl: "", // Add link if you have the repo public
    liveUrl: "https://oastores.com"
  },
  {
    title: "Blaze Brand Limited - Migration Agency Website",
    description: "An informational website providing guidance and services for individuals looking to migrate abroad.",
    image: "/blazebrandlimited.jpg",
    githubUrl: "", // Add link if you have the repo public
    liveUrl: "https://blazebrandlimited.com"
  }
];

export default function Projects() {
  return (
    <div className="container px-12 py-12 md: px-6 py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Projects</h1>
          <p className="text-muted-foreground">
            Here are some of my recent projects. Each one was crafted with attention to detail, functionality, and user experience.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
