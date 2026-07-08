"use client";
import { useState } from "react";
import Link from "next/link";

const categories = [
  { id: "all", label: "All Categories", icon: "⊞" },
  { id: "education", label: "Education", icon: "🎓" },
  { id: "health", label: "Healthcare", icon: "❤️" },
  { id: "business", label: "Business", icon: "💼" },
  { id: "agriculture", label: "Agriculture", icon: "🌿" },
  { id: "housing", label: "Housing", icon: "🏠" },
  { id: "welfare", label: "Social Welfare", icon: "👥" },
];

const schemes = [
  {
    id: "nsp-001",
    category: "Education",
    categoryColor: "text-orange-500",
    iconBg: "bg-orange-100",
    icon: "🎓",
    name: "National Scholarship Portal",
    description: "Financial assistance for students from minority communities pursuing higher education.",
    link: "#",
    linkColor: "text-orange-500 hover:text-orange-600",
  },
  {
    id: "nsp-002",
    category: "Education",
    categoryColor: "text-orange-500",
    iconBg: "bg-orange-100",
    icon: "📖",
    name: "National Scholarship Portal",
    description: "Financial assistance for students from minority communities pursuing higher education.",
    link: "#",
    linkColor: "text-orange-500 hover:text-orange-600",
  },
  {
    id: "nhc-003",
    category: "Business",
    categoryColor: "text-purple-500",
    iconBg: "bg-purple-100",
    icon: "💼",
    name: "National Healthcare Committee",
    description: "Financial assistance for students from minority communities pursuing higher education.",
    link: "#",
    linkColor: "text-purple-500 hover:text-purple-600",
  },
  {
    id: "agr-004",
    category: "Agriculture",
    categoryColor: "text-green-600",
    iconBg: "bg-green-100",
    icon: "🌿",
    name: "National Healthcare Seemnary Portal",
    description: "Financial assistance for rural farming communities across Maharashtra.",
    link: "#",
    linkColor: "text-green-600 hover:text-green-700",
  },
  {
    id: "hou-005",
    category: "Housing",
    categoryColor: "text-blue-500",
    iconBg: "bg-blue-100",
    icon: "🏠",
    name: "Government Housing Scheme",
    description: "Affordable housing solutions for economically weaker sections under PMAY.",
    link: "#",
    linkColor: "text-blue-500 hover:text-blue-600",
  },
  {
    id: "sw-006",
    category: "Social Welfare",
    categoryColor: "text-yellow-600",
    iconBg: "bg-yellow-100",
    icon: "👥",
    name: "Ayushman Bharat Yojana",
    description: "Health cover of ₹5 lakh per family per year for secondary and tertiary care.",
    link: "#",
    linkColor: "text-yellow-600 hover:text-yellow-700",
  },
];

export default function Schemes() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/media/logo.png" alt="Yojana Saarthi" width={32} height={32} />
            <span className="font-bold text-navy-900 text-lg">Yojana Saarthi</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <Link href="/" className="hover:text-navy-900 transition-colors">Home</Link>
            <Link href="/schemes" className="text-orange-500 font-semibold">Schemes</Link>
            <Link href="/dashboard" className="hover:text-navy-900 transition-colors">Eligibility</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm font-semibold text-slate-600 hover:text-navy-900 transition-colors">Sign In</Link>
            <Link href="/register" className="text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-full transition-colors">Get Started</Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white pt-14 pb-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <p className="text-orange-500 font-bold tracking-widest text-xs uppercase">Find the right scheme for you</p>
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 leading-tight">
              Explore Government<br />
              <span className="text-orange-500">Schemes</span>
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-md">
              Search and discover 1000+ government schemes tailored to your needs.
            </p>
            {/* Search Bar */}
            <div className="flex items-center gap-0 max-w-lg">
              <div className="flex-1 flex items-center bg-white border border-slate-200 rounded-l-xl px-4 py-3.5 shadow-sm focus-within:border-orange-400 focus-within:ring-2 focus-within:ring-orange-400/20 transition-all">
                <svg className="w-4 h-4 text-slate-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                <input
                  type="text"
                  placeholder="Search government schemes..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-transparent text-sm text-navy-900 placeholder-slate-400 focus:outline-none"
                />
              </div>
              <button className="bg-navy-900 hover:bg-navy-800 text-white px-5 py-3.5 rounded-r-xl transition-colors flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Graphic — full polished SVG */}
          <div className="w-full lg:w-1/2 relative h-80 lg:h-[420px] flex-shrink-0">
            <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <defs>
                <filter id="tile-sh" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="0" dy="2" stdDeviation="5" floodColor="#9A7060" floodOpacity="0.13"/>
                </filter>
                <pattern id="dotgrid" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
                  <circle cx="7" cy="7" r="2" fill="#C8AE9E"/>
                </pattern>
              </defs>

              {/* ── Organic blob (right-center area, NOT edge-to-edge) ── */}
              <path d="M 195 35 C 178 0 290 -12 400 12 C 510 36 592 100 590 195 C 588 290 518 368 412 378 C 306 388 196 342 183 268 C 170 194 212 70 195 35 Z" fill="#FEF2EA"/>

              {/* ── Dot grid clusters ── */}
              <rect x="10" y="10" width="70" height="56" fill="url(#dotgrid)" opacity="0.45"/>
              <rect x="10" y="326" width="56" height="60" fill="url(#dotgrid)" opacity="0.45"/>

              {/* ── Wave decoration (bottom-right) ── */}
              <path d="M 415 355 Q 442 341 469 355 Q 496 369 523 355 Q 550 341 577 355" stroke="#D0AC92" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M 425 371 Q 452 357 479 371 Q 506 385 533 371" stroke="#D0AC92" strokeWidth="2" strokeLinecap="round"/>
              <path d="M 435 386 Q 459 373 483 386 Q 507 399 531 386" stroke="#D0AC92" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>

              {/* ── Dotted rings centred at (305, 190) ── */}
              <circle cx="305" cy="190" r="110" stroke="#C5AA96" strokeWidth="1.5" strokeDasharray="5 8" fill="none"/>
              <circle cx="305" cy="190" r="175" stroke="#C5AA96" strokeWidth="1.2" strokeDasharray="4 10" fill="none"/>

              {/* ── Clockwise arrow markers on rings ── */}
              <polygon points="400,73 409,65 411,78" fill="#BFA080" opacity="0.75"/>
              <polygon points="208,275 200,265 214,263" fill="#BFA080" opacity="0.75"/>

              {/* ── Central search circle ── */}
              <circle cx="305" cy="190" r="68" fill="#1B2B4B"/>
              <circle cx="293" cy="177" r="24" stroke="white" strokeWidth="6.5" fill="none"/>
              <line x1="310" y1="194" x2="328" y2="212" stroke="white" strokeWidth="6.5" strokeLinecap="round"/>

              {/* ── EDUCATION: orange graduation cap — top ── */}
              <g transform="translate(252, 33)" filter="url(#tile-sh)">
                <rect width="52" height="52" rx="14" fill="white"/>
                <polygon points="26,11 44,21 26,31 8,21" fill="#F5842B"/>
                <path d="M14 25 L14 35 Q26 42 38 35 L38 25" fill="#F5842B"/>
                <rect x="42" y="21" width="3.5" height="13" rx="1.75" fill="#F5842B"/>
                <circle cx="43.75" cy="35" r="3.5" fill="#F5842B"/>
              </g>

              {/* ── HOUSING: blue house — left ── */}
              <g transform="translate(70, 118)" filter="url(#tile-sh)">
                <rect width="46" height="46" rx="13" fill="white"/>
                <polygon points="23,8 40,20 40,38 6,38 6,20" fill="#DBEAFE"/>
                <polygon points="23,8 6,20 40,20" fill="#3B82F6"/>
                <rect x="17" y="24" width="12" height="14" rx="2" fill="white"/>
                <rect x="17" y="24" width="12" height="14" rx="2" fill="none" stroke="#93C5FD" strokeWidth="1.2"/>
              </g>

              {/* ── BRIEFCASE: purple — top-right ── */}
              <g transform="translate(447, 46)" filter="url(#tile-sh)">
                <rect width="52" height="52" rx="14" fill="white"/>
                <rect x="8" y="21" width="36" height="23" rx="5" fill="#8B5CF6"/>
                <path d="M19 21 L19 16 Q19 11 24 11 L28 11 Q33 11 33 16 L33 21" stroke="#7C3AED" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
                <line x1="8" y1="31" x2="44" y2="31" stroke="#DDD6FE" strokeWidth="2"/>
                <rect x="23" y="27" width="6" height="8" rx="1.5" fill="#DDD6FE"/>
              </g>

              {/* ── HEALTHCARE: red heart + ECG line — left-lower ── */}
              <g transform="translate(68, 224)" filter="url(#tile-sh)">
                <rect width="46" height="46" rx="13" fill="white"/>
                <path d="M23 38 C23 38 6 27 6 15 C6 9.5 10.5 6 15.5 6 C19.5 6 23 10 23 10 C23 10 26.5 6 30.5 6 C35.5 6 40 9.5 40 15 C40 27 23 38 23 38Z" fill="#F43F5E"/>
                <path d="M10 23 L14 23 L17 17 L21 30 L24 20 L27 23 L36 23" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </g>

              {/* ── SOCIAL WELFARE: yellow people — right ── */}
              <g transform="translate(458, 228)" filter="url(#tile-sh)">
                <rect width="52" height="52" rx="14" fill="white"/>
                <circle cx="18" cy="17" r="7.5" fill="#F59E0B"/>
                <path d="M4 49 Q4 32 18 32 Q32 32 32 49" fill="#F59E0B"/>
                <circle cx="34" cy="17" r="7.5" fill="#FBBF24"/>
                <path d="M20 49 Q20 32 34 32 Q48 32 48 49" fill="#FBBF24"/>
              </g>

              {/* ── AGRICULTURE: green leaf — bottom ── */}
              <g transform="translate(254, 308)" filter="url(#tile-sh)">
                <rect width="50" height="50" rx="13" fill="white"/>
                <path d="M25 43 C25 43 8 30 8 18 C8 8 16 5 25 5 C25 5 25 22 25 43Z" fill="#4ADE80"/>
                <path d="M25 43 C25 43 42 30 42 18 C42 8 34 5 25 5 C25 5 25 22 25 43Z" fill="#22C55E"/>
                <line x1="25" y1="8" x2="25" y2="43" stroke="#15803D" strokeWidth="1.5" opacity="0.4"/>
                <path d="M25 18 Q18 22 14 26" stroke="#15803D" strokeWidth="1.2" opacity="0.4" fill="none"/>
                <path d="M25 18 Q32 22 36 26" stroke="#15803D" strokeWidth="1.2" opacity="0.4" fill="none"/>
                <path d="M25 28 Q19 32 15 36" stroke="#15803D" strokeWidth="1" opacity="0.3" fill="none"/>
                <path d="M25 28 Q31 32 35 36" stroke="#15803D" strokeWidth="1" opacity="0.3" fill="none"/>
              </g>

            </svg>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <div className="border-y border-slate-100 bg-white sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 overflow-x-auto hide-scrollbar">
          <div className="flex items-center gap-2 w-max">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all border ${
                  activeCategory === cat.id
                    ? "bg-navy-900 text-white border-navy-900 shadow-sm"
                    : "bg-white text-slate-600 border-slate-200 hover:border-orange-300 hover:text-orange-500"
                }`}
              >
                <span>{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8">

          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-7 sticky top-36">
              <div className="flex items-center gap-2 pb-4 border-b border-slate-100">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
                <h2 className="font-bold text-navy-900">Filter Results</h2>
              </div>

              {/* State */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-navy-900">
                  <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                  State
                </label>
                <select className="w-full text-sm border border-slate-200 rounded-lg py-2.5 pl-3 pr-8 text-slate-600 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 focus:outline-none bg-white">
                  <option>Select State</option>
                  <option>Maharashtra</option>
                  <option>Karnataka</option>
                  <option>Delhi</option>
                  <option>Bihar</option>
                  <option>Uttar Pradesh</option>
                </select>
              </div>

              {/* Age */}
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm font-semibold text-navy-900">
                  <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                  Age
                </label>
                <input type="range" min="0" max="100" defaultValue="25" className="range-slider w-full" />
                <div className="flex justify-between text-xs text-slate-400 font-medium">
                  <span>0</span><span>25</span><span>50</span><span>75</span><span>100</span>
                </div>
              </div>

              {/* Income Bracket */}
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm font-semibold text-navy-900">
                  <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                  Income Bracket
                </label>
                <div className="space-y-2">
                  {["Up to ₹5,000", "₹5,001 – ₹30,000", "₹30,001 – ₹90,000", "Unknown"].map((opt, i) => (
                    <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                      <input type="radio" name="income" defaultChecked={i === 0} className="w-4 h-4 accent-navy-900" />
                      <span className="text-sm text-slate-600 group-hover:text-navy-900 transition-colors">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button className="w-full py-2.5 text-sm font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center justify-center gap-2">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                Clear Filters
              </button>
            </div>
          </aside>

          {/* Results */}
          <div className="flex-grow">
            {/* Results header */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-slate-600 text-sm">
                Showing <span className="font-bold text-navy-900">1–8</span> of <span className="font-bold text-navy-900">1,200+</span> schemes
              </p>
              <div className="flex items-center gap-2">
                <label className="text-xs text-slate-500 whitespace-nowrap">Sort by:</label>
                <select className="text-sm border border-slate-200 rounded-lg py-1.5 pl-3 pr-8 text-slate-600 focus:border-orange-400 focus:outline-none bg-white">
                  <option>Relevance</option>
                  <option>Newest</option>
                  <option>Popular</option>
                </select>
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {schemes.map((scheme) => (
                <div key={scheme.id} className="bg-white rounded-2xl border border-slate-100 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col gap-3">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-full ${scheme.iconBg} flex items-center justify-center text-xl flex-shrink-0`}>
                      {scheme.icon}
                    </div>
                    <div className="min-w-0">
                      <span className={`text-xs font-bold ${scheme.categoryColor}`}>{scheme.category}</span>
                      <h3 className="font-bold text-navy-900 text-sm leading-snug mt-0.5">{scheme.name}</h3>
                    </div>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed">{scheme.description}</p>
                  <Link href={scheme.link} className={`text-xs font-semibold ${scheme.linkColor} flex items-center gap-1 mt-auto transition-colors`}>
                    View Details
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                  </Link>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-10 flex justify-center">
              <nav className="flex items-center gap-1">
                <button className="w-9 h-9 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                </button>
                {[1, 2, 3].map((p) => (
                  <button key={p} className={`w-9 h-9 rounded-lg text-sm font-semibold transition-colors ${p === 1 ? "bg-navy-900 text-white" : "border border-slate-200 text-slate-600 hover:bg-slate-50"}`}>{p}</button>
                ))}
                <span className="w-9 h-9 flex items-center justify-center text-slate-400 text-sm">…</span>
                <button className="w-9 h-9 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
