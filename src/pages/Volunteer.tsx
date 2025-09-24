import React from "react";
import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react";
import volunteerHero from "../assets/pediatric.jpg";

const Volunteer: React.FC = () => {
  const upcomingTrips = [
    {
      id: 1,
      title: "Medical Mission to Kisumu",
      date: "2024-03-15",
      duration: "2 weeks",
      location: "Kisumu County, Kenya",
      description: "Join our medical team in providing essential healthcare services to rural communities.",
      skills: ["Doctors", "Nurses", "Pharmacists", "Medical Students"],
      spots: 8
    },
    {
      id: 2,
      title: "Community Health Training",
      date: "2024-04-10",
      duration: "10 days",
      location: "Migori County, Kenya",
      description: "Train community health workers and help establish sustainable health programs.",
      skills: ["Educators", "Public Health Professionals", "Community Organizers"],
      spots: 12
    },
    {
      id: 3,
      title: "Technology Implementation",
      date: "2024-05-05",
      duration: "3 weeks",
      location: "Homa Bay County, Kenya",
      description: "Help deploy and train staff on our STONE-HMIS® health technology system.",
      skills: ["IT Professionals", "Data Analysts", "Tech Trainers"],
      spots: 6
    }
  ];

  const volunteerRoles = [
    {
      category: "Medical Professionals",
      roles: ["Physicians", "Nurses", "Dentists", "Pharmacists", "Mental Health Specialists"],
      icon: Users
    },
    {
      category: "Technical Support",
      roles: ["IT Specialists", "Data Analysts", "System Administrators", "Tech Trainers"],
      icon: Clock
    },
    {
      category: "Community Development",
      roles: ["Educators", "Project Managers", "Community Organizers", "Public Health Workers"],
      icon: MapPin
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-teal-900/80 to-blue-900/80 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={volunteerHero} 
            alt="Volunteer with Ubuntu Afya - Make a Real Impact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <span className="bg-yellow-400 text-black font-bold px-4 py-2 text-sm uppercase tracking-wide">
              VOLUNTEER
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Join Our Mission. Transform Lives.
          </h1>
          
          <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Join one of our trips and make a real impact. Your skills and passion can help bring 
            quality healthcare to underserved communities in Kenya.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-teal-800 font-bold px-8 py-3 rounded-full transition-colors flex items-center justify-center">
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white font-bold px-8 py-3 rounded-full transition-colors border border-white">
              View Upcoming Trips
            </button>
          </div>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-teal-800 mb-4">
              Why Volunteer With Ubuntu Afya?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience meaningful work that creates lasting change in communities that need it most.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Direct Impact",
                description: "See immediate results from your work as you provide essential healthcare services.",
                stat: "290K+ Patients Served"
              },
              {
                title: "Cultural Exchange",
                description: "Immerse yourself in local communities and build meaningful connections.",
                stat: "50+ Communities"
              },
              {
                title: "Professional Growth",
                description: "Develop new skills and gain unique experience in global health delivery.",
                stat: "500+ Volunteers"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center">
                <h3 className="text-xl font-bold text-teal-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="text-teal-600 font-semibold">{item.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Trips */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-teal-800 mb-4">
              Upcoming Volunteer Trips
            </h2>
            <p className="text-xl text-gray-600">
              Join one of our carefully planned missions and make a difference
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {upcomingTrips.map((trip) => (
              <div key={trip.id} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">Trip Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-teal-800 mb-2">{trip.title}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(trip.date).toLocaleDateString()} • {trip.duration}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      {trip.location}
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{trip.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Needed Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {trip.skills.map((skill, index) => (
                        <span key={index} className="bg-teal-100 text-teal-800 px-2 py-1 rounded text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{trip.spots} spots remaining</span>
                    <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section className="py-16 px-6 bg-teal-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">We Need Your Skills</h2>
            <p className="text-xl opacity-90">
              Various roles available for different backgrounds and expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {volunteerRoles.map((role, index) => {
              const IconComponent = role.icon;
              return (
                <div key={index} className="bg-teal-700 p-8 rounded-lg">
                  <IconComponent className="w-8 h-8 mb-4 text-yellow-400" />
                  <h3 className="text-xl font-bold mb-4">{role.category}</h3>
                  <ul className="space-y-2">
                    {role.roles.map((roleItem, roleIndex) => (
                      <li key={roleIndex} className="flex items-center">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                        {roleItem}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-teal-800 mb-4">
              How to Apply
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Submit Application", description: "Complete our online volunteer application form." },
              { step: "2", title: "Interview", description: "Virtual interview with our volunteer coordinator." },
              { step: "3", title: "Orientation", description: "Comprehensive pre-trip training and orientation." },
              { step: "4", title: "Departure", description: "Join the team and start making an impact!" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-teal-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-teal-800 font-bold px-8 py-3 rounded-full transition-colors">
              Start Your Application
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;