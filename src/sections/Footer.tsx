'use client'; // Ensure this file is a client component

import Image from "next/image";
import logo from "@/assets/logosaas.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import dynamic from "next/dynamic";

// Dynamically import the Link component from react-scroll
const Link = dynamic(() => import('react-scroll').then(mod => mod.Link), { ssr: false });

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        {/* Logo with gradient effect */}
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image src={logo} height={40} alt="SaaS logo" className="relative" />
        </div>

        {/* Navigation with smooth scrolling */}
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <Link
            to="about" // ID for the About section
            smooth={true}
            duration={500}
            className="hover:text-white transition cursor-pointer"
          >
            About
          </Link>
          <Link
            to="features" // ID for the Features section
            smooth={true}
            duration={500}
            className="hover:text-white transition cursor-pointer"
          >
            Features
          </Link>
          <Link
            to="why" // ID for the Customers section
            smooth={true}
            duration={500}
            className="hover:text-white transition cursor-pointer"
          >
          Why Choose Us
          </Link>
          <Link
            to="variants" // ID for the Pricing section
            smooth={true}
            duration={500}
            className="hover:text-white transition cursor-pointer"
          >  
            Variants
          </Link>
          <Link
            to="pricing" // ID for the Help section
            smooth={true}
            duration={500}
            className="hover:text-white transition cursor-pointer"
          >
            Pricing
          </Link>
        </nav>

        {/* Social media icons */}
        <div className="flex justify-center gap-6 mt-6">
          <Image src={SocialX} alt="Social X" className="h-6 w-6" />
          <Image src={SocialInsta} alt="Instagram" className="h-6 w-6" />
          <Image src={SocialLinkedIn} alt="LinkedIn" className="h-6 w-6" />
          <Image src={SocialPin} alt="Pinterest" className="h-6 w-6" />
          <Image src={SocialYoutube} alt="YouTube" className="h-6 w-6" />
        </div>

        {/* Copyright text */}
        <p className="mt-6">
          &copy; 2024 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
