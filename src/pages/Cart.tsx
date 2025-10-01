import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useState, useEffect } from "react";
import { Plus, Minus, Trash2, ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import productBase from "@/assets/product-base.jpg";
import productPro from "@/assets/product-pro.jpg";
import productUltra from "@/assets/product-ultra.jpg";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const products = [
    { id: "base", name: "Aegis GPS Base", price: 899000, image: productBase },
    { id: "pro", name: "Aegis GPS Pro", price: 1299000, image: productPro },
    { id: "ultra", name: "Aegis GPS Ultra", price: 1899000, image: productUltra },
  ];

  useEffect(() => {
    const saved = localStorage.getItem("aegis-cart");
    if (saved) {
      setCartItems(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("aegis-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: typeof products[0]) => {
    const existing = cartItems.find((item) => item.id === product.id);
    if (existing) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    toast.success(`Added ${product.name} to cart`);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(
      cartItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    toast.success("Item removed from cart");
  };

  const applyPromo = () => {
    if (promoCode.toUpperCase() === "INDIE10") {
      setDiscount(0.1);
      toast.success("10% discount applied!");
    } else {
      setDiscount(0);
      toast.error("Invalid promo code");
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = subtotal * discount;
  const total = subtotal - discountAmount;

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Your <span className="sheen">Cart</span>
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingCart className="w-16 h-16 text-muted mx-auto mb-4" />
            <p className="text-muted mb-8">Your cart is empty</p>
            
            <h2 className="text-2xl font-bold mb-6">Choose Your Tracker</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="card-hover">
                  <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-secondary">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-2xl text-primary font-bold mb-4">
                    IDR {(product.price / 1000).toFixed(0)}K
                  </p>
                  <button onClick={() => addToCart(product)} className="btn-primary w-full">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 stack-4">
              {cartItems.map((item) => (
                <div key={item.id} className="card flex gap-4">
                  <div className="w-24 h-24 rounded bg-secondary overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-bold mb-1">{item.name}</h3>
                    <p className="text-primary font-semibold">
                      IDR {(item.price / 1000).toFixed(0)}K
                    </p>
                  </div>

                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-muted hover:text-destructive transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 rounded border border-border hover:bg-secondary transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-4 h-4 mx-auto" />
                      </button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 rounded border border-border hover:bg-secondary transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-4 h-4 mx-auto" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div>
              <div className="card sticky top-20 stack-4">
                <h2 className="text-2xl font-bold">Order Summary</h2>

                <div className="stack-2">
                  <div className="flex justify-between text-muted">
                    <span>Subtotal</span>
                    <span>IDR {(subtotal / 1000).toFixed(0)}K</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-primary">
                      <span>Discount (10%)</span>
                      <span>- IDR {(discountAmount / 1000).toFixed(0)}K</span>
                    </div>
                  )}
                  <div className="divider" />
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span className="text-primary">IDR {(total / 1000).toFixed(0)}K</span>
                  </div>
                </div>

                <div className="stack-2">
                  <input
                    type="text"
                    placeholder="Promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="w-full px-4 py-2 rounded border border-input bg-background text-foreground"
                  />
                  <button onClick={applyPromo} className="btn-ghost w-full">
                    Apply Code
                  </button>
                </div>

                <button
                  onClick={() => toast.success("Checkout coming soon!")}
                  className="btn-primary w-full"
                >
                  Proceed to Checkout
                </button>

                <p className="text-xs text-muted text-center">
                  Secure checkout · Free shipping on orders above IDR 2M
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
