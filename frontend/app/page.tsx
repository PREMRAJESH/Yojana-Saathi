"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "./lib/supabaseClient";

export default function Home() {
  const router = useRouter();
  const [checking, setChecking] = useState(false);

  async function handleCheckEligibility() {
    setChecking(true);
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      router.push("/dashboard");
    } else {
      router.push("/login");
    }
    setChecking(false);
  }

  return (
    <>
      {/* ── NAVBAR ── */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm py-3">
        <div className="container mx-auto px-6 lg:px-10 max-w-7xl flex items-center justify-between">
          <Link className="flex items-center gap-2 group" href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/media/logo.png" alt="Yojana Saarthi Logo" width={34} height={34} className="group-hover:scale-105 transition-transform" />
            <span className="text-xl font-bold tracking-tight text-[#1B2B4B]">Yojana Saarthi</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 font-medium text-gray-500">
            <Link className="hover:text-orange-500 transition-colors text-sm" href="/schemes">Schemes</Link>
            <Link className="hover:text-orange-500 transition-colors text-sm" href="/dashboard">Eligibility</Link>
            <Link className="hover:text-orange-500 transition-colors text-sm" href="/login">Sign In</Link>
            <Link className="hover:text-orange-500 transition-colors text-sm" href="/register">Register</Link>
          </nav>
          <button
            onClick={handleCheckEligibility}
            disabled={checking}
            className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-colors shadow-md shadow-orange-500/20 disabled:opacity-70"
          >
            {checking ? "Checking..." : "Check Eligibility"}
          </button>
          <button className="md:hidden p-2 text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </header>

      <main>
        {/* ════════════════════════════════════════════
            HERO SECTION
        ════════════════════════════════════════════ */}
        <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #f0f4ff 0%, #f8f9ff 40%, #fffaf5 70%, #fff7f0 100%)" }}>

          {/* ── Hero 3-column grid ── */}
          <div className="container mx-auto px-6 lg:px-10 max-w-7xl pt-14 pb-0">
            <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr_300px] gap-6 items-center">

              {/* ── LEFT: Copy ── */}
              <div className="space-y-5 z-10 py-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-200 bg-orange-50/80">
                  <svg className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-orange-600 font-semibold text-[10px] tracking-widest uppercase">
                    AI-Powered • Open Source • For Every Citizen
                  </span>
                </div>

                {/* Heading */}
                <h1 className="text-5xl lg:text-[56px] font-extrabold leading-[1.08] text-[#1B2B4B]">
                  Unlock Your<br />
                  Right to<br />
                  <span className="text-orange-500">Benefits</span>
                </h1>

                {/* Sub */}
                <p className="text-gray-500 text-base leading-relaxed max-w-sm">
                  We scan <span className="font-bold text-orange-500">4,702+</span> government schemes
                  using advanced AI reasoning to find every benefit you are eligible for.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <button
                    onClick={handleCheckEligibility}
                    disabled={checking}
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-orange-500 rounded-full hover:bg-orange-600 active:scale-95 transition-all shadow-lg shadow-orange-400/40 disabled:opacity-70"
                  >
                    {checking ? "Checking…" : "Check Eligibility Now"}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                  <a href="#how-it-works" className="text-sm font-semibold text-[#1B2B4B] hover:text-orange-500 transition-colors">
                    How It Works
                  </a>
                </div>
              </div>

              {/* ── CENTER: AI Graphic + floating cards ── */}
              <div className="relative flex items-end justify-center min-h-[520px]">

                {/* Main AI circuit image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/media/Center-Ai-Code.png"
                  alt="AI Eligibility Engine"
                  className="w-full max-w-[500px] mx-auto select-none pointer-events-none relative z-0"
                  style={{ filter: "drop-shadow(0 0 40px rgba(249,115,22,0.15))" }}
                />

                {/* Label: AI Eligibility Engine */}
                <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-white/80 backdrop-blur-sm border border-orange-100 rounded-full px-3 py-1 shadow-sm z-10 whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                  <span className="text-orange-500 text-[10px] font-bold tracking-widest uppercase">AI Eligibility Engine</span>
                </div>

                {/* Floating card: Your Profile */}
                <div className="absolute top-10 left-0 lg:-left-8 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 w-[160px] z-20 animate-[float_4s_ease-in-out_infinite]">
                  <p className="text-[11px] font-bold text-gray-900 mb-3">Your Profile</p>
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center mb-3 mx-auto">
                    <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    {[
                      { icon: (
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                      ), label: "Age" },
                      { icon: (
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      ), label: "Occupation" },
                      { icon: (
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      ), label: "State" },
                      { icon: (
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      ), label: "Income" },
                      { icon: (
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
                      ), label: "Category" },
                    ].map(({ icon, label }) => (
                      <div key={label} className="flex items-center gap-2 text-[11px] text-gray-400">
                        <span className="text-gray-300">{icon}</span>
                        <span>{label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating card: Scanning */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 w-[210px] z-20 animate-[float_5s_ease-in-out_infinite_1s]">
                  <p className="text-[11px] font-bold text-gray-900 mb-3">Scanning 4,702+ Schemes</p>
                  <div className="space-y-2.5">
                    {[
                      { label: "Checking Eligibility Rules", done: true, active: false },
                      { label: "Verifying Documents",        done: true, active: false },
                      { label: "Matching Benefits",          done: false, active: true },
                      { label: "Finalizing Results",         done: false, active: false },
                    ].map(({ label, done, active }) => (
                      <div key={label} className="flex items-center gap-2 text-[11px]">
                        {done ? (
                          <svg className="w-3.5 h-3.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        ) : active ? (
                          <svg className="w-3.5 h-3.5 text-orange-400 flex-shrink-0 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                        ) : (
                          <div className="w-3.5 h-3.5 rounded-full border border-gray-200 flex-shrink-0" />
                        )}
                        <span className={active ? "text-orange-500 font-semibold" : done ? "text-gray-700" : "text-gray-300"}>
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── RIGHT: Matching Schemes ── */}
              <div className="z-10 py-8">
                <p className="text-orange-500 font-bold text-[10px] tracking-widest uppercase mb-3">Matching Schemes</p>
                <div className="space-y-2.5">
                  {[
                    {
                      emoji: "🌾",
                      bg: "bg-green-50",
                      title: "PM-KISAN",
                      subtitle: "Farmer Income Support",
                      amount: "₹6,000 / year",
                      amountColor: "text-green-600",
                    },
                    {
                      emoji: "🏥",
                      bg: "bg-red-50",
                      title: "Ayushman Bharat",
                      subtitle: "Health Coverage",
                      amount: "Up to ₹5 Lakh",
                      amountColor: "text-orange-500",
                    },
                    {
                      emoji: "🎓",
                      bg: "bg-blue-50",
                      title: "National Scholarship",
                      subtitle: "Education Support",
                      amount: "Up to ₹75,000",
                      amountColor: "text-orange-500",
                    },
                    {
                      emoji: "🏠",
                      bg: "bg-orange-50",
                      title: "PM Awas Yojana",
                      subtitle: "Housing Assistance",
                      amount: "Up to ₹1,20,000",
                      amountColor: "text-orange-500",
                    },
                  ].map((s) => (
                    <div key={s.title} className="flex items-start gap-2.5 bg-white rounded-xl shadow-sm border border-gray-100 px-3 py-2.5 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-default">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-lg ${s.bg} flex items-center justify-center text-sm mt-0.5`}>
                        {s.emoji}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-[12px] font-bold text-[#1B2B4B] truncate">{s.title}</p>
                          <svg className="w-3.5 h-3.5 text-green-500 flex-shrink-0 ml-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-[10px] text-gray-400 mt-0.5">{s.subtitle}</p>
                        <p className={`text-[12px] font-bold mt-1 ${s.amountColor}`}>{s.amount}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* ── STATS ROW ── */}
          <div className="relative z-10 border-t border-gray-100/80 bg-white/50 backdrop-blur-sm mt-4">
            <div className="container mx-auto px-6 lg:px-10 max-w-7xl py-5">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  {
                    icon: <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
                    value: "4,702+", label: "Government\nSchemes",
                  },
                  {
                    icon: <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
                    value: "28", label: "States & UTs\nCovered",
                  },
                  {
                    icon: <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                    value: "95%+", label: "Match\nAccuracy",
                  },
                  {
                    icon: <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
                    value: "100%", label: "Private &\nSecure",
                  },
                ].map(({ icon, value, label }) => (
                  <div key={value} className="flex items-center gap-3">
                    <div className="flex-shrink-0">{icon}</div>
                    <div>
                      <p className="text-lg font-extrabold text-[#1B2B4B]">{value}</p>
                      <p className="text-[11px] text-gray-400 leading-tight whitespace-pre-line">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── BOTTOM WAVE (Indian cityscape) ── */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/media/bottom-waves.png"
            alt=""
            aria-hidden="true"
            className="w-full block select-none pointer-events-none -mt-1"
            style={{ display: "block" }}
          />

        </section>
        {/* ════ END HERO ════ */}

        {/* ── Pain Points ── */}
        <section className="py-24 bg-white" id="how-it-works">
          <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-3">The Real Challenge</h3>
                <h2 className="text-4xl font-bold text-[#1B2B4B] mb-6 leading-tight">Why Finding the Right Scheme is So Hard</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  With 4,700+ schemes, complex rules, and endless paperwork, most eligible benefits go unclaimed. It doesn&apos;t have to be this way.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { bg: "bg-red-50", border: "border-red-100", iconBg: "bg-red-100", iconColor: "text-red-600", title: "Too Much Information", desc: "Sifting through bureaucratic pages to figure out if you qualify.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /> },
                  { bg: "bg-orange-50", border: "border-orange-100", iconBg: "bg-orange-100", iconColor: "text-orange-500", title: "Irrelevant Results", desc: "Search results returning hundreds of irrelevant schemes.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> },
                  { bg: "bg-blue-50/50", border: "border-blue-100", iconBg: "bg-blue-100", iconColor: "text-blue-600", title: "Wasted Time & Resources", desc: "Applying blindly and hoping for the best.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /> },
                ].map(({ bg, border, iconBg, iconColor, title, desc, icon }) => (
                  <div key={title} className={`flex items-start p-6 ${bg} rounded-2xl border ${border} hover:-translate-y-1 transition-transform`}>
                    <div className={`flex-shrink-0 w-12 h-12 ${iconBg} rounded-full flex items-center justify-center mr-5`}>
                      <svg className={`w-6 h-6 ${iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">{icon}</svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">{title}</h4>
                      <p className="text-gray-600 text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Value Prop ── */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="lg:w-1/3">
                <h3 className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-3">Why Yojana Saarthi</h3>
                <h2 className="text-4xl font-bold text-[#1B2B4B] mb-6 leading-tight">Clarity.<br />Accuracy.<br />Personalization.</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Yojana Saarthi cuts through the noise with AI-driven reasoning and personalized matching tailored specifically for you.
                </p>
                <Link className="inline-flex items-center text-[#1B2B4B] font-semibold hover:text-orange-500 transition-colors group" href="/schemes">
                  Explore Schemes
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /></svg>
                </Link>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { bg: "bg-white", title: "AI-Driven Accuracy", desc: "Advanced AI understands complex eligibility rules and cross-verifies thousands of criteria.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /> },
                  { bg: "bg-blue-50", title: "Personalized for You", desc: "Matches are tailored to your demographic, financial, and personal profile.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /> },
                  { bg: "bg-white", title: "Transparent Reasoning", desc: "Clear reasons for every match — so you always know why you&apos;re eligible.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /> },
                ].map(({ bg, title, desc, icon }) => (
                  <div key={title}>
                    <div className={`w-16 h-16 ${bg} rounded-2xl shadow-sm flex items-center justify-center mb-6 border border-gray-100`}>
                      <svg className="w-8 h-8 text-[#1B2B4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">{icon}</svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-[#1B2B4B] text-white pt-16 pb-8 border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <Link className="flex items-center gap-2 mb-4" href="/">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/media/logo.png" alt="Yojana Saarthi Logo" width={28} height={28} />
                <span className="text-xl font-bold tracking-tight">Yojana Saarthi</span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                An AI-powered eligibility initiative empowering every citizen to access the benefits they deserve.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link className="hover:text-orange-500 transition-colors" href="/schemes">Schemes</Link></li>
                <li><Link className="hover:text-orange-500 transition-colors" href="/dashboard">Eligibility Check</Link></li>
                <li><Link className="hover:text-orange-500 transition-colors" href="/login">Sign In</Link></li>
                <li><Link className="hover:text-orange-500 transition-colors" href="/register">Register</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a className="hover:text-orange-500 transition-colors" href="#">Privacy Policy</a></li>
                <li><a className="hover:text-orange-500 transition-colors" href="#">Terms of Service</a></li>
                <li><a className="hover:text-orange-500 transition-colors" href="#">Accessibility</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Connect</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /></svg>
                  info@yojanasaarthi.in
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /></svg>
                  1800-123-4567
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-500">
            © 2025 Yojana Saarthi. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
