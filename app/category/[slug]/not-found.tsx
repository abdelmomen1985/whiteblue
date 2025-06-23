import Link from "next/link";

export default function CategoryNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-lg mx-auto px-6">
        <div className="mb-8">
          <i className="fas fa-folder-open text-8xl text-gray-300 mb-6"></i>
        </div>

        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          القسم غير موجود
        </h1>

        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          عذراً، لم نتمكن من العثور على القسم المطلوب. قد يكون الرابط خاطئاً أو
          أن القسم لم يعد متاحاً.
        </p>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center bg-[#3454a5] text-white px-6 py-3 rounded-lg hover:bg-[#2a4086] transition-colors duration-300 font-semibold"
          >
            <i className="fas fa-home ml-2"></i>
            العودة إلى الرئيسية
          </Link>

          <div className="text-center">
            <span className="text-gray-500">أو</span>
          </div>

          <Link
            href="/category"
            className="inline-flex items-center border-2 border-[#3454a5] text-[#3454a5] px-6 py-3 rounded-lg hover:bg-[#3454a5] hover:text-white transition-colors duration-300 font-semibold"
          >
            <i className="fas fa-list ml-2"></i>
            تصفح جميع الأقسام
          </Link>
        </div>
      </div>
    </div>
  );
}
