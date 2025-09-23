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

  const whoWeAre = ["Our Story", "Our People", "Journal", "Impact Reports"];

  const ourWork = [
    "Our Model",
    "Global Impact",
    "Research & Evidence",
    "Health Technology",
  ];

  const getInvolved = ["Volunteer", "Donate", "Partnerships", "Events"];

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
    <footer className="bg-teal-800 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-teal-700">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl">
            <h3 className="text-2xl font-bold mb-4">
              Stay up to date with Ubuntu Afya
            </h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold transition-colors flex items-center justify-center space-x-2">
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-teal-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold">
                  UBUNTU <span className="text-yellow-400">AFYA</span>
                </h2>
              </div>
            </Link>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-teal-700/50 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Who We Are */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-yellow-400">
              WHO WE ARE
            </h3>
            <ul className="space-y-3">
              {whoWeAre.map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="text-teal-100 hover:text-yellow-400 transition-colors duration-200 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Work */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-yellow-400">
              OUR WORK
            </h3>
            <ul className="space-y-3">
              {ourWork.map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="text-teal-100 hover:text-yellow-400 transition-colors duration-200 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-yellow-400">
              GET INVOLVED
            </h3>
            <ul className="space-y-3">
              {getInvolved.map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="text-teal-100 hover:text-yellow-400 transition-colors duration-200 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-yellow-400">
              RESOURCES
            </h3>
            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="text-teal-100 hover:text-yellow-400 transition-colors duration-200 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="mt-8">
              <div className="flex items-center space-x-3 mb-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <a
                  href="mailto:info@oneworldhealth.org"
                  className="text-teal-100 hover:text-yellow-400 transition-colors text-sm"
                >
                  info@ubuntuafya.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-teal-700">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-teal-200 text-sm">
              © {currentYear} OneWorld Health. All Rights Reserved.
            </div>
            <div className="flex space-x-6 text-sm text-teal-200">
              <Link
                to="/privacy"
                className="hover:text-yellow-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/cookie-policy"
                className="hover:text-yellow-400 transition-colors"
              >
                Cookie Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-yellow-400 transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/site-credit"
                className="hover:text-yellow-400 transition-colors"
              >
                Site Credit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
