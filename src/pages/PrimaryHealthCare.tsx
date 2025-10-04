import React from "react";
import { ArrowRight, Target, Users, Heart, MapPin, Stethoscope, Baby, Activity, MessageCircle } from "lucide-react";
import UbuntuAfyaKiosk from "../assets/Ubuntu-Afya-Kiosks.jpg";
import Mfangano from "../assets/Mfangano.jpg";
import hospitalWaitingImage from "../assets/Ubuntu-Afya-Kiosks.jpg";
import ScrollToTop from "../components/common/ScrollToTop";

const PrimaryHealthCare: React.FC = () => {
  const services = [
    {
      icon: Heart,
      title: "Maternal & Child Health",
      description: "Comprehensive care for mothers and children, including prenatal care, safe deliveries, and pediatric services.",
      stats: ["85%", "Safe Deliveries", "60%", "Women & Children Served"]
    },
    {
      icon: Users,
      title: "Family Medicine",
      description: "Primary healthcare services for the entire family, from preventive care to treatment of common illnesses.",
      stats: ["290K+", "Patients Served", "25", "Kiosks Operating"]
    },
    {
      icon: MapPin,
      title: "Community Outreach",
      description: "Mobile health services and community health education programs reaching remote areas.",
      stats: ["50+", "Communities Reached", "24/7", "Emergency Services"]
    }
  ];

  const kioskFeatures = [
    "Community-owned and managed",
    "Local health workers trained and employed",
    "Essential medicines and supplies",
    "Digital health records (STONE-HMIS®)",
    "Referral system to higher-level facilities",
    "Health education and prevention programs"
  ];

  const impactAreas = [
    {
      number: "1",
      title: "Sexual and Reproductive Health (SRH)",
      description: "Our SRH services include education, counseling, and access to contraceptives.",
      icon: Heart,
      color: "ubuntu-blue"
    },
    {
      number: "2",
      title: "Community Outreach",
      description: "We engage with communities to provide essential health services and initiatives.",
      icon: Users,
      color: "ubuntu-blue"
    },
    {
      number: "3",
      title: "Community Engagement",
      description: "Our strong relationships with the communities we serve make it easier to implement health behavior change.",
      icon: MessageCircle,
      color: "ubuntu-blue"
    },
    {
      number: "4",
      title: "Maternal and Child Health (MCH)",
      description: "We support efforts to improve MCH through education, prenatal care and vaccination programs.",
      icon: Baby,
      color: "ubuntu-blue"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTop />
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${UbuntuAfyaKiosk})`
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-ubuntu-blue-900/80 to-ubuntu-blue-1000/80"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="mb-6">
            <span className="bg-ubuntu-orange-500 text-white font-bold px-4 py-2 text-sm uppercase tracking-wide">
              PRIMARY HEALTH CARE
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Ubuntu-Afya Kiosks: Healthcare at Your Doorstep
          </h1>
          
          <p className="text-xl lg:text-2xl mb-8 max-w-4xl leading-relaxed">
            Through our community-owned Ubuntu-Afya kiosks, we bring essential health services 
            closer to families in underserved communities, ensuring accountability and sustainability.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-ubuntu-blue-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-ubuntu-blue-600 mb-2">25</div>
              <div className="text-lg font-semibold text-gray-800">Kiosks Operating</div>
              <div className="text-gray-600">Across Kenya's rural communities</div>
            </div>
            <div className="bg-ubuntu-orange-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-ubuntu-orange-600 mb-2">290K+</div>
              <div className="text-lg font-semibold text-gray-800">Patients Served</div>
              <div className="text-gray-600">Since program inception</div>
            </div>
            <div className="bg-ubuntu-blue-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-ubuntu-blue-600 mb-2">60%</div>
              <div className="text-lg font-semibold text-gray-800">Women & Children</div>
              <div className="text-gray-600">Primary beneficiaries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ubuntu-blue-800 mb-4">
              Comprehensive Healthcare Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Ubuntu-Afya kiosks provide a full range of primary healthcare services 
              tailored to community needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-ubuntu-blue-100 rounded-lg mr-4">
                      <IconComponent className="w-8 h-8 text-ubuntu-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-ubuntu-blue-600">{service.stats[0]}</div>
                      <div className="text-sm text-gray-600">{service.stats[1]}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-ubuntu-orange-600">{service.stats[2]}</div>
                      <div className="text-sm text-gray-600">{service.stats[3]}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Kiosk Model Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={Mfangano} 
                  alt="Ubuntu-Afya Kiosk providing healthcare services"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-ubuntu-blue-800 mb-6">
                Community-Owned Healthcare Model
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Each Ubuntu-Afya kiosk is co-owned with local self-help groups, ensuring 
                community accountability and long-term sustainability. This model creates 
                lasting change by empowering communities to take ownership of their health.
              </p>
              
              <div className="space-y-4 mb-8">
                {kioskFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-ubuntu-orange-500 rounded-full mr-4"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="bg-ubuntu-blue-600 hover:bg-ubuntu-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center">
                <span>Learn About Our Model</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Side - Our Approach */}
            <div>
              <h2 className="text-4xl font-bold text-ubuntu-blue-800 mb-8">
                Our Approach
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Ubuntu Afya provides evidence-based, accessible, and sustainable 
                  medical and social health facilities in Kenya's rural and underserved 
                  communities. Our network of Ubuntu-Afya health kiosks is anchored on 
                  proprietary technology, evidence generation through pragmatic 
                  research and STONE-eHMIS®, an open-source Health Management and 
                  Information System. Its effective use places our facilities among Kenyan 
                  leaders in data-driven care.
                </p>
                <p>
                  These facilities offer a comprehensive range of services, including 
                  a full-time clinic, a dispensation for low-cost, high-quality essential 
                  medicines, laboratory services, Maternal and Child Health Services, 
                  Sexual and Reproductive Health Services, and HIV services.
                </p>
                <p>
                  Additionally and sustainability-wise, we add benefits like Dollar-Afya 
                  health savings accounts and microfinance services for patients and other 
                  health centers.
                </p>
                <p>
                  The kiosks are incorporated community savings and credit schemes 
                  enabling the community to co-own these health facilities and to generate 
                  revenues to access financial services thus generating revenue to 
                  subsidize healthcare costs. This dual approach not only improves health 
                  outcomes but also strengthens the community's economic resilience.
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl h-full">
                <img 
                  src={hospitalWaitingImage} 
                  alt="SERA Community Dispensary team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section - Redesigned */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-ubuntu-blue-800 mb-4">
              Impact
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {impactAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex">
                    {/* Left side - Number */}
                    <div className="bg-ubuntu-blue-600 w-20 flex items-center justify-center">
                      <span className="text-white text-4xl font-bold">{area.number}</span>
                    </div>
                    
                    {/* Right side - Content */}
                    <div className="flex-1 p-6">
                      <div className="flex items-start mb-3">
                        <IconComponent className="w-6 h-6 text-ubuntu-blue-600 mr-3 mt-1 flex-shrink-0" />
                        <h3 className="text-xl font-bold text-gray-900">
                          {area.title}
                        </h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Stats Row */}
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-ubuntu-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-ubuntu-blue-600 mb-2">80%</div>
              <div className="text-gray-700 font-semibold">Reduction in Travel Time</div>
              <div className="text-sm text-gray-600 mt-2">From 25+ km to walking distance</div>
            </div>
            <div className="text-center p-6 bg-ubuntu-orange-50 rounded-lg">
              <div className="text-3xl font-bold text-ubuntu-orange-600 mb-2">85%</div>
              <div className="text-gray-700 font-semibold">Improved Health Outcomes</div>
              <div className="text-sm text-gray-600 mt-2">In maternal and child health</div>
            </div>
            <div className="text-center p-6 bg-ubuntu-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-ubuntu-blue-600 mb-2">50+</div>
              <div className="text-gray-700 font-semibold">Communities Reached</div>
              <div className="text-sm text-gray-600 mt-2">Across Kenya's rural areas</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrimaryHealthCare;