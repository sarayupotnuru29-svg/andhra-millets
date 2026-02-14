import aboutFarmer from "@/assets/about-farmer.jpg";
import milletsField from "@/assets/millets-field.jpeg";
import { Heart, Eye, Shield, Leaf } from "lucide-react";

const About = () => (
  <>
    <section className="section-padding">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl lg:text-5xl font-heading font-bold mb-6">About Andhra Millets</h1>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We are a dedicated millet supplier committed to health, sustainability, and farmer empowerment. Our journey began with a simple belief — that every household deserves access to pure, nutritious food.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We work directly with farmers across Andhra Pradesh and other regions, ensuring fair prices and sustainable practices while delivering premium quality millets to your table.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img src={aboutFarmer} alt="Indian farmer with millets" className="w-full h-[400px] object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </section>

    {/* Mission */}
    <section className="section-padding bg-muted">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 rounded-lg overflow-hidden">
            <img src={milletsField} alt="Millet fields" className="w-full h-[400px] object-cover rounded-lg" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-heading font-bold mb-6">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              To bring pure, nutritious, and chemical-free millets to households and businesses while supporting sustainable agriculture and rural livelihoods.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Eye, title: "Transparency" },
                { icon: Shield, title: "Quality" },
                { icon: Heart, title: "Trust" },
                { icon: Leaf, title: "Sustainability" },
              ].map((v, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                  <v.icon className="w-5 h-5 text-accent shrink-0" />
                  <span className="font-medium text-sm">{v.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default About;
