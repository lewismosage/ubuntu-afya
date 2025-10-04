import React from "react";
import { ArrowRight, Target, Users, Heart, MapPin } from "lucide-react";
import UbuntuAfyaKiosk from "../assets/Ubuntu-Afya-Kiosks.jpg";
import hospitalWaitingImage from "../assets/Ubuntu-Afya-Kiosks.jpg";

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-ubuntu-blue-900 to-ubuntu-blue-800 text-white">
        <div className="max-w-7xl mx-auto">
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
            
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={UbuntuAfyaKiosk} 
                  alt="Ubuntu-Afya Kiosk providing healthcare services"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories Section */}
      <section className="py-20 px-6 bg-ubuntu-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ubuntu-blue-800 mb-4">
              Real Impact in Communities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our Ubuntu-Afya kiosks are transforming healthcare access 
              in rural communities across Kenya.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <img 
                  src={hospitalWaitingImage} 
                  alt="Community healthcare in action"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Reducing Travel Time by 80%
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Before Ubuntu-Afya kiosks, families in rural areas had to travel 25+ kilometers 
                to reach the nearest health facility. Now, essential healthcare is available 
                within walking distance, reducing travel time and costs significantly.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <Target className="w-16 h-16 text-ubuntu-blue-600 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Improving Health Outcomes
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our community-based approach has led to improved maternal and child health 
                outcomes, increased immunization rates, and better management of chronic 
                conditions through regular monitoring and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-ubuntu-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Support Primary Healthcare in Rural Communities
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Help us expand our Ubuntu-Afya kiosk network to reach more communities 
            in need of essential healthcare services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-ubuntu-orange-500 hover:bg-ubuntu-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Support Our Work
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-ubuntu-blue-600 transition-colors">
              Learn About Volunteering
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrimaryHealthCare;
