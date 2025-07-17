import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="relative w-full h-screen">
      {/* 🌄 Full Background Image */}
      <img
        src="/About us4.png"
        alt="Background"
        className="absolute inset-0 w-full"
      />

      {/* 🔗 Top Right Icons (previously added) */}
{/* ✅ Clickable Area Over "Book Consultation" */}
<a
  href="/contactform" // ✅ Your Contact page route
  className="absolute" // ✅ TEMP color for alignment
  style={{
    top: "37px",   // ✅ Adjust manually
    right: "250px", // ✅ Adjust manually
    width: "218px", // ✅ Width same as green button
    height: "50px", // ✅ Height same as green button
    borderRadius: "25px", // ✅ Matches rounded button
    zIndex: 50, // ✅ Keeps it clickable
  }}
>
  <span className="sr-only">Go to Contact Page</span>
</a>



      <div className="absolute top-6 right-6 z-20 flex items-center space-x-3">
        {/* Instagram */}
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

        {/* LinkedIn */}
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

      {/* 🌟 Foreground Content */}
      <div className="relative z-10 min-h-screen overflow-y-auto px-4 pb-52">
        <Navbar />

        {/* Get to Know Us */}
        <div className="flex justify-center pt-28">
          <img
            src="/about-image.png"
            alt="About Visual"
            className="w-[1199px] h-auto rounded-[50px] border-4 border-[#FF1B7E] shadow-lg"
          />
        </div>

        {/* Text Section 1 */}
        <div className="flex justify-center mt-8">
          <img
            src="/text-image-1.png"
            alt="About Text 1"
            className="w-[1199px] h-auto object-contain"
          />
        </div>

        {/* Text Section 2 */}
        <div className="flex justify-center mt-8">
          <img
            src="/text-image-2.png"
            alt="About Text 2"
            className="w-[1199px] h-auto object-contain"
          />
        </div>
      </div>
{/* 🔗 Footer Text Links (Main, About, Services, etc.) */}
<div className="absolute bottom-[140px] left-[40px] z-50">
  <Link
    href="/"
    className="absolute " // TEMP color to see clickable area
    style={{
      bottom: "-720px",
      left: "240px",
      width: "100px",
      height: "20px",
    }}
  >
    <span className="sr-only">Main</span>
  </Link>

  <Link
    href="/about"
    className="absolute "
    style={{
      bottom: "-766px",
      left: "240px",
      width: "100px",
      height: "20px",
    }}
  >
    <span className="sr-only">About</span>
  </Link>

  <Link
    href="/services"
    className="absolute "
    style={{
      bottom: "-810px",
      left: "240px",
      width: "100px",
      height: "20px",
    }}
  >
    <span className="sr-only">Services</span>
  </Link>

  <Link
    href="/cases"
    className="absolute "
    style={{
      bottom: "-855px",
      left: "240px",
      width: "100px",
      height: "20px",
    }}
  >
    <span className="sr-only">Cases</span>
  </Link>

  <Link
    href="/policy"
    className="absolute "
    style={{
      bottom: "-900px",
      left: "240px",
      width: "120px",
      height: "20px",
    }}
  >
    <span className="sr-only">Policy</span>
  </Link>
</div>


   {/* 🔗 Footer Icons (Instagram + LinkedIn) */}
<div className="absolute bottom-[60px] left-[40px] z-20 flex gap-3">
  <a
    href="https://www.instagram.com/asq_creatives/"
    target="_blank"
    rel="noopener noreferrer"
    className="absolute"
    style={{
      bottom: "-820px",
      left: "48px",
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
    className="absolute "
    style={{
      bottom: "-820px",
      left: "108px",
      width: "32px",
      height: "32px",
    }}
  >
    <span className="sr-only">LinkedIn</span>
  </a>
</div>

    </div>
  );
}
