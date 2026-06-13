import { Header } from "@/components/Header";
import SizeGuideClient from "./SizeGuideClient";
import { FooterSections } from "@/components/FooterSections";
import Image from "next/image";

export const metadata = {
  title: "Size Guide | Lore Jewelry",
  description: "Ring and necklace size guide for Lore Jewelry"
};

export default function SizeGuide() {
  return (
    <div>
      <Header />
      <main className="pt-24 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-light tracking-wide text-gray-900 text-center mb-12">
            Size Guide
          </h1>

          {/* Ring Size Guide */}
          <section className="mb-16">
            <h2 className="text-2xl font-medium tracking-wide text-gray-800 mb-8 text-center">
              Ring Size Guide
            </h2>
            <div className="flex justify-center mb-8">
              <Image
                src="/images/Dimensions Overview 1.jpg"
                alt="Ring Size Guide"
                width={800}
                height={800}
                layout="responsive"
                objectFit="contain"
                className="max-w-full h-auto"
              />
            </div>
            <SizeGuideClient />
          </section>

          {/* Necklace Length Guide */}
          <section>
            <h2 className="text-2xl font-medium tracking-wide text-gray-800 mb-8 text-center">
              Necklace Length Guide
            </h2>
            <div className="flex justify-center mb-8">
              <Image
                src="/images/Dimensions Overview 2.jpg"
                alt="Necklace Length Guide"
                width={800}
                height={800}
                layout="responsive"
                objectFit="contain"
                className="max-w-full h-auto"
              />
            </div>

            <div className="max-w-2xl mx-auto border border-gray-200 overflow-hidden mb-8">
              <table className="w-full text-sm text-center border-collapse">
                <thead className="bg-gray-50">
                  <tr className="border-b border-gray-200 font-semibold text-gray-900">
                    <th className="p-4 border-r border-gray-200">Style</th>
                    <th className="p-4 border-r border-gray-200">
                      Length (inches)
                    </th>
                    <th className="p-4">Length (cm)</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  {[
                    { name: "Choker", in: "14", cm: "35" },
                    { name: "Princess", in: "16", cm: "40" },
                    { name: "Matinee", in: "18", cm: "45" },
                    { name: "Opera", in: "24", cm: "60" },
                    { name: "Rope", in: "30", cm: "75" }
                  ].map((item, idx) => (
                    <tr
                      key={item.name}
                      className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="p-4 border-r border-gray-200 font-medium text-gray-900">
                        {item.name}
                      </td>
                      <td className="p-4 border-r border-gray-200">
                        {item.in} inches
                      </td>
                      <td className="p-4">{item.cm} cm</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="max-w-2xl mx-auto text-sm text-gray-500 italic space-y-2">
              <p>
                • Necklace lengths may vary slightly depending on your body size
                and proportions.
              </p>
              <p>• This guide is for reference only. Actual fit may vary.</p>
            </div>
          </section>
        </div>
      </main>
      <FooterSections />
    </div>
  );
}
