import { createClient, everything } from "../src/generated/genql";

// Create a GraphQL client instance
// Using the real API endpoint from Articles.bru
// Custom fetch that disables cache
const customFetch = (
  input: RequestInfo,
  init?: RequestInit & { next?: { revalidate?: number } }
) => {
  // Always set next: { revalidate: 0 } to disable cache
  const nextOptions = { ...init, next: { revalidate: 0 } };
  return fetch(input, nextOptions);
};

const client = createClient({
  url: "https://admin.abyadxazra2.com/graphql",
  headers: {
    Authorization: "Bearer FkGcOk8Uudxlb41YmUEk4Kd5wPH92vI7",
    "Content-Type": "application/json",
  },
  fetch: customFetch,
});

// Export the client for use in query functions
export { client };

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
} from "../src/generated/genql";
