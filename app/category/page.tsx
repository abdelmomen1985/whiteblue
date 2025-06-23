import Link from "next/link";
import { getAllCategories } from "@/lib/queries";

export const metadata = {
  title: "الأقسام - أبيض X أزرق",
  description: "تصفح جميع أقسام موقع أبيض في أزرق",
};

export default async function CategoriesPage() {
  const categories = await getAllCategories();

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#4381df] to-[#3455a6] text-white py-16">
        <div className="w-[90%] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">جميع الأقسام</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            اكتشف مقالاتنا المنظمة حسب الأقسام المختلفة
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="w-[90%] mx-auto">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-[#3454a5] hover:underline">
              الرئيسية
            </Link>
            <span className="text-gray-500 mx-2">/</span>
            <span className="text-gray-700">الأقسام</span>
          </nav>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="py-12">
        <div className="w-[90%] mx-auto">
          {categories && categories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/category/${category.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                    <div className="text-center">
                      {/* Category Icon */}
                      <div className="w-16 h-16 bg-gradient-to-br from-[#4381df] to-[#3455a6] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <i className="fas fa-folder-open text-white text-2xl"></i>
                      </div>

                      {/* Category Name */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#3454a5] transition-colors duration-300">
                        {category.name}
                      </h3>

                      {/* Category Description */}
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        اكتشف مقالات متنوعة في قسم {category.name}
                      </p>

                      {/* View Category Button */}
                      <div className="inline-flex items-center text-[#3454a5] font-semibold group-hover:text-[#2a4086] transition-colors duration-300">
                        <span>مشاهدة المقالات</span>
                        <i className="fas fa-arrow-left mr-2 text-sm group-hover:translate-x-1 transition-transform duration-300"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            /* No Categories Message */
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <i className="fas fa-folder-open text-6xl text-gray-300 mb-6"></i>
                <h3 className="text-2xl font-bold text-gray-700 mb-4">
                  لا توجد أقسام متاحة
                </h3>
                <p className="text-gray-500 mb-8">
                  لم نتمكن من العثور على أي أقسام حالياً.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center bg-[#3454a5] text-white px-6 py-3 rounded-lg hover:bg-[#2a4086] transition-colors duration-300"
                >
                  <i className="fas fa-home ml-2"></i>
                  العودة إلى الرئيسية
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Call to Action */}
      {categories && categories.length > 0 && (
        <div className="bg-gray-50 py-16">
          <div className="w-[90%] mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              لم تجد ما تبحث عنه؟
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              استخدم البحث للعثور على المقالات التي تهمك
            </p>
            <Link
              href="/search"
              className="inline-flex items-center bg-[#3454a5] text-white px-8 py-4 rounded-lg hover:bg-[#2a4086] transition-colors duration-300 font-semibold text-lg"
            >
              <i className="fas fa-search ml-3"></i>
              البحث في الموقع
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
