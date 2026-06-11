"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex items-center justify-between py-4">

          <Link
            href="/"
            className="text-xl font-bold text-foreground"
          >
            INSIGHT-X
          </Link>

         <div className="flex items-center gap-2 md:gap-3">

            <ThemeToggle />

           {pathname !== "/register" ? (
  <Link
    href="/register"
    className="
      rounded-full
      bg-blue-600
      px-5
      py-2
      font-medium
      text-white
      transition-all
      duration-300
      hover:scale-105
      hover:bg-blue-500
    "
  >
    Register
  </Link>
) : (
  <Link
    href="/"
    className="
      flex
      h-10
      w-10
      items-center
      justify-center
      rounded-full
      border
      border-border
      bg-background
      text-foreground
      transition-all
      duration-300
      hover:scale-110
    "
  >
    <ArrowLeft className="h-5 w-5" />
  </Link>
)}
          </div>

        </div>
      </div>
    </nav>
  );
}