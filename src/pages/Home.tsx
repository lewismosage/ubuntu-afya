import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, TrendingUp, Target, Cpu, BookOpen } from "lucide-react";
import Hero from "./Hero";
import HealthcareCrisis from "./HealthcareCrisis";
import UbuntuAfyaKiosk from "../assets/Ubuntu-Afya-Kiosks.jpg";
import HealthTechnology from "../assets/HealthTechnology.jpg";
import medicalResearchImage from "../assets/medical-research.jpg";

interface CounterProps {
  end: number;
  duration: number;
  suffix?: string;
  prefix?: string;
}

const Counter: React.FC<CounterProps> = ({ end, duration, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-2xl font-bold">
      {prefix}{count}{suffix}
    </div>
  );
}; 

const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Now using the separate component */}
      <Hero />

      {/* Healthcare Crisis Section */}
      <HealthcareCrisis />

      {/* Our Model Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content - Left */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Our Model
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Ubuntu Afya is rooted in community ownership. Each clinic is owned with local self-help groups, ensuring accountability and long-term commitment. Community savings schemes help families afford care and support clinic operations. Partnership with county governments provide additional staff and supplies, embedding clinics into the broader health system.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Transforming healthcare delivery through community ownership, financial sustainability, and integrated services across Kenya's rural and underserved communities.
              </p>
              <Link
                to="/our-model"
                className="inline-flex items-center space-x-2 border-2 border-ubuntu-blue-600 text-ubuntu-blue-600 hover:bg-ubuntu-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                <span>Read More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            {/* Image - Right */}
            <div className="relative">
              <div className="relative rounded overflow-hidden shadow-2xl">
                <img 
                  src="/src/assets/our-modal.JPG" 
                  alt="Ubuntu Afya community healthcare model"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategies Section */}
      <section className="py-20 bg-ubuntu-blue-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image - Left */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded overflow-hidden shadow-2xl">
                <img 
                  src="/src/assets/our-strategy.jpg" 
                  alt="Healthcare strategy and innovation"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
            
            {/* Content - Right */}
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Our Strategy
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We believe the future of healthcare in Africa lies in models that are both community-led and innovation-driven. Our strategy rests on three pillars: building and sustaining strong community health systems through Ubuntu-Afya centers, expanding digital health tools like STONE-HMIS® to ensure real-time, reliable data, and translating research into practice by training health workers and implementing evidence-based interventions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                These pillars work together to strengthen health systems from the ground up, creating long-term change for the communities we serve.
              </p>
              <Link
                to="/our-strategy"
                className="inline-flex items-center space-x-2 bg-ubuntu-blue-600 hover:bg-ubuntu-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                <span>Learn About Our Strategies</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Areas Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ubuntu-blue-800 mb-4">
              Our Impact Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three interconnected pillars driving sustainable change in
              community healthcare
            </p>
          </div>

          <div className="space-y-20">
            {[
              {
                icon: Target,
                title: "Primary Health Care",
                subtitle: "Ubuntu-Afya Kiosks",
                description:
                  "Through our Ubuntu-Afya kiosks, we bring essential health services closer to families in underserved communities, co-owned with local groups to ensure accountability and sustainability.",
                stats: [
                  { value: 25, suffix: "", label: "Kiosks Operating" },
                  { value: 290, suffix: "K+", label: "Patients Served" },
                  { value: 60, suffix: "%", label: "Women & Children" },
                ],
                image: UbuntuAfyaKiosk,
                color: "blue",
              },
              {
                icon: Cpu,
                title: "Health Technology",
                subtitle: "STONE-HMIS® System",
                description:
                  "Our STONE-HMIS® connects clinics, communities, and county governments with real-time data to improve care, strengthen referrals, and guide decisions across health systems.",
                stats: [
                  { value: 100, suffix: "%", label: "Real-time Data" },
                  { value: 50, suffix: "+", label: "Clinics Connected" },
                  { value: 24, suffix: "/7", label: "System Availability" },
                ],
                image: HealthTechnology,
                color: "orange",
              },
              {
                icon: BookOpen,
                title: "Research & Evidence",
                subtitle: "Joanna Briggs Institute Collaboration",
                description:
                  "As a collaborating center with the Joanna Briggs Institute, we equip frontline workers with tools and training to translate evidence into practice, shaping policy and improving outcomes.",
                stats: [
                  { value: 500, suffix: "+", label: "Workers Trained" },
                  { value: 15, suffix: "", label: "Research Studies" },
                  { value: 10, suffix: "+", label: "Policy Changes" },
                ],
                image: medicalResearchImage,
                color: "blue",
              },
            ].map((area, index) => {
              const IconComponent = area.icon;
              const colorClasses = {
                blue: "bg-ubuntu-blue-50 border-ubuntu-blue-200",
                orange: "bg-ubuntu-orange-50 border-ubuntu-orange-200",
              };
              const textColors = {
                blue: "text-ubuntu-blue-600",
                orange: "text-ubuntu-orange-600",
              };
              const buttonColors = {
                blue: "bg-ubuntu-blue-600 hover:bg-ubuntu-blue-700",
                orange: "bg-ubuntu-orange-500 hover:bg-ubuntu-orange-600",
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
                            className={`${
                              textColors[area.color as keyof typeof textColors]
                            }`}
                          >
                            <Counter
                              end={stat.value}
                              duration={2000}
                              suffix={stat.suffix}
                            />
                          </div>
                          <div className="text-sm text-gray-600 mt-1">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <Link
                      to={
                        area.title === "Primary Health Care" 
                          ? "/primary-healthcare"
                          : area.title === "Health Technology"
                          ? "/health-technology"
                          : "/research-evidence"
                      }
                      className={`${buttonColors[area.color as keyof typeof buttonColors]} text-white font-bold px-6 py-3 rounded-full transition-colors flex items-center`}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
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

      {/* Real Stories Section */}
      <section className="py-20 bg-ubuntu-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Real Stories. Lasting Impact.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Each life changed starts with one powerful thing: access to care that lasts.
            </p>
            <button className="bg-ubuntu-blue-600 hover:bg-ubuntu-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2 mx-auto">
              <span>View All News Updates</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Featured Story */}
            <div className="md:col-span-2 lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="relative h-48">
                  <img 
                    src="https://images.stockcake.com/public/a/2/d/a2d60a74-476b-4d38-9589-16ac4c34a0eb_large/mobile-clinic-service-stockcake.jpg" 
                    alt="Lewis Mosage joining Ubuntu Afya"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-ubuntu-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Users className="w-4 h-4 text-ubuntu-blue-600" />
                    <span className="text-sm font-medium text-ubuntu-blue-600">Team Announcement</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    From Lewis Mosage: Honored to Join the Ubuntu Afya Family
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    A new chapter begins as we welcome Lewis to our growing team of healthcare innovators.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">December 15, 2024</span>
                    <ArrowRight className="w-4 h-4 text-ubuntu-blue-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Story 2 */}
            <div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="relative h-40">
                  <img 
                    src="https://images.pexels.com/photos/20333030/pexels-photo-20333030.jpeg" 
                    alt="Welcome Lewis"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-ubuntu-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      News
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Users className="w-3 h-3 text-ubuntu-blue-600" />
                    <span className="text-xs font-medium text-ubuntu-blue-600">Team Update</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    Welcome to Our Team, Lewis!
                  </h4>
                  <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                    A New Chapter for Ubuntu Afya
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Dec 10, 2024</span>
                    <ArrowRight className="w-3 h-3 text-ubuntu-blue-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Story 3 */}
            <div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="relative h-40">
                  <img 
                    src="https://images.pexels.com/photos/20333030/pexels-photo-20333030.jpeg" 
                    alt="Grace's story"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-ubuntu-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Story
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Heart className="w-3 h-3 text-ubuntu-orange-500" />
                    <span className="text-xs font-medium text-ubuntu-orange-500">Grace - Uganda</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    Grace's Second Chance: A Mother's Story
                  </h4>
                  <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                    Six Miles. One Life-Saving Birth.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Dec 5, 2024</span>
                    <ArrowRight className="w-3 h-3 text-ubuntu-blue-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Stories Row */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-8">
            {/* Story 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-32">
                <img 
                  src="https://images.pexels.com/photos/20333030/pexels-photo-20333030.jpeg" 
                  alt="Healthcare impact"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <span className="text-xs font-medium text-ubuntu-blue-600 mb-2 block">Impact Report</span>
                <h5 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2">
                  Healthcare Access Improvements
                </h5>
                <span className="text-xs text-gray-500">Nov 28, 2024</span>
              </div>
            </div>

            {/* Story 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-32">
                <img 
                  src="https://images.pexels.com/photos/20333030/pexels-photo-20333030.jpeg" 
                  alt="Community outreach"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <span className="text-xs font-medium text-ubuntu-orange-500 mb-2 block">Community</span>
                <h5 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2">
                  Community Outreach Success
                </h5>
                <span className="text-xs text-gray-500">Nov 22, 2024</span>
              </div>
            </div>

            {/* Story 6 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-32">
                <img 
                  src="https://images.pexels.com/photos/20333030/pexels-photo-20333030.jpeg" 
                  alt="Medical training"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <span className="text-xs font-medium text-ubuntu-blue-600 mb-2 block">Training</span>
                <h5 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2">
                  Medical Training Program
                </h5>
                <span className="text-xs text-gray-500">Nov 18, 2024</span>
              </div>
            </div>

            {/* Story 7 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-32">
                <img 
                  src="https://images.pexels.com/photos/20333030/pexels-photo-20333030.jpeg" 
                  alt="Research findings"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <span className="text-xs font-medium text-ubuntu-orange-500 mb-2 block">Research</span>
                <h5 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2">
                  New Research Findings
                </h5>
                <span className="text-xs text-gray-500">Nov 15, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-ubuntu-blue-600">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              You can be a part of the solution.
            </h2>
            <p className="text-xl text-ubuntu-blue-100 max-w-4xl mx-auto">
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
                image: "https://images.stockcake.com/public/1/5/a/15a725d2-c9bc-4b4f-b6f8-148dc964de54_large/doctor-treating-child-stockcake.jpg"
              },
              { 
                title: "Partner", 
                subtitle: "Collaborate with us for greater community impact",
                icon: TrendingUp,
                image: "https://images.stockcake.com/public/d/f/6/df6687f3-e947-4f26-8b74-9357c9aedb60_large/doctor-consultation-meeting-stockcake.jpg"
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
                    <h3 className="text-xl font-bold mb-2 group-hover:text-ubuntu-orange-200 transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-ubuntu-blue-100 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                      {item.subtitle}
                    </p>
                    
                    {/* Arrow */}
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-ubuntu-orange-200 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                        Learn more
                      </span>
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-ubuntu-orange-500 transition-colors duration-300">
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
    </div>
  );
};

export default Homepage;