import "../styles/globals.css";
import SearchBar from "@/components/SearchBar";
import Navigation from "@/components/Navigation";
import HeroCarousel from "@/components/HeroCarousel";
import Header from "@/components/Header";

export const metadata = {
  title: "أبيض X أزرق",
  description: "موقع أبيض في أزرق",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <Header />

        <main className="pt-8">{children}</main>

        <footer className="mt-10">
          {/* Logo section with gradient background */}
          <div className="bg-gradient-to-r from-[#3454a5] to-[#4a6bc7] py-12">
            <div className="flex flex-col items-center justify-center text-white">
              <img
                src="/images/4eb65c7c-afd1-4488-b3cb-9658f84eb7a4_removalai_preview.png"
                className=" h-64 object-contain "
                alt="Logo"
              />
            </div>
          </div>

          {/* Social links section with lighter blue background */}
          <div className="bg-[#5a7dd1] py-8">
            <div className="flex justify-center items-center gap-4">
              <div className="h-[1px] w-32 bg-white/30"></div>
              <p className="text-white text-sm whitespace-nowrap">
                خليك علي تواصل وتفاعل
              </p>
              <div className="h-[1px] w-32 bg-white/30"></div>
              <a
                href=""
                className="text-white hover:text-gray-200 transition-colors duration-300 w-10 h-10 flex items-center justify-center border border-white/30 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href=""
                className="text-white hover:text-gray-200 transition-colors duration-300 w-10 h-10 flex items-center justify-center border border-white/30 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href=""
                className="text-white hover:text-gray-200 transition-colors duration-300 w-10 h-10 flex items-center justify-center border border-white/30 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href=""
                className="text-white hover:text-gray-200 transition-colors duration-300 w-10 h-10 flex items-center justify-center border border-white/30 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href=""
                className="text-white hover:text-gray-200 transition-colors duration-300 w-10 h-10 flex items-center justify-center border border-white/30 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Partners section with white background */}
          <div className="bg-white py-8">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex items-center justify-center gap-8 flex-wrap">
                <div className="flex items-center justify-center h-16">
                  <img
                    src="/images/fot-1.jpeg"
                    className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                    alt="Partner 1"
                  />
                </div>
                <div className="flex items-center justify-center h-16">
                  <img
                    src="/images/fot-2.png"
                    className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                    alt="Partner 2"
                  />
                </div>
                <div className="flex items-center justify-center h-16">
                  <img
                    src="/images/fot-3.jpg"
                    className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                    alt="Partner 3"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Copyright section */}
          <div className="bg-[#3454a5] py-4">
            <div className="text-center text-white text-sm">
              <p>© 2024 Copyright by أبيض X أزرق - All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
