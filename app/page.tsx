"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MatchBadge from "@/components/MatchBadge";
import CertifyBadge from "@/components/CertifyBadge";

// Unsplash stock photography — free to use under the Unsplash License.
// Swap these for your own shoots whenever you have them.
const HERO_POSTER =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80";
const TALENT_AVATAR =
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80";
const CLIENT_LOGOS = [
  { name: "Berbera Freight Co.", url: "https://ui-avatars.com/api/?name=Berbera+Freight&background=04277c&color=fff&size=128" },
  { name: "Hargeisa Fintech", url: "https://ui-avatars.com/api/?name=Hargeisa+Fintech&background=008291&color=fff&size=128" },
  { name: "Horn Studio", url: "https://ui-avatars.com/api/?name=Horn+Studio&background=04277c&color=fff&size=128" },
];

const CLIENT_JOBS = [
  {
    company: CLIENT_LOGOS[0],
    title: "Backend Engineer — Logistics Platform",
    budget: "$1,200/mo",
    tags: ["Node.js", "PostgreSQL", "AWS"],
  },
  {
    company: CLIENT_LOGOS[1],
    title: "Mobile App Developer — Payments App",
    budget: "$25/hr",
    tags: ["React Native", "TypeScript"],
  },
  {
    company: CLIENT_LOGOS[2],
    title: "Brand Designer — Rebrand Project",
    budget: "$900 fixed",
    tags: ["Branding", "Figma"],
  },
];

const BASIC_FEATURES = [
  "Create a talent or company profile",
  "Browse open jobs and freelancers",
  "Apply to up to 5 jobs per month",
  "Standard AI match scoring",
  "Community support",
];

const BUSINESS_FEATURES = [
  "Everything in Basic",
  "Unlimited job applications & posts",
  "Kulmi Certify verified badge priority review",
  "Advanced AI match scoring & filters",
  "Company talent pool & saved candidates",
  "Priority messaging & support",
  "Featured placement in search results",
];

export default function LandingPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const q = search.trim();
    router.push(q ? `/jobs?skill=${encodeURIComponent(q)}` : "/jobs");
  }

  return (
    <div className="min-h-screen overflow-y-auto bg-white dark:bg-neutral-950">
      <Navbar />

      {/* HERO — video background */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={HERO_POSTER}
          className="absolute inset-0 h-full w-full object-cover"
        >
          {/* Add your own licensed clip at public/videos/hero-bg.mp4 — until then, the poster image above shows. */}
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-slate-950/70" />

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <h1 className="font-display text-4xl font-bold leading-tight text-white md:text-6xl">
            Work at the speed of your ambition
          </h1>
          <p className="mt-5 text-lg text-slate-200 md:text-xl">
            Kulmi Hub matches SMEs, startups, and NGOs with AI-ranked, verified
            professionals — from Hargeisa to the global Somali diaspora.
          </p>

          <form
            onSubmit={handleSearch}
            className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
          >
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Try &lsquo;React developer&rsquo; or &lsquo;brand designer&rsquo;"
              className="w-full rounded-md border-0 px-4 py-3 text-sm text-neutral-900 shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              type="submit"
              className="shrink-0 rounded-md bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-emerald-700"
            >
              Search
            </button>
          </form>

          <div className="mt-5 flex flex-wrap justify-center gap-2 text-sm text-slate-300">
            <span>Popular:</span>
            {["Web development", "AI automation", "UI/UX design", "Digital marketing"].map((t) => (
              <Link
                key={t}
                href={`/jobs?skill=${encodeURIComponent(t)}`}
                className="underline decoration-slate-500 underline-offset-4 hover:text-white"
              >
                {t}
              </Link>
            ))}
          </div>
        </div>
      </section>
{/* FEATURED TALENT */}
      <section className="border-t border-neutral-200 bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-2xl font-semibold text-neutral-900 md:text-3xl">
            Featured talent, ready to work
          </h2>
          <p className="mt-2 max-w-2xl text-neutral-600">
            A sample of what an AI-ranked match looks like on Kulmi Hub.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {/* Freelancer match card */}
            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Image
                    src={TALENT_AVATAR}
                    alt="Amina Hassan"
                    width={56}
                    height={56}
                    className="rounded-full object-cover"
                    unoptimized
                  />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                      Frontend Developer · Freelance
                    </p>
                    <div className="mt-0.5 flex items-center gap-1.5">
                      <h3 className="font-display text-lg font-semibold text-neutral-900">
                        Amina Hassan
                      </h3>
                      <CertifyBadge size="sm" />
                    </div>
                  </div>
                </div>
                <MatchBadge score={92} />
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {["React", "TypeScript", "Tailwind CSS", "Figma"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-800 border border-neutral-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-5 space-y-2 border-t border-neutral-100 pt-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Skill overlap</span>
                  <span className="font-medium text-neutral-900">4 / 4 required</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Based in</span>
                  <span className="font-medium text-neutral-900">Hargeisa</span>
                </div>
              </div>
            </div>

            {/* Client job cards with company logo */}
            <div className="space-y-4">
              {CLIENT_JOBS.map((job) => (
                <div
                  key={job.title}
                  className="flex items-start gap-4 rounded-xl border border-neutral-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <Image
                    src={job.company.url}
                    alt={job.company.name}
                    width={44}
                    height={44}
                    className="rounded-full border border-neutral-100"
                    unoptimized
                  />
                  <div className="flex-1">
                    <p className="text-xs font-medium text-neutral-500">{job.company.name}</p>
                    <h4 className="mt-0.5 font-semibold text-neutral-900">
                      {job.title}
                    </h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-700 border border-neutral-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="shrink-0 text-sm font-semibold text-neutral-900">
                    {job.budget}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* PRICING */}
      <section id="pricing" className="border-t border-neutral-200 bg-neutral-50 py-20 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="font-display text-2xl font-semibold text-neutral-900 dark:text-white md:text-3xl">
              Plans that grow with you
            </h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">
              Start free. Upgrade when you're ready to scale hiring or your freelance business.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-3xl gap-8 md:grid-cols-2">
            {/* Basic */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-950">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Basic</h3>
              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                For getting started
              </p>
              <p className="mt-6 font-display text-4xl font-bold text-neutral-900 dark:text-white">
                Free
              </p>
              <ul className="mt-8 space-y-3">
                {BASIC_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/signup"
                className="mt-8 block rounded-md border border-neutral-300 py-2.5 text-center text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-50 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-900"
              >
                Get started free
              </Link>
            </div>

            {/* Business Plus */}
            <div className="relative rounded-2xl border-2 border-emerald-600 bg-white p-8 shadow-lg dark:bg-neutral-950">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                Popular
              </span>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                Business Plus
              </h3>
              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                For serious hiring & growth
              </p>
              <p className="mt-6 font-display text-4xl font-bold text-neutral-900 dark:text-white">
                $29<span className="text-base font-medium text-neutral-400">/mo</span>
              </p>
              <ul className="mt-8 space-y-3">
                {BUSINESS_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/signup?plan=business-plus"
                className="mt-8 block rounded-md bg-emerald-600 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
              >
                Upgrade to Business Plus
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600">
      <path
        d="M4 10.5l3.5 3.5L16 5.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
