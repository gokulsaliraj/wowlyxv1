"use client";
import { ReactSVG } from 'react-svg'; // Importing react-svg to handle the SVG as a React component
import cogImage from "@/assets/rb_29187.png";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-white overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[600px]">
            <div className="tag text-1xl">Wowlyx</div>
            <h1 className="text-5xl md:text-7xl text-ellips font-bold tracking-tighter bg-gradient-to-b from-black to-[#4b4c4e] text-transparent bg-clip-text mt-6">
              AI-Powered Vision Intelligence System
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Welcome to the future of intelligent surveillance, where AI-driven vision technology transforms security and analytics.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                {/* Use ReactSVG for rendering the SVG as a component */}
                <ReactSVG src={require('@/assets/arrow-right.svg')} className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={cogImage.src}
              alt="Cog image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
