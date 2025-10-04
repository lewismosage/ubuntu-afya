import React from "react";
import { ArrowRight, Target, Cpu, BookOpen } from "lucide-react";
import impactHero from "../assets/pediatric.jpg";
import UbuntuAfyaKiosk from "../assets/Ubuntu-Afya-Kiosks.jpg";
import medicalHealthcareImage from "../assets/medical-healthcare.jpg";
import medicalResearchImage from "../assets/medical-research.jpg";

const Impact: React.FC = () => {
  const impactAreas = [
    {
      icon: Target,
      title: "Primary Health Care",
      subtitle: "Ubuntu-Afya Kiosks",
      description:
        "Through our Ubuntu-Afya kiosks, we bring essential health services closer to families in underserved communities, co-owned with local groups to ensure accountability and sustainability.",
      stats: [
        { value: "25", label: "Kiosks Operating" },
        { value: "290K+", label: "Patients Served" },
        { value: "60%", label: "Women & Children" },
      ],
      image: UbuntuAfyaKiosk,
      color: "teal",
    },
    {
      icon: Cpu,
      title: "Health Technology",
      subtitle: "STONE-HMIS® System",
      description:
        "Our STONE-HMIS® connects clinics, communities, and county governments with real-time data to improve care, strengthen referrals, and guide decisions across health systems.",
      stats: [
        { value: "100%", label: "Real-time Data" },
        { value: "50+", label: "Clinics Connected" },
        { value: "24/7", label: "System Availability" },
      ],
      image: medicalHealthcareImage,
      color: "blue",
    },
    {
      icon: BookOpen,
      title: "Research & Evidence",
      subtitle: "Joanna Briggs Institute Collaboration",
      description:
        "As a collaborating center with the Joanna Briggs Institute, we equip frontline workers with tools and training to translate evidence into practice, shaping policy and improving outcomes.",
      stats: [
        { value: "500+", label: "Workers Trained" },
        { value: "15", label: "Research Studies" },
        { value: "10+", label: "Policy Changes" },
      ],
      image: medicalResearchImage,
      color: "purple",
    },
  ];

  const overallImpact = [
    { number: "3.6M", label: "Target Patients by 2030" },
    { number: "50+", label: "Communities Served" },
    { number: "85%", label: "Care Access Improvement" },
    { number: "40%", label: "Cost Reduction" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-teal-900/80 to-blue-900/80 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={impactHero}
            alt="Ubuntu Afya Impact - Transforming Healthcare"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <span className="bg-yellow-400 text-black font-bold px-4 py-2 text-sm uppercase tracking-wide">
              OUR IMPACT
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Measuring Change, Transforming Lives
          </h1>

          <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Through community-driven solutions and innovative approaches, we're
            creating lasting impact in healthcare access, quality, and
            sustainability across underserved communities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-teal-800 font-bold px-8 py-3 rounded-full transition-colors flex items-center justify-center">
              <span>View Impact Reports</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white font-bold px-8 py-3 rounded-full transition-colors border border-white">
              Download Latest Report
            </button>
          </div>
        </div>
      </section>

      {/* Overall Impact Stats */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-teal-800 mb-4">
              Transforming Healthcare at Scale
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach creates ripple effects that extend
              beyond healthcare, empowering communities and building sustainable
              systems for generations to come.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {overallImpact.map((item, index) => (
              <div
                key={index}
                className="text-center bg-white p-8 rounded-lg shadow-sm"
              >
                <div className="text-4xl font-bold text-teal-600 mb-2">
                  {item.number}
                </div>
                <div className="text-gray-600 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-teal-800 mb-4">
              Our Impact Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three interconnected pillars driving sustainable change in
              community healthcare
            </p>
          </div>

          <div className="space-y-20">
            {impactAreas.map((area, index) => {
              const IconComponent = area.icon;
              const colorClasses = {
                teal: "bg-teal-50 border-teal-200",
                blue: "bg-blue-50 border-blue-200",
                purple: "bg-purple-50 border-purple-200",
              };
              const textColors = {
                teal: "text-teal-600",
                blue: "text-blue-600",
                purple: "text-purple-600",
              };

              return (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-row-dense" : ""
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`space-y-6 ${
                      index % 2 === 1 ? "lg:col-start-2" : ""
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`p-3 rounded-lg ${
                          colorClasses[area.color as keyof typeof colorClasses]
                        }`}
                      >
                        <IconComponent
                          className={`w-6 h-6 ${
                            textColors[area.color as keyof typeof textColors]
                          }`}
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {area.title}
                        </h3>
                        <p className="text-lg font-semibold text-gray-600">
                          {area.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed">
                      {area.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 pt-4">
                      {area.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="text-center">
                          <div
                            className={`text-2xl font-bold ${
                              textColors[area.color as keyof typeof textColors]
                            }`}
                          >
                            {stat.value}
                          </div>
                          <div className="text-sm text-gray-600 mt-1">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <button
                      className={`bg-${area.color}-500 hover:bg-${area.color}-600 text-white font-bold px-6 py-3 rounded-full transition-colors flex items-center`}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>

                  {/* Image */}
                  <div
                    className={`relative ${
                      index % 2 === 1 ? "lg:col-start-1" : ""
                    }`}
                  >
                    <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                      <img
                        src={area.image}
                        alt={`${area.title} - ${area.subtitle}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-6 bg-teal-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl opacity-90">
              Real impact from communities we serve
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The Ubuntu-Afya kiosk saved my daughter's life. Now I'm part of the community health team.",
                author: "Sarah M., Community Health Worker",
                location: "Kisumu County",
                avatar: "sarah-avatar.jpg", 
              },
              {
                quote:
                  "STONE-HMIS® helps us track patient care seamlessly. Our efficiency has improved dramatically.",
                author: "Dr. James K., Clinic Director",
                location: "Migori County",
                avatar: "james-avatar.jpg", 
              },
              {
                quote:
                  "Evidence-based training transformed how we deliver maternal care in our community.",
                author: "Nurse Amina W., Frontline Worker",
                location: "Homa Bay County",
                avatar: "amina-avatar.jpg", 
              },
            ].map((story, index) => (
              <div key={index} className="bg-teal-700 p-8 rounded-lg">
                {/* Avatar Section - Similar to your screenshot */}
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    {/* Circular avatar placeholder - you can replace with actual images */}
                    <div className="w-14 h-14 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {story.author.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-lg">{story.author}</div>
                    <div className="text-teal-200 text-sm">{story.location}</div>
                  </div>
                </div>

                <div className="text-6xl opacity-20 mb-4">"</div>
                <p className="text-lg mb-6 italic leading-relaxed">"{story.quote}"</p>
                
                {/* Optional: Add a small separator or additional info */}
                <div className="border-t border-teal-600 pt-4">
                  <p className="text-teal-200 text-sm italic">
                    The benefits at Ubuntu Afya go beyond healthcare to creating supportive work environments while making a real difference in people's lives.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-teal-500 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join Us in Creating Lasting Impact
          </h2>

          <p className="text-xl mb-8 leading-relaxed">
            Your support helps us expand our reach, deepen our impact, and
            transform healthcare for communities in need. Together, we can build
            a healthier future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-teal-800 font-bold px-8 py-3 rounded-full transition-colors">
              Support Our Work
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white font-bold px-8 py-3 rounded-full transition-colors border border-white">
              Download Impact Report
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;