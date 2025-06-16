import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const whatsappNumber = '+919028983659';
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}`;

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Mr Boot
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted shoe service partner since 1985. Quality craftsmanship, reliable service, and complete customer satisfaction.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:from-blue-600 hover:to-blue-700 transition-colors">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center cursor-pointer hover:from-pink-600 hover:to-pink-700 transition-colors">
                <span className="text-sm font-bold">ig</span>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center cursor-pointer hover:from-green-600 hover:to-green-700 transition-colors"
              >
                <span className="text-sm">📱</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-300">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/shoe-laundry" className="text-gray-300 hover:text-white transition-colors">Shoe Laundry</Link></li>
              <li><Link to="/shoe-making" className="text-gray-300 hover:text-white transition-colors">Shoe Making</Link></li>
              <li><Link to="/shoe-repair" className="text-gray-300 hover:text-white transition-colors">Shoe Repair</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-300">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <span className="mr-2">📍</span>
                <span>123 Cobbler Street, Shoe District</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📞</span>
                <span>{whatsappNumber}</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">⏰</span>
                <span>Mon-Fri: 8AM-6PM, Sat: 9AM-4PM</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              &copy; 2025 Mr Boot Shoe Services. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg"
              >
                📱 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;