"use client";

import { useState, useEffect } from "react";

export default function ThirdSection() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const cards = [
    {
      img: "/service1.png",
      title: "Social Media & Marketing",
      desc: "Performance-driven campaigns with impactful content and growth-focused social media strategies.",
    },
    {
      img: "/service22.jpg",
      title: "Brand Strategy & Identity",
      desc: "Strategic branding through visual identity, logo design, posters, and compelling storytelling.",
    },
    {
      img: "/service3.png",
      title: "Video Production & Motion Graphics",
      desc: "Cinematic videos, branded reels, professional shoots, and engaging motion graphics.",
    },
    {
      img: "/service4.png",
      title: "Web Design & Development",
      desc: "Custom websites, ecommerce platforms, and landing pages optimized for performance and SEO.",
    },
  ];

  // ✅ Keyboard Navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % cards.length);
      } else if (e.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [cards.length]);

  // ✅ Default Tilt for cards
  const getDefaultTilt = (index: number) => {
    if (index === 0) return "perspective(1000px) rotateY(28deg)";
    if (index === 1) return "perspective(1000px) rotateY(18deg)";
    if (index === 2) return "perspective(1000px) rotateY(-18deg)";
    if (index === 3) return "perspective(1000px) rotateY(-28deg)";
    return "perspective(1000px) rotateY(0deg)";
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden font-poppins">
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Headings */}
      <div className="flex flex-col items-center mb-10">
        <img
          src="/heading1-image.png"
          alt="Main Heading"
          className="w-[500px] h-auto mb-4"
        />
        <img
          src="/subheading-image.png"
          alt="Sub Heading"
          className="w-[400px] h-auto"
        />
      </div>

      {/* Cards Wrapper */}
      <div
        className="mt-2 flex flex-col items-center"
        style={{ perspective: "1000px" }}
      >
        <div className="flex justify-center gap-12 z-10">
          {cards.map((card, index) => {
            const isHovered = hovered === index;
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setActiveIndex(index)}
                className="relative transition-all duration-700 ease-in-out"
                style={{
                  transform: (isHovered || isActive)
                    ? "translateZ(80px) scale(1.1)"
                    : getDefaultTilt(index),
                  transformStyle: "preserve-3d",
                  width: (isHovered || isActive) ? "280px" : "260px",
                  height: (isHovered || isActive) ? "380px" : "400px",
                  zIndex: (isHovered || isActive) ? 30 : 1,
                }}
              >
                {/* ✅ Card Wrapper */}
                <div
                  className={`relative w-full h-full overflow-hidden transform transition-all duration-700 ease-in-out card-wrapper ${
                    isHovered || isActive
                      ? "rotate-0 curved-card"
                      : ""
                  }`}
                >
                  {/* ✅ Inner wrapper for hover radius */}
                  <div
                    className={`w-full h-full transition-all duration-700 ease-in-out card-inner ${
                      isHovered ? "hovered-radius" : ""
                    }`}
                    style={{
                      borderRadius: isHovered ? "40px" : "20px", // Curve all sides on hover
                    }}
                  >
                    {/* Full Pink Background */}
                    <div
                      className={`absolute inset-0 bg-[#FF1B7E] transition-all duration-700 ${
                        isHovered || isActive ? "opacity-100" : "opacity-0"
                      }`}
                      style={{ zIndex: 0 }}
                    ></div>

                    {/* Pink Curve */}
                    <div
                      className={`custom-curve ${
                        isHovered || isActive ? "active-curve" : ""
                      }`}
                    ></div>

                    {/* Image */}
                    <img
                      src={card.img}
                      alt={card.title}
                      className={`absolute left-1/2 transform -translate-x-1/2 object-cover transition-all duration-700 ease-in-out ${
                        isHovered || isActive
                          ? "h-[130px] w-[90%] top-3"
                          : "h-full w-full top-0"
                      }`}
                      style={{
                        zIndex: 2,
                        borderRadius: isHovered ? "40px" : "20px",
                      }}
                    />

                    {/* ✅ Text right below image */}
                    <div
                      className={`absolute left-2 w-full flex flex-col items-start px-6 text-white transition-all duration-700 ${
                        isHovered || isActive
                          ? "opacity-100 top-[150px]"
                          : "opacity-0 top-[180px]"
                      }`}
                      style={{
                        zIndex: 3,
                        maxWidth: "90%",
                      }}
                    >
                      {/* Title */}
                      <h3 className="text-[22px] font-bold leading-snug mb-2">
                        {card.title}
                      </h3>
                      {/* Description */}
                      <p className="text-[14px] font-normal leading-snug tracking-wide break-words">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* ✅ Arrow Button smaller & lower */}
                <div
                  className={`absolute w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center shadow-lg transform transition-all duration-700 ease-in-out ${
                    isHovered || isActive
                      ? "scale-100 opacity-100 bottom-[10px] left-[20px]"
                      : "scale-0 opacity-0 bottom-[0] left-[0]"
                  }`}
                  style={{ zIndex: 10 }}
                >
                  <img
                    src="/arrow-icon.png"
                    alt="Arrow"
                    className="w-15 h-15"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="flex gap-3 mt-10 z-10">
          {cards.map((_, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer transition-all duration-500 ${
                activeIndex === index
                  ? "w-10 bg-indigo-500 rounded-full"
                  : "w-4 bg-purple-300 rounded-full"
              } h-4`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
