
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import ProductGrid from '@/components/product/ProductGrid';
import { Product } from '@/components/product/ProductCard';
import { useToast } from '@/hooks/use-toast';

// Sample products data
const allProducts: Product[] = [
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
  },
  {
    id: 5,
    name: 'Polka Dot Party Dress',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGdpcmxzJTIwZHJlc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
    category: 'dresses'
  },
  {
    id: 6,
    name: 'Ruffled Sleeve Blouse',
    price: 22.99,
    image: 'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybHMlMjB0b3B8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
    category: 'tops'
  },
  {
    id: 7,
    name: 'Glitter Tutu Skirt',
    price: 28.99,
    image: 'https://images.unsplash.com/photo-1619532550465-2062e4fc8079?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z2lybHMlMjBza2lydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
    category: 'bottoms'
  },
  {
    id: 8,
    name: 'Unicorn Headband',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1645267228317-d9b8f9266ecc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHMlMjBoZWFkYmFuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
    category: 'accessories'
  }
];

// Category options
const categories = [
  { value: 'all', label: 'All Categories' },
  { value: 'dresses', label: 'Dresses' },
  { value: 'tops', label: 'Tops' },
  { value: 'bottoms', label: 'Bottoms' },
  { value: 'accessories', label: 'Accessories' }
];

// Sort options
const sortOptions = [
  { value: 'newest', label: 'Newest' },
  { value: 'price-low-high', label: 'Price: Low to High' },
  { value: 'price-high-low', label: 'Price: High to Low' }
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const { toast } = useToast();

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'all' 
    ? allProducts 
    : allProducts.filter(product => product.category === selectedCategory);

  // Sort products based on selected sort option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low-high') return a.price - b.price;
    if (sortBy === 'price-high-low') return b.price - a.price;
    // Default is 'newest' which we'll simulate with ID (higher ID = newer)
    return b.id - a.id;
  });

  const handleAddToCart = (product: Product) => {
    // In a real app, this would dispatch to your cart state
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Layout>
      <div className="bg-lavender-light py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Shop All Products</h1>
          
          <div className="flex flex-col lg:flex-row">
            {/* Filters Sidebar */}
            <div className="w-full lg:w-1/4 lg:pr-8 mb-6 lg:mb-0">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-4">Filters</h3>
                
                {/* Category Filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Category</h4>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <div key={category.value} className="flex items-center">
                        <input
                          type="radio"
                          id={`category-${category.value}`}
                          name="category"
                          value={category.value}
                          checked={selectedCategory === category.value}
                          onChange={() => setSelectedCategory(category.value)}
                          className="mr-2"
                        />
                        <label htmlFor={`category-${category.value}`}>
                          {category.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Sort By */}
                <div>
                  <h4 className="font-medium mb-2">Sort By</h4>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    {sortOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="w-full lg:w-3/4">
              <ProductGrid 
                products={sortedProducts} 
                onAddToCart={handleAddToCart} 
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
