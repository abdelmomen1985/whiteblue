import Link from "next/link";

import { directusAssetUrl } from "@/lib/app-utils";
import { ArticlesByTagReturnType, getArticlesByTag } from "@/lib/queries";

type ArticleType = ArticlesByTagReturnType[0];

// Helper function to format date
const formatDate = (dateString: string) => {
  if (!dateString) return "";
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("ar-EG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch (error) {
    console.error("Error formatting date:", error);
    return dateString;
  }
};

export default async function CurrentNewsArticles() {
  const articles = await getArticlesByTag("أخبار مصر");

  // Ensure articles is an array and limit to 3
  const visibleArticles = (articles || []).slice(0, 3);

  if (!visibleArticles.length) {
    return <p className="text-center text-gray-500">لا توجد أخبار حالياً.</p>;
  }

  const renderArticle = (article: ArticleType) => (
    <div
      key={article.id}
      className="shadow-lg md:w-[30%] w-full rounded-t-lg bg-gray-100"
    >
      {article.featured?.id && (
        <img
          src={directusAssetUrl(article.featured.id as string)}
          className="shadow-lg w-full rounded-t-lg object-cover h-48"
          alt={article.title || "Article image"}
        />
      )}
      <div className="p-2 text-right">
        <div className="flex justify-between items-center">
          <p className="bg-[#3454a5] text-white font-semibold p-1 rounded-md w-fit">
            أخبار مصر
          </p>
          {article.created_at && (
            <p className="font-thin text-gray-600">
              {formatDate(article.created_at)}
            </p>
          )}
        </div>
        <Link
          href={`/articles/${article.slug}`}
          className="my-3 block font-bold text-lg hover:text-[#3454a5] transition-all duration-300"
        >
          {article.title}
        </Link>
        {article.excerpt && (
          <p className="text-gray-700 text-sm line-clamp-2">
            {article.excerpt}
          </p>
        )}
      </div>
    </div>
  );

  return (
    <div className="section-2 my-5 py-5 text-end">
      <div className="w-[90%] mx-auto flex gap-5 flex-wrap justify-between">
        {visibleArticles.map(renderArticle)}
      </div>
    </div>
  );
}
