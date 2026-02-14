import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Shield, Truck } from "lucide-react";
import heroImage from "@/assets/hero-millets.jpg";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Index = () => (
  <>
    {/* Hero */}
    <section className="relative min-h-[80vh] flex items-center">
      <img src={heroImage} alt="Premium millets from Andhra" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 hero-overlay" />
      <div className="container-main relative z-10 py-20">
        <div className="max-w-2xl">
          <span className="inline-block bg-accent/20 text-accent-foreground border border-accent-foreground/20 px-4 py-1.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            🌾 Farm Fresh & Chemical-Free
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
            Pure, Chemical-Free Millets Direct from Farmers
          </h1>
          <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
            Premium quality millets sourced directly from trusted farmers across India. Unpolished, nutritious, and delivered to your doorstep.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/shop" className="bg-accent text-accent-foreground px-8 py-3 rounded-md font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
              Shop Now <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/919573311300?text=Hello%20Andhra%20Millets"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-3 rounded-md font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              Contact on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="section-padding bg-muted">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Leaf, title: "100% Natural", desc: "Unpolished, chemical-free millets grown sustainably" },
            { icon: Shield, title: "Quality Assured", desc: "Thoroughly cleaned and quality-checked before delivery" },
            { icon: Truck, title: "Farm Direct", desc: "Sourced directly from trusted farmers across India" },
          ].map((f, i) => (
            <div key={i} className="text-center p-8 bg-card rounded-lg border border-border">
              <div className="w-14 h-14 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <f.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Products Preview */}
    <section className="section-padding" id="products">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">Our Millets</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">All millets are unpolished. Prices listed are per kilogram.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  </>
);

export default Index;
