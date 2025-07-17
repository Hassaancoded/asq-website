export default function LogoMarquee() {
  return (
    <div className="w-full overflow-hidden bg-black py-6 relative">
      <div className="flex items-center whitespace-nowrap animate-marquee">
        {/* Replace with your logo images */}
        <img src="/ads.png" alt="Ad 1" className="h-16 mx-8" />
        <img src="/ads.png" alt="Ad 2" className="h-16 mx-8" />
        <img src="/ads.png" alt="Ad 3" className="h-16 mx-8" />
        <img src="/ads.png" alt="Ad 4" className="h-16 mx-8" />
        {/* Duplicate for smooth looping */}
        <img src="/ads.png" alt="Ad 5" className="h-16 mx-8" />
        <img src="/ads.png" alt="Ad 6" className="h-16 mx-8" />
        <img src="/ads.png" alt="Ad 7" className="h-16 mx-8" />
        <img src="/ads.png" alt="Ad 8" className="h-16 mx-8" />
      </div>
    </div>
  );
}
