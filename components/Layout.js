
import Link from 'next/link'

export default function Layout({ children, title = "أبيض X أزرق" }) {
  return (
    <div>
      <nav className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-blue-600">
            {title}
          </Link>
          <div className="space-x-4 space-x-reverse">
            <Link href="/" className="hover:text-blue-600 transition-colors">الرئيسية</Link>
            <Link href="/about" className="hover:text-blue-600 transition-colors">عن الموقع</Link>
            <Link href="/contact" className="hover:text-blue-600 transition-colors">اتصل بنا</Link>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  )
}
