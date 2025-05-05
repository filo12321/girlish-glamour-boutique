
import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import CartItem from '@/components/cart/CartItem';
import CartSummary from '@/components/cart/CartSummary';
import { Product } from '@/components/product/ProductCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Sample cart items
const initialCartItems = [
  {
    product: {
      id: 1,
      name: 'Floral Summer Dress',
      price: 34.99,
      image: 'https://images.unsplash.com/photo-1603344204980-4edb0ea63148?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGdpcmxzJTIwZHJlc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
      category: 'dresses'
    },
    quantity: 1
  },
  {
    product: {
      id: 3,
      name: 'Denim Ruffle Skirt',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1619532550465-2062e4fc8079?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z2lybHMlMjBza2lydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
      category: 'bottoms'
    },
    quantity: 2
  }
];

interface CartItem {
  product: Product;
  quantity: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  const [subtotal, setSubtotal] = useState(0);
  const shipping = 5.99;
  const total = subtotal + shipping;

  // Calculate subtotal whenever cart items change
  useEffect(() => {
    const newSubtotal = cartItems.reduce(
      (sum, item) => sum + (item.product.price * item.quantity),
      0
    );
    setSubtotal(newSubtotal);
  }, [cartItems]);

  const handleUpdateQuantity = (productId: number, newQuantity: number) => {
    setCartItems(prev => 
      prev.map(item => 
        item.product.id === productId 
          ? { ...item, quantity: newQuantity } 
          : item
      )
    );
  };

  const handleRemoveItem = (productId: number) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  return (
    <Layout>
      <div className="bg-lavender-light py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>
          
          {cartItems.length > 0 ? (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Cart Items */}
              <div className="w-full lg:w-2/3">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-bold mb-4">Cart Items</h2>
                  
                  <div className="space-y-4">
                    {cartItems.map(item => (
                      <CartItem 
                        key={item.product.id}
                        item={item}
                        onUpdateQuantity={handleUpdateQuantity}
                        onRemoveItem={handleRemoveItem}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="w-full lg:w-1/3">
                <CartSummary 
                  subtotal={subtotal} 
                  shipping={shipping} 
                  total={total} 
                />
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-6">Looks like you haven't added any products to your cart yet.</p>
              <Button asChild className="bg-pink-dark hover:bg-pink text-white">
                <Link to="/shop">Continue Shopping</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
