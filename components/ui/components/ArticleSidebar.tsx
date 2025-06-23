import Link from "next/link";
import { directusAssetUrl } from "@/lib/app-utils";
import { getArticlesByTag, ArticlesByTagReturnType } from "@/lib/queries";

type ArticleType = ArticlesByTagReturnType[0];

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

const renderArticle = (article: ArticleType) => (
  <div key={article.id} className="flex items-start justify-end text-right gap-4 py-4 border-b border-gray-200 last:border-b-0">
    <div className="flex-1">
      <Link
        href={`/articles/${article.slug}`}
        className="font-bold text-gray-800 hover:text-[#3454a5] transition-colors duration-300 block leading-tight"
      >
        {article.title}
      </Link>
      {article.created_at && (
        <p className="text-sm text-gray-500 mt-1">{formatDate(article.created_at)}</p>
      )}
    </div>
    <div className="w-24 h-20 flex-shrink-0">
      {article.featured?.id && (
        <Link href={`/articles/${article.slug}`}>
          <img
            src={directusAssetUrl(article.featured.id as string)}
            className="shadow-md object-cover rounded-lg w-full h-full"
            alt={article.title || "Article image"}
          />
        </Link>
      )}
    </div>
  </div>
);

export default async function ArticleSidebar() {
  const articles = await getArticlesByTag("الأكثر متابعة");
  const visibleArticles = (articles || []).slice(0, 5); // Show 5 articles in the sidebar

  if (!visibleArticles.length) {
    return null; // Don't render anything if there are no articles
  }

  return (
    <aside className="w-full lg:w-1/3 xl:w-1/4 p-4 bg-gray-50 rounded-lg shadow-sm h-fit sticky top-24">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">الأكثر متابعة هذا الشهر</h2>
        <a
          href="#" // Link to a "most followed" page if it exists
          className="bg-[#3454a5] text-white text-xs px-3 py-1 rounded-full hover:bg-blue-700 transition-colors"
        >
          خلي بالك
        </a>
      </div>
      <div className="flex flex-col">
        {visibleArticles.map(renderArticle)}
      </div>
    </aside>
  );
}
