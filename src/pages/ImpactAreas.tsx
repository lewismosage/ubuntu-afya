import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Smartphone, BookOpen, ArrowRight, CheckCircle, Users, Heart, TrendingUp, MapPin, Target, BarChart3, Shield } from 'lucide-react';

const ImpactAreas: React.FC = () => {
  const impactAreas = [
    {
      icon: Stethoscope,
      title: 'Primary Healthcare',
      description: 'Ubuntu-Afya kiosks provide comprehensive essential health services directly in underserved communities, co-owned with local groups to ensure accountability and sustainability.',
      features: [
        'Maternal and child health services',
        'Preventive care and health screenings',
        'Basic treatment and medication dispensing',
        'Chronic disease management',
        'Health education and promotion',
        'Community health worker training'
      ],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3',
      color: 'from-blue-500 to-blue-600',
      stats: [
        { value: '25', label: 'Operational Kiosks' },
        { value: '290K+', label: 'Patients Served' },
        { value: '60%', label: 'Women & Children' }
      ],
      impact: 'Reduced travel distance for healthcare from 10-30km to under 2km for 90% of served communities'
    },
    {
      icon: Smartphone,
      title: 'Health Technology',
      description: 'STONE-HMIS® connects clinics, communities, and county governments with real-time data to improve care, strengthen referrals, and guide decisions across health systems.',
      features: [
        'Real-time health data collection and analytics',
        'Electronic patient management systems',
        'Supply chain optimization and tracking',
        'Performance monitoring dashboards',
        'Mobile health and telemedicine capabilities',
        'Automated reporting and alerts'
      ],
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3',
      color: 'from-purple-500 to-purple-600',
      stats: [
        { value: '30', label: 'Clinics Powered' },
        { value: '95%', label: 'Data Accuracy' },
        { value: '40%', label: 'Efficiency Gain' }
      ],
      impact: 'Improved patient follow-up rates by 40% and reduced medication stock-outs by 75%'
    },
    {
      icon: BookOpen,
      title: 'Research & Evidence',
      description: 'As a collaborating center with the Joanna Briggs Institute, we equip frontline workers with tools and training to translate evidence into practice, shaping policy and improving outcomes.',
      features: [
        'Evidence-based training curricula development',
        'Community health outcomes research',
        'Best practice development and sharing',
        'Continuous quality improvement systems',
        'Policy development and advocacy support',
        'Health worker competency assessment'
      ],
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3',
      color: 'from-green-500 to-green-600',
      stats: [
        { value: '100+', label: 'Workers Trained' },
        { value: '15', label: 'Research Papers' },
        { value: '250%', label: 'Treatment Growth' }
      ],
      impact: 'Increased skilled delivery and postnatal care by 60% in kiosk catchment areas'
    }
  ];

  const overallImpact = [
    { metric: 'Communities Served', value: '45+', icon: MapPin, change: '+25%' },
    { metric: 'Lives Impacted', value: '290,000+', icon: Users, change: '+40%' },
    { metric: 'Health Workers Trained', value: '100+', icon: Shield, change: '+35%' },
    { metric: 'Treatment Compliance', value: '85%', icon: CheckCircle, change: '+20%' }
  ];

  const successStories = [
    {
      title: 'Maternal Health Transformation',
      description: 'How our kiosks reduced maternal mortality by 45% in Western Kenya',
      impact: '362 → 200 deaths per 100,000 births',
      area: 'Primary Healthcare'
    },
    {
      title: 'Digital System Breakthrough',
      description: 'STONE-HMIS® enables real-time outbreak response in remote communities',
      impact: '2-hour vs 2-week response time',
      area: 'Health Technology'
    },
    {
      title: 'Evidence-Based Training',
      description: 'Health workers equipped with latest protocols reduce child mortality',
      impact: '1 in 19 → 1 in 50 under-5 mortality',
      area: 'Research & Evidence'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-purple-800 to-green-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Impact Areas</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Transforming rural healthcare through three interconnected pillars of impact: 
            Community-driven primary care, innovative technology, and evidence-based practice.
          </p>
        </div>
      </section>

      {/* Overall Impact Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Measuring Our Impact</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {overallImpact.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{item.value}</div>
                <div className="text-gray-600 mb-2">{item.metric}</div>
                <div className="text-green-600 text-sm font-semibold">{item.change} growth</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas - Enhanced */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {impactAreas.map((area, index) => (
              <div 
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <area.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                      {area.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {area.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {area.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">Key Features:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {area.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Impact Statement */}
                  <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-2 rounded-r-lg mb-6">
                    <p className="text-blue-800 font-medium">{area.impact}</p>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold group"
                  >
                    <span>Learn More About {area.title}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative group">
                    <img
                      src={area.image}
                      alt={area.title}
                      className="w-full h-96 object-cover rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-10 rounded-2xl`} />
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                      <span className="font-semibold text-gray-900">{area.title} in Action</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Real-world impact demonstrating how our integrated approach transforms healthcare delivery in rural communities.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{story.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{story.description}</p>
                <div className="bg-green-50 p-3 rounded-lg mb-4">
                  <div className="text-green-800 font-semibold text-sm">Impact:</div>
                  <div className="text-green-900 font-bold">{story.impact}</div>
                </div>
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {story.area}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Amplify Our Impact</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in building sustainable healthcare solutions that empower communities, 
            save lives, and create lasting change across rural Kenya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold inline-flex items-center space-x-2 hover:bg-gray-100 transition-colors"
            >
              <Heart className="w-5 h-5" />
              <span>Support Our Impact</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center space-x-2 hover:bg-white/10 transition-colors"
            >
              <span>Partner With Us</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImpactAreas;