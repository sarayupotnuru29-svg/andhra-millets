import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Shop = () => (
  <section className="section-padding">
    <div className="container-main">
      <div className="text-center mb-12">
        <h1 className="text-3xl lg:text-5xl font-heading font-bold mb-4">Shop Millets</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">All millets are unpolished. Prices listed are per kilogram.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  </section>
);

export default Shop;
