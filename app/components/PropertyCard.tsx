"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, BedDouble, Bath, Square, Landmark } from "lucide-react";

export interface Property {
  id: number;
  image: string;
  price: string;
  address: string;
  city: string;
  beds: number;
  baths: number;
  sqft: string;
  badge: string;
  badgeColor?: string;
  gradient: string;
  emoji: string;
  acre?: string;
}

export default function PropertyCard({ property }: { property: Property }) {
  const [saved, setSaved] = useState(false);

  return (
    <article
      className="group bg-white overflow-hidden cursor-pointer transition-all duration-500
        hover:-translate-y-1 hover:shadow-[0_12px_60px_rgba(15,14,12,0.18)] rounded-lg border-1 border-gray-200 shadow-md"
      aria-label={`${property.address}, ${property.price}`}
    >
      {/* Image */}
      <Link href="/property" className="block">
        <div className="relative h-[180px] overflow-hidden">
          <Image
            src={property.image}
            alt={`${property.address} in ${property.city}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Badge */}
          <span
            className={`absolute top-4 left-4 px-3 py-1 text-[10px] font-medium tracking-[0.12em] uppercase ${property.badgeColor || "bg-[#b8975a] text-[#0f0e0c]"
              }`}
          >
            {property.badge}
          </span>

          {/* Fav */}
          <button
            onClick={(e) => { e.preventDefault(); setSaved(!saved); }}
            aria-label={saved ? "Remove from favourites" : "Save to favourites"}
            className="absolute top-4 right-4 w-9 h-9 bg-white/90 hover:bg-white flex items-center justify-center transition-all duration-200 hover:scale-110"
          >
            <Heart
              size={16}
              className={saved ? "fill-red-500 text-red-500" : "text-[#6b6660]"}
            />
          </button>
        </div>
      </Link>

      {/* Body */}
      <Link href="/property" className="block p-6 no-underline">
        <div className="font-display text-[26px] font-light text-[#0f0e0c] mb-1">
          {property.price}
        </div>
        <div className="text-[13px] text-[#6b6660] mb-5">{property.address}, {property.city}</div>
        {property.acre ? (
          <div className="flex gap-5 pt-4 border-t border-[#e8e3db]">
          <span className="flex items-center gap-1.5 text-[12px] text-[#6b6660]">
            <Landmark size={14} /> {property.acre} 
          </span>
          </div>
        ) : (
          <div className="flex gap-5 pt-4 border-t border-[#e8e3db]">
            <span className="flex items-center gap-1.5 text-[12px] text-[#6b6660]">
              <BedDouble size={14} /> {property.beds} Beds
            </span>
            <span className="flex items-center gap-1.5 text-[12px] text-[#6b6660]">
              <Bath size={14} /> {property.baths} Baths
            </span>
            <span className="flex items-center gap-1.5 text-[12px] text-[#6b6660]">
              <Square size={14} /> {property.sqft}
            </span>
          </div>
        )}

      </Link>
    </article>
  );
}
