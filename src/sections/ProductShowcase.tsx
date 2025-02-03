// "use client";
// import productImage from "@/assets/e30c4ad7cf69ca97bafccd08b1403599961e9d3d_2_999x750.jpeg";
// import pyramidImage from "@/assets/412397990_e7033633-fa32-4d36-b490-8b6d32a8d516-removebg-preview.png";
// import tubeImage from "@/assets/412397962_221f6e1f-8a05-43fb-b701-15e0ca8f7ea6-removebg-preview (1).png";
// import Image from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// export const ProductShowcase = () => {
//   const sectionRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   });
//   const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
//   return (
//     <section  id="features"
//       ref={sectionRef}
//       className="py-32 bg-white"
//     >
//       <div  className="container">
//         <div className="section-heading">
//           <div className="flex justify-center">
//             <div className="tag"  >AI-Powered Vision Intelligence System</div>
//           </div>
//           <h2 className="section-title mt-5 bg-gradient-to-b from-black to-[#4b4c4e]">
//             Wowlyx turns visuals into insights with AI Powerd analytics
//           </h2>
//           <p className="section-description mt-5">
//           It leverages real-time insights, predictive analytics, and intelligent automation to elevate security, efficiency, and operational excellence.

//           </p>
//         </div>
//         <div className="relative">
//           <Image src={productImage} alt="Product Image" className="mt-10" />
//           <motion.img
//             src={pyramidImage.src}
//             alt="Pyramid Image"
//             height={262}
//             width={262}
//             className="hidden md:block absolute -right-36 -top-32"
//             style={{
//               translateY,
//             }}
//           />
//           <motion.img 
//             src={tubeImage.src}
//             alt="Tube image"
//             height={248}
//             width={248}
//             className="hidden md:block absolute bottom-24 -left-36"
//             style={{
//               translateY,
//             }}
//           />
//         </div>
//       </div>
//     </section>
    
//   );
// };

"use client";
import productImage from "@/assets/e30c4ad7cf69ca97bafccd08b1403599961e9d3d_2_999x750.jpeg";
import pyramidImage from "@/assets/412397990_e7033633-fa32-4d36-b490-8b6d32a8d516-removebg-preview.png";
import tubeImage from "@/assets/412397962_221f6e1f-8a05-43fb-b701-15e0ca8f7ea6-removebg-preview (1).png";
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
    <section id="features" ref={sectionRef} className="py-32 bg-white">
      <div className="container">
        <motion.div 
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1 }}
        >
          <div className="flex justify-center">
            <motion.div 
              className="tag"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              AI-Powered Vision Intelligence System
            </motion.div>
          </div>
          <motion.h2 
            className="section-title mt-5 bg-gradient-to-b from-black to-[#4b4c4e]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Wowlyx turns visuals into insights with AI Powered analytics
          </motion.h2>
          <motion.p 
            className="section-description mt-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            It leverages real-time insights, predictive analytics, and intelligent automation to elevate security, efficiency, and operational excellence.
          </motion.p>
        </motion.div>
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1 }}
          >
            <Image src={productImage} alt="Product Image" className="mt-10" />
          </motion.div>
          <motion.img
            src={pyramidImage.src}
            alt="Pyramid Image"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
            style={{ translateY }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          <motion.img
            src={tubeImage.src}
            alt="Tube image"
            height={248}
            width={248}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{ translateY }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>
      </div>
    </section>
  );
};