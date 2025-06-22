import { getPageBySlug } from "@/lib/queries";
import Layout from "../../components/Layout";

import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug("services");

  return {
    title: (page?.title || "خدماتنا") as string,
    description: "تعرف على الخدمات التي نقدمها",
  };
}

export default async function Services() {
  const page = await getPageBySlug("services");

  if (!page) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-center">خدماتنا</h1>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">الأخبار العاجلة</h3>
                <p className="text-gray-600">
                  نقدم لكم آخر الأخبار العاجلة من جميع أنحاء العالم
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">
                  التقارير المتخصصة
                </h3>
                <p className="text-gray-600">
                  تقارير متعمقة وتحليلات شاملة للأحداث المهمة
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">
                  المقالات التفاعلية
                </h3>
                <p className="text-gray-600">
                  محتوى تفاعلي يشرك القراء في النقاش والحوار
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
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
                آخر تحديث:{" "}
                {new Date(page.updated_at).toLocaleDateString("ar-SA")}
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
