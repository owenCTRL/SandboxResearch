"use client";
import NavBar from "./sections/NavBar";
import OttrHero from "./sections/Hero";
import OttrOfferingsSection from "./sections/Offerings";
import OttrBlogSection from "./sections/Blog";
import AtlasWhitepaper from "./sections/Whitepaper";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function Home() {

  return (
    <>
      <NavBar />

      {/* <ScrollerMotion> */}
      <main className="flex flex-col items-center justify-center">
        <OttrHero />
        <OttrOfferingsSection />
        <AtlasWhitepaper />
        <OttrBlogSection />
        <Contact />
        <Footer />
      </main>
      {/* </ScrollerMotion> */}
    </>
  );
}
