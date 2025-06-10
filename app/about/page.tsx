import Layout from "../../components/Layout";
import { getPageBySlug } from "../../lib/graphql-client";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug("about");

  return {
    title: (page?.title || "عن الموقع") as string,
    description: "معلومات عن موقعنا",
  };
}

export default async function About() {
  const page = await getPageBySlug("about-us");

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">{page.title}</h1>
        <div className="max-w-4xl mx-auto">
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: page.content }}
          />
        </div>
      </div>
    </Layout>
  );
}
