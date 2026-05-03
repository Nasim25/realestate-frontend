import Navbar from "../../components/Navbar";
import DashboardSidebar from "../../components/DashboardSidebar";
import { TrendingUp, Home, Users, DollarSign, Clock } from "lucide-react";

const kpis = [
  { icon: <Home size={18} />, label: "Total Listings", value: "12,401", change: "↑ 3.2% this month" },
  { icon: <Users size={18} />, label: "Registered Users", value: "84,620", change: "↑ 8.7% this month" },
  { icon: <DollarSign size={18} />, label: "Revenue (MTD)", value: "$284K", change: "↑ 12.4% vs last month" },
  { icon: <Clock size={18} />, label: "Avg. Days on Market", value: "18.3", change: "↓ 2.1 days improvement" },
];

const pendingListings = [
  { prop: "4BR Villa, Bel Air", addr: "78 Canyon View Dr", agent: "Alex Kim", price: "$4.2M", time: "Today, 9:14 AM", status: "Pending" },
  { prop: "Studio Apt, DTLA", addr: "120 Grand Ave #1402", agent: "Marcus Lee", price: "$2,800/mo", time: "Today, 8:02 AM", status: "Pending" },
  { prop: "Penthouse, WeHo", addr: "44 Sunset Strip #PH", agent: "Priya Nair", price: "$9.8M", time: "Yesterday", status: "Approved" },
  { prop: "3BR House, Pasadena", addr: "11 Rose Bowl Rd", agent: "Tom Wright", price: "$1.65M", time: "Yesterday", status: "Rejected" },
];

const activity = [
  { text: "New agent Priya Nair registered and verified", time: "2 min ago" },
  { text: "Listing #8841 flagged for review", time: "14 min ago" },
  { text: "$3.2M transaction completed — Malibu Villa", time: "1 hr ago" },
  { text: "System backup completed successfully", time: "3 hrs ago" },
];

const categories = [
  { label: "Sale", count: "9,672", pct: 78 },
  { label: "Rent", count: "6,740", pct: 54 },
  { label: "New", count: "3,980", pct: 32 },
  { label: "Com.", count: "2,228", pct: 18 },
];

const sidebarSections = [
  {
    label: "Overview",
    items: [
      { icon: "📊", label: "Dashboard", href: "/dashboard/admin" },
      { icon: "🏠", label: "All Listings", href: "/dashboard/admin", badge: "12,401" },
      { icon: "👥", label: "Users", href: "/dashboard/admin" },
      { icon: "🏢", label: "Agents", href: "/dashboard/admin" },
    ],
  },
  {
    label: "Management",
    items: [
      { icon: "✅", label: "Approvals", href: "/dashboard/admin", badge: 7 },
      { icon: "🚩", label: "Reports", href: "/dashboard/admin", badge: 3 },
      { icon: "💬", label: "Messages", href: "/dashboard/admin" },
      { icon: "📈", label: "Analytics", href: "/dashboard/admin" },
      { icon: "⚙️", label: "Settings", href: "/dashboard/admin" },
    ],
  },
];

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    Pending: "bg-[#b8975a]/15 text-[#b8975a]",
    Approved: "bg-[#7a8c76]/15 text-[#7a8c76]",
    Rejected: "bg-[#0f0e0c]/[0.08] text-[#6b6660]",
  };
  return (
    <span className={`inline-block px-2.5 py-0.5 text-[10px] font-medium tracking-[0.08em] uppercase ${map[status]}`}>
      {status}
    </span>
  );
}

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-[#f5f2ec]">
      <Navbar />
      <DashboardSidebar
        role="admin"
        name="Super Admin"
        roleLabel="Platform Administrator"
        initials="SA"
        sections={sidebarSections}
      />

      <main className="flex-1 pt-[72px] p-10 overflow-y-auto" aria-label="Admin dashboard">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-display text-[38px] font-light text-[#0f0e0c] mb-1">
            Good morning, <em className="italic text-[#b8975a]">Admin</em>
          </h1>
          <p className="text-[14px] text-[#6b6660]">Here&apos;s what&apos;s happening on the platform today — May 3, 2026</p>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0.5 mb-10">
          {kpis.map((k, i) => (
            <div key={i} className="bg-white p-7 hover:-translate-y-0.5 hover:shadow-[0_4px_32px_rgba(15,14,12,0.10)] transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <span className="text-[10px] font-medium tracking-[0.12em] uppercase text-[#6b6660]">{k.label}</span>
                <span className="text-[#b8975a]/50">{k.icon}</span>
              </div>
              <div className="font-display text-[38px] font-light text-[#0f0e0c] leading-none mb-2">{k.value}</div>
              <div className="text-[12px] text-[#7a8c76]">{k.change}</div>
            </div>
          ))}
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-[1fr_340px] gap-0.5">
          {/* Listings table */}
          <div className="bg-white p-8">
            <h2 className="font-display text-[22px] font-light mb-6">Listing Approvals Queue</h2>
            <table className="w-full border-collapse" aria-label="Pending listings">
              <thead>
                <tr>
                  {["Property", "Agent", "Price", "Submitted", "Status"].map((h) => (
                    <th key={h} className="text-left text-[10px] font-medium tracking-[0.15em] uppercase text-[#6b6660] pb-4 border-b border-[#e8e3db] pr-4">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pendingListings.map((l, i) => (
                  <tr key={i} className="border-b border-[#e8e3db] last:border-0">
                    <td className="py-4 pr-4">
                      <div className="text-[13px] font-medium text-[#0f0e0c]">{l.prop}</div>
                      <div className="text-[11px] text-[#6b6660] mt-0.5">{l.addr}</div>
                    </td>
                    <td className="py-4 pr-4 text-[13px] text-[#2c2b28]">{l.agent}</td>
                    <td className="py-4 pr-4 text-[13px] text-[#2c2b28]">{l.price}</td>
                    <td className="py-4 pr-4 text-[13px] text-[#6b6660]">{l.time}</td>
                    <td className="py-4"><StatusBadge status={l.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Right col */}
          <div className="flex flex-col gap-0.5">
            {/* Chart */}
            <div className="bg-white p-8">
              <h2 className="font-display text-[22px] font-light mb-6">Listings by Category</h2>
              <div className="space-y-4" aria-label="Listings by category">
                {categories.map((c) => (
                  <div key={c.label} className="flex items-center gap-3">
                    <span className="text-[12px] text-[#6b6660] w-8 text-right">{c.label}</span>
                    <div className="flex-1 h-1.5 bg-[#e8e3db]">
                      <div className="h-full bg-[#b8975a] transition-all duration-700" style={{ width: `${c.pct}%` }} />
                    </div>
                    <span className="text-[12px] text-[#2c2b28] w-12">{c.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Activity */}
            <div className="bg-white p-8 flex-1">
              <h2 className="font-display text-[22px] font-light mb-6">Recent Activity</h2>
              <ul className="space-y-0 list-none">
                {activity.map((a, i) => (
                  <li key={i} className="flex gap-3 py-4 border-b border-[#e8e3db] last:border-0">
                    <span className="w-2 h-2 rounded-full bg-[#b8975a] flex-shrink-0 mt-1.5" />
                    <div>
                      <div className="text-[13px] text-[#2c2b28] leading-[1.5]" dangerouslySetInnerHTML={{ __html: a.text }} />
                      <div className="text-[11px] text-[#6b6660] mt-1">{a.time}</div>
                    </div>
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
