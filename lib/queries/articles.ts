import { client } from "../graphql-client";

// Fetch all articles with tags
export async function getAllArticles(limit?: number, offset?: number) {
  try {
    const result = await client.query({
      articles: {
        __args: { limit, offset },
        id: true,
        title: true,
        content: true,
        excerpt: true,
        slug: true,
        is_featured: true,
        is_published: true,
        views_count: true,
        created_at: true,
        updated_at: true,
        category_id: {
          id: true,
          name: true,
          slug: true,
        },
        article_tags: {
          id: true,
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
    throw error;
  }
}

// Fetch a single article by ID
export async function getArticleById(id: string) {
  try {
    const result = await client.query({
      articles_by_id: {
        __args: { id },
        id: true,
        title: true,
        content: true,
        excerpt: true,
        slug: true,
        is_featured: true,
        is_published: true,
        views_count: true,
        created_at: true,
        updated_at: true,
        category_id: {
          id: true,
          name: true,
          slug: true,
        },
        article_tags: {
          id: true,
          tags_id: {
            id: true,
            tag: true,
          },
        },
      },
    });

    return result.articles_by_id;
  } catch (error) {
    console.error("Error fetching article:", error);
    throw error;
  }
}

// Fetch published articles only
export async function getPublishedArticles(limit?: number, offset?: number) {
  try {
    const result = await client.query({
      articles: {
        __args: {
          filter: { is_published: { _eq: true } },
          limit,
          offset,
        },
        id: true,
        title: true,
        content: true,
        excerpt: true,
        slug: true,
        is_featured: true,
        views_count: true,
        created_at: true,
        updated_at: true,
        category_id: {
          id: true,
          name: true,
          slug: true,
        },
        article_tags: {
          id: true,
          tags_id: {
            id: true,
            tag: true,
            slug: true,
          },
        },
      },
    });

    return result.articles;
  } catch (error) {
    console.error("Error fetching published articles:", error);
    throw error;
  }
}

// Fetch featured articles
export async function getFeaturedArticles(limit?: number) {
  try {
    const result = await client.query({
      articles: {
        __args: {
          filter: {
            is_featured: { _eq: true },
            is_published: { _eq: true },
          },
          limit,
        },
        id: true,
        title: true,
        content: true,
        excerpt: true,
        slug: true,
        views_count: true,
        created_at: true,
        category_id: {
          id: true,
          name: true,
          slug: true,
        },
        article_tags: {
          id: true,
          tags_id: {
            id: true,
            tag: true,
          },
        },
      },
    });

    return result.articles;
  } catch (error) {
    console.error("Error fetching featured articles:", error);
    throw error;
  }
}

// Search articles by title or content
export async function searchArticles(
  searchQuery: string,
  limit?: number,
  offset?: number
) {
  try {
    const result = await client.query({
      articles: {
        __args: {
          search: searchQuery,
          filter: { is_published: { _eq: true } },
          limit,
          offset,
        },
        id: true,
        title: true,
        content: true,
        excerpt: true,
        slug: true,
        is_featured: true,
        featured: {
          id: true,
        },
        views_count: true,
        created_at: true,
        category_id: {
          id: true,
          name: true,
          slug: true,
        },
        article_tags: {
          id: true,
          tags_id: {
            id: true,
            tag: true,
            slug: true,
          },
        },
      },
    });

    return result.articles;
  } catch (error) {
    console.error("Error searching articles:", error);
    throw error;
  }
}

// Fetch articles by category
export async function getArticlesByCategory(
  categoryId: string,
  limit?: number,
  offset?: number
) {
  try {
    const result = await client.query({
      articles: {
        __args: {
          filter: {
            category_id: { id: { _eq: categoryId } },
            is_published: { _eq: true },
          },
          limit,
          offset,
        },
        id: true,
        title: true,
        content: true,
        excerpt: true,
        slug: true,
        is_featured: true,
        is_published: true,
        views_count: true,
        created_at: true,
        updated_at: true,
        featured: {
          id: true,
        },
        category_id: {
          id: true,
          name: true,
          slug: true,
        },
        article_tags: {
          id: true,
          tags_id: {
            id: true,
            tag: true,
          },
        },
      },
    });

    return result.articles;
  } catch (error) {
    console.error("Error fetching articles by category:", error);
    throw error;
  }
}

// Fetch articles by tag name
export async function getArticlesByTag(tag: string) {
  try {
    const result = await client.query({
      articles: {
        __args: {
          filter: {
            article_tags: {
              tags_id: {
                tag: { _eq: tag },
              },
            },
          },
        },
        id: true,
        title: true,
        content: true,
        excerpt: true,
        slug: true,
        is_featured: true,
        is_published: true,
        views_count: true,
        created_at: true,
        updated_at: true,
        category_id: {
          id: true,
          name: true,
          slug: true,
        },
        featured: {
          id: true,
        },
        article_tags: {
          id: true,
          tags_id: {
            id: true,
            tag: true,
            slug: true,
          },
        },
      },
    });
    return result.articles || [];
  } catch (error) {
    console.error("Error fetching articles by tag:", error);
    throw error;
  }
}

// Get article statistics/aggregation
export async function getArticleStats() {
  try {
    const result = await client.query({
      articles_aggregated: {
        __args: {
          filter: { is_published: { _eq: true } },
        },
        countAll: true,
        avg: {
          views_count: true,
        },
        sum: {
          views_count: true,
        },
      },
    });

    return result.articles_aggregated;
  } catch (error) {
    console.error("Error fetching article stats:", error);
    throw error;
  }
}

// export getArticlesByTag return type
export type ArticlesByTagReturnType = Awaited<
  ReturnType<typeof getArticlesByTag>
>;
