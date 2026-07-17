"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import MobileNavigation from "@/components/layout/mobile-navigation";
import ThemeToggle from "@/components/layout/theme-toggle";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
];

function isActiveRoute(
  pathname: string,
  href: string
): boolean {
  if (href === "/") {
    return pathname === "/";
  }

  return (
    pathname === href ||
    pathname.startsWith(`${href}/`)
  );
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="font-mono text-lg font-bold tracking-tight"
          aria-label="Georges Khoury home page"
        >
          <span className="text-primary">&lt;</span>
          Georges
          <span className="text-primary"> /&gt;</span>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {navigationItems.map((item) => {
            const active = isActiveRoute(
              pathname,
              item.href
            );

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={
                  active ? "page" : undefined
                }
                className={[
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <Link
            href="/contact"
            className={[
              "hidden rounded-md px-4 py-2 text-sm font-semibold transition-colors sm:inline-flex",
              pathname === "/contact"
                ? "bg-secondary text-foreground"
                : "bg-primary text-primary-foreground hover:opacity-90",
            ].join(" ")}
          >
            Let&apos;s Talk
          </Link>

          <MobileNavigation />
        </div>
      </nav>
    </header>
  );
}