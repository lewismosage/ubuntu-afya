import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Our Story', href: '/our-story' },
    { name: 'Impact Areas', href: '/impact' },
    { name: 'Our Strategy', href: '/strategy' },
    { name: 'Latest Updates', href: '/updates' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const impactAreas = [
    'Primary Healthcare',
    'Health Technology',
    'Research & Evidence',
    'Community Empowerment',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-green-400 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Ubuntu <span className="text-green-400">Afya</span></h2>
                <p className="text-blue-200 text-sm">Community-Owned Healthcare</p>
              </div>
            </Link>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Transforming rural healthcare across Kenya through community-driven innovation 
              and sustainable partnerships.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-blue-800/50 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-green-400">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-blue-100 hover:text-green-300 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Impact Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-green-400">Impact Areas</h3>
            <ul className="space-y-3">
              {impactAreas.map((area) => (
                <li key={area}>
                  <span className="text-blue-100 flex items-center space-x-2">
                    <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                    <span>{area}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-green-400">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-800/50 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-blue-200 text-sm">Email</p>
                  <a href="mailto:info@ubuntuafya.org" className="text-blue-100 hover:text-green-300 transition-colors">
                    info@ubuntuafya.org
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-800/50 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-blue-200 text-sm">Phone</p>
                  <a href="tel:+1234567890" className="text-blue-100 hover:text-green-300 transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-800/50 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-blue-200 text-sm">Address</p>
                  <p className="text-blue-100">Nairobi, Kenya & Partner Offices Worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-blue-300 text-sm">
              © {currentYear} Ubuntu Afya. All rights reserved. | 501(c)(3) Nonprofit Organization
            </div>
            <div className="flex space-x-6 text-sm text-blue-300">
              <Link to="/privacy" className="hover:text-green-300 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-green-300 transition-colors">Terms of Service</Link>
              <Link to="/financials" className="hover:text-green-300 transition-colors">Financial Reports</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;