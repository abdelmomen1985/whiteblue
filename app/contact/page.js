
import Layout from '../../components/Layout'
import { Button } from '../../components/ui/button'

export const metadata = {
  title: 'اتصل بنا',
  description: 'تواصل معنا',
}

export default function Contact() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">اتصل بنا</h1>
        <div className="max-w-lg mx-auto">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">الاسم</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3454a5]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">البريد الإلكتروني</label>
              <input 
                type="email" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3454a5]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">الرسالة</label>
              <textarea 
                rows="4" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3454a5]"
              ></textarea>
            </div>
            <Button className="w-full bg-[#3454a5] hover:bg-[#2a4494] text-white">
              إرسال الرسالة
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  )
}
