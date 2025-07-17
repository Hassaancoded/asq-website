"use client";

export default function SecondSection() {
  return (
    <section
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/second-bg.png')" }}
    >
      <div className="bg-black/40 min-h-screen w-full flex flex-col items-center pt-[10%] px-6">
        
        {/* Headings */}
        <img src="/middle-text.png" alt="Main Line" className="w-[500px] h-auto mb-4" />
        <img src="/middle-text2.png" alt="Second Line" className="w-[500px] h-auto mb-10" />

        {/* Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          
          {/* ✅ Box 1 */}
          <div
            className="relative group cursor-pointer overflow-hidden"
            style={{
              width: "250px",
              height: "230px", // ✅ Same as other boxes
              backgroundColor: "#fff",
              borderRadius: "120px 0 0 0" // Top-left curve
            }}
          >
            {/* Pink Overlay */}
            <div
              className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
              style={{
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "#FF1B7E",
                borderRadius: "120px 0 0 0"
              }}
            ></div>

            {/* Text */}
            <div
              className="absolute z-20 flex flex-col items-center gap-2"
              style={{
                top: "130px", // ✅ Adjust text position here
                left: "35px"
              }}
            >
              <img src="/box1-heading.png" alt="Heading" className="w-[170px]" />
              <img src="/box1-subheading.png" alt="Subheading" className="w-[190px]" />
            </div>
          </div>

          {/* ✅ Box 2 */}
          <div
            className="relative group cursor-pointer overflow-hidden rounded-lg"
            style={{
              width: "250px",
              height: "230px",
              backgroundColor: "#fff",
              borderRadius: "20px"
            }}
          >
            {/* Pink Overlay */}
            <div
              className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
              style={{
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "#FF1B7E",
                borderRadius: "20px"
              }}
            ></div>

            {/* Text */}
            <div
              className="absolute z-20 flex flex-col items-center gap-2"
              style={{
                top: "130px", // ✅ You can change this
                left: "25px"
              }}
            >
              <img src="/box2-heading.png" alt="Heading" className="w-[180px]" />
              <img src="/box2-subheading.png" alt="Subheading" className="w-[190px]" />
            </div>
          </div>

          {/* ✅ Box 3 */}
          <div
            className="relative group cursor-pointer overflow-hidden rounded-lg"
            style={{
              width: "250px",
              height: "230px",
              backgroundColor: "#fff",
              borderRadius: "20px"
            }}
          >
            <div
              className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
              style={{
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "#FF1B7E",
                borderRadius: "20px"
              }}
            ></div>

            <div
              className="absolute z-20 flex flex-col items-center gap-2"
              style={{
                top: "125px", // ✅ Change this for up/down
                left: "22px"
              }}
            >
              <img src="/box3-heading.png" alt="Heading" className="w-[150px]" />
              <img src="/box3-subheading.png" alt="Subheading" className="w-[180px]" />
            </div>
          </div>

          {/* ✅ Box 4 */}
          <div
            className="relative group cursor-pointer overflow-hidden"
            style={{
              width: "250px",
              height: "230px", // ✅ Same as others
              backgroundColor: "#fff",
              borderRadius: "10px 100px 10px 10px"
            }}
          >
            <div
              className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
              style={{
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "#FF1B7E",
                borderRadius: "10px 100px 10px 10px"
              }}
            ></div>

            <div
              className="absolute z-20 flex flex-col items-center gap-2"
              style={{
                top: "125px", // ✅ Adjust text position
                left: "25px"
              }}
            >
              <img src="/box4-heading.png" alt="Heading" className="w-[170px]" />
              <img src="/box4-subheading.png" alt="Subheading" className="w-[190px]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
