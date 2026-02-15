// import { Link } from "react-router-dom";
// import { ArrowRight, Leaf, Shield, Truck } from "lucide-react";
// import heroImage from "@/assets/hero-millets.jpg";
// import ProductCard from "@/components/ProductCard";
// import { products } from "@/data/products";

// const Index = () => (
//   <>
//     {/* Hero */}
//     <section className="relative min-h-[80vh] flex items-center">
//       <img src={heroImage} alt="Premium millets from Andhra" className="absolute inset-0 w-full h-full object-cover" />
//       <div className="absolute inset-0 hero-overlay" />
//       <div className="container-main relative z-10 py-20">
//         <div className="max-w-2xl">
//           <span className="inline-block bg-accent/20 text-accent-foreground border border-accent-foreground/20 px-4 py-1.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
//             🌾 Farm Fresh & Chemical-Free
//           </span>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
//             Pure, Chemical-Free Millets Direct from Farmers
//           </h1>
//           <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
//             Premium quality millets sourced directly from trusted farmers across India. Unpolished, nutritious, and delivered to your doorstep.
//           </p>
//           <div className="flex flex-wrap gap-4">
//             <Link to="/shop" className="bg-accent text-accent-foreground px-8 py-3 rounded-md font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
//               Shop Now <ArrowRight className="w-4 h-4" />
//             </Link>
//             <a
//               href="https://wa.me/919573311300?text=Hello%20Andhra%20Millets"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-3 rounded-md font-semibold hover:bg-primary-foreground/10 transition-colors"
//             >
//               Contact on WhatsApp
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>

//     {/* Features */}
//     <section className="section-padding bg-muted">
//       <div className="container-main">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {[
//             { icon: Leaf, title: "100% Natural", desc: "Unpolished, chemical-free millets grown sustainably" },
//             { icon: Shield, title: "Quality Assured", desc: "Thoroughly cleaned and quality-checked before delivery" },
//             { icon: Truck, title: "Farm Direct", desc: "Sourced directly from trusted farmers across India" },
//           ].map((f, i) => (
//             <div key={i} className="text-center p-8 bg-card rounded-lg border border-border">
//               <div className="w-14 h-14 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
//                 <f.icon className="w-7 h-7 text-accent" />
//               </div>
//               <h3 className="font-heading font-semibold text-lg mb-2">{f.title}</h3>
//               <p className="text-muted-foreground text-sm">{f.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>

//     {/* Products Preview */}
//     <section className="section-padding" id="products">
//       <div className="container-main">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">Our Millets</h2>
//           <p className="text-muted-foreground max-w-xl mx-auto">All millets are unpolished. Prices listed are per kilogram.</p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {products.map(p => <ProductCard key={p.id} product={p} />)}
//         </div>
//       </div>
//     </section>
//   </>
// );

// export default Index;





// import { Link } from "react-router-dom";
// import { ArrowRight, Leaf, Shield, Truck } from "lucide-react";
// import heroImage from "@/assets/hero-millets.jpg";
// import ProductCard from "@/components/ProductCard";
// import { products } from "@/data/products";

// const Index = () => {
//   // Brand Colors
//   const bgColor = "#D8B67A";
//   const brandBrown = "#5D4037";
//   const brandGreen = "#3D6D4D";

//   return (
//     <div style={{ backgroundColor: bgColor }}>
//       {/* Hero Section */}
//       <section className="relative min-h-[80vh] flex items-center">
//         <img 
//           src={heroImage} 
//           alt="Premium millets from Andhra" 
//           className="absolute inset-0 w-full h-full object-cover" 
//         />
//         <div className="absolute inset-0 bg-black/40" /> {/* Darker overlay for text contrast */}
//         <div className="container-main relative z-10 py-20">
//           <div className="max-w-2xl">
//             <span className="inline-block bg-[#3D6D4D] text-white px-4 py-1.5 rounded-full text-sm font-bold mb-6 shadow-lg">
//               🌾 Farm Fresh & Chemical-Free
//             </span>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6 drop-shadow-md">
//               Pure, Chemical-Free Millets Direct from Farmers
//             </h1>
//             <p className="text-lg text-white/90 mb-8 leading-relaxed font-medium">
//               Premium quality millets sourced directly from trusted farmers across India. Unpolished, nutritious, and delivered to your doorstep.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <Link 
//                 to="/shop" 
//                 className="bg-[#3D6D4D] text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg"
//               >
//                 Shop Now <ArrowRight className="w-4 h-4" />
//               </Link>
//               <a
//                 href="https://wa.me/919573311300?text=Hello%20Andhra%20Millets"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-3 rounded-xl font-bold hover:bg-white/20 transition-all"
//               >
//                 WhatsApp Us
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16 md:py-24">
//         <div className="container-main">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               { icon: Leaf, title: "100% Natural", desc: "Unpolished, chemical-free millets grown sustainably" },
//               { icon: Shield, title: "Quality Assured", desc: "Thoroughly cleaned and quality-checked before delivery" },
//               { icon: Truck, title: "Farm Direct", desc: "Sourced directly from trusted farmers across India" },
//             ].map((f, i) => (
//               <div 
//                 key={i} 
//                 className="text-center p-8 bg-white/40 backdrop-blur-sm rounded-3xl border border-white/30 shadow-sm transition-all hover:shadow-md"
//               >
//                 <div 
//                   className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-inner"
//                   style={{ backgroundColor: brandGreen }}
//                 >
//                   <f.icon className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="font-heading font-bold text-xl mb-3" style={{ color: brandBrown }}>{f.title}</h3>
//                 <p className="text-[#3D2B1F] text-sm font-bold leading-relaxed opacity-80">{f.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Products Preview Section */}
//       <section className="pb-24" id="products">
//         <div className="container-main">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-4" style={{ color: brandBrown }}>
//               Our Best Sellers
//             </h2>
//             <div className="w-24 h-1 mx-auto mb-6 rounded-full" style={{ backgroundColor: brandGreen }} />
//             <p className="text-[#3D2B1F] font-bold max-w-xl mx-auto opacity-90">
//               Unpolished, gluten-free, and packed with nutrition.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {products.slice(0, 4).map(p => (
//               <ProductCard key={p.id} product={p} />
//             ))}
//           </div>

//           <div className="mt-16 text-center">
//             <Link 
//               to="/shop" 
//               className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl font-bold uppercase tracking-widest text-sm transition-all hover:shadow-xl shadow-lg text-white"
//               style={{ backgroundColor: brandBrown }}
//             >
//               View All Millets <ArrowRight className="w-5 h-5" />
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Index;



import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Shield, Truck } from "lucide-react";
import heroImage from "@/assets/hero-millets.jpg";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Index = () => {
  // Brand Colors
  const bgColor = "#D8B67A";
  const brandBrown = "#5D4037";
  const brandGreen = "#3D6D4D";

  return (
    <div style={{ backgroundColor: bgColor }}>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <img 
          src={heroImage} 
          alt="Premium millets from Andhra" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container-main relative z-10 py-20">
          <div className="max-w-2xl">
            <span className="inline-block bg-[#3D6D4D] text-white px-4 py-1.5 rounded-full text-sm font-bold mb-6 shadow-lg">
              🌾 Farm Fresh & Chemical-Free
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6 drop-shadow-md">
              Pure, Chemical-Free Millets Direct from Farmers
            </h1>
            <p className="text-lg text-white/90 mb-8 leading-relaxed font-medium">
              Premium quality millets sourced directly from trusted farmers across India. Unpolished, nutritious, and delivered to your doorstep.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/shop" 
                className="bg-[#3D6D4D] text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg"
              >
                Shop Now <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/919573311300?text=Hello%20Andhra%20Millets"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-3 rounded-xl font-bold hover:bg-white/20 transition-all"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - UPDATED TO WHITE BG */}
      <section className="py-16 md:py-24">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: "100% Natural", desc: "Unpolished, chemical-free millets grown sustainably" },
              { icon: Shield, title: "Quality Assured", desc: "Thoroughly cleaned and quality-checked before delivery" },
              { icon: Truck, title: "Farm Direct", desc: "Sourced directly from trusted farmers across India" },
            ].map((f, i) => (
              <div 
                key={i} 
                className="text-center p-8 bg-white rounded-3xl border border-white shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div 
                  className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-md"
                  style={{ backgroundColor: brandGreen }}
                >
                  <f.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3" style={{ color: brandBrown }}>{f.title}</h3>
                <p className="text-[#3D2B1F] text-sm font-bold leading-relaxed opacity-70">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="pb-24" id="products">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-4" style={{ color: brandBrown }}>
              Our Best Sellers
            </h2>
            <div className="w-24 h-1 mx-auto mb-6 rounded-full" style={{ backgroundColor: brandGreen }} />
            <p className="text-[#3D2B1F] font-bold max-w-xl mx-auto opacity-90">
              Unpolished, gluten-free, and packed with nutrition.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(0, 4).map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link 
              to="/shop" 
              className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl font-bold uppercase tracking-widest text-sm transition-all hover:shadow-xl shadow-lg text-white"
              style={{ backgroundColor: brandBrown }}
            >
              View All Millets <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;