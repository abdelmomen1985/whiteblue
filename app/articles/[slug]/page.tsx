import { notFound } from "next/navigation";
import { Metadata } from "next";
import { createClient } from "../../../src/generated/genql";
import { directusAssetUrl } from "@/lib/utils";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

// Function to fetch article by slug
async function getArticleBySlug(slug: string) {
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
            slug: {
              _eq: slug,
            },
            is_published: {
              _eq: true,
            },
          },
          limit: 1,
        },
        id: true,
        title: true,
        slug: true,
        content: true,
        excerpt: true,
        featured: {
          id: true,
        },
        is_featured: true,
        created_at: true,
        updated_at: true,
        views_count: true,
        category_id: {
          id: true,
          name: true,
          slug: true,
        },
        gallery: {
          directus_files_id: {
            id: true,
          },
        },
        article_form: true,
        article_tags: {
          tags_id: {
            id: true,
            tag: true,
          },
        },
      },
    });

    return result.articles[0] || null;
  } catch (error) {
    console.error("Error fetching article:", error);
    return null;
  }
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.title,
    description: article.excerpt || `Read ${article.title} on WhiteBlue`,
    openGraph: {
      title: article.title,
      description: article.excerpt || `Read ${article.title} on WhiteBlue`,
      type: "article",
      publishedTime: article.created_at || undefined,
      modifiedTime: article.updated_at || undefined,
      // No image available since featured_image was removed
      images: undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt || `Read ${article.title} on WhiteBlue`,
      // No image available since featured_image was removed
      images: undefined,
    },
  };
}

// Main article page component
export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  // Format date
  const formatDate = (dateString: string | null) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-8">
        {article.is_featured && (
          <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
            Featured Article
          </div>
        )}

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {article.title}
        </h1>

        {article.excerpt && (
          <p className="text-xl text-gray-600 mb-6">{article.excerpt}</p>
        )}

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
          {article.created_at && (
            <time dateTime={article.created_at}>
              Published on {formatDate(article.created_at)}
            </time>
          )}

          {article.updated_at && article.updated_at !== article.created_at && (
            <time dateTime={article.updated_at}>
              Updated on {formatDate(article.updated_at)}
            </time>
          )}

          {article.views_count && <span>{article.views_count} views</span>}
        </div>

        {/* Category */}
        {article.category_id && (
          <div className="mt-4">
            <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
              {article.category_id.name}
            </span>
          </div>
        )}

        {/* Tags */}
        {article.article_tags && article.article_tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {article.article_tags.map((tagRelation, index) => {
              return tagRelation.tags_id ? (
                <span
                  key={tagRelation.tags_id.id}
                  className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  #{String(tagRelation.tags_id.tag)}
                </span>
              ) : null;
            })}
          </div>
        )}
      </header>

      {/* Featured Image */}
      {article.featured && (
        <div className="mb-8 px-36">
          <img
            src={directusAssetUrl(article.featured.id)}
            alt={article.title}
            className="w-full h-64 md:h-[700px] object-cover rounded-lg shadow-lg"
          />
        </div>
      )}

      {/* Content */}
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      {/* Article Footer */}
      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-sm text-gray-500">Article ID: {article.id}</div>

          {/* Share buttons or other footer content can be added here */}
          <div className="flex gap-4">
            <button className="text-blue-600 hover:text-blue-800 transition-colors">
              Share Article
            </button>
          </div>
        </div>
      </footer>
    </article>
  );
}

// Optional: Generate static params for better performance (uncomment if you want static generation)
// export async function generateStaticParams() {
//   const client = createClient({
//     headers: {
//       Authorization: 'Bearer FkGcOk8Uudxlb41YmUEk4Kd5wPH92vI7'
//     }
//   })

//   try {
//     const result = await client.query({
//       articles: {
//         __args: {
//           filter: {
//             is_published: {
//               _eq: true
//             }
//           }
//         },
//         slug: true
//       }
//     })

//     return result.articles.map((article) => ({
//       slug: article.slug
//     }))
//   } catch (error) {
//     console.error('Error generating static params:', error)
//     return []
//   }
// }
