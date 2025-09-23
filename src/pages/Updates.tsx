import React, { useState } from 'react';
import { ArrowRight, Calendar, FileText, Search, Filter, ExternalLink } from 'lucide-react';

const LatestUpdatesPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'news' | 'research' | 'reports'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for updates
  const updates = [
    {
      id: 1,
      type: 'news',
      title: 'OneWorld Health Expands Operations to Three New Communities in Rural Uganda',
      excerpt: 'New partnerships with local health groups bring essential care closer to families in remote areas.',
      date: '2025-09-15',
      author: 'Communications Team',
      image: 'uganda-expansion.jpg',
      featured: true,
      tags: ['Uganda', 'Expansion', 'Community Health']
    },
    {
      id: 2,
      type: 'research',
      title: 'Impact Study: Maternal Mortality Reduction in OneWorld Health Partner Communities',
      excerpt: 'Three-year longitudinal study shows 40% reduction in maternal deaths across program areas.',
      date: '2025-09-10',
      author: 'Dr. Sarah Martinez, Research Director',
      image: 'maternal-health-study.jpg',
      featured: true,
      tags: ['Maternal Health', 'Research', 'Impact']
    },
    {
      id: 3,
      type: 'reports',
      title: '2024 Annual Impact Report: Building Healthier Communities Together',
      excerpt: 'Comprehensive overview of our achievements, challenges, and goals for sustainable healthcare.',
      date: '2025-09-01',
      author: 'OneWorld Health Team',
      image: 'annual-report-2024.jpg',
      featured: false,
      tags: ['Annual Report', 'Impact', 'Healthcare Systems']
    },
    {
      id: 4,
      type: 'news',
      title: 'New Partnership with Kenya Medical Training College Strengthens Local Capacity',
      excerpt: 'Collaboration aims to train 200+ community health workers over the next two years.',
      date: '2025-08-28',
      author: 'Partnership Team',
      image: 'kenya-partnership.jpg',
      featured: false,
      tags: ['Kenya', 'Training', 'Partnerships']
    },
    {
      id: 5,
      type: 'research',
      title: 'Community-Led Healthcare: Lessons from Five Years of Ubuntu Afya Kiosks',
      excerpt: 'Research findings on sustainability and effectiveness of community-owned health facilities.',
      date: '2025-08-20',
      author: 'Dr. Michael Chen, Health Systems Researcher',
      image: 'ubuntu-research.jpg',
      featured: false,
      tags: ['Ubuntu Afya', 'Community Ownership', 'Sustainability']
    },
    {
      id: 6,
      type: 'reports',
      title: 'Nicaragua Health System Strengthening: Mid-Year Progress Report',
      excerpt: 'Updates on infrastructure improvements and capacity building initiatives.',
      date: '2025-08-15',
      author: 'Nicaragua Country Team',
      image: 'nicaragua-progress.jpg',
      featured: false,
      tags: ['Nicaragua', 'Health Systems', 'Progress Report']
    }
  ];

  const filteredUpdates = updates.filter(update => {
    const matchesFilter = activeFilter === 'all' || update.type === activeFilter;
    const matchesSearch = update.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         update.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         update.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const featuredUpdates = filteredUpdates.filter(update => update.featured);
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
      case 'news': return 'bg-blue-100 text-blue-800';
      case 'research': return 'bg-green-100 text-green-800';
      case 'reports': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeLabel = (type: string) => {
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Latest Updates label */}
          <div className="mb-8">
            <span className="bg-yellow-400 text-black font-bold px-4 py-2 text-sm uppercase tracking-wide">
              LATEST UPDATES
            </span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-teal-800 leading-tight mb-8">
                News, Research, & Reports
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Stay informed about our latest developments, research findings, and impact reports. 
                Discover how we're advancing global health through community-driven solutions.
              </p>
            </div>
            
            <div className="flex items-center">
              <div className="w-full space-y-6">
                {/* Search Bar */}
                <div className="relative">
                  <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search updates..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:outline-none"
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
                      className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                        activeFilter === key
                          ? 'bg-teal-600 text-white'
                          : 'bg-white text-teal-600 border-2 border-teal-200 hover:bg-teal-50'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Updates */}
      {featuredUpdates.length > 0 && (
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Updates</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredUpdates.map((update, index) => (
                <article key={update.id} className={`group cursor-pointer ${index === 0 ? 'lg:row-span-2' : ''}`}>
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    {/* Image */}
                    <div className={`bg-gray-300 flex items-center justify-center ${
                      index === 0 ? 'h-80' : 'h-48'
                    }`}>
                      <span className="text-gray-500">Featured Image Placeholder</span>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getTypeColor(update.type)}`}>
                          {getTypeLabel(update.type)}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          {formatDate(update.date)}
                        </div>
                      </div>
                      
                      <h3 className={`font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors ${
                        index === 0 ? 'text-2xl' : 'text-xl'
                      }`}>
                        {update.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {update.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">By {update.author}</span>
                        <div className="flex items-center text-teal-600 font-semibold group-hover:text-teal-700">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
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

      {/* All Updates Grid */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {regularUpdates.length > 0 && (
            <>
              <h2 className="text-3xl font-bold text-gray-900 mb-12">All Updates</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularUpdates.map((update) => (
                  <article key={update.id} className="group cursor-pointer">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                      {/* Image */}
                      <div className="h-48 bg-gray-300 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">Update Image</span>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getTypeColor(update.type)}`}>
                            {getTypeLabel(update.type)}
                          </span>
                          <div className="flex items-center text-gray-500 text-sm">
                            <Calendar className="w-4 h-4 mr-2" />
                            {formatDate(update.date)}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                          {update.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                          {update.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">By {update.author}</span>
                          <div className="flex items-center text-teal-600 font-semibold group-hover:text-teal-700">
                            Read More
                            <ArrowRight className="w-4 h-4 ml-2" />
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
          {filteredUpdates.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No updates found</h3>
              <p className="text-gray-600">Try adjusting your search terms or filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-6 bg-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Subscribe to our newsletter to receive the latest news, research findings, and impact reports directly in your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="bg-yellow-400 hover:bg-yellow-500 text-teal-800 font-bold px-6 py-3 rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
          
          <p className="text-sm text-teal-200 mt-4">
            We respect your privacy and won't share your information with third parties.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LatestUpdatesPage;