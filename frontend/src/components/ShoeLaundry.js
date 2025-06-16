import React, { useState } from 'react';

const ShoeLaundry = () => {
  const [activeTab, setActiveTab] = useState('sneakers');
  
  const whatsappNumber = '+919028983659';
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=Hi! I would like to get a quote for shoe laundry services. I'm sending photos of my shoes.`;

  const laundryServices = {
    sneakers: {
      title: 'Sneakers & Athletic Shoes',
      subtitle: 'Professional athletic footwear cleaning',
      description: 'Specialized deep cleaning and restoration for all types of athletic footwear. Our advanced cleaning process removes embedded dirt, stubborn stains, and persistent odors while preserving the integrity of modern athletic shoe materials.',
      image: 'https://images.unsplash.com/photo-1626729632264-6d88427dfc46?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxzbmVha2VycyUyMGNsZWFuaW5nfGVufDB8fHx8MTc1MDA1NDM3OHww&ixlib=rb-4.1.0&q=85',
      services: [
        {
          name: 'Deep Cleaning',
          description: 'Thorough cleaning of all surfaces including mesh, leather, and synthetic materials',
          price: '₹299-499',
          duration: '24-48 hours'
        },
        {
          name: 'Stain Removal',
          description: 'Specialized treatment for grass stains, mud, scuff marks, and other athletic-related stains',
          price: '₹199-399',
          duration: '24-48 hours'
        },
        {
          name: 'Odor Elimination',
          description: 'Complete deodorization using UV treatment and antimicrobial solutions',
          price: '₹149-249',
          duration: '12-24 hours'
        },
        {
          name: 'Color Restoration',
          description: 'Restore faded colors and enhance original vibrancy of athletic shoes',
          price: '₹399-699',
          duration: '48-72 hours'
        },
        {
          name: 'Sole Whitening',
          description: 'Specialized treatment to restore white soles to their original brightness',
          price: '₹199-349',
          duration: '24 hours'
        }
      ],
      benefits: [
        'Extends shoe lifespan by 2-3x',
        'Eliminates bacteria and fungus',
        'Restores grip and traction',
        'Maintains breathability',
        'Safe for all athletic shoe brands'
      ]
    },
    dress: {
      title: 'Dress Shoes & Formal',
      subtitle: 'Premium leather care and polishing',
      description: 'Luxury treatment for formal footwear including premium leather conditioning, professional polishing, and protective treatments that maintain elegance while ensuring durability for your most important occasions.',
      image: 'https://images.unsplash.com/photo-1518027830478-6a75ff88c3aa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxkcmVzcyUyMHNob2VzJTIwY2xlYW5pbmd8ZW58MHx8fHwxNzUwMDU0MzgzfDA&ixlib=rb-4.1.0&q=85',
      services: [
        {
          name: 'Premium Leather Conditioning',
          description: 'Deep conditioning with high-quality oils to maintain leather flexibility and prevent cracking',
          price: '₹499-799',
          duration: '48 hours'
        },
        {
          name: 'Mirror Shine Polish',
          description: 'Professional high-gloss polish for formal events and business occasions',
          price: '₹299-499',
          duration: '24 hours'
        },
        {
          name: 'Waterproof Treatment',
          description: 'Invisible protective coating against water, stains, and weather damage',
          price: '₹399-599',
          duration: '24-48 hours'
        },
        {
          name: 'Scratch & Scuff Repair',
          description: 'Expert restoration of leather surface damage and color matching',
          price: '₹399-899',
          duration: '48-72 hours'
        },
        {
          name: 'Patent Leather Care',
          description: 'Specialized cleaning and restoration for patent leather formal shoes',
          price: '₹599-999',
          duration: '24-48 hours'
        }
      ],
      benefits: [
        'Maintains professional appearance',
        'Prevents leather cracking and aging',
        'Weather protection',
        'Color enhancement and matching',
        'Extends formal shoe lifespan'
      ]
    },
    boots: {
      title: 'Boots & Heavy Duty',
      subtitle: 'Comprehensive care for work and outdoor boots',
      description: 'Specialized cleaning and maintenance for work boots, hiking boots, and heavy-duty footwear. Our industrial-grade processes handle the toughest dirt, grime, and wear while restoring functionality and protection.',
      image: 'https://images.pexels.com/photos/8624606/pexels-photo-8624606.jpeg',
      services: [
        {
          name: 'Heavy-Duty Deep Clean',
          description: 'Industrial cleaning process for construction dust, mud, grease, and heavy soiling',
          price: '₹399-699',
          duration: '48-72 hours'
        },
        {
          name: 'Waterproofing & Sealing',
          description: 'Complete waterproof treatment for maximum protection in harsh conditions',
          price: '₹499-799',
          duration: '48 hours'
        },
        {
          name: 'Sole Deep Cleaning',
          description: 'Specialized cleaning of treads and sole patterns for optimal grip restoration',
          price: '₹199-399',
          duration: '24 hours'
        },
        {
          name: 'Leather Protection',
          description: 'Heavy-duty leather conditioning and protection against cracking and wear',
          price: '₹399-699',
          duration: '48 hours'
        },
        {
          name: 'Steel Toe Polishing',
          description: 'Specialized care for steel-toe boots including rust prevention and shine',
          price: '₹299-499',
          duration: '24-48 hours'
        }
      ],
      benefits: [
        'Restores work boot functionality',
        'Maximum weather protection',
        'Enhanced safety features',
        'Extends heavy-duty boot life',
        'Maintains comfort and support'
      ]
    },
    sandals: {
      title: 'Sandals & Casual',
      subtitle: 'Quick refresh for everyday footwear',
      description: 'Efficient cleaning and refreshing services for casual footwear including sandals, canvas shoes, and everyday wear. Perfect for maintaining comfort and hygiene in your daily footwear rotation.',
      image: 'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg',
      services: [
        {
          name: 'Quick Refresh Clean',
          description: 'Fast cleaning service for light soiling and regular maintenance',
          price: '₹99-199',
          duration: '2-6 hours'
        },
        {
          name: 'Deep Deodorizing',
          description: 'Complete odor elimination treatment with antimicrobial protection',
          price: '₹149-249',
          duration: '12-24 hours'
        },
        {
          name: 'Strap & Buckle Repair',
          description: 'Repair and replacement of sandal straps, buckles, and closures',
          price: '₹199-499',
          duration: '24-48 hours'
        },
        {
          name: 'Canvas Shoe Cleaning',
          description: 'Specialized cleaning for canvas materials including sneakers and casual shoes',
          price: '₹199-349',
          duration: '24 hours'
        },
        {
          name: 'Color Touch-Up',
          description: 'Minor color restoration and touch-up for faded casual footwear',
          price: '₹149-299',
          duration: '12-24 hours'
        }
      ],
      benefits: [
        'Quick turnaround time',
        'Affordable maintenance',
        'Hygienic treatment',
        'Comfort restoration',
        'Extended casual wear life'
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-20">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-100 to-purple-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Professional Shoe Laundry
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Transform your footwear with our specialized cleaning services. We handle every type of shoe with care, expertise, and attention to detail.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-green-800 mb-2">💡 Get Instant Quote</h3>
            <p className="text-green-700 mb-3">
              Just WhatsApp your shoes photo on our number, our team will contact you!
            </p>
            <p className="text-green-600 font-bold text-lg mb-4">📞 {whatsappNumber}</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg inline-block"
            >
              📱 WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {Object.keys(laundryServices).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md border border-gray-200'
                }`}
              >
                {laundryServices[key].title.split(' &')[0]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Service Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-2">
                    {laundryServices[activeTab].title}
                  </h2>
                  <p className="text-xl text-blue-100 mb-4">
                    {laundryServices[activeTab].subtitle}
                  </p>
                  <p className="text-lg leading-relaxed text-blue-50">
                    {laundryServices[activeTab].description}
                  </p>
                </div>
                <div className="relative">
                  <img
                    src={laundryServices[activeTab].image}
                    alt={laundryServices[activeTab].title}
                    className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Services Details */}
            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Our {laundryServices[activeTab].title} Services
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {laundryServices[activeTab].services.map((service, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">{service.name}</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">
                        {service.price}
                      </span>
                      <span className="text-gray-500">🕐 {service.duration}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Why Choose Our {laundryServices[activeTab].title} Service?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {laundryServices[activeTab].benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center bg-white rounded-lg p-4 shadow-md">
                      <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="text-center mt-12">
                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Ready to Clean Your {laundryServices[activeTab].title}?</h3>
                  <p className="text-lg mb-6 text-green-100">
                    📸 Just WhatsApp your shoes photo on our number, our team will contact you!
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg inline-block"
                  >
                    📱 Get Quote on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShoeLaundry;