"use client";

import { ArticlesByTagReturnType } from "@/lib/graphql-client";
import Link from "next/link";
import { useState, useEffect } from "react";

interface KhaliBalakArticlesCarouselProps {
  articles: ArticlesByTagReturnType;
}

const formatDate = (dateString: string) => {
  if (!dateString) return "";
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("ar-EG", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  } catch (error) {
    console.error("Error formatting date:", error);
    return dateString;
  }
};

export default function KhaliBalakArticlesCarousel({
  articles,
}: KhaliBalakArticlesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const tagName = "خلي بالك";

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (!articles.length) {
    return (
      <div className="bg-[#ededed] p-5 relative">
        <div className="md:w-[80%] mx-auto">
          <p>لا توجد مقالات حالياً.</p>
        </div>
      </div>
    );
  }

  // Debug logging (remove in production)
  // console.log("Total articles:", articles.length);
  // console.log("Articles:", articles.map((a) => a.title));
  // console.log("Is mobile:", isMobile);
  // console.log("Current index:", currentIndex);

  // Group articles for desktop carousel into separate groups of 3
  const groupedArticles = [];
  if (!isMobile && articles.length > 0) {
    // Create non-overlapping groups of 3 articles each
    for (let i = 0; i < articles.length; i += 3) {
      groupedArticles.push(articles.slice(i, i + 3));
    }
  }

  // Determine the total number of slides
  const totalSlides = isMobile ? articles.length : groupedArticles.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const renderMobileCarousel = () => {
    return (
      <div className="overflow-hidden ">
        <div
          className="flex flex-row-reverse transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {articles.map((article) => (
            <div key={article.id} className="w-full flex-shrink-0">
              <div className="cards flex justify-around">
                <div className="card w-[70%]">
                  <p className="bg-[#3454a5] text-white font-semibold p-2 rounded-md w-fit ms-auto">
                    {tagName}
                  </p>
                  <Link
                    href={article.slug ? `/articles/${article.slug}` : "#"}
                    className="transition-all duration-300 hover:text-[#3454a5] my-2 block"
                  >
                    {article.title}
                  </Link>
                  <p className="opacity-70 text-sm">
                    {article.created_at ? formatDate(article.created_at) : ""}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderDesktopCarousel = () => {
    // console.log("Grouped articles:", groupedArticles);

    return (
      <div className="overflow-hidden">
        <div
          className="flex flex-row-reverse transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {groupedArticles.map((group, groupIndex) => (
            <div key={groupIndex} className="w-full flex-shrink-0">
              <div className="cards flex justify-around">
                {/* Always render 3 card slots to maintain spacing */}
                {[0, 1, 2].map((idx) => {
                  const article = group[idx];

                  // Determine card classes based on position
                  let cardClasses = "card ";
                  if (idx === 0) {
                    cardClasses += "md:w-[30%] w-[70%]";
                  } else if (idx === 1) {
                    cardClasses += "md:block hidden md:w-[30%]";
                  } else {
                    cardClasses += "lg:block hidden w-[30%]";
                  }

                  if (!article) {
                    // Empty slot to maintain layout
                    return (
                      <div
                        key={`empty-${groupIndex}-${idx}`}
                        className={cardClasses + " opacity-0"}
                      />
                    );
                  }

                  return (
                    <div className={cardClasses} key={article.id}>
                      <p className="bg-[#3454a5] text-white font-semibold p-2 rounded-md w-fit ms-auto">
                        {tagName}
                      </p>
                      <Link
                        href={article.slug ? `/articles/${article.slug}` : "#"}
                        className="transition-all duration-300 hover:text-[#3454a5] my-2 block"
                      >
                        {article.title}
                      </Link>
                      <p className="opacity-70 text-sm">
                        {article.created_at
                          ? formatDate(article.created_at)
                          : ""}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[#ededed] p-5 relative">
      <div className="md:w-[80%] mx-auto">
        {isMobile ? renderMobileCarousel() : renderDesktopCarousel()}
      </div>

      {/* Navigation buttons - only show if there are multiple slides */}
      {totalSlides > 1 && (
        <>
          <button
            onClick={nextSlide}
            className="transition-all duration-300 text-white hover:bg-[#3454a5] rounded-full bg-gray-300 p-2 px-3 absolute -translate-y-1/2 top-1/2 right-10 md:right-28"
            aria-label="Next articles"
          >
            <i className="fa-solid fa-angle-right"></i>
          </button>
          <button
            onClick={prevSlide}
            className="transition-all duration-300 text-white hover:bg-[#3454a5] rounded-full bg-gray-300 p-2 px-3 absolute -translate-y-1/2 top-1/2 left-10 md:left-28"
            aria-label="Previous articles"
          >
            <i className="fa-solid fa-angle-left"></i>
          </button>
        </>
      )}

      {/* Indicators - only show if there are multiple slides */}
      {totalSlides > 1 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            marginTop: "18px",
          }}
        >
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                background: index === currentIndex ? "#294da6" : "#d3d6db",
                border: "none",
                outline: "none",
                cursor: "pointer",
                transition: "background 0.2s",
                boxShadow:
                  index === currentIndex ? "0 0 0 2px #294da633" : "none",
              }}
              aria-label={`Go to ${isMobile ? "article" : "group"} ${
                index + 1
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
