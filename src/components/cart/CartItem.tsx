
import React from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { Product } from '@/components/product/ProductCard';

interface CartItemProps {
  item: {
    product: Product;
    quantity: number;
  };
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveItem: (productId: number) => void;
}

const CartItem = ({ item, onUpdateQuantity, onRemoveItem }: CartItemProps) => {
  const { product, quantity } = item;

  return (
    <div className="flex flex-col sm:flex-row items-center py-4 border-b">
      {/* Product Image */}
      <div className="w-24 h-24 rounded-md overflow-hidden mr-0 sm:mr-4 mb-3 sm:mb-0">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Product Info */}
      <div className="flex-1">
        <h3 className="font-medium">{product.name}</h3>
        <p className="text-sm text-gray-500">${product.price.toFixed(2)}</p>
      </div>
      
      {/* Quantity Controls */}
      <div className="flex items-center space-x-2 mt-3 sm:mt-0">
        <Button 
          variant="outline" 
          size="icon" 
          className="h-8 w-8"
          onClick={() => onUpdateQuantity(product.id, Math.max(1, quantity - 1))}
          disabled={quantity <= 1}
        >
          -
        </Button>
        
        <span className="w-8 text-center">{quantity}</span>
        
        <Button 
          variant="outline" 
          size="icon" 
          className="h-8 w-8"
          onClick={() => onUpdateQuantity(product.id, quantity + 1)}
        >
          +
        </Button>
      </div>
      
      {/* Subtotal */}
      <div className="w-24 text-right font-medium mt-3 sm:mt-0 mx-4">
        ${(product.price * quantity).toFixed(2)}
      </div>
      
      {/* Remove Button */}
      <Button 
        variant="ghost" 
        size="icon" 
        className="text-gray-500 hover:text-destructive mt-3 sm:mt-0"
        onClick={() => onRemoveItem(product.id)}
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default CartItem;
