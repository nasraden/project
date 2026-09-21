import Link from "next/link";
import Image from "next/image";

export default function EnterprisePage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-neutral-200 bg-neutral-50/50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <span className="inline-block rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-800">
                Kulmi Hub Enterprise
              </span>
              <h1 className="font-display text-4xl font-extrabold tracking-tight text-neutral-900 md:text-5xl lg:text-6xl">
                Scale your business with dedicated talent teams.
              </h1>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Empower your organization with custom enterprise solutions, dedicated talent managers, verified local compliance, and custom payment workflows across Somaliland and East Africa.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact-sales"
                  className="rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700"
                >
                  Contact Enterprise Sales
                </Link>
                <Link
                  href="#features"
                  className="rounded-lg border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 transition-colors"
                >
                  Explore Solutions
                </Link>
              </div>
            </div>

            <div className="relative rounded-2xl border border-neutral-200 bg-white p-8 shadow-xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                  <div>
                    <p className="text-xs font-semibold uppercase text-neutral-400">Custom Engagement</p>
                    <h3 className="text-xl font-bold text-neutral-900">Dedicated Hiring Manager</h3>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                    Enterprise
                  </span>
                </div>

                <ul className="space-y-3 text-sm text-neutral-600">
                  <li className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Hand-curated shortlist within 48 hours</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Custom invoicing & local mobile API payments</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Dedicated account advisor & legal compliance</span>
                  </li>
                </ul>

                <div className="rounded-xl bg-neutral-50 p-4 border border-neutral-100">
                  <p className="text-xs text-neutral-500">Avg. hiring speed for Enterprise teams</p>
                  <p className="mt-1 font-display text-2xl font-bold text-neutral-900">3x Faster than public job boards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ENTERPRISE FEATURES SECTION */}
      <section id="features" className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="font-display text-3xl font-bold text-neutral-900 md:text-4xl">
              Built for organizations with high-volume hiring needs
            </h2>
            <p className="text-neutral-600">
              Everything your enterprise needs to source, manage, and pay verified technical and creative talent seamlessly.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Custom Talent Sourcing",
                desc: "We screen and verify top-tier software engineers, AI specialists, and UI/UX designers tailored specifically to your company tech stack.",
                icon: "✦",
              },
              {
                title: "Enterprise Compliance & Security",
                desc: "IP protection, non-disclosure agreements (NDAs), and localized contract management compliant with regional standards.",
                icon: "🛡️",
              },
              {
                title: "Centralized Billing & Reporting",
                desc: "Consolidated monthly invoices with customized billing terms, team-level analytics, and integrated budget controls.",
                icon: "📊",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-xl text-emerald-700">
                  {feature.icon}
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-neutral-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA SECTION */}
      <section className="border-t border-neutral-200 bg-neutral-900 py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center space-y-6">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Ready to transform how your company hires?
          </h2>
          <p className="text-neutral-300 text-base max-w-xl mx-auto">
            Schedule a demo with our Enterprise team to discuss your hiring goals and custom workflow requirements.
          </p>
          <div>
            <Link
              href="/contact-sales"
              className="inline-block rounded-lg bg-emerald-500 px-8 py-3.5 text-sm font-bold text-neutral-950 transition-colors hover:bg-emerald-400"
            >
              Talk to Enterprise Sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}