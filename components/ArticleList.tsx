import React, { useEffect, useState } from "react";
import { getArticlesByTag } from "../lib/graphql-client";

type Article = {
  id: string;
  title: string;
  content?: string;
  slug?: string;
  created_at?: string;
};

const tagName = "خلي بالك";

const ArticleList: React.FC = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getArticlesByTag(tagName)
      .then((data) => setArticles(data || []))
      .catch(() => setError("Failed to fetch articles"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading articles...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  // Only show up to 3 cards as in the design, in reverse order
  const visibleArticles = articles.slice(-3).reverse();

  return (
    <div className="md:w-[80%] mx-auto">
      <div className="cards flex justify-around">
        {visibleArticles.map((article, idx) => (
          <div
            className={`card w-[70%] md:w-[30%] ${idx === 1 ? "md:block hidden" : ""} ${idx === 2 ? "lg:block hidden" : ""}`}
            key={article.id}
          >
            <p className="bg-[#3454a5] text-white font-semibold p-2 rounded-md w-fit ms-auto">
              خلي بالك
            </p>
            <a
              href="#"
              className="transition-all duration-300 hover:text-[#3454a5] my-2 block"
            >
              {article.title}
            </a>
            <p className="opacity-70 text-sm">
              {article.created_at
                ? new Date(article.created_at).toLocaleDateString("ar-EG", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })
                : ""}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
