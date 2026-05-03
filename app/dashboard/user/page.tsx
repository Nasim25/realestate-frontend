import Navbar from "../../components/Navbar";
import DashboardSidebar from "../../components/DashboardSidebar";
import Link from "next/link";

const kpis = [
  { icon: "❤️", label: "Saved Properties", value: "12", change: "3 with price drops" },
  { icon: "📅", label: "Viewings Booked", value: "3", change: "Next: Today, 2:00 PM" },
  { icon: "🔔", label: "Active Alerts", value: "5", change: "38 new matches" },
];

const saved = [
  { gradient: "from-[#667eea] to-[#764ba2]", emoji: "🏛️", price: "$3,250,000", addr: "14 Marble Hill Dr, Malibu", note: "↓ Price dropped $150K", noteColor: "text-[#7a8c76]" },
  { gradient: "from-[#f093fb] to-[#f5576c]", emoji: "🏠", price: "$18,500 / mo", addr: "88 Sunset Blvd, Beverly Hills", note: "Viewing: Today 2:00 PM", noteColor: "text-[#6b6660]" },
  { gradient: "from-[#4facfe] to-[#00f2fe]", emoji: "🏗️", price: "$1,890,000", addr: "22 Oceanview Terr, Santa Monica", note: "New Build · Ready Q3 2026", noteColor: "text-[#6b6660]" },
  { gradient: "from-[#43e97b] to-[#38f9d7]", emoji: "🌊", price: "$9,200 / mo", addr: "45 Palm Canyon Rd, Palm Springs", note: "3 others also saved this", noteColor: "text-[#6b6660]" },
];

const messages = [
  { initials: "AK", name: "Alexandra Kim · Agent", preview: "Great news — the seller has accepted your viewing request!", time: "Now" },
  { initials: "HV", name: "Haven Support", preview: "Your mortgage pre-approval estimate is ready to view", time: "2 hr ago" },
  { initials: "MJ", name: "Marcus Johnson · Agent", preview: "Hi Jordan, the Palm Springs property is available for a tour this weekend…", time: "Yesterday" },
];

const alerts = [
  { query: "Malibu · 4+ bed · Under $4M", matches: "38 new matches" },
  { query: "Beverly Hills · Rental · Under $20K/mo", matches: "12 new matches" },
  { query: "Santa Monica · New Build · Any price", matches: "5 new matches" },
  { query: "Bel Air · Luxury · $5M+", matches: "2 new matches" },
  { query: "Palm Springs · Rental · Under $10K/mo", matches: "9 new matches" },
];

const sidebarSections = [
  {
    label: "Discover",
    items: [
      { icon: "🏠", label: "My Dashboard", href: "/dashboard/user" },
      { icon: "🔍", label: "Search Properties", href: "/" },
      { icon: "❤️", label: "Saved Homes", href: "/dashboard/user", badge: 12 },
      { icon: "📅", label: "My Viewings", href: "/dashboard/user" },
    ],
  },
  {
    label: "Account",
    items: [
      { icon: "💬", label: "Messages", href: "/dashboard/user", badge: 2 },
      { icon: "🔔", label: "Alerts", href: "/dashboard/user" },
      { icon: "🔑", label: "Mortgage Calc", href: "/dashboard/user" },
      { icon: "👤", label: "My Profile", href: "/dashboard/user" },
    ],
  },
];

export default function UserDashboard() {
  return (
    <div className="flex min-h-screen bg-[#f5f2ec]">
      <Navbar />
      <DashboardSidebar
        role="user"
        name="Jordan Davis"
        roleLabel="Buyer — Premium Member"
        initials="JD"
        sections={sidebarSections}
      />

      <main className="flex-1 pt-[72px] p-10 overflow-y-auto" aria-label="User dashboard">
        <div className="mb-12">
          <h1 className="font-display text-[38px] font-light text-[#0f0e0c] mb-1">
            Hello, <em className="italic text-[#b8975a]">Jordan</em>
          </h1>
          <p className="text-[14px] text-[#6b6660]">
            We found <strong className="text-[#0f0e0c] font-medium">38 new properties</strong> matching your preferences since your last visit.
          </p>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-3 gap-0.5 mb-10">
          {kpis.map((k, i) => (
            <div key={i} className="bg-white p-7 hover:-translate-y-0.5 hover:shadow-[0_4px_32px_rgba(15,14,12,0.10)] transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <span className="text-[10px] font-medium tracking-[0.12em] uppercase text-[#6b6660]">{k.label}</span>
                <span className="text-xl">{k.icon}</span>
              </div>
              <div className="font-display text-[38px] font-light text-[#0f0e0c] leading-none mb-2">{k.value}</div>
              <div className="text-[12px] text-[#7a8c76]">{k.change}</div>
            </div>
          ))}
        </div>

        {/* Saved Properties */}
        <div className="bg-white p-8 mb-0.5">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-[22px] font-light">Saved Properties</h2>
            <button className="text-[12px] font-medium tracking-[0.08em] uppercase text-[#b8975a] border border-[#b8975a] px-4 py-2 hover:bg-[#b8975a] hover:text-[#0f0e0c] transition-colors duration-200">
              View All 12
            </button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0.5" role="list">
            {saved.map((s, i) => (
              <Link
                key={i}
                href="/property"
                role="listitem"
                className="bg-[#f5f2ec] overflow-hidden no-underline group hover:-translate-y-0.5 hover:shadow-[0_4px_32px_rgba(15,14,12,0.10)] transition-all duration-300 block"
                aria-label={s.addr}
              >
                <div className={`h-[140px] bg-gradient-to-br ${s.gradient} flex items-center justify-center`}>
                  <span className="text-5xl opacity-25">{s.emoji}</span>
                </div>
                <div className="p-4">
                  <div className="font-display text-[20px] font-light text-[#0f0e0c]">{s.price}</div>
                  <div className="text-[12px] text-[#6b6660] mt-0.5">{s.addr}</div>
                  <div className={`text-[11px] font-medium mt-2 ${s.noteColor}`}>{s.note}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Messages + Alerts */}
        <div className="grid grid-cols-[1fr_1fr] gap-0.5">
          <div className="bg-white p-8">
            <h2 className="font-display text-[22px] font-light mb-6">Messages</h2>
            <ul className="list-none space-y-0">
              {messages.map((m, i) => (
                <li key={i} className="flex items-start gap-3 py-4 border-b border-[#e8e3db] last:border-0 cursor-pointer hover:opacity-70 transition-opacity">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#b8975a] to-[#7a8c76] flex items-center justify-center text-[13px] font-bold text-[#0f0e0c] flex-shrink-0">
                    {m.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[13px] font-medium text-[#0f0e0c]">{m.name}</div>
                    <div className="text-[12px] text-[#6b6660] truncate mt-0.5">{m.preview}</div>
                  </div>
                  <div className="text-[11px] text-[#6b6660] whitespace-nowrap ml-2">{m.time}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8">
            <h2 className="font-display text-[22px] font-light mb-6">My Search Alerts</h2>
            <ul className="list-none space-y-0">
              {alerts.map((a, i) => (
                <li key={i} className="flex gap-3 py-4 border-b border-[#e8e3db] last:border-0">
                  <span className="w-2 h-2 rounded-full bg-[#b8975a] flex-shrink-0 mt-1.5" />
                  <div className="flex-1">
                    <div className="text-[13px] text-[#2c2b28]">{a.query}</div>
                    <div className="text-[11px] text-[#7a8c76] mt-0.5 font-medium">{a.matches}</div>
                  </div>
                </li>
              ))}
            </ul>
            <button className="mt-5 w-full py-3 border border-[#0f0e0c] text-[#0f0e0c] text-[12px] font-medium tracking-[0.1em] uppercase hover:bg-[#0f0e0c] hover:text-white transition-colors duration-300">
              + Create New Alert
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
