import React, { useState } from 'react';

const ShoeMaking = () => {
  const [activeStep, setActiveStep] = useState('consultation');
  
  const whatsappNumber = '+919028983659';
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=Hi! I would like to get a quote for custom shoe making services. I'm interested in discussing my requirements.`;

  const makingProcess = {
    consultation: {
      title: 'Design Consultation',
      subtitle: 'Bring your vision to life',
      description: 'Our master craftsmen work closely with you to understand your style preferences, comfort needs, and design vision. We discuss materials, colors, patterns, and create detailed sketches of your custom shoes.',
      image: 'https://images.pexels.com/photos/32524151/pexels-photo-32524151.jpeg',
      duration: '1-2 hours',
      cost: 'Free consultation',
      details: [
        'Detailed foot measurement and analysis',
        'Style preference discussion',
        'Material selection guidance',
        'Color and pattern consultation',
        'Comfort requirement assessment',
        'Design sketch creation',
        'Price estimation and timeline',
        'Custom fit recommendations'
      ]
    },
    crafting: {
      title: 'Precision Crafting',
      subtitle: 'Traditional techniques meet modern precision',
      description: 'Using time-honored techniques passed down through generations, combined with modern precision tools, we handcraft each shoe with meticulous attention to detail using only premium materials.',
      image: 'https://images.pexels.com/photos/21772276/pexels-photo-21772276.jpeg',
      duration: '2-4 weeks',
      cost: 'Varies by design',
      details: [
        'Premium leather cutting and preparation',
        'Hand-stitched construction methods',
        'Traditional last-making techniques',
        'Sole attachment and shaping',
        'Hardware installation and fitting',
        'Quality control at each stage',
        'Detailed finishing and polishing',
        'Final inspection and approval'
      ]
    },
    fitting: {
      title: 'Perfect Fit',
      subtitle: 'Ensuring unmatched comfort',
      description: 'Final fitting sessions ensure your custom shoes provide the perfect combination of style, comfort, and functionality. We make necessary adjustments until you are completely satisfied.',
      image: 'https://images.pexels.com/photos/30725646/pexels-photo-30725646.jpeg',
      duration: '30-60 minutes',
      cost: 'Included in service',
      details: [
        'Initial fit assessment',
        'Comfort level evaluation',
        'Pressure point identification',
        'Minor adjustments as needed',
        'Walking test and feedback',
        'Final comfort optimization',
        'Care instruction provision',
        'Warranty and service information'
      ]
    }
  };

  const shoeTypes = [
    {
      name: 'Formal Dress Shoes',
      description: 'Elegant leather dress shoes for business and formal occasions',
      image: 'https://images.unsplash.com/photo-1518027830478-6a75ff88c3aa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxkcmVzcyUyMHNob2VzJTIwY2xlYW5pbmd8ZW58MHx8fHwxNzUwMDU0MzgzfDA&ixlib=rb-4.1.0&q=85',
      priceRange: '₹8,000 - ₹25,000',
      timeline: '3-4 weeks',
      features: [
        'Premium leather construction',
        'Hand-welted soles',
        'Custom fit guarantee',
        'Choice of leather types',
        'Various color options',
        'Personalized details'
      ]
    },
    {
      name: 'Casual & Lifestyle',
      description: 'Comfortable everyday shoes designed for your lifestyle',
      image: 'https://images.unsplash.com/photo-1626729632264-6d88427dfc46?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxzbmVha2VycyUyMGNsZWFuaW5nfGVufDB8fHx8MTc1MDA1NDM3OHww&ixlib=rb-4.1.0&q=85',
      priceRange: '₹5,000 - ₹15,000',
      timeline: '2-3 weeks',
      features: [
        'Comfortable padding',
        'Flexible sole construction',
        'Breathable materials',
        'Casual design options',
        'Durable everyday wear',
        'Custom color combinations'
      ]
    },
    {
      name: 'Work & Safety Boots',
      description: 'Heavy-duty boots for professional and safety requirements',
      image: 'https://images.pexels.com/photos/8624606/pexels-photo-8624606.jpeg',
      priceRange: '₹6,000 - ₹20,000',
      timeline: '3-4 weeks',
      features: [
        'Steel toe protection options',
        'Slip-resistant soles',
        'Waterproof construction',
        'Ankle support design',
        'Durable work materials',
        'Safety standard compliance'
      ]
    },
    {
      name: 'Special Occasion',
      description: 'Unique designs for weddings, parties, and special events',
      image: 'https://images.pexels.com/photos/32571628/pexels-photo-32571628.jpeg',
      priceRange: '₹10,000 - ₹50,000',
      timeline: '4-6 weeks',
      features: [
        'Luxury material options',
        'Intricate design details',
        'Custom embellishments',
        'Unique color schemes',
        'Personalized monograms',
        'Premium finishing'
      ]
    }
  ];

  const materials = [
    {
      name: 'Premium Leather',
      types: ['Italian Calf Leather', 'Full Grain Leather', 'Patent Leather', 'Suede Leather'],
      description: 'High-quality leather from trusted suppliers worldwide'
    },
    {
      name: 'Exotic Materials',
      types: ['Crocodile Leather', 'Ostrich Leather', 'Snake Skin', 'Lizard Leather'],
      description: 'Rare and luxurious materials for exclusive designs'
    },
    {
      name: 'Synthetic Options',
      types: ['Vegan Leather', 'Microfiber', 'Canvas', 'Synthetic Suede'],
      description: 'Sustainable and cruelty-free alternatives'
    },
    {
      name: 'Hardware & Accessories',
      types: ['Brass Eyelets', 'Stainless Steel', 'Custom Buckles', 'Decorative Elements'],
      description: 'Quality hardware and decorative components'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 pt-20">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-purple-100 to-pink-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Custom Shoe Making
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            From concept to creation, we craft bespoke footwear tailored to your unique style, comfort needs, and personal preferences. Each pair is a masterpiece of traditional craftsmanship.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-green-800 mb-2">💡 Start Your Custom Order</h3>
            <p className="text-green-700 mb-3">
              Just WhatsApp your requirements and inspiration photos, our master craftsmen will guide you!
            </p>
            <p className="text-green-600 font-bold text-lg mb-4">📞 {whatsappNumber}</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg inline-block"
            >
              📱 Start Custom Order
            </a>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-12">
            Our Shoe Making Process
          </h2>

          {/* Step Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(makingProcess).map((key, index) => (
              <button
                key={key}
                onClick={() => setActiveStep(key)}
                className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeStep === key
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md border border-gray-200'
                }`}
              >
                <span className="mr-2 font-bold">{index + 1}</span>
                {makingProcess[key].title}
              </button>
            ))}
          </div>

          {/* Step Content */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-4xl font-bold mb-2">
                    {makingProcess[activeStep].title}
                  </h3>
                  <p className="text-xl text-purple-100 mb-4">
                    {makingProcess[activeStep].subtitle}
                  </p>
                  <p className="text-lg leading-relaxed text-purple-50 mb-6">
                    {makingProcess[activeStep].description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-white/20 rounded-lg px-4 py-2">
                      <span className="text-sm font-semibold">Duration: {makingProcess[activeStep].duration}</span>
                    </div>
                    <div className="bg-white/20 rounded-lg px-4 py-2">
                      <span className="text-sm font-semibold">Cost: {makingProcess[activeStep].cost}</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={makingProcess[activeStep].image}
                    alt={makingProcess[activeStep].title}
                    className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="p-8">
              <h4 className="text-2xl font-bold text-gray-800 mb-6">What's Included in This Step</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {makingProcess[activeStep].details.map((detail, index) => (
                  <div key={index} className="flex items-center bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shoe Types */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Types of Custom Shoes We Make
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {shoeTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <img
                  src={type.image}
                  alt={type.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{type.name}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold text-sm">
                      {type.priceRange}
                    </span>
                    <span className="text-gray-500 text-sm">🕐 {type.timeline}</span>
                  </div>
                  
                  <div className="space-y-2">
                    {type.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-12">
            Premium Materials & Options
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((material, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 shadow-lg border border-purple-100">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{material.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{material.description}</p>
                <div className="space-y-2">
                  {material.types.map((type, typeIndex) => (
                    <div key={typeIndex} className="bg-white rounded-lg px-3 py-2 text-sm font-medium text-gray-700">
                      {type}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Your Perfect Shoes?</h2>
          <p className="text-xl mb-8 text-purple-100">
            Let our master craftsmen bring your vision to life with premium materials and traditional techniques.
          </p>
          
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">Start Your Custom Order</h3>
            <p className="text-lg mb-4 text-purple-100">
              📸 Share your ideas, inspiration photos, and requirements via WhatsApp!
            </p>
            <p className="text-2xl font-bold text-green-300 mb-6">📞 {whatsappNumber}</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
            >
              💬 Start Custom Order
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShoeMaking;