import Layout from "../../../components/Layout";
import { getPageBySlug, getAllPageSlugs } from "../../../lib/graphql-client";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const page = await getPageBySlug(params.slug);
  
  if (!page) {
    return {
      title: "الصفحة غير موجودة",
      description: "الصفحة المطلوبة غير موجودة",
    };
  }
  
  return {
    title: page.title as string,
    description: `صفحة ${page.title}` as string,
  };
}

export async function generateStaticParams() {
  try {
    const slugs = await getAllPageSlugs();
    return slugs.map((slug) => ({
      slug: slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export default async function DynamicPage({ params }: PageProps) {
  const page = await getPageBySlug(params.slug);

  if (!page) {
    notFound();
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">{page.title}</h1>
        <div className="max-w-4xl mx-auto">
          <div 
            className="prose prose-lg max-w-none rtl:prose-rtl"
            dangerouslySetInnerHTML={{ __html: page.content }}
          />
          {page.updated_at && (
            <div className="mt-8 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                آخر تحديث: {new Date(page.updated_at).toLocaleDateString('ar-SA')}
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}