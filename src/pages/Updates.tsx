import React, { useState } from 'react';
import { Calendar, User, ArrowRight, FileText, Play, Mic, BookOpen, Video, BarChart3, Heart } from 'lucide-react';

const Updates: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Updates', icon: FileText, count: 12 },
    { id: 'news', label: 'News', icon: Mic, count: 4 },
    { id: 'stories', label: 'Stories', icon: BookOpen, count: 3 },
    { id: 'videos', label: 'Videos', icon: Video, count: 2 },
    { id: 'research', label: 'Research', icon: BarChart3, count: 2 },
    { id: 'reports', label: 'Reports', icon: FileText, count: 1 }
  ];

  const allUpdates = [
    // News
    {
      id: 1,
      type: 'news',
      title: 'New Ubuntu-Afya Kiosk Launch in Western Kenya',
      excerpt: 'We are excited to announce the opening of our 25th healthcare kiosk in collaboration with local communities in Bungoma County.',
      date: '2024-01-15',
      author: 'Dr. Sarah Chen',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3',
      readTime: '3 min read',
      tags: ['New Kiosk', 'Expansion', 'Community Health']
    },
    {
      id: 2,
      type: 'news',
      title: 'Partnership with Ministry of Health Strengthened',
      excerpt: 'New memorandum of understanding signed to integrate Ubuntu-Afya kiosks into national health system.',
      date: '2024-01-10',
      author: 'Programs Team',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3',
      readTime: '2 min read',
      tags: ['Partnership', 'Government', 'Integration']
    },

    // Stories
    {
      id: 3,
      type: 'stories',
      title: 'From Patient to Health Worker: Mary\'s Journey',
      excerpt: 'How one woman\'s experience with maternal care inspired her to become a community health worker.',
      date: '2024-01-12',
      author: 'Storytelling Team',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3',
      readTime: '5 min read',
      tags: ['Transformation', 'Women Empowerment', 'Community']
    },
    {
      id: 4,
      type: 'stories',
      title: 'How STONE-HMIS® Saved Little Kamau',
      excerpt: 'Real-time tracking system enables rapid response for a child with pneumonia in remote village.',
      date: '2024-01-05',
      author: 'Field Team',
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3',
      readTime: '4 min read',
      tags: ['Technology', 'Child Health', 'Success Story']
    },

    // Videos
    {
      id: 5,
      type: 'videos',
      title: 'A Day in the Life: Community Health Worker',
      excerpt: 'Follow Grace as she provides care and education to families in her community.',
      date: '2024-01-08',
      author: 'Media Team',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3',
      readTime: '2 min watch',
      tags: ['Documentary', 'Community Workers', 'Daily Life'],
      videoUrl: '#'
    },
    {
      id: 6,
      type: 'videos',
      title: 'STONE-HMIS® System Demonstration',
      excerpt: 'See how our digital health system improves patient care and data management.',
      date: '2024-01-03',
      author: 'Tech Team',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3',
      readTime: '3 min watch',
      tags: ['Technology', 'Demo', 'Digital Health'],
      videoUrl: '#'
    },

    // Research
    {
      id: 7,
      type: 'research',
      title: 'STONE-HMIS® Impact Study Published in Lancet',
      excerpt: 'Peer-reviewed research demonstrates 40% improvement in patient follow-up rates.',
      date: '2024-01-18',
      author: 'Research Team',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3',
      readTime: '8 min read',
      tags: ['Publication', 'Data', 'Evidence']
    },
    {
      id: 8,
      type: 'research',
      title: 'Community Ownership Model: 3-Year Outcomes',
      excerpt: 'Analysis shows sustained health improvements in communities with co-owned kiosks.',
      date: '2024-01-14',
      author: 'Dr. Amara Okafor',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3',
      readTime: '6 min read',
      tags: ['Study', 'Sustainability', 'Outcomes']
    },

    // Reports
    {
      id: 9,
      type: 'reports',
      title: '2023 Annual Impact Report',
      excerpt: 'Comprehensive overview of our achievements and milestones in transforming rural healthcare.',
      date: '2024-01-02',
      author: 'Executive Director',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3',
      readTime: '10 min read',
      tags: ['Annual Report', 'Impact', 'Metrics'],
      downloadUrl: '#'
    }
  ];

  const filteredUpdates = activeCategory === 'all' 
    ? allUpdates 
    : allUpdates.filter(update => update.type === activeCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getTypeColor = (type: string) => {
    const colors = {
      news: 'bg-blue-100 text-blue-800',
      stories: 'bg-green-100 text-green-800',
      videos: 'bg-purple-100 text-purple-800',
      research: 'bg-orange-100 text-orange-800',
      reports: 'bg-red-100 text-red-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getTypeIcon = (type: string) => {
    const icons = {
      news: Mic,
      stories: BookOpen,
      videos: Video,
      research: BarChart3,
      reports: FileText
    };
    return icons[type as keyof typeof icons] || FileText;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-900 via-blue-800 to-green-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Latest Updates</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Stay informed with our latest news, inspiring stories, research findings, and impact reports from the field.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{category.label}</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    activeCategory === category.id
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-300 text-gray-700'
                  }`}>
                    {category.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 md:p-12 border border-blue-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <Heart className="w-4 h-4" />
                  <span>Featured Story</span>
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  How Community Ownership Transformed Healthcare in Rural Kenya
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Discover how our partnership with local self-help groups led to sustainable healthcare solutions that serve over 290,000 patients annually.
                </p>
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold">
                  <span>Read the Full Story</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3" 
                  alt="Featured Story"
                  className="rounded-2xl shadow-lg"
                />
                <button className="absolute inset-0 flex items-center justify-center group">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-all duration-200">
                    <Play className="w-6 h-6 text-blue-600 ml-1" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Updates Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredUpdates.map((update) => {
              const TypeIcon = getTypeIcon(update.type);
              return (
                <article key={update.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative">
                    <img 
                      src={update.image} 
                      alt={update.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(update.type)}`}>
                        <TypeIcon className="w-3 h-3" />
                        <span>{update.type.charAt(0).toUpperCase() + update.type.slice(1)}</span>
                      </span>
                    </div>
                    {update.type === 'videos' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-all duration-200">
                          <Play className="w-5 h-5 text-purple-600 ml-0.5" />
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2 text-gray-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(update.date)}</span>
                      </div>
                      <span className="text-gray-400 text-sm">{update.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                      {update.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {update.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2 text-gray-500">
                        <User className="w-4 h-4" />
                        <span className="text-sm">{update.author}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {update.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold group">
                      <span>
                        {update.type === 'videos' ? 'Watch Now' : 
                         update.type === 'reports' ? 'Download Report' : 'Read More'}
                      </span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-blue-100 mb-8">
              Get the latest news, stories, and impact reports delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Updates;