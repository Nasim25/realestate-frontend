"use client";
import { useState } from "react";
import PropertyCard, { Property } from "./PropertyCard";

const properties: Property[] = [
  { id: 1, image: "https://myhome3.tangiblewp.com/wp-content/uploads/2024/08/1-1.jpg", price: "TK 3,250,000", address: "14 Marble Hill Drive", city: "Malibu, CA", beds: 5, baths: 4, sqft: "4,200 sq ft", badge: "For Sale", gradient: "from-[#667eea] to-[#764ba2]", emoji: "🏛️", acre: "5-acre land" },
  { id: 2, image: "https://myhome3.tangiblewp.com/wp-content/uploads/2021/12/home-70.jpg", price: "TK 18,500 / mo", address: "88 Sunset Boulevard", city: "Beverly Hills, CA", beds: 4, baths: 3, sqft: "3,100 sq ft", badge: "For Rent", gradient: "from-[#f093fb] to-[#f5576c]", emoji: "🏠" },
  { id: 3, image: "https://myhome3.tangiblewp.com/wp-content/uploads/2021/12/home-75.jpg", price: "TK 1,890,000", address: "22 Oceanview Terrace", city: "Santa Monica, CA", beds: 3, baths: 2, sqft: "2,400 sq ft", badge: "New Build", badgeColor: "bg-[#7a8c76] text-white", gradient: "from-[#4facfe] to-[#00f2fe]", emoji: "🏗️" },
  { id: 4, image: "https://myhome3.tangiblewp.com/wp-content/uploads/2021/12/home-52.jpg", price: "TK 5,750,000", address: "7 Pinnacle Drive", city: "Bel Air, CA", beds: 7, baths: 6, sqft: "8,900 sq ft", badge: "For Sale", gradient: "from-[#43e97b] to-[#38f9d7]", emoji: "🏰" },
  { id: 5, image: "https://myhome3.tangiblewp.com/wp-content/uploads/2021/12/apartments-51.jpg", price: "TK 9,200 / mo", address: "45 Palm Canyon Road", city: "Palm Springs, CA", beds: 3, baths: 2, sqft: "2,100 sq ft", badge: "For Rent", gradient: "from-[#fa709a] to-[#fee140]", emoji: "🌴" },
  { id: 6, image: "https://myhome3.tangiblewp.com/wp-content/uploads/2021/12/bathroom-4.jpg", price: "TK 2,100,000", address: "33 Laurel Canyon Blvd", city: "West Hollywood", beds: 4, baths: 3, sqft: "3,600 sq ft", badge: "Sold", badgeColor: "bg-[#2c2b28] text-[#f5f2ec]", gradient: "from-[#a18cd1] to-[#fbc2eb]", emoji: "🏡" },
];

const filters = ["All", "For Sale", "For Rent", "New Build", "Luxury"];

export default function PropertiesSection() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? properties
      : properties.filter((p) => p.badge === active);

  return (
    <section className="py-10 px-8 md:px-12 bg-white" aria-labelledby="properties-heading">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <span className="block text-[11px] font-medium tracking-[0.2em] uppercase text-[#b8975a] mb-3">
            Handpicked Selection
          </span>
          <h2 id="properties-heading" className="font-display text-[clamp(36px,4vw,56px)] font-light leading-[1.1] text-[#0f0e0c]">
            Featured <em className="italic text-[#7a8c76]">Properties</em>
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2" role="group" aria-label="Property filters">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 text-[12px] font-medium tracking-[0.08em] uppercase border transition-all cursor-pointer duration-200 ${active === f
                ? "bg-[#0f0e0c] border-[#0f0e0c] text-white"
                : "bg-transparent border-[#e8e3db] text-[#6b6660] hover:border-[#0f0e0c] hover:text-[#0f0e0c]"
                }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 rounded-2xl" role="list">
        {filtered.map((p) => (
          <div key={p.id} role="listitem">
            <PropertyCard property={p} />
          </div>
        ))}
      </div>

      <div className="text-center mt-14">
        <button className="px-10 py-4 border border-[#0f0e0c] text-[#0f0e0c] text-[13px] font-medium
          tracking-[0.1em] uppercase hover:bg-[#0f0e0c] hover:text-white transition-colors duration-300">
          More
        </button>
      </div>
    </section>
  );
}
