"use client";
import { motion } from "framer-motion";
import { FaShieldAlt, FaCog, FaCube, FaLock } from "react-icons/fa"; // Import icons from react-icons

const benefits = [
  {
    title: "Enhanced Security",
    description:
      "Proactive threat detection, real-time alerts, and automated incident response to enhance safety and security.",
    icon: <FaShieldAlt className="text-3xl text-black-500" />,
  },
  {
    title: "Improved Efficiency",
    description:
      "Streamlined operations, automated tasks, and optimized resource allocation for improved productivity and cost savings.",
    icon: <FaCog className="text-3xl text-black-500" />,
  },
  {
    title: "Customizable Solutions",
    description:
      "Tailored solutions to meet specific needs and requirements, adapting to different industries and environments.",
    icon: <FaCube className="text-3xl text-black-500" />,
  },
  {
    title: "Privacy Protection",
    description:
      "Data anonymization, secure storage, and strict adherence to privacy regulations to safeguard sensitive information.",
    icon: <FaLock className="text-3xl text-black-500" />,
  },
];

export const WowlyxDetails = () => {
  return (  
    <section id="why" className="py-32 bg-gray-50">
      <div className="container mx-auto">
        {/* Core Benefits Section */}
        <div className="">
          <h2 className="text-3xl font-semibold text-center text-gray-800">Core Benefits</h2>
          <p className="text-center text-gray-600 mt-4">
            Discover the powerful benefits of integrating Wowlyx for your business.
          </p>
          <div className="grid grid-cols-1 gap-8 mt-10 lg:grid-cols-2 xl:grid-cols-4">
            {benefits.map(({ title, description, icon }, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-100 shadow-md rounded-lg flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="mb-4">{icon}</div>
                <h3 className="text-xl font-bold text-center mb-2 text-gray-800">{title}</h3>
                <p className="text-gray-600 text-center">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <section id="variants"></section>
    </section>
  );
};
