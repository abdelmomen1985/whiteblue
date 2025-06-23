import { client } from "../graphql-client";

// Fetch all categories
export async function getAllCategories() {
  try {
    const result = await client.query({
      categories: {
        id: true,
        name: true,
        slug: true,
        created_at: true,
      },
    });

    return result.categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
}

// Fetch category by slug
export async function getCategoryBySlug(slug: string) {
  try {
    const result = await client.query({
      categories: {
        __args: {
          filter: {
            slug: {
              _eq: slug,
            },
          },
        },
        id: true,
        name: true,
        slug: true,
        created_at: true,
      },
    });

    return result.categories?.[0] || null;
  } catch (error) {
    console.error("Error fetching category by slug:", error);
    throw error;
  }
}
