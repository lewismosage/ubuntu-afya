import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, TrendingUp } from "lucide-react";
import Hero from "./Hero"; 

const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Now using the separate component */}
      <Hero />

      {/* Urgent Stats Section */}
      <section className="py-16 bg-blue-50 border-t border-b border-blue-200">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-bold text-center text-blue-800 mb-8">
            The Healthcare Crisis in Rural Kenya
          </h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
              <div className="text-3xl font-bold text-blue-600">4 in 10</div>
              <div className="text-blue-800 mt-2">Kenyans lack access to essential health services</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
              <div className="text-3xl font-bold text-blue-600">10-30km</div>
              <div className="text-blue-800 mt-2">Distance to rural clinics for many families</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
              <div className="text-3xl font-bold text-blue-600">1 in 19</div>
              <div className="text-blue-800 mt-2">Children die before age 5 from preventable causes</div>
            </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
              <div className="text-3xl font-bold text-blue-600">362</div>
              <div className="text-blue-800 mt-2">Maternal deaths per 100,000 births</div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Stories Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-12">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Real Stories. Lasting Impact.
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl">
                Each life changed starts with one powerful thing: access to care that lasts.
              </p>
            </div>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2 mt-6 lg:mt-0">
              <span>View News Updates</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Story - Larger */}
            <div className="lg:col-span-2">
              <div className="relative rounded-2xl overflow-hidden shadow-lg h-full min-h-[500px]">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src="https://images.stockcake.com/public/a/2/d/a2d60a74-476b-4d38-9589-16ac4c34a0eb_large/mobile-clinic-service-stockcake.jpg" 
                    alt="Lewis Mosage joining Ubuntu Afya"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-8">
                  <div className="text-white">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6" />
                      </div>
                      <span className="text-lg font-semibold">Featured Story</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      From Lewis Mosage: Honored to Join the Ubuntu Afya Family
                    </h3>
                    <p className="text-white/90 text-lg">
                      A new chapter begins as we welcome Lewis to our growing team of healthcare innovators.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Stories - Smaller */}
            <div className="space-y-6">
              {/* Story 1 */}
              <div className="relative rounded-xl overflow-hidden shadow-lg h-48">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src="https://images.pexels.com/photos/20333030/pexels-photo-20333030.jpeg" 
                    alt="Welcome Lewis"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  <div className="text-white">
                    <div className="text-sm font-semibold mb-2">TEAM ANNOUNCEMENT</div>
                    <h4 className="text-xl font-bold mb-2">
                      WELCOME TO OUR TEAM, LEWIS!
                    </h4>
                    <p className="text-white/90 text-sm">
                      A New Chapter for Ubuntu Afya
                    </p>
                  </div>
                </div>
              </div>

              {/* Story 2 */}
              <div className="relative rounded-xl overflow-hidden shadow-lg h-48">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src="https://images.pexels.com/photos/20333030/pexels-photo-20333030.jpeg" 
                    alt="Grace's story"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  <div className="text-white">
                    <div className="flex items-center space-x-2 mb-2">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm font-semibold">Stories of Hope | GRACE - Uganda</span>
                    </div>
                    <h4 className="text-xl font-bold">
                      Grace's Second Chance: A Mother's Story from Rural Uganda
                    </h4>
                    <p className="text-white/90 text-sm mt-2">
                      Six Miles. One Life-Saving Birth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-teal-600">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              You can be a part of the solution.
            </h2>
            <p className="text-xl text-teal-100 max-w-4xl mx-auto">
              Every donation you give helps bring hope, healing, and dignity to
              someone in need. Join us in transforming healthcare, one community
              at a time.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { 
                title: "Give Monthly", 
                subtitle: "Become a monthly supporter for sustained impact",
                icon: Heart,
                image: "https://images.pexels.com/photos/29944635/pexels-photo-29944635.jpeg"
              },
              { 
                title: "Donate", 
                subtitle: "Make a one-time or recurring gift to expand access to care",
                icon: Heart,
                image: "https://images.stockcake.com/public/c/6/e/c6e4f926-e2bd-4959-aca8-f8c6a42cd5aa_large/rural-medical-consultation-stockcake.jpg"
              },
              { 
                title: "Volunteer", 
                subtitle: "Join our team and make a hands-on difference",
                icon: Users,
                image: "https://images.pexels.com/photos/20333030/pexels-photo-20333030.jpeg"
              },
              { 
                title: "Partner", 
                subtitle: "Collaborate with us for greater community impact",
                icon: TrendingUp,
                image: "https://images.pexels.com/photos/20333030/pexels-photo-20333030.jpeg"
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative rounded overflow-hidden shadow-lg group cursor-pointer h-80"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  <div className="text-white transform transition-transform duration-300 group-hover:-translate-y-2">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors duration-300">
                      <item.icon className="w-6 h-6" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold mb-2 group-hover:text-teal-200 transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-teal-100 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                      {item.subtitle}
                    </p>
                    
                    {/* Arrow */}
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-teal-200 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                        Learn more
                      </span>
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-teal-500 transition-colors duration-300">
                        <ArrowRight className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Model Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Impact Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work across three key areas to deliver sustainable, community-driven healthcare solutions that transform lives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Primary Healthcare */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100 hover:transform hover:scale-105 transition-all duration-300 group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors duration-300">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Primary Healthcare
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Through our Ubuntu-Afya kiosks, we bring essential health services closer to families in underserved communities, co-owned with local groups to ensure accountability and sustainability.
              </p>
            </div>

            {/* Health Technology */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:transform hover:scale-105 transition-all duration-300 group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Health Technology
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our STONE-HMIS® connects clinics, communities, and county governments with real-time data to improve care, strengthen referrals, and guide decisions across health systems.
              </p>
            </div>

            {/* Research & Evidence */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100 hover:transform hover:scale-105 transition-all duration-300 group">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Research & Evidence
              </h3>
              <p className="text-gray-600 leading-relaxed">
                As a collaborating center with the Joanna Briggs Institute, we equip frontline workers with tools and training to translate evidence into practice, shaping policy and improving outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;