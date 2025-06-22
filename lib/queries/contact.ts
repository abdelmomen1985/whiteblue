import { client } from "../graphql-client";

// Create a new contact message
export async function createContactMessage(input: {
  name: string;
  email: string;
  subject?: string;
  message: string;
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
    });

    return result.create_contact_messages_item;
  } catch (error) {
    console.error("Error creating contact message:", error);
    throw error;
  }
}
