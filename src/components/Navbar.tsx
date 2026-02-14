import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import logo from "@/assets/logo-andhra-millets.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Shop", to: "/shop" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container-main flex items-center justify-between h-16 lg:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Andhra Millets Logo" className="w-10 h-10 lg:w-12 lg:h-12 object-contain" />
          <div className="flex items-baseline gap-1">
            <span className="text-xl lg:text-2xl font-heading font-bold text-primary">Andhra</span>
            <span className="text-xl lg:text-2xl font-heading font-bold text-accent">Millets</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-accent ${
                location.pathname === link.to ? "text-accent" : "text-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative p-2 hover:text-accent transition-colors">
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </Link>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav className="lg:hidden border-t border-border bg-background pb-4">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block px-6 py-3 text-sm font-medium uppercase tracking-wide transition-colors hover:bg-muted ${
                location.pathname === link.to ? "text-accent" : "text-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
