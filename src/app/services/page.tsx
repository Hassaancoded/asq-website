"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <div className="relative w-full overflow-x-hidden scroll-smooth"></div>

      {/* ✅ Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/Aboutus5.png"
          alt="Background"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* ✅ Top Right Section */}
      <div
        className="absolute top-6 right-6 flex items-center"
        style={{
          position: "absolute",
          top: "6px",
          right: "6px",
          zIndex: 9999,
          pointerEvents: "auto",
        }}
      >
        {/* ✅ Clickable Area Over "Book Consultation" */}
        <a
          href="/contactform"
          className="absolute"
          style={{
            top: "32px",
            right: "158px",
            width: "210px",
            height: "55px",
            borderRadius: "25px",
            zIndex: 50,
          }}
        >
          <span className="sr-only">Go to Contact Page</span>
        </a>

        {/* ✅ Instagram */}
        <a
          href="https://www.instagram.com/asq_creatives/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute"
          style={{
            top: "30px",
            right: "99px",
            width: "40px",
            height: "50px",
            borderRadius: "8px",
            zIndex: 50,
          }}
        >
          <span className="sr-only">Instagram</span>
        </a>

        {/* ✅ LinkedIn */}
        <a
          href="https://www.linkedin.com/company/101520418/admin/dashboard/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute"
          style={{
            top: "30px",
            right: "37px",
            width: "40px",
            height: "50px",
            borderRadius: "8px",
            zIndex: 50,
          }}
        >
          <span className="sr-only">LinkedIn</span>
        </a>
      </div>

      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Content Wrapper */}
      <div className="relative z-10 w-full" style={{ height: "2000px" }}>
        {/* ✅ Service Boxes with Navigation */}
        <Link href="/cases/case1">
          <div className="absolute left-[140px] bottom-[1060px] w-[430px] h-[290px] bg-gray-800 rounded-2xl overflow-hidden shadow-lg cursor-pointer">
            <img
              src="/your-image1.png"
              alt="Service 1"
              className="w-full h-full object-cover"
            />
          </div>
        </Link>

        <Link href="/cases/case4">
          <div className="absolute left-[140px] bottom-[750px] w-[430px] h-[290px] bg-gray-800 rounded-2xl overflow-hidden shadow-lg cursor-pointer">
            <img
              src="/your-image2.png"
              alt="Service 2"
              className="w-full h-full object-cover"
            />
          </div>
        </Link>

        <Link href="/cases/case2">
          <div className="absolute left-[140px] bottom-[440px] w-[430px] h-[290px] bg-gray-800 rounded-2xl overflow-hidden shadow-lg cursor-pointer">
            <img
              src="/your-image3.png"
              alt="Service 3"
              className="w-full h-full object-cover"
            />
          </div>
        </Link>

        <Link href="/cases/case3">
          <div className="absolute left-[140px] bottom-[135px] w-[430px] h-[290px] bg-gray-800 rounded-2xl overflow-hidden shadow-lg cursor-pointer">
            <img
              src="/your-image4.png"
              alt="Service 4"
              className="w-full h-full object-cover"
            />
          </div>
        </Link>

        {/* ✅ Foreground Images */}
        <div className="absolute left-[700px] bottom-[1080px] z-30 w-[470px] h-auto">
          <img
            src="/foreground-image1.png"
            alt="Foreground 1"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="absolute left-[700px] bottom-[780px] z-30 w-[470px] h-auto">
          <img
            src="/foreground-image2.png"
            alt="Foreground 2"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="absolute left-[700px] bottom-[460px] z-30 w-[470px] h-auto">
          <img
            src="/foreground-image3.png"
            alt="Foreground 3"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="absolute left-[700px] bottom-[175px] z-30 w-[470px] h-auto">
          <img
            src="/foreground-image4.png"
            alt="Foreground 4"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* ✅ Footer Navigation Links */}
      <div className="absolute bottom-[140px] left-[40px] z-50">
        <Link href="/" className="absolute" style={{ bottom: "-340px", left: "265px", width: "100px", height: "20px" }}>
          <span className="sr-only">Main</span>
        </Link>
        <Link href="/about" className="absolute" style={{ bottom: "-385px", left: "265px", width: "100px", height: "20px" }}>
          <span className="sr-only">About</span>
        </Link>
        <Link href="/services" className="absolute" style={{ bottom: "-428px", left: "265px", width: "100px", height: "20px" }}>
          <span className="sr-only">Services</span>
        </Link>
        <Link href="/cases" className="absolute" style={{ bottom: "-470px", left: "265px", width: "100px", height: "20px" }}>
          <span className="sr-only">Cases</span>
        </Link>
        <Link href="/policy" className="absolute" style={{ bottom: "-515px", left: "290px", width: "120px", height: "20px" }}>
          <span className="sr-only">Policy</span>
        </Link>
      </div>

      {/* ✅ Footer Social Icons */}
      <div className="absolute bottom-[60px] left-[40px] z-20 flex gap-3">
        <a href="https://www.instagram.com/asq_creatives/" target="_blank" rel="noopener noreferrer" className="absolute" style={{ bottom: "-440px", left: "58px", width: "32px", height: "32px" }}>
          <span className="sr-only">Instagram</span>
        </a>
        <a href="https://www.linkedin.com/company/101520418/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="absolute" style={{ bottom: "-440px", left: "120px", width: "32px", height: "32px" }}>
          <span className="sr-only">LinkedIn</span>
        </a>
      </div>
    </div>
  );
}
