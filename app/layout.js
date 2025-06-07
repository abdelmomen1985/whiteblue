
import '../styles/globals.css'

export const metadata = {
  title: 'أبيض X أزرق',
  description: 'موقع أبيض في أزرق',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
