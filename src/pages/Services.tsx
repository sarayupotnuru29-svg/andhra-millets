import { Tractor, Leaf, ShieldCheck, Package, Truck } from "lucide-react";

const services = [
  { icon: Tractor, title: "Farm-Direct Procurement", desc: "We source millets directly from farmers, ensuring fair trade and the freshest quality for our customers." },
  { icon: Leaf, title: "Naturally Grown & Chemical-Free", desc: "All our millets are grown using traditional, chemical-free farming methods that preserve nutrition and taste." },
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Every batch undergoes thorough cleaning and quality checks to ensure only the best reaches you." },
  { icon: Package, title: "Bulk & Retail Supply", desc: "Whether you need millets for your family or your business, we offer flexible quantities to suit your needs." },
  { icon: Truck, title: "Consistent & Reliable Delivery", desc: "We ensure timely and reliable delivery across India so you never run out of healthy millets." },
];

const Services = () => (
  <section className="section-padding">
    <div className="container-main">
      <div className="text-center mb-16">
        <h1 className="text-3xl lg:text-5xl font-heading font-bold mb-4">Our Services</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">From farm to your family — we handle every step with care and commitment to quality.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div key={i} className="p-8 bg-card rounded-lg border border-border hover:shadow-md transition-shadow text-center">
            <div className="w-16 h-16 mx-auto mb-5 bg-accent/10 rounded-full flex items-center justify-center">
              <s.icon className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-heading font-semibold text-lg mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
