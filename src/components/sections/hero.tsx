"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, XIcon } from "lucide-react";
import { Button } from "../ui/button";
import * as framerMotion from "framer-motion";

const { motion } = framerMotion;

// Code snippets to be scattered in the background
const codeSnippets = [
  "function sayHello() { console.log('Hello, world!'); }",
  "const user = { name: 'Emmanuel', role: 'Frontend Engineer' };",
  "const fetchData = async () => { const res = await fetch('/api'); }",
  "for (let i = 0; i < 10; i++) { console.log(i); }",
  "<Hero title='Welcome to my Portfolio' />",
  "export const skills = ['React', 'Next.js', 'TypeScript'];",
];

// Function to generate random positions for snippets
const getRandomPosition = () => ({
  top: `${Math.random() * 80}%`,
  left: `${Math.random() * 80}%`,
  transform: `rotate(${Math.random() * 15 - 7.5}deg)`, // Slight rotation
});

// Floating and pulsing animation variants
const floatingAnimation = {
  initial: { opacity: 0.3, y: 0 },
  animate: {
    opacity: [0.3, 0.5, 0.3], // Pulsing effect
    y: [-5, 5, -5], // Floating effect
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function Hero() {
  return (
    <div className="relative w-full min-h-[calc(100vh-3.5rem)] flex flex-col items-center justify-center py-12 text-center overflow-hidden bg-white text-black">
      {/* Scattered Code Background with Floating and Pulsing Effects */}
      {codeSnippets.map((snippet, index) => (
        <motion.span
          key={index}
          className="absolute text-gray-400 text-xs sm:text-sm font-mono"
          style={getRandomPosition()}
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
        >
          {snippet}
        </motion.span>
      ))}

      {/* Main Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 space-y-6 max-w-3xl"
      >
        <div className="space-y-4">
          <Image
            src="/Emma (5).jpg"
            alt="Profile"
            width={128}
            height={128}
            className="w-32 h-32 rounded-full mx-auto object-cover"
          />
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            Hi, I'm Emmanuel Agboola
          </h1>
          <p className="text-xl text-muted-foreground">
            I specialize in building high-performance, scalable web applications
            that enhance user experience and drive business growth.
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <Button variant="outline" asChild size="lg">
            <Link href="/contact">Hire me</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/projects">View My Work</Link>
          </Button>
        </div>

        <Button variant="outline" size="lg" asChild>
          <a href="/Emmanuel Agboola_Resume (2).pdf" download>
            Download Resume
          </a>
        </Button>

        <div className="flex justify-center gap-4 pt-4">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/TomDevy/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <GithubIcon className="w-5 h-5" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/emmanuel-agboola-tom"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <LinkedinIcon className="w-5 h-5" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://x.com/Tom_Agboola"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <XIcon className="w-5 h-5" />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
