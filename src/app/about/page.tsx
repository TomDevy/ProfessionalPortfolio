"use client";

import { motion } from "framer-motion";
import React from "react";

export default function About() {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="prose prose-gray dark:prose-invert max-w-none"
      >
        <h1>About Me</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2>Background</h2>
            <p>
              I'm a software engineer with a passion for creating beautiful and functional web applications.
              With over 5 years of experience in web development, I specialize in modern JavaScript frameworks
              and have a keen eye for design.
            </p>

            <h2>Skills</h2>
            <ul>
              <li>Frontend: React, TypeScript, Next.js</li>
              <li>Backend: Node.js, Express, PostgreSQL</li>
              <li>Design: Figma, Tailwind CSS</li>
              <li>Tools: Git, Docker, AWS</li>
            </ul>
          </div>

          <div>
            <h2>Experience</h2>
            <ul>
              <li>
                <strong>Senior Frontend Engineer</strong>
                <br />
                Tech Corp • 2020 - Present
              </li>
              <li>
                <strong>Full Stack Developer</strong>
                <br />
                StartupX • 2018 - 2020
              </li>
              <li>
                <strong>Junior Developer</strong>
                <br />
                WebAgency • 2016 - 2018
              </li>
            </ul>

            <h2>Education</h2>
            <ul>
              <li>
                <strong>BS in Computer Science</strong>
                <br />
                University of Technology • 2016
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
