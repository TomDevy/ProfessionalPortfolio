"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const companyLogos = [
  "/logos/OA.png",
  "/logos/Inkoret.png",
  "/logos/BrandedHeart.png",
  "/logos/BlazeBrand.png",
  "/logos/Vesspor.svg",
];

// Animation settings
const marqueeVariants = {
  animate: {
    x: ["0%", "-50%"],
    transition: {
      ease: "linear",
      duration: 20,
      repeat: Infinity,
    },
  },
};

export default function CompanyLogos() {
  return (
    <div className="relative w-full bg-gray-100 py-8 overflow-hidden">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Worked with brands like
      </h2>
      <div className="relative flex overflow-hidden w-full">
        <motion.div
          className="flex whitespace-nowrap min-w-max"
          variants={marqueeVariants}
          animate="animate"
        >
          {[...companyLogos, ...companyLogos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-32 h-16 mx-4"
            >
              <Image
                src={logo}
                alt={`Company ${index + 1}`}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
