import { notFound } from "next/navigation";
import Link from "next/link";
import { getCategoryBySlug, getArticlesByCategory } from "@/lib/queries";
import { decodeSlug } from "@/lib/utils";
import { directusAssetUrl } from "@/lib/app-utils";

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

// Helper function to extract plain text from HTML content
const extractPlainText = (html: string, maxLength: number = 150) => {
  if (!html) return "";
  // Remove HTML tags and decode entities
  const text = html.replace(/<[^>]*>/g, "").replace(/&[^;]+;/g, " ");
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const category = await getCategoryBySlug(params.slug);

  if (!category) {
    return {
      title: "القسم غير موجود",
    };
  }

  return {
    title: `${category.name} - أبيض X أزرق`,
    description: `مقالات في قسم ${category.name}`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  // Decode the slug
  const decodedSlug = decodeSlug(params.slug);
  // Fetch category data
  const category = await getCategoryBySlug(decodedSlug);

  console.log(params.slug, category);
  if (!category) {
    notFound();
  }

  // Fetch articles for this category
  const articles = await getArticlesByCategory(category.id);

  // Filter published articles
  const publishedArticles = articles.filter((article) => article.is_published);

  return (
    <div className="min-h-screen">
      {/* Category Header */}
      <div className="bg-gradient-to-r from-[#4381df] to-[#3455a6] text-white py-16">
        <div className="w-[90%] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {category.name}
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            مقالات منوعة في قسم {category.name}
          </p>
          <div className="mt-6 text-lg opacity-80">
            {publishedArticles.length} مقال
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="w-[90%] mx-auto">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-[#3454a5] hover:underline">
              الرئيسية
            </Link>
            <span className="text-gray-500 mx-2">/</span>
            <Link href="/category" className="text-[#3454a5] hover:underline">
              الأقسام
            </Link>
            <span className="text-gray-500 mx-2">/</span>
            <span className="text-gray-700">{category.name}</span>
          </nav>
        </div>
      </div>

      {/* Articles Section */}
      <div className="py-12">
        <div className="w-[90%] mx-auto">
          {publishedArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {publishedArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Article Image */}
                  {article.featured?.id && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={directusAssetUrl(article.featured.id as string)}
                        alt={article.title || "Article image"}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {/* Article Content */}
                  <div className="p-6">
                    {/* Article Meta */}
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                      <span className="bg-[#3454a5] text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {category.name}
                      </span>
                      {article.created_at && (
                        <time dateTime={article.created_at}>
                          {formatDate(article.created_at)}
                        </time>
                      )}
                    </div>

                    {/* Article Title */}
                    <h2 className="text-xl font-bold mb-3 text-gray-900 leading-tight">
                      <Link
                        href={`/articles/${article.slug}`}
                        className="hover:text-[#3454a5] transition-colors duration-300"
                      >
                        {article.title}
                      </Link>
                    </h2>

                    {/* Article Excerpt */}
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {article.excerpt ||
                        extractPlainText(article.content || "")}
                    </p>

                    {/* Article Tags */}
                    {article.article_tags &&
                      article.article_tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {article.article_tags
                            .slice(0, 3)
                            .map((tag, index) => (
                              <span
                                key={index}
                                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                              >
                                {tag.tags_id?.tag}
                              </span>
                            ))}
                        </div>
                      )}

                    {/* Read More Button */}
                    <div className="flex items-center justify-between">
                      <Link
                        href={`/articles/${article.slug}`}
                        className="inline-flex items-center text-[#3454a5] hover:text-[#2a4086] font-semibold transition-colors duration-300"
                      >
                        اقرأ المزيد
                        <i className="fas fa-arrow-left mr-2 text-sm"></i>
                      </Link>

                      {/* Article Stats */}
                      <div className="flex items-center text-gray-500 text-sm">
                        <i className="fas fa-eye ml-1"></i>
                        <span>{article.views_count || 0}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* No Articles Message */
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <i className="fas fa-folder-open text-6xl text-gray-300 mb-6"></i>
                <h3 className="text-2xl font-bold text-gray-700 mb-4">
                  لا توجد مقالات في هذا القسم
                </h3>
                <p className="text-gray-500 mb-8">
                  لم نتمكن من العثور على أي مقالات في قسم "{category.name}"
                  حالياً.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center bg-[#3454a5] text-white px-6 py-3 rounded-lg hover:bg-[#2a4086] transition-colors duration-300"
                >
                  <i className="fas fa-home ml-2"></i>
                  العودة إلى الرئيسية
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Load More Section (if needed) */}
      {publishedArticles.length > 9 && (
        <div className="text-center py-8">
          <button className="bg-[#3454a5] text-white px-8 py-3 rounded-lg hover:bg-[#2a4086] transition-colors duration-300 font-semibold">
            تحميل المزيد من المقالات
          </button>
        </div>
      )}
    </div>
  );
}
