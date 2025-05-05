
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface CartSummaryProps {
  subtotal: number;
  shipping: number;
  total: number;
}

const CartSummary = ({ subtotal, shipping, total }: CartSummaryProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-bold mb-4 pb-2 border-b">Order Summary</h3>
      
      <div className="space-y-3">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        
        <div className="border-t pt-3 mt-3">
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      <Button className="w-full mt-6 bg-pink-dark hover:bg-pink text-white">
        Proceed to Checkout
      </Button>
      
      <div className="mt-4 text-center">
        <Link to="/shop" className="text-pink-dark hover:underline text-sm">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default CartSummary;
