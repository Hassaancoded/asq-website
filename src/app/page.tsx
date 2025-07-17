"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ThirdSection from "../components/ThirdSection";
import SecondSection from "../components/SecondSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import FifthSection from "@/components/FifthSection";
import SixthSection from "@/components/SixthSection";
import LogoMarquee from "@/components/LogoMarquee";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ✅ Hero Section */}
      <main
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/Background 1.png')" }}
      >
        {/* Dark overlay */}
        <div className="bg-black/40 min-h-screen w-full relative">
          {/* ✅ Hero Images */}
          <img
            src="/text-left.png"
            alt="ASQ Heading"
            className="absolute left-[54px] top-[109px] w-[463.8px] h-[172px] z-20"
          />
          <img
            src="/text-bottom.png"
            alt="ASQ Subheading"
            className="absolute left-[54px] top-[240px] w-[629.16px] h-[258px] z-10"
          />
          <img
            src="/text-bottom2.png"
            alt="Company Motto"
            className="absolute left-[80px] top-[500px] w-[500px] h-[30px] z-20 drop-shadow-md"
          />
          <img
            src="/text-final.png"
            alt="Final Statement"
            className="absolute left-[80px] top-[560px] w-[500px] h-[60px] z-20"
          />

          {/* ✅ Invisible Link */}
          <Link
            href="/contactform"
            className="absolute left-[80px] top-[560px] z-50 block"
            style={{
              width: "500px",
              height: "60px",
            }}
          ></Link>

          {/* ✅ Book Consultation */}
          <Link
            href="/contactform"
            className="absolute top-[30px] right-[190px] z-50 block"
            style={{
              width: "175px",
              height: "50px",
            }}
          ></Link>
          <img
            src="/Layer1.png"
            alt="Book Consultation"
            className="absolute top-[30px] right-[190px] w-[175px] h-[50px] z-40"
          />

          {/* ✅ Social Links */}
          <a
            href="https://www.instagram.com/asq_creatives/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-[30px] right-[110px] z-50 block"
            style={{
              width: "50px",
              height: "46px",
            }}
          ></a>
          <a
            href="https://www.linkedin.com/company/101520418/admin/dashboard/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-[30px] right-[40px] z-50 block"
            style={{
              width: "50px",
              height: "46px",
            }}
          ></a>
          <img
            src="/Layer2.png"
            alt="Social Icons"
            className="absolute top-[30px] right-[40px] w-[111px] h-[46px] z-40"
          />

          {/* ✅ Hero Image */}
          <div className="flex justify-end min-h-screen items-end pr-8">
            <div className="relative">
              <img
                src="/bubble.png"
                alt="Bubble"
                className="absolute top-40 left-30 w-35 animate-pulse z-0"
              />
              <img
                src="/hero.png"
                alt="Hero"
                className="w-[500px] lg:w-[600px] animate-slide-in-right relative z-10"
              />
            </div>
          </div>
        </div>
      </main>

      {/* ✅ Sections */}
      <LogoMarquee />
      <SecondSection />
      <ExpertiseSection />

      {/* ✅ Wrap Everything After ExpertiseSection in ONE Background */}
      <div
        className="w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/back.png')" }} // ✅ Your big merged background
      >
        <ThirdSection />
        <SixthSection />
        <FifthSection />
      </div>
    </>
  );
}
