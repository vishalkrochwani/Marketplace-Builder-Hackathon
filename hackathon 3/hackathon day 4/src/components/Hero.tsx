// src/components/Hero.tsx
import React from "react";
import {Sec1}  from "@/components/Sec1";  // Import sections
import Sec2 from "@/components/Sec2";
import Sec3 from "@/components/Sec3";
import Sec4 from "@/components/Sec4";
import Sec5 from "@/components/Sec5";
import Sec6 from "@/components/Sec6";

const Hero = () => {
  return (
    <div>
      {/* Hero Section - Includes all sections from Sec1 to Sec6 */}
      <Sec1 />
      <Sec2 />
      <Sec3 />
      <Sec4 />
      <Sec5 />
      <Sec6 />
    </div>
  );
};

export default Hero;
