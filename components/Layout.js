import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children, title = "أبيض X أزرق" }) {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <title>{title}</title>
      </Head>

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
              <Link
                href="/contact"
                className="transition-all duration-300 md:block hidden hover:text-[#3454a5]"
              >
                خليك معانا
              </Link>
            </div>
            <div className="md:block hidden">
              الثلاثاء مايو 20, 2025
            </div>
            <div className="cursor-pointer md:hidden block">
              <div className="w-4 h-0.5 bg-white"></div>
              <div className="w-4 h-0.5 my-1 bg-white"></div>
              <div className="w-4 h-0.5 bg-white"></div>
            </div>
          </div>
        </nav>
        <div className="bg-gradient-to-r from-[#4381df] to-[#3455a6]">
          <img
            src="/images/4eb65c7c-afd1-4488-b3cb-9658f84eb7a4_removalai_preview.png"
            alt=""
            className="w-[30%] object-cover mx-auto"
          />
        </div>
        <div className="w-[90%] mx-auto text-end">
          <div className="shadow-md bg-white rounded-b-lg">
            <div className="flex flex-wrap justify-center gap-x-10 p-5">
              <Link href="/" className="transition-all duration-300 hover:text-[#3454a5] font-bold">
                الرئيسية
              </Link>
              <Link href="/about" className="transition-all duration-300 hover:text-[#3454a5] font-bold">
                احنا مين
              </Link>
              <Link href="/contact" className="transition-all duration-300 hover:text-[#3454a5] font-bold">
                اتصل بنا
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main>
        {children}
      </main>

      <footer className="bg-gray-100 mt-10">
        <div className="w-[90%] mx-auto p-5">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-[12%]">
              <img src="/images/fot-1.png" className="w-20 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer" alt="" />
            </div>
            <div className="w-[12%]">
              <img src="/images/fot-2.png" className="w-20 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer" alt="" />
            </div>
            <div className="w-[12%]">
              <img src="/images/fot-3.png" className="w-20 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer" alt="" />
            </div>
            <div className="w-[12%]">
              <img src="/images/fot-4.png" className="w-20 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer" alt="" />
            </div>
            <div className="w-[12%]">
              <img src="/images/fot-5.png" className="w-20 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer" alt="" />
            </div>
            <div className="w-[12%]">
              <img src="/images/fot-6.png" className="w-20 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer" alt="" />
            </div>
            <div className="w-[12%]">
              <img src="/images/fot-7.png" className="w-20 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer" alt="" />
            </div>
            <div className="w-[12%]">
              <img src="/images/fot-8.png" className="w-20 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer" alt="" />
            </div>
          </div>
          <div className="text-center mt-5 text-gray-600">
            <p>&copy; 2025 أبيض X أزرق. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}