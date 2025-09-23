import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigation = [
    {
      name: "Who We Are",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Overview",
          description: "Our mission, values, and vision for the future.",
          link: "/overview"
        },
        {
          name: "Our People",
          description:
            "The team bringing life-saving global healthcare change.",
          link: "/our-people"
        },
        {
          name: "Impact Reports",
          description: "Explore the data behind our mission and milestones.",
          link: "/impact-reports"
        },
      ],
    },
    {
      name: "Our Work",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Our Model",
          description:
            "Discover how our sustainable, locally led model delivers long-term healthcare solutions.",
          link: "/our-model"
        },
        {
          name: "Our Strategy",
          description:
            "Discover how our sustainable, locally led model delivers long-term healthcare solutions.",
          link: "/our-strategy"
        },
        {
          name: "Latest Updates",
          description:
            "Stay informed with our latest news, inspiring stories, research findings, and impact reports from the field.",
          link: "/updates"
        },
      ],
    },
    {
      name: "Get Involved",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Volunteer",
          description: "Join one of our trips and make a real impact.",
          link: "/volunteer"
        },
        {
          name: "Donate",
          description:
            "Your gift brings life-saving care to communities in need.",
          link: "/donate"
        },
        {
          name: "Partnerships",
          description:
            "See how your church, business, or group can make an impact.",
          link: "/partnerships"
        },
        {
          name: "Events",
          description: "Join us for events that support global health.",
          link: "/events"
        },
      ],
    },
  ];

  const handleMouseEnter = (itemName: string) => {
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleDropdownClick = () => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="bg-teal-600 sticky top-0 z-50 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <svg
                  className="w-8 h-8 text-teal-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">
                  Ubuntu <span className="text-yellow-400">Afya</span>
                </h1>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`flex items-center space-x-1 font-medium transition-all duration-200 px-4 py-2 rounded-lg text-white hover:text-yellow-400 ${
                      activeDropdown === item.name
                        ? "text-yellow-400"
                        : ""
                    }`}
                  >
                    <span>{item.name}</span>
                    {activeDropdown === item.name ? (
                      <span className="text-yellow-400 text-lg">×</span>
                    ) : (
                      <span className="text-white text-lg">+</span>
                    )}
                  </button>

                  {/* Full Width Horizontal Dropdown Menu */}
                  {activeDropdown === item.name && (
                    <div className="fixed left-0 right-0 top-20 bg-teal-700 shadow-xl border-t border-teal-600 z-50">
                      <div className="max-w-7xl mx-auto px-6 py-8">
                        <div className="grid grid-cols-5 gap-0">
                          {item.dropdownItems?.map((dropdownItem, index) => (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.link}
                              onClick={handleDropdownClick}
                              className={`px-6 py-6 hover:bg-teal-600 transition-colors group border-r border-teal-600 last:border-r-0 ${
                                index === 0 ? 'border-l-4 border-l-yellow-400' : ''
                              }`}
                            >
                              <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors mb-3">
                                {dropdownItem.name}
                              </h3>
                              <p className="text-sm text-teal-200 leading-relaxed">
                                {dropdownItem.description}
                              </p>
                            </a>
                          ))}
                          {/* Add empty columns to fill the 5-column grid if needed */}
                          {item.dropdownItems && item.dropdownItems.length < 5 && 
                            Array.from({ length: 5 - item.dropdownItems.length }).map((_, index) => (
                              <div key={`empty-${index}`} className="px-6 py-6 border-r border-teal-600 last:border-r-0"></div>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Donate Button - Desktop */}
            <div className="hidden lg:flex items-center">
              <a 
                href="/donate" 
                className="bg-white border-2 border-white text-teal-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200"
              >
                Donate
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-white hover:bg-teal-700 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-teal-700 shadow-lg">
            <div className="px-6 py-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.name ? null : item.name
                      )
                    }
                    className="flex items-center justify-between w-full px-4 py-3 text-left font-medium text-white hover:text-yellow-400 hover:bg-teal-600 rounded-lg transition-colors"
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {activeDropdown === item.name && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.link}
                          onClick={handleDropdownClick}
                          className="block px-4 py-3 rounded-lg hover:bg-teal-600 transition-colors"
                        >
                          <div className="text-white font-medium mb-1">
                            {dropdownItem.name}
                          </div>
                          <div className="text-sm text-teal-200">
                            {dropdownItem.description}
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a 
                href="/donate" 
                onClick={handleDropdownClick}
                className="block w-full bg-white text-teal-700 px-4 py-3 rounded-lg font-semibold text-center mt-4 hover:bg-gray-100 transition-colors"
              >
                Donate
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;