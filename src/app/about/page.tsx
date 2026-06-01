"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function About() {
  return (
    <div className="container px-12 py-12 md: px-6 py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="prose prose-gray dark:prose-invert max-w-none"
      >
        <h1 className="text-4xl font-bold mb-6">About Me</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3">Professional Summary</h2>
              <p className="text-lg leading-relaxed">
                I am a results-oriented <strong>Software Engineer</strong> with over 5 years of experience in crafting 
                high-performance, scalable web applications. My focus is on delivering exceptional user experiences 
                through technical excellence and strategic optimization.
              </p>
              <p className="text-lg leading-relaxed">
                Throughout my career, I have consistently driven measurable impact, including improving 
                user engagement by <strong>35%</strong> and reducing page load times by <strong>40%</strong> 
                through modern architectural patterns and performance tuning.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Core Expertise</h2>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "JavaScript", "Redux", "React Query", "Tailwind CSS", "PHP", "Git"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Education</h2>
              <p className="font-medium">B.Tech Computer Science</p>
              <p className="text-muted-foreground">Federal University of Technology, Akure</p>
            </section>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
            
            <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-6 space-y-8">
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-black dark:bg-white" />
                <h3 className="text-xl font-bold">Fullstack Engineer</h3>
                <p className="text-sm font-medium text-muted-foreground">OA Stores | June 2023 – Present</p>
                <ul className="mt-3 space-y-2 list-disc list-inside">
                  <li>Engineered e-commerce solutions using PHP, driving 500+ eBook sales.</li>
                  <li>Optimized performance and visual identity, significantly boosting user retention.</li>
                  <li>Collaborated on feature roadmaps to align technical builds with business growth.</li>
                </ul>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600" />
                <h3 className="text-xl font-bold">Frontend Engineer</h3>
                <p className="text-sm font-medium text-muted-foreground">Peregrine | Jan 2023 – Nov 2023</p>
                <ul className="mt-3 space-y-2 list-disc list-inside">
                  <li>Architected scalable UI components and integrated complex third-party APIs.</li>
                  <li>Spearheaded performance optimization initiatives across core product modules.</li>
                </ul>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600" />
                <h3 className="text-xl font-bold">Frontend Engineer</h3>
                <p className="text-sm font-medium text-muted-foreground">Pronact | June 2022 – Present</p>
                <ul className="mt-3 space-y-2 list-disc list-inside">
                  <li>Bridge the gap between design and engineering by implementing pixel-perfect interfaces.</li>
                  <li>Developed robust API integration layers for seamless data flow and application stability.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
