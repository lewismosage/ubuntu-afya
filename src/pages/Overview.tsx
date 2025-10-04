import React from "react";
import overviewImage from "../assets/overview.avif";
import pediatricImage from "../assets/pediatric.jpg";
import overviewhero from "../assets/healthier.jpg";
import overviewHeroImage from "../assets/OverviewHero.jpg";
import clinicImage from "../assets/clinic.avif";
import mission2Image from "../assets/mission-2.jpg";
import mission3Image from "../assets/mission-3.jpg";
import vision1Image from "../assets/vission-1.jpg";
import vision2Image from "../assets/vission-2.jpg";

const Overview: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* First Section - Hero with split layout */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Overview label */}
          <div className="mb-12">
            <span className="bg-ubuntu-orange-500 text-white font-bold px-4 py-2 text-sm uppercase tracking-wide">
              OVERVIEW
            </span>
          </div>

          {/* Split layout - Title left, description right */}
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-ubuntu-blue-800 leading-tight">
                Building a Healthier Future for Every Community
              </h1>
            </div>
            <div className="flex items-center">
              <p className="text-xl text-gray-600 leading-relaxed">
                At Obuntu Afya, we believe everyone no matter where they live
                deserves access to high quality, compassionate care.
              </p>
            </div>
          </div>

          {/* Hero image */}
          <div className="w-full h-96 rounded-lg mb-16 overflow-hidden shadow-lg">
            <img
              src={overviewhero}
              alt="Building a healthier future for every community"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Second Section - Mission Content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          {/* Opening paragraph */}
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            That's why we work alongside communities to build healthcare systems
            that last.
          </p>

          {/* Three column text */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 text-center">
            <div>
              <p className="text-base text-gray-600 leading-relaxed">
                Our work isn't just about building clinics it's about building
                systems.
              </p>
            </div>
            <div>
              <p className="text-base text-gray-600 leading-relaxed">
                Not just access, but excellence.
              </p>
            </div>
            <div>
              <p className="text-base text-gray-600 leading-relaxed">
                Not just care, but compassion and continuity.
              </p>
            </div>
          </div>

          {/* Bottom paragraph */}
          <p className="text-base text-gray-600 mb-16 leading-relaxed">
            We bring projects to life with local teams, essential services, and
            sustainable systems that meet real needs, every day.
          </p>

          {/* Mission & Vision with images */}
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            {/* Mission column */}
            <div className="text-left">
              <h3 className="text-2xl font-bold text-ubuntu-orange-600 mb-4">
                Our Mission
              </h3>
              <p className="text-ubuntu-blue-800 font-semibold mb-8 leading-relaxed">
                To strengthen community owned health systems and expand access
                to affordable care in Kenya's underserved communities.
              </p>

              {/* Mission images grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="h-48 rounded overflow-hidden">
                  <img
                    src={clinicImage}
                    alt="Ubuntu Afya clinic providing healthcare services"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-48 rounded overflow-hidden">
                  <img
                    src={mission2Image}
                    alt="Ubuntu Afya healthcare worker providing care"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-48 rounded overflow-hidden col-span-2">
                  <img
                    src={mission3Image}
                    alt="Ubuntu Afya medical center facility"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Vision column */}
            <div className="text-left">
              <h3 className="text-2xl font-bold text-ubuntu-orange-600 mb-4">
                Our Vision
              </h3>
              <p className="text-ubuntu-blue-800 font-semibold mb-8 leading-relaxed">
                A future where African health systems are locally led, resilient
                and equitable
              </p>

              {/* Vision images grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="h-48 rounded overflow-hidden">
                  <img
                    src={vision1Image}
                    alt="Healthcare worker using StoneHMIS system"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-48 rounded overflow-hidden">
                  <img
                    src={vision2Image}
                    alt="Laboratory technician examining samples under microscope"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Section - 2030 Goals */}
      <section className="py-20 px-6 bg-ubuntu-blue-50 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-ubuntu-blue-800 mb-4">
            Our goal by 2030:
          </h2>

          <div className="text-4xl font-bold mb-12 text-ubuntu-blue-800">
            3.6 million patients served, countless communities strengthened.
          </div>

          <p className="text-lg mb-16 leading-relaxed text-gray-700">
            We'll get there by deepening our programs, expanding innovative care
            models, and building healthcare systems that last... led by local
            teams, sustained by smart investment.
          </p>

          {/* Overview image */}
          <div className="w-full max-w-4xl mx-auto mb-16">
            <div className="w-full h-100 rounded-lg overflow-hidden shadow-2xl">
              <img
                src={overviewHeroImage}
                alt="Healthcare worker taking patient's blood pressure - Ubuntu Afya in action"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <button className="bg-ubuntu-orange-500 hover:bg-ubuntu-orange-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200">
            GET INVOLVED
          </button>
        </div>
      </section>

      {/* Fifth Section - Call to Action */}
      <section className="bg-ubuntu-blue-600 text-white relative overflow-hidden">
        <div className="grid lg:grid-cols-2 items-stretch min-h-[500px]">
          {/* Left side - Pediatric care image - Full coverage */}
          <div className="relative">
            <img
              src={pediatricImage}
              alt="Pediatric care moment showing compassionate healthcare"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col justify-center px-6">
            <h2 className="text-4xl font-bold mb-8 leading-tight">
              Let's transform lives and build healthier futures.
            </h2>

            <p className="text-xl mb-8 leading-relaxed">
              Join us in creating lasting access to care... built by local teams
              and powered by your support. Together, we can transform lives and
              build healthier futures.
            </p>

            <button className="bg-ubuntu-orange-500 hover:bg-ubuntu-orange-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200">
              Support Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;
