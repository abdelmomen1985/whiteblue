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
  const visibleArticles = (articles || []).slice(0, 4);

  if (!visibleArticles.length) {
    return <p>لا توجد مقالات حالياً.</p>; // Or some other placeholder
  }

  // Split articles into two pairs for layout
  const firstPair = visibleArticles.slice(0, 2);
  const secondPair = visibleArticles.slice(2, 4);

  const renderArticle = (article: ArticleType, index: number) => (
    <div
      key={article.id}
      className="items-center w-full flex py-3 px-2 justify-end text-end gap-x-4 border-b border-gray-200 last:border-b-0"
    >
      <div className="flex-1">
        <Link
          href={`/articles/${article.slug}`}
          className="font-bold hover:text-[#3454a5] transition-all duration-300 text-sm leading-tight block"
        >
          {article.title}
        </Link>
        {article.created_at && (
          <p className="font-thin text-xs mt-1 text-gray-600">
            {formatDate(article.created_at)}
          </p>
        )}
      </div>
      <div className="w-16 h-16 flex-shrink-0">
        {article.featured?.id && (
          <img
            src={directusAssetUrl(article.featured.id as string)}
            className="shadow-lg object-cover rounded-lg w-full h-full"
            alt={article.title || "Article image"}
          />
        )}
      </div>
    </div>
  );

  return (
    <div className="flex w-full flex-col my-10 xl:my-0 xl:w-1/2">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {visibleArticles.map((article, index) => renderArticle(article, index))}
      </div>

      {/* Social Media Section */}
      <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
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
