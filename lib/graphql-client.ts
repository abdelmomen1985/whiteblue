import { createClient, everything } from '../src/generated/genql'

// Create a GraphQL client instance
// Using the real API endpoint from Articles.bru
const client = createClient({
  url: '/api/proxy/graphql',
  headers: {
    'Authorization': 'Bearer FkGcOk8Uudxlb41YmUEk4Kd5wPH92vI7',
    'Content-Type': 'application/json',
  },
})

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
        featured_image: true,
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
    })
    
    return result.articles
  } catch (error) {
    console.error('Error fetching articles:', error)
    throw error
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
        featured_image: true,
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
    })
    
    return result.articles_by_id
  } catch (error) {
    console.error('Error fetching article:', error)
    throw error
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
          offset 
        },
        id: true,
        title: true,
        content: true,
        excerpt: true,
        slug: true,
        is_featured: true,
        featured_image: true,
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
    })
    
    return result.articles
  } catch (error) {
    console.error('Error fetching published articles:', error)
    throw error
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
            is_published: { _eq: true }
          },
          limit 
        },
        id: true,
        title: true,
        content: true,
        excerpt: true,
        slug: true,
        featured_image: true,
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
    })
    
    return result.articles
  } catch (error) {
    console.error('Error fetching featured articles:', error)
    throw error
  }
}

// Search articles by title or content
export async function searchArticles(searchQuery: string, limit?: number, offset?: number) {
  try {
    const result = await client.query({
      articles: {
        __args: { 
          search: searchQuery,
          filter: { is_published: { _eq: true } },
          limit, 
          offset 
        },
        id: true,
        title: true,
        content: true,
        excerpt: true,
        slug: true,
        is_featured: true,
        featured_image: true,
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
    })
    
    return result.articles
  } catch (error) {
    console.error('Error searching articles:', error)
    throw error
  }
}

// Fetch all categories
export async function getAllCategories() {
  try {
    const result = await client.query({
      categories: {
        id: true,
        name: true,
        slug: true,
        description: true,
        created_at: true,
        updated_at: true,
      },
    })
    
    return result.categories
  } catch (error) {
    console.error('Error fetching categories:', error)
    throw error
  }
}

// Fetch articles by category
export async function getArticlesByCategory(categoryId: string, limit?: number, offset?: number) {
  try {
    const result = await client.query({
      articles: {
        __args: { 
          filter: { 
            category_id: { id: { _eq: categoryId } },
            is_published: { _eq: true }
          },
          limit, 
          offset 
        },
        id: true,
        title: true,
        content: true,
        excerpt: true,
        slug: true,
        is_featured: true,
        featured_image: true,
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
    })
    
    return result.articles
  } catch (error) {
    console.error('Error fetching articles by category:', error)
    throw error
  }
}

// Fetch all tags
export async function getAllTags() {
  try {
    const result = await client.query({
      tags: {
        id: true,
        tag: true,
        slug: true,
        description: true,
        created_at: true,
        updated_at: true,
      },
    })
    
    return result.tags
  } catch (error) {
    console.error('Error fetching tags:', error)
    throw error
  }
}



// Fetch all pages
export async function getAllPages() {
  try {
    const result = await client.query({
      pages: {
        id: true,
        title: true,
        content: true,
        slug: true,
        is_published: true,
        created_at: true,
        updated_at: true,
      },
    })
    
    return result.pages
  } catch (error) {
    console.error('Error fetching pages:', error)
    throw error
  }
}

// Fetch a single page by ID
export async function getPageById(id: string) {
  try {
    const result = await client.query({
      pages_by_id: {
        __args: { id },
        id: true,
        title: true,
        content: true,
        slug: true,
        is_published: true,
        meta_title: true,
        meta_description: true,
        created_at: true,
        updated_at: true,
      },
    })
    
    return result.pages_by_id
  } catch (error) {
    console.error('Error fetching page:', error)
    throw error
  }
}

// Create a new contact message
export async function createContactMessage(input: {
  name: string
  email: string
  subject?: string
  message: string
}) {
  try {
    const result = await client.mutation({
      create_contact_messages_item: {
        __args: { data: input },
        id: true,
        name: true,
        email: true,
        subject: true,
        message: true,
        created_at: true,
      },
    })
    
    return result.create_contact_messages_item
  } catch (error) {
    console.error('Error creating contact message:', error)
    throw error
  }
}

// Get article statistics/aggregation
export async function getArticleStats() {
  try {
    const result = await client.query({
      articles_aggregated: {
        __args: { 
          filter: { is_published: { _eq: true } }
        },
        countAll: true,
        avg: {
          views_count: true,
        },
        sum: {
          views_count: true,
        },
      },
    })
    
    return result.articles_aggregated
  } catch (error) {
    console.error('Error fetching article stats:', error)
    throw error
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
                tag: { _eq: tag }
              }
            }
          }
        },
        id: true,
        title: true,
        created_at: true,
        article_tags: {
          tags_id: {
            tag: true
          }
        }
      }
    });
    return result.articles || [];
  } catch (error) {
    console.error('Error fetching articles by tag:', error);
    throw error;
  }
}

// Export the client for direct usage if needed
export { client }

// Export types from genql for use in your components
export type {
  Query,
  Mutation,
  articles,
  categories,
  tags,
  pages,
  contact_messages,
  articles_tags,
  create_articles_input,
  update_articles_input,
  create_contact_messages_input,
} from '../src/generated/genql'