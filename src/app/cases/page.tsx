import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function CasesPage() {
  return (
    <div className="relative w-full h-screen">
      {/* 🌄 Full Background Image */}
      <img
        src="/About us4.png"
        alt="Background"
        className="absolute inset-0 w-full"
        style={{
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
        }}
      />

      {/* ✅ Top Right Links */}
      {/* Clickable Area Over "Book Consultation" */}
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

      {/* Instagram & LinkedIn */}
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
        ></a>

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
        ></a>
      </div>

      {/* ✅ Navbar */}
      <div className="relative z-10">
        <Navbar />
      </div>

      {/* ✅ Main Image */}
      <div
        className="absolute"
        style={{
          top: "145px",
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
            src="/cases-main.png"
            alt="Cases Main"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </div>
      </div>

      {/* ✅ Boxes Section */}
      <div
        className="absolute"
        style={{
          top: "550px",
          left: "48%",
          transform: "translateX(-50%)",
          display: "grid",
          gridTemplateColumns: "repeat(3, auto)",
          gap: "25px",
          zIndex: 10,
        }}
      >
        {/* ✅ Box 1 */}
        <Link href="/cases/case1">
          <div
            style={{
              width: "300px",
              height: "310px",
              borderRadius: "28px",
              backgroundColor: "#202020",
              position: "relative",
              padding: "15px",
              cursor: "pointer",
            }}
          >
            <img
              src="/box1-top.png"
              alt="Box 1 Top"
              style={{
                width: "280px",
                height: "150px",
                borderRadius: "20px",
                margin: "0 auto",
              }}
            />
            <img
              src="/box1-text.png"
              alt="Box 1 Text"
              style={{
                width: "160px",
                height: "50px",
                marginTop: "10px",
                marginLeft: "10px",
              }}
            />
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#fff",
                position: "absolute",
                bottom: "15px",
                right: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/box1-icon.png"
                alt="Box 1 Icon"
                style={{ width: "50px", height: "45px" }}
              />
            </div>
          </div>
        </Link>

        {/* ✅ Box 2 */}
        <Link href="/cases/case2">
          <div
            style={{
              width: "300px",
              height: "310px",
              borderRadius: "28px",
              backgroundColor: "#202020",
              position: "relative",
              padding: "15px",
              cursor: "pointer",
            }}
          >
            <img
              src="/box2-top.png"
              alt="Box 2 Top"
              style={{
                width: "280px",
                height: "150px",
                borderRadius: "20px",
                margin: "0 auto",
              }}
            />
            <img
              src="/box2-text.png"
              alt="Box 2 Text"
              style={{
                width: "160px",
                height: "50px",
                marginTop: "10px",
                marginLeft: "10px",
              }}
            />
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#fff",
                position: "absolute",
                bottom: "15px",
                right: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/box2-icon.png"
                alt="Box 2 Icon"
                style={{ width: "50px", height: "45px" }}
              />
            </div>
          </div>
        </Link>

        {/* ✅ Box 3 */}
        <Link href="/cases/case3">
          <div
            style={{
              width: "300px",
              height: "310px",
              borderRadius: "28px",
              backgroundColor: "#202020",
              position: "relative",
              padding: "15px",
              cursor: "pointer",
            }}
          >
            <img
              src="/box3-top.png"
              alt="Box 3 Top"
              style={{
                width: "280px",
                height: "150px",
                borderRadius: "20px",
                margin: "0 auto",
              }}
            />
            <img
              src="/box3-text.png"
              alt="Box 3 Text"
              style={{
                width: "160px",
                height: "50px",
                marginTop: "10px",
                marginLeft: "10px",
              }}
            />
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#fff",
                position: "absolute",
                bottom: "15px",
                right: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/box3-icon.png"
                alt="Box 3 Icon"
                style={{ width: "50px", height: "45px" }}
              />
            </div>
          </div>
        </Link>

        {/* ✅ Box 4 */}
        <Link href="/cases/case4">
          <div
            style={{
              width: "300px",
              height: "310px",
              borderRadius: "28px",
              backgroundColor: "#202020",
              position: "relative",
              marginTop: "30px",
              gridColumn: "1 / 2",
              padding: "15px",
              cursor: "pointer",
            }}
          >
            <img
              src="/box4-top.png"
              alt="Box 4 Top"
              style={{
                width: "280px",
                height: "150px",
                borderRadius: "20px",
                margin: "0 auto",
              }}
            />
            <img
              src="/box4-text.png"
              alt="Box 4 Text"
              style={{
                width: "145px",
                height: "68px",
                marginTop: "10px",
                marginLeft: "10px",
              }}
            />
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#fff",
                position: "absolute",
                bottom: "15px",
                right: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/box4-icon.png"
                alt="Box 4 Icon"
                style={{ width: "50px", height: "45px" }}
              />
            </div>
          </div>
        </Link>
      </div>

      {/* ✅ Footer Text Links */}
      <div className="absolute bottom-[140px] left-[40px] z-50">
        <Link href="/" className="absolute" style={{ bottom: "-720px", left: "240px", width: "100px", height: "20px" }}></Link>
        <Link href="/about" className="absolute" style={{ bottom: "-766px", left: "240px", width: "100px", height: "20px" }}></Link>
        <Link href="/services" className="absolute" style={{ bottom: "-810px", left: "240px", width: "100px", height: "20px" }}></Link>
        <Link href="/cases" className="absolute" style={{ bottom: "-855px", left: "240px", width: "100px", height: "20px" }}></Link>
        <Link href="/policy" className="absolute" style={{ bottom: "-900px", left: "240px", width: "120px", height: "20px" }}></Link>
      </div>

      {/* ✅ Footer Icons */}
      <div className="absolute bottom-[60px] left-[40px] z-20 flex gap-3">
        <a href="https://www.instagram.com/asq_creatives/" target="_blank" rel="noopener noreferrer" className="absolute" style={{ bottom: "-825px", left: "48px", width: "32px", height: "32px" }}></a>
        <a href="https://www.linkedin.com/company/101520418/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="absolute" style={{ bottom: "-825px", left: "108px", width: "32px", height: "32px" }}></a>
      </div>
    </div>
  );
}