// StatsBar
export function StatsBar() {
  const stats = [
    { number: "12K+", label: "Properties Listed" },
    { number: "8.4K", label: "Happy Clients" },
    { number: "340", label: "Expert Agents" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "24", label: "Countries" },
  ];
  return (
    <div className="bg-[#0f0e0c] flex flex-wrap justify-center py-10 px-8" aria-label="Platform statistics">
      {stats.map((s, i) => (
        <div
          key={i}
          className="flex-1 min-w-[160px] text-center px-8 py-4 border-r border-white/[0.08] last:border-r-0"
        >
          <div className="font-display text-[40px] font-light text-[#d4b47a] leading-none mb-1">
            {s.number}
          </div>
          <div className="text-[11px] tracking-[0.12em] uppercase text-white/40">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

// ReviewsSection
export function ReviewsSection() {
  const reviews = [
    {
      text: "Haven transformed what I expected from a real estate experience. Every detail, from the first viewing to the final handshake, felt completely effortless.",
      name: "Sophia Mitchell",
      role: "Purchased in Malibu, 2024",
      initials: "SM",
    },
    {
      text: "Our agent found us a home that exceeded every item on our wishlist. The platform's tools made comparing properties a pleasure rather than a chore.",
      name: "James & Laura Park",
      role: "Purchased in Beverly Hills, 2024",
      initials: "JP",
    },
    {
      text: "I listed my property through Haven and received three serious offers within the first week. The exposure and support were simply outstanding.",
      name: "Richard Kavanaugh",
      role: "Sold in Santa Monica, 2024",
      initials: "RK",
    },
  ];

  return (
    <section className="py-24 px-8 md:px-12 bg-[#0f0e0c]" aria-labelledby="reviews-heading">
      <div className="mb-16">
        <span className="block text-[11px] font-medium tracking-[0.2em] uppercase text-[#d4b47a] mb-3">
          Client Stories
        </span>
        <h2 id="reviews-heading" className="font-display text-[clamp(36px,4vw,56px)] font-light leading-[1.1] text-[#f5f2ec]">
          What Our <em className="italic text-[#7a8c76]">Clients</em> Say
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="p-10 border border-white/[0.06] bg-white/[0.03] hover:bg-white/[0.07] transition-colors duration-300"
          >
            <div className="text-[#d4b47a] tracking-[3px] text-sm mb-5">★★★★★</div>
            <p className="font-display text-[20px] font-light italic leading-[1.6] text-white/75 mb-8">
              &ldquo;{r.text}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#b8975a] to-[#7a8c76] flex items-center justify-center text-[13px] font-bold text-[#0f0e0c]">
                {r.initials}
              </div>
              <div>
                <div className="text-[13px] font-medium text-[#f5f2ec]">{r.name}</div>
                <div className="text-[11px] text-white/35 mt-0.5">{r.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ServicesSection
export function ServicesSection() {
  const services = [
    { icon: "🏠", title: "Property Sales", text: "Expert guidance through buying and selling, ensuring the best outcome for your investment." },
    { icon: "🔑", title: "Luxury Rentals", text: "Curated rental portfolio from city penthouses to coastal retreats, with flexible terms." },
    { icon: "📊", title: "Market Intelligence", text: "In-depth analytics and neighbourhood insights for confident, data-driven decisions." },
    { icon: "🤝", title: "Concierge Service", text: "White-glove support from legal due diligence to interior design and relocation." },
  ];
  return (
    <section className="py-24 px-8 md:px-12 bg-[#f5f2ec]" aria-labelledby="services-heading">
      <div className="mb-16">
        <span className="block text-[11px] font-medium tracking-[0.2em] uppercase text-[#b8975a] mb-3">What We Offer</span>
        <h2 id="services-heading" className="font-display text-[clamp(36px,4vw,56px)] font-light leading-[1.1] text-[#0f0e0c]">
          Our <em className="italic text-[#7a8c76]">Services</em>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5">
        {services.map((s, i) => (
          <div
            key={i}
            className="p-12 bg-white border-b-2 border-transparent hover:border-[#b8975a] transition-all duration-300"
          >
            <span className="text-4xl mb-6 block">{s.icon}</span>
            <div className="font-display text-[22px] font-light mb-3">{s.title}</div>
            <p className="text-[13px] text-[#6b6660] leading-[1.8]">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Footer
export function Footer() {
  const cols = [
    {
      heading: "Explore",
      links: ["Buy a Home", "Rent a Home", "Sell Your Home", "New Developments", "Commercial"],
    },
    {
      heading: "Company",
      links: ["About Haven", "Our Agents", "Careers", "Press", "Contact"],
    },
    {
      heading: "Resources",
      links: ["Market Reports", "Mortgage Calculator", "Neighbourhood Guide", "Investment Guide", "FAQs"],
    },
  ];
  return (
    <footer className="bg-[#0f0e0c] text-white/40 pt-16 pb-10 px-8 md:px-12" role="contentinfo">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">
        <div>
          <div className="font-display text-[28px] font-semibold tracking-[0.12em] uppercase text-[#f5f2ec] mb-4">
            REAL<span className="text-[#b8975a]">E</span>STATE
          </div>
          <p className="text-[13px] text-white/35 leading-[1.8]">
            The world&apos;s most trusted luxury real estate platform. Connecting exceptional people with exceptional homes since 2010.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.heading}>
            <div className="text-[11px] font-medium tracking-[0.18em] uppercase text-white/25 mb-5">
              {c.heading}
            </div>
            <ul className="list-none space-y-2.5">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-[13px] text-white/40 no-underline hover:text-[#d4b47a] transition-colors duration-200">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px]">
        <span>© 2026 Real Estate. All rights reserved.</span>
        <span className="flex gap-4">
          <a href="#" className="hover:text-[#d4b47a] transition-colors no-underline">Privacy Policy</a>
          <a href="#" className="hover:text-[#d4b47a] transition-colors no-underline">Terms of Use</a>
          <a href="#" className="hover:text-[#d4b47a] transition-colors no-underline">Accessibility</a>
        </span>
      </div>
    </footer>
  );
}
