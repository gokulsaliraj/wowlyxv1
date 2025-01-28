// 'use client'; // Ensure this file is a client component

// import React from 'react';
// import dynamic from 'next/dynamic';
// import ArrowRight from "@/assets/arrow-right.svg";
// import Logo from "@/assets/logosaas.png";
// import Image from "next/image";
// import MenuIcon from "@/assets/menu.svg";

// // Dynamically import the Link component from react-scroll
// const Link = dynamic(() => import('react-scroll').then(mod => mod.Link), { ssr: false });

// export const Header = () => {
//   return (
//     <header className="sticky top-0 backdrop-blur-sm z-20">
//       {/* Top banner */}
//       <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
//         <p className="text-white/60 hidden md:block">AI-Powered Vision Intelligence</p>
//         <div className="inline-flex gap-1 items-center">
//           <p>Get started</p>
//           <Image src={ArrowRight} alt="Arrow Right" className="h-4 w-4" />
//         </div>
//       </div>

//       {/* Navbar */}
//       <div className="py-5">
//         <div className="container">
//           <div className="flex items-center justify-between">
//             <Image src={Logo} alt="Saas Logo" height={40} width={40} />
//             <Image src={MenuIcon} alt="Menu Icon" className="h-5 w-5 md:hidden" />
//             <nav className="hidden md:flex gap-6 text-black/60 items-center">
//               <Link
//                 to="about" // The section ID to scroll to
//                 smooth={true} // Enable smooth scroll
//                 duration={500} // Set the scroll duration
//                 className="hover:text-black transition"
//               >
//                 About
//               </Link>
//               <Link
//                 to="features" // ID for Features section
//                 smooth={true}
//                 duration={500}
//                 className="hover:text-black transition"
//               >
//                 Features
//               </Link>
//               <Link
//                 to="why" // ID for Customers section
//                 smooth={true}
//                 duration={500}
//                 className="hover:text-black transition"
//               >
//               Why Choose Us
//               </Link>
//               <Link
//                 to="variants" // ID for Updates section
//                 smooth={true}
//                 duration={500}
//                 className="hover:text-black transition"
//               >
//                 Variants
//               </Link>
//               <Link
//                 to="pricing" // ID for Help section
//                 smooth={true}
//                 duration={500}
//                 className="hover:text-black transition"
//               >
//                 Pricing
//               </Link>
//               <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
//                 Contact
//               </button>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };
// 'use client'; // Ensure this file is a client component

// import React, { useState } from 'react';
// import dynamic from 'next/dynamic';
// import ArrowRight from "@/assets/arrow-right.svg";
// import Logo from "@/assets/logosaas.png";
// import Image from "next/image";
// import MenuIcon from "@/assets/menu.svg";
// import CloseIcon from "@/assets/icons8-close.svg"; // Add a close icon for the mobile navbar

// // Dynamically import the Link component from react-scroll
// const Link = dynamic(() => import('react-scroll').then(mod => mod.Link), { ssr: false });

// export const Header = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   // Function to toggle the mobile navbar
//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   return (
// <header className="sticky top-0 backdrop-blur-sm z-20">
//       {/* Top banner */}
//       <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
//         <p className="text-white/60 hidden md:block">AI-Powered Vision Intelligence</p>
//         <div className="inline-flex gap-1 items-center">
//           <p>Get started</p>
//           <Image src={ArrowRight} alt="Arrow Right" className="h-4 w-4" />
//         </div>
//       </div>

//       {/* Navbar */}
//       <div className="py-5">
//         <div className="container">
//           <div className="flex items-center justify-between">
//             <Image src={Logo} alt="Saas Logo" height={40} width={40} />

//             {/* Mobile menu icon */}
//             <div className="md:hidden">
//               <Image
//                 src={MenuIcon}
//                 alt="Menu Icon"
//                 className="h-5 w-5 cursor-pointer"
//                 onClick={toggleNav}
//               />
//             </div>

//             {/* Desktop Navbar */}
//             <nav className="hidden md:flex gap-6 text-black/60 items-center">
//               <Link
//                 to="about"
//                 smooth={true}
//                 duration={500}
//                 className="hover:text-black transition cursor-pointer"
//               >
//                 About
//               </Link>
//               <Link
//                 to="features"
//                 smooth={true}
//                 duration={500}
//                 className="hover:text-black transition cursor-pointer"
//               >
//                 Features
//               </Link>
//               <Link
//                 to="why"
//                 smooth={true}
//                 duration={500}
//                 className="hover:text-black transition cursor-pointer"
//               >
//                 Why Choose Us
//               </Link>
//               <Link
//                 to="variants"
//                 smooth={true}
//                 duration={500}
//                 className="hover:text-black transition cursor-pointer"
//               >
//                 Variants
//               </Link>
//               <Link
//                 to="pricing"
//                 smooth={true}
//                 duration={500}
//                 className="hover:text-black transition cursor-pointer"
//               >
//                 Pricing
//               </Link>
//               <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
//                 Contact
//               </button>
//             </nav>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navbar */}
//       <div
//         className={`fixed top-12 right-0 h-full bg-white shadow-lg z-30 transition-transform transform ${
//           isNavOpen ? 'translate-x-0' : 'translate-x-full'
//         } w-64`}
//       >
//         {/* Close button */}
//         <div className="flex justify-end p-4">
//           <Image
//             src={CloseIcon}
//             alt="Close Icon"
//             className="h-5 w-5 cursor-pointer"
//             onClick={toggleNav}
//           />
//         </div>

//         {/* Mobile nav links */}
//         <nav className="flex flex-col gap-6 text-black/60 px-6 mt-4 bg-white shadow-lg z-30 pb-6">
//           <Link
//             to="about"
//             smooth={true}
//             duration={500}
//             className="hover:text-black transition cursor-pointer"
//             onClick={toggleNav} // Close the nav when a link is clicked
//           >
//             About
//           </Link>
//           <Link
//             to="features"
//             smooth={true}
//             duration={500}
//             className="hover:text-black transition cursor-pointer"
//             onClick={toggleNav}
//           >
//             Features
//           </Link>
//           <Link
//             to="why"
//             smooth={true}
//             duration={500}
//             className="hover:text-black transition cursor-pointer"
//             onClick={toggleNav}
//           >
//             Why Choose Us
//           </Link>
//           <Link
//             to="variants"
//             smooth={true}
//             duration={500}
//             className="hover:text-black transition cursor-pointer"
//             onClick={toggleNav}
//           >
//             Variants
//           </Link>
//           <Link
//             to="pricing"
//             smooth={true}
//             duration={500}
//             className="hover:text-black transition cursor-pointer"
//             onClick={toggleNav}
//           >
//             Pricing
//           </Link>
//           <button
//             className="bg-black text-white px-4 py-2 rounded-lg font-medium tracking-tight"
//             onClick={toggleNav}
//           >
//             Contact
//           </button>
//         </nav>
//       </div>
//     </header>
//   );
// };



// 'use client'; // Ensure this file is a client component

// import React, { useState } from 'react';
// import dynamic from 'next/dynamic';
// import ArrowRight from "@/assets/arrow-right.svg";
// import Logo from "@/assets/logosaas.png";
// import Image from "next/image";
// import MenuIcon from "@/assets/menu.svg";
// import CloseIcon from "@/assets/icons8-close.svg"; // Add a close icon for the mobile navbar

// // Dynamically import the Link component from react-scroll
// const Link = dynamic(() => import('react-scroll').then(mod => mod.Link), { ssr: false });

// export const Header = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   // Function to toggle the mobile navbar
//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   return (
//     <header className="sticky top-0 backdrop-blur-sm z-20">
//       {/* Top banner */}
//       <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
//         <p className="text-white/60 hidden md:block">AI-Powered Vision Intelligence</p>
//         <div className="inline-flex gap-1 items-center">
//           <p>Get started</p>
//           <Image src={ArrowRight} alt="Arrow Right" className="h-4 w-4" />
//         </div>
//       </div>

//       {/* Navbar */}
//       <div className="py-5">
//         <div className="container">
//           <div className="flex items-center justify-between">
//             <Image src={Logo} alt="Saas Logo" height={40} width={40} />

//             {/* Mobile menu icon */}
//             <div className="md:hidden relative">
//               <Image
//                 src={isNavOpen ? CloseIcon : MenuIcon}
//                 alt={isNavOpen ? "Close Icon" : "Menu Icon"}
//                 className="h-5 w-5 cursor-pointer transition-transform duration-300"
//                 onClick={toggleNav}
//               />
//             </div>

//             {/* Desktop Navbar */}
//             <nav className="hidden md:flex gap-6 text-black/60 items-center">
//               <Link
//                 to="about"
//                 smooth={true}
//                 duration={500}
//                 className="hover:text-black transition cursor-pointer"
//               >
//                 About
//               </Link>
//               <Link
//                 to="features"
//                 smooth={true}
//                 duration={500}
//                 className="hover:text-black transition cursor-pointer"
//               >
//                 Features
//               </Link>
//               <Link
//                 to="why"
//                 smooth={true}
//                 duration={500}
//                 className="hover:text-black transition cursor-pointer"
//               >
//                 Why Choose Us
//               </Link>
//               <Link
//                 to="variants"
//                 smooth={true}
//                 duration={500}
//                 className="hover:text-black transition cursor-pointer"
//               >
//                 Variants
//               </Link>
//               <Link
//                 to="pricing"
//                 smooth={true}
//                 duration={500}
//                 className="hover:text-black transition cursor-pointer"
//               >
//                 Pricing
//               </Link>
//               <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
//                 Contact
//               </button>
//             </nav>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navbar */}
//       <div
//         className={`fixed top-11 left-0 w-full h-full bg-gray shadow-lg z-30 transition-all duration-300 ${
//           isNavOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
//         }`}
//       >
//         {/* Close button (inside mobile navbar) */}
//         <div className="flex justify-end p-4">
//           <Image
//             src={CloseIcon}
//             alt="Close Icon"
//             className="h-5 w-5 cursor-pointer"
//             onClick={toggleNav}
//           />
//         </div>

//         {/* Mobile nav links */}
//         <nav className="flex flex-col gap-6 text-black/60 px-6 mt-4 bg-white pb-6">
//           <Link
//             to="about"
//             smooth={true}
//             duration={500}
//             className="hover:text-black transition cursor-pointer"
//             onClick={toggleNav} // Close the nav when a link is clicked
//           >
//             About
//           </Link>
//           <Link
//             to="features"
//             smooth={true}
//             duration={500}
//             className="hover:text-black transition cursor-pointer"
//             onClick={toggleNav}
//           >
//             Features
//           </Link>
//           <Link
//             to="why"
//             smooth={true}
//             duration={500}
//             className="hover:text-black transition cursor-pointer"
//             onClick={toggleNav}
//           >
//             Why Choose Us
//           </Link>
//           <Link
//             to="variants"
//             smooth={true}
//             duration={500}
//             className="hover:text-black transition cursor-pointer"
//             onClick={toggleNav}
//           >
//             Variants
//           </Link>
//           <Link
//             to="pricing"
//             smooth={true}
//             duration={500}
//             className="hover:text-black transition cursor-pointer"
//             onClick={toggleNav}
//           >
//             Pricing
//           </Link>
//           <button
//             className="bg-black text-white px-4 py-2 rounded-lg font-medium tracking-tight"
//             onClick={toggleNav}
//           >
//             Contact
//           </button>
//         </nav>
//       </div>
//     </header>
//   );
// };

'use client'; // Ensure this is a client-side component

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import MenuIcon from "@/assets/menu.svg";
import CloseIcon from "@/assets/icons8-close.svg";

// Dynamically import the Link component from react-scroll
const Link = dynamic(() => import('react-scroll').then(mod => mod.Link), { ssr: false });

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Function to toggle the navbar
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      {/* Top banner */}
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">AI-Powered Vision Intelligence</p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started</p>
          <Image src={ArrowRight} alt="Arrow Right" className="h-4 w-4" />
        </div>
      </div>

      {/* Navbar */}
      <div className="py-5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Image src={Logo} alt="SaaS Logo" height={40} width={40} />

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
              <Image
                src={isNavOpen ? CloseIcon : MenuIcon} // Toggle between menu and close icon
                alt={isNavOpen ? "Close Icon" : "Menu Icon"}
                className="h-5 w-5 cursor-pointer transition-transform duration-300"
                onClick={toggleNav} // Toggle the menu
              />
            </div>

            {/* Desktop Navbar */}
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="hover:text-black transition cursor-pointer"
              >
                About
              </Link>
              <Link
                to="features"
                smooth={true}
                duration={500}
                className="hover:text-black transition cursor-pointer"
              >
                Features
              </Link>
              <Link
                to="why"
                smooth={true}
                duration={500}
                className="hover:text-black transition cursor-pointer"
              >
                Why Choose Us
              </Link>
              <Link
                to="variants"
                smooth={true}
                duration={500}
                className="hover:text-black transition cursor-pointer"
              >
                Variants
              </Link>
              <Link
                to="pricing"
                smooth={true}
                duration={500}
                className="hover:text-black transition cursor-pointer"
              >
                Pricing
              </Link>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
                Contact
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
          className={`fixed top-18px left-0 w-full h-full shadow-lg z-30 transition-all duration-300 ${
            isNavOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
      >
        <nav className="flex flex-col gap-6 text-black/60 px-6 mt-4 pb-6 bg-white">
          {/* Close the menu when a link is clicked */}
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-black transition cursor-pointer"
            onClick={toggleNav}
          >
            About
          </Link>
          <Link
            to="features"
            smooth={true}
            duration={500}
            className="hover:text-black transition cursor-pointer"
            onClick={toggleNav}
          >
            Features
          </Link>
          <Link
            to="why"
            smooth={true}
            duration={500}
            className="hover:text-black transition cursor-pointer"
            onClick={toggleNav}
          >
            Why Choose Us
          </Link>
          <Link
            to="variants"
            smooth={true}
            duration={500}
            className="hover:text-black transition cursor-pointer"
            onClick={toggleNav}
          >
            Variants
          </Link>
          <Link
            to="pricing"
            smooth={true}
            duration={500}
            className="hover:text-black transition cursor-pointer"
            onClick={toggleNav}
          >
            Pricing
          </Link>
          <button
            className="bg-black text-white px-4 py-2 rounded-lg font-medium tracking-tight"
            onClick={toggleNav}
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};
