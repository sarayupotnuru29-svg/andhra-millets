import { useState } from "react";
import { Plus, Minus, ShoppingCart } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const ProductCard = ({ product }: { product: Product }) => {
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product, qty);
    toast.success(`${product.name} added to cart!`);
    setQty(1);
  };

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden group hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 className="font-heading font-semibold text-lg">{product.name}</h3>
        <p className="text-muted-foreground text-sm mb-2">({product.teluguName})</p>
        <p className="text-accent font-bold text-xl mb-4">₹{product.price}<span className="text-sm font-normal text-muted-foreground">/kg</span></p>

        <div className="flex items-center gap-3 mb-3">
          <button
            onClick={() => setQty(Math.max(1, qty - 1))}
            className="w-8 h-8 rounded-md border border-border flex items-center justify-center hover:bg-muted transition-colors"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="font-semibold w-8 text-center">{qty}</span>
          <button
            onClick={() => setQty(qty + 1)}
            className="w-8 h-8 rounded-md border border-border flex items-center justify-center hover:bg-muted transition-colors"
          >
            <Plus className="w-4 h-4" />
          </button>
          <span className="text-sm text-muted-foreground">kg</span>
        </div>

        <button
          onClick={handleAdd}
          className="w-full bg-primary text-primary-foreground py-2.5 rounded-md font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
        >
          <ShoppingCart className="w-4 h-4" /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
