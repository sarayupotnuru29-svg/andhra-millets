import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo-andhra-millets.png";

const Footer = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-main py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Andhra Millets Logo" className="w-10 h-10 object-contain" />
            <h3 className="text-xl font-heading font-bold">Andhra Millets</h3>
          </div>
          <p className="text-primary-foreground/80 text-sm leading-relaxed">
            From Farmers to Your Family. Pure, chemical-free millets sourced directly from trusted farmers across India.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[{ l: "Home", t: "/" }, { l: "About Us", t: "/about" }, { l: "Services", t: "/services" }, { l: "Shop", t: "/shop" }, { l: "Contact", t: "/contact" }].map(i => (
              <Link
                key={i.t}
                to={i.t}
                onClick={handleScrollTop}
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                {i.l}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/80">
            <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> 9573311300 / 7899130336</span>
            <span className="flex items-center gap-2"><Mail className="w-4 h-4" /> gangadharam.konangi@gmail.com</span>
            <span className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> 402, Indra Enclave, Alfa Gardens, Ayyappa Nagar, KR Puram, Bangalore, KA-560049</span>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-4 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Andhra Millets. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
