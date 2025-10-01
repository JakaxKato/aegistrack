import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Shield, Satellite, Battery, MapPin, Bell, Lock } from "lucide-react";
import heroImage from "@/assets/hero-tracker.jpg";
import productBase from "@/assets/product-base.jpg";
import productPro from "@/assets/product-pro.jpg";
import productUltra from "@/assets/product-ultra.jpg";

const Index = () => {
  const features = [
    {
      icon: Satellite,
      title: "Multi-GNSS Precision",
      description: "GPS, GLONASS, Galileo, and BeiDou for accurate tracking anywhere",
    },
    {
      icon: MapPin,
      title: "Real-Time Tracking",
      description: "Live location updates with LTE-M and NB-IoT connectivity",
    },
    {
      icon: Battery,
      title: "Extended Battery Life",
      description: "Up to 30 days on a single charge with intelligent power management",
    },
    {
      icon: Shield,
      title: "Geofencing Alerts",
      description: "Custom boundaries with instant notifications when crossed",
    },
    {
      icon: Bell,
      title: "Tamper Detection",
      description: "Advanced sensors alert you to unauthorized movement or removal",
    },
    {
      icon: Lock,
      title: "End-to-End Security",
      description: "Military-grade encryption protects your tracking data",
    },
  ];

  const products = [
    {
      name: "Aegis GPS Base",
      price: "899.000",
      image: productBase,
      badges: ["IP67", "GNSS Dual", "7-day battery"],
      description: "Essential tracking for everyday needs",
    },
    {
      name: "Aegis GPS Pro",
      price: "1.299.000",
      image: productPro,
      badges: ["IP68", "eSIM", "14-day battery"],
      description: "Professional-grade precision",
      popular: true,
    },
    {
      name: "Aegis GPS Ultra",
      price: "1.899.000",
      image: productUltra,
      badges: ["IP68K", "Satellite SOS", "30-day battery"],
      description: "Ultimate tracking solution",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden grain">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Aegis GPS Tracker"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>

        <div className="container mx-auto px-4 z-10 text-center stack-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-border mb-4">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm">Now Available Worldwide</span>
          </div>

          <h1 className="headline sheen">
            Signal. Steel. Sovereignty.
          </h1>

          <p className="subhead max-w-2xl mx-auto">
            Track what matters—in real time, without compromise. 
            <br />
            Precision tracking for those who demand excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/cart" className="btn-primary text-lg px-8 py-4">
              Explore Products
            </Link>
            <Link to="/product" className="btn-ghost text-lg px-8 py-4">
              Tech Specs
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-muted">
            <div className="cluster">
              <Shield className="w-5 h-5" />
              <span>IP67 Rated</span>
            </div>
            <div className="cluster">
              <Shield className="w-5 h-5" />
              <span>1-Year Warranty</span>
            </div>
            <div className="cluster">
              <Shield className="w-5 h-5" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Uncompromising <span className="sheen">Performance</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Built for reliability. Designed for precision. Engineered for those who refuse to settle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-hover"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Choose Your <span className="sheen">Arsenal</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              From essential to ultimate. Every model built to exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className={`card-hover relative ${
                  product.popular ? "ring-2 ring-primary" : ""
                }`}
              >
                {product.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    MOST POPULAR
                  </div>
                )}

                <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-secondary">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {product.badges.map((badge, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-secondary text-xs rounded border border-border"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <p className="text-muted mb-4">{product.description}</p>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-sm text-muted">IDR</span>
                  <span className="text-3xl font-bold text-primary">
                    {product.price}
                  </span>
                </div>

                <Link
                  to="/cart"
                  className={product.popular ? "btn-primary w-full" : "btn-ghost w-full"}
                >
                  Select Model
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="card-hover text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Take <span className="sheen">Control</span>?
            </h2>
            <p className="text-muted mb-8">
              Join thousands who trust Aegis Track for uncompromising precision and reliability.
            </p>
            <Link to="/cart" className="btn-primary text-lg px-8 py-4">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
