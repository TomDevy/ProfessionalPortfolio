"use client";
import React from "react";
import Image from "next/image";
import * as framerMotion from "framer-motion";

const { motion } = framerMotion;

// Replace with actual logo image paths in your public folder
const companyLogos = [
  "/logos/OA.png",
  "/logos/Inkoret.png",
  "/logos/BrandedHeart.png",
  "/logos/BlazeBrand.png",
  "/logos/Vesspor.svg",
//   "/logos/company6.png",
];

// Animation settings for smooth infinite scrolling effect
const marqueeVariants = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      ease: "linear",
      duration: 10,
      repeat: Infinity,
    },
  },
};

export function CompanyLogos() {
  return (
    <div className="relative w-full bg-gray-100 py-8 overflow-hidden">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Worked with brands like
      </h2>
      <div className="relative w-full flex overflow-hidden">
        <motion.div
          className="flex space-x-12 min-w-max"
          variants={marqueeVariants}
          animate="animate"
        >
          {companyLogos.concat(companyLogos).map((logo, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center w-32 h-16"
              whileHover={{ scale: 1.1 }}
            >
              <Image
                src={logo}
                alt={`Company ${index + 1}`}
                width={120}
                height={60}
                className="object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
