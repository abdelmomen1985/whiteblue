import Layout from '../components/Layout'
import { Button } from '../components/ui/button'

export const metadata = {
  title: 'أبيض X أزرق - الرئيسية',
  description: 'موقع إخباري متميز',
}

export default function Home() {
  return (
    <Layout>
      <div className="bg-[#ededed] p-5 relative">
        {/* Test section for Tailwind and shadcn */}
        <div className="bg-white p-6 mb-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Tailwind & shadcn Test</h2>
          <div className="flex flex-wrap gap-4 mb-4">
            <Button>Default Button</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
          <div className="flex gap-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>

        <div className="md:w-[80%] mx-auto">
          <div className="cards flex justify-around">
            <div className="card md:w-[30%] w-[70%]">
              <p className="bg-[#3454a5] text-white font-semibold p-2 rounded-md w-fit ms-auto">
                خلي بالك
              </p>
              <a href="#" className="transition-all duration-300 hover:text-[#3454a5] my-2 block">
                إطلاق مبادرة "من البردي الأخضر إلى الفن الخالد" بمشاركة اليونسكو
              </a>
              <p className="text-gray-600">
                تم إطلاق مبادرة جديدة تهدف إلى الحفاظ على التراث الثقافي
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}