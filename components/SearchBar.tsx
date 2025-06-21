"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/articles?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (searchTerm.trim()) {
        router.push(
          `/articles?search=${encodeURIComponent(searchTerm.trim())}`
        );
      }
    }
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex justify-between items-center gap-x-5"
      role="search"
    >
      <div className="relative flex items-center">
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          className="p-1 outline-none bg-transparent pr-6"
          placeholder="اكتب كلمة البحث"
          aria-label="البحث في المقالات"
          name="search"
        />
      </div>
      <button
        type="submit"
        className={`transition-all duration-300 ${
          searchTerm.trim()
            ? "text-white hover:text-[#3454a5] cursor-pointer"
            : "text-gray-400 cursor-default"
        }`}
        disabled={!searchTerm.trim()}
        title={searchTerm.trim() ? "البحث" : "اكتب كلمة البحث أولاً"}
        aria-label="بحث"
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      <a
        href="#"
        className="transition-all duration-300 md:block hidden hover:text-[#3454a5]"
      >
        خليك معانا
      </a>
    </form>
  );
}
