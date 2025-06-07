
import Layout from '../components/Layout'
import { Button } from '../components/ui/button'

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">أهلاً بكم في موقعنا</h1>
        
        <div className="mb-8">
          <Button className="bg-[#3454a5] hover:bg-[#2a4494] text-white">
            اختبار زر shadcn
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="text-right">
                <p className="bg-[#3454a5] text-white font-semibold p-1 rounded-md w-fit">
                  خلي بالك
                </p>
                <p className="font-thin text-gray-600">22 مايو 2025</p>
              </div>
              <div className="max-w-[160px] max-h-[200px]">
                <img 
                  src="/images/post-2.jpg" 
                  className="shadow-lg object-cover rounded-lg w-full" 
                  alt="" 
                />
              </div>
            </div>
            <a 
              className="font-bold text-lg hover:text-[#3454a5] transition-all duration-300"
              href=""
            >
              ماغك مش هتساعدك
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="h-[300px] relative text-end">
              <img 
                className="w-full rounded-lg h-full object-cover" 
                src="/images/post-5.jpg" 
                alt="" 
              />
              <div className="absolute p-5 pt-10 left-0 w-full rounded-lg bottom-0 bg-gradient-to-t from-black from-50% to-transparent">
                <p className="text-white text-sm my-3">
                  <span className="text-white font-semibold bg-[#3454a5] p-1 rounded-md">
                    خلي بالك
                  </span>
                  - 21 مايو 2025
                </p>
                <p className="text-white text-xl font-bold my-2">
                  بمناسبة الذكرى السنوية للموقع
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
