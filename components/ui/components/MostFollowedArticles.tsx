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

  const renderArticle = (article: ArticleType) => (
    <div
      key={article.id}
      className="items-center w-full flex py-3 px-2 justify-end text-end gap-x-4"
    >
      <div className="flex-1">
        <Link
          href={`/articles/${article.slug}`}
          className="font-bold hover:text-[#3454a5] transition-all duration-300 text-sm leading-tight"
        >
          {article.title}
        </Link>
        {article.created_at && (
          <p className="font-thin text-xs mt-1 text-gray-600">
            {formatDate(article.created_at)}
          </p>
        )}
      </div>
      <div className="w-20 h-20 flex-shrink-0">
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
      <div className="space-y-2">{visibleArticles.map(renderArticle)}</div>
      <div className="bg-gray-200 hidden xl:block w-[85%] mx-auto h-[1px] mt-6"></div>
    </div>
  );
}
