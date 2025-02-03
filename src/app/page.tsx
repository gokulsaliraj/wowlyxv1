import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { WowlyxDetails } from "@/sections/WowlyxDetails";
import { SimpleSwiper } from "@/sections/Wowlyxcards";
import { Pricing } from "@/sections/Pricing"; 
import { Footer } from "@/sections/Footer";




export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <WowlyxDetails/>
      <SimpleSwiper/>
      <Pricing />
      <Footer />
      
    </>
  );
}
