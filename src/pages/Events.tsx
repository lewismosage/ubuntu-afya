import React from "react";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import eventsHero from "../assets/pediatric.jpg";
import healthcareTeam from "../assets/healthcare-team.jpg";
import medicalResearch from "../assets/medical-research.jpg";

import mission2 from "../assets/mission-2.jpg";
import mission3 from "../assets/mission-3.jpg";
import strategy from "../assets/strategy.jpg";

const Events: React.FC = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Global Health Symposium 2024",
      date: "2024-03-20",
      time: "9:00 AM - 5:00 PM",
      location: "Nairobi, Kenya & Virtual",
      description: "Join healthcare leaders, innovators, and community advocates for a day of learning and collaboration.",
      type: "Conference",
      attendees: 250,
      image: medicalResearch
    },
    {
      id: 2,
      title: "Community Health Fair",
      date: "2024-04-05",
      time: "10:00 AM - 3:00 PM",
      location: "Kisumu County",
      description: "Free health screenings, vaccinations, and health education for the local community.",
      type: "Community Event",
      attendees: 500,
      image: medicalResearch
    },
    {
      id: 3,
      title: "Fundraising Gala Dinner",
      date: "2024-05-15",
      time: "7:00 PM - 11:00 PM",
      location: "Sankara Hotel, Nairobi",
      description: "An elegant evening supporting Ubuntu Afya's healthcare initiatives with special guests.",
      type: "Fundraiser",
      attendees: 150,
      image: mission2
    }
  ];

  const eventCategories = [
    {
      name: "Conferences & Workshops",
      count: 12,
      description: "Educational events for healthcare professionals and community workers",
      color: "teal"
    },
    {
      name: "Community Events",
      count: 8,
      description: "Health fairs, screenings, and community engagement activities",
      color: "blue"
    },
    {
      name: "Fundraisers",
      count: 6,
      description: "Events supporting our healthcare initiatives and programs",
      color: "purple"
    },
    {
      name: "Volunteer Events",
      count: 15,
      description: "Opportunities to get involved and make a direct impact",
      color: "green"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${eventsHero})`
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-ubuntu-blue-900/80 to-ubuntu-blue-1000/80"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <span className="bg-ubuntu-orange-500 text-white font-bold px-4 py-2 text-sm uppercase tracking-wide">
              EVENTS
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Join Our Events. Support Global Health.
          </h1>
          
          <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-ubuntu-blue-100">
            Participate in our events to learn, connect, and contribute to transforming healthcare 
            in underserved communities across Kenya.
          </p>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-ubuntu-blue-800 mb-4">
              Types of Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Various opportunities to engage with our mission and community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventCategories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 bg-${category.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                  <Calendar className={`w-6 h-6 text-${category.color}-600`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{category.name}</h3>
                <div className="text-2xl font-bold text-ubuntu-orange-600 mb-2">{category.count}</div>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-ubuntu-blue-800 mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600">
              Mark your calendar and join us for these upcoming activities
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-ubuntu-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {event.type}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-ubuntu-blue-800 mb-3">{event.title}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(event.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      {event.attendees} attendees expected
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6">{event.description}</p>

                  <div className="flex justify-between items-center">
                    <button className="bg-ubuntu-orange-600 hover:bg-ubuntu-orange-700 text-white px-6 py-2 rounded-full font-semibold transition-colors flex-1 mr-3">
                      Register Now
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold transition-colors">
                      Share
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Highlights */}
      <section className="py-16 px-6 bg-ubuntu-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Past Event Highlights</h2>
            <p className="text-xl opacity-90">
              See the impact of our previous events and activities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "2023 Health Summit",
                impact: "Raised $50,000 for new clinics",
                attendees: "300+ participants",
                image: strategy
              },
              {
                title: "Community Health Drive",
                impact: "Screened 1,200 community members",
                attendees: "50 volunteers",
                image: mission2
              },
              {
                title: "Annual Gala Dinner",
                impact: "Funded 3 new health kiosks",
                attendees: "200 supporters",
                image: mission3
              }
            ].map((event, index) => (
              <div key={index} className="bg-ubuntu-blue-700 p-6 rounded-lg">
                <div className="h-40 rounded mb-4 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <div className="space-y-1 text-ubuntu-blue-200">
                  <div>🎯 {event.impact}</div>
                  <div>👥 {event.attendees}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;