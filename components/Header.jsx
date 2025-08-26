"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "../lib/site";

export default function Header(){
  const pathname = usePathname();
  const nav = [
    { href: "/landing", label: "דף נחיתה" },
    { href: "/learn", label: "תהליך 20 יום" },
    { href: "/dashboard", label: "דשבורד" },
    { href: "/faq", label: "שאלות נפוצות" },
    { href: "/contact", label: "צור קשר" }
  ];
  return (
    <header className="border-b border-slate-800 bg-slate-900/60 sticky top-0 backdrop-blur z-40">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-xl">{site.name}</Link>
        <nav className="flex items-center gap-2">
          {nav.map(item => (
            <Link key={item.href} href={item.href}
              className={`px-3 py-2 rounded-xl hover:bg-slate-800 ${pathname===item.href ? "bg-slate-800" : ""}`}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
