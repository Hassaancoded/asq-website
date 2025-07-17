"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Case1Page() {
  return (
    <div className="relative w-full min-h-screen">
      {/* 🌄 Full Background Image */}
      <img
        src="/About us4.png"
        alt="Background"
        className="absolute inset-0 w-full h-auto"
        style={{
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
        }}
      />

      {/* ✅ Navbar */}
      <div className="relative z-10">
        <Navbar />
      </div>

      {/* ✅ Top Right Clickable Areas */}
      {/* ✅ Book Consultation */}
      <a
        href="/contactform"
        className="absolute"
        style={{
          top: "37px",
          right: "250px",
          width: "218px",
          height: "50px",
          borderRadius: "25px",
          zIndex: 50,
        }}
      >
        <span className="sr-only">Go to Contact Page</span>
      </a>

      {/* ✅ Instagram & LinkedIn */}
      <div className="absolute top-6 right-6 z-20 flex items-center space-x-3">
        <a
          href="https://www.instagram.com/asq_creatives/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute"
          style={{
            top: "28px",
            right: "145px",
            width: "32px",
            height: "32px",
          }}
        >
          <span className="sr-only">Instagram</span>
        </a>
        <a
          href="https://www.linkedin.com/company/101520418/admin/dashboard/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute"
          style={{
            top: "18px",
            right: "90px",
            width: "32px",
            height: "32px",
          }}
        >
          <span className="sr-only">LinkedIn</span>
        </a>
      </div>

      {/* ✅ Main Image with Pink Border */}
      <div
        className="absolute"
        style={{
          top: "160px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <div
          style={{
            width: "1050px",
            border: "2px solid #FF1B7E",
            borderRadius: "30px",
            overflow: "hidden",
            display: "inline-block",
          }}
        >
          <img
            src="/case2-main.png"
            alt="Case 1 Main"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </div>
      </div>

      {/* ✅ 9 Boxes Section */}
      <div
        className="absolute"
        style={{
          top: "550px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "25px",
          width: "1100px",
          zIndex: 10,
        }}
      >
        {/* ✅ Box 1 */}
          {/* ✅ Box 1 */}
     <div
  style={{
    position: "relative",
    width: "342px",
    height: "205px",
    backgroundColor: "#f5f5f5",
    borderRadius: "1px",
    overflow: "hidden",
  }}
>
  <img
    src="/placeholder.png"
    alt="Example"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  />

  <div
    onClick={() => window.open("/placeholder.png", "_self")}
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "block",
      cursor: "pointer",
    }}
  ></div>
</div>



        {/* ✅ Box 2 */}
 <div
  style={{
    position: "relative",
    width: "342px",
    height: "205px",
    backgroundColor: "#f5f5f5",
    borderRadius: "1px",
    overflow: "hidden",
  }}
>
  <img
    src="/placeholder.png"
    alt="Example"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  />

  <div
    onClick={() => window.open("/placeholder.png", "_self")}
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "block",
      cursor: "pointer",
    }}
  ></div>
</div>


        {/* ✅ Box 3 */}
<div
  style={{
    position: "relative",
    width: "342px",
    height: "205px",
    backgroundColor: "#f5f5f5",
    borderRadius: "1px",
    overflow: "hidden",
  }}
>
  <img
    src="/placeholder.png"
    alt="Example"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  />

  <div
    onClick={() => window.open("/placeholder.png", "_self")}
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "block",
      cursor: "pointer",
    }}
  ></div>
</div>


        {/* ✅ Box 4 */}
<div
  style={{
    position: "relative",
    width: "342px",
    height: "205px",
    backgroundColor: "#f5f5f5",
    borderRadius: "1px",
    overflow: "hidden",
  }}
>
  <img
    src="/placeholder.png"
    alt="Example"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  />

  <div
    onClick={() => window.open("/placeholder.png", "_self")}
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "block",
      cursor: "pointer",
    }}
  ></div>
</div>


        {/* ✅ Box 5 */}
    <div
  style={{
    position: "relative",
    width: "342px",
    height: "205px",
    backgroundColor: "#f5f5f5",
    borderRadius: "1px",
    overflow: "hidden",
  }}
>
  <img
    src="/placeholder.png"
    alt="Example"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  />

  <div
    onClick={() => window.open("/placeholder.png", "_self")}
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "block",
      cursor: "pointer",
    }}
  ></div>
</div>

        {/* ✅ Box 6 */}
<div
  style={{
    position: "relative",
    width: "342px",
    height: "205px",
    backgroundColor: "#f5f5f5",
    borderRadius: "1px",
    overflow: "hidden",
  }}
>
  <img
    src="/placeholder.png"
    alt="Example"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  />

  <div
    onClick={() => window.open("/placeholder.png", "_self")}
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "block",
      cursor: "pointer",
    }}
  ></div>
</div>

        {/* ✅ Box 7 */}
<div
  style={{
    position: "relative",
    width: "342px",
    height: "205px",
    backgroundColor: "#f5f5f5",
    borderRadius: "1px",
    overflow: "hidden",
  }}
>
  <img
    src="/placeholder.png"
    alt="Example"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  />

  <div
    onClick={() => window.open("/placeholder.png", "_self")}
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "block",
      cursor: "pointer",
    }}
  ></div>
</div>

        {/* ✅ Box 8 */}
  <div
  style={{
    position: "relative",
    width: "342px",
    height: "205px",
    backgroundColor: "#f5f5f5",
    borderRadius: "1px",
    overflow: "hidden",
  }}
>
  <img
    src="/placeholder.png"
    alt="Example"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  />

  <div
    onClick={() => window.open("/placeholder.png", "_self")}
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "block",
      cursor: "pointer",
    }}
  ></div>
</div>

        {/* ✅ Box 9 */}
       <div
  style={{
    width: "342px",
    height: "205px",
    backgroundColor: "#202020",
    overflow: "hidden",
    position: "relative",
  }}
>
  <img
    src="/placeholder.png"
    alt="Box 9"
    style={{ width: "100%", height: "100%", objectFit: "cover" }}
  />

  {/* ✅ Replaced <a> with clickable div */}
  <div
    onClick={() => window.open("/placeholder.png", "_self")}
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "block",
      cursor: "pointer",
    }}
  ></div>
</div>
   </div>

      {/* ✅ Footer Links */}
      <div className="absolute bottom-[140px] left-[40px] z-50">
        <Link href="/" className="absolute" style={{ bottom: "-720px", left: "240px", width: "100px", height: "20px" }} />
        <Link href="/about" className="absolute" style={{ bottom: "-766px", left: "240px", width: "100px", height: "20px" }} />
        <Link href="/services" className="absolute" style={{ bottom: "-810px", left: "240px", width: "100px", height: "20px" }} />
        <Link href="/cases" className="absolute" style={{ bottom: "-855px", left: "240px", width: "100px", height: "20px" }} />
        <Link href="/policy" className="absolute" style={{ bottom: "-900px", left: "240px", width: "120px", height: "20px" }} />
      </div>

      {/* ✅ Footer Icons */}
      <div className="absolute bottom-[60px] left-[40px] z-20 flex gap-3">
        <a href="https://www.instagram.com/asq_creatives/" target="_blank" rel="noopener noreferrer" className="absolute" style={{ bottom: "-820px", left: "48px", width: "32px", height: "32px" }} />
        <a href="https://www.linkedin.com/company/101520418/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="absolute" style={{ bottom: "-820px", left: "108px", width: "32px", height: "32px" }} />
      </div>
    </div>
  );
}