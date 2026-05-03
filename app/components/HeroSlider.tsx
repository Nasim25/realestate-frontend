"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    eyebrow: "Curated Luxury Real Estate",
    title: "Find Your Perfect Haven",
    subtitle:
      "Discover exceptional properties in premium locations, chosen by experts.",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1661954372617-15780178eb2e?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    eyebrow: "Modern Lifestyle Collection",
    title: "Live In Style Today",
    subtitle:
      "Explore elegant homes designed for comfort, class, and long-term value.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1761135125354-d024f37d04ec?q=80&w=1211&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    eyebrow: "Trusted Property Advisors",
    title: "Build Your Dream Address",
    subtitle:
      "From first visit to final deal, we guide every step with confidence.",
  },
];

export default function HeroSlider() {
  return (
    <section
      className="relative mt-18 pt-2 w-full px-4 bg-white"
      aria-label="Hero slider"
    >
      <div className="mx-auto w-full max-w-[95%] py-2">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop
          speed={1300}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="
            w-full overflow-hidden rounded-2xl shadow-2xl
            [&_.swiper-pagination]:bottom-3 [&_.swiper-pagination]:z-20
            [&_.swiper-pagination-bullet]:h-2 [&_.swiper-pagination-bullet]:w-2 [&_.swiper-pagination-bullet]:bg-white/70
            [&_.swiper-pagination-bullet-active]:w-8 [&_.swiper-pagination-bullet-active]:rounded-full [&_.swiper-pagination-bullet-active]:bg-[#d4b47a]
          "
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>

              <div className="relative w-full aspect-[16/7] sm:aspect-[16/6] md:aspect-[16/5]">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 95vw, 1280px"
                  className="object-fill object-center"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}