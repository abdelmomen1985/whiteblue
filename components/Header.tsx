"use client";
import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import Navigation from "@/components/Navigation";
import HeroCarousel from "@/components/HeroCarousel";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                  className="h-10 md:h-12 w-auto"
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
          <div className="flex items-center justify-between py-2">
            {/* Search Bar */}
            <div className="flex-1 max-w-xs md:max-w-md">
              <SearchBar />
            </div>

            {/* Navigation Tabs - Desktop */}
            <div className="hidden lg:flex items-center gap-1 mr-8">
              <a
                href="/"
                className="px-3 py-2 text-sm font-medium hover:bg-white hover:bg-opacity-20 rounded transition-all duration-300"
              >
                خليك معانا
              </a>
              <a
                href="/contact"
                className="px-3 py-2 text-sm font-medium hover:bg-white hover:bg-opacity-20 rounded transition-all duration-300"
              >
                تواصل معنا
              </a>
              <a
                href="/about"
                className="px-3 py-2 text-sm font-medium hover:bg-white hover:bg-opacity-20 rounded transition-all duration-300"
              >
                من نحن
              </a>
              <a
                href="/articles"
                className="px-3 py-2 text-sm font-medium hover:bg-white hover:bg-opacity-20 rounded transition-all duration-300"
              >
                المقالات
              </a>

              {/* Dropdown for التلفزيون */}
              <div className="relative group">
                <button className="px-3 py-2 text-sm font-medium hover:bg-white hover:bg-opacity-20 rounded transition-all duration-300 flex items-center gap-1">
                  التلفزيون{" "}
                  <i className="fa-solid fa-caret-down text-xs"></i>
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="p-2">
                    <a
                      href="#"
                      className="block px-3 py-2 text-sm text-gray-700 hover:text-[#3454a5] hover:bg-gray-50 rounded transition-all duration-300"
                    >
                      البرامج
                    </a>
                    <a
                      href="#"
                      className="block px-3 py-2 text-sm text-gray-700 hover:text-[#3454a5] hover:bg-gray-50 rounded transition-all duration-300"
                    >
                      المسلسلات
                    </a>
                    <a
                      href="#"
                      className="block px-3 py-2 text-sm text-gray-700 hover:text-[#3454a5] hover:bg-gray-50 rounded transition-all duration-300"
                    >
                      الأفلام
                    </a>
                  </div>
                </div>
              </div>

              {/* Dropdown for القنوات */}
              <div className="relative group">
                <button className="px-3 py-2 text-sm font-medium hover:bg-white hover:bg-opacity-20 rounded transition-all duration-300 flex items-center gap-1">
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
                className="bg-cyan-400 text-blue-900 px-3 py-2 text-sm font-bold rounded hover:bg-cyan-300 transition-all duration-300"
              >
                لمس أزرق
              </a>
            </div>

            {/* Mobile Navigation */}
            <div className="hidden md:flex lg:hidden items-center gap-2">
              <a
                href="/articles"
                className="px-2 py-1 text-sm font-medium hover:bg-white hover:bg-opacity-20 rounded transition-all duration-300"
              >
                المقالات
              </a>
              <a
                href="#"
                className="bg-cyan-400 text-blue-900 px-2 py-1 text-sm font-bold rounded hover:bg-cyan-300 transition-all duration-300"
              >
                لمس أزرق
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 hover:bg-white hover:bg-opacity-20 rounded transition-all duration-300"
              >
                <i
                  className={`fa-solid ${
                    isMobileMenuOpen ? "fa-times" : "fa-bars"
                  }`}
                ></i>
              </button>
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
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#3454a5] hover:bg-gray-50 rounded transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                خليك معانا
              </a>
              <a
                href="/articles"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#3454a5] hover:bg-gray-50 rounded transition-all duration-300"
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

      <HeroCarousel />
      <Navigation />
    </header>
  );
}
