import React from "react";
import { ArrowRight, Cpu, Database, Smartphone, Cloud, Shield, BarChart3 } from "lucide-react";
import HealthTechnologyImage from "../assets/HealthTechnology.jpg";
import vision1Image from "../assets/vission-1.jpg";
import ScrollToTop from "../components/common/ScrollToTop";

const HealthTechnology: React.FC = () => {
  const features = [
    {
      icon: Database,
      title: "Real-time Data Collection",
      description: "Capture patient data, treatment outcomes, and health indicators in real-time across all connected facilities.",
      stats: ["100%", "Real-time Data", "24/7", "System Availability"]
    },
    {
      icon: Smartphone,
      title: "Mobile Health Records",
      description: "Access patient records, update treatments, and coordinate care using mobile devices and tablets.",
      stats: ["50+", "Clinics Connected", "1000+", "Health Workers"]
    },
    {
      icon: Cloud,
      title: "Cloud-based Platform",
      description: "Secure, scalable cloud infrastructure ensuring data availability and system reliability across all locations.",
      stats: ["99.9%", "Uptime", "Secure", "Data Storage"]
    }
  ];

  const systemCapabilities = [
    "Electronic Health Records (EHR)",
    "Patient registration and management",
    "Treatment tracking and outcomes",
    "Medication inventory management",
    "Referral system coordination",
    "Health reporting and analytics",
    "Mobile app for health workers",
    "Data visualization dashboards"
  ];

  const benefits = [
    {
      icon: BarChart3,
      title: "Improved Decision Making",
      description: "Real-time data enables health workers and administrators to make informed decisions about patient care and resource allocation."
    },
    {
      icon: Shield,
      title: "Enhanced Care Coordination",
      description: "Seamless information sharing between facilities ensures continuity of care and reduces medical errors."
    },
    {
      icon: Cpu,
      title: "Operational Efficiency",
      description: "Automated processes and digital workflows reduce administrative burden and improve service delivery."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTop />
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-ubuntu-orange-600 to-ubuntu-orange-500 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <span className="bg-white text-ubuntu-orange-600 font-bold px-4 py-2 text-sm uppercase tracking-wide">
              HEALTH TECHNOLOGY
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            STONE-HMIS®: Digital Health Innovation
          </h1>
          
          <p className="text-xl lg:text-2xl mb-8 max-w-4xl leading-relaxed">
            Our STONE-HMIS® connects clinics, communities, and county governments with real-time data 
            to improve care, strengthen referrals, and guide decisions across health systems.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-ubuntu-orange-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-ubuntu-orange-600 mb-2">100%</div>
              <div className="text-lg font-semibold text-gray-800">Real-time Data</div>
              <div className="text-gray-600">Instant access to health information</div>
            </div>
            <div className="bg-ubuntu-blue-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-ubuntu-blue-600 mb-2">50+</div>
              <div className="text-lg font-semibold text-gray-800">Clinics Connected</div>
              <div className="text-gray-600">Across Kenya's health network</div>
            </div>
            <div className="bg-ubuntu-orange-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-ubuntu-orange-600 mb-2">24/7</div>
              <div className="text-lg font-semibold text-gray-800">System Availability</div>
              <div className="text-gray-600">Reliable cloud infrastructure</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ubuntu-blue-800 mb-4">
              Advanced Health Information System
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              STONE-HMIS® provides comprehensive digital health solutions designed 
              specifically for resource-limited settings.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-ubuntu-orange-100 rounded-lg mr-4">
                      <IconComponent className="w-8 h-8 text-ubuntu-orange-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">{feature.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-ubuntu-orange-600">{feature.stats[0]}</div>
                      <div className="text-sm text-gray-600">{feature.stats[1]}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-ubuntu-blue-600">{feature.stats[2]}</div>
                      <div className="text-sm text-gray-600">{feature.stats[3]}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* System Capabilities Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-ubuntu-blue-800 mb-6">
                Comprehensive Health Management
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                STONE-HMIS® integrates all aspects of healthcare delivery into a single, 
                user-friendly platform that works seamlessly across different devices and locations.
              </p>
              
              <div className="space-y-4 mb-8">
                {systemCapabilities.map((capability, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-ubuntu-orange-500 rounded-full mr-4"></div>
                    <span className="text-gray-700">{capability}</span>
                  </div>
                ))}
              </div>

              <button className="bg-ubuntu-orange-500 hover:bg-ubuntu-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center">
                <span>Request Demo</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
            
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={HealthTechnologyImage} 
                  alt="STONE-HMIS system in action"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-ubuntu-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ubuntu-blue-800 mb-4">
              Transforming Healthcare Delivery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how STONE-HMIS® is revolutionizing healthcare management 
              and improving patient outcomes across Kenya.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="mb-6">
                    <IconComponent className="w-16 h-16 text-ubuntu-orange-600 mx-auto" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={vision1Image} 
                  alt="Healthcare worker using STONE-HMIS system"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-ubuntu-blue-800 mb-6">
                Easy Implementation & Training
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our team provides comprehensive training and ongoing support to ensure 
                smooth implementation and maximum utilization of the STONE-HMIS® system.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-ubuntu-orange-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">System Setup & Configuration</h4>
                    <p className="text-gray-600">Custom installation and configuration tailored to your facility's needs.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-ubuntu-orange-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Staff Training & Support</h4>
                    <p className="text-gray-600">Comprehensive training programs for all health workers and administrators.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-ubuntu-orange-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Ongoing Maintenance</h4>
                    <p className="text-gray-600">Continuous technical support and system updates to ensure optimal performance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-ubuntu-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Digitize Your Health Facility?
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Join the growing network of health facilities using STONE-HMIS® 
            to improve patient care and operational efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-ubuntu-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule a Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-ubuntu-orange-600 transition-colors">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthTechnology;
