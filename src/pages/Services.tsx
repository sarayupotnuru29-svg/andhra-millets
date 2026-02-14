import { Tractor, Leaf, ShieldCheck, Package, Truck } from "lucide-react";
import serviceFarm from "@/assets/service-farm-direct.jpg";
import serviceOrganic from "@/assets/service-organic.jpg";
import serviceQuality from "@/assets/service-quality.jpg";
import serviceBulk from "@/assets/service-bulk.jpg";
import serviceDelivery from "@/assets/service-delivery.jpg";

const services = [
  { icon: Tractor, title: "Farm-Direct Procurement", desc: "We source millets directly from farmers, ensuring fair trade and the freshest quality for our customers.", image: serviceFarm },
  { icon: Leaf, title: "Naturally Grown & Chemical-Free", desc: "All our millets are grown using traditional, chemical-free farming methods that preserve nutrition and taste.", image: serviceOrganic },
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Every batch undergoes thorough cleaning and quality checks to ensure only the best reaches you.", image: serviceQuality },
  { icon: Package, title: "Bulk & Retail Supply", desc: "Whether you need millets for your family or your business, we offer flexible quantities to suit your needs.", image: serviceBulk },
  { icon: Truck, title: "Consistent & Reliable Delivery", desc: "We ensure timely and reliable delivery across India so you never run out of healthy millets.", image: serviceDelivery },
];

const Services = () => (
  <section className="section-padding">
    <div className="container-main">
      <div className="text-center mb-16">
        <h1 className="text-3xl lg:text-5xl font-heading font-bold mb-4">Our Services</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">From farm to your family — we handle every step with care and commitment to quality.</p>
      </div>
      <div className="space-y-16">
        {services.map((s, i) => (
          <div
            key={i}
            className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
          >
            <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="rounded-xl overflow-hidden">
                <img src={s.image} alt={s.title} className="w-full h-[300px] object-cover" />
              </div>
            </div>
            <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                  <s.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-xl">{s.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
