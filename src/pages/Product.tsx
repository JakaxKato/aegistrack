import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import productBase from "@/assets/product-base.jpg";
import productPro from "@/assets/product-pro.jpg";
import productUltra from "@/assets/product-ultra.jpg";

const Product = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const specs = [
    {
      category: "Connectivity",
      items: [
        { label: "Bands", base: "LTE-M/NB-IoT", pro: "LTE-M/NB-IoT/eSIM", ultra: "LTE-M/NB-IoT + Sat" },
        { label: "GNSS", base: "GPS/GLONASS", pro: "GPS/GLONASS/Galileo", ultra: "GPS/GLONASS/Galileo/BeiDou" },
      ],
    },
    {
      category: "Hardware",
      items: [
        { label: "Battery", base: "1200 mAh", pro: "2000 mAh", ultra: "4000 mAh" },
        { label: "Battery Life", base: "7 days", pro: "14 days", ultra: "30 days" },
        { label: "Sensors", base: "Accel, Temp", pro: "Accel, Temp, Light", ultra: "Accel, Temp, Light, Gyro" },
        { label: "Rating", base: "IP67", pro: "IP68", ultra: "IP68K" },
      ],
    },
  ];

  const faqs = [
    {
      q: "How accurate is the GPS tracking?",
      a: "Our trackers achieve 1-3 meter accuracy in open sky conditions. Urban environments may vary slightly due to building interference, but our multi-GNSS system ensures reliable positioning.",
    },
    {
      q: "What's the difference between models?",
      a: "Base offers essential tracking, Pro adds eSIM and extended battery, Ultra includes satellite connectivity and 30-day battery for extreme conditions.",
    },
    {
      q: "Do I need a subscription?",
      a: "Basic tracking is free. Premium features like historical routes, geofencing, and API access require a subscription starting at IDR 49.000/month.",
    },
    {
      q: "Is the data encrypted?",
      a: "Yes. All location data is encrypted end-to-end using AES-256 encryption. Your privacy is our priority.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="py-20 grain">
        <div className="container mx-auto px-4 text-center">
          <h1 className="headline sheen mb-6">Technical Excellence</h1>
          <p className="subhead max-w-2xl mx-auto">
            Precision engineering meets uncompromising design. 
            Every specification crafted for real-world performance.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[productBase, productPro, productUltra].map((img, i) => (
              <div key={i} className="aspect-square rounded-lg overflow-hidden bg-card">
                <img src={img} alt={`Product view ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs Comparison */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Compare <span className="sheen">Specifications</span>
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 font-semibold">Specification</th>
                  <th className="p-4 font-semibold">Base</th>
                  <th className="p-4 font-semibold text-primary">Pro</th>
                  <th className="p-4 font-semibold">Ultra</th>
                </tr>
              </thead>
              <tbody>
                {specs.map((section) => (
                  <>
                    <tr key={section.category}>
                      <td colSpan={4} className="p-4 font-bold text-sm uppercase tracking-wider bg-secondary/50">
                        {section.category}
                      </td>
                    </tr>
                    {section.items.map((item, i) => (
                      <tr key={i} className="border-b border-border/50">
                        <td className="p-4 text-muted">{item.label}</td>
                        <td className="p-4">{item.base}</td>
                        <td className="p-4 text-primary font-medium">{item.pro}</td>
                        <td className="p-4">{item.ultra}</td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="card text-center">
              <p className="text-sm text-muted mb-2">Starting at</p>
              <p className="text-3xl font-bold mb-4">IDR 899K</p>
              <a href="/cart" className="btn-ghost w-full">Select Base</a>
            </div>
            <div className="card text-center ring-2 ring-primary">
              <p className="text-sm text-primary mb-2">Most Popular</p>
              <p className="text-3xl font-bold mb-4">IDR 1.299K</p>
              <a href="/cart" className="btn-primary w-full">Select Pro</a>
            </div>
            <div className="card text-center">
              <p className="text-sm text-muted mb-2">Ultimate</p>
              <p className="text-3xl font-bold mb-4">IDR 1.899K</p>
              <a href="/cart" className="btn-ghost w-full">Select Ultra</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked <span className="sheen">Questions</span>
          </h2>

          <div className="stack-4">
            {faqs.map((faq, i) => (
              <div key={i} className="card">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between text-left"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-semibold">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <p className="mt-4 text-muted">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Product;
