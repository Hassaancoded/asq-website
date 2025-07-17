"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function ContactPage() {
  const [phone, setPhone] = useState("");

  return (
    <div className="relative w-full h-screen">
      {/* 🌄 Full Background Image */}
      <img
        src="/About us4.png"
        alt="Background"
        className="absolute inset-0 w-full"
      />

{/* 🔗 Top Right Icons */}
<div className="absolute top-6 right-6 z-20 flex items-center space-x-3">
  {/* ✅ Refresh Page Link */}
  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      window.location.reload(); // ✅ Refresh page
    }}
    className="absolute  bg-opacity-50 cursor-pointer" // ✅ TEMP color for visibility
    style={{
      top: "25px",
      right: "235px", // ✅ Adjust position manually
      width: "200px", // ✅ Full clickable area width
      height: "40px", // ✅ Full clickable area height
    }}
  >
    <span className="sr-only">Refresh Page</span>
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/asq_creatives/"
    target="_blank"
    rel="noopener noreferrer"
    className="absolute  bg-opacity-50"
    style={{
      top: "20px",
      right: "140px",
      width: "37px",
      height: "40px",
    }}
  ></a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/company/101520418/admin/dashboard/"
    target="_blank"
    rel="noopener noreferrer"
    className="absolute "
    style={{
      top: "20px",
      right: "80px",
      width: "37px",
      height: "40px",
    }}
  ></a>
</div>


      {/* ✅ Foreground Content */}
      <div className="relative z-10 w-full px-4">
        <Navbar />

        {/* ✅ Image with Pink Border */}
        <div
          className="absolute"
          style={{
            top: "170px",
            left: "160px",
          }}
        >
          <div
            style={{
              border: "3px solid #FF1B7E",
              borderRadius: "30px",
              overflow: "hidden",
              display: "inline-block",
            }}
          >
            <img
              src="/contact-header.png"
              alt="Contact Header"
              style={{
                width: "1100px",
                height: "auto",
                display: "block",
              }}
            />
          </div>
        </div>

        {/* ✅ LEFT SIDE MAIN & SUB TEXT IMAGES */}
        <div
          className="absolute"
          style={{
            top: "690px",
            left: "175px",
          }}
        >
          <img
            src="/left-main.png"
            alt="Main Heading"
            style={{
              width: "580px",
              marginBottom: "20px",
            }}
          />

          <img
            src="/left-sub.png"
            alt="Subheading Text"
            style={{
              width: "450px",
            }}
          />
        </div>

        {/* ✅ Contact Form */}
        <div
          className="absolute"
          style={{
            top: "650px",
            left: "850px",
          }}
        >
          <form className="space-y-6 text-white font-poppins">
            {/* Row 1 */}
            <div className="flex gap-6">
              <div>
                <label className="block mb-2 font-normal text-[13px] tracking-[-0.04em] text-white">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-[220px] h-[58px] rounded-lg bg-[#202020] px-4 text-white"
                />
              </div>
              <div>
                <label className="block mb-2 font-normal text-[13px] tracking-[-0.04em] text-white">
                  Email address
                </label>
                <input
                  type="email"
                  className="w-[220px] h-[58px] rounded-lg bg-[#202020] px-4 text-white"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div>
              <label className="block mb-2 font-normal text-[13px] tracking-[-0.04em] text-white">
                Phone number
              </label>
              <div
                className="w-[455px] h-[58px] bg-[#202020]"
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <PhoneInput
                  country={"us"}
                  value={phone}
                  onChange={setPhone}
                  enableSearch={true}
                  inputStyle={{
                    width: "100%",
                    height: "58px",
                    background: "#202020",
                    color: "#fff",
                    border: "none",
                    fontSize: "20px",
                    paddingLeft: "60px",
                    borderRadius: "12px",
                  }}
                  buttonStyle={{
                    background: "#202020",
                    border: "none",
                    padding: "0 10px",
                    width: "60px",
                    borderRadius: "12px 0 0 12px",
                  }}
                  dropdownStyle={{
                    backgroundColor: "#202020",
                    color: "#fff",
                    fontSize: "16px",
                  }}
                />
              </div>
            </div>

            {/* Row 3 */}
            <div>
              <label className="block mb-2 font-normal text-[13px] tracking-[-0.04em] text-white">
                Project type
              </label>
              <select className="w-[455px] h-[58px] rounded-lg bg-[#202020] px-4 text-white">
                <option>Brand Strategy & Identity</option>
                <option>Social Media & Marketing Campaigns</option>
                <option>Video Production and Motion Graphics</option>
                <option>Web Design & Development</option>
              </select>
            </div>

            {/* Row 4 */}
            <div>
              <label className="block mb-2 font-normal text-[13px] tracking-[-0.04em] text-white">
                Message
              </label>
              <textarea
                rows={4}
                className="w-[455px] h-[150px] rounded-lg bg-[#202020] px-4 py-2 text-white resize-none"
              />
            </div>

            {/* ✅ Submit Button */}
            <div
              style={{
                position: "relative",
                top: "-10px",
                left: "270px",
              }}
            >
              <button
                type="submit"
                className="text-white font-semibold rounded-full"
                style={{
                  background: "linear-gradient(90deg, #6C63FF 0%, #FF1B7E 100%)",
                  width: "170px",
                  height: "45px",
                  borderRadius: "50px",
                  fontSize: "16px",
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* 🔗 Footer Text Links */}
      <div className="absolute bottom-[140px] left-[40px] z-50">
        <Link href="/" className="absolute" style={{ bottom: "-710px", left: "240px", width: "100px", height: "20px" }} />
        <Link href="/about" className="absolute" style={{ bottom: "-760px", left: "240px", width: "100px", height: "20px" }} />
        <Link href="/services" className="absolute" style={{ bottom: "-803px", left: "240px", width: "100px", height: "20px" }} />
        <Link href="/cases" className="absolute" style={{ bottom: "-860px", left: "240px", width: "100px", height: "20px" }} />
        <Link href="/policy" className="absolute" style={{ bottom: "-900px", left: "240px", width: "120px", height: "20px" }} />
      </div>

      {/* 🔗 Footer Icons */}
      <div className="absolute bottom-[112px] left-[40px] z-20 flex gap-3">
        <a href="https://www.instagram.com/asq_creatives/" target="_blank" rel="noopener noreferrer" className="absolute" style={{ bottom: "-860px", left: "48px", width: "32px", height: "32px" }} />
        <a href="https://www.linkedin.com/company/101520418/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="absolute" style={{ bottom: "-860px", left: "108px", width: "32px", height: "32px" }} />
      </div>
    </div>
  );
}
