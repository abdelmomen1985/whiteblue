import Layout from "../../components/Layout";
import { Button } from "../../components/ui/button";

export const metadata = {
  title: "اتصل بنا",
  description: "تواصل معنا",
};

export default function Contact() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">اتصل بنا</h1>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">الاسم</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="أدخل اسمك"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="أدخل بريدك الإلكتروني"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">الرسالة</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="اكتب رسالتك هنا"
              ></textarea>
            </div>
            <Button className="w-full">إرسال الرسالة</Button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
