// "use client";
// import { CheckCircleIcon } from "@heroicons/react/solid";  // Ensure this import
// import { twMerge } from "tailwind-merge";
// import { motion } from "framer-motion";


// const pricingTiers = [
//   {
//     title: "Basic",
//     monthlyPrice: 29,
//     buttonText: "Get started",
//     popular: false,
//     inverse: false,
//     features: [
//       "CCTV Analytics",
//       "Basic VNPR",
//       "Standard Virtual Patrolling",
//       "Limited IoT Integration",
//     ],
//   },
//   {
//     title: "Pro",
//     monthlyPrice: 59,
//     buttonText: "Get Started",
//     popular: true,
//     inverse: true,
//     features: [
//       "Advanced CCTV Analytics",
//       "Pro VNPR",
//       "Enhanced Virtual Patrolling",
//       "IoT Integration with Custom Alerts",
//     ],
//   },
//   {
//     title: "Enterprise",
//     monthlyPrice: 99,
//     buttonText: "Get Started",
//     popular: false,
//     inverse: false,
//     features: [
//       "Comprehensive CCTV Analytics",
//       "Enterprise VNPR",
//       "AI-Driven Virtual Patrolling",
//       "Complete IoT Ecosystem Integration",
//     ],
//   },
// ];

// export const Pricing = () => {
//   return (
//     <section id="pricing" className="py-24 bg-white">
//       <div className="container">
//         <div className="section-heading">
//           <h2 className="section-title">Pricing</h2>
//           <p className="section-description mt-5">
//             Choose the plan that fits your security needs. Upgrade for advanced
//             analytics, AI-driven patrolling, and complete IoT integration.
//           </p>
//         </div>
//         <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
//           {pricingTiers.map(
//             (
//               { title, monthlyPrice, buttonText, popular, inverse, features },
//               index
//             ) => (
//               <div
//                 key={index}
//                 className={twMerge(
//                   "card p-6 rounded-lg shadow-lg flex flex-col justify-between min-h-[32rem] w-80",
//                   inverse && "border-black bg-black text-white"
//                 )}
//               >
//                 <div className="flex justify-between">
//                   <h3
//                     className={twMerge(
//                       "text-lg font-bold text-black/50",
//                       inverse && "text-white/60"
//                     )}
//                   >
//                     {title}
//                   </h3>
//                   {popular && (
//                     <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
//                       <motion.span
//                         animate={{
//                           backgroundPositionX: "100%",
//                         }}
//                         transition={{
//                           duration: 1,
//                           repeat: Infinity,
//                           ease: "linear",
//                           repeatType: "loop",
//                         }}
//                         className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] [background-size:200%] text-transparent bg-clip-text font-medium"
//                       >
//                         Popular
//                       </motion.span>
//                     </div>
//                   )}
//                 </div>
//                 <div className="flex items-baseline gap-1 mt-6">
//                   <span className="text-4xl font-bold tracking-tighter leading-none">
//                     ${monthlyPrice}
//                   </span>
//                   <span className="tracking-tight font-bold text-black/50">
//                     /month
//                   </span>
//                 </div>
//                 <button
//                   className={twMerge(
//                     "btn btn-primary w-full mt-6",
//                     inverse && "bg-white text-black"
//                   )}
//                 >
//                   {buttonText}
//                 </button>
//                 <ul className="flex flex-col gap-5 mt-8">
//                   {features.map((feature, i) => (
//                     <li key={i} className="text-sm flex items-center gap-4">
//                       {/* Ensure CheckCircleIcon is used properly */}
//                       <CheckCircleIcon className="h-6 w-6 text-green-500" />
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

"use client";
import { CheckCircleIcon } from "@heroicons/react/solid";  // Ensure this import
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const pricingTiers = [
  {
    title: "Basic",
    monthlyPrice: 29,
    buttonText: "Get started",
    popular: false,
    inverse: false,
    features: [
      "CCTV Analytics",
      "Basic VNPR",
      "Standard Virtual Patrolling",
      "Limited IoT Integration",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 59,
    buttonText: "Get Started",
    popular: true,
    inverse: true,
    features: [
      "Advanced CCTV Analytics",
      "Pro VNPR",
      "Enhanced Virtual Patrolling",
      "IoT Integration with Custom Alerts",
    ],
  },
  {
    title: "Enterprise",
    monthlyPrice: 99,
    buttonText: "Get Started",
    popular: false,
    inverse: false,
    features: [
      "Comprehensive CCTV Analytics",
      "Enterprise VNPR",
      "AI-Driven Virtual Patrolling",
      "Complete IoT Ecosystem Integration",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-32 bg-white"> {/* Increased py-24 to py-32 */}
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Pricing</h2>
          <p className="section-description mt-5">
            Choose the plan that fits your security needs. Upgrade for advanced
            analytics, AI-driven patrolling, and complete IoT integration.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(
            (
              { title, monthlyPrice, buttonText, popular, inverse, features },
              index
            ) => (
              <div
                key={index}
                className={twMerge(
                  "card p-6 rounded-lg shadow-lg flex flex-col justify-between min-h-[32rem] w-80",
                  inverse && "border-black bg-black text-white"
                )}
              >
                <div className="flex justify-between">
                  <h3
                    className={twMerge(
                      "text-lg font-bold text-black/50",
                      inverse && "text-white/60"
                    )}
                  >
                    {title}
                  </h3>
                  {popular && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                      <motion.span
                        animate={{
                          backgroundPositionX: "100%",
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                          repeatType: "loop",
                        }}
                        className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] [background-size:200%] text-transparent bg-clip-text font-medium"
                      >
                        Popular
                      </motion.span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-6">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    ${monthlyPrice}
                  </span>
                  <span className="tracking-tight font-bold text-black/50">
                    /month
                  </span>
                </div>
                <button
                  className={twMerge(
                    "btn btn-primary w-full mt-6",
                    inverse && "bg-white text-black"
                  )}
                >
                  {buttonText}
                </button>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature, i) => (
                    <li key={i} className="text-sm flex items-center gap-4">
                      {/* Ensure CheckCircleIcon is used properly */}
                      <CheckCircleIcon className="h-6 w-6 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};