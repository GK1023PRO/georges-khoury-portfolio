"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
];

function isActiveRoute(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function MobileNavigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-foreground transition-colors hover:bg-secondary"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-menu"
      >
        {isOpen ? (
          <X className="h-5 w-5" aria-hidden="true" />
        ) : (
          <Menu className="h-5 w-5" aria-hidden="true" />
        )}
      </button>

      {isOpen && (
        <>
          <button
            type="button"
            aria-label="Close navigation menu"
            className="fixed inset-0 top-16 z-40 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          <div
            id="mobile-navigation-menu"
            className="fixed inset-x-4 top-20 z-50 rounded-xl border border-border bg-card p-4 shadow-2xl"
          >
            <nav aria-label="Mobile navigation">
              <ul className="space-y-1">
                {navigationItems.map((item) => {
                  const active = isActiveRoute(pathname, item.href);

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={[
                          "flex w-full items-center rounded-md px-4 py-3 text-sm font-medium transition-colors",
                          active
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                        ].join(" ")}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <Link
                href="/contact"
                className="mt-4 flex w-full items-center justify-center rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Let&apos;s Talk
              </Link>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}