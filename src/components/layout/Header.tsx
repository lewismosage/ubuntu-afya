import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import logoImage from "../../assets/logo.jpg";

interface SubItem {
  name: string;
  description: string;
  link: string;
}

interface DropdownItem {
  name: string;
  description: string;
  link: string;
  subItems?: SubItem[];
}

interface NavigationItem {
  name: string;
  hasDropdown: boolean;
  dropdownItems?: DropdownItem[];
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeNestedDropdown, setActiveNestedDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const nestedHoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
        setActiveNestedDropdown(null);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      if (nestedHoverTimeoutRef.current) {
        clearTimeout(nestedHoverTimeoutRef.current);
      }
    };
  }, []);

  const navigation: NavigationItem[] = [
    {
      name: "Our Story",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Overview",
          description: "Our mission, values, and vision for the future.",
          link: "/overview",
        },
        {
          name: "Our People",
          description:
            "The team bringing life-saving global healthcare change.",
          link: "/our-people",
        },
        {
          name: "Impact Reports",
          description: "Explore the data behind our mission and milestones.",
          link: "/impact",
          subItems: [
            {
              name: "Primary Health Care",
              description: "Learn about our Ubuntu-Afya kiosks and community healthcare model.",
              link: "/primary-healthcare",
            },
            {
              name: "Health Technology",
              description: "Discover our STONE-HMIS® system and digital health solutions.",
              link: "/health-technology",
            },
            {
              name: "Research & Evidence",
              description: "Explore our research findings and evidence-based practices.",
              link: "/research-evidence",
            },
          ],
        },
        {
          name: "Partnerships",
          description:
            "See how your church, business, or group can make an impact.",
          link: "/partnerships",
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
          link: "/our-model",
        },
        {
          name: "Our Strategy",
          description:
            "Discover how our sustainable, locally led model delivers long-term healthcare solutions.",
          link: "/our-strategy",
        },
        {
          name: "Latest Updates",
          description:
            "Stay informed with our latest news, inspiring stories, research findings, and impact reports from the field.",
          link: "/updates",
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
          link: "/volunteer",
        },
        {
          name: "Donate",
          description:
            "Your gift brings life-saving care to communities in need.",
          link: "/donate",
        },
        {
          name: "Events",
          description: "Join us for events that support global health.",
          link: "/events",
        },
        {
          name: "Contact Us",
          description: "Get in touch with us for more information.",
          link: "/contact",
        },
      ],
    },
  ];

  const handleMouseEnter = (itemName: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setActiveNestedDropdown(null);
    }, 200);
  };

  const handleDropdownMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  const handleDropdownMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setActiveNestedDropdown(null);
    }, 200);
  };

  const handleNestedItemMouseEnter = (itemName: string) => {
    if (nestedHoverTimeoutRef.current) {
      clearTimeout(nestedHoverTimeoutRef.current);
      nestedHoverTimeoutRef.current = null;
    }
    setActiveNestedDropdown(itemName);
  };

  const handleNestedItemMouseLeave = () => {
    nestedHoverTimeoutRef.current = setTimeout(() => {
      setActiveNestedDropdown(null);
    }, 200);
  };

  const handleNestedDropdownMouseEnter = () => {
    if (nestedHoverTimeoutRef.current) {
      clearTimeout(nestedHoverTimeoutRef.current);
      nestedHoverTimeoutRef.current = null;
    }
  };

  const handleNestedDropdownMouseLeave = () => {
    nestedHoverTimeoutRef.current = setTimeout(() => {
      setActiveNestedDropdown(null);
    }, 200);
  };

  const handleDropdownItemClick = () => {
    setIsMenuOpen(false);
    setTimeout(() => {
      setActiveDropdown(null);
      setActiveNestedDropdown(null);
    }, 300);
  };

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <>
      <header
        className="bg-ubuntu-blue-600 sticky top-0 z-50 relative"
        ref={dropdownRef}
      >
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
              <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg">
                <img
                  src={logoImage}
                  alt="Ubuntu Afya Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">
                  Ubuntu <span className="text-ubuntu-orange-500">Afya</span>
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
                    className={`flex items-center space-x-1 font-medium transition-all duration-200 px-4 py-2 rounded-lg text-white hover:text-ubuntu-orange-300 ${
                      activeDropdown === item.name ? "text-ubuntu-orange-300" : ""
                    }`}
                  >
                    <span>{item.name}</span>
                    {activeDropdown === item.name ? (
                      <span className="text-ubuntu-orange-300 text-lg">×</span>
                    ) : (
                      <span className="text-white text-lg">+</span>
                    )}
                  </button>

                  {/* Full Width Horizontal Dropdown Menu */}
                  {activeDropdown === item.name && (
                    <div
                      className="fixed left-0 right-0 top-20 bg-ubuntu-blue-700 shadow-xl border-t border-ubuntu-blue-600 z-50"
                      onMouseEnter={handleDropdownMouseEnter}
                      onMouseLeave={handleDropdownMouseLeave}
                    >
                      <div className="max-w-7xl mx-auto px-6 py-8">
                        <div className="grid grid-cols-5 gap-0">
                          {item.dropdownItems?.map((dropdownItem, index) => (
                            <div
                              key={dropdownItem.name}
                              className="relative"
                              onMouseEnter={() => dropdownItem.subItems && handleNestedItemMouseEnter(dropdownItem.name)}
                              onMouseLeave={() => dropdownItem.subItems && handleNestedItemMouseLeave()}
                            >
                              <a
                                href={dropdownItem.link}
                                onClick={handleDropdownItemClick}
                                className={`block px-6 py-6 hover:bg-ubuntu-blue-600 transition-colors group border-r border-ubuntu-blue-600 last:border-r-0 ${
                                  index === 0
                                    ? "border-l-4 border-l-ubuntu-orange-400"
                                    : ""
                                }`}
                              >
                                <h3 className="text-xl font-bold text-white group-hover:text-ubuntu-orange-300 transition-colors mb-3 flex items-center justify-between">
                                  {dropdownItem.name}
                                  {dropdownItem.subItems && (
                                    <ChevronRight className="w-5 h-5 text-ubuntu-orange-400" />
                                  )}
                                </h3>
                                <p className="text-sm text-ubuntu-blue-200 leading-relaxed">
                                  {dropdownItem.description}
                                </p>
                              </a>

                              {/* Nested Dropdown on the Right */}
                              {dropdownItem.subItems && activeNestedDropdown === dropdownItem.name && (
                                <div
                                  className="absolute left-full top-0 w-80 bg-ubuntu-blue-800 shadow-2xl border-l-4 border-ubuntu-orange-400 z-50"
                                  onMouseEnter={handleNestedDropdownMouseEnter}
                                  onMouseLeave={handleNestedDropdownMouseLeave}
                                >
                                  {dropdownItem.subItems.map((subItem, subIndex) => (
                                    <a
                                      key={subItem.name}
                                      href={subItem.link}
                                      onClick={handleDropdownItemClick}
                                      className={`block px-6 py-5 hover:bg-ubuntu-blue-700 transition-colors group ${
                                        subIndex !== dropdownItem.subItems!.length - 1
                                          ? "border-b border-ubuntu-blue-700"
                                          : ""
                                      }`}
                                    >
                                      <h4 className="text-lg font-bold text-white group-hover:text-ubuntu-orange-300 transition-colors mb-2">
                                        {subItem.name}
                                      </h4>
                                      <p className="text-sm text-ubuntu-blue-200 leading-relaxed">
                                        {subItem.description}
                                      </p>
                                    </a>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                          {/* Add empty columns to fill the 5-column grid if needed */}
                          {item.dropdownItems && item.dropdownItems.length < 5 &&
                            Array.from({
                              length: 5 - item.dropdownItems.length,
                            }).map((_, index) => (
                              <div
                                key={`empty-${index}`}
                                className="px-6 py-6 border-r border-ubuntu-blue-600 last:border-r-0"
                              ></div>
                            ))}
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
                className="bg-white border-2 border-white text-ubuntu-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200"
              >
                Donate
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-white hover:bg-ubuntu-blue-700 transition-colors"
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
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-ubuntu-blue-700 shadow-lg ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col">
            {navigation.map((item) => (
              <div key={item.name} className="border-t border-ubuntu-blue-600">
                <button
                  className={`w-full text-left px-4 py-3 font-bold text-white bg-ubuntu-blue-600 hover:bg-ubuntu-blue-500 transition flex items-center justify-between`}
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === item.name ? null : item.name
                    )
                  }
                >
                  {item.name}
                  <ChevronDown
                    className={`w-4 h-4 ml-1 transition-transform ${
                      activeDropdown === item.name ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === item.name && (
                  <div className="bg-ubuntu-blue-800 px-4 py-2 space-y-2">
                    {item.dropdownItems?.map((dropdownItem) => (
                      <div key={dropdownItem.name}>
                        <div
                          className="block px-2 py-2 text-gray-200 hover:text-ubuntu-orange-300 transition text-sm cursor-pointer"
                          onClick={() => {
                            if (dropdownItem.subItems) {
                              setActiveNestedDropdown(
                                activeNestedDropdown === dropdownItem.name
                                  ? null
                                  : dropdownItem.name
                              );
                            } else {
                              window.location.href = dropdownItem.link;
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                            }
                          }}
                        >
                          <div className="font-medium flex items-center justify-between">
                            {dropdownItem.name}
                            {dropdownItem.subItems && (
                              <ChevronDown
                                className={`w-4 h-4 transition-transform ${
                                  activeNestedDropdown === dropdownItem.name
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />
                            )}
                          </div>
                          <div className="text-xs text-ubuntu-blue-200 mt-1">
                            {dropdownItem.description}
                          </div>
                        </div>
                        {/* Mobile Nested Items */}
                        {dropdownItem.subItems &&
                          activeNestedDropdown === dropdownItem.name && (
                            <div className="ml-4 mt-2 space-y-2 border-l-2 border-ubuntu-orange-400 pl-4">
                              {dropdownItem.subItems.map((subItem) => (
                                <a
                                  key={subItem.name}
                                  href={subItem.link}
                                  className="block px-2 py-2 text-gray-300 hover:text-ubuntu-orange-300 hover:underline transition text-xs"
                                  onClick={() => {
                                    setActiveDropdown(null);
                                    setActiveNestedDropdown(null);
                                    setIsMenuOpen(false);
                                  }}
                                >
                                  <div className="font-medium">{subItem.name}</div>
                                  <div className="text-xs text-ubuntu-blue-300 mt-1">
                                    {subItem.description}
                                  </div>
                                </a>
                              ))}
                            </div>
                          )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/* Donate Button */}
            <a
              href="/donate"
              className="w-full text-left px-4 py-3 font-bold bg-ubuntu-orange-500 text-white hover:bg-ubuntu-orange-600 transition border-t border-ubuntu-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Donate
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;