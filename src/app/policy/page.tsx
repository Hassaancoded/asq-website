import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="relative w-full h-screen">
      {/* 🌄 Full Background Image with manual adjustment */}
      <img
        src="/Aboutus7.png"
        alt="Background"
        className="absolute object-cover w-full h-auto left-0 right-0 bottom-0"
        style={{
          top: "0px", // You can adjust top/bottom/left/right freely
          left: "0px",
          right: "0px",
          bottom: "0px",
        }}
      />

      {/* 🔗 Top Right Icons */}

{/* ✅ Clickable Area Over "Book Consultation" */}
<a
  href="/contactform" // ✅ Your Contact page route
  className="absolute" // ✅ TEMP color for alignment
  style={{
    top: "37px",   // ✅ Adjust manually
    right: "160px", // ✅ Adjust manually
    width: "218px", // ✅ Width same as green button
    height: "50px", // ✅ Height same as green button
    borderRadius: "25px", // ✅ Matches rounded button
    zIndex: 50, // ✅ Keeps it clickable
  }}
>
  <span className="sr-only">Go to Contact Page</span>
</a>



      <div className="absolute top-6 right-6 z-20 flex items-center space-x-3">
        <a
          href="https://www.instagram.com/asq_creatives/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute"
          style={{
            top: "25px",
            right: "83px",
            width: "40px",
            height: "40px",
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
            top: "25px",
            right: "24px",
            width: "40px",
            height: "40px",
          }}
        >
          <span className="sr-only">LinkedIn</span>
        </a>
      </div>

      {/* 🌟 Foreground Content */}
      <div className="relative z-10 min-h-screen overflow-y-auto px-4 pb-52">
        <Navbar />

      {/* Main Policy Image */}
<div className="flex justify-center pt-28">
  <img
    src="/policy1.png"
    alt="About Visual"
    className="w-[1199px] object-contain relative rounded-[50px] border-4 border-[#FF1B7E] shadow-lg"
    style={{
      top: "50px",        // 🔧 adjust freely
      left: "0px",       // 🔧 adjust freely
      height: "auto",    // or "600px", etc.
      position: "relative",
    }}
  />
</div>


       {/* Policy Text Image */}
<div className="relative z-10 min-h-screen px-4 pb-52">

  <img
    src="/policy-text.png"
    alt="About Text 1"
    className="w-[1200px] object-contain relative"
    style={{
      top: "95px",      // 🔧 adjust freely
      left: "135px",     // 🔧 adjust freely
      height: "auto",   // or "600px", etc.
      position: "relative",
    }}
  />
</div>

      </div>

      {/* 🔗 Footer Text Links (No color now) */}
      <div className="absolute bottom-[140px] left-[40px] z-50">
        <Link
          href="/"
          className="absolute"
          style={{
            bottom: "-1220px",
            left: "280px",
            width: "60px",
            height: "20px",
          }}
        >
          <span className="sr-only">Main</span>
        </Link>

        <Link
          href="/about"
          className="absolute"
          style={{
            bottom: "-1265px",
            left: "290px",
            width: "80px",
            height: "20px",
          }}
        >
          <span className="sr-only">About</span>
        </Link>

        <Link
          href="/services"
          className="absolute"
          style={{
            bottom: "-1310px",
            left: "280px",
            width: "100px",
            height: "20px",
          }}
        >
          <span className="sr-only">Services</span>
        </Link>

        <Link
          href="/cases"
          className="absolute"
          style={{
            bottom: "-1355px",
            left: "280px",
            width: "80px",
            height: "20px",
          }}
        >
          <span className="sr-only">Cases</span>
        </Link>

        <Link
          href="/policy"
          className="absolute"
          style={{
            bottom: "-1400px",
            left: "280px",
            width: "140px",
            height: "20px",
          }}
        >
          <span className="sr-only">Policy</span>
        </Link>
      </div>

      {/* 🔗 Footer Icons (No color now) */}
      <div className="absolute bottom-[60px] left-[40px] z-20 flex gap-3">
        <a
          href="https://www.instagram.com/asq_creatives/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute"
          style={{
            bottom: "-1330px",
            left: "28px",
            width: "42px",
            height: "42px",
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
            bottom: "-1330px",
            left: "90px",
            width: "42px",
            height: "42px",
          }}
        >
          <span className="sr-only">LinkedIn</span>
        </a>
      </div>
    </div>
  );
}
