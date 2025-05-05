
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-pink-light overflow-hidden">
      <div className="absolute inset-0 bg-[url('/hero-bg-pattern.svg')] opacity-10"></div>
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-pink-dark animate-float">
              Dress Your Little <span className="text-lavender-dark">Princess</span> in Style
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-lg mx-auto lg:mx-0">
              Discover our adorable collection of high-quality clothes designed especially for your little girl's comfort and style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                asChild
                size="lg" 
                className="bg-pink-dark hover:bg-pink text-white text-lg"
              >
                <Link to="/shop">
                  Shop Now
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg" 
                className="bg-white hover:bg-lavender-light text-pink-dark border-pink-dark text-lg"
              >
                <Link to="/new-arrivals">
                  New Arrivals
                </Link>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="lg:absolute lg:-right-12 lg:-top-12 lg:w-[120%] animate-pulsate">
              <img 
                src="https://images.unsplash.com/photo-1543076447-215ad9ba6923?q=80&w=1000&auto=format&fit=crop"
                alt="Happy little girl in beautiful dress" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
