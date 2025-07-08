"use client";
import NavBar from "./sections/NavBar";
import OttrHero from "./sections/Hero";
import OttrOfferingsSection from "./sections/Offerings";
import AtlasWhitepaper from "./sections/Whitepaper";
import Contact from "./sections/Contact";

export default function Home() {

  return (
    <>
      <NavBar />
      <main className="flex flex-col items-center justify-center">
        <OttrHero />
        <OttrOfferingsSection />
        <AtlasWhitepaper />
        <Contact />
      </main>
    </>
  );
}
