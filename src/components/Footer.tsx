import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Heart } from "lucide-react";
import logo from "@/assets/apple-touch-icon.png";

const Footer = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { l: "Home", t: "/" },
    { l: "About Us", t: "/about" },
    { l: "Services", t: "/services" },
    { l: "Shop", t: "/shop" },
    { l: "Contact", t: "/contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-main py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left Side: Logo and Description */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={logo} 
                alt="Andhra Millets Logo" 
                className="h-14 object-contain" 
              />
              <span className="text-xl lg:text-2xl font-bold tracking-tight text-white leading-none">
                Andhra Millets
              </span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-md">
              From Farmers to Your Family. Pure, chemical-free millets sourced directly 
              from trusted farmers across India. Bringing health and tradition to your doorstep.
            </p>
          </div>

          {/* Right Side: Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-semibold text-white">Contact Us</h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/80">
              <span className="flex items-center gap-2">
                {/* Updated icon color to white for better visibility */}
                <Phone className="w-4 h-4 text-white" /> 9573311300 / 7899130336
              </span>
              <span className="flex items-center gap-2">
                {/* Updated icon color to white for better visibility */}
                <Mail className="w-4 h-4 text-white" /> gangadharam.konangi@gmail.com
              </span>
              <div className="flex items-start gap-2">
                {/* Updated icon color to white for better visibility */}
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-white" /> 
                <span className="max-w-xs">
                  402, Indra Enclave, Alfa Gardens, Ayyappa Nagar, KR Puram, Bangalore, KA-560049
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Quick Links Section */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <nav className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.t}
                to={link.t}
                onClick={handleScrollTop}
                className="text-sm font-medium text-primary-foreground/70 hover:text-white transition-colors uppercase tracking-wider"
              >
                {link.l}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom Bar: Centered One After Another */}
      <div className="bg-black/20 py-8 border-t border-primary-foreground/5">
        <div className="container-main flex flex-col items-center justify-center text-center gap-4 text-xs text-primary-foreground/50">
          
          {/* First Row: Copyright */}
          <p>© {new Date().getFullYear()} <span className="text-white/70 font-medium">Andhra Millets</span>. All rights reserved.</p>
          
          {/* Second Row: StaffArc Attribution */}
          <div className="flex justify-center items-center gap-1">
            Made with <Heart className="inline h-4 w-4 text-red-500 mx-1 fill-red-500" /> by
            <a
              href="https://staffarc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-orange-500 hover:text-orange-400 font-semibold transition-colors"
            >
              <img
                src="https://www.staffarc.in/images/Staffarc-logo.png"
                alt="StaffArc logo"
                className="h-5 w-5 object-contain"
              />
              StaffArc
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;