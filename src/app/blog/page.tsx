"use client";

import { motion } from "framer-motion";
import React from "react";
import { BlogCard } from "../../components/sections/blog-card";

const posts = [
  {
    title: "Getting Started with TypeScript",
    description: "A comprehensive guide to using TypeScript in your next project. Learn about types, interfaces, and best practices.",
    date: "March 15, 2024",
    slug: "getting-started-typescript"
  },
  {
    title: "The Power of Faith in Tech",
    description: "How faith and technology can work together to create meaningful impact in our communities.",
    date: "March 10, 2024",
    slug: "faith-in-tech"
  },
  {
    title: "Building Better Habits",
    description: "Practical tips for developing good habits that will help you grow personally and professionally.",
    date: "March 5, 2024",
    slug: "building-better-habits"
  },
  {
    title: "React Performance Tips",
    description: "Learn how to optimize your React applications for better performance and user experience.",
    date: "March 1, 2024",
    slug: "react-performance-tips"
  }
];

export default function Blog() {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Blog</h1>
          <p className="text-muted-foreground">
            Thoughts on software development, faith, and personal growth.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {posts.map((post, index) => (
            <BlogCard key={post.slug} {...post} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
