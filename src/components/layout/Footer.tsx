import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const whoWeAre = ["Overview", "Our People", "Impact Reports"];

  const ourWork = ["Our Model", "Our Strategy", "Latest Updates"];

  const getInvolved = [
    "Volunteer",
    "Donate",
    "Partnerships",
    "Events",
    "Contact Us",
  ];

  const resources = [
    "Privacy Policy",
    "Financial Reports",
    "Annual Report",
    "FAQ",
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-ubuntu-blue-700 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-ubuntu-blue-600">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="max-w-4xl">
            <h3 className="text-2xl font-bold mb-4">
              Stay up to date with Ubuntu Afya
            </h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ubuntu-orange-400"
              />
              <button className="bg-ubuntu-orange-500 hover:bg-ubuntu-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-colors flex items-center justify-center space-x-2">
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  UBUNTU <span className="text-ubuntu-orange-500">AFYA</span>
                </h2>
              </div>
            </Link>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-ubuntu-blue-600/50 rounded-lg flex items-center justify-center hover:bg-ubuntu-blue-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Who We Are */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-ubuntu-orange-400">
              WHO WE ARE
            </h3>
            <ul className="space-y-3">
              {whoWeAre.map((item) => {
                const linkMap: { [key: string]: string } = {
                  Overview: "/overview",
                  "Our People": "/our-people",
                  "Impact Reports": "/impact",
                };
                return (
                  <li key={item}>
                    <Link
                      to={linkMap[item] || "#"}
                      className="text-ubuntu-blue-100 hover:text-ubuntu-orange-400 transition-colors duration-200 text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Our Work */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-ubuntu-orange-400">
              OUR WORK
            </h3>
            <ul className="space-y-3">
              {ourWork.map((item) => {
                const linkMap: { [key: string]: string } = {
                  "Our Model": "/our-model",
                  "Our Strategy": "/our-strategy",
                  "Latest Updates": "/updates",
                };
                return (
                  <li key={item}>
                    <Link
                      to={linkMap[item] || "#"}
                      className="text-ubuntu-blue-100 hover:text-ubuntu-orange-400 transition-colors duration-200 text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-ubuntu-orange-400">
              GET INVOLVED
            </h3>
            <ul className="space-y-3">
              {getInvolved.map((item) => {
                const linkMap: { [key: string]: string } = {
                  Volunteer: "/volunteer",
                  Donate: "/donate",
                  Partnerships: "/partnerships",
                  Events: "/events",
                  "Contact Us": "/contact",
                };
                return (
                  <li key={item}>
                    <Link
                      to={linkMap[item] || "#"}
                      className="text-ubuntu-blue-100 hover:text-ubuntu-orange-400 transition-colors duration-200 text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-ubuntu-orange-400">
              RESOURCES
            </h3>
            <ul className="space-y-3">
              {resources.map((item) => {
                const linkMap: { [key: string]: string } = {
                  "Privacy Policy": "/privacy",
                  "Financial Reports": "/financial-reports",
                  "Annual Report": "/annual-report",
                  FAQ: "/faq",
                };
                return (
                  <li key={item}>
                    <Link
                      to={linkMap[item] || "#"}
                      className="text-ubuntu-blue-100 hover:text-ubuntu-orange-400 transition-colors duration-200 text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Contact Info */}
            <div className="mt-8">
              <div className="flex items-center space-x-3 mb-3">
                <Mail className="w-5 h-5 text-ubuntu-orange-400" />
                <a
                  href="mailto:info@ubuntuafya.org"
                  className="text-ubuntu-blue-100 hover:text-ubuntu-orange-400 transition-colors text-sm"
                >
                  info@ubuntuafya.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-ubuntu-blue-600">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-ubuntu-blue-200 text-sm">
              © {currentYear} Ubuntu Afya. All Rights Reserved.
            </div>
            <div className="flex space-x-6 text-sm text-ubuntu-blue-200">
              <Link
                to="/privacy"
                className="hover:text-ubuntu-orange-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/cookie-policy"
                className="hover:text-ubuntu-orange-400 transition-colors"
              >
                Cookie Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-ubuntu-orange-400 transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
