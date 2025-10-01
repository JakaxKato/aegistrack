import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<"en" | "id">("en");
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: { en: "Home", id: "Beranda" } },
    { path: "/product", label: { en: "Product", id: "Produk" } },
    { path: "/about", label: { en: "About", id: "Tentang" } },
    { path: "/cart", label: { en: "Cart", id: "Keranjang" } },
  ];

  const toggleLang = () => setLang(lang === "en" ? "id" : "en");

  return (
    <nav className="sticky top-0 z-50 glass border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-crimson to-violet rounded" />
            <span className="text-xl font-bold tracking-tight">AEGIS TRACK</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-muted hover:text-ink"
                }`}
              >
                {link.label[lang]}
              </Link>
            ))}
            
            <button
              onClick={toggleLang}
              className="cluster text-sm text-muted hover:text-ink transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase">{lang}</span>
            </button>

            <Link to="/cart" className="btn-primary">
              {lang === "en" ? "Buy Now" : "Beli Sekarang"}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 stack-4 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-sm font-medium ${
                  isActive(link.path) ? "text-primary" : "text-muted"
                }`}
              >
                {link.label[lang]}
              </Link>
            ))}
            <button
              onClick={toggleLang}
              className="flex items-center gap-2 py-2 text-sm text-muted"
            >
              <Globe className="w-4 h-4" />
              <span>Switch to {lang === "en" ? "ID" : "EN"}</span>
            </button>
            <Link
              to="/cart"
              onClick={() => setIsOpen(false)}
              className="btn-primary mt-2"
            >
              {lang === "en" ? "Buy Now" : "Beli Sekarang"}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
