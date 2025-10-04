import React, { useState } from 'react';
import { ArrowRight, Calendar, Search, Heart, Users, FileText, Microscope } from 'lucide-react';

const LatestUpdatesPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'news' | 'research' | 'reports'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const updates = [
    {
      id: 1,
      type: 'news',
      title: 'Ubuntu Afya Expands to Three New Communities in Rural Kenya',
      excerpt: 'New partnerships with local health groups bring essential care closer to families in remote areas, strengthening our network of community-owned healthcare facilities.',
      date: '2024-12-15',
      author: 'Communications Team',
      image: 'https://images.stockcake.com/public/a/2/d/a2d60a74-476b-4d38-9589-16ac4c34a0eb_large/mobile-clinic-service-stockcake.jpg',
      featured: true,
      tags: ['Kenya', 'Expansion', 'Community Health']
    },
    {
      id: 2,
      type: 'research',
      title: 'Impact Study: Maternal Mortality Reduction in Ubuntu Afya Communities',
      excerpt: 'Three-year longitudinal study shows 40% reduction in maternal deaths across program areas, demonstrating the effectiveness of community-led healthcare.',
      date: '2024-12-10',
      author: 'Dr. Elizabeth Ombech, Director of Programs',
      image: 'https://images.stockcake.com/public/1/5/a/15a725d2-c9bc-4b4f-b6f8-148dc964de54_large/doctor-treating-child-stockcake.jpg',
      featured: true,
      tags: ['Maternal Health', 'Research', 'Impact']
    },
    {
      id: 3,
      type: 'reports',
      title: '2024 Annual Impact Report: Building Healthier Communities Together',
      excerpt: 'Comprehensive overview of our achievements serving 290,000+ patients, expanding to 25 kiosks, and strengthening community healthcare systems.',
      date: '2024-12-01',
      author: 'Ubuntu Afya Team',
      image: 'https://images.stockcake.com/public/c/6/e/c6e4f926-e2bd-4959-aca8-f8c6a42cd5aa_large/rural-medical-consultation-stockcake.jpg',
      featured: false,
      tags: ['Annual Report', 'Impact', 'Healthcare Systems']
    },
    {
      id: 4,
      type: 'news',
      title: 'STONE-HMIS® Reaches Major Milestone: 25+ Healthcare Facilities Connected',
      excerpt: 'Our digital health platform now connects clinics across Kenya, enabling real-time data sharing and improved patient care coordination.',
      date: '2024-11-28',
      author: 'Technology Team',
      image: 'https://images.stockcake.com/public/d/f/6/df6687f3-e947-4f26-8b74-9357c9aedb60_large/doctor-consultation-meeting-stockcake.jpg',
      featured: false,
      tags: ['STONE-HMIS', 'Technology', 'Digital Health']
    },
    {
      id: 5,
      type: 'research',
      title: 'Community-Led Healthcare: Five Years of Ubuntu Afya Kiosks',
      excerpt: 'Research findings on sustainability and effectiveness of community-owned health facilities show promising long-term outcomes.',
      date: '2024-11-20',
      author: 'Research & Evidence Team',
      image: 'https://images.pexels.com/photos/29944635/pexels-photo-29944635.jpeg',
      featured: false,
      tags: ['Ubuntu Afya', 'Community Ownership', 'Sustainability']
    },
    {
      id: 6,
      type: 'news',
      title: 'Training 225+ Health Workers in Evidence-Based Practice',
      excerpt: 'Partnership with Joanna Briggs Institute strengthens local capacity through comprehensive training programs.',
      date: '2024-11-15',
      author: 'Capacity Building Team',
      image: 'https://images.pexels.com/photos/20333030/pexels-photo-20333030.jpeg',
      featured: false,
      tags: ['Training', 'JBI', 'Capacity Building']
    },
    {
      id: 7,
      type: 'reports',
      title: 'Health Technology Progress Report: STONE-HMIS® Impact Assessment',
      excerpt: 'Mid-year review shows significant improvements in data management and operational efficiency across network.',
      date: '2024-11-10',
      author: 'Dr. Moses Ndiritu',
      image: 'https://images.stockcake.com/public/c/6/e/c6e4f926-e2bd-4959-aca8-f8c6a42cd5aa_large/rural-medical-consultation-stockcake.jpg',
      featured: false,
      tags: ['Technology', 'Progress Report', 'STONE-HMIS']
    },
    {
      id: 8,
      type: 'news',
      title: 'Community Outreach Success: Reaching 50+ Rural Communities',
      excerpt: 'Mobile health services and community education programs expand access to essential healthcare services.',
      date: '2024-11-05',
      author: 'Rogers Omondi, Project Associate',
      image: 'https://images.stockcake.com/public/1/5/a/15a725d2-c9bc-4b4f-b6f8-148dc964de54_large/doctor-treating-child-stockcake.jpg',
      featured: false,
      tags: ['Community Health', 'Outreach', 'Rural Healthcare']
    }
  ];

  const filteredUpdates = updates.filter(update => {
    const matchesFilter = activeFilter === 'all' || update.type === activeFilter;
    const matchesSearch = update.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         update.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         update.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const featuredUpdate = filteredUpdates.find(update => update.featured);
  const secondFeatured = filteredUpdates.filter(update => update.featured)[1];
  const regularUpdates = filteredUpdates.filter(update => !update.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'news': return 'bg-ubuntu-blue-600 text-white';
      case 'research': return 'bg-ubuntu-orange-500 text-white';
      case 'reports': return 'bg-green-600 text-white';
      default: return 'bg-gray-600 text-white';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'news': return Users;
      case 'research': return Microscope;
      case 'reports': return FileText;
      default: return Heart;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="bg-ubuntu-orange-500 text-white font-bold px-4 py-2 text-sm uppercase tracking-wide">
              LATEST UPDATES
            </span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-ubuntu-blue-800 leading-tight">
                News, Research & Impact Reports
              </h1>
            </div>
            <div className="flex items-center">
              <p className="text-xl text-gray-600 leading-relaxed">
                Stay informed about our latest developments, research findings, and impact across 
                Kenya's healthcare landscape. Discover how we're advancing community-led healthcare solutions.
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
                  placeholder="Search updates by title, content, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-ubuntu-blue-500 focus:outline-none"
                />
              </div>
              
              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-3">
                {[
                  { key: 'all', label: 'All Updates' },
                  { key: 'news', label: 'News' },
                  { key: 'research', label: 'Research' },
                  { key: 'reports', label: 'Reports' }
                ].map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => setActiveFilter(key as any)}
                    className={`px-5 py-2 rounded-lg font-semibold transition-all ${
                      activeFilter === key
                        ? 'bg-ubuntu-blue-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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

      {/* Featured Stories Section */}
      {(featuredUpdate || secondFeatured) && (
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-ubuntu-blue-800 mb-12">Featured Stories</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Main Featured Story */}
              {featuredUpdate && (
                <article className="group cursor-pointer">
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                    <div className="relative h-64">
                      <img
                        src={featuredUpdate.image}
                        alt={featuredUpdate.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-2 rounded-full text-xs font-bold ${getTypeColor(featuredUpdate.type)}`}>
                          Featured
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        {React.createElement(getTypeIcon(featuredUpdate.type), { 
                          className: "w-4 h-4 text-ubuntu-blue-600" 
                        })}
                        <span className="text-xs font-semibold text-ubuntu-blue-600 uppercase">
                          {featuredUpdate.type}
                        </span>
                        <span className="text-gray-400">•</span>
                        <div className="flex items-center text-gray-500 text-xs">
                          <Calendar className="w-3 h-3 mr-1" />
                          {formatDate(featuredUpdate.date)}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-ubuntu-blue-600 transition-colors">
                        {featuredUpdate.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {featuredUpdate.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="text-sm text-gray-500">By {featuredUpdate.author}</span>
                        <div className="flex items-center text-ubuntu-blue-600 font-semibold text-sm group-hover:text-ubuntu-blue-700">
                          Read Full Story
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              )}

              {/* Secondary Featured */}
              {secondFeatured && (
                <article className="group cursor-pointer">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full">
                    <div className="relative h-64">
                      <img
                        src={secondFeatured.image}
                        alt={secondFeatured.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        {React.createElement(getTypeIcon(secondFeatured.type), { 
                          className: "w-4 h-4 text-ubuntu-orange-600" 
                        })}
                        <span className="text-xs font-semibold text-ubuntu-orange-600 uppercase">
                          {secondFeatured.type}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-ubuntu-blue-600 transition-colors">
                        {secondFeatured.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {secondFeatured.excerpt}
                      </p>
                      
                      <div className="flex items-center text-ubuntu-blue-600 font-semibold text-sm pt-4 border-t border-gray-100">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </div>
                </article>
              )}
            </div>
          </div>
        </section>
      )}

      {/* All Updates Grid */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {regularUpdates.length > 0 && (
            <>
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-bold text-ubuntu-blue-800">Recent Updates</h2>
                <span className="text-gray-600">{regularUpdates.length} {regularUpdates.length === 1 ? 'update' : 'updates'} found</span>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularUpdates.map((update) => {
                  const IconComponent = getTypeIcon(update.type);
                  return (
                    <article key={update.id} className="group cursor-pointer">
                      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                        <div className="relative h-48">
                          <img
                            src={update.image}
                            alt={update.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-4 left-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${getTypeColor(update.type)}`}>
                              {update.type.toUpperCase()}
                            </span>
                          </div>
                        </div>
                        
                        <div className="p-6 flex-1 flex flex-col">
                          <div className="flex items-center space-x-3 mb-3">
                            <IconComponent className="w-4 h-4 text-ubuntu-blue-600" />
                            <div className="flex items-center text-gray-500 text-sm">
                              <Calendar className="w-4 h-4 mr-2" />
                              {formatDate(update.date)}
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-ubuntu-blue-600 transition-colors line-clamp-2">
                            {update.title}
                          </h3>
                          
                          <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-3 flex-1">
                            {update.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                            <span className="text-xs text-gray-500 line-clamp-1">{update.author}</span>
                            <div className="flex items-center text-ubuntu-blue-600 font-semibold text-sm">
                              Read
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
          {filteredUpdates.length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-ubuntu-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-ubuntu-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">No updates found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search terms or filters to find what you're looking for.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveFilter('all');
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
            Stay Connected with Ubuntu Afya
          </h2>
          <p className="text-xl text-ubuntu-blue-100 mb-10 leading-relaxed">
            Subscribe to receive the latest news, research findings, and impact reports 
            directly in your inbox. Join our community of changemakers.
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

export default LatestUpdatesPage;