"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    {
      name: "Dashboard",
      icon: "🏠",
      href: "/dashboard",
    },
    {
      name: "AI Mentor",
      icon: "🤖",
      href: "/mentor",
    },
    {
      name: "Learning Roadmap",
      icon: "📚",
      href: "/roadmap",
    },
    {
      name: "Code Vault",
      icon: "💾",
      href: "/vault",
    },
    {
      name: "Daily Challenge",
      icon: "🔥",
      href: "/daily",
    },
    {
      name: "Profile",
      icon: "👤",
      href: "/profile",
    },
  ];

  return (
    <aside className="hidden lg:flex lg:w-72 lg:flex-col border-r bg-white shadow-sm min-h-screen">

      <div className="border-b p-8">

        <Image
          src="/logo.png"
          alt="CodeMint"
          width={220}
          height={70}
          className="mx-auto h-auto"
          priority
        />

        <p className="mt-4 text-center text-sm text-gray-500">
          Learn • Practice • Build
        </p>

      </div>

      <nav className="flex-1 space-y-2 p-6">

        {links.map((link) => (

          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center gap-3 rounded-xl px-5 py-4 transition font-medium ${
              pathname === link.href
                ? "bg-green-100 text-green-700"
                : "text-gray-700 hover:bg-green-50"
            }`}
          >
            <span className="text-xl">
              {link.icon}
            </span>

            {link.name}
          </Link>

        ))}

      </nav>

      <div className="border-t p-6">

        <Link
          href="/"
          className="flex items-center justify-center rounded-xl bg-red-500 px-5 py-3 font-semibold text-white hover:bg-red-600 transition"
        >
          🚪 Logout
        </Link>

      </div>

    </aside>
  );
}