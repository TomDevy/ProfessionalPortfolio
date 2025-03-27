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
          <div>
            <h2 className="text-2xl font-semibold">Background</h2>
            <p>
              I’m a results-driven Software Engineer specializing in building
              high-performance web applications that scale. With over 5 years of
              experience, I have designed and optimized solutions that improved
              user experience by <strong>35%</strong> and reduced page load
              times by <strong>40%</strong>.
            </p>

            <h2 className="text-2xl font-semibold mt-8">
              Skills & Technologies
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-medium">Frontend</h3>
                <ul>
                  <li>React, Next.js, TypeScript, JavaScript</li>
                  <li>Redux, React Query</li>
                  <li>Tailwind CSS</li>
                  <li>Git, GitHub</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Professional Experience</h2>
            <ul>
              <li>
                <strong>Frontend Engineer</strong> – Peregrine (January 2023 -
                November 2023)
                <ul>
                  <li>Facilitated UI build</li>
                  <li>Optimized performance. Plugged in APIs.</li>
                </ul>
              </li>
              <li>
                <strong>Frontend Engineer</strong> – Pronact (June 2022 -
                Present)
                <ul>
                  <li>
                    Collaborated with Product Designers to design and implement
                    UI
                  </li>
                  <li>
                    Worked closely with backend engineers to plug in and
                    implement APIs
                  </li>
                </ul>
              </li>
              <li>
                <strong>Fullstack Engineer</strong> – OA Stores (June 2023 -
                Present)
                <ul>
                  <li>
                    Managed and maintained the e-commerce website, ensuring
                    optimal performance and a seamless user experience using PHP.
                  </li>
                  <li>
                    Developed and integrated a custom solution for purchasing
                    and delivering eBooks directly through the platform,
                    resulting in over 500 successful purchases to date.
                  </li>
                  <li>
                    Enhanced the website’s user interface, improving
                    accessibility, navigation, and visual appeal to boost user
                    engagement.
                  </li>
                  <li>
                    Performed regular updates, bug fixes, and optimizations to
                    ensure stability and compatibility across devices.
                  </li>
                  <li>
                    Collaborated closely with the store owner to implement new
                    features and align the platform with evolving business
                    needs.
                  </li>
                </ul>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8">Education</h2>
            <ul>
              <li>
                <strong>BTech Computer Science</strong> – Federal University of
                Technology, Akure
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
