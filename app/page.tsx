import MostFollowedArticles from "../components/ui/components/MostFollowedArticles";
import KhaliBalakArticles from "../components/ui/components/KhaliBalakArticles";
import CurrentNewsArticles from "../components/ui/components/CurrentNewsArticles";

export const metadata = {
  title: "أبيض X أزرق - الرئيسية",
  description: "موقع إخباري متميز",
};

import HomeDialog from "../components/HomeDialog";
import { client } from "@/lib/graphql-client";

export default async function Home() {
  const { site_settings } = await client.query({
    site_settings: {
      home_popup_image: {
        id: true,
      },
    },
  });
  return (
    <>
      {/* Popup dialog for image or video */}
      <HomeDialog
        mediaId={site_settings.home_popup_image?.id}
        mediaType="image"
      />
      <div>
        {/* Dynamic Article Cards - Server Side */}
        <KhaliBalakArticles />
        {/* Pattern Separator with Ad Banner */}
        <div className="relative h-28 p-2">
          {/* Pattern background */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/images/pattern.png')",
              backgroundRepeat: "repeat",
              backgroundColor: "#3454a5",
              backgroundBlendMode: "multiply",
            }}
          ></div>
          {/* Centered advertisement banner */}
          <div className="relative h-full flex items-center justify-center">
            <img
              src="/images/ads-banner.png"
              alt="Advertisement Banner"
              className="h-full object-contain"
            />
          </div>
        </div>

        <div className="section-1 my-5 py-5 relative">
          {/* Side Banners - Hidden on mobile and tablet */}
          <div className="hidden 2xl:block">
            {/* Left Side Banner */}
            <div className="absolute left-4 top-0 bottom-0 flex items-center">
              <div className="sticky top-1/2 transform -translate-y-1/2">
                <img
                  src="/images/ads-side.png"
                  alt="Advertisement"
                  className="w-40 h-auto"
                />
              </div>
            </div>
            {/* Right Side Banner */}
            <div className="absolute right-4 top-0 bottom-0 flex items-center">
              <div className="sticky top-1/2 transform -translate-y-1/2">
                <img
                  src="/images/ads-side.png"
                  alt="Advertisement"
                  className="w-40 h-auto"
                />
              </div>
            </div>
          </div>

          <div className="md:w-[70%] mx-auto">
            <h2 className="text-2xl block w-full text-center font-bold p-4">
              الأكثر متابعة هذا الشهر
            </h2>
            <div className="xl:flex">
              <MostFollowedArticles />
              <div className="mx-auto xl:w-1/2">
                <div className="h-[500px] relative text-end">
                  <img
                    className="w-full rounded-lg h-full object-contain bg-gradient-to-r from-[#4381df] to-[#3455a6] shadow-lg"
                    src="/images/post-5.jpg"
                    alt=""
                  />
                  <div className="absolute p-5 pt-10 left-0 w-full rounded-lg bottom-0 bg-gradient-to-t from-black from-50% to-transparent">
                    <p className="text-white text-sm my-3">
                      <a
                        href=""
                        className="text-white font-semibold bg-[#3454a5] p-1 rounded-md"
                      >
                        خلي بالك
                      </a>
                      - 21 مايو 2025
                    </p>
                    <p className="text-white text-2xl font-bold my-2">
                      بمناسبة اليوم العالمي للشاي
                    </p>
                    <a
                      href=""
                      className="font-bold hover:text-[#3454a5] text-white transition-all duration-300"
                    >
                      دي أفضل 5 أنواع شاي مفيدة لصحتك ونشاطك كل يوم.. قولنا بقى…
                      من الخمس أنواع دول،إيه أكتر شاي بتحبه؟ وليه؟
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pattern Separator with Ad Banner */}
        <div className="relative h-28 p-2">
          {/* Pattern background */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/images/pattern.png')",
              backgroundRepeat: "repeat",
              backgroundColor: "#3454a5",
              backgroundBlendMode: "multiply",
            }}
          ></div>
          {/* Centered advertisement banner */}
          <div className="relative h-full flex items-center justify-center">
            <img
              src="/images/ads-banner.png"
              alt="Advertisement Banner"
              className="h-full object-contain"
            />
          </div>
        </div>

        <CurrentNewsArticles />

        <div className="section-3 bg-gray-200 my-5 py-5">
          <div className="w-[90%] mx-auto flex justify-between py-5">
            <h2 className="text-2xl">شاهد قبل الحذف</h2>
            <a
              className="border border-[#3454a5] text-sm p-3 rounded-full text-[#3454a5] font-semibold transition-all duration-300 hover:bg-[#3454a5] hover:text-white"
              href=""
            >
              المزيد من الفيديوهات
              <i className="text-xs fa-solid fa-chevron-left mx-2"></i>
            </a>
          </div>
          <div className="w-[90%] mx-auto flex gap-5 flex-wrap justify-between text-end">
            <div className="rounded-lg relative shadow-lg group cursor-pointer w-[45%] lg:w-[22%]">
              <img
                src="/images/BeforeDel-1.jpg"
                className="w-full rounded-lg h-96 object-cover"
                alt=""
              />
              <div className="absolute bottom-0 w-full rounded-b-lg p-2 bg-gradient-to-t from-black from-50% to-transparent text-white">
                <i className="block my-3 group-hover:text-[#3454a5] transition-all duration-300 fa-solid fa-circle-play text-4xl"></i>
                <a
                  className="font-bold text-lg group-hover:text-[#3454a5] transition-all duration-300"
                  href=""
                >
                  مؤثرين في 2022: أحمد سعد
                </a>
              </div>
            </div>
            <div className="rounded-lg relative shadow-lg group cursor-pointer w-[45%] lg:w-[22%]">
              <img
                src="/images/BeforeDel-2.jpg"
                className="w-full rounded-lg h-96 object-cover"
                alt=""
              />
              <div className="absolute bottom-0 rounded-b-lg w-full p-2 bg-gradient-to-t from-black from-50% to-transparent text-white">
                <i className="block my-3 group-hover:text-[#3454a5] transition-all duration-300 fa-solid fa-circle-play text-4xl"></i>
                <a
                  className="font-bold text-lg group-hover:text-[#3454a5] transition-all duration-300"
                  href=""
                >
                  #مؤثرين_في_2021 : ماد سيليوشنز
                </a>
              </div>
            </div>
            <div className="rounded-lg relative shadow-lg group cursor-pointer w-[45%] lg:w-[22%]">
              <img
                src="/images/BeforeDel-3.jpg"
                className="w-full rounded-lg h-96 object-cover"
                alt=""
              />
              <div className="absolute bottom-0 rounded-b-lg w-full p-2 bg-gradient-to-t from-black from-50% to-transparent text-white">
                <i className="block my-3 group-hover:text-[#3454a5] transition-all duration-300 fa-solid fa-circle-play text-4xl"></i>
                <a
                  className="font-bold text-lg group-hover:text-[#3454a5] transition-all duration-300"
                  href=""
                >
                  حوار مع رامي يوسف بطل مسلسل رامي
                </a>
              </div>
            </div>
            <div className="rounded-lg relative shadow-lg group cursor-pointer w-[45%] lg:w-[22%]">
              <img
                src="/images/BeforeDel-4.jpg"
                className="w-full rounded-lg h-96 object-cover"
                alt=""
              />
              <div className="absolute bottom-0 rounded-b-lg w-full p-2 bg-gradient-to-t from-black from-50% to-transparent text-white">
                <i className="block my-3 group-hover:text-[#3454a5] transition-all duration-300 fa-solid fa-circle-play text-4xl"></i>
                <a
                  className="font-bold text-lg group-hover:text-[#3454a5] transition-all duration-300"
                  href=""
                >
                  حوارنا مع مروان حامد وأحمد مراد عن فيلمهم تراب الماس
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
