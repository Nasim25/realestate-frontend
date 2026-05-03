"use client";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Sections";
import { BedDouble, Bath, Square, Ruler, Calendar, MapPin, ChevronRight, Phone, Mail, Share2, Download } from "lucide-react";
import Link from "next/link";

const features = [
  "Infinity Pool & Spa", "Smart Home Automation", "Private Beach Access", "Cinema Room",
  "4-Car Garage", "Chef's Kitchen", "Home Office Suite", "Wine Cellar (400 bottles)",
  "Outdoor Kitchen & BBQ", "Solar + Battery Backup", "Security System", "Guest Cottage",
];

export default function PropertyPage() {
  return (
    <main>
      <Navbar />

      {/* Photo Gallery */}
      <div className="mt-[72px] grid grid-cols-[1fr_380px] h-[560px] gap-0.5 max-lg:grid-cols-1 max-lg:h-auto">
        {/* Main */}
        <div className="relative bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] flex items-center justify-center group cursor-pointer overflow-hidden">
          <span className="text-[140px] opacity-20">🏛️</span>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
            <span className="text-white text-[13px] tracking-[0.15em] uppercase font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              ⊕ View Gallery
            </span>
          </div>
          <span className="absolute top-5 left-5 px-3 py-1.5 bg-[#b8975a] text-[#0f0e0c] text-[10px] font-medium tracking-[0.12em] uppercase">
            For Sale
          </span>
        </div>

        {/* Thumbs */}
        <div className="grid grid-rows-2 gap-0.5 max-lg:hidden">
          <div className="bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center cursor-pointer hover:brightness-110 transition-all duration-300">
            <span className="text-[64px] opacity-25">🏠</span>
          </div>
          <div className="bg-gradient-to-br from-[#f093fb] to-[#f5576c] flex items-center justify-center cursor-pointer relative group hover:brightness-110 transition-all duration-300">
            <span className="text-[64px] opacity-25">🌊</span>
            <div className="absolute inset-0 bg-black/55 flex flex-col items-center justify-center">
              <span className="font-display text-[32px] font-light text-white">+8</span>
              <span className="text-[11px] tracking-[0.12em] uppercase text-white/80">Photos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-[1fr_400px] gap-16 px-8 md:px-12 py-16 max-w-[1400px] mx-auto max-lg:grid-cols-1">
        {/* Left */}
        <div>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-[12px] text-[#6b6660] mb-6" aria-label="Breadcrumb">
            <Link href="/" className="text-[#b8975a] no-underline hover:text-[#0f0e0c] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/" className="text-[#b8975a] no-underline hover:text-[#0f0e0c] transition-colors">Malibu</Link>
            <ChevronRight size={12} />
            <span>Marble Hill Villa</span>
          </nav>

          <h1 className="font-display text-[44px] font-light leading-[1.1] mb-2">
            Marble Hill<br />Ocean Villa
          </h1>
          <p className="flex items-center gap-1.5 text-[14px] text-[#6b6660] mb-8">
            <MapPin size={13} className="text-[#b8975a]" />
            14 Marble Hill Drive, Malibu, CA 90265
          </p>

          {/* Price */}
          <div className="flex items-baseline gap-6 mb-8">
            <span className="font-display text-[52px] font-light">$3,250,000</span>
            <span className="text-[13px] text-[#6b6660]">Est. $14,200 / mo</span>
          </div>

          {/* Specs bar */}
          <div className="flex bg-[#f5f2ec] mb-12" role="list" aria-label="Property specifications">
            {[
              { icon: <BedDouble size={16} />, val: "5", key: "Bedrooms" },
              { icon: <Bath size={16} />, val: "4", key: "Bathrooms" },
              { icon: <Square size={16} />, val: "4,200", key: "Sq Ft" },
              { icon: <Ruler size={16} />, val: "0.8", key: "Acres" },
              { icon: <Calendar size={16} />, val: "2022", key: "Built" },
            ].map((s, i) => (
              <div key={i} role="listitem" className="flex-1 px-4 py-5 text-center border-r border-[#e8e3db] last:border-r-0">
                <div className="text-[#b8975a] flex justify-center mb-1">{s.icon}</div>
                <div className="font-display text-[26px] font-light text-[#0f0e0c] leading-none">{s.val}</div>
                <div className="text-[10px] text-[#6b6660] tracking-[0.1em] uppercase mt-1">{s.key}</div>
              </div>
            ))}
          </div>

          {/* Description */}
          <h2 className="font-display text-[26px] font-light mb-4">About This Property</h2>
          <p className="text-[14px] leading-[1.9] text-[#2c2b28] mb-4">
            Perched on the prestigious Marble Hill in Malibu, this architectural masterpiece offers uninterrupted panoramic views of the Pacific Ocean. Designed by award-winning architect Jonah Elias, the residence seamlessly blends modernist precision with organic warmth — floor-to-ceiling glass, hand-poured concrete, and natural stone imported from Umbria.
          </p>
          <p className="text-[14px] leading-[1.9] text-[#2c2b28] mb-12">
            The open-plan living and dining space flows effortlessly to a 60-foot ocean-facing terrace, anchored by an infinity pool that appears to merge with the horizon. The primary suite occupies the entire upper level, featuring a private sunrise balcony, a spa-grade bathroom with dual rain showers, and a climate-controlled wardrobe.
          </p>

          {/* Features */}
          <h2 className="font-display text-[26px] font-light mb-6">Features & Amenities</h2>
          <div className="grid grid-cols-2 gap-3 mb-12" role="list">
            {features.map((f) => (
              <div key={f} role="listitem" className="flex items-center gap-2.5 text-[13px] text-[#2c2b28]">
                <span className="text-[#b8975a] font-bold text-[15px]">✓</span>
                {f}
              </div>
            ))}
          </div>

          {/* Map */}
          <h2 className="font-display text-[26px] font-light mb-4">Location</h2>
          <div className="relative h-[280px] bg-[#e8e3db] flex items-center justify-center mb-10 overflow-hidden cursor-pointer group"
            role="img" aria-label="Property location map">
            <div className="absolute inset-0"
              style={{
                backgroundImage: "linear-gradient(rgba(120,110,100,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(120,110,100,0.3) 1px, transparent 1px)",
                backgroundSize: "48px 48px"
              }}
            />
            <div className="relative z-10 flex flex-col items-center gap-2">
              <span className="text-4xl">📍</span>
              <span className="text-[12px] tracking-[0.1em] uppercase text-[#6b6660]">14 Marble Hill Drive, Malibu</span>
            </div>
            <div className="absolute inset-0 bg-[#b8975a]/0 group-hover:bg-[#b8975a]/5 transition-colors duration-300" />
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            <button className="px-10 py-4 bg-[#0f0e0c] text-white text-[13px] font-medium tracking-[0.1em] uppercase hover:bg-[#b8975a] hover:text-[#0f0e0c] transition-colors duration-300">
              Schedule a Tour
            </button>
            <button className="flex items-center gap-2 px-6 py-4 border border-[#0f0e0c] text-[#0f0e0c] text-[13px] font-medium tracking-[0.1em] uppercase hover:bg-[#0f0e0c] hover:text-white transition-colors duration-300">
              <Download size={14} /> Brochure
            </button>
            <button className="flex items-center gap-2 px-6 py-4 border border-[#0f0e0c] text-[#0f0e0c] text-[13px] font-medium tracking-[0.1em] uppercase hover:bg-[#0f0e0c] hover:text-white transition-colors duration-300">
              <Share2 size={14} /> Share
            </button>
          </div>
        </div>

        {/* Right — Contact Sidebar */}
        <aside>
          <div className="sticky top-24 bg-white p-10 shadow-[0_4px_32px_rgba(15,14,12,0.10)]">
            {/* Agent */}
            <div className="flex items-center gap-4 pb-7 border-b border-[#e8e3db] mb-7">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#b8975a] to-[#7a8c76] flex items-center justify-center text-[18px] font-bold text-[#0f0e0c] flex-shrink-0">
                AK
              </div>
              <div>
                <div className="text-[15px] font-medium text-[#0f0e0c]">Alexandra Kim</div>
                <div className="text-[12px] text-[#6b6660] mt-0.5">Senior Luxury Specialist · 14 yrs</div>
                <div className="flex gap-3 mt-2">
                  <a href="tel:+15550001234" className="text-[#b8975a] hover:text-[#0f0e0c] transition-colors" aria-label="Call agent">
                    <Phone size={14} />
                  </a>
                  <a href="mailto:alex@haven.com" className="text-[#b8975a] hover:text-[#0f0e0c] transition-colors" aria-label="Email agent">
                    <Mail size={14} />
                  </a>
                </div>
              </div>
            </div>

            <h3 className="font-display text-[22px] font-light mb-6">Request Information</h3>

            <form onSubmit={(e) => e.preventDefault()} aria-label="Contact agent" className="flex flex-col gap-4">
              {[
                { id: "cf-name", label: "Full Name", type: "text", placeholder: "Your full name", autocomplete: "name" },
                { id: "cf-email", label: "Email Address", type: "email", placeholder: "you@email.com", autocomplete: "email" },
                { id: "cf-phone", label: "Phone Number", type: "tel", placeholder: "+1 (555) 000-0000", autocomplete: "tel" },
              ].map((f) => (
                <div key={f.id}>
                  <label htmlFor={f.id} className="block text-[10px] font-medium tracking-[0.12em] uppercase text-[#6b6660] mb-2">
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    type={f.type}
                    placeholder={f.placeholder}
                    autoComplete={f.autocomplete}
                    className="w-full px-4 py-3 border border-[#e8e3db] bg-[#f5f2ec] text-[14px] text-[#0f0e0c] outline-none focus:border-[#b8975a] focus:bg-white transition-colors"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="cf-msg" className="block text-[10px] font-medium tracking-[0.12em] uppercase text-[#6b6660] mb-2">
                  Message
                </label>
                <textarea
                  id="cf-msg"
                  rows={4}
                  placeholder="I'm interested in this property and would like to schedule a viewing…"
                  className="w-full px-4 py-3 border border-[#e8e3db] bg-[#f5f2ec] text-[14px] text-[#0f0e0c] outline-none focus:border-[#b8975a] focus:bg-white transition-colors resize-y"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-[#0f0e0c] text-white text-[13px] font-medium tracking-[0.1em] uppercase hover:bg-[#b8975a] hover:text-[#0f0e0c] transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
            <p className="text-[11px] text-[#6b6660] text-center mt-4 leading-[1.6]">
              By submitting you agree to our{" "}
              <a href="#" className="text-[#b8975a] no-underline hover:underline">Privacy Policy</a>
            </p>
          </div>
        </aside>
      </div>

      <Footer />
    </main>
  );
}
