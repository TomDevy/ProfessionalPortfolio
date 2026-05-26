import React from "react";
import dynamic from "next/dynamic";
import Hero from "../components/sections/hero";

const CompanyLogos = dynamic(() => import("../components/sections/company-logos"), {
  ssr: true,
});

const Testimonials = dynamic(() => import("../components/sections/testimonials"), {
  ssr: true,
});

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyLogos />
      <Testimonials />
    </>
  );
}
