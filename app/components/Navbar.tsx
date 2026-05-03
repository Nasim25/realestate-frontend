"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Buy", href: "/" },
  { label: "Rent", href: "/" },
  { label: "Sell", href: "/" },
  { label: "Agents", href: "/" },
  { label: "Insights", href: "/" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#f5f2ec]/95 backdrop-blur-md shadow-[0_2px_32px_rgba(15,14,12,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="flex items-center h-[72px] px-8 md:px-12" aria-label="Main navigation">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-2xl font-semibold tracking-[0.12em] uppercase text-[#0f0e0c] no-underline"
        >
          HA<span className="text-[#b8975a]">V</span>EN
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 ml-auto list-none" role="list">
          {navLinks.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                className="text-[13px] font-medium tracking-[0.08em] uppercase text-[#2c2b28] no-underline
                  relative group hover:text-[#b8975a] transition-colors duration-200"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-[#b8975a] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/dashboard/user"
          className="hidden md:inline-block ml-8 px-6 py-2.5 bg-[#0f0e0c] text-[#f5f2ec] text-[13px] font-medium
            tracking-[0.08em] uppercase no-underline hover:bg-[#b8975a] hover:text-[#0f0e0c] transition-colors duration-300"
        >
          Sign In
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden ml-auto text-[#0f0e0c]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#f5f2ec] border-t border-[#e8e3db] px-8 py-6 flex flex-col gap-4">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[13px] font-medium tracking-[0.08em] uppercase text-[#2c2b28] no-underline"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/dashboard/user"
            className="mt-2 px-6 py-3 bg-[#0f0e0c] text-[#f5f2ec] text-[13px] font-medium tracking-[0.08em] uppercase text-center no-underline"
          >
            Sign In
          </Link>
        </div>
      )}
    </header>
  );
}
