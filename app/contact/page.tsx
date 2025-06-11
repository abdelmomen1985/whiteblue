import Layout from "../../components/Layout";
import { Button } from "../../components/ui/button";

export const metadata = {
  title: "اتصل بنا",
  description: "تواصل معنا",
};

export default function Contact() {
  return (
    <Layout>
      {/* SVG sprite for icons */}
      <div style={{ display: 'none' }}>
        <img src="/contact-icons.svg" alt="icons" />
      </div>
      <div dir="rtl" className="min-h-screen bg-gray-200 py-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-6">
            <span className="bg-blue-600 text-white text-xl font-bold rounded-lg px-8 py-2 shadow">كلمنا</span>
          </div>
          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col md:flex-row gap-8 items-stretch">
            {/* Contact Form (now first/right in RTL) */}
            <form className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-100 rounded-lg p-6 order-1 md:order-1">
              <input
                type="text"
                className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-right"
                placeholder="الاسم"
                name="name"
              />
              <input
                type="text"
                className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-right"
                placeholder="رقم الهاتف"
                name="phone"
              />
              <input
                type="email"
                className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-right"
                placeholder="البريد الالكتروني"
                name="email"
              />
              <input
                type="number"
                className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-right"
                placeholder="السن"
                name="age"
              />
              <textarea
                className="col-span-1 md:col-span-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none placeholder:text-right"
                placeholder="اكتب رسالة"
                rows={4}
                name="message"
              ></textarea>
              <div className="col-span-1 md:col-span-2 flex justify-center mt-2">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-md text-lg">ارسل</Button>
              </div>
            </form>
            {/* Contact Info (now second/left in RTL) */}
            <div className="flex flex-col gap-4 justify-center md:w-1/3 w-full mb-6 md:mb-0 order-2 md:order-2">
              <div className="flex items-center gap-2 text-gray-700">
                <svg width="24" height="24"><use href="/contact-icons.svg#icon-instagram" /></svg>
                <span>abyadxazra2</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <svg width="24" height="24"><use href="/contact-icons.svg#icon-gmail" /></svg>
                <span>abyadxazra2@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <svg width="24" height="24"><use href="/contact-icons.svg#icon-location" /></svg>
                <span>Adress:Cairo,Egypt</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
