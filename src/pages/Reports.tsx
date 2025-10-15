import React, { useState } from "react";
import {
  ArrowRight,
  Calendar,
  Search,
  FileText,
  Download,
  Eye,
  Filter,
} from "lucide-react";

const ReportsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<
    "all" | "annual" | "research" | "progress" | "impact"
  >("all");
  const [searchTerm, setSearchTerm] = useState("");

  const reports = [
    {
      id: 1,
      type: "annual",
      title:
        "2024 Annual Impact Report: Building Healthier Communities Together",
      excerpt:
        "Comprehensive overview of our achievements serving 290,000+ patients, expanding to 25 kiosks, and strengthening community healthcare systems across Kenya.",
      date: "2024-12-01",
      author: "Ubuntu Afya Team",
      image:
        "https://images.stockcake.com/public/c/6/e/c6e4f926-e2bd-4959-aca8-f8c6a42cd5aa_large/rural-medical-consultation-stockcake.jpg",
      featured: true,
      tags: ["Annual Report", "Impact", "Healthcare Systems"],
      downloadUrl: "#",
      pages: 45,
      size: "2.3 MB",
    },
    {
      id: 2,
      type: "research",
      title:
        "Impact Study: Maternal Mortality Reduction in Ubuntu Afya Communities",
      excerpt:
        "Three-year longitudinal study shows 40% reduction in maternal deaths across program areas, demonstrating the effectiveness of community-led healthcare.",
      date: "2024-12-10",
      author: "Dr. Elizabeth Ombech, Director of Programs",
      image:
        "https://images.stockcake.com/public/1/5/a/15a725d2-c9bc-4b4f-b6f8-148dc964de54_large/doctor-treating-child-stockcake.jpg",
      featured: true,
      tags: ["Maternal Health", "Research", "Impact"],
      downloadUrl: "#",
      pages: 28,
      size: "1.8 MB",
    },
    {
      id: 3,
      type: "progress",
      title: "Health Technology Progress Report: STONE-HMIS® Impact Assessment",
      excerpt:
        "Mid-year review shows significant improvements in data management and operational efficiency across our healthcare network.",
      date: "2024-11-10",
      author: "Dr. Moses Ndiritu",
      image:
        "https://images.stockcake.com/public/c/6/e/c6e4f926-e2bd-4959-aca8-f8c6a42cd5aa_large/rural-medical-consultation-stockcake.jpg",
      featured: false,
      tags: ["Technology", "Progress Report", "STONE-HMIS"],
      downloadUrl: "#",
      pages: 22,
      size: "1.5 MB",
    },
    {
      id: 4,
      type: "research",
      title: "Community-Led Healthcare: Five Years of Ubuntu Afya Kiosks",
      excerpt:
        "Research findings on sustainability and effectiveness of community-owned health facilities show promising long-term outcomes.",
      date: "2024-11-20",
      author: "Research & Evidence Team",
      image:
        "https://images.pexels.com/photos/29944635/pexels-photo-29944635.jpeg",
      featured: false,
      tags: ["Ubuntu Afya", "Community Ownership", "Sustainability"],
      downloadUrl: "#",
      pages: 35,
      size: "2.1 MB",
    },
    {
      id: 5,
      type: "impact",
      title: "Quarterly Impact Report: Q3 2024 Healthcare Access Improvements",
      excerpt:
        "Detailed analysis of healthcare access improvements, patient outcomes, and community engagement metrics for the third quarter.",
      date: "2024-10-15",
      author: "Impact Assessment Team",
      image:
        "https://images.stockcake.com/public/1/5/a/15a725d2-c9bc-4b4f-b6f8-148dc964de54_large/doctor-treating-child-stockcake.jpg",
      featured: false,
      tags: ["Quarterly Report", "Healthcare Access", "Patient Outcomes"],
      downloadUrl: "#",
      pages: 18,
      size: "1.2 MB",
    },
    {
      id: 6,
      type: "research",
      title: "Digital Health Implementation: STONE-HMIS® Adoption Study",
      excerpt:
        "Comprehensive study on the adoption and effectiveness of our digital health management system across rural healthcare facilities.",
      date: "2024-09-30",
      author: "Technology Research Team",
      image:
        "https://images.stockcake.com/public/d/f/6/df6687f3-e947-4f26-8b74-9357c9aedb60_large/doctor-consultation-meeting-stockcake.jpg",
      featured: false,
      tags: ["Digital Health", "STONE-HMIS", "Technology Adoption"],
      downloadUrl: "#",
      pages: 31,
      size: "1.9 MB",
    },
    {
      id: 7,
      type: "annual",
      title: "2023 Annual Impact Report: Strengthening Community Healthcare",
      excerpt:
        "Previous year's comprehensive report highlighting key achievements, challenges overcome, and lessons learned in community healthcare delivery.",
      date: "2023-12-15",
      author: "Ubuntu Afya Team",
      image:
        "https://images.stockcake.com/public/c/6/e/c6e4f926-e2bd-4959-aca8-f8c6a42cd5aa_large/rural-medical-consultation-stockcake.jpg",
      featured: false,
      tags: ["Annual Report", "Community Healthcare", "Impact"],
      downloadUrl: "#",
      pages: 42,
      size: "2.2 MB",
    },
    {
      id: 8,
      type: "impact",
      title: "Health Worker Training Impact Assessment",
      excerpt:
        "Evaluation of our comprehensive training programs for 225+ health workers and their impact on service delivery quality.",
      date: "2024-08-20",
      author: "Capacity Building Team",
      image:
        "https://images.pexels.com/photos/20333030/pexels-photo-20333030.jpeg",
      featured: false,
      tags: ["Training", "Health Workers", "Capacity Building"],
      downloadUrl: "#",
      pages: 26,
      size: "1.6 MB",
    },
  ];

  const filteredReports = reports.filter((report) => {
    const matchesFilter =
      activeFilter === "all" || report.type === activeFilter;
    const matchesSearch =
      report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesFilter && matchesSearch;
  });

  const featuredReports = filteredReports.filter((report) => report.featured);
  const regularReports = filteredReports.filter((report) => !report.featured);

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
      case "annual":
        return "bg-ubuntu-blue-600 text-white";
      case "research":
        return "bg-ubuntu-orange-500 text-white";
      case "progress":
        return "bg-green-600 text-white";
      case "impact":
        return "bg-purple-600 text-white";
      default:
        return "bg-gray-600 text-white";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "annual":
        return "Annual Report";
      case "research":
        return "Research Study";
      case "progress":
        return "Progress Report";
      case "impact":
        return "Impact Report";
      default:
        return "Report";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="bg-ubuntu-orange-500 text-white font-bold px-4 py-2 text-sm uppercase tracking-wide">
              REPORTS & DOCUMENTATION
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-ubuntu-blue-800 leading-tight">
                Research & Impact Reports
              </h1>
            </div>
            <div className="flex items-center">
              <p className="text-xl text-gray-600 leading-relaxed">
                Access our comprehensive reports, research studies, and impact
                assessments. Discover the evidence behind our community-led
                healthcare approach and its measurable outcomes.
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
                  placeholder="Search reports by title, content, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-ubuntu-blue-500 focus:outline-none"
                />
              </div>

              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-3">
                {[
                  { key: "all", label: "All Reports" },
                  { key: "annual", label: "Annual Reports" },
                  { key: "research", label: "Research Studies" },
                  { key: "progress", label: "Progress Reports" },
                  { key: "impact", label: "Impact Reports" },
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

      {/* Featured Reports Section */}
      {featuredReports.length > 0 && (
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-ubuntu-blue-800 mb-12">
              Featured Reports
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredReports.map((report) => (
                <article key={report.id} className="group cursor-pointer">
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
                    <div className="relative h-64">
                      <img
                        src={report.image}
                        alt={report.title}
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
                            report.type
                          )}`}
                        >
                          {getTypeLabel(report.type)}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <FileText className="w-4 h-4 text-ubuntu-blue-600" />
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          {formatDate(report.date)}
                        </div>
                        <span className="text-gray-400">•</span>
                        <span className="text-sm text-gray-500">
                          {report.pages} pages
                        </span>
                        <span className="text-gray-400">•</span>
                        <span className="text-sm text-gray-500">
                          {report.size}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-ubuntu-blue-600 transition-colors">
                        {report.title}
                      </h3>

                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {report.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="text-sm text-gray-500">
                          By {report.author}
                        </span>
                        <div className="flex space-x-3">
                          <button className="flex items-center text-ubuntu-blue-600 font-semibold text-sm hover:text-ubuntu-blue-700 transition-colors">
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </button>
                          <button className="flex items-center text-ubuntu-orange-500 font-semibold text-sm hover:text-ubuntu-orange-600 transition-colors">
                            <Download className="w-4 h-4 mr-1" />
                            Download
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Reports Grid */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {regularReports.length > 0 && (
            <>
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-bold text-ubuntu-blue-800">
                  All Reports
                </h2>
                <span className="text-gray-600">
                  {regularReports.length}{" "}
                  {regularReports.length === 1 ? "report" : "reports"} found
                </span>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularReports.map((report) => (
                  <article key={report.id} className="group cursor-pointer">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100">
                      <div className="relative h-48">
                        <img
                          src={report.image}
                          alt={report.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold ${getTypeColor(
                              report.type
                            )}`}
                          >
                            {getTypeLabel(report.type)}
                          </span>
                        </div>
                      </div>

                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center space-x-3 mb-3">
                          <FileText className="w-4 h-4 text-ubuntu-blue-600" />
                          <div className="flex items-center text-gray-500 text-sm">
                            <Calendar className="w-4 h-4 mr-2" />
                            {formatDate(report.date)}
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-ubuntu-blue-600 transition-colors line-clamp-2">
                          {report.title}
                        </h3>

                        <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-3 flex-1">
                          {report.excerpt}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="text-xs text-gray-500">
                            <div>
                              {report.pages} pages • {report.size}
                            </div>
                            <div className="line-clamp-1">{report.author}</div>
                          </div>
                          <div className="flex space-x-2">
                            <button className="flex items-center text-ubuntu-blue-600 font-semibold text-sm hover:text-ubuntu-blue-700 transition-colors">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="flex items-center text-ubuntu-orange-500 font-semibold text-sm hover:text-ubuntu-orange-600 transition-colors">
                              <Download className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}

          {/* No Results */}
          {filteredReports.length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-ubuntu-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-ubuntu-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                No reports found
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
            Stay Updated with Our Latest Reports
          </h2>
          <p className="text-xl text-ubuntu-blue-100 mb-10 leading-relaxed">
            Subscribe to receive notifications when new reports, research
            studies, and impact assessments are published.
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

export default ReportsPage;
