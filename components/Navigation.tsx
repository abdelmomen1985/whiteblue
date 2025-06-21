"use client";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className="w-full mx-auto text-end relative">
      <div className="bg-white nav-elevated rounded-xl mx-4 md:mx-8 lg:mx-16 relative -mb-8 z-10 border border-gray-100">
        <div className="text-start flex justify-between items-center w-full px-4 md:px-8 lg:px-12">
          <ul className="flex w-full justify-between items-center h-16 gap-2 md:gap-4 lg:gap-8">
            {(() => {
              const menuItems = [
                { label: "أبيض في ازرق", href: "/", home: true },
                { label: "احنا مين", href: "/about" },
                { label: "كلمنا", href: "/contact" },
                { label: "مقالات", href: "/articles" },
              ];
              return menuItems.map((item, idx) => (
                <li
                  key={item.href}
                  className={
                    (item.home && pathname === "/") ||
                    (!item.home &&
                      pathname.startsWith(item.href) &&
                      item.href !== "/")
                      ? "bg-gradient-to-r from-[#4381df] to-[#3455a6] text-white rounded-lg px-4 py-2 font-bold transition-all duration-300 shadow-md"
                      : "text-black font-bold px-4 py-2 rounded-lg hover:bg-gray-50 hover:shadow-sm transition-all duration-300"
                  }
                >
                  <a href={item.href}>{item.label}</a>
                </li>
              ));
            })()}
            <li className="relative text-black font-bold px-4 py-2 rounded-lg hover:bg-gray-50 hover:shadow-sm transition-all duration-300 flex items-center group">
              <a href="#" className="flex items-center">
                قنواتنا <i className="fa-solid fa-caret-down ml-1"></i>
              </a>
              <div className="bg-white p-3 z-40 transition-all opacity-0 group-hover:opacity-100 duration-500 font-semibold text-black w-40 top-10 absolute group-hover:top-full border-t-2 border-[#3454a5] left-0 pointer-events-none group-hover:pointer-events-auto nav-elevated rounded-lg border border-gray-100">
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
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
