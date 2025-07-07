"use client";
import { usePathname } from "next/navigation";
import { slugify } from "@/lib/utils";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className="bg-white shadow-lg border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Main Navigation */}
          <div className="flex items-center space-x-8 space-x-reverse">
            <a
              href="/"
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
                pathname === "/"
                  ? "text-[#3454a5] border-b-2 border-[#3454a5]"
                  : "text-gray-700 hover:text-[#3454a5]"
              }`}
            >
              الرئيسية
            </a>

            {/* Articles Dropdown */}
            <div className="relative group">
              <a
                href="/articles"
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 flex items-center gap-1 ${
                  pathname.startsWith("/articles")
                    ? "text-[#3454a5] border-b-2 border-[#3454a5]"
                    : "text-gray-700 hover:text-[#3454a5]"
                }`}
              >
                المقالات <i className="fa-solid fa-caret-down"></i>
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

            {/* Channels Dropdown */}
            <div className="relative group">
              <a
                href="#"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#3454a5] transition-all duration-300 flex items-center gap-1"
              >
                قنواتنا <i className="fa-solid fa-caret-down"></i>
              </a>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-2">
                  {[
                    "كيدز إريا",
                    "التحويجه",
                    "الماميز",
                    "اللمبه الحمراء",
                    "العباسيه",
                  ].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-3 py-2 text-sm text-gray-700 hover:text-[#3454a5] hover:bg-gray-50 rounded transition-all duration-300"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a
              href="/about"
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
                pathname === "/about"
                  ? "text-[#3454a5] border-b-2 border-[#3454a5]"
                  : "text-gray-700 hover:text-[#3454a5]"
              }`}
            >
              من نحن
            </a>

            <a
              href="/contact"
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
                pathname === "/contact"
                  ? "text-[#3454a5] border-b-2 border-[#3454a5]"
                  : "text-gray-700 hover:text-[#3454a5]"
              }`}
            >
              اتصل بنا
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <a
              href="#"
              className="text-gray-500 hover:text-[#3454a5] transition-colors duration-300"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-[#3454a5] transition-colors duration-300"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-[#3454a5] transition-colors duration-300"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-[#3454a5] transition-colors duration-300"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
