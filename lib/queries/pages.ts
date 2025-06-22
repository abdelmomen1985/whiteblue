import { client } from "../graphql-client";

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
    });

    return result.pages;
  } catch (error) {
    console.error("Error fetching pages:", error);
    throw error;
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
        created_at: true,
        updated_at: true,
      },
    });

    return result.pages_by_id;
  } catch (error) {
    console.error("Error fetching page:", error);
    throw error;
  }
}

// Fetch a single page by slug
export async function getPageBySlug(slug: string) {
  try {
    const result = await client.query({
      pages: {
        __args: {
          filter: {
            slug: { _eq: slug },
            is_published: { _eq: true },
          },
          limit: 1,
        },
        id: true,
        title: true,
        content: true,
        slug: true,
        is_published: true,
        created_at: true,
        updated_at: true,
      },
    });

    return result.pages?.[0] || null;
  } catch (error) {
    console.error("Error fetching page by slug:", error);
    throw error;
  }
}

// Get all published page slugs (useful for static generation)
export async function getAllPageSlugs() {
  try {
    const result = await client.query({
      pages: {
        __args: {
          filter: { is_published: { _eq: true } },
        },
        slug: true,
      },
    });

    return result.pages?.map((page) => page.slug).filter(Boolean) || [];
  } catch (error) {
    console.error("Error fetching page slugs:", error);
    throw error;
  }
}
