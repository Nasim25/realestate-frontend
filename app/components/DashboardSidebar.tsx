"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  icon: string;
  label: string;
  href: string;
  badge?: string | number;
  dot?: boolean;
}

interface SidebarProps {
  role: "admin" | "agent" | "user";
  name: string;
  roleLabel: string;
  initials: string;
  sections: { label: string; items: NavItem[] }[];
}

export default function DashboardSidebar({ role, name, roleLabel, initials, sections }: SidebarProps) {
  const pathname = usePathname();

  const roleTag = role === "admin" ? "ADMIN" : role === "agent" ? "AGENT" : "";

  return (
    <aside className="w-[260px] bg-[#0f0e0c] flex-shrink-0 flex flex-col min-h-screen" role="navigation" aria-label={`${role} navigation`}>
      {/* Logo */}
      <div className="px-8 pb-8 pt-8 border-b border-white/[0.08] mb-8">
        <Link href="/" className="font-display text-[22px] font-semibold tracking-[0.12em] uppercase text-[#f5f2ec] no-underline block">
          HA<span className="text-[#b8975a]">V</span>EN
          {roleTag && (
            <span className="ml-2 text-[10px] tracking-[0.18em] text-white/25 align-middle">{roleTag}</span>
          )}
        </Link>
      </div>

      {/* Nav sections */}
      <div className="flex-1">
        {sections.map((sec) => (
          <div key={sec.label} className="mb-6">
            <div className="px-8 mb-2 text-[10px] font-medium tracking-[0.2em] uppercase text-white/25">
              {sec.label}
            </div>
            <ul className="list-none">
              {sec.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 px-8 py-3 text-[13px] no-underline border-l-2 transition-all duration-200
                        ${isActive
                          ? "text-[#f5f2ec] bg-white/[0.06] border-[#b8975a]"
                          : "text-white/50 border-transparent hover:text-[#f5f2ec] hover:bg-white/[0.04]"
                        }`}
                    >
                      <span className="text-[15px]">{item.icon}</span>
                      <span className="flex-1">{item.label}</span>
                      {item.badge && (
                        <span className="bg-[#b8975a] text-[#0f0e0c] text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      )}
                      {item.dot && (
                        <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* User */}
      <div className="px-8 py-6 border-t border-white/[0.08] flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#b8975a] to-[#7a8c76] flex items-center justify-center text-[13px] font-bold text-[#0f0e0c] flex-shrink-0">
          {initials}
        </div>
        <div className="min-w-0">
          <div className="text-[13px] font-medium text-[#f5f2ec] truncate">{name}</div>
          <div className="text-[11px] text-white/35">{roleLabel}</div>
        </div>
      </div>
    </aside>
  );
}
