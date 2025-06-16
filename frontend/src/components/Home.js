import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const whatsappNumber = '+919028983659';
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=Hi! I would like to get a quote for shoe services. I'm sending photos of my shoes.`;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-100 via-purple-50 to-pink-100 text-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mr Boot</span>
                <span className="block text-gray-700 text-4xl lg:text-5xl mt-2">Shoe Services</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-600">
                Professional shoe laundry, custom making, and expert repair services. 
                Your trusted partner for all footwear needs since 1985.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  📱 Get Quote on WhatsApp
                </a>
                <Link
                  to="/shoe-laundry"
                  className="border-2 border-blue-500 hover:bg-blue-500 hover:text-white text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm text-green-700">
                  💡 <strong>Quick Quote:</strong> Just WhatsApp your shoes photo on our number, our team will contact you!
                </p>
                <p className="text-sm text-green-600 font-semibold mt-1">📞 {whatsappNumber}</p>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1650377464601-91b36809fc68?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxzaG9lJTIwcmVwYWlyJTIwd29ya3Nob3B8ZW58MHx8fHwxNzUwMDU0MzczfDA&ixlib=rb-4.1.0&q=85"
                alt="Shoe Repair Workshop"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive shoe care solutions for all your footwear needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Shoe Laundry */}
            <Link to="/shoe-laundry" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-blue-100">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🧽</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Shoe Laundry</h3>
                <p className="text-gray-600 text-center mb-6">
                  Professional cleaning services for all types of footwear. Deep cleaning, stain removal, and odor elimination.
                </p>
                <div className="text-center">
                  <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold group-hover:bg-blue-600 transition-colors">
                    Learn More →
                  </span>
                </div>
              </div>
            </Link>

            {/* Shoe Making */}
            <Link to="/shoe-making" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-purple-100">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">👞</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Shoe Making</h3>
                <p className="text-gray-600 text-center mb-6">
                  Custom handcrafted shoes made to your exact specifications. Premium materials and traditional craftsmanship.
                </p>
                <div className="text-center">
                  <span className="inline-block bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold group-hover:bg-purple-600 transition-colors">
                    Learn More →
                  </span>
                </div>
              </div>
            </Link>

            {/* Shoe Repair */}
            <Link to="/shoe-repair" className="group">
              <div className="bg-gradient-to-br from-green-50 to-teal-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-green-100">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Shoe Repair</h3>
                <p className="text-gray-600 text-center mb-6">
                  Expert repair services to extend the life of your favorite shoes. Sole replacement, heel repair, and more.
                </p>
                <div className="text-center">
                  <span className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold group-hover:bg-green-600 transition-colors">
                    Learn More →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Mr Boot?</h2>
            <p className="text-xl text-gray-600">40 years of excellence in shoe care</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">40+ Years Experience</h3>
              <p className="text-gray-600">Trusted expertise since 1985</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality Materials</h3>
              <p className="text-gray-600">Premium products and tools</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Quick Service</h3>
              <p className="text-gray-600">Fast turnaround times</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Satisfaction Guarantee</h3>
              <p className="text-gray-600">100% quality assurance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Give Your Shoes the Care They Deserve?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for professional shoe services that will make your footwear look and feel like new.
          </p>
          
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-semibold mb-4">Get Instant Quote via WhatsApp</h3>
            <p className="text-lg mb-4 text-blue-100">
              📸 Just WhatsApp your shoes photo on our number, our team will contact you!
            </p>
            <p className="text-2xl font-bold text-green-300 mb-6">📞 {whatsappNumber}</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
            >
              💬 Start WhatsApp Chat
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;