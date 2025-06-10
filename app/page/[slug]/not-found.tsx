import Layout from "../../../components/Layout";
import Link from "next/link";

export default function NotFound() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-6">الصفحة غير موجودة</h2>
          <p className="text-lg text-gray-600 mb-8">
            عذراً، الصفحة التي تبحث عنها غير موجودة أو تم حذفها.
          </p>
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              العودة إلى الصفحة الرئيسية
            </Link>
            <div>
              <Link
                href="/contact"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                تواصل معنا إذا كنت تواجه مشكلة
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}