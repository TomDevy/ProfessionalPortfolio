"use client";
import React from "react";
import { ProjectCard } from "../../components/sections/project-card";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Vesspor - Real Estate Investment Platform",
    description: "A modern platform enabling individuals to invest in real estate properties seamlessly.",
    image: "https://pikwy.com/web/67e538ed0aed1225a07e6b5f",
    githubUrl: "", // Add link if you have the repo public, or leave empty
    liveUrl: "https://vesspor.com"
  },
  {
    title: "Olamide.ng - Digital Artist Portfolio",
    description: "A beautifully crafted portfolio showcasing the stunning works of a talented digital artist.",
    image: "https://pikwy.com/web/67e538012bd4367d7671e31e",
    githubUrl: "", // Add link if you have the repo public
    liveUrl: "https://olamide.ng"
  },
  {
    title: "Inkoret - Digital Artist Potfolio and Store",
    description: "A portfolio website and store for a digital artist",
    image: "https://pikwy.com/web/67e538bdfa5923757668afca",
    githubUrl: "", // Add link if you have the repo public
    liveUrl: "https://inkoret.vercel.app"
  },
  {
    title: "OA Stores - E-commerce for Digital Arts & Materials",
    description: "An e-commerce website offering digital arts and creative materials for artists and enthusiasts.",
    image: "https://pikwy.com/web/67e5384a4f92a71c5f2c0062",
    githubUrl: "", // Add link if you have the repo public
    liveUrl: "https://oastores.com"
  },
  {
    title: "Blaze Brand Limited - Migration Agency Website",
    description: "An informational website providing guidance and services for individuals looking to migrate abroad.",
    image: "https://pikwy.com/web/67e53881a778631628447913",
    githubUrl: "", // Add link if you have the repo public
    liveUrl: "https://blazebrandlimited.com"
  }
];

export default function Projects() {
  return (
    <div className="container px-12 py-12">
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
