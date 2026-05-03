"use client";
import { useEffect, useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    bg: "from-[#1a1a2e] via-[#16213e] to-[#0f3460]",
    label: "Malibu Coastline",
  },
  {
    bg: "from-[#2d1b00] via-[#4a2c00] to-[#7a5520]",
    label: "Beverly Hills Estate",
  },
  {
    bg: "from-[#0d2b1a] via-[#1a4a2e] to-[#2d6b45]",
    label: "Santa Monica Retreat",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const t = setInterval(
      () => setCurrent((c) => (c + 1) % slides.length),
      5500
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col" aria-label="Hero">
      {/* Background Slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-gradient-to-br ${s.bg} transition-opacity duration-[1400ms] ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Noise texture overlay */}
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60 z-[1]" />

      {/* Grid texture */}
      <div className="absolute inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pt-[72px] pb-24">
        <p
          className={`text-[11px] font-medium tracking-[0.25em] uppercase text-[#d4b47a] mb-6
            ${mounted ? "animate-fade-up" : "opacity-0"} delay-100`}
        >
          Curated Luxury Real Estate
        </p>

        <h1
          className={`font-display text-[clamp(52px,8vw,108px)] font-light leading-[1.0] text-white mb-6
            ${mounted ? "animate-fade-up" : "opacity-0"} delay-300`}
        >
          Find Your<br />
          <em className="italic text-[#d4b47a] not-italic" style={{ fontStyle: "italic" }}>Perfect</em> Haven
        </h1>

        <p
          className={`text-[17px] font-light text-white/70 max-w-md mb-12
            ${mounted ? "animate-fade-up" : "opacity-0"} delay-500`}
        >
          Discover exceptional properties in the world&apos;s most desirable locations, handpicked by our expert team.
        </p>

        {/* Search Bar */}
        <div
          className={`w-full max-w-3xl bg-white flex shadow-[0_12px_60px_rgba(0,0,0,0.25)]
            ${mounted ? "animate-fade-up" : "opacity-0"} delay-700`}
        >
          <div className="flex-1 flex flex-col px-6 py-4 border-r border-[#e8e3db] hover:bg-[#f5f2ec] transition-colors cursor-pointer group">
            <label htmlFor="loc" className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#b8975a] mb-1 cursor-pointer">
              Location
            </label>
            <input
              id="loc"
              type="text"
              placeholder="City, zip, or neighborhood"
              className="bg-transparent border-none outline-none text-[14px] text-[#0f0e0c] placeholder:text-[#a09a93] font-body"
            />
          </div>
          <div className="flex flex-col px-6 py-4 border-r border-[#e8e3db] hover:bg-[#f5f2ec] transition-colors cursor-pointer min-w-[160px]">
            <label htmlFor="type" className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#b8975a] mb-1 cursor-pointer">
              Type
            </label>
            <select
              id="type"
              className="bg-transparent border-none outline-none text-[14px] text-[#0f0e0c] cursor-pointer font-body"
            >
              <option value="">All Types</option>
              <option>House</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Penthouse</option>
            </select>
          </div>
          <div className="flex flex-col px-6 py-4 border-r border-[#e8e3db] hover:bg-[#f5f2ec] transition-colors cursor-pointer min-w-[160px]">
            <label htmlFor="price" className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#b8975a] mb-1 cursor-pointer">
              Price
            </label>
            <select
              id="price"
              className="bg-transparent border-none outline-none text-[14px] text-[#0f0e0c] cursor-pointer font-body"
            >
              <option value="">Any Price</option>
              <option>Under $500K</option>
              <option>$500K – $1M</option>
              <option>$1M – $3M</option>
              <option>$3M+</option>
            </select>
          </div>
          <Link
            href="/"
            className="flex items-center gap-2 px-8 bg-[#b8975a] text-[#0f0e0c] text-[13px] font-medium tracking-[0.1em]
              uppercase no-underline hover:bg-[#0f0e0c] hover:text-white transition-colors duration-300 whitespace-nowrap"
          >
            <Search size={15} />
            Search
          </Link>
        </div>

        {/* Slide indicators */}
        <div className="flex gap-2 mt-10" role="tablist" aria-label="Slide navigation">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              role="tab"
              aria-selected={i === current}
              className={`h-0.5 transition-all duration-500 ${
                i === current ? "w-12 bg-[#d4b47a]" : "w-7 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/40 flex flex-col items-center gap-1 animate-bounce">
        <span className="text-[10px] tracking-[0.15em] uppercase">Scroll</span>
        <ChevronDown size={14} />
      </div>
    </section>
  );
}
