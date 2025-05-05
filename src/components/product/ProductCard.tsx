
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
  salePrice?: number;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const { id, name, price, image, isNew, isSale, salePrice } = product;

  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm card-hover">
      {/* Sale or New Badge */}
      {(isNew || isSale) && (
        <div className="ribbon">
          <span>{isNew ? 'NEW' : 'SALE'}</span>
        </div>
      )}
      
      {/* Product Image */}
      <Link to={`/product/${id}`} className="block relative pb-[100%] overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
      </Link>
      
      {/* Product Details */}
      <div className="p-4">
        <Link to={`/product/${id}`} className="block">
          <h3 className="text-lg font-medium text-gray-800 mb-1 hover:text-pink-dark transition-colors">
            {name}
          </h3>
          
          <div className="flex items-center mb-3">
            {isSale && salePrice ? (
              <>
                <span className="text-pink-dark font-bold mr-2">${salePrice.toFixed(2)}</span>
                <span className="text-gray-500 line-through text-sm">${price.toFixed(2)}</span>
              </>
            ) : (
              <span className="text-gray-800 font-bold">${price.toFixed(2)}</span>
            )}
          </div>
        </Link>
        
        <Button 
          className="w-full bg-lavender hover:bg-lavender-dark text-gray-800 btn-bounce"
          onClick={() => onAddToCart(product)}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
