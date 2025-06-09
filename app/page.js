import { Button } from "../components/ui/button";

export const metadata = {
  title: "أبيض X أزرق - الرئيسية",
  description: "موقع إخباري متميز",
};

export default function Home() {
  return (
    <div>
      <div className="bg-[#ededed] p-5 relative">
        <div className="md:w-[80%] mx-auto">
          <div className="cards flex justify-around">
            <div className="card md:w-[30%] w-[70%]">
              <p className="bg-[#3454a5] text-white font-semibold p-2 rounded-md w-fit ms-auto">
                خلي بالك
              </p>
              <a
                href="#"
                className="transition-all duration-300 hover:text-[#3454a5] my-2 block"
              >
                إطلاق مبادرة "من البردي الأخضر إلى الفن الخالد" بمشاركة اليونسكو
              </a>
              <p className="opacity-70 text-sm">19 May 2025</p>
            </div>
            <div className="card md:block hidden md:w-[30%]">
              <p className="bg-[#3454a5] text-white font-semibold p-2 rounded-md w-fit ms-auto">
                خلي بالك
              </p>
              <a
                href="#"
                className="transition-all duration-300 hover:text-[#3454a5] my-2 block"
              >
                رسميًا.. شكوى من نادي الزمالك للمجلس الأعلى للإعلام ضد إعلان
                "اتصالات"
              </a>
              <p className="opacity-70 text-sm">19 May 2025</p>
            </div>
            <div className="card lg:block hidden w-[30%]">
              <p className="bg-[#3454a5] text-white font-semibold p-2 rounded-md w-fit ms-auto">
                خلي بالك
              </p>
              <a
                href="#"
                className="transition-all duration-300 hover:text-[#3454a5] my-2 block"
              >
                منع سير الميكروباص على الطريق الدائري بشكل جزئ بداية من يوم 1
                يونيو
              </a>
              <p className="opacity-70 text-sm">19 May 2025</p>
            </div>
          </div>
        </div>
        <a href="#">
          <i className="transition-all duration-300 text-white hover:bg-[#3454a5] rounded-full bg-gray-300 p-2 px-3 absolute -translate-y-1/2 top-1/2 right-10 md:right-28 fa-solid fa-angle-right"></i>
        </a>
        <a href="#">
          <i className="transition-all duration-300 text-white hover:bg-[#3454a5] rounded-full bg-gray-300 p-2 px-3 absolute -translate-y-1/2 top-1/2 left-10 md:left-28 fa-solid fa-angle-left"></i>
        </a>
      </div>

      <div className="section-1 my-5 py-5">
        <div className="md:w-[90%] mx-auto">
          <h2 className="text-2xl block w-full text-center font-bold p-4">
            الأكثر متابعة هذا الشهر
          </h2>
          <div className="xl:flex">
            <div className="flex w-full flex-wrap my-10 xl:my-0 items-center xl:w-1/2">
              <div className="flex flex-wrap">
                <div className="items-center md:w-[45%] w-full flex py-2 px-4 justify-end text-end gap-x-5">
                  <div>
                    <a
                      href=""
                      className="font-bold hover:text-[#3454a5] transition-all duration-300"
                    >
                      !لما يحصل زلزال، جسمك مش بس بيهتز… ده كلّه بيتأهّب
                    </a>
                    <p className="font-thin">22 مايو 2025</p>
                  </div>
                  <div className="max-w-[160px] max-h-[200px]">
                    <img
                      src="/images/post-3.jpg"
                      className="shadow-lg object-cover rounded-lg w-full"
                      alt=""
                    />
                  </div>
                </div>
                <div className="items-center md:w-[45%] w-full flex py-2 px-4 justify-end text-end gap-x-5">
                  <div>
                    <a
                      href=""
                      className="font-bold hover:text-[#3454a5] transition-all duration-300"
                    >
                      !بيقولك : أنقذ مريض من الموت بعد بلع قرص الغلة؟ Chat GPT
                    </a>
                    <p className="font-thin">26 مايو 2025</p>
                  </div>
                  <div className="max-w-[160px] max-h-[200px]">
                    <img
                      src="/images/post-4.jpg"
                      className="shadow-lg object-cover rounded-lg w-full"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="items-center md:w-[45%] w-full flex py-2 px-4 justify-end text-end gap-x-5">
                  <div>
                    <a
                      href=""
                      className="font-bold hover:text-[#3454a5] transition-all duration-300"
                    >
                      دماغك هنّجت من المذاكرة؟.. طيب دي الخلطة السحرية للتركيز
                      من #أبيض_في_أزرق
                    </a>
                    <p className="font-thin">21 مايو 2025</p>
                  </div>
                  <div className="max-w-[160px] max-h-[200px]">
                    <img
                      src="/images/post-1.jpg"
                      className="shadow-lg object-cover rounded-lg w-full"
                      alt=""
                    />
                  </div>
                </div>
                <div className="items-center md:w-[45%] w-full flex py-2 px-4 justify-end text-end gap-x-5">
                  <div>
                    <a
                      href=""
                      className="font-bold hover:text-[#3454a5] transition-all duration-300"
                    >
                      !بتذاكر وانت جعان؟.. دماغك مش هتساعدك
                    </a>
                    <p className="font-thin">22 مايو 2025</p>
                  </div>
                  <div className="max-w-[160px] max-h-[200px]">
                    <img
                      src="/images/post-2.jpg"
                      className="shadow-lg object-cover rounded-lg w-full"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 hidden xl:block w-[85%] mx-auto h-[1px]"></div>
            </div>
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

      <div className="section-2 my-5 py-5 text-end">
        <div className="w-[90%] mx-auto flex gap-5 flex-wrap justify-between">
          <div className="shadow-lg md:w-[30%] w-full rounded-t-lg bg-gray-100">
            <img
              src="/images/watch-5.jpg"
              className="shadow-lg w-full rounded-t-lg object-cover"
              alt=""
            />
            <div className="p-2">
              <div className="flex justify-between">
                <p className="font-thin text-gray-600">16 أبريل 2025</p>
                <p className="bg-[#3454a5] text-white font-semibold p-1 rounded-md w-fit">
                  خلي بالك
                </p>
              </div>
              <a
                className="my-3 block font-bold text-lg hover:text-[#3454a5] transition-all duration-300"
                href=""
              >
                منظومة دمغ ذكية وحملات رقابية.. خطة وزارة التموين لضبط أسواق
                الذهب
              </a>
              <p>لضمان تداول مشغولات ذهبية مطابقة للمواصفات</p>
            </div>
          </div>
          <div className="shadow-lg md:w-[30%] w-full rounded-t-lg bg-gray-100">
            <img
              src="/images/watch-6.jpg"
              className="shadow-lg w-full rounded-t-lg object-cover"
              alt=""
            />
            <div className="p-2">
              <div className="flex justify-between">
                <p className="font-thin text-gray-600">15 أبريل 2025</p>
                <p className="bg-[#3454a5] text-white font-semibold p-1 rounded-md w-fit">
                  خلي بالك
                </p>
              </div>
              <a
                className="my-3 block font-bold text-lg hover:text-[#3454a5] transition-all duration-300"
                href=""
              >
                إعادة افتتاح مسرح "بيرم التونسي" بالإسكندرية بعد تطويره
              </a>
              <p>مسرح بيرم التونسي هو واحد من أقدم المسارح في الإسكندرية</p>
            </div>
          </div>
          <div className="shadow-lg md:w-[30%] w-full rounded-t-lg bg-gray-100">
            <img
              src="/images/watch-7.jpg"
              className="shadow-lg w-full rounded-t-lg object-cover"
              alt=""
            />
            <div className="p-2">
              <div className="flex justify-between">
                <p className="font-thin text-gray-600">15 أبريل 2025</p>
                <p className="bg-[#3454a5] text-white font-semibold p-1 rounded-md w-fit">
                  خلي بالك
                </p>
              </div>
              <a
                className="my-3 block font-bold text-lg hover:text-[#3454a5] transition-all duration-300"
                href=""
              >
                فيلم "اللعب مع العيال" بطولة محمد إمام على "نتفليكس" من يوم ١٧
                أبريل
              </a>
              <p>بيشارك في البطولة أسماء جلال، وباسم سمرة</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-3 bg-gray-200 my-5 py-5">
        <div className="w-[90%] mx-auto flex justify-between py-5">
          <a
            className="bg-black text-sm p-3 rounded-full text-white font-semibold transition-all duration-300 hover:bg-[#3454a5]"
            href=""
          >
            المزيد من الفيديوهات
            <i className="text-xs fa-solid fa-chevron-right"></i>
          </a>
          <h2 className="text-2xl">شاهد قبل الحذف</h2>
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
  );
}
