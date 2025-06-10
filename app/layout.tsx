import "../styles/globals.css";

export const metadata = {
  title: "أبيض X أزرق",
  description: "موقع أبيض في أزرق",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <header>
          <nav className="bg-black p-3 text-white">
            <div className="items-center justify-between flex px-10 lg:px-0 lg:w-[70%] mx-auto">
              <div className="flex justify-between items-center gap-x-5">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                  type="search"
                  className="p-1 outline-none bg-transparent"
                  placeholder="اكتب كلمة البحث"
                />
                <a
                  href="#"
                  className="transition-all duration-300 md:block hidden hover:text-[#3454a5]"
                >
                  خليك معانا
                </a>
              </div>
              <div className="md:block hidden">الثلاثاء مايو 20, 2025</div>
              <div className="cursor-pointer md:hidden block">
                <div className="w-4 h-0.5 bg-white"></div>
                <div className="w-4 h-0.5 my-1 bg-white"></div>
                <div className="w-4 h-0.5 bg-white"></div>
              </div>
            </div>
          </nav>
          <div className="bg-gradient-to-r from-[#4381df] to-[#3455a6]">
            <a href="/">
              <img
                src="/images/4eb65c7c-afd1-4488-b3cb-9658f84eb7a4_removalai_preview.png"
                alt=""
                className="w-[30%] object-cover mx-auto"
              />
            </a>
          </div>
          <div className="w-[90%] mx-auto text-end">
            <div className="shadow-md relative text-start flex justify-center">
              <ul className="text-black flex gap-x-5 h-16 items-center group/ul">
                <li className="group transition-all duration-300 hover:text-[#3454a5] font-bold h-full flex items-center">
                  <a href="/about" target="_blank">
                    احنا مين
                  </a>
                </li>
                <li className="group transition-all duration-300 hover:text-[#3454a5] font-bold h-full flex items-center">
                  <a href="/contact">كلمنا</a>
                </li>
                <li className="group transition-all duration-300 hover:text-[#3454a5] font-bold h-full flex items-center relative">
                  <a href="#">
                    TV &nbsp;
                    <i className="fa-solid fa-caret-down"></i>
                  </a>
                  <div className="bg-white p-3 z-40 transition-all opacity-0 group-hover:opacity-100 duration-500 font-semibold text-black w-40 top-36 absolute group-hover:top-full border-t-2 border-[#3454a5] left-0 pointer-events-none group-hover/ul:pointer-events-auto">
                    <a
                      href="#"
                      className="my-1 transition-all duration-500 hover:text-[#3454a5] block hover:ps-4 relative group/parent"
                    >
                      <span className="bg-[#3454a5] group-hover/parent:opacity-100 size-2 rounded-full transition-all duration-700 left-0 absolute top-1/2 -translate-y-1/2 opacity-0"></span>
                      كيدز إريا
                    </a>
                    <a
                      href="#"
                      className="my-1 transition-all duration-500 hover:text-[#3454a5] block hover:ps-4 relative group/parent"
                    >
                      <span className="bg-[#3454a5] group-hover/parent:opacity-100 size-2 rounded-full transition-all duration-700 left-0 absolute top-1/2 -translate-y-1/2 opacity-0"></span>
                      التحويجه
                    </a>
                    <a
                      href="#"
                      className="my-1 transition-all duration-500 hover:text-[#3454a5] block hover:ps-4 relative group/parent"
                    >
                      <span className="bg-[#3454a5] group-hover/parent:opacity-100 size-2 rounded-full transition-all duration-700 left-0 absolute top-1/2 -translate-y-1/2 opacity-0"></span>
                      الماميز
                    </a>
                    <a
                      href="#"
                      className="my-1 transition-all duration-500 hover:text-[#3454a5] block hover:ps-4 relative group/parent"
                    >
                      <span className="bg-[#3454a5] group-hover/parent:opacity-100 size-2 rounded-full transition-all duration-700 left-0 absolute top-1/2 -translate-y-1/2 opacity-0"></span>
                      اللمبه الحمراء
                    </a>
                    <a
                      href="#"
                      className="my-1 transition-all duration-500 hover:text-[#3454a5] block hover:ps-4 relative group/parent"
                    >
                      <span className="bg-[#3454a5] group-hover/parent:opacity-100 size-2 rounded-full transition-all duration-700 left-0 absolute top-1/2 -translate-y-1/2 opacity-0"></span>
                      العباسيه
                    </a>
                    <a
                      href="#"
                      className="my-1 transition-all duration-500 hover:text-[#3454a5] block hover:ps-4 relative group/parent"
                    >
                      <span className="bg-[#3454a5] group-hover/parent:opacity-100 size-2 rounded-full transition-all duration-700 left-0 absolute top-1/2 -translate-y-1/2 opacity-0"></span>
                      الريفيو
                    </a>
                  </div>
                </li>
                <li className="group transition-all duration-300 hover:text-[#3454a5] font-bold h-full flex items-center">
                  <a href="#">قنواتنا</a>
                </li>
                <li className="group transition-all duration-300 hover:text-[#3454a5] font-bold h-full flex items-center">
                  <a href="#">أبيض في أزرق</a>
                </li>
              </ul>
            </div>
          </div>
        </header>

        <main>{children}</main>

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
                  src="/images/fot-1.png"
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
                  src="/images/fot-3.png"
                  className="w-20 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer"
                  alt=""
                />
              </div>
              <div className="w-[12%]">
                <img
                  src="/images/fot-4.png"
                  className="w-20 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer"
                  alt=""
                />
              </div>
              <div className="w-[12%]">
                <img
                  src="/images/fot-5.png"
                  className="w-20 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer"
                  alt=""
                />
              </div>
              <div className="w-[12%]">
                <img
                  src="/images/fot-6.png"
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
              <div className="w-[12%]">
                <img
                  src="/images/fot-9.png"
                  className="w-20 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer"
                  alt=""
                />
              </div>
              <div className="w-[12%]">
                <img
                  src="/images/fot-10.png"
                  className="w-20 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer"
                  alt=""
                />
              </div>
              <div className="w-[12%]">
                <img
                  src="/images/fot-11.png"
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
