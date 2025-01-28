"use client";
import productImage from "@/assets/e30c4ad7cf69ca97bafccd08b1403599961e9d3d_2_999x750.jpeg";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section id="features"
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div  className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag"  >AI-Powered Vision Intelligence System</div>
          </div>
          <h2 className="section-title mt-5 bg-gradient-to-b from-black to-[#4b4c4e]">
            Wowlyx turns visuals into insights with AI Powerd analytics
          </h2>
          <p className="section-description mt-5">
          It leverages real-time insights, predictive analytics, and intelligent automation to elevate security, efficiency, and operational excellence.

          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="Product Image" className="mt-10" />
          <motion.img
            src={pyramidImage.src}
            alt="Pyramid Image"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
            style={{
              translateY,
            }}
          />
          <motion.img 
            src={tubeImage.src}
            alt="Tube image"
            height={248}
            width={248}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
    
  );
};
