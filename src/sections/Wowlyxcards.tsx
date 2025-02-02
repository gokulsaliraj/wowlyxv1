"use client"; // Mark this file as a client-side component

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Default swiper styles
import "swiper/css/effect-coverflow"; // For the coverflow effect
import "swiper/css/pagination"; // For pagination bullets
import { useState } from "react"; // For managing the selected card state

// Import required Swiper modules
import { EffectCoverflow, Pagination } from "swiper/modules";

// Define your variants without images, just title and description
const variants = [
  {
    title: "OnEdge",
    description:
      "Compact and powerful edge device for localized deployments, ideal for smaller sites or areas with limited connectivity.",
  },
  {
    title: "OnCloud",
    description:
      "Cloud-based solution for large-scale deployments, offering scalability, centralized management, and data security.",
  },
  {
    title: "OnWheels",
    description:
      "Mobile deployment option for on-site patrols, equipped with sensors, cameras, and AI for real-time situational awareness.",
  },
  {
    title: "Hybrid",
    description:
      "A combination of OnEdge and OnCloud technologies, delivering a comprehensive solution with both local and cloud capabilities.",
  },
];

export const SimpleSwiper = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null); // Track the selected card

  const handleCardSelect = (index: number) => {
    setSelectedIndex(index); // Set the selected card index
  };

  return (

    <section  className="bg-gradient-to-b from-[#FFFFFF] to-[#ebe8e8] py-24 overflow-x-clip">
      <div className="container mx-auto">
        {/* Section heading */}
        <div className="section-heading text-center">
          <div className="tag">AI-Powered Vision Intelligence System</div>
          <h2 className="section-title mt-5 bg-gradient-to-b from-black to-[#4b4c4e]">
            Wowlyx Variants
          </h2>
          <p className="section-description mt-5">
            Our powerful solutions cater to different needs, from localized deployments to cloud-based and mobile solutions.
          </p>
        </div>

        {/* Swiper Component with Coverflow Effect */}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true} // Enable infinite scroll (looping)
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper mt-10"
        >
          {variants.map(({ title, description }, index) => (
            <SwiperSlide
              key={index}
              onClick={() => handleCardSelect(index)} // Handle card click to select
              className={`p-6 bg-white rounded-lg shadow-md transition-all transform ${
                selectedIndex === index ? "scale-105 shadow-xl" : "scale-100"
              } hover:scale-105 hover:shadow-lg`} // Apply scale and shadow on hover and selection
            >
              <h3 className="text-xl font-bold mb-4">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
