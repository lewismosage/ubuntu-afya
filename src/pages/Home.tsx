import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Heart, Users, TrendingUp, MapPin } from 'lucide-react';

const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-green-800">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-green-800/80"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-6 h-6 bg-orange-400 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-20 w-4 h-4 bg-green-300 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-20 w-8 h-8 bg-blue-300 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <div className="max-w-6xl mx-auto">
            {/* Logo/Brand */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                Ubuntu <span className="text-green-400">Afya</span>
              </h1>
              <div className="w-24 h-1 bg-orange-400 mx-auto mb-6"></div>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Community-Owned Healthcare Transforming Rural Kenya
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
              {/* Left Column - Main Message */}
              <div className="text-left animate-fade-in-left">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Reimagining Healthcare 
                  <span className="block text-orange-400">Hand in Hand</span>
                  with Communities
                </h2>
                <p className="text-lg md:text-xl mb-8 text-blue-100 leading-relaxed">
                  At Ubuntu Afya, we partner with communities to build healthcare solutions 
                  that are accessible, sustainable, and owned by the people they serve.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/donate"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 text-sm"
                  >
                    <Heart className="w-4 h-4" />
                    <span>Support Our Mission</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                  
                  <button className="border-2 border-white/30 hover:border-white/60 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 backdrop-blur-sm flex items-center justify-center space-x-2 text-sm">
                    <Play className="w-4 h-4" />
                    <span>Watch Our Story</span>
                  </button>
                </div>
              </div>

              {/* Right Column - Impact Stats */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 animate-fade-in-right">
                <h3 className="text-2xl font-bold mb-6 text-green-300">Our Impact</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-green-300" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">25</div>
                      <div className="text-blue-100">Ubuntu-Afya Kiosks</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-300" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">290K+</div>
                      <div className="text-blue-100">Patients Served</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-orange-300" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">250%</div>
                      <div className="text-blue-100">HIV Treatment Growth</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Removed the bouncing scroll indicator */}
      </section>

      {/* Urgent Stats Section */}
      <section className="py-16 bg-red-50 border-t border-b border-red-200">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-bold text-center text-red-800 mb-8">
            The Healthcare Crisis in Rural Kenya
          </h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
              <div className="text-3xl font-bold text-red-600">4 in 10</div>
              <div className="text-red-800 mt-2">Kenyans lack access to essential health services</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
              <div className="text-3xl font-bold text-red-600">10-30km</div>
              <div className="text-red-800 mt-2">Distance to rural clinics for many families</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
              <div className="text-3xl font-bold text-red-600">1 in 19</div>
              <div className="text-red-800 mt-2">Children die before age 5 from preventable causes</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
              <div className="text-3xl font-bold text-red-600">362</div>
              <div className="text-red-800 mt-2">Maternal deaths per 100,000 births</div>
            </div>
          </div>
        </div>
      </section>

      {/* Model Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Community-Owned Model</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ubuntu Afya kiosks are co-owned and co-managed by local self-help groups, ensuring 
              accountability and long-term sustainability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community Ownership</h3>
              <p className="text-gray-600">Local self-help groups co-own and co-manage healthcare kiosks</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Financial Sustainability</h3>
              <p className="text-gray-600">Community savings schemes subsidize care and generate dividends</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Integrated Services</h3>
              <p className="text-gray-600">Comprehensive care from maternal health to chronic disease management</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;