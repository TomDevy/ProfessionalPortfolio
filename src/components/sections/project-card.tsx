import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from "../ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  index: number;
}

export function ProjectCard({ title, description, image, githubUrl, liveUrl, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="overflow-hidden">
        <CardHeader className="p-0">
          <div className="aspect-video overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="mb-2">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardContent>
        <CardFooter className="px-6 pb-6 pt-0 gap-4">
          {githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Code
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button size="sm" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
