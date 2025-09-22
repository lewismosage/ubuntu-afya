import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Eye, Heart, Building2, Calendar, MapPin, ArrowRight, Shield, BookOpen, Cpu, HandHeart } from 'lucide-react';

const OurStory: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Executive Director',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3',
      bio: '15+ years in global health leadership. Former WHO consultant specializing in community health systems across East Africa.',
      expertise: ['Health Systems', 'Strategic Planning', 'Partnership Development']
    },
    {
      name: 'Michael Chen',
      role: 'Technology Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3',
      bio: 'Health technology innovator with background in software engineering and digital health implementation across 30+ clinics.',
      expertise: ['Digital Health', 'System Architecture', 'Data Analytics']
    },
    {
      name: 'Dr. Amara Okafor',
      role: 'Programs Director',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3',
      bio: 'Public health specialist with decade of experience implementing community health programs in rural Kenya.',
      expertise: ['Program Management', 'Community Engagement', 'M&E Systems']
    },
    {
      name: 'James Mwangi',
      role: 'Field Operations Manager',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3',
      bio: 'Local community leader overseeing day-to-day operations of 25 Ubuntu-Afya kiosks across Western Kenya.',
      expertise: ['Field Operations', 'Team Leadership', 'Logistics']
    }
  ];

  const partners = [
    { name: 'Afya Research Africa', type: 'Implementation Partner', logo: '🌍' },
    { name: 'Joanna Briggs Institute', type: 'Research Collaboration', logo: '🔬' },
    { name: 'Kenya Ministry of Health', type: 'Government Partner', logo: '🏛️' },
    { name: 'WHO Africa Region', type: 'Technical Partner', logo: '⚕️' },
    { name: 'Gates Foundation', type: 'Funding Partner', logo: '🎯' },
    { name: 'USAID Kenya', type: 'Development Partner', logo: '🤝' }
  ];

  const timeline = [
    {
      year: '2012-2015',
      title: 'Foundation & Research',
      events: [
        'Initial community health assessments conducted',
        'Partnership established with Afya Research Africa',
        'Pilot program launched in 3 rural communities'
      ],
      impact: 'Served 5,000+ patients in pilot phase'
    },
    {
      year: '2016-2018',
      title: 'Model Development',
      events: [
        'Ubuntu-Afya kiosk model formalized',
        'STONE-HMIS® prototype developed',
        'First 10 kiosks established'
      ],
      impact: 'Expanded to serve 50,000 patients annually'
    },
    {
      year: '2019-2021',
      title: 'Scale & Integration',
      events: [
        'Digital system fully integrated across all kiosks',
        'Partnership with Joanna Briggs Institute formalized',
        'COVID-19 response programs implemented'
      ],
      impact: '250% growth in HIV treatment during pandemic'
    },
    {
      year: '2022-Present',
      title: 'Sustainability Focus',
      events: [
        '25 kiosks operational across Kenya',
        'Community ownership model perfected',
        'U.S. 501(c)(3) status established'
      ],
      impact: '290,000+ patients served to date'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-green-800">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
        <div className="relative container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Story</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            From a simple belief in health equity to transforming rural healthcare across Kenya through community-driven innovation and sustainable partnerships.
          </p>
        </div>
      </section>

      {/* Who We Are - Detailed */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  <strong>Ubuntu Afya</strong> is the U.S. partner of <strong>Afya Research Africa (ARA)</strong>, a Kenyan non-profit that has pioneered community-owned health systems for over a decade. Our name reflects the African philosophy of <em>Ubuntu</em> - "I am because we are" - emphasizing our belief in collective responsibility and community empowerment.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We operate at the intersection of community health, technology innovation, and evidence-based practice. Our work is built on collaboration with communities, governments, and global partners, recognizing that lasting change comes when health systems are owned and sustained by the people they serve.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                  <h4 className="font-bold text-blue-900 mb-2">Our Core Belief</h4>
                  <p className="text-blue-800">
                    Every person deserves access to quality healthcare, no matter where they live. Healthcare should be a right, not a privilege.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3" 
                alt="Community healthcare team"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center space-x-3">
                  <HandHeart className="w-8 h-8 text-green-600" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">10+</div>
                    <div className="text-gray-600">Years of Impact</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Expanded */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                  <p className="text-blue-600">What drives us every day</p>
                </div>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To strengthen community-owned health systems and expand access to affordable, quality care in Kenya's underserved communities through innovative technology, evidence-based practices, and sustainable partnerships.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Key Focus Areas:</h4>
                <ul className="text-blue-800 space-y-1">
                  <li>• Community ownership and empowerment</li>
                  <li>• Digital health innovation</li>
                  <li>• Evidence-based care delivery</li>
                  <li>• Sustainable financing models</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                  <p className="text-green-600">The future we're building</p>
                </div>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A future where African health systems are locally led, resilient, and equitable - where every community has the resources, knowledge, and ownership to sustain their own health and wellbeing for generations to come.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Vision Components:</h4>
                <ul className="text-green-800 space-y-1">
                  <li>• Locally-led health leadership</li>
                  <li>• Climate-resilient health infrastructure</li>
                  <li>• Equitable access for all populations</li>
                  <li>• Community-powered sustainability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Ubuntu-Afya Model - Detailed */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Ubuntu-Afya Model</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              A comprehensive, community-owned healthcare system that combines local ownership, financial sustainability, and integrated services to create lasting impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: 'Community Ownership',
                description: 'Self-help groups co-own and co-manage healthcare kiosks, ensuring local control and accountability.',
                features: ['Local Governance', 'Community Decision-making', 'Transparent Operations']
              },
              {
                icon: Heart,
                title: 'Financial Sustainability',
                description: 'Community savings and credit schemes subsidize healthcare costs while generating operational dividends.',
                features: ['Savings Schemes', 'Cross-subsidization', 'Revenue Generation']
              },
              {
                icon: Cpu,
                title: 'Technology Integration',
                description: 'STONE-HMIS® digital system provides real-time data for patient tracking and health system management.',
                features: ['Real-time Data', 'Patient Follow-up', 'Performance Analytics']
              },
              {
                icon: Shield,
                title: 'Integrated Services',
                description: 'Comprehensive care including maternal health, child wellness, HIV treatment, and chronic disease management.',
                features: ['Primary Care', 'Preventive Services', 'Specialized Treatment']
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-orange-500 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                <ul className="space-y-2">
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline - Our Journey */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Journey</h2>
          <div className="max-w-6xl mx-auto">
            {timeline.map((period, index) => (
              <div key={index} className="flex flex-col md:flex-row mb-12 last:mb-0">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{period.year}</div>
                    <h3 className="text-lg font-semibold text-gray-900">{period.title}</h3>
                  </div>
                </div>
                <div className="md:w-3/4 md:pl-8">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2 mb-4">
                      {period.events.map((event, eventIndex) => (
                        <li key={eventIndex} className="flex items-center space-x-2 text-gray-600">
                          <Calendar className="w-4 h-4 text-green-500" />
                          <span>{event}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                      <span className="font-semibold text-green-800">Impact: </span>
                      <span className="text-green-700">{period.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals leading our mission to transform healthcare delivery in underserved communities across Kenya.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                <div className="space-y-1">
                  {member.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full mr-1 mb-1">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Collaboration is at the heart of our success. We work with leading organizations to create lasting impact in global health.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
                <div className="text-4xl mb-4">{partner.logo}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{partner.name}</h3>
                <p className="text-blue-600 text-sm">{partner.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Movement</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you donate, volunteer your skills, or spread the word, you'll be part of a movement 
            to make health equity a reality for every Kenyan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold inline-flex items-center space-x-2 hover:bg-gray-100 transition-colors"
            >
              <Heart className="w-5 h-5" />
              <span>Support Our Work</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center space-x-2 hover:bg-white/10 transition-colors"
            >
              <span>Get Involved</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;