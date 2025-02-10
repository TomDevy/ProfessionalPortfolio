"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import pics from "../../public/Emma (5).jpg"
import { GithubIcon, LinkedinIcon, XIcon } from "lucide-react";
import { Button } from "../ui/button";
import * as framerMotion from "framer-motion";
const { motion } = framerMotion;

export function Hero() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)] py-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 max-w-3xl"
      >
        <div className="space-y-4">
          <Image
            src={pics}
            alt="Profile"
            width={128}
            height={128}
            className="w-32 h-32 rounded-full mx-auto object-cover"
          />
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            Hi, I'm Emmanuel Agboola
          </h1>
          <p className="text-xl text-muted-foreground">
            A passionate software engineer focused on building beautiful and functional web applications
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/contact">Let's Connect</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/projects">View My Work</Link>
          </Button>
        </div>

        <div className="flex justify-center gap-4 pt-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/TomDevy/" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://x.com/Tom_Agboola" target="_blank" rel="noopener noreferrer">
              <XIcon className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
