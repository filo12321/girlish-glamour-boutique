
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card } from '@/components/ui/card';

const PaymentMethods = () => {
  return (
    <Layout>
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Payment Methods</h1>
          
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8 p-6">
              <h2 className="text-2xl font-bold mb-4">Available Payment Options</h2>
              <p className="text-gray-700 mb-6">
                Girlish Glamour Boutique offers several convenient and secure payment methods to make your shopping experience as smooth as possible.
              </p>
              
              <div className="space-y-6">
                {/* Credit/Debit Cards */}
                <div className="p-4 bg-lavender-light rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Credit/Debit Cards</h3>
                  <p className="text-gray-700 mb-3">
                    We accept all major credit and debit cards for online purchases.
                  </p>
                  <div className="flex space-x-3">
                    <div className="w-12 h-8 bg-white rounded flex items-center justify-center shadow">
                      <span className="font-bold text-blue-700">Visa</span>
                    </div>
                    <div className="w-12 h-8 bg-white rounded flex items-center justify-center shadow">
                      <span className="font-bold text-red-600">MC</span>
                    </div>
                    <div className="w-12 h-8 bg-white rounded flex items-center justify-center shadow">
                      <span className="font-bold text-blue-500">Amex</span>
                    </div>
                    <div className="w-12 h-8 bg-white rounded flex items-center justify-center shadow">
                      <span className="font-bold text-yellow-500">Disc</span>
                    </div>
                  </div>
                </div>
                
                {/* Cash on Delivery */}
                <div className="p-4 bg-lavender-light rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Cash on Delivery (COD)</h3>
                  <p className="text-gray-700">
                    Pay when your order arrives at your doorstep. Cash on Delivery is available for orders within the United States.
                  </p>
                  <div className="mt-3 text-sm text-gray-600">
                    <p><strong>Important:</strong> Please have the exact amount ready, as our delivery personnel may not carry change.</p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="mb-8 p-6">
              <h2 className="text-2xl font-bold mb-4">Payment Security</h2>
              <p className="text-gray-700 mb-4">
                At Girlish Glamour Boutique, we take payment security very seriously. Our website utilizes industry-standard encryption and security protocols to ensure that your payment information is always protected.
              </p>
              <div className="p-4 bg-lavender-light rounded-lg">
                <h3 className="text-lg font-bold mb-2">Our Security Measures:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>SSL encryption for all transactions</li>
                  <li>PCI-DSS compliance for card processing</li>
                  <li>Regular security audits and updates</li>
                  <li>We never store your complete credit card information</li>
                </ul>
              </div>
            </Card>
            
            <Card className="mb-8 p-6">
              <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold">When will my card be charged?</h3>
                  <p className="text-gray-700">
                    Your card will be charged immediately once you place your order.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold">Is Cash on Delivery available for all areas?</h3>
                  <p className="text-gray-700">
                    Cash on Delivery is available for most areas within the continental United States. Some remote areas may not be eligible for COD.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold">What happens if I'm not home when my COD order arrives?</h3>
                  <p className="text-gray-700">
                    If you're not available to receive your COD order, our delivery partner will leave a notice and attempt delivery again on the next business day. After two failed attempts, the order will be returned to our warehouse.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold">Do you offer installment payments?</h3>
                  <p className="text-gray-700">
                    Currently, we do not offer installment payment options, but we are working on implementing this feature in the near future.
                  </p>
                </div>
              </div>
            </Card>
            
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Need Further Assistance?</h3>
              <p className="text-gray-700 mb-4">
                If you have any questions about our payment methods or experience any issues during checkout, please don't hesitate to contact our customer support team.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="mailto:support@girlishglamour.com" className="text-pink-dark hover:underline">support@girlishglamour.com</a>
                <span className="text-gray-400">|</span>
                <a href="tel:+1-800-555-0123" className="text-pink-dark hover:underline">+1-800-555-0123</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PaymentMethods;
