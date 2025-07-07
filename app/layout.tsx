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

        <footer className="section-8 bg-black text-white my-5 py-5">
          <div className="w-[90%] mx-auto">
            <img
              src="/images/Asset 2.png"
              className="w-32 mx-auto rounded-full"
              alt=""
            />
            <div>
              <ul className="flex flex-wrap gap-x-5 justify-around w-[85%] mx-auto">
                <li className="mt-5">
                  <a
                    className="hover:text-[#3454a5] transition-all duration-300"
                    href=""
                  >
                    What is happening
                  </a>
                </li>
                <li className="mt-5">
                  <a
                    className="hover:text-[#3454a5] transition-all duration-300"
                    href=""
                  >
                    stories
                  </a>
                </li>
                <li className="mt-5">
                  <a
                    className="hover:text-[#3454a5] transition-all duration-300"
                    href=""
                  >
                    dialogues
                  </a>
                </li>
                <li className="mt-5">
                  <a
                    className="hover:text-[#3454a5] transition-all duration-300"
                    href=""
                  >
                    Sima and Music
                  </a>
                </li>
                <li className="mt-5">
                  <a
                    className="hover:text-[#3454a5] transition-all duration-300"
                    href=""
                  >
                    the fifth will amaze you
                  </a>
                </li>
                <li className="mt-5">
                  <a
                    className="hover:text-[#3454a5] transition-all duration-300"
                    href=""
                  >
                    Watch before it is deleted
                  </a>
                </li>
                <li className="mt-5">
                  <a
                    className="hover:text-[#3454a5] transition-all duration-300"
                    href=""
                  >
                    Buy from me
                  </a>
                </li>
                <li className="mt-5">
                  <a
                    className="hover:text-[#3454a5] transition-all duration-300"
                    href=""
                  >
                    Exits
                  </a>
                </li>
                <li className="mt-5">
                  <a
                    className="hover:text-[#3454a5] transition-all duration-300"
                    href=""
                  >
                    Cinema Guide
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center flex items-center justify-around my-10">
              <div className="h-[0.2px] w-[30%] bg-gray-700 rounded-full"></div>
              <div>
                <a href="">
                  <i className="fa-brands mx-1 fa-twitter py-4 px-4 border rounded-full hover:bg-[#3454a5] transition-all duration-300"></i>
                </a>
                <a href="">
                  <i className="fa-brands mx-1 fa-facebook-f py-4 px-5 border rounded-full hover:bg-[#3454a5] transition-all duration-300"></i>
                </a>
                <a href="">
                  <i className="fa-brands mx-1 fa-youtube py-4 px-4 border rounded-full hover:bg-[#3454a5] transition-all duration-300"></i>
                </a>
                <a href="">
                  <i className="fa-brands mx-1 fa-instagram py-4 px-4 border rounded-full hover:bg-[#3454a5] transition-all duration-300"></i>
                </a>
              </div>
              <div className="h-[0.2px] w-[30%] bg-gray-700 rounded-full"></div>
            </div>

            <div className="flex gap-4 mt-16 justify-evenly flex-wrap">
              <div className="w-[12%]">
                <img
                  src="/images/fot-1.jpeg"
                  className="w-20 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer"
                  alt=""
                />
              </div>
              <div className="w-[12%]">
                <img
                  src="/images/fot-2.png"
                  className="w-20 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer"
                  alt=""
                />
              </div>
              <div className="w-[12%]">
                <img
                  src="/images/fot-3.jpg"
                  className="w-20 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer"
                  alt=""
                />
              </div>
              <div className="w-[12%]">
                <img
                  src="/images/fot-1.jpeg"
                  className="w-20 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer"
                  alt=""
                />
              </div>
              <div className="w-[12%]">
                <img
                  src="/images/fot-3.jpg"
                  className="w-20 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer"
                  alt=""
                />
              </div>
              <div className="w-[12%]">
                <img
                  src="/images/fot-2.png"
                  className="w-20 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer"
                  alt=""
                />
              </div>
              <div className="w-[12%]">
                <img
                  src="/images/fot-7.png"
                  className="w-20 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer"
                  alt=""
                />
              </div>
              <div className="w-[12%]">
                <img
                  src="/images/fot-8.png"
                  className="w-20 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer"
                  alt=""
                />
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
