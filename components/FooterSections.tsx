import React from "react";
import Link from "next/link";
import { socialLinks } from "../data/site";
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

// TikTok has no lucide icon, so we use the official glyph.
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.3 0 .59.04.87.13V9.4a6.33 6.33 0 0 0-5.94 10.69 6.33 6.33 0 0 0 10.74-4.51V8.6a8.16 8.16 0 0 0 4.66 1.46v-3.4a4.85 4.85 0 0 1-.22.03z" />
    </svg>
  );
}

export function FooterSections() {
  return (
    <>
      {/* EYE CAMP (CSR) */}
      {/* <section className="relative h-[480px] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1600&q=80"
          alt="CSR Eye Camp"
          className="absolute inset-0 w-full h-full object-cover drop-shadow"
        />
        <div className="absolute inset-0 bg-[#7c8b4c]/85 mix-blend-multiply"></div>
        <div className="absolute inset-0 flex items-center justify-end max-w-[1100px] mx-auto px-4 lg:px-12 w-full">
          <div className="w-full lg:w-[45%] text-white ml-auto">
            <h2 className="text-xl font-medium mb-6 tracking-wide uppercase">
              LORE EARTH
            </h2>
            <p className="text-sm font-bold mb-6 tracking-wide">
              Sharing the vision with the world.
            </p>
            <p className="text-sm leading-7 mb-10 opacity-95 text-justify">
              LORE launched a CSR initiative which prioritizes ethical sourcing
              and environmental sustainability. For every Moissanite ring
              purchased, a portion supports local community education and
              environmental restoration efforts.
              <br />
              <br />
              By choosing lab-grown moissanite, we reduce the environmental
              impact of typical diamond mining operations, providing brilliant
              luster while remaining conflict-free.
            </p>
            <button className="border border-white/60 bg-transparent text-white text-sm font-bold tracking-widest px-10 py-3.5 hover:bg-white hover:text-black transition-colors w-[320px]">
              Learn More About Our CSR Activities
            </button>
          </div>
        </div>
      </section> */}

      {/* <section className="py-24 bg-white">
        <div className="container mx-auto">
          <h2 className="text-center text-xl font-normal tracking-wide mb-4">Instagram</h2>
          <div className="text-center mb-12">
            <a href="#" className="text-[#0095f6] text-[11px] font-bold uppercase tracking-widest hover:underline">#LOREJEWELRY</a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-0">
             {[1,2,3,4,5,6,7,8,9,10,11,12].map((i) => (
               <div key={i} className="aspect-square bg-gray-100 overflow-hidden cursor-pointer group">
                  <img src={`https://images.unsplash.com/photo-1599643478524-fb6245084bd2?auto=format&fit=crop&w=300&q=80&sig=${i}`} alt={`Instagram ${i}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               </div>
             ))}
          </div>
        </div>
      </section> */}

      {/* Footer Nav */}
      <footer className="bg-[#0a0a0b] border-t border-white/10 pt-24 pb-12 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Main Footer */}
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-10 xl:gap-x-16 gap-y-14 mb-24">
            {/* Products */}
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-6 text-white">
                PRODUCTS
              </h4>

              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <Link
                    href="/?tab=Ring#bestsellers"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Moissanite Rings
                  </Link>
                </li>

                <li>
                  <Link
                    href="/?tab=Ring#bestsellers"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Moissanite Bands
                  </Link>
                </li>

                <li>
                  <Link
                    href="/#bestsellers"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Moissanite Bracelet
                  </Link>
                </li>

                <li>
                  <Link
                    href="/?tab=Earrings#bestsellers"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Moissanite Earrings
                  </Link>
                </li>

                <li>
                  <Link
                    href="/#bestsellers"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Moissanite Necklace
                  </Link>
                </li>

                <li>
                  <Link
                    href="/?tab=Ring#bestsellers"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Men's Ring
                  </Link>
                </li>
              </ul>
            </div>

            {/* Purchase */}
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-6 text-white">
                PURCHASE
              </h4>

              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <Link
                    href="/after-sales"
                    className="hover:text-white transition-colors duration-300"
                  >
                    LORE Customer Guarantees
                  </Link>
                </li>

                <li>
                  <Link
                    href="/size-guide"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Size Guide
                  </Link>
                </li>
              </ul>
            </div>

            {/* About */}
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-6 text-white">
                ABOUT
              </h4>

              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Brand Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="/after-sales"
                    className="hover:text-white transition-colors duration-300"
                  >
                    After-Sales Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-6 text-white">
                SUPPORT
              </h4>

              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <Link
                    href="/faq"
                    className="hover:text-white transition-colors duration-300"
                  >
                    FAQs
                  </Link>
                </li>

                <li>
                  <Link
                    href="/after-sales"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Returns & Refunds
                  </Link>
                </li>

                <li>
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Instagram
                  </a>
                </li>

                <li>
                  <a
                    href={socialLinks.tiktok}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors duration-300"
                  >
                    TikTok
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-2 lg:col-span-2 lg:border-l lg:border-white/10 lg:pl-12">
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-6 text-white">
                CONTACT US
              </h4>

              <div className="space-y-4">
                <a
                  href={socialLinks.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <TikTokIcon className="w-5 h-5" />
                  <span className="text-sm font-medium tracking-wider">
                    Shop on TikTok
                  </span>
                </a>
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <InstagramIcon className="w-5 h-5" />
                  <span className="text-sm font-medium tracking-wider">
                    Follow on Instagram
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              {/* Copyright */}
              <div>
                <p className="text-[11px] text-gray-500 uppercase tracking-[0.25em] mb-4">
                  COPYRIGHT (C) LORE JEWELRY CO., LTD. ALL RIGHTS RESERVED.
                </p>

                <div className="flex flex-col md:flex-row md:items-center text-sm text-gray-500">
                  <span>English</span>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-5">
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>

                <a
                  href={socialLinks.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="TikTok"
                  className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <TikTokIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
