import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Cpu, BookOpen, ArrowRight, Calendar, Users, TrendingUp, MapPin, Heart, BarChart3, Shield, Zap, Clock, CheckCircle } from 'lucide-react';

const Strategy: React.FC = () => {
  const strategicPillars = [
    {
      icon: Users,
      title: 'Community Health Systems',
      description: 'Building and sustaining strong community health systems through Ubuntu-Afya centers that are owned, managed, and sustained by local communities.',
      focus: ['Community Ownership Models', 'Local Partnership Development', 'Sustainable Operations', 'Capacity Building'],
      metrics: ['25 Kiosks Established', '60+ Self-Help Groups', '95% Local Staff'],
      color: 'blue'
    },
    {
      icon: Cpu,
      title: 'Digital Health Innovation',
      description: 'Expanding STONE-HMIS® to ensure real-time, reliable data flow across community clinics, referral hospitals, and county health systems.',
      focus: ['Real-time Data Analytics', 'Patient Tracking Systems', 'System Integration', 'Mobile Health Solutions'],
      metrics: ['30 Clinics Connected', 'Real-time Reporting', '95% Data Accuracy'],
      color: 'green'
    },
    {
      icon: BookOpen,
      title: 'Research into Practice',
      description: 'Translating evidence-based research into practical interventions through training, policy influence, and continuous quality improvement.',
      focus: ['Health Worker Training', 'Evidence-Based Protocols', 'Policy Influence', 'Quality Improvement'],
      metrics: ['100+ Workers Trained', '15 Research Papers', 'Policy Changes'],
      color: 'orange'
    }
  ];

  const strategicTimeline = [
    {
      year: '2023',
      phase: 'Foundation',
      focus: 'Strengthening core infrastructure and partnerships',
      initiatives: [
        'Website and communication systems refresh',
        'Initial fundraising campaigns',
        'Donor engagement strategy implementation',
        'Baseline data collection systems'
      ],
      icon: Shield
    },
    {
      year: '2024',
      phase: 'Expansion',
      focus: 'Scaling operations and community reach',
      initiatives: [
        'Scale Ubuntu-Afya Kiosks to new regions',
        'Comprehensive grant applications',
        'Partnership development initiatives',
        'Community mobilization programs'
      ],
      icon: MapPin
    },
    {
      year: '2025',
      phase: 'Integration',
      focus: 'Deepening system integration and impact',
      initiatives: [
        'STONE-HMIS® digital health system upgrades',
        'Community savings schemes establishment',
        'Self-Help Group empowerment programs',
        'Advanced training for health workers'
      ],
      icon: Zap
    },
    {
      year: '2026',
      phase: 'Sustainability',
      focus: 'Achieving long-term program sustainability',
      initiatives: [
        'Diversified funding streams implementation',
        'Complete digital health integration',
        'Community ownership model optimization',
        'Scale-ready model documentation'
      ],
      icon: CheckCircle
    }
  ];

  const priorities = [
    {
      level: 'High Priority',
      title: 'Digital Health Integration',
      description: 'STONE-HMIS® system deployment requires immediate partner support and technical expertise for seamless healthcare data management across all 25 kiosks.',
      timeline: 'Q1 2024 - Q4 2025',
      resources: ['Technical Partners', '$250K Funding', 'IT Infrastructure'],
      icon: Cpu,
      color: 'red'
    },
    {
      level: 'Medium Priority',
      title: 'Community Empowerment',
      description: 'Self-Help Group development and savings schemes need strategic partnerships to ensure sustainable community ownership models across all operational regions.',
      timeline: 'Q2 2024 - Ongoing',
      resources: ['Community Organizers', 'Financial Training', 'Partnership Development'],
      icon: Users,
      color: 'blue'
    },
    {
      level: 'Standard Priority',
      title: 'Communications Enhancement',
      description: 'Website and social media improvements support ongoing visibility efforts while building donor confidence and engagement through transparent reporting.',
      timeline: 'Q1 2024 - Q2 2024',
      resources: ['Digital Marketing', 'Content Creation', 'Analytics Tools'],
      icon: TrendingUp,
      color: 'green'
    }
  ];

  const keyPerformanceIndicators = [
    { metric: 'Kiosks Operational', target: '35', current: '25', progress: 71 },
    { metric: 'Patients Served Annually', target: '500,000', current: '290,000', progress: 58 },
    { metric: 'Health Workers Trained', target: '200', current: '100', progress: 50 },
    { metric: 'Digital System Integration', target: '100%', current: '60%', progress: 60 }
  ];

  const getColorClasses = (color: string) => {
    const classes = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      orange: 'from-orange-500 to-orange-600',
      red: 'from-red-500 to-red-600'
    };
    return classes[color as keyof typeof classes] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-purple-800 to-green-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Strategic Framework</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            A comprehensive roadmap for transforming rural healthcare through community-led innovation, 
            technology integration, and evidence-based practices (2023-2026).
          </p>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Strategic Overview</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Our 2023-2026 strategy is built on the belief that the future of healthcare in Africa lies in models 
              that are both community-led and innovation-driven. We're creating lasting change by strengthening 
              health systems from the ground up through three interconnected strategic pillars.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                <div className="text-gray-600">Community Health Kiosks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">290K+</div>
                <div className="text-gray-600">Patients Served Annually</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                <div className="text-gray-600">Community Ownership Goal</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars - Enhanced */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Three Strategic Pillars</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our integrated approach combines community empowerment, technological innovation, and evidence-based practice 
              to create sustainable healthcare solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {strategicPillars.map((pillar, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(pillar.color)} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{pillar.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{pillar.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Focus Areas:</h4>
                  <ul className="space-y-2">
                    {pillar.focus.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-2 text-gray-700">
                        <Target className="w-4 h-4 text-green-500" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Current Metrics:</h4>
                  <div className="space-y-2">
                    {pillar.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">{metric}</span>
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four-Year Implementation Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Strategic Implementation Timeline</h2>
          <div className="max-w-6xl mx-auto">
            {strategicTimeline.map((year, index) => {
              const IconComponent = year.icon;
              return (
                <div key={index} className="flex flex-col md:flex-row mb-12 last:mb-0">
                  <div className="md:w-1/4 mb-6 md:mb-0">
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">{year.year}</div>
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <IconComponent className="w-5 h-5 text-green-500" />
                        <span className="font-semibold text-gray-900">{year.phase}</span>
                      </div>
                      <p className="text-sm text-gray-600">{year.focus}</p>
                    </div>
                  </div>
                  <div className="md:w-3/4 md:pl-8">
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-4">Key Initiatives:</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {year.initiatives.map((initiative, initiativeIndex) => (
                          <div key={initiativeIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{initiative}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Priority Implementation Framework */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Priority Implementation Framework</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Focused initiatives with clear timelines and resource requirements to ensure strategic objectives are met efficiently.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {priorities.map((priority, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex items-start space-x-6 flex-grow">
                    <div className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(priority.color)} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <priority.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-4 mb-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          priority.color === 'red' ? 'bg-red-100 text-red-800' :
                          priority.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {priority.level}
                        </span>
                        <span className="flex items-center space-x-2 text-gray-500 text-sm">
                          <Clock className="w-4 h-4" />
                          <span>{priority.timeline}</span>
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{priority.title}</h3>
                      <p className="text-gray-600 mb-4">{priority.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {priority.resources.map((resource, resIndex) => (
                          <span key={resIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                            {resource}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:text-right">
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      <span>Get Involved</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Performance Indicators */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Strategic KPIs & Targets</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyPerformanceIndicators.map((kpi, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
                <div className="text-2xl font-bold text-gray-900 mb-2">{kpi.current}</div>
                <div className="text-gray-600 text-sm mb-4">of {kpi.target} target</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full" 
                    style={{ width: `${kpi.progress}%` }}
                  ></div>
                </div>
                <div className="text-sm text-gray-700">{kpi.metric}</div>
                <div className="text-xs text-gray-500 mt-1">{kpi.progress}% progress</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Partner in Our Strategy</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in implementing this comprehensive strategy to transform healthcare delivery across rural Kenya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold inline-flex items-center space-x-2 hover:bg-gray-100 transition-colors"
            >
              <Heart className="w-5 h-5" />
              <span>Support Our Strategy</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center space-x-2 hover:bg-white/10 transition-colors"
            >
              <span>Become a Partner</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Strategy;