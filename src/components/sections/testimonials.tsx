"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Testimonial data
const testimonials = [
  {
    name: "Olamide Agunbiade",
    role: "Digital Artist and Founder, OA Comics Ltd",
    image: "/oa.jpeg",
    feedback:
      "I've had the pleasure of working with Agboola Emmanuel to manage my websites, olamide.ng and oastores.com. His exceptional technical expertise and dedication to delivering great results have been invaluable to my online presence. Emmanuel has consistently demonstrated a deep understanding of my needs, promptly addressing any issues and implementing innovative solutions to enhance user experience. His professionalism and reliability have made our collaboration a truly enjoyable experience. I highly recommend Emmanuel to anyone seeking a skilled and trustworthy developer to manage their websites. His outstanding service has earned my trust and loyalty, and I look forward to our continued partnership.",
  },
  {
    name: "Israel Adetomokun",
    role: "Frontend Engineer",
    image: "/israel.jpg",
    feedback:
      "Emmanuel Agboola is an exceptional software engineer and an invaluable team player. Having collaborated with him on multiple projects, I’ve consistently been impressed by his keen attention to detail, problem-solving abilities, and outstanding coding skills. His contributions always elevate the project, ensuring efficiency and excellence. Whether tackling complex challenges or refining the smallest details, he approaches every task with precision and dedication. Emmanuel is not just a skilled developer, he’s the ideal person to have on any team.",
  },
  {
    name: "Daniel Coker",
    role: "Senior Software Engineer, Cowrywise",
    image: "/Dan.jpg",
    feedback:
      "I’ve known Emmanuel for about seven years now, and he’s one of the most reliable and easygoing people to work with. He’s calm, trustworthy, and always delivers on his part of a project—often going above and beyond. If you’re looking for a skilled frontend engineer who’s dependable and great to collaborate with, Emmanuel is your guy",
  },
  {
    name: "Joseph Ajele",
    role: "Founder, Pronact Technologies",
    image: "/aj.jpg",
    feedback:
      "I had the pleasure of working with Emmanuel on several projects, and his expertise in front-end development consistently impressed me. He is not only technically proficient but also an excellent collaborator, always open to feedback and proactive in finding solutions. His ability to translate complex requirements into seamless, functional designs makes him an invaluable asset to any team.",
  },
  {
    name: "Stanley O'mene",
    role: "Software Engineer",
    image: "/stan.jpg",
    feedback:
      "Working with Emmanuel was a great experience. He’s a skilled frontend developer with a strong grasp of Next.js and a keen eye for detail. Beyond his technical abilities, he’s a friendly and approachable team player who collaborates effectively and always brings a problem-solving mindset to the table. His positive attitude made working together smooth and productive. I highly recommend him for any team looking for a reliable and talented developer.",
  },
  {
    name: "Sam Obadina",
    role: "Founder, Feathers Creative",
    image: "/stan.jpg",
    feedback:
      "Working with Emmanuel was a great experience. He’s a skilled frontend developer with a strong grasp of Next.js and a keen eye for detail. Beyond his technical abilities, he’s a friendly and approachable team player who collaborates effectively and always brings a problem-solving mindset to the table. His positive attitude made working together smooth and productive. I highly recommend him for any team looking for a reliable and talented developer.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Functions to navigate testimonials
  const prevTestimonial = () =>
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const nextTestimonial = () =>
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <section className="py-16 bg-gray-100">
      <div className="container text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">What People Say</h2>
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-xl shadow-lg"
        >
          <Image
            src={testimonials[index].image}
            alt={testimonials[index].name}
            width={80}
            height={80}
            className="mx-auto rounded-full object-cover"
            style={{ aspectRatio: "1 / 1" }}
          />
          <p className="text-lg mt-4 font-medium">
            {testimonials[index].feedback}
          </p>
          <h4 className="text-xl font-semibold mt-3">
            {testimonials[index].name}
          </h4>
          <span className="text-gray-500">{testimonials[index].role}</span>
        </motion.div>

        {/* Navigation buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <Button variant="outline" onClick={prevTestimonial}>
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button variant="outline" onClick={nextTestimonial}>
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
