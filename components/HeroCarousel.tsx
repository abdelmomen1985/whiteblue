"use client";
import { directusAssetUrl } from "@/lib/app-utils";
import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image: "/images/fakharny.png",
    title:
      'عرض مسرحية "الملك لير" بطولة الفنان يحيى الفخراني بداية من يوم الأحد ٢٩ يونيو',
    subtitle: "إكلك معجني ولسعي",
    buttonText: "حقيق إستنابل",
    bgGradient: "from-amber-600 to-amber-800",
  },
  {
    id: 2,
    image: "/images/fakharny.png",
    title:
      'عرض مسرحية "الملك لير" بطولة الفنان يحيى الفخراني بداية من يوم الأحد ٢٩ يونيو',
    subtitle: "مستحضر من أجود أنواع الفضة",
    buttonText: "إبيض في الزرق",
    bgGradient: "from-blue-600 to-blue-800",
  },
  {
    id: 3,
    image: "/images/fakharny.png",
    title:
      'عرض مسرحية "الملك لير" بطولة الفنان يحيى الفخراني بداية من يوم الأحد ٢٩ يونيو',
    subtitle: "محتوى حصري ومميز",
    buttonText: "شاهد الآن",
    bgGradient: "from-purple-600 to-purple-800",
  },
  {
    id: 4,
    image: "/images/fakharny.png",
    title:
      'عرض مسرحية "الملك لير" بطولة الفنان يحيى الفخراني بداية من يوم الأحد ٢٩ يونيو',
    subtitle: "أحدث الأفلام والمراجعات",
    buttonText: "استكشف السينما",
    bgGradient: "from-red-600 to-red-800",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div
      className="relative  w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden carousel-container"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full carousel-slide"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`min-w-full h-full relative bg-gradient-to-r ${slide.bgGradient} flex items-center`}
            style={{
              backgroundImage: `url(${
                slide.image.startsWith("http") || slide.image.startsWith("/")
                  ? slide.image
                  : directusAssetUrl(slide.image)
              })`,

              backgroundSize: "cover",
              backgroundPosition: "top",
              backgroundBlendMode: "overlay",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4 md:px-8 lg:px-16">
              <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
                {slide.title}
              </h1>
              {slide.subtitle && (
                <p className="text-white text-base md:text-lg lg:text-xl mb-6 opacity-90 drop-shadow-md">
                  {slide.subtitle}
                </p>
              )}
              {slide.buttonText && (
                <button className="bg-gradient-to-r from-[#4381df] to-[#3455a6] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-lg hover:from-[#3455a6] hover:to-[#4381df] transition-all duration-300 transform hover:scale-105 shadow-xl border border-white border-opacity-20">
                  {slide.buttonText}
                </button>
              )}
            </div>

            {/* Content
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16 carousel-content">
              <div className="text-white text-right flex items-center justify-between">
                <div className="flex-1 carousel-fade-in">
                  <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-base md:text-lg lg:text-xl mb-6 opacity-90 drop-shadow-md">
                    {slide.subtitle}
                  </p>
                  <button className="bg-gradient-to-r from-[#4381df] to-[#3455a6] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-lg hover:from-[#3455a6] hover:to-[#4381df] transition-all duration-300 transform hover:scale-105 shadow-xl border border-white border-opacity-20">
                    {slide.buttonText}
                  </button>
                </div>

                <div className="hidden lg:block flex-shrink-0 ml-8">
                  <div className="w-48 h-48 bg-white bg-opacity-10 rounded-2xl backdrop-blur-custom border border-white border-opacity-20 flex items-center justify-center">
                    <i className="fa-solid fa-image text-4xl text-white opacity-60"></i>
                  </div>
                </div>
              </div>
            </div>
                */}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 md:p-3 rounded-full transition-all duration-300 backdrop-blur-custom border border-white border-opacity-20 hover:scale-110"
      >
        <i className="fa-solid fa-chevron-left text-lg md:text-xl"></i>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 md:p-3 rounded-full transition-all duration-300 backdrop-blur-custom border border-white border-opacity-20 hover:scale-110"
      >
        <i className="fa-solid fa-chevron-right text-lg md:text-xl"></i>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center gap-4 bg-black bg-opacity-40 backdrop-blur-custom px-6 py-3 rounded-full border border-white border-opacity-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`carousel-indicator transition-all duration-500 rounded-full ${
              index === currentSlide
                ? "carousel-indicator-active w-10 h-3 bg-white shadow-lg scale-110"
                : "w-3 h-3 bg-white bg-opacity-60 hover:bg-opacity-90 hover:scale-125"
            }`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-6 right-6 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-custom">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
}
