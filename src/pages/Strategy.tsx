import React from "react";
import { ArrowRight } from "lucide-react";
import strategy from "../assets/strategy.jpg";

const Strategy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-teal-900/80 to-blue-900/80 text-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={strategy}
            alt="Ubuntu-Afya Strategic Plan"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>{" "}
          {/* Overlay for better text readability */}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <span className="bg-yellow-400 text-black font-bold px-4 py-2 text-sm uppercase tracking-wide">
              OUR STRATEGY
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Ubuntu-Afya: Strategic Plan
          </h1>

          <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Transforming rural healthcare across Kenya through community-driven
            innovation and sustainable partnerships.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-teal-800 font-bold px-8 py-3 rounded-full transition-colors flex items-center justify-center">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white font-bold px-8 py-3 rounded-full transition-colors border border-white">
              Download Strategy
            </button>
          </div>
        </div>
      </section>

      {/* Strategic Plan Section (Replaces middle part) */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold">
              Ubuntu-Afya Strategic Plan
            </h1>
            <p className="text-lg mt-2 font-medium text-gray-700">2023–2026</p>
            <p className="mt-4 max-w-3xl mx-auto text-gray-600">
              We believe the future of healthcare in Africa lies in models that are both community-led and innovation-driven. Our strategy rests on three pillars: building and sustaining strong community health systems through Ubuntu-Afya centers, expanding digital health tools like STONE-HMIS® to ensure real-time, reliable data, and translating research into practice by training health workers and implementing evidence-based interventions. These pillars work together to strengthen health systems from the ground up, creating long-term change for the communities we serve.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {[
              {
                year: "2023: Foundation",
                text: "Website refresh, social media strategy launch, and initial fundraising campaigns to strengthen organizational viability and donor engagement.",
              },
              {
                year: "2024: Expansion",
                text: "Scale Ubuntu-Afya Kiosks to underserved communities while launching comprehensive grant applications and partnership development initiatives.",
              },
              {
                year: "2025: Integration",
                text: "Deploy STONE-HMIS© digital health system upgrades and establish community savings schemes to empower Self-Help Groups across target regions.",
              },
              {
                year: "2026: Sustainability",
                text: "Achieve full program sustainability through diversified funding streams and complete integration of digital health solutions with community ownership models.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="bg-blue-900 text-white font-bold w-10 h-10 flex items-center justify-center rounded">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold">{item.year}</h3>
                  <p className="text-gray-700">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Strategic Focus Areas */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Strategic Focus Areas</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-blue-900">
                  Fundraising & Partnerships
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Building sustainable revenue streams through diversified donor
                  relationships, grant opportunities, and strategic partnerships
                  with healthcare organizations.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-blue-900">
                  Program Expansion
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Scaling Ubuntu-Afya Kiosks to reach more rural communities
                  while securing long-term operational sustainability and
                  community ownership.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-blue-900">
                  Communications & Visibility
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Enhancing organizational presence through digital platforms,
                  storytelling, and stakeholder engagement to amplify impact and
                  attract support.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-blue-900">
                  Monitoring & Evaluation
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Implementing robust data collection systems to track outcomes,
                  measure impact, and demonstrate accountability to donors and
                  communities.
                </p>
              </div>
            </div>
          </div>

          {/* Impact Achievements */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Impact Achievements</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl font-bold text-blue-900">25</p>
                <p className="text-gray-600 text-sm mt-2">
                  Ubuntu-Afya Kiosks strategically located near key areas to
                  serve remote communities
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-900">290K+</p>
                <p className="text-gray-600 text-sm mt-2">
                  Patients Served through accessible primary healthcare services
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-900">60%</p>
                <p className="text-gray-600 text-sm mt-2">
                  Women & Children under 5 years old accessing care,
                  safeguarding most vulnerable populations
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-900">250%</p>
                <p className="text-gray-600 text-sm mt-2">
                  HIV Treatment Growth increase achieved during COVID-19
                  pandemic response
                </p>
              </div>
            </div>
          </div>

          {/* Priority Implementation Framework */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">
              Priority Implementation Framework
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow">
                <h3 className="font-semibold text-blue-900">
                  High Priority - Digital Health Integration
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  STONE-HMIS© system upgrade and expansion requires immediate
                  partner support and financing for seamless healthcare data
                  management.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow">
                <h3 className="font-semibold text-blue-900">
                  Medium Priority - Community Empowerment
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Self-Help Group development and savings schemes need strategic
                  partnerships to ensure sustainable community ownership models.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow">
                <h3 className="font-semibold text-blue-900">
                  Standard Priority - Communications Enhancement
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Strengthening visibility through digital and social media
                  campaigns and donor engagement to build confidence and attract
                  support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Strategy;
