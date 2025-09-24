import React from "react";
import { Building, Users, Heart, ArrowRight } from "lucide-react";
import partnershipsHero from "../assets/pediatric.jpg";

const Partnerships: React.FC = () => {
  const partnershipTypes = [
    {
      icon: Building,
      title: "Corporate Partnerships",
      description: "Leverage your company's resources and expertise to create meaningful impact.",
      benefits: [
        "Employee engagement opportunities",
        "CSR program enhancement",
        "Brand alignment with social impact",
        "Tax benefits"
      ]
    },
    {
      icon: Users,
      title: "Church & Faith Groups",
      description: "Mobilize your congregation to support healthcare missions and community development.",
      benefits: [
        "Mission trip opportunities",
        "Community outreach programs",
        "Faith-based healthcare initiatives",
        "Spiritual fulfillment"
      ]
    },
    {
      icon: Heart,
      title: "Community Organizations",
      description: "Collaborate with us to extend healthcare access in your local community.",
      benefits: [
        "Local impact creation",
        "Network expansion",
        "Resource sharing",
        "Community development"
      ]
    }
  ];

  const currentPartners = [
    { name: "Joanna Briggs Institute", type: "Research Partner", logo: "jbi-logo.jpg" },
    { name: "Kenya Ministry of Health", type: "Government Partner", logo: "moh-logo.jpg" },
    { name: "Tech for Good Foundation", type: "Technology Partner", logo: "tech-logo.jpg" },
    { name: "Global Health Alliance", type: "Implementation Partner", logo: "gha-logo.jpg" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-teal-900/80 to-blue-900/80 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={partnershipsHero} 
            alt="Partnerships with Ubuntu Afya - Make an Impact Together"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <span className="bg-yellow-400 text-black font-bold px-4 py-2 text-sm uppercase tracking-wide">
              PARTNERSHIPS
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Partner With Purpose
          </h1>
          
          <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            See how your church, business, or group can make an impact. Together, we can transform 
            healthcare access and build sustainable communities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-teal-800 font-bold px-8 py-3 rounded-full transition-colors flex items-center justify-center">
              <span>Become a Partner</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white font-bold px-8 py-3 rounded-full transition-colors border border-white">
              Download Partnership Guide
            </button>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-teal-800 mb-4">
              Why Partner With Ubuntu Afya?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a network of change-makers committed to transforming healthcare in underserved communities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Proven Impact",
                description: "Join an organization with demonstrated success in community healthcare.",
                metrics: ["290K+ Patients", "25 Kiosks", "50+ Communities"]
              },
              {
                title: "Sustainable Model",
                description: "Support a community-owned approach that creates lasting change.",
                metrics: ["Local Ownership", "Financial Sustainability", "System Integration"]
              },
              {
                title: "Strategic Alignment",
                description: "Align your organization with meaningful, measurable social impact.",
                metrics: ["Clear Metrics", "Regular Reporting", "Shared Values"]
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center">
                <h3 className="text-xl font-bold text-teal-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="space-y-1">
                  {item.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-teal-600 font-semibold text-sm">
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-teal-800 mb-4">
              Ways to Partner
            </h2>
            <p className="text-xl text-gray-600">
              Multiple pathways to create meaningful impact together
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {partnershipTypes.map((partnership, index) => {
              const IconComponent = partnership.icon;
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow">
                  <IconComponent className="w-12 h-12 text-teal-600 mb-4" />
                  <h3 className="text-xl font-bold text-teal-800 mb-3">{partnership.title}</h3>
                  <p className="text-gray-700 mb-6">{partnership.description}</p>
                  
                  <h4 className="font-semibold text-gray-800 mb-3">Benefits:</h4>
                  <ul className="space-y-2 mb-6">
                    {partnership.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-full font-semibold transition-colors">
                    Learn More
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-16 px-6 bg-teal-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Valued Partners</h2>
            <p className="text-xl opacity-90">
              Join these organizations making a difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentPartners.map((partner, index) => (
              <div key={index} className="bg-teal-700 p-6 rounded-lg text-center">
                <div className="h-16 bg-white/20 rounded flex items-center justify-center mb-4">
                  <span className="text-sm">Partner Logo</span>
                </div>
                <h3 className="font-bold mb-1">{partner.name}</h3>
                <p className="text-teal-200 text-sm">{partner.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-teal-800 mb-4">
              Start Your Partnership Journey
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { step: "1", title: "Initial Conversation", description: "Discuss your goals and explore alignment." },
              { step: "2", title: "Custom Proposal", description: "We create a partnership plan tailored to your organization." },
              { step: "3", title: "Launch & Impact", description: "Begin your partnership and start making a difference." }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-teal-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-teal-800 font-bold px-8 py-3 rounded-full transition-colors mr-4">
              Contact Our Team
            </button>
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-8 py-3 rounded-full transition-colors">
              Download Partnership Kit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnerships;