"use client";
import { Heart, Search, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { cinzel, raleway } from "../utils/fonts";
import { categories, socialLinks } from "../data/site";

// This version of lucide-react has no Instagram/TikTok glyph, so we inline them.
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

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
      <div className=" container mx-auto px-4 h-24 md:h-24 flex items-center justify-between">
        <Link href="/" className="shrink-0 cursor-pointer">
          <Image
            src="/images/lore-jewelry-logo.jpeg"
            alt="Lore Jewelry Logo"
            width={2400}
            height={100}
            className="object-contain p-6 sm:p-4 h-20 md:h-28 w-auto mix-blend-multiply"
            priority
          />
        </Link>

        <nav className="hidden md:flex flex-1 justify-center items-center space-x-12 lg:space-x-16">
          {/* Shop mega-menu */}
          <div className="relative group">
            <Link
              href="/#bestsellers"
              className={`${raleway.className} flex items-center gap-1 text-[14px] font-semibold tracking-widest text-gray-800 hover:text-gray-500 transition-colors cursor-pointer`}
            >
              Shop
              <ChevronDown className="w-4 h-4 stroke-[1.5] transition-transform group-hover:rotate-180" />
            </Link>

            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute left-1/2 -translate-x-1/2 top-full pt-6">
              <div className="bg-white border border-gray-200 shadow-xl p-8 flex gap-12 min-w-[440px]">
                {categories.map((section) => (
                  <div key={section.title} className="min-w-[160px]">
                    <p
                      className={`${cinzel.className} text-xs font-bold uppercase tracking-[0.2em] text-gray-900 mb-4`}
                    >
                      {section.title}
                    </p>
                    <ul className="space-y-4">
                      {section.groups.map((group) => (
                        <li key={group.label}>
                          <Link
                            href={group.href}
                            className={`${raleway.className} block text-sm font-bold text-gray-800 hover:text-black transition-colors mb-2`}
                          >
                            {group.label}
                          </Link>
                          {group.items && (
                            <ul className="pl-4 space-y-2 border-l border-gray-100">
                              {group.items.map((item) => (
                                <li key={item.label}>
                                  <Link
                                    href={item.href}
                                    className={`${raleway.className} block text-[13px] text-gray-500 hover:text-black transition-colors`}
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {[
            { label: "About", href: "/about" },
            { label: "Size Guide", href: "/size-guide" },
            { label: "FAQ", href: "/faq" }
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`${raleway.className} text-[14px] font-semibold tracking-widest text-gray-800 hover:text-gray-500 transition-colors`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-5">
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Lore Jewelry on Instagram"
            className="text-black hover:text-gray-500 hidden md:block"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>
          <a
            href={socialLinks.tiktok}
            target="_blank"
            rel="noreferrer"
            aria-label="Lore Jewelry on TikTok"
            className="text-black hover:text-gray-500 hidden md:block"
          >
            <TikTokIcon className="w-[18px] h-[18px]" />
          </a>
          {/* <button className="text-black hover:text-gray-500 hidden md:block">
            <Search className="w-5 h-5 stroke-[1.5]" />
          </button>
          <button className="text-black hover:text-gray-500 hidden md:block">
            <Heart className="w-5 h-5 stroke-[1.5]" />
          </button> */}
          <button
            className="text-black hover:text-gray-500 md:hidden"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[1.5]" />
            ) : (
              <Menu className="w-6 h-6 stroke-[1.5]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 animate-in slide-in-from-top-2 max-h-[80vh] overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-6">
            {categories.map((section) => (
              <div key={section.title}>
                <p
                  className={`${cinzel.className} text-xs font-bold uppercase tracking-[0.2em] text-gray-900 mb-3`}
                >
                  {section.title}
                </p>
                <ul className="space-y-4 pl-1">
                  {section.groups.map((group) => (
                    <li key={group.label}>
                      <Link
                        href={group.href}
                        className={`${raleway.className} block text-sm font-bold text-gray-800 hover:text-black transition-colors mb-2`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {group.label}
                      </Link>
                      {group.items && (
                        <ul className="pl-4 space-y-2 border-l border-gray-100">
                          {group.items.map((item) => (
                            <li key={item.label}>
                              <Link
                                href={item.href}
                                className={`${raleway.className} block text-[13px] text-gray-500 hover:text-black transition-colors`}
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="space-y-3 pt-4 border-t border-gray-200">
              {[
                { label: "About", href: "/about" },
                { label: "FAQ", href: "/faq" },
                { label: "After-Sales Service", href: "/after-sales" }
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`${raleway.className} block text-sm font-semibold tracking-widest text-black hover:text-gray-500 transition-colors`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-5 pt-4 border-t border-gray-200">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Lore Jewelry on Instagram"
                className="text-black hover:text-gray-500"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.tiktok}
                target="_blank"
                rel="noreferrer"
                aria-label="Lore Jewelry on TikTok"
                className="text-black hover:text-gray-500"
              >
                <TikTokIcon className="w-[18px] h-[18px]" />
              </a>
              {/* <button className="text-black hover:text-gray-500">
                <Search className="w-5 h-5 stroke-[1.5]" />
              </button>
              <button className="text-black hover:text-gray-500">
                <Heart className="w-5 h-5 stroke-[1.5]" />
              </button> */}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
