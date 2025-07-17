"use client";

export default function SixthSection() {
  return (
    <section
   className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden"

    >
      {/* ✅ Dark Overlay */}
      <div className="absolute inset-0 bg-transparent/50 z-0"></div>

      {/* ✅ Content Wrapper */}
      <div className="relative w-full max-w-[1400px] z-10">
        {/* ✅ Heading Images */}
        <div className="flex flex-col justify-center items-center mb-12 space-y-6">
          <img
            src="/heading-image.png"
            alt="Heading"
            className="w-[600px] h-auto object-contain"
          />
          <img
            src="/sub-heading-image.png"
            alt="Sub Heading"
            className="w-[700px] h-auto object-contain"
          />
        </div>

        {/* ✅ Cards */}
        <div className="relative w-full h-[850px] mx-auto">
          {/* ✅ Card 1 */}
          <div className="absolute top-[0px] left-[300px] w-[250px] h-[220px] bg-pink-500 rounded-xl shadow-lg relative overflow-hidden">
            {/* Number Image */}
            <img
              src="/card1-number.png"
              alt="01"
              style={{
                width: "70px",
                position: "absolute",
                top: "15px",
                left: "20px",
              }}
            />
            {/* Text Image */}
            <img
              src="/card1-text.png"
              alt="Card 1 Text"
              style={{
                width: "180px",
                position: "absolute",
                bottom: "15px",
                left: "20px",
              }}
            />
          </div>

          {/* ✅ Card 2 */}
          <div className="absolute top-[-220px] left-[580px] w-[422px] h-[220px] bg-white rounded-xl shadow-lg relative overflow-hidden">
            <img
              src="/card2-number.png"
              alt="02"
              style={{
                width: "80px",
                position: "absolute",
                top: "15px",
                left: "25px",
              }}
            />
            <img
              src="/card2-text.png"
              alt="Card 2 Text"
              style={{
                width: "350px",
                position: "absolute",
                bottom: "15px",
                left: "25px",
              }}
            />
          </div>

          {/* ✅ Card 3 */}
          <div className="absolute top-[-190px] left-[60px] w-[250px] h-[217px] bg-white rounded-xl shadow-lg relative overflow-hidden">
            <img
              src="/card3-number.png"
              alt="03"
              style={{
                width: "70px",
                position: "absolute",
                top: "15px",
                left: "20px",
              }}
            />
            <img
              src="/card3-text.png"
              alt="Card 3 Text"
              style={{
                width: "190px",
                position: "absolute",
                bottom: "15px",
                left: "20px",
              }}
            />
          </div>

          {/* ✅ Card 4 (Glass Effect) */}
          <div
            className="absolute relative overflow-hidden"
            style={{
              width: "225px",
              height: "294px",
              top: "-410px",
              left: "340px",
              background: "rgba(217, 217, 217, 0.3)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              borderRadius: "20px",
            }}
          >
            <img
              src="/card4-number.png"
              alt="04"
              style={{
                width: "70px",
                position: "absolute",
                top: "15px",
                left: "20px",
              }}
            />
            <img
              src="/card4-text.png"
              alt="Card 4 Text"
              style={{
                width: "190px",
                position: "absolute",
                bottom: "15px",
                left: "20px",
              }}
            />
          </div>

          {/* ✅ Card 5 (Glass Effect) */}
          <div
            className="absolute relative overflow-hidden"
            style={{
              width: "236px",
              height: "209px",
              top: "-710px",
              left: "770px",
              background: "rgba(217, 217, 217, 0.3)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              borderRadius: "20px",
            }}
          >
            <img
              src="/card5-number.png"
              alt="05"
              style={{
                width: "70px",
                position: "absolute",
                top: "15px",
                left: "20px",
              }}
            />
            <img
              src="/card5-text.png"
              alt="Card 5 Text"
              style={{
                width: "190px",
                position: "absolute",
                bottom: "15px",
                left: "20px",
              }}
            />
          </div>

          {/* ✅ Card 6 */}
          <div className="absolute top-[-1050px] right-[-1030px] w-[225px] h-[209px] bg-pink-500 rounded-xl shadow-lg relative overflow-hidden">
            <img
              src="/card6-number.png"
              alt="06"
              style={{
                width: "70px",
                position: "absolute",
                top: "15px",
                left: "20px",
              }}
            />
            <img
              src="/card6-text.png"
              alt="Card 6 Text"
              style={{
                width: "190px",
                position: "absolute",
                bottom: "15px",
                left: "20px",
              }}
            />
          </div>

          {/* ✅ Card 7 */}
          <div className="absolute top-[-1010px] left-[1030px] w-[225px] h-[217px] bg-white rounded-xl shadow-lg relative overflow-hidden">
            <img
              src="/card7-number.png"
              alt="07"
              style={{
                width: "70px",
                position: "absolute",
                top: "15px",
                left: "20px",
              }}
            />
            <img
              src="/card7-text.png"
              alt="Card 7 Text"
              style={{
                width: "190px",
                position: "absolute",
                bottom: "15px",
                left: "20px",
              }}
            />
          </div>

          {/* ✅ Card 8 */}
          <div className="absolute top-[-1110px] right-[-610px] w-[225px] h-[217px] bg-indigo-500 rounded-xl shadow-lg relative overflow-hidden">
            <img
              src="/card8-number.png"
              alt="08"
              style={{
                width: "70px",
                position: "absolute",
                top: "15px",
                left: "20px",
              }}
            />
            <img
              src="/card8-text.png"
              alt="Card 8 Text"
              style={{
                width: "190px",
                position: "absolute",
                bottom: "15px",
                left: "20px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
