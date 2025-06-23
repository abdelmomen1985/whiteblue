export default function CategoryLoading() {
  return (
    <div className="min-h-screen">
      {/* Category Header Skeleton */}
      <div className="bg-gradient-to-r from-[#4381df] to-[#3455a6] text-white py-16">
        <div className="w-[90%] mx-auto text-center">
          <div className="h-12 bg-white/20 rounded-lg mb-4 max-w-md mx-auto animate-pulse"></div>
          <div className="h-6 bg-white/20 rounded-lg mb-6 max-w-2xl mx-auto animate-pulse"></div>
          <div className="h-5 bg-white/20 rounded-lg max-w-32 mx-auto animate-pulse"></div>
        </div>
      </div>

      {/* Breadcrumb Skeleton */}
      <div className="bg-gray-100 py-4">
        <div className="w-[90%] mx-auto">
          <div className="flex items-center space-x-2">
            <div className="h-4 bg-gray-300 rounded w-16 animate-pulse"></div>
            <span className="text-gray-500 mx-2">/</span>
            <div className="h-4 bg-gray-300 rounded w-20 animate-pulse"></div>
            <span className="text-gray-500 mx-2">/</span>
            <div className="h-4 bg-gray-300 rounded w-24 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Articles Skeleton */}
      <div className="py-12">
        <div className="w-[90%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse"
              >
                {/* Image Skeleton */}
                <div className="h-48 bg-gray-300"></div>

                {/* Content Skeleton */}
                <div className="p-6">
                  {/* Meta Skeleton */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-6 bg-gray-300 rounded-full w-20"></div>
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                  </div>

                  {/* Title Skeleton */}
                  <div className="space-y-2 mb-3">
                    <div className="h-5 bg-gray-300 rounded w-full"></div>
                    <div className="h-5 bg-gray-300 rounded w-3/4"></div>
                  </div>

                  {/* Excerpt Skeleton */}
                  <div className="space-y-2 mb-4">
                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                  </div>

                  {/* Tags Skeleton */}
                  <div className="flex gap-2 mb-4">
                    <div className="h-6 bg-gray-300 rounded-full w-16"></div>
                    <div className="h-6 bg-gray-300 rounded-full w-20"></div>
                    <div className="h-6 bg-gray-300 rounded-full w-14"></div>
                  </div>

                  {/* Footer Skeleton */}
                  <div className="flex items-center justify-between">
                    <div className="h-5 bg-gray-300 rounded w-20"></div>
                    <div className="h-4 bg-gray-300 rounded w-12"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Loading Text */}
      <div className="text-center py-8">
        <div className="inline-flex items-center text-gray-600">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#3454a5] ml-3"></div>
          جارِ تحميل المقالات...
        </div>
      </div>
    </div>
  );
}
