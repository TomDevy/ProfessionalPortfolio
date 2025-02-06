import { ProjectCard } from "@/components/sections/project-card";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Inkoret E-commerce",
    description: "A full-featured e-commerce platform built with Next.js and Stripe integration.",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
    githubUrl: "https://github.com/example/inkoret",
    liveUrl: "https://inkoret.example.com"
  },
  {
    title: "Portfolio Dashboard",
    description: "A beautiful dashboard for tracking investments and financial goals.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    githubUrl: "https://github.com/example/dashboard",
    liveUrl: "https://dashboard.example.com"
  },
  {
    title: "Task Manager",
    description: "A minimal and efficient task management application with real-time updates.",
    image: "https://images.unsplash.com/photo-1510759395231-72b17d622279",
    githubUrl: "https://github.com/example/tasks",
    liveUrl: "https://tasks.example.com"
  },
  {
    title: "Weather App",
    description: "A weather forecast application with beautiful animations and accurate data.",
    image: "https://images.unsplash.com/photo-1660592868727-858d28c3ba52",
    githubUrl: "https://github.com/example/weather",
    liveUrl: "https://weather.example.com"
  }
];

export default function Projects() {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Projects</h1>
          <p className="text-muted-foreground">
            Here are some of my recent projects. Each one was carefully crafted with attention to detail and user experience.
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
