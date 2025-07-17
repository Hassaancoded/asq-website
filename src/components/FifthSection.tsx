"use client";

import Link from "next/link";

export default function SixthSection() {
  return (
    <section
      className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden"

    >
      {/* 🔆 Pink Glow Spot */}
      <div className="absolute w-[400px] h-[400px] bg-pink-500 opacity-30 rounded-full blur-[160px] top-[20%] left-[10%] z-0"></div>

      {/* 🌐 Main Image with Clickable Area */}
      <div
        className="w-[700px] h-[700px] flex items-center justify-center relative z-10"
        style={{
          marginTop: "-50px", // ✅ Adjust upward
        }}
      >
        <Link href="/contactform">
          <img
            src="/main-image.png" // ✅ Main Image
            alt="Contact Visual"
            className="w-full h-auto object-contain cursor-pointer"
          />
        </Link>
      </div>

      {/* 🖼️ Bottom Decorative Image (Second Image) */}
      <div
        className="z-10"
        style={{
          position: "absolute",
          bottom: "40px",
          right: "500px",
          width: "400px",
        }}
      >
        <img
          src="/your-second-image.png"
          alt="Bottom Graphic"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* ✅ Left-Side Image 1 */}
      <div
        className="z-10"
        style={{
          position: "absolute",
          bottom: "40px",
          left: "200px",
          width: "140px",
        }}
      >
        <img
          src="/your-left-image.png"
          alt="Left Graphic"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* ✅ Left-Side Image 2 */}
      <div
        className="z-10"
        style={{
          position: "absolute",
          bottom: "240px",
          left: "40px",
          width: "140px",
        }}
      >
        <img
          src="/your-left-image-2.png"
          alt="Left Graphic 2"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* ✅ Left-Side Image 3 */}
      <div
        className="z-10"
        style={{
          position: "absolute",
          bottom: "40px",
          left: "70px",
          width: "70px",
        }}
      >
        <img
          src="/your-left-image-3.png"
          alt="Left Graphic 3"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* ✅ Invisible Hamburger Menu Links (with temp color) */}
      <div className="absolute top-[453px] left-[170px] z-50 flex flex-col space-y-4 ">
        {/* Home */}
        <Link
          href="/"
          className=""
          style={{ width: "120px", height: "40px" }}
        ></Link>

        {/* About */}
        <Link
          href="/about"
          className=""
          style={{ width: "120px", height: "40px" }}
        ></Link>

        {/* Services */}
        <Link
          href="/services"
          className=""
          style={{ width: "120px", height: "40px" }}
        ></Link>

        {/* Cases */}
        <Link
          href="/cases"
          className=""
          style={{ width: "120px", height: "40px" }}
        ></Link>

        {/* Policy */}
        <Link
          href="/policy"
          className=""
          style={{ width: "170px", height: "40px" }}
        ></Link>
      </div>

 {/* ✅ Right-Bottom Image */}
      <div
        className="z-10"
        style={{
          position: "absolute",
          bottom: "20px",
          right: "5px",
          width: "720px",
        }}
      >
        <img
          src="/your-right-bottom-image.png"
          alt="Right Bottom Graphic"
          className="w-full h-auto object-contain"
        />
      </div>

     {/* ✅ Instagram Link */}
<a
  href="https://www.instagram.com/asq_creatives/"
  target="_blank"
  rel="noopener noreferrer"
  className="absolute  z-50"
  style={{
    bottom: "40px", // Adjust manually
    left: "70px",   // Adjust manually
    width: "30px",
    height: "50px",
  }}
></a>

{/* ✅ LinkedIn Link */}
<a
  href="https://www.linkedin.com/company/101520418/admin/dashboard/"
  target="_blank"
  rel="noopener noreferrer"
  className="absolute  z-50"
  style={{
    bottom: "40px", // Adjust manually
    left: "110px",  // Adjust manually
    width: "30px",
    height: "50px",
  }}
></a>

    </section>
  );
}
