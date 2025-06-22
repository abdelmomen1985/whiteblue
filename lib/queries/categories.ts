import { client } from "../graphql-client";

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
    });

    return result.categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
}
