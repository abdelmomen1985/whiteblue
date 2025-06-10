import Link from "next/link";
import { getArticlesByTag } from "../../../lib/graphql-client";
import { articles as ArticleType } from "../../../lib/graphql-client";

const tagName = "خلي بالك";

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

export default async function KhaliBalakArticles() {
  const articles = await getArticlesByTag(tagName);
  const visibleArticles = (articles || []).slice(-3).reverse();

  if (!visibleArticles.length) {
    return <p>لا توجد مقالات حالياً.</p>;
  }

  return (
    <div className="cards flex justify-around">
      {visibleArticles.map((article, idx) => (
        <div
          className={`card w-[70%] md:w-[30%] ${
            idx === 1 ? "md:block hidden" : ""
          } ${idx === 2 ? "lg:block hidden" : ""}`}
          key={article.id}
        >
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
      ))}
    </div>
  );
}
