import React, { useState } from "react";
import {
  ArrowRight,
  Calendar,
  Search,
  Lightbulb,
  Users,
  Heart,
  Target,
  MapPin,
  Clock,
  CheckCircle,
} from "lucide-react";

const InitiativesPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<
    "all" | "healthcare" | "technology" | "community" | "training"
  >("all");
  const [searchTerm, setSearchTerm] = useState("");

  const initiatives = [
    {
      id: 1,
      type: "healthcare",
      title: "Ubuntu-Afya Kiosks: Community-Led Healthcare Model",
      excerpt:
        "Our flagship initiative establishing sustainable, community-owned healthcare facilities in rural Kenya, providing essential medical services to underserved populations.",
      date: "2024-12-01",
      status: "active",
      location: "25+ Communities across Kenya",
      image:
        "https://images.stockcake.com/public/c/6/e/c6e4f926-e2bd-4959-aca8-f8c6a42cd5aa_large/rural-medical-consultation-stockcake.jpg",
      featured: true,
      tags: ["Community Health", "Sustainability", "Rural Healthcare"],
      impact: "290,000+ patients served",
      duration: "5+ years",
      partners: ["Local Communities", "County Governments", "Health Workers"],
    },
    {
      id: 2,
      type: "technology",
      title: "STONE-HMIS® Digital Health Platform",
      excerpt:
        "Revolutionary digital health management system connecting healthcare facilities across Kenya, enabling real-time data sharing and improved patient care coordination.",
      date: "2024-11-15",
      status: "active",
      location: "25+ Healthcare Facilities",
      image:
        "https://images.stockcake.com/public/d/f/6/df6687f3-e947-4f26-8b74-9357c9aedb60_large/doctor-consultation-meeting-stockcake.jpg",
      featured: true,
      tags: ["Digital Health", "Technology", "Data Management"],
      impact: "25+ facilities connected",
      duration: "3+ years",
      partners: ["Technology Partners", "Healthcare Providers", "Government"],
    },
    {
      id: 3,
      type: "training",
      title: "Health Worker Capacity Building Program",
      excerpt:
        "Comprehensive training initiative empowering 225+ health workers with evidence-based practices and modern healthcare delivery techniques.",
      date: "2024-10-20",
      status: "active",
      location: "Multiple Training Centers",
      image:
        "https://images.pexels.com/photos/20333030/pexels-photo-20333030.jpeg",
      featured: false,
      tags: ["Training", "Capacity Building", "Health Workers"],
      impact: "225+ health workers trained",
      duration: "2+ years",
      partners: [
        "Joanna Briggs Institute",
        "Local Health Facilities",
        "Universities",
      ],
    },
    {
      id: 4,
      type: "community",
      title: "Maternal Health Initiative",
      excerpt:
        "Focused program addressing maternal mortality through community education, improved access to prenatal care, and emergency obstetric services.",
      date: "2024-09-30",
      status: "active",
      location: "Rural Communities",
      image:
        "https://images.stockcake.com/public/1/5/a/15a725d2-c9bc-4b4f-b6f8-148dc964de54_large/doctor-treating-child-stockcake.jpg",
      featured: false,
      tags: ["Maternal Health", "Community Education", "Emergency Care"],
      impact: "40% reduction in maternal deaths",
      duration: "3+ years",
      partners: [
        "Community Leaders",
        "Traditional Birth Attendants",
        "Health Workers",
      ],
    },
    {
      id: 5,
      type: "healthcare",
      title: "Mobile Health Outreach Program",
      excerpt:
        "Bringing essential healthcare services directly to remote communities through mobile clinics and community health education programs.",
      date: "2024-08-15",
      status: "active",
      location: "50+ Rural Communities",
      image:
        "https://images.stockcake.com/public/1/5/a/15a725d2-c9bc-4b4f-b6f8-148dc964de54_large/doctor-treating-child-stockcake.jpg",
      featured: false,
      tags: ["Mobile Health", "Outreach", "Rural Communities"],
      impact: "50+ communities reached",
      duration: "2+ years",
      partners: [
        "Mobile Health Teams",
        "Community Volunteers",
        "Local Leaders",
      ],
    },
    {
      id: 6,
      type: "technology",
      title: "Telemedicine Integration Project",
      excerpt:
        "Connecting rural healthcare facilities with urban specialists through telemedicine technology, improving access to specialized care.",
      date: "2024-07-20",
      status: "pilot",
      location: "5 Pilot Sites",
      image:
        "https://images.stockcake.com/public/d/f/6/df6687f3-e947-4f26-8b74-9357c9aedb60_large/doctor-consultation-meeting-stockcake.jpg",
      featured: false,
      tags: ["Telemedicine", "Specialized Care", "Technology"],
      impact: "5 pilot sites established",
      duration: "1 year",
      partners: ["Telemedicine Providers", "Specialists", "Rural Clinics"],
    },
    {
      id: 7,
      type: "community",
      title: "Youth Health Education Initiative",
      excerpt:
        "Empowering young people with health knowledge and skills through school-based programs and peer education networks.",
      date: "2024-06-10",
      status: "active",
      location: "Schools & Youth Centers",
      image:
        "https://images.pexels.com/photos/29944635/pexels-photo-29944635.jpeg",
      featured: false,
      tags: ["Youth Health", "Education", "Peer Networks"],
      impact: "1,000+ youth reached",
      duration: "1+ years",
      partners: ["Schools", "Youth Organizations", "Community Leaders"],
    },
    {
      id: 8,
      type: "healthcare",
      title: "Chronic Disease Management Program",
      excerpt:
        "Comprehensive approach to managing chronic diseases in rural communities through patient education, regular monitoring, and community support networks.",
      date: "2024-05-25",
      status: "active",
      location: "Community Health Centers",
      image:
        "https://images.stockcake.com/public/c/6/e/c6e4f926-e2bd-4959-aca8-f8c6a42cd5aa_large/rural-medical-consultation-stockcake.jpg",
      featured: false,
      tags: ["Chronic Disease", "Patient Education", "Community Support"],
      impact: "500+ patients enrolled",
      duration: "2+ years",
      partners: ["Health Workers", "Patient Groups", "Community Volunteers"],
    },
  ];

  const filteredInitiatives = initiatives.filter((initiative) => {
    const matchesFilter =
      activeFilter === "all" || initiative.type === activeFilter;
    const matchesSearch =
      initiative.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      initiative.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      initiative.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesFilter && matchesSearch;
  });

  const featuredInitiatives = filteredInitiatives.filter(
    (initiative) => initiative.featured
  );
  const regularInitiatives = filteredInitiatives.filter(
    (initiative) => !initiative.featured
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "healthcare":
        return "bg-ubuntu-blue-600 text-white";
      case "technology":
        return "bg-ubuntu-orange-500 text-white";
      case "community":
        return "bg-green-600 text-white";
      case "training":
        return "bg-purple-600 text-white";
      default:
        return "bg-gray-600 text-white";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "healthcare":
        return "Healthcare Initiative";
      case "technology":
        return "Technology Initiative";
      case "community":
        return "Community Initiative";
      case "training":
        return "Training Initiative";
      default:
        return "Initiative";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "pilot":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "healthcare":
        return Heart;
      case "technology":
        return Target;
      case "community":
        return Users;
      case "training":
        return Lightbulb;
      default:
        return Heart;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="bg-ubuntu-orange-500 text-white font-bold px-4 py-2 text-sm uppercase tracking-wide">
              INITIATIVES & PROGRAMS
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-ubuntu-blue-800 leading-tight">
                Our Impact Initiatives
              </h1>
            </div>
            <div className="flex items-center">
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover our comprehensive initiatives driving positive change
                in healthcare delivery. From community-led models to
                cutting-edge technology, explore how we're transforming
                healthcare access across Kenya.
              </p>
            </div>
          </div>

          {/* Search and Filter Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search initiatives by title, content, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-ubuntu-blue-500 focus:outline-none"
                />
              </div>

              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-3">
                {[
                  { key: "all", label: "All Initiatives" },
                  { key: "healthcare", label: "Healthcare" },
                  { key: "technology", label: "Technology" },
                  { key: "community", label: "Community" },
                  { key: "training", label: "Training" },
                ].map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => setActiveFilter(key as any)}
                    className={`px-5 py-2 rounded-lg font-semibold transition-all ${
                      activeFilter === key
                        ? "bg-ubuntu-blue-600 text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Initiatives Section */}
      {featuredInitiatives.length > 0 && (
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-ubuntu-blue-800 mb-12">
              Featured Initiatives
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredInitiatives.map((initiative) => {
                const IconComponent = getTypeIcon(initiative.type);
                return (
                  <article key={initiative.id} className="group cursor-pointer">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
                      <div className="relative h-64">
                        <img
                          src={initiative.image}
                          alt={initiative.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute top-4 left-4">
                          <span className="bg-ubuntu-orange-500 text-white px-3 py-2 rounded-full text-xs font-bold">
                            Featured
                          </span>
                        </div>
                        <div className="absolute top-4 right-4">
                          <span
                            className={`px-3 py-2 rounded-full text-xs font-bold ${getTypeColor(
                              initiative.type
                            )}`}
                          >
                            {getTypeLabel(initiative.type)}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center space-x-3 mb-3">
                          <IconComponent className="w-4 h-4 text-ubuntu-blue-600" />
                          <div className="flex items-center text-gray-500 text-sm">
                            <Calendar className="w-4 h-4 mr-2" />
                            {formatDate(initiative.date)}
                          </div>
                          <span className="text-gray-400">•</span>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                              initiative.status
                            )}`}
                          >
                            {initiative.status.charAt(0).toUpperCase() +
                              initiative.status.slice(1)}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-ubuntu-blue-600 transition-colors">
                          {initiative.title}
                        </h3>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {initiative.excerpt}
                        </p>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPin className="w-4 h-4 mr-2 text-ubuntu-blue-600" />
                            {initiative.location}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                            {initiative.impact}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="w-4 h-4 mr-2 text-ubuntu-orange-500" />
                            {initiative.duration}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <span className="text-sm text-gray-500">
                            {initiative.partners.length} partners
                          </span>
                          <div className="flex items-center text-ubuntu-blue-600 font-semibold text-sm group-hover:text-ubuntu-blue-700">
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* All Initiatives Grid */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {regularInitiatives.length > 0 && (
            <>
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-bold text-ubuntu-blue-800">
                  All Initiatives
                </h2>
                <span className="text-gray-600">
                  {regularInitiatives.length}{" "}
                  {regularInitiatives.length === 1
                    ? "initiative"
                    : "initiatives"}{" "}
                  found
                </span>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularInitiatives.map((initiative) => {
                  const IconComponent = getTypeIcon(initiative.type);
                  return (
                    <article
                      key={initiative.id}
                      className="group cursor-pointer"
                    >
                      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100">
                        <div className="relative h-48">
                          <img
                            src={initiative.image}
                            alt={initiative.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-4 left-4">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-bold ${getTypeColor(
                                initiative.type
                              )}`}
                            >
                              {getTypeLabel(initiative.type)}
                            </span>
                          </div>
                          <div className="absolute top-4 right-4">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                                initiative.status
                              )}`}
                            >
                              {initiative.status.charAt(0).toUpperCase() +
                                initiative.status.slice(1)}
                            </span>
                          </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col">
                          <div className="flex items-center space-x-3 mb-3">
                            <IconComponent className="w-4 h-4 text-ubuntu-blue-600" />
                            <div className="flex items-center text-gray-500 text-sm">
                              <Calendar className="w-4 h-4 mr-2" />
                              {formatDate(initiative.date)}
                            </div>
                          </div>

                          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-ubuntu-blue-600 transition-colors line-clamp-2">
                            {initiative.title}
                          </h3>

                          <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-3 flex-1">
                            {initiative.excerpt}
                          </p>

                          <div className="space-y-1 mb-4">
                            <div className="flex items-center text-xs text-gray-600">
                              <MapPin className="w-3 h-3 mr-2 text-ubuntu-blue-600" />
                              {initiative.location}
                            </div>
                            <div className="flex items-center text-xs text-gray-600">
                              <CheckCircle className="w-3 h-3 mr-2 text-green-600" />
                              {initiative.impact}
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                            <div className="text-xs text-gray-500">
                              <div className="flex items-center">
                                <Clock className="w-3 h-3 mr-1" />
                                {initiative.duration}
                              </div>
                              <div className="line-clamp-1">
                                {initiative.partners.length} partners
                              </div>
                            </div>
                            <div className="flex items-center text-ubuntu-blue-600 font-semibold text-sm">
                              Learn More
                              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </>
          )}

          {/* No Results */}
          {filteredInitiatives.length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-ubuntu-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-ubuntu-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                No initiatives found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or filters to find what you're
                looking for.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setActiveFilter("all");
                }}
                className="bg-ubuntu-blue-600 hover:bg-ubuntu-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-6 bg-ubuntu-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Connected with Our Initiatives
          </h2>
          <p className="text-xl text-ubuntu-blue-100 mb-10 leading-relaxed">
            Subscribe to receive updates on our latest initiatives, program
            launches, and impact stories from the field.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-6">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-ubuntu-orange-500 text-gray-900"
            />
            <button className="bg-ubuntu-orange-500 hover:bg-ubuntu-orange-600 text-white font-bold px-8 py-4 rounded-lg transition-colors flex items-center justify-center">
              Subscribe
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>

          <p className="text-sm text-ubuntu-blue-200">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default InitiativesPage;
