import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeLaundryTab, setActiveLaundryTab] = useState('sneakers');
  const [activeRepairTab, setActiveRepairTab] = useState('sole');

  const laundryServices = {
    sneakers: {
      title: 'Sneakers & Athletic Shoes',
      description: 'Deep cleaning and restoration for all types of athletic footwear. We use specialized cleaning solutions to remove stains, dirt, and odors while preserving the shoe material.',
      image: 'https://images.unsplash.com/photo-1626729632264-6d88427dfc46?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxzbmVha2VycyUyMGNsZWFuaW5nfGVufDB8fHx8MTc1MDA1NDM3OHww&ixlib=rb-4.1.0&q=85',
      features: ['Deep cleaning', 'Stain removal', 'Odor elimination', 'Color restoration']
    },
    dress: {
      title: 'Dress Shoes & Formal',
      description: 'Premium leather care and polishing services for your formal footwear. Our expert treatment ensures your dress shoes maintain their elegance and durability.',
      image: 'https://images.unsplash.com/photo-1518027830478-6a75ff88c3aa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxkcmVzcyUyMHNob2VzJTIwY2xlYW5pbmd8ZW58MHx8fHwxNzUwMDU0MzgzfDA&ixlib=rb-4.1.0&q=85',
      features: ['Leather conditioning', 'Professional polishing', 'Waterproof treatment', 'Scratch repair']
    },
    boots: {
      title: 'Boots & Heavy Duty',
      description: 'Comprehensive cleaning and care for work boots, hiking boots, and heavy-duty footwear. We handle the toughest dirt and grime with specialized equipment.',
      image: 'https://images.pexels.com/photos/8624606/pexels-photo-8624606.jpeg',
      features: ['Heavy-duty cleaning', 'Waterproofing', 'Sole restoration', 'Leather protection']
    },
    sandals: {
      title: 'Sandals & Casual',
      description: 'Quick refresh and cleaning services for casual footwear. Perfect for seasonal sandals, canvas shoes, and everyday casual wear.',
      image: 'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg',
      features: ['Quick cleaning', 'Deodorizing', 'Strap repair', 'Color touch-up']
    }
  };

  const repairServices = {
    sole: {
      title: 'Sole Replacement',
      description: 'Complete sole restoration using high-quality materials. We match the original sole design and ensure optimal comfort and durability.',
      image: 'https://images.pexels.com/photos/13524651/pexels-photo-13524651.jpeg',
      features: ['Full sole replacement', 'Material matching', 'Comfort optimization', 'Durability guarantee']
    },
    heel: {
      title: 'Heel Repair',
      description: 'Professional heel replacement and reconstruction services. From heel tips to complete heel rebuilding, we restore your shoes functionality.',
      image: 'https://images.pexels.com/photos/32571628/pexels-photo-32571628.jpeg',
      features: ['Heel tip replacement', 'Full heel reconstruction', 'Height adjustment', 'Stability improvement']
    },
    stitching: {
      title: 'Stitching & Seams',
      description: 'Expert stitching and seam repair services. Our skilled craftsmen use traditional techniques to restore structural integrity and appearance.',
      image: 'https://images.pexels.com/photos/21772276/pexels-photo-21772276.jpeg',
      features: ['Seam reinforcement', 'Thread matching', 'Hand stitching', 'Machine stitching']
    },
    hardware: {
      title: 'Hardware & Accessories',
      description: 'Replacement and repair of zippers, buckles, eyelets, and other shoe hardware. We source quality components to match your shoes original design.',
      image: 'https://images.unsplash.com/photo-1654076847645-b72b3b66d576?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxjb2JibGVyJTIwd29ya3xlbnwwfHx8fDE3NTAwNTQ0Mzl8MA&ixlib=rb-4.1.0&q=85',
      features: ['Zipper replacement', 'Buckle repair', 'Eyelet installation', 'Hardware matching']
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-900 to-orange-800 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Mr Boot
                <span className="block text-amber-300">Shoe Services</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-200">
                Professional shoe laundry, custom making, and expert repair services. 
                Your trusted partner for all footwear needs since 1985.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Book Service
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-amber-900 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                  Learn More
                </button>
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

      {/* Shoe Laundry Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Professional Shoe Laundry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your footwear with our specialized cleaning services. We handle every type of shoe with care and expertise.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {Object.keys(laundryServices).map((key) => (
              <button
                key={key}
                onClick={() => setActiveLaundryTab(key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeLaundryTab === key
                    ? 'bg-amber-500 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {laundryServices[key].title.split(' &')[0]}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {laundryServices[activeLaundryTab].title}
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {laundryServices[activeLaundryTab].description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {laundryServices[activeLaundryTab].features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-8 bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg">
                  Get Quote
                </button>
              </div>
              <div className="relative">
                <img
                  src={laundryServices[activeLaundryTab].image}
                  alt={laundryServices[activeLaundryTab].title}
                  className="rounded-lg shadow-2xl w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shoe Making Section */}
      <section className="py-20 bg-gradient-to-r from-amber-900 to-orange-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Custom Shoe Making</h2>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto">
              From concept to creation, we craft bespoke footwear tailored to your unique style and comfort needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Design Consultation</h3>
              <p className="text-amber-100">
                Work with our master craftsmen to design your perfect shoe. Choose materials, colors, and style details.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Precision Crafting</h3>
              <p className="text-amber-100">
                Using traditional techniques and premium materials, we handcraft each shoe with meticulous attention to detail.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Perfect Fit</h3>
              <p className="text-amber-100">
                Final fitting and adjustments ensure your custom shoes provide unmatched comfort and style.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg">
              Start Custom Order
            </button>
          </div>
        </div>
      </section>

      {/* Shoe Repair Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Expert Shoe Repair
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Extend the life of your favorite shoes with our comprehensive repair services. No job too big or small.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {Object.keys(repairServices).map((key) => (
              <button
                key={key}
                onClick={() => setActiveRepairTab(key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeRepairTab === key
                    ? 'bg-orange-500 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {repairServices[key].title.split(' &')[0]}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src={repairServices[activeRepairTab].image}
                  alt={repairServices[activeRepairTab].title}
                  className="rounded-lg shadow-2xl w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {repairServices[activeRepairTab].title}
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {repairServices[activeRepairTab].description}
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {repairServices[activeRepairTab].features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg">
                  Schedule Repair
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
              <p className="text-xl text-gray-300 mb-8">
                Ready to give your shoes the care they deserve? Contact us today for a consultation.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-300">123 Cobbler Street, Shoe District, City 12345</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-300">(555) 123-BOOT</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">⏰</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Hours</h3>
                    <p className="text-gray-300">Mon-Fri: 8AM-6PM, Sat: 9AM-4PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form className="bg-white/10 backdrop-blur rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-amber-500"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-amber-500"
                  />
                  <textarea
                    rows="4"
                    placeholder="Tell us about your shoe service needs..."
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-amber-500"
                  ></textarea>
                  <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-semibold transition-all duration-300">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Mr Boot</h3>
              <p className="text-gray-400">
                Your trusted shoe service partner since 1985. Quality craftsmanship, reliable service.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Shoe Laundry</li>
                <li>Custom Making</li>
                <li>Expert Repairs</li>
                <li>Leather Care</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-amber-600 transition-colors">
                  <span>f</span>
                </div>
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-amber-600 transition-colors">
                  <span>ig</span>
                </div>
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-amber-600 transition-colors">
                  <span>tw</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Mr Boot Shoe Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;