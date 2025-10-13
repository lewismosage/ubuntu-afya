import React from "react";
import healthierImage from "../assets/healthier.jpg";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={healthierImage}
          alt="Healthy community"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Central Container Overlay */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 w-full max-w-5xl px-6">
        <div className="bg-white rounded-lg shadow-2xl p-12 mx-auto">
          <div className="text-center space-y-6">
            {/* Bold Heading */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Ubuntu Afya equips communities in Kenya with the tools they need
              to build sustainable healthcare systems and unlock their
              potential.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
