import React from "react";
import { Building, Users, Heart, ArrowRight } from "lucide-react";
import partnershipsHero from "../assets/pediatric.jpg";

// Import partner logos
import countyInnovationLogo from "../assets/County-Innovation-Challenge-Fund.png";
import carbonTrustLogo from "../assets/Carbon-Trust.png";
import lilianeFondsLogo from "../assets/Liliane-Fonds.png";
import internationalTransactionsLogo from "../assets/International-Transactions-Clinic.png";
import cheshireDisabilityLogo from "../assets/Cheshire-Disability-Services-Kenya.png";
import turkanaCountyLogo from "../assets/Turkana-COunty.png";
import grandChallengesLogo from "../assets/Grand-challenges.png";
import twiningLogo from "../assets/Twining.png";
import pfizerLogo from "../assets/The-Pfizer.png";
import ukaidLogo from "../assets/UKaid.png";
import jbiLogo from "../assets/JBI.png";
import innovationsLogo from "../assets/Innovations-in-healthcare.png";

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
    { name: "County Innovation Challenge Fund", type: "Government Partner", logo: countyInnovationLogo },
    { name: "Carbon Trust", type: "Environmental Partner", logo: carbonTrustLogo },
    { name: "Liliane Fonds", type: "Disability Services Partner", logo: lilianeFondsLogo },
    { name: "International Transactions Clinic", type: "Academic Partner", logo: internationalTransactionsLogo },
    { name: "Cheshire Disability Services Kenya", type: "Community Partner", logo: cheshireDisabilityLogo },
    { name: "Turkana County Government", type: "Government Partner", logo: turkanaCountyLogo },
    { name: "Grand Challenges Canada", type: "Research Partner", logo: grandChallengesLogo },
    { name: "Twinings", type: "Corporate Partner", logo: twiningLogo },
    { name: "The Pfizer Foundation", type: "Pharmaceutical Partner", logo: pfizerLogo },
    { name: "UKAID", type: "International Development Partner", logo: ukaidLogo },
    { name: "Joanna Briggs Institute", type: "Research Partner", logo: jbiLogo },
    { name: "Innovations in Healthcare", type: "Healthcare Innovation Partner", logo: innovationsLogo }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-ubuntu-blue-900/80 to-ubuntu-blue-800/80 text-white">
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
            <span className="bg-ubuntu-orange-500 text-white font-bold px-4 py-2 text-sm uppercase tracking-wide">
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
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-ubuntu-blue-800 mb-4">
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
                <h3 className="text-xl font-bold text-ubuntu-blue-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="space-y-1">
                  {item.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-ubuntu-blue-600 font-semibold text-sm">
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
            <h2 className="text-4xl font-bold text-ubuntu-blue-800 mb-4">
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
                  <IconComponent className="w-12 h-12 text-ubuntu-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-ubuntu-blue-800 mb-3">{partnership.title}</h3>
                  <p className="text-gray-700 mb-6">{partnership.description}</p>
                  
                  <h4 className="font-semibold text-gray-800 mb-3">Benefits:</h4>
                  <ul className="space-y-2 mb-6">
                    {partnership.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-ubuntu-orange-500 rounded-full mr-3"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-16 px-6 bg-ubuntu-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Valued Partners</h2>
            <p className="text-xl opacity-90">
              Join these organizations making a difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentPartners.map((partner, index) => (
              <div key={index} className="bg-ubuntu-blue-700 p-6 rounded-lg text-center">
                <div className="h-16 bg-white/10 rounded flex items-center justify-center mb-4 p-2">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h3 className="font-bold mb-1 text-sm">{partner.name}</h3>
                <p className="text-ubuntu-blue-200 text-xs">{partner.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-ubuntu-blue-800 mb-4">
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
                <div className="w-12 h-12 bg-ubuntu-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-ubuntu-blue-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-ubuntu-orange-500 hover:bg-ubuntu-orange-600 text-white font-bold px-8 py-3 rounded-full transition-colors mr-4">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnerships;