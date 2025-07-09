import Link from "next/link";

import { directusAssetUrl } from "@/lib/app-utils";
import { ArticlesByTagReturnType, getArticlesByTag } from "@/lib/queries";

type ArticleType = ArticlesByTagReturnType[0];
// Helper function to format date (example)
const formatDate = (dateString: string) => {
  if (!dateString) return "";
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("ar-EG", {
      // Arabic, Egypt
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch (error) {
    console.error("Error formatting date:", error);
    return dateString; // Fallback to original string
  }
};

export default async function MostFollowedArticles() {
  const articles = await getArticlesByTag("الأكثر متابعة");

  // Ensure articles is an array and limit to 4, or fewer if not enough articles
  const visibleArticles = (articles || []).slice(0, 3);

  if (!visibleArticles.length) {
    return <p>لا توجد مقالات حالياً.</p>; // Or some other placeholder
  }

  const renderArticle = (article: ArticleType, index: number) => (
    <div
      key={article.id}
      className="flex items-center gap-1 p-1 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 group"
    >
      <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
        {article.featured?.id && (
          <img
            src={directusAssetUrl(article.featured.id as string)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            alt={article.title || "Article image"}
          />
        )}
      </div>
      <div className="flex-1 text-right">
        <Link
          href={`/articles/${article.slug}`}
          className="block font-bold text-gray-800 group-hover:text-[#3454a5] transition-colors duration-300 text-sm leading-tight mb-1"
        >
          {article.title}
        </Link>
        {article.created_at && (
          <p className="text-xs text-gray-500 mb-1">
            {formatDate(article.created_at)}
          </p>
        )}
        <div className="flex items-center gap-2 justify-end">
          <div className="flex items-center gap-1">
            <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
            <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex w-full mx-4 flex-col my-10 xl:my-0 xl:w-1/2">
      {/* Articles List */}
      <div className="space-y-3 mb-6">{visibleArticles.map(renderArticle)}</div>

      {/* Social Media Section */}
      <div className=" bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <h3 className="text-center text-lg font-bold mb-4">
          خليك على تواصل وتفاعل
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="bg-pink-500 text-white rounded-lg p-3 flex items-center justify-center gap-2">
              <i className="fab fa-instagram text-xl"></i>
              <div>
                <p className="text-sm font-bold">98.5 ألف</p>
                <p className="text-xs">متابع</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-blue-600 text-white rounded-lg p-3 flex items-center justify-center gap-2">
              <i className="fab fa-facebook text-xl"></i>
              <div>
                <p className="text-sm font-bold">575.5 ألف</p>
                <p className="text-xs">متابع</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-red-600 text-white rounded-lg p-3 flex items-center justify-center gap-2">
              <i className="fab fa-youtube text-xl"></i>
              <div>
                <p className="text-sm font-bold">24.2 ألف</p>
                <p className="text-xs">مشترك</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-gray-800 text-white rounded-lg p-3 flex items-center justify-center gap-2">
              <i className="fab fa-x-twitter text-xl"></i>
              <div>
                <p className="text-sm font-bold">215.5 ألف</p>
                <p className="text-xs">متابع</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
