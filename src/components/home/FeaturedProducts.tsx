
import React from 'react';
import ProductGrid from '../product/ProductGrid';
import { Product } from '../product/ProductCard';
import { useToast } from '@/hooks/use-toast';

// Sample featured products data
const featuredProducts: Product[] = [
  {
    id: 1,
    name: 'Floral Summer Dress',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1603344204980-4edb0ea63148?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGdpcmxzJTIwZHJlc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
    category: 'dresses',
    isNew: true
  },
  {
    id: 2,
    name: 'Rainbow Unicorn T-Shirt',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1626498491983-14c1450a2f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGdpcmxzJTIwdHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    category: 'tops'
  },
  {
    id: 3,
    name: 'Denim Ruffle Skirt',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1619532550465-2062e4fc8079?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z2lybHMlMjBza2lydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
    category: 'bottoms',
    isSale: true,
    salePrice: 19.99
  },
  {
    id: 4,
    name: 'Butterfly Hair Clips Set',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1593944917121-b583555090e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFpciUyMGNsaXBzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    category: 'accessories'
  }
];

const FeaturedProducts = () => {
  const { toast } = useToast();

  const handleAddToCart = (product: Product) => {
    // In a real app, this would dispatch to your cart state
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <section className="py-12 bg-lavender-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <p className="text-gray-600 mt-2">Our handpicked selection of trending styles</p>
        </div>
        
        <ProductGrid 
          products={featuredProducts} 
          onAddToCart={handleAddToCart} 
        />
      </div>
    </section>
  );
};

export default FeaturedProducts;
