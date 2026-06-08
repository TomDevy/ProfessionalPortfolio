"use client";
import React from "react";
import Image from "next/image";

const companyLogos = [
  "/logos/OA.webp",
  "/logos/Inkoret.png",
  "/logos/BrandedHeart.png",
  "/logos/BlazeBrand.png",
  "/logos/Vesspor.svg",
  "/logos/cutest.png",
  "/logos/dootling.png",
];

export default function CompanyLogos() {
  return (
    <div className="relative w-full bg-gray-50/50 py-12 overflow-hidden border-y border-gray-100">
      <div className="container px-4 mx-auto">
        <h2 className="text-xl font-medium text-center text-gray-500 mb-8 tracking-tight">
          Trusted by innovative brands worldwide
        </h2>
      </div>
      
      <div className="relative flex overflow-hidden w-full">
        {/*Gradient Overlays for smooth fading*/}
        <div className="absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <div className="flex whitespace-nowrap min-w-max animate-marquee py-4 hover:[animation-play-state:paused]">
          {[...companyLogos, ...companyLogos, ...companyLogos, ...companyLogos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-40 h-20 mx-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={logo}
                alt={`Partner Brand ${index + 1}`}
                width={140}
                height={70}
                className="object-contain max-h-12"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
