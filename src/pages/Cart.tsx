import { useCart } from "@/context/CartContext";
import { Trash2, Plus, Minus, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items, updateQuantity, removeFromCart, totalPrice } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) return;
    const lines = items.map(i => `• ${i.product.name} – ${i.quantity}kg – ₹${i.product.price * i.quantity}`);
    const msg = `Hello Andhra Millets,%0AI would like to order:%0A%0A${lines.join("%0A")}%0A%0ATotal: ₹${totalPrice}%0A%0APlease confirm availability.`;
    window.open(`https://wa.me/919573311300?text=${msg}`, "_blank");
  };

  if (items.length === 0) {
    return (
      <section className="section-padding">
        <div className="container-main text-center">
          <ShoppingCart className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
          <h1 className="text-2xl font-heading font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-6">Browse our millets and add items to your cart.</p>
          <Link to="/shop" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity">
            Browse Products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding">
      <div className="container-main">
        <h1 className="text-3xl lg:text-4xl font-heading font-bold mb-8">Your Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => (
              <div key={item.product.id} className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
                <img src={item.product.image} alt={item.product.name} className="w-20 h-20 rounded-md object-cover" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-semibold">{item.product.name}</h3>
                  <p className="text-sm text-muted-foreground">({item.product.teluguName})</p>
                  <p className="text-accent font-semibold">₹{item.product.price}/kg</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="w-8 h-8 rounded-md border border-border flex items-center justify-center hover:bg-muted">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center font-semibold">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="w-8 h-8 rounded-md border border-border flex items-center justify-center hover:bg-muted">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <p className="font-bold w-20 text-right">₹{item.product.price * item.quantity}</p>
                <button onClick={() => removeFromCart(item.product.id)} className="p-2 text-destructive hover:bg-destructive/10 rounded-md">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="p-6 bg-card rounded-lg border border-border h-fit sticky top-24">
            <h3 className="font-heading font-bold text-lg mb-4">Order Summary</h3>
            <div className="space-y-2 mb-4">
              {items.map(i => (
                <div key={i.product.id} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{i.product.name} × {i.quantity}kg</span>
                  <span>₹{i.product.price * i.quantity}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-4 mb-6">
              <div className="flex justify-between font-bold text-lg">
                <span>Grand Total</span>
                <span>₹{totalPrice}</span>
              </div>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-accent text-accent-foreground py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
            >
              Checkout via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
