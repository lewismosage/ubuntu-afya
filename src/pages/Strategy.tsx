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
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-teal-600">
          Strategy - Coming Soon
        </h1>
      </div>
    </div>
  );
};

export default Strategy;