"use client";
import React, { useMemo, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { earrings, rings } from "../data/products";
import Image from "next/image";
import { cinzel, raleway } from "../utils/fonts";
import { socialLinks } from "../data/site";

const ITEMS_PER_PAGE = 6;

const getNumericPrice = (price?: number | string | null) => {
  if (typeof price === "number") return price;
  if (!price) return 0;
  const numeric = Number(price.toString().replace(/[^0-9.-]+/g, ""));
  return Number.isFinite(numeric) ? numeric : 0;
};

export function Bestsellers() {
  const tabs = ["All", "Ring", "Earrings"];
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const tabParam = searchParams?.get("tab") ?? "";
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [sortOrder, setSortOrder] = useState<
    "default" | "lowToHigh" | "highToLow"
  >("default");
  const [currentPage, setCurrentPage] = useState(1);
  const activeTab = tabs.includes(tabParam) ? tabParam : selectedTab;

  const allItems = [...rings, ...earrings];
  const displayedItems =
    activeTab === "Earrings"
      ? earrings
      : activeTab === "Ring"
        ? rings
        : allItems;
  const sortedItems = useMemo(() => {
    const items = [...displayedItems];
    if (sortOrder === "lowToHigh") {
      return items.sort(
        (a, b) => getNumericPrice(a.price) - getNumericPrice(b.price)
      );
    }
    if (sortOrder === "highToLow") {
      return items.sort(
        (a, b) => getNumericPrice(b.price) - getNumericPrice(a.price)
      );
    }
    return items;
  }, [displayedItems, sortOrder]);

  const hasPagination = activeTab !== "Earrings";
  const totalPages = hasPagination
    ? Math.ceil(sortedItems.length / ITEMS_PER_PAGE)
    : 1;
  const paginatedItems = hasPagination
    ? sortedItems.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
      )
    : sortedItems;

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
    setCurrentPage(1);

    // Update the URL so it reflects the selected tab
    const params = new URLSearchParams(searchParams?.toString() ?? "");
    if (tab === "All") {
      params.delete("tab");
    } else {
      params.set("tab", tab);
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <section id="bestsellers" className="pt-20 pb-14 bg-white">
      <div className="container mx-auto px-4">
        {/* Tabs */}
        <div className="flex justify-around space-x-6 border-b border-gray-200 mb-4 whitespace-nowrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`${cinzel.className} cursor-pointer pb-4 text-[12px] md:text-sm font-semibold tracking-wide relative px-2 ${
                activeTab === tab
                  ? "text-black"
                  : "text-gray-400 hover:text-gray-600"
              }`}
              onClick={() => handleTabChange(tab)}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute -bottom-px left-0 w-full h-0.75 bg-black"></div>
              )}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
              Sort by
            </p>
          </div>

          <div className="relative w-full sm:w-auto">
            <select
              id="price-sort"
              value={sortOrder}
              onChange={(event) => {
                setSortOrder(
                  event.target.value as "default" | "lowToHigh" | "highToLow"
                );
                setCurrentPage(1);
              }}
              className="w-full appearance-none outline-none py-2 px-2 border border-gray-300 bg-white  pr-10 text-xs font-medium uppercase tracking-[0.25em] text-gray-700 transition duration-200 ease-out "
            >
              <option value="default">Default</option>
              <option value="lowToHigh">Price: low to high</option>
              <option value="highToLow">Price: high to low</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-500"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {paginatedItems.map((item, index) => {
            const priceLabel =
              item.price == null
                ? null
                : typeof item.price === "number"
                  ? `RM ${item.price.toFixed(2)}+`
                  : `${item.price} ${item.hasTwoCTs ? "+" : ""}`;
            const key = "id" in item ? item.id : `${item.name}-${index}`;
            const materialLabel =
              "material" in item ? item.material : "LORE | MOISSANITE";

            return (
              <a
                key={key}
                href={item.url ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group cursor-pointer relative"
              >
                <div className="w-full aspect-4/3 sm:aspect-square max-h-80 sm:max-h-none mb-6 relative overflow-hidden bg-white">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain mix-blend-darken group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="text-center mt-auto mb-7 w-full space-y-2">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400">
                    {materialLabel}
                  </p>
                  <h3
                    className={`${raleway.className} text-base font-medium uppercase tracking-widest text-gray-800`}
                  >
                    {item.name}
                  </h3>
                  {priceLabel && (
                    <p
                      className={`${cinzel.className} text-xl text-gray-800 font-semibold tracking-wide`}
                    >
                      {priceLabel}
                    </p>
                  )}
                </div>
              </a>
            );
          })}
        </div>

        {/* Pagination */}
        {hasPagination && totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mb-14">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className={`${raleway.className} px-3 py-1.5 text-xs font-semibold tracking-wider uppercase border border-gray-300 transition-all duration-200 ${
                currentPage === 1
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-gray-600 hover:border-gray-900 hover:text-gray-900"
              }`}
            >
              ‹
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`${cinzel.className} w-8 h-8 text-xs font-semibold tracking-wider border transition-all duration-200 ${
                  currentPage === page
                    ? "bg-gray-900 text-white border-gray-900"
                    : "text-gray-500 border-gray-300 hover:border-gray-900 hover:text-gray-900"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`${raleway.className} px-3 py-1.5 text-xs font-semibold tracking-wider uppercase border border-gray-300 transition-all duration-200 ${
                currentPage === totalPages
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-gray-600 hover:border-gray-900 hover:text-gray-900"
              }`}
            >
              ›
            </button>
          </div>
        )}

        <div className="text-center">
          <a
            href={socialLinks.tiktok}
            target="_blank"
            rel="noreferrer"
            className={`${raleway.className} inline-block uppercase border-2 border-gray-900 text-xs font-semibold tracking-wider px-12 py-3 hover:bg-gray-800 hover:text-white transition-all duration-300`}
          >
            Shop on TikTok Shop
          </a>
        </div>
      </div>
    </section>
  );
}
