import React from "react";
import { ArrowRight, Database, TrendingUp, Activity, FileText, Users, Pill, DollarSign, Home } from "lucide-react";
import ScrollToTop from "../components/common/ScrollToTop";

import HeroHT from "../assets/hero-HT.jpg";
import HealthTechnology from "../assets/HealthTechnology.jpg";

const StoneHMIS: React.FC = () => {
  const clinicalModules = [
    {
      icon: Users,
      title: "Registration Module",
      description: "Streamlined patient registration and demographic data management"
    },
    {
      icon: Activity,
      title: "Clinical Module",
      description: "Comprehensive clinical documentation and patient care tracking"
    },
    {
      icon: FileText,
      title: "Laboratory Module",
      description: "Integrated lab test ordering, results management, and reporting"
    },
    {
      icon: Pill,
      title: "Pharmacy Module",
      description: "Medication dispensing, inventory management, and drug tracking"
    },
    {
      icon: DollarSign,
      title: "Finance and Administration Module",
      description: "Billing, payments, and administrative operations management"
    },
    {
      icon: Home,
      title: "Community Module",
      description: "Community health worker tools and outreach program management"
    }
  ];

  const impactAreas = [
    {
      number: "1",
      title: "Operational Efficiency",
      description: "Reduced paperwork and administrative burdens",
      icon: TrendingUp
    },
    {
      number: "2",
      title: "Data Management",
      description: "Streamlined the collection, storage, and analysis of health data.",
      icon: Database
    },
    {
      number: "3",
      title: "Public Health Response",
      description: "STONE-HMIS ability to fast track disease patterns and treatment outcomes has improved how we respond to public health emergencies.",
      icon: Activity
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
            backgroundImage: `url(${HeroHT})`
          }}
        />
          
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-ubuntu-blue-900/80 to-ubuntu-blue-1000/80"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="mb-6">
            <span className="bg-ubuntu-orange-500 text-white font-bold px-4 py-2 text-sm uppercase tracking-wide">
              HEALTH TECHNOLOGY
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            STONE-HMIS®
          </h1>
          
          <p className="text-xl lg:text-2xl mb-8 max-w-4xl leading-relaxed">
            A comprehensive health management and information system designed to transform 
            healthcare delivery in Kenya by integrating all hospital management modules 
            under a singular, accessible platform.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-ubuntu-blue-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-ubuntu-blue-600 mb-2">25+</div>
              <div className="text-lg font-semibold text-gray-800">Active Users</div>
              <div className="text-gray-600">Healthcare facilities using STONE-HMIS®</div>
            </div>
            <div className="bg-ubuntu-orange-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-ubuntu-orange-600 mb-2">6</div>
              <div className="text-lg font-semibold text-gray-800">Clinical Modules</div>
              <div className="text-gray-600">Integrated healthcare management tools</div>
            </div>
            <div className="bg-ubuntu-blue-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-ubuntu-blue-600 mb-2">100%</div>
              <div className="text-lg font-semibold text-gray-800">Free & Open-Source</div>
              <div className="text-gray-600">Supporting sustainable growth and impact</div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-ubuntu-blue-800 mb-4">
              Overview
            </h2>
          </div>
          
          <div className="bg-white p-10 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Healthcare management is already undergoing substantial change with constant needs 
              pointing to the development of a Health Information system that integrates all hospital 
              management modules under a singular system. This has excluded the majority of patients 
              and providers in Kenya from accessing the benefits of health technologies and prevented 
              the comprehensive collection of national health data to aid in decision-making.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              STONE-HMIS® addresses this critical gap by providing an accessible, comprehensive solution 
              that brings the benefits of health technologies to providers delivering the majority of 
              healthcare in Kenya.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Side - Our Approach */}
            <div>
              <h2 className="text-4xl font-bold text-ubuntu-blue-800 mb-8">
                Our Approach
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  We designed and deployed STONE-HMIS®, a health management and information 
                  system to track patient care and improve all management functions within our 
                  network of Ubuntu-Afya Kiosk medical centers. STONE-HMIS® which can be adopted 
                  by healthcare organizations both in the public and private realm, operates 
                  across disease verticals and at all levels of care.
                </p>
                <p>
                  Under a unified system, the health management information system offers 
                  specialized clinical modules that work seamlessly together to provide 
                  comprehensive healthcare management.
                </p>
                <p>
                  STONE-HMIS® has also been designed to seamlessly integrate with existing 
                  clinical workflows of healthcare providers. We believe that by bringing the 
                  benefits of health technologies to providers delivering the majority of 
                  healthcare in Kenya, we can improve quality of care for patients and existing 
                  health databases and reporting systems.
                </p>
                <p>
                  STONE-HMIS® is a free-ware, supporting its potential for growth and impact 
                  in the coming years. Sustained impact will also leverage health data generated 
                  by the system while costs of development stand to decrease over time.
                </p>
              </div>
            </div>

            {/* Right Side - Placeholder for Image */}
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl  bg-gradient-to-br from-ubuntu-blue-100 to-ubuntu-blue-200 flex items-center justify-center">
                {/* Right Side - Image */}
                <div className="relative">
                  <div className="rounded-lg overflow-hidden shadow-2xl h-full">
                    <img 
                      src={HealthTechnology} 
                      alt="STONE-HMIS workflow"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Modules Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ubuntu-blue-800 mb-4">
              Specialized Clinical Modules
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              STONE-HMIS® offers a comprehensive suite of integrated modules designed 
              to streamline every aspect of healthcare management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clinicalModules.map((module, index) => {
              const IconComponent = module.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start mb-4">
                    <div className="p-3 bg-ubuntu-blue-100 rounded-lg mr-4">
                      <IconComponent className="w-8 h-8 text-ubuntu-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mt-2">{module.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{module.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-ubuntu-blue-800 mb-4">
              Impact
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {impactAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex flex-col">
                    {/* Top - Number */}
                    <div className="bg-ubuntu-blue-600 h-20 flex items-center justify-center">
                      <span className="text-white text-4xl font-bold">{area.number}</span>
                    </div>
                    
                    {/* Bottom - Content */}
                    <div className="p-6">
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

          {/* Key Benefits Section */}
          <div className="mt-16 bg-ubuntu-blue-50 p-10 rounded-lg">
            <h3 className="text-2xl font-bold text-ubuntu-blue-800 mb-6 text-center">
              Key Benefits of STONE-HMIS®
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-ubuntu-orange-500 rounded-full mr-4 mt-2"></div>
                <p className="text-gray-700">Seamless integration with existing clinical workflows</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-ubuntu-orange-500 rounded-full mr-4 mt-2"></div>
                <p className="text-gray-700">Free and open-source for maximum accessibility</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-ubuntu-orange-500 rounded-full mr-4 mt-2"></div>
                <p className="text-gray-700">Operates across all disease verticals and care levels</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-ubuntu-orange-500 rounded-full mr-4 mt-2"></div>
                <p className="text-gray-700">Comprehensive data collection for better decision-making</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-ubuntu-orange-500 rounded-full mr-4 mt-2"></div>
                <p className="text-gray-700">Suitable for both public and private healthcare organizations</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-ubuntu-orange-500 rounded-full mr-4 mt-2"></div>
                <p className="text-gray-700">Decreasing development costs over time</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StoneHMIS;