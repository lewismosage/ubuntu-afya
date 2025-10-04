import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import healthierImage from '../assets/healthier.jpg';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={healthierImage} 
          alt="Healthy community" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-6xl mx-auto">
          {/* Main Message */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Your support powers long-term, community-driven healthcare.
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
              Whether it's a mother delivering safely, a child receiving
              essential medicine, or a chronic condition diagnosed early—your
              support matters.
            </p>

            <Link
              to="/donate"
              className="inline-flex items-center space-x-2 bg-ubuntu-orange-500 hover:bg-ubuntu-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 text-lg"
            >
              <span>Support Lasting Care</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;