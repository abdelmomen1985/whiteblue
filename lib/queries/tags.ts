import { client } from "../graphql-client";

// Fetch all tags
export async function getAllTags() {
  try {
    const result = await client.query({
      tags: {
        id: true,
        tag: true,
        description: true,
        created_at: true,
        updated_at: true,
      },
    });

    return result.tags;
  } catch (error) {
    console.error("Error fetching tags:", error);
    throw error;
  }
}
