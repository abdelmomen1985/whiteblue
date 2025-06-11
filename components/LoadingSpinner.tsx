export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
        <div className="mt-4 text-center">
          <p className="text-gray-600 text-sm">جاري التحميل...</p>
        </div>
      </div>
    </div>
  );
}