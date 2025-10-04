import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import modalcare from "../assets/modalcare.jpg"

const Model: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-teal-900/80 to-blue-900/80 text-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={modalcare} 
            alt="Ubuntu-Afya Community Healthcare"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div> {/* Overlay for better text readability */}
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <span className="bg-yellow-400 text-black font-bold px-4 py-2 text-sm uppercase tracking-wide">
              OUR MODEL
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Ubuntu-Afya: Community-Owned Healthcare Model
          </h1>
          
          <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Ubuntu Transforming healthcare delivery through community ownership, financial sustainability, 
            and integrated services across Kenya's rural and underserved communities.
           
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-teal-800 font-bold px-8 py-3 rounded-full transition-colors flex items-center justify-center">
              <span>Learn How It Works</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white font-bold px-8 py-3 rounded-full transition-colors border border-white">
              Download PDF
            </button>
          </div>
        </div>
      </section>

      {/* Core Principles Grid */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="bg-gray-50 min-h-screen flex flex-col items-center px-6 py-10">
          {/* Header */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            Ubuntu-Afya: Community-Owned Healthcare Model
          </h1>
          <p className="text-gray-600 text-center mt-3 max-w-3xl">
          Ubuntu Afya is rooted in community ownership. Each clinicis owned with local self-help groups, ensuring accountability and long-term commitment. Community savings schemes help families afford care and support clinic operations. Partnership with county goverments provide additional staff and supplies, embedding clinics into the broader health system 
            Transforming healthcare delivery through community ownership, financial sustainability,
            and integrated services across Kenya&apos;s rural and underserved communities.
          </p>

          {/* Flower Layout */}
          <div className="relative flex flex-col md:flex-row justify-center items-center mt-12 gap-10">
            {/* Left side content */}
            <div className="space-y-6 max-w-sm">
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Community Ownership</h3>
                <p className="text-gray-600 text-sm">
                  Self-help groups co-own and co-manage healthcare kiosks, ensuring local control and accountability in health service delivery.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Empowered Communities</h3>
                <p className="text-gray-600 text-sm">
                  Strengthening local capacity and leadership while improving health outcomes through community-driven solutions.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Resilient Systems</h3>
                <p className="text-gray-600 text-sm">
                  Building robust healthcare infrastructure that withstands challenges and adapts to community needs over time.
                </p>
              </div>
            </div>

            {/* Flower center */}
            <div className="relative flex flex-col items-center justify-center">
              <div className="grid grid-cols-2 gap-6">
                {/* 6 Petals */}
                <div className="bg-purple-100 rounded-full w-28 h-28 flex items-center justify-center shadow-md">
                  <span className="text-2xl">👥</span>
                </div>
                <div className="bg-purple-100 rounded-full w-28 h-28 flex items-center justify-center shadow-md">
                  <span className="text-2xl">💰</span>
                </div>
                <div className="bg-purple-100 rounded-full w-28 h-28 flex items-center justify-center shadow-md">
                  <span className="text-2xl">🏥</span>
                </div>
                <div className="bg-purple-100 rounded-full w-28 h-28 flex items-center justify-center shadow-md">
                  <span className="text-2xl">📊</span>
                </div>
                <div className="bg-purple-100 rounded-full w-28 h-28 flex items-center justify-center shadow-md">
                  <span className="text-2xl">🛡️</span>
                </div>
                <div className="bg-purple-100 rounded-full w-28 h-28 flex items-center justify-center shadow-md">
                  <span className="text-2xl">⚕️</span>
                </div>
              </div>
            </div>

            {/* Right side content */}
            <div className="space-y-6 max-w-sm">
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Financial Sustainability</h3>
                <p className="text-gray-600 text-sm">
                  Community savings and credit schemes subsidize healthcare costs while generating dividends for sustainable operations.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Integrated Health Services</h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive care including maternal health, child wellness, infectious disease treatment, HIV care, and chronic disease management.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Ubuntu-Afya Kiosk</h3>
                <p className="text-gray-600 text-sm">
                  Central hub providing accessible, quality healthcare services owned and operated by the community it serves.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl">
            <div className="bg-purple-50 p-6 rounded-xl shadow-sm text-center">
              <h3 className="font-semibold text-lg text-gray-800">Affordable Healthcare</h3>
              <p className="text-gray-600 text-sm mt-2">
                Reduced costs through community subsidies and efficient service delivery make quality care accessible to all income levels.
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl shadow-sm text-center">
              <h3 className="font-semibold text-lg text-gray-800">Empowered Communities</h3>
              <p className="text-gray-600 text-sm mt-2">
                Local ownership builds capacity, creates jobs, and strengthens social cohesion while addressing health disparities.
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl shadow-sm text-center">
              <h3 className="font-semibold text-lg text-gray-800">Resilient Health Systems</h3>
              <p className="text-gray-600 text-sm mt-2">
                Sustainable model creates lasting infrastructure that serves communities for generations while adapting to evolving needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Model; 