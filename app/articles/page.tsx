import { createClient } from "@/src/generated/genql";
import Link from "next/link";

import { Metadata } from "next";
import { directusAssetUrl } from "@/lib/app-utils";

export const metadata: Metadata = {
  title: "المقالات - وايت بلو",
  description:
    "تصفح جميع المقالات على وايت بلو - رؤى، أخبار، وقصص حول الاستدامة والابتكار.",
  openGraph: {
    title: "المقالات - وايت بلو",
    description:
      "تصفح جميع المقالات على وايت بلو - رؤى، أخبار، وقصص حول الاستدامة والابتكار.",
    type: "website",
  },
};

// Function to fetch all published articles
async function getArticles() {
  const client = createClient({
    headers: {
      Authorization: "Bearer FkGcOk8Uudxlb41YmUEk4Kd5wPH92vI7",
    },
  });

  try {
    const result = await client.query({
      articles: {
        __args: {
          filter: {
            is_published: {
              _eq: true,
            },
          },
          sort: ["-created_at"], // Sort by newest first
          limit: 50,
        },
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        featured: {
          id: true,
        },
        is_featured: true,
        created_at: true,
        views_count: true,
        category_id: {
          id: true,
          name: true,
          slug: true,
        },
        article_tags: {
          tags_id: {
            id: true,
            tag: true,
          },
        },
      },
    });

    return result.articles;
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
}

export default async function ArticlesPage() {
  const articles = await getArticles();

  // Format date
  const formatDate = (dateString: string | null) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Separate featured and regular articles
  const featuredArticles = articles.filter((article) => article.is_featured);
  const regularArticles = articles.filter((article) => !article.is_featured);

  return (
    <div dir="rtl" className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          المقالات
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          اكتشف رؤى وقصص وأخبار عن الاستدامة والابتكار والتأثير البيئي.
        </p>
      </div>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            مقالات مميزة
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {article.featured?.id && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={directusAssetUrl(article.featured?.id)}
                      alt={article.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      مميز
                    </span>
                    {article.created_at && (
                      <time className="text-sm text-gray-500">
                        {formatDate(article.created_at)}
                      </time>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    <Link
                      href={`/articles/${article.slug}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {article.title}
                    </Link>
                  </h3>

                  {article.excerpt && (
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {article.category_id && (
                        <span className="inline-block bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
                          {article.category_id.name}
                        </span>
                      )}
                    </div>

                    {article.views_count && (
                      <span className="text-sm text-gray-500">
                        {article.views_count} views
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Regular Articles */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          {featuredArticles.length > 0 ? "المزيد من المقالات" : "جميع المقالات"}
        </h2>

        {regularArticles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                {article.featured?.id && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={directusAssetUrl(article.featured?.id)}
                      alt={article.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex flex-wrap gap-2">
                      {article.category_id && (
                        <span className="inline-block bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
                          {article.category_id.name}
                        </span>
                      )}
                    </div>
                    {article.created_at && (
                      <time className="text-sm text-gray-500">
                        {formatDate(article.created_at)}
                      </time>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    <Link
                      href={`/articles/${article.slug}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {article.title}
                    </Link>
                  </h3>

                  {article.excerpt && (
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {article.article_tags?.slice(0, 2).map(
                        (tagRelation, index) =>
                          tagRelation.tags_id && (
                            <span
                              key={tagRelation.tags_id.id}
                              className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
                            >
                              #{tagRelation.tags_id.tag}
                            </span>
                          )
                      )}
                      {article.article_tags &&
                        article.article_tags.length > 2 && (
                          <span className="text-xs text-gray-500">
                            +{article.article_tags.length - 2}
                          </span>
                        )}
                    </div>

                    {article.views_count && (
                      <span className="text-sm text-gray-500">
                        {article.views_count} views
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">لم يتم العثور على مقالات.</p>
          </div>
        )}
      </section>

      {/* Load more or pagination can be added here */}
      {articles.length === 50 && (
        <div className="text-center mt-12">
          <p className="text-gray-600">
            يتم عرض أول 50 مقالاً. سيتم إضافة خاصية التصفح قريباً.
          </p>
        </div>
      )}
    </div>
  );
}
