"use client";
import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import Navigation from "@/components/Navigation";
import { usePathname } from "next/navigation";
import { slugify } from "@/lib/utils";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header>
      {/* Top Blue Header */}
      <div className="bg-gradient-to-r from-[#4381df] to-[#3455a6] text-white">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Weather Section */}
            <div className="hidden md:flex items-center gap-2 text-sm">
              <div className="flex items-center gap-1">
                <i className="fa-solid fa-sun text-yellow-300"></i>
                <span>مشمس دافئ</span>
              </div>
              <span className="text-xl font-bold">32°C</span>
              <div className="text-xs opacity-80 hidden lg:block">
                القاهرة الجديدة، مصر
              </div>
            </div>

            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center gap-2">
                <img
                  src="/images/4eb65c7c-afd1-4488-b3cb-9658f84eb7a4_removalai_preview.png"
                  alt="أبيض X أزرق"
                  className="h-10 md:h-32 w-auto"
                />
              </a>
            </div>

            {/* Date Section */}
            <div className="hidden md:block text-sm text-left">
              <div className="font-bold text-sm md:text-base">
                الإثنين - 23 يناير 2024
              </div>
              <div className="text-xs opacity-80">03 محرم 1447 هـ</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-gradient-to-r from-[#4381df] to-[#3455a6] text-white border-t border-white border-opacity-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center py-3">
            {/* Menu Icon */}
            <div className="flex items-center mr-4">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 hover:bg-white hover:bg-opacity-20 transition-all duration-300"
              >
                <i
                  className={`fa-solid ${
                    isMobileMenuOpen ? "fa-times" : "fa-bars"
                  }`}
                ></i>
              </button>
            </div>

            {/* Navigation Tabs - Desktop */}
            <div className="hidden lg:flex items-center gap-1 flex-1">
              <a
                href="/"
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  pathname === "/"
                    ? "bg-white bg-opacity-20"
                    : "hover:bg-white hover:bg-opacity-20"
                }`}
              >
                خليك معانا
              </a>
              <a
                href="/contact"
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  pathname === "/contact"
                    ? "bg-white bg-opacity-20"
                    : "hover:bg-white hover:bg-opacity-20"
                }`}
              >
                تواصل معنا
              </a>
              <a
                href="/about"
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  pathname === "/about"
                    ? "bg-white bg-opacity-20"
                    : "hover:bg-white hover:bg-opacity-20"
                }`}
              >
                من نحن
              </a>
              <div className="relative group">
                <a
                  href="/articles"
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 flex items-center gap-1 ${
                    pathname.startsWith("/articles")
                      ? "bg-white bg-opacity-20"
                      : "hover:bg-white hover:bg-opacity-20"
                  }`}
                >
                  المقالات <i className="fa-solid fa-caret-down text-xs"></i>
                </a>
                <div className="absolute top-full left-0 mt-2 w-96 bg-white border border-gray-200 shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="p-4 grid grid-cols-2 gap-4">
                    {[
                      "الصحة الجنسية",
                      "التجميل",
                      "الأطفال",
                      "طب الشيخوخة",
                      "تحاليل",
                      "الصيدلية",
                      "العيادة النفسية",
                      "التغذية",
                      "عيادة الأسنان",
                      "حكيم عيون",
                      "أمراض مزمنة",
                      "أمراض نادرة",
                      "الريڤيو",
                    ].map((item) => (
                      <a
                        key={item}
                        href={`/category/${slugify(item)}`}
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-[#3454a5] hover:bg-gray-50 rounded transition-all duration-300"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dropdown for القنوات */}
              <div className="relative group">
                <button className="px-4 py-2 text-sm font-medium hover:bg-white hover:bg-opacity-20 transition-all duration-300 flex items-center gap-1">
                  القنوات <i className="fa-solid fa-caret-down text-xs"></i>
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="p-2">
                    <a
                      href="#"
                      className="block px-3 py-2 text-sm text-gray-700 hover:text-[#3454a5] hover:bg-gray-50 rounded transition-all duration-300"
                    >
                      كيدز إريا
                    </a>
                    <a
                      href="#"
                      className="block px-3 py-2 text-sm text-gray-700 hover:text-[#3454a5] hover:bg-gray-50 rounded transition-all duration-300"
                    >
                      التحويجه
                    </a>
                    <a
                      href="#"
                      className="block px-3 py-2 text-sm text-gray-700 hover:text-[#3454a5] hover:bg-gray-50 rounded transition-all duration-300"
                    >
                      الماميز
                    </a>
                    <a
                      href="#"
                      className="block px-3 py-2 text-sm text-gray-700 hover:text-[#3454a5] hover:bg-gray-50 rounded transition-all duration-300"
                    >
                      اللمبه الحمراء
                    </a>
                    <a
                      href="#"
                      className="block px-3 py-2 text-sm text-gray-700 hover:text-[#3454a5] hover:bg-gray-50 rounded transition-all duration-300"
                    >
                      العباسيه
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="bg-cyan-400 text-blue-900 px-4 py-2 text-sm font-bold hover:bg-cyan-300 transition-all duration-300"
              >
                ابيض X أزرق
              </a>
            </div>

            {/* Mobile Navigation */}
            <div className="hidden md:flex lg:hidden items-center gap-2 flex-1">
              <a
                href="/articles"
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  pathname.startsWith("/articles")
                    ? "bg-white bg-opacity-20"
                    : "hover:bg-white hover:bg-opacity-20"
                }`}
              >
                المقالات
              </a>
              <a
                href="#"
                className="bg-cyan-400 text-blue-900 px-3 py-2 text-sm font-bold hover:bg-cyan-300 transition-all duration-300"
              >
                لمس أزرق
              </a>
            </div>

            {/* Search Bar */}
            <div className="flex-shrink-0 max-w-xs md:max-w-md">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-3">
              <a
                href="/"
                className={`px-3 py-2 text-sm font-medium rounded transition-all duration-300 ${
                  pathname === "/"
                    ? "bg-gray-200 text-[#3454a5]"
                    : "text-gray-700 hover:text-[#3454a5] hover:bg-gray-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                خليك معانا
              </a>
              <a
                href="/articles"
                className={`px-3 py-2 text-sm font-medium rounded transition-all duration-300 ${
                  pathname.startsWith("/articles")
                    ? "bg-gray-200 text-[#3454a5]"
                    : "text-gray-700 hover:text-[#3454a5] hover:bg-gray-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                المقالات
              </a>
              <a
                href="/about"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#3454a5] hover:bg-gray-50 rounded transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                من نحن
              </a>
              <a
                href="/contact"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#3454a5] hover:bg-gray-50 rounded transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                تواصل معنا
              </a>
              <div className="border-t border-gray-200 pt-3">
                <a
                  href="#"
                  className="block bg-cyan-400 text-blue-900 px-3 py-2 text-sm font-bold rounded hover:bg-cyan-300 transition-all duration-300 text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  لمس أزرق
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
