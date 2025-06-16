import React, { useState } from 'react';

const ShoeRepair = () => {
  const [activeTab, setActiveTab] = useState('sole');
  
  const whatsappNumber = '+919028983659';
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=Hi! I would like to get a quote for shoe repair services. I'm sending photos of my shoes that need repair.`;

  const repairServices = {
    sole: {
      title: 'Sole Replacement & Restoration',
      subtitle: 'Complete sole restoration services',
      description: 'Professional sole replacement using high-quality materials that match your shoes original design. We restore functionality, comfort, and durability while maintaining the aesthetic appeal of your favorite footwear.',
      image: 'https://images.pexels.com/photos/13524651/pexels-photo-13524651.jpeg',
      services: [
        {
          name: 'Full Sole Replacement',
          description: 'Complete replacement of worn-out soles with premium materials matching original specifications',
          price: '₹899-1,999',
          duration: '3-5 days',
          process: 'Remove old sole, prepare shoe base, attach new sole, finish and polish'
        },
        {
          name: 'Half Sole Replacement',
          description: 'Replacement of front portion of sole while preserving heel area',
          price: '₹599-1,199',
          duration: '2-3 days',
          process: 'Remove front sole section, prepare surface, attach half sole, blend with existing'
        },
        {
          name: 'Sole Repair & Patching',
          description: 'Repair of holes, cracks, and damaged areas in soles',
          price: '₹299-699',
          duration: '1-2 days',
          process: 'Clean damage area, apply patch material, sand and finish'
        },
        {
          name: 'Rubber Sole Restoration',
          description: 'Restoration of rubber soles including cleaning, repair, and protective coating',
          price: '₹399-899',
          duration: '2-3 days',
          process: 'Deep clean, repair cracks, apply protective coating'
        },
        {
          name: 'Leather Sole Conditioning',
          description: 'Deep conditioning and protection for leather soles',
          price: '₹299-599',
          duration: '1-2 days',
          process: 'Clean, condition, seal, and protect leather sole'
        }
      ],
      materials: ['Genuine Leather', 'Rubber Compound', 'Synthetic Materials', 'Polyurethane', 'Crepe Rubber'],
      benefits: [
        'Extends shoe life by 3-5 years',
        'Maintains original shoe shape',
        'Restores comfort and support',
        'Slip-resistant options available',
        'Waterproof treatment included'
      ]
    },
    heel: {
      title: 'Heel Repair & Reconstruction',
      subtitle: 'Professional heel restoration services',
      description: 'Expert heel repair and reconstruction services from simple heel tip replacement to complete heel rebuilding. We restore stability, comfort, and style while ensuring proper balance and walking comfort.',
      image: 'https://images.pexels.com/photos/32571628/pexels-photo-32571628.jpeg',
      services: [
        {
          name: 'Heel Tip Replacement',
          description: 'Quick replacement of worn heel tips with matching materials',
          price: '₹199-499',
          duration: 'Same day',
          process: 'Remove old tip, select matching replacement, attach and finish'
        },
        {
          name: 'Complete Heel Reconstruction',
          description: 'Full rebuilding of damaged or broken heels',
          price: '₹799-1,999',
          duration: '3-5 days',
          process: 'Remove damaged heel, rebuild structure, shape and finish'
        },
        {
          name: 'Heel Height Adjustment',
          description: 'Modify heel height for better comfort and style preference',
          price: '₹699-1,499',
          duration: '2-4 days',
          process: 'Remove heel, reshape to desired height, reattach and balance'
        },
        {
          name: 'Heel Stabilization',
          description: 'Repair of loose or wobbly heels for improved stability',
          price: '₹399-899',
          duration: '1-2 days',
          process: 'Identify loose areas, reinforce attachment, secure and test'
        },
        {
          name: 'Stiletto Heel Repair',
          description: 'Specialized repair for broken or bent stiletto heels',
          price: '₹599-1,299',
          duration: '2-3 days',
          process: 'Assess damage, repair or replace heel pin, reshape and finish'
        }
      ],
      materials: ['Leather Stacked Heels', 'Wooden Heels', 'Plastic Heel Tips', 'Metal Reinforcements', 'Rubber Heel Caps'],
      benefits: [
        'Improved walking stability',
        'Prevents further damage',
        'Cost-effective vs new shoes',
        'Maintains shoe balance',
        'Professional appearance'
      ]
    },
    stitching: {
      title: 'Stitching & Seam Repair',
      subtitle: 'Expert stitching and structural repair',
      description: 'Professional stitching and seam repair services using traditional hand-stitching techniques and modern machine methods. We restore structural integrity while maintaining the original appearance and style of your shoes.',
      image: 'https://images.pexels.com/photos/21772276/pexels-photo-21772276.jpeg',
      services: [
        {
          name: 'Seam Reinforcement',
          description: 'Strengthening of weak or failing seams before complete failure',
          price: '₹299-699',
          duration: '1-2 days',
          process: 'Identify weak points, reinforce with additional stitching'
        },
        {
          name: 'Complete Seam Reconstruction',
          description: 'Full reconstruction of failed seams with matching thread',
          price: '₹599-1,299',
          duration: '2-4 days',
          process: 'Remove old stitching, prepare edges, restitch with proper tension'
        },
        {
          name: 'Hand Stitching Repair',
          description: 'Traditional hand-stitching repair for premium and vintage shoes',
          price: '₹799-1,799',
          duration: '3-5 days',
          process: 'Hand-select thread, use traditional techniques, finish to match original'
        },
        {
          name: 'Leather Panel Reattachment',
          description: 'Reattachment of separated leather panels and components',
          price: '₹499-999',
          duration: '2-3 days',
          process: 'Clean separation area, apply adhesive, stitch for security'
        },
        {
          name: 'Decorative Stitching Restoration',
          description: 'Restoration of decorative stitching patterns and designs',
          price: '₹399-899',
          duration: '2-4 days',
          process: 'Match original pattern, select appropriate thread, recreate design'
        }
      ],
      materials: ['Waxed Cotton Thread', 'Leather Stitching Thread', 'Nylon Thread', 'Polyester Thread', 'Specialty Threads'],
      benefits: [
        'Prevents complete shoe failure',
        'Maintains structural integrity',
        'Preserves original appearance',
        'Cost-effective repair solution',
        'Extends functional life'
      ]
    },
    hardware: {
      title: 'Hardware & Accessories',
      subtitle: 'Complete hardware replacement and repair',
      description: 'Professional replacement and repair of all shoe hardware including zippers, buckles, eyelets, and decorative elements. We source quality components that match your shoes original design and functionality.',
      image: 'https://images.unsplash.com/photo-1654076847645-b72b3b66d576?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxjb2JibGVyJTIwd29ya3xlbnwwfHx8fDE3NTAwNTQ0Mzl8MA&ixlib=rb-4.1.0&q=85',
      services: [
        {
          name: 'Zipper Replacement',
          description: 'Complete zipper replacement with matching color and style',
          price: '₹399-899',
          duration: '1-2 days',
          process: 'Remove old zipper, measure and fit new zipper, secure attachment'
        },
        {
          name: 'Buckle Repair & Replacement',
          description: 'Repair or replacement of broken, bent, or missing buckles',
          price: '₹299-799',
          duration: '1-2 days',
          process: 'Assess damage, source matching buckle, install and adjust'
        },
        {
          name: 'Eyelet Installation',
          description: 'Installation of new eyelets for laces, including reinforcement',
          price: '₹199-499',
          duration: 'Same day',
          process: 'Mark positions, punch holes, install eyelets, reinforce if needed'
        },
        {
          name: 'Velcro Replacement',
          description: 'Replacement of worn or non-functional velcro strips',
          price: '₹249-599',
          duration: '1 day',
          process: 'Remove old velcro, clean surface, install new strips'
        },
        {
          name: 'Decorative Hardware Restoration',
          description: 'Restoration and replacement of decorative elements and hardware',
          price: '₹399-1,299',
          duration: '2-4 days',
          process: 'Identify original design, source matching components, install carefully'
        }
      ],
      materials: ['Brass Hardware', 'Stainless Steel', 'Plastic Components', 'YKK Zippers', 'Velcro Strips'],
      benefits: [
        'Restores full functionality',
        'Maintains original appearance',
        'High-quality replacement parts',
        'Prevents further damage',
        'Professional installation'
      ]
    }
  };

  const urgentRepairs = [
    {
      service: 'Emergency Heel Repair',
      description: 'Quick heel tip replacement for immediate use',
      time: '30 minutes',
      price: '₹299'
    },
    {
      service: 'Sole Separation Fix',
      description: 'Emergency reattachment of separated soles',
      time: '1 hour',
      price: '₹399'
    },
    {
      service: 'Strap Reattachment',
      description: 'Quick fix for broken straps or buckles',
      time: '45 minutes',
      price: '₹249'
    },
    {
      service: 'Zipper Quick Fix',
      description: 'Temporary zipper repair for immediate use',
      time: '30 minutes',
      price: '₹199'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-blue-50 pt-20">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-green-100 to-teal-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-6">
            Expert Shoe Repair
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Extend the life of your favorite shoes with our comprehensive repair services. From simple fixes to complete restoration, we bring your footwear back to life with expert craftsmanship.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-green-800 mb-2">💡 Quick Repair Quote</h3>
            <p className="text-green-700 mb-3">
              Just WhatsApp photos of your damaged shoes, our experts will assess and quote!
            </p>
            <p className="text-green-600 font-bold text-lg mb-4">📞 {whatsappNumber}</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg inline-block"
            >
              📱 Get Repair Quote
            </a>
          </div>
        </div>
      </section>

      {/* Urgent Repairs */}
      <section className="py-12 bg-red-50 border-y border-red-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-red-700 mb-8">
            🚨 Emergency Repair Services (Same Day)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {urgentRepairs.map((repair, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md border border-red-200">
                <h3 className="font-bold text-red-700 mb-2">{repair.service}</h3>
                <p className="text-sm text-gray-600 mb-3">{repair.description}</p>
                <div className="flex justify-between items-center">
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm font-semibold">
                    {repair.price}
                  </span>
                  <span className="text-gray-500 text-sm">⚡ {repair.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {Object.keys(repairServices).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md border border-gray-200'
                }`}
              >
                {repairServices[key].title.split(' &')[0]}
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
            <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-2">
                    {repairServices[activeTab].title}
                  </h2>
                  <p className="text-xl text-green-100 mb-4">
                    {repairServices[activeTab].subtitle}
                  </p>
                  <p className="text-lg leading-relaxed text-green-50">
                    {repairServices[activeTab].description}
                  </p>
                </div>
                <div className="relative">
                  <img
                    src={repairServices[activeTab].image}
                    alt={repairServices[activeTab].title}
                    className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Services Details */}
            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Our {repairServices[activeTab].title} Services
              </h3>
              
              <div className="space-y-6 mb-12">
                {repairServices[activeTab].services.map((service, index) => (
                  <div key={index} className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-6 shadow-lg border border-green-100">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2">
                        <h4 className="text-xl font-bold text-gray-800 mb-2">{service.name}</h4>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <p className="text-sm text-gray-500 italic">Process: {service.process}</p>
                      </div>
                      <div className="flex flex-col justify-center space-y-2">
                        <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-center">
                          <span className="font-bold">{service.price}</span>
                        </div>
                        <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg text-center">
                          <span className="text-sm">🕐 {service.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Materials & Benefits */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Materials We Use</h4>
                  <div className="space-y-2">
                    {repairServices[activeTab].materials.map((material, index) => (
                      <div key={index} className="flex items-center bg-white rounded-lg p-3 shadow-sm">
                        <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                        <span className="text-gray-700 font-medium">{material}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Benefits</h4>
                  <div className="space-y-2">
                    {repairServices[activeTab].benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center bg-white rounded-lg p-3 shadow-sm">
                        <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                        <span className="text-gray-700 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Need {repairServices[activeTab].title}?</h3>
                  <p className="text-lg mb-6 text-green-100">
                    📸 Send photos of your damaged shoes via WhatsApp for instant assessment and quote!
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg inline-block"
                  >
                    📱 Get Repair Quote
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

export default ShoeRepair;