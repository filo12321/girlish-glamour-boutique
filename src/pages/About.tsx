
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Layout>
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">About Girlish Glamour</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the story behind our passion for creating beautiful, high-quality clothing for girls.
            </p>
          </div>
          
          {/* Our Story */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            <div className="w-full lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1534313314376-a72289b6181e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybHMlMjBjbG90aGluZyUyMHN0b3JlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60" 
                alt="Our store" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Girlish Glamour was founded in 2020 by a mother who struggled to find beautiful, comfortable, and affordable clothing for her daughter. Frustrated by the limited options available, she decided to create her own line of girls' clothing that would prioritize both style and comfort.
              </p>
              <p className="text-gray-700 mb-4">
                What began as a small home-based business quickly grew into a beloved brand as parents discovered our commitment to quality and design. Today, Girlish Glamour offers a wide range of clothing for girls of all ages, from adorable dresses to comfortable everyday wear.
              </p>
              <p className="text-gray-700">
                Our mission remains the same: to create gorgeous, well-made clothing that makes girls feel confident and allows them to express their unique personalities.
              </p>
            </div>
          </div>
          
          {/* Our Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-lavender-light p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-lavender rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-lavender-dark" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Quality</h3>
                <p className="text-gray-700">
                  We use only the finest materials and carefully inspect each garment to ensure it meets our high standards.
                </p>
              </div>
              
              <div className="bg-lavender-light p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-lavender rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-lavender-dark" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Comfort</h3>
                <p className="text-gray-700">
                  We believe that beautiful clothes should also be comfortable, allowing girls to play, move, and be themselves.
                </p>
              </div>
              
              <div className="bg-lavender-light p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-lavender rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-lavender-dark" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Design</h3>
                <p className="text-gray-700">
                  Our designs celebrate the joy and wonder of childhood, with playful patterns and colors that girls love.
                </p>
              </div>
            </div>
          </div>
          
          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" 
                  alt="Emily Johnson" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold">Emily Johnson</h3>
                <p className="text-gray-600">Founder & Designer</p>
              </div>
              
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1257&q=80" 
                  alt="Sarah Thompson" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold">Sarah Thompson</h3>
                <p className="text-gray-600">Creative Director</p>
              </div>
              
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" 
                  alt="Jessica Williams" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold">Jessica Williams</h3>
                <p className="text-gray-600">Operations Manager</p>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="bg-pink-light rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to explore our collection?</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Discover our latest styles and find the perfect outfits for your little princess.
            </p>
            <Button asChild className="bg-pink-dark hover:bg-pink text-white">
              <Link to="/shop">Shop Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
