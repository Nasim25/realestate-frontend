import Navbar from "../../components/Navbar";
import DashboardSidebar from "../../components/DashboardSidebar";
import Link from "next/link";

const kpis = [
  { icon: "🏠", label: "Active Listings", value: "18", change: "↑ 2 added this week" },
  { icon: "👁️", label: "Total Views", value: "4,820", change: "↑ 18% vs last month" },
  { icon: "💬", label: "Enquiries (MTD)", value: "94", change: "↑ 6 new today" },
  { icon: "🏆", label: "Sales (YTD)", value: "$48M", change: "On track for annual target" },
];

const listings = [
  { prop: "Marble Hill Villa", addr: "14 Marble Hill Dr, Malibu", price: "$3.25M", views: "1,240", enq: "22", status: "Active" },
  { prop: "Sunset Penthouse", addr: "88 Sunset Blvd, Beverly Hills", price: "$18.5K/mo", views: "880", enq: "11", status: "Active" },
  { prop: "Ocean View Studio", addr: "22 Oceanview Terr, Santa Monica", price: "$1.89M", views: "620", enq: "8", status: "Pending" },
  { prop: "Pinnacle Estate", addr: "7 Pinnacle Dr, Bel Air", price: "$5.75M", views: "2,100", enq: "34", status: "Sold" },
];

const viewings = [
  { prop: "Marble Hill Villa", client: "J. Thompson", time: "Today, 2:00 PM" },
  { prop: "Sunset Penthouse", client: "M. & L. Park", time: "Today, 4:30 PM" },
  { prop: "Ocean View Studio", client: "R. Carter", time: "Tomorrow, 11:00 AM" },
];

const messages = [
  { initials: "JT", name: "James Thompson", preview: "Re: Is the villa still available for a Saturday viewing?", time: "10:24 AM" },
  { initials: "RC", name: "Rachel Carter", preview: "Can we discuss the studio's HOA fees in detail?", time: "9:05 AM" },
  { initials: "LP", name: "Laura Park", preview: "We've reviewed the offer — very interested in moving forward!", time: "Yesterday" },
];

const sidebarSections = [
  {
    label: "My Work",
    items: [
      { icon: "📊", label: "Overview", href: "/dashboard/agent" },
      { icon: "🏠", label: "My Listings", href: "/dashboard/agent", badge: 18 },
      { icon: "➕", label: "Add Listing", href: "/dashboard/agent" },
      { icon: "📅", label: "Viewings", href: "/dashboard/agent" },
    ],
  },
  {
    label: "Communication",
    items: [
      { icon: "💬", label: "Messages", href: "/dashboard/agent", badge: 4 },
      { icon: "🔔", label: "Notifications", href: "/dashboard/agent", dot: true },
      { icon: "📋", label: "Reports", href: "/dashboard/agent" },
      { icon: "👤", label: "My Profile", href: "/dashboard/agent" },
    ],
  },
];

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    Active: "bg-[#7a8c76]/15 text-[#7a8c76]",
    Pending: "bg-[#b8975a]/15 text-[#b8975a]",
    Sold: "bg-[#0f0e0c]/[0.08] text-[#6b6660]",
  };
  return (
    <span className={`inline-block px-2.5 py-0.5 text-[10px] font-medium tracking-[0.08em] uppercase ${map[status]}`}>
      {status}
    </span>
  );
}

export default function AgentDashboard() {
  return (
    <div className="flex min-h-screen bg-[#f5f2ec]">
      <Navbar />
      <DashboardSidebar
        role="agent"
        name="Alexandra Kim"
        roleLabel="Senior Luxury Specialist"
        initials="AK"
        sections={sidebarSections}
      />

      <main className="flex-1 pt-[72px] p-10 overflow-y-auto" aria-label="Agent dashboard">
        <div className="mb-12">
          <h1 className="font-display text-[38px] font-light text-[#0f0e0c] mb-1">
            Welcome back, <em className="italic text-[#b8975a]">Alexandra</em>
          </h1>
          <p className="text-[14px] text-[#6b6660]">You have 4 new enquiries and 2 viewings scheduled today.</p>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0.5 mb-10">
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

        <div className="grid grid-cols-[1fr_340px] gap-0.5">
          {/* Listings */}
          <div className="bg-white p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-[22px] font-light">My Listings</h2>
              <button className="px-6 py-2.5 bg-[#0f0e0c] text-white text-[12px] font-medium tracking-[0.1em] uppercase hover:bg-[#b8975a] hover:text-[#0f0e0c] transition-colors duration-300">
                + Add Listing
              </button>
            </div>
            <table className="w-full border-collapse" aria-label="My listings">
              <thead>
                <tr>
                  {["Property", "Price", "Views", "Enquiries", "Status"].map((h) => (
                    <th key={h} className="text-left text-[10px] font-medium tracking-[0.15em] uppercase text-[#6b6660] pb-4 border-b border-[#e8e3db] pr-4">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {listings.map((l, i) => (
                  <tr key={i} className="border-b border-[#e8e3db] last:border-0">
                    <td className="py-4 pr-4">
                      <Link href="/property" className="text-[13px] font-medium text-[#0f0e0c] no-underline hover:text-[#b8975a] transition-colors block">
                        {l.prop}
                      </Link>
                      <div className="text-[11px] text-[#6b6660] mt-0.5">{l.addr}</div>
                    </td>
                    <td className="py-4 pr-4 text-[13px] text-[#2c2b28]">{l.price}</td>
                    <td className="py-4 pr-4 text-[13px] text-[#2c2b28]">{l.views}</td>
                    <td className="py-4 pr-4 text-[13px] text-[#2c2b28]">{l.enq}</td>
                    <td className="py-4"><StatusBadge status={l.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-0.5">
            {/* Viewings */}
            <div className="bg-white p-8">
              <h2 className="font-display text-[22px] font-light mb-6">Upcoming Viewings</h2>
              <ul className="list-none space-y-0">
                {viewings.map((v, i) => (
                  <li key={i} className="flex gap-3 py-4 border-b border-[#e8e3db] last:border-0">
                    <span className="w-2 h-2 rounded-full bg-[#b8975a] flex-shrink-0 mt-1.5" />
                    <div>
                      <div className="text-[13px] font-medium text-[#0f0e0c]">{v.prop}</div>
                      <div className="text-[11px] text-[#6b6660] mt-0.5">{v.client}</div>
                      <div className="text-[11px] text-[#b8975a] mt-0.5">{v.time}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Messages */}
            <div className="bg-white p-8 flex-1">
              <h2 className="font-display text-[22px] font-light mb-6">Recent Messages</h2>
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
          </div>
        </div>
      </main>
    </div>
  );
}
