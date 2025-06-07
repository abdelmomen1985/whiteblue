
import Layout from '../../components/Layout'

export const metadata = {
  title: 'عن الموقع',
  description: 'معلومات عن موقعنا',
}

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">عن الموقع</h1>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg mb-6">
            مرحباً بكم في موقعنا الإخباري المتميز
          </p>
          <p className="text-gray-600">
            نقدم لكم أحدث الأخبار والتقارير من جميع أنحاء العالم
          </p>
        </div>
      </div>
    </Layout>
  )
}
