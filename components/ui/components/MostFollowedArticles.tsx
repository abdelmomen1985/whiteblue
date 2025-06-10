import Link from "next/link";
import { getArticlesByTag } from "../../../lib/graphql-client";
import { directusAssetUrl } from "../../../lib/utils"; // Assuming directusAssetUrl is for images
import { articles as ArticleType } from "../../../lib/graphql-client"; // Import the type

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
      className="items-center md:w-[45%] w-full flex py-2 px-4 justify-end text-end gap-x-5"
    >
      <div>
        <Link
          href={`/articles/${article.slug}`}
          className="font-bold hover:text-[#3454a5] transition-all duration-300"
        >
          {article.title}
        </Link>
        {article.created_at && (
          <p className="font-thin">{formatDate(article.created_at)}</p>
        )}
      </div>
      <div className="max-w-[160px] max-h-[200px]">
        {article.featured?.id && (
          <img
            src={directusAssetUrl(article.featured.id as string)}
            className="shadow-lg object-cover rounded-lg w-full h-full"
            alt={article.title || 'Article image'}
          />
        )}
      </div>
    </div>
  );

  return (
    <div className="flex w-full flex-wrap my-10 xl:my-0 items-center xl:w-1/2">
      {firstPair.length > 0 && (
        <div className="flex flex-wrap w-full">
          {" "}
          {/* Ensure full width for wrapping */}
          {firstPair.map(renderArticle)}
        </div>
      )}
      {secondPair.length > 0 && (
        <div className="flex flex-wrap w-full">
          {" "}
          {/* Ensure full width for wrapping */}
          {secondPair.map(renderArticle)}
        </div>
      )}
      <div className="bg-gray-200 hidden xl:block w-[85%] mx-auto h-[1px]"></div>
    </div>
  );
}
