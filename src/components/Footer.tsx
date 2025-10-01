import { Link } from "react-router-dom";
import { Mail, Twitter, Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-crimson to-violet rounded" />
              <span className="text-xl font-bold">AEGIS TRACK</span>
            </div>
            <p className="text-sm text-muted">
              Hold the Signal. Own the Night.
            </p>
            <div className="flex gap-4">
              <a
                href="https://twitter.com/aegistrack"
                className="text-muted hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/aegistrack"
                className="text-muted hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/aegistrack"
                className="text-muted hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-sm uppercase tracking-wider">
              Product
            </h3>
            <nav className="flex flex-col gap-2 text-sm">
              <Link to="/product" className="text-muted hover:text-ink transition-colors">Features</Link>
              <Link to="/product" className="text-muted hover:text-ink transition-colors">Specifications</Link>
              <Link to="/product" className="text-muted hover:text-ink transition-colors">Pricing</Link>
              <Link to="/product" className="text-muted hover:text-ink transition-colors">Comparison</Link>
            </nav>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-sm uppercase tracking-wider">
              Company
            </h3>
            <nav className="flex flex-col gap-2 text-sm">
              <Link to="/about" className="text-muted hover:text-ink transition-colors">About Us</Link>
              <Link to="/about" className="text-muted hover:text-ink transition-colors">Our Team</Link>
              <Link to="/about" className="text-muted hover:text-ink transition-colors">Privacy Policy</Link>
              <Link to="/about" className="text-muted hover:text-ink transition-colors">Terms of Service</Link>
            </nav>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-sm uppercase tracking-wider">
              Support
            </h3>
            <nav className="flex flex-col gap-2 text-sm">
              <a
                href="mailto:support@aegistrack.example"
                className="flex items-center gap-2 text-muted hover:text-ink transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </a>
              <p className="text-muted">24/7 Support Available</p>
              <p className="text-muted">1-year Warranty</p>
            </nav>
          </div>
        </div>

        <div className="divider my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
          <p>© 2025 Aegis Track. All rights reserved.</p>
          <div className="flex gap-4">
            <button className="hover:text-ink transition-colors">English</button>
            <span>|</span>
            <button className="hover:text-ink transition-colors">Indonesian</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
