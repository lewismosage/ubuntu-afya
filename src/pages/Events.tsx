import React from "react";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import eventsHero from "../assets/pediatric.jpg";

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
      image: "symposium.jpg"
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
      image: "health-fair.jpg"
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
      image: "gala.jpg"
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
      <section className="relative py-20 px-6 bg-gradient-to-br from-teal-900/80 to-blue-900/80 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={eventsHero} 
            alt="Ubuntu Afya Events - Join Us in Supporting Global Health"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <span className="bg-yellow-400 text-black font-bold px-4 py-2 text-sm uppercase tracking-wide">
              EVENTS
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Join Our Events. Support Global Health.
          </h1>
          
          <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Participate in our events to learn, connect, and contribute to transforming healthcare 
            in underserved communities across Kenya.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-teal-800 font-bold px-8 py-3 rounded-full transition-colors flex items-center justify-center">
              <span>View All Events</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white font-bold px-8 py-3 rounded-full transition-colors border border-white">
              Subscribe to Updates
            </button>
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-teal-800 mb-4">
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
                <div className="text-2xl font-bold text-teal-600 mb-2">{category.count}</div>
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
            <h2 className="text-4xl font-bold text-teal-800 mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600">
              Mark your calendar and join us for these upcoming activities
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-300 flex items-center justify-center relative">
                  <span className="text-gray-500">Event Image</span>
                  <div className="absolute top-4 right-4">
                    <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {event.type}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-teal-800 mb-3">{event.title}</h3>
                  
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
                    <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full font-semibold transition-colors flex-1 mr-3">
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
      <section className="py-16 px-6 bg-teal-600 text-white">
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
                image: "summit-2023.jpg"
              },
              {
                title: "Community Health Drive",
                impact: "Screened 1,200 community members",
                attendees: "50 volunteers",
                image: "health-drive.jpg"
              },
              {
                title: "Annual Gala Dinner",
                impact: "Funded 3 new health kiosks",
                attendees: "200 supporters",
                image: "gala-2023.jpg"
              }
            ].map((event, index) => (
              <div key={index} className="bg-teal-700 p-6 rounded-lg">
                <div className="h-40 bg-white/20 rounded mb-4 flex items-center justify-center">
                  <span className="text-sm">Event Photo</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <div className="space-y-1 text-teal-200">
                  <div>🎯 {event.impact}</div>
                  <div>👥 {event.attendees}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Registration CTA */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-teal-800 mb-6">
            Stay Connected With Our Events
          </h2>
          
          <p className="text-xl mb-8 leading-relaxed text-gray-600">
            Subscribe to our newsletter and be the first to know about upcoming events, 
            volunteer opportunities, and ways to support our mission.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button className="bg-yellow-400 hover:bg-yellow-500 text-teal-800 font-bold px-8 py-3 rounded-full transition-colors">
              Subscribe
            </button>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Events;