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

  return (
    <form
      onSubmit={handleSearch}
      className="relative max-w-md w-full"
      role="search"
    >
      <input
        type="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        className="w-full bg-white bg-opacity-20 border border-white border-opacity-30 px-4 py-2 text-white placeholder-white placeholder-opacity-80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 pr-10"
        placeholder="بحث"
        aria-label="البحث في المقالات"
        name="search"
      />
      <button
        type="submit"
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white opacity-80 hover:opacity-100 transition-opacity duration-300"
        aria-label="بحث"
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
}
