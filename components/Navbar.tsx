"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type MenuLink = { label: string; href: string };
type MenuColumn = { heading: string; links: MenuLink[] };
type MenuKey = "hire" | "outcomes" | "work" | "why" | null;

const hireTalentMenu: MenuColumn[] = [
  {
    heading: "Development",
    links: [
      { label: "Web developers", href: "/talent?skill=web-development" },
      { label: "Mobile app developers", href: "/talent?skill=mobile" },
      { label: "Full-stack engineers", href: "/talent?skill=full-stack" },
      { label: "DevOps engineers", href: "/talent?skill=devops" },
    ],
  },
  {
    heading: "AI & Automation",
    links: [
      { label: "AI engineers", href: "/talent?skill=ai" },
      { label: "Machine learning experts", href: "/talent?skill=machine-learning" },
      { label: "Automation specialists", href: "/talent?skill=automation" },
      { label: "Prompt engineers", href: "/talent?skill=prompt-engineering" },
    ],
  },
  {
    heading: "Design",
    links: [
      { label: "UI/UX designers", href: "/talent?skill=ui-ux" },
      { label: "Graphic designers", href: "/talent?skill=graphic-design" },
      { label: "Brand designers", href: "/talent?skill=branding" },
      { label: "Product designers", href: "/talent?skill=product-design" },
    ],
  },
  {
    heading: "Marketing",
    links: [
      { label: "Digital marketers", href: "/talent?skill=digital-marketing" },
      { label: "SEO specialists", href: "/talent?skill=seo" },
      { label: "Content marketers", href: "/talent?skill=content-marketing" },
      { label: "Social media managers", href: "/talent?skill=social-media" },
    ],
  },
];

const outcomesMenu: MenuColumn[] = [
  {
    heading: "Popular outcomes",
    links: [
      { label: "Build a website", href: "/services/website" },
      { label: "Build my brand", href: "/services/branding" },
      { label: "Scale my ads", href: "/services/ad-scaling" },
      { label: "Automate my workflow with AI", href: "/services/ai-automation" },
    ],
  },
];

const findWorkMenu: MenuColumn[] = [
  {
    heading: "Find work",
    links: [
      { label: "Browse freelance jobs", href: "/jobs" },
      { label: "AI jobs", href: "/jobs?category=ai" },
      { label: "Ways to earn on Kulmi Hub", href: "/jobs?category=ways-to-earn" },
    ],
  },
];

const whyMenu: MenuColumn[] = [
  {
    heading: "Why Kulmi Hub",
    links: [
      { label: "Resources", href: "/resources" },
      { label: "Success stories", href: "/success-stories" },
      { label: "How to hire", href: "/how-to-hire" },
      { label: "How to find work", href: "/how-to-find-work" },
      { label: "Updates", href: "/updates" },
      { label: "Blog", href: "/blog" },
    ],
  },
];

function MegaMenu({ columns }: { columns: MenuColumn[] }) {
  const wide = columns.length > 1;
  return (
    <div
      className={`grid gap-8 p-8 ${wide ? "grid-cols-2 lg:grid-cols-4" : "grid-cols-1"}`}
      style={{ minWidth: wide ? "640px" : "260px" }}
    >
      {columns.map((col) => (
        <div key={col.heading}>
          <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
            {col.heading}
          </p>
          <ul className="mt-3 space-y-2.5">
            {col.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-neutral-800 hover:text-emerald-600 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<MenuKey>(null);
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function openOnHover(key: MenuKey) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(key);
  }

  function closeOnLeave() {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  }

  function handlePricingClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      e.preventDefault();
      document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  }

  const navItems: { key: MenuKey; label: string; menu: MenuColumn[] }[] = [
    { key: "hire", label: "Hire talent", menu: hireTalentMenu },
    { key: "outcomes", label: "Get outcomes", menu: outcomesMenu },
    { key: "work", label: "Find work", menu: findWorkMenu },
    { key: "why", label: "Why Kulmi Hub", menu: whyMenu },
  ];

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src="/brand/kulmi.png"
            alt="Kulmi Hub"
            width={36}
            height={36}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <div
              key={item.key}
              className="relative"
              onMouseEnter={() => openOnHover(item.key)}
              onMouseLeave={closeOnLeave}
            >
              <button
                onClick={() => setOpenMenu(openMenu === item.key ? null : item.key)}
                className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-100 hover:text-emerald-600"
                aria-expanded={openMenu === item.key}
              >
                {item.label}
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className={`h-3.5 w-3.5 transition-transform ${
                    openMenu === item.key ? "rotate-180 text-emerald-600" : "text-neutral-500"
                  }`}
                >
                  <path d="M5.2 7.5l4.8 5 4.8-5H5.2z" />
                </svg>
              </button>

              {openMenu === item.key && (
                <div
                  className="absolute left-0 top-full pt-3"
                  onMouseEnter={() => openOnHover(item.key)}
                  onMouseLeave={closeOnLeave}
                >
                  <div className="rounded-xl border border-neutral-200 bg-white shadow-2xl">
                    <MegaMenu columns={item.menu} />
                  </div>
                </div>
              )}
            </div>
          ))}

          <a
            href="#pricing"
            onClick={handlePricingClick}
            className="rounded-md px-3 py-2 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-100 hover:text-emerald-600"
          >
            Pricing
          </a>
          <Link
            href="/enterprise"
            className="rounded-md px-3 py-2 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-100 hover:text-emerald-600"
          >
            Enterprise
          </Link>
        </div>

        {/* Right side (desktop) */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/login"
            className="text-sm font-semibold text-neutral-900 hover:text-emerald-600 transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-neutral-900 hover:bg-neutral-100 lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-neutral-200 bg-white px-4 pb-6 lg:hidden">
          {navItems.map((item) => (
            <div key={item.key} className="border-b border-neutral-100">
              <button
                onClick={() => setMobileSection(mobileSection === item.key ? null : item.key)}
                className="flex w-full items-center justify-between py-4 text-sm font-semibold text-neutral-900"
              >
                {item.label}
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className={`h-4 w-4 text-neutral-500 transition-transform ${
                    mobileSection === item.key ? "rotate-180 text-emerald-600" : ""
                  }`}
                >
                  <path d="M5.2 7.5l4.8 5 4.8-5H5.2z" />
                </svg>
              </button>
              {mobileSection === item.key && (
                <div className="space-y-4 pb-4">
                  {item.menu.map((col) => (
                    <div key={col.heading}>
                      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                        {col.heading}
                      </p>
                      <ul className="mt-2 space-y-2">
                        {col.links.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              onClick={() => setMobileOpen(false)}
                              className="text-sm font-medium text-neutral-700 hover:text-emerald-600"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <a
            href="#pricing"
            onClick={handlePricingClick}
            className="block py-4 text-sm font-semibold text-neutral-900 hover:text-emerald-600"
          >
            Pricing
          </a>
          <Link
            href="/enterprise"
            onClick={() => setMobileOpen(false)}
            className="block py-4 text-sm font-semibold text-neutral-900 hover:text-emerald-600"
          >
            Enterprise
          </Link>

          <div className="mt-2 flex flex-col gap-3 border-t border-neutral-100 pt-4">
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="text-center text-sm font-semibold text-neutral-900 hover:text-emerald-600"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              onClick={() => setMobileOpen(false)}
              className="rounded-md bg-emerald-600 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-emerald-700"
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}