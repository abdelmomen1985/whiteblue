import Link from "next/link";

export default function Layout({ children, title = "أبيض X أزرق" }) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
