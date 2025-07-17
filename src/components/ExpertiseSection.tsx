"use client";

export default function ExpertiseSection() {
  return (
    <section
      className="min-h-screen w-full bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: "url('/expertise-bg.png')" }} // 👈 Add your background image here
    >
      {/* Dark overlay for better readability (optional) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Foreground Image */}
      <img
        src="/Gettoknowus.png"
        alt="Expertise Section"
        className="relative z-10 max-w-full h-auto object-contain"
      />
    </section>
  );
}
