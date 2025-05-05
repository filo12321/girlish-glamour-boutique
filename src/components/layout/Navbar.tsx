
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Menu, X, Search } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This would come from auth context in a real app

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-pink-dark">Girlish Glamour</h1>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex items-center space-x-8">
              <Link to="/" className="font-medium text-gray-700 hover:text-pink-dark transition-colors">
                Home
              </Link>
              <Link to="/shop" className="font-medium text-gray-700 hover:text-pink-dark transition-colors">
                Shop
              </Link>
              <Link to="/about" className="font-medium text-gray-700 hover:text-pink-dark transition-colors">
                About
              </Link>
              <Link to="/contact" className="font-medium text-gray-700 hover:text-pink-dark transition-colors">
                Contact
              </Link>
              <Link to="/payment-methods" className="font-medium text-gray-700 hover:text-pink-dark transition-colors">
                Payment Methods
              </Link>
            </div>
          )}

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-gray-700 hover:text-pink-dark">
              <Search className="h-5 w-5" />
            </Button>
            
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="text-gray-700 hover:text-pink-dark relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-pink-dark text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>
            
            <Link to={isLoggedIn ? "/account" : "/login"}>
              <Button variant="ghost" size="icon" className="text-gray-700 hover:text-pink-dark">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            
            {isMobile && (
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-700 hover:text-pink-dark"
                onClick={toggleMenu}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={cn(
            "fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out",
            isMenuOpen ? "translate-x-0" : "translate-x-full",
            isMobile ? "block" : "hidden"
          )}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <h1 className="text-2xl font-bold text-pink-dark">Girlish Glamour</h1>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleMenu}
            >
              <X className="h-6 w-6 text-gray-700" />
            </Button>
          </div>
          <div className="flex flex-col p-4 space-y-4">
            <Link 
              to="/" 
              className="text-lg font-medium p-2 hover:bg-lavender-light rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className="text-lg font-medium p-2 hover:bg-lavender-light rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              to="/about" 
              className="text-lg font-medium p-2 hover:bg-lavender-light rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-lg font-medium p-2 hover:bg-lavender-light rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/payment-methods" 
              className="text-lg font-medium p-2 hover:bg-lavender-light rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Payment Methods
            </Link>
            <div className="pt-4 border-t">
              <Link 
                to={isLoggedIn ? "/account" : "/login"}
                className="flex items-center space-x-2 p-2 hover:bg-lavender-light rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <User className="h-5 w-5" />
                <span>{isLoggedIn ? "My Account" : "Login / Register"}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
