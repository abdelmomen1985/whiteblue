"use client";

import { useState } from "react";
import { slugify } from "@/lib/utils";

export default function Footer() {
  const [email, setEmail] = useState("");
  
  const categories = [
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
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <footer className="mt-10">
      {/* Newsletter Signup Section */}
      <div className="bg-gradient-to-r from-[#3454a5] to-[#4a6bc7] text-white py-16">
        <div className="container mx-auto px-4">
          {/* Logo and Newsletter Side by Side */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="/images/4eb65c7c-afd1-4488-b3cb-9658f84eb7a4_removalai_preview.png"
                className="h-32 lg:h-48 object-contain"
                alt="Logo"
              />
            </div>

            {/* Newsletter Content */}
            <div className="flex-1 text-center lg:text-right">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-300">
                سجل اشتراكك الآن في نشرتنا الدورية
              </h2>
              <p className="text-lg mb-8 opacity-80">
                لتصلك آخر الأخبار والتحديثات الصحية من فريك حيث.
              </p>

              {/* Newsletter Form */}
              <form
                onSubmit={handleNewsletterSubmit}
                className="max-w-md lg:mr-0 mx-auto"
              >
                <div className="flex rounded-full overflow-hidden shadow-lg">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="أدخل بريدك الإلكتروني"
                    className="flex-1 px-6 py-4 text-gray-800 focus:outline-none text-right"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 px-8 py-4 font-bold transition-colors duration-300"
                  >
                    سجل اشتراكك الآن
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Footer Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
            {/* About Section */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-cyan-300">
                {" "}
                أبيض X أزرق{" "}
              </h3>
              <p className="text-sm opacity-80 leading-relaxed">
                هي منصة طبية تهدف إلى تحسين الوصول إلى الخدمة والمعلومات الطبية
                في مصر. نربط المنصة بين المرضى والمتخصصين والمؤسسات الطبية
                للحصول على الخدمات الطبية بطريقة آمنة وسهلة ومعالة وشفافة.
              </p>
            </div>

            {/* Sections */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-cyan-300">الأقسام</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {categories.slice(0, 8).map((category) => (
                  <a
                    key={category}
                    href={`/category/${slugify(category)}`}
                    className="hover:text-cyan-300 transition-colors duration-300"
                  >
                    - {category}
                  </a>
                ))}
              </div>
            </div>

            {/* User Guide */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-cyan-300">
                دليل المستخدم
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-300 transition-colors duration-300"
                  >
                    - سياسة الخصوصية
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-300 transition-colors duration-300"
                  >
                    - الشروط والأحكام
                  </a>
                </li>
              </ul>
            </div>
          </div>
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
  );
}
