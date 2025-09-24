import React, { useState, useEffect } from "react";
import healthcareTeamImage from "../assets/healthcare-team.jpg";

const OurPeople: React.FC = () => {
  const [activeSection, setActiveSection] = useState("global-leadership");

  // Mock data for team members
  const globalLeadershipStaff = [
    {
      name: "Joseph Mwangi",
      title: "COUNTRY DIRECTOR, KENYA",
      description:
        "Joseph leads program strategy and operations in Kenya, strengthening healthcare delivery and community partnerships.",
      image: "joseph-mwangi.jpg",
    },
    {
      name: "Grace Achieng",
      title: "COUNTRY DIRECTOR, TANZANIA",
      description:
        "Grace drives national strategy in Tanzania, expanding access to healthcare through innovation and local collaboration.",
      image: "grace-achieng.jpg",
    },
    {
      name: "Lydia Wanjiru",
      title: "COUNTRY DIRECTOR, UGANDA",
      description:
        "Lydia manages healthcare programs and growth in Uganda, building sustainable systems to serve vulnerable communities.",
      image: "lydia-wanjiru.jpg",
    },
  ];

  const Staff = [
    {
      name: "Peter Njoroge",
      title: "CHIEF EXECUTIVE OFFICER",
      description:
        "Peter Njoroge is the CEO, leading global efforts to expand access to quality, locally-led care through innovative partnerships and sustainable healthcare systems.",
      image: "peter-njoroge.jpg",
    },
    {
      name: "Mary Wambui",
      title: "REGIONAL DIRECTOR, EAST AFRICA",
      description:
        "Mary leads regional strategy and relationships to grow healthcare access and deepen community impact across East Africa.",
      image: "mary-wambui.jpg",
    },
    {
      name: "David Kamau",
      title: "ENGAGEMENT COORDINATOR",
      description:
        "David supports volunteers with meaningful connections, helping people stay engaged in the mission of global health.",
      image: "david-kamau.jpg",
    },
    {
      name: "Susan Muthoni",
      title: "ACCOUNTING MANAGER",
      description:
        "Susan ensures financial stewardship and transparency through accurate accounting and support across all departments.",
      image: "susan-muthoni.jpg",
    },
    {
      name: "Michael Odhiambo",
      title: "EXECUTIVE DIRECTOR",
      description:
        "Michael leads the vision and strategy, driving global impact through sustainable healthcare solutions.",
      image: "michael-odhiambo.jpg",
    },
    {
      name: "Beatrice Nyambura",
      title: "MAJOR GIFTS OFFICER",
      description:
        "Beatrice builds relationships with generous supporters whose gifts help expand lifesaving care around the world.",
      image: "beatrice-nyambura.jpg",
    },
  ];

  const founders = [
    {
      name: "James Mwenda",
      title: "CO-FOUNDER, STRATEGIC FINANCE & DEVELOPMENT COMMITTEE",
      description:
        "James is engaged in driving growth, leadership, and board development. He develops, maintains and supports expansion through visionary partnerships.",
      image: "james-mwenda.jpg",
    },
    {
      name: "Dr. Esther Kariuki",
      title: "CO-FOUNDER",
      description:
        "A physician and advocate for global health, Esther helps build new medical partnerships and supports excellence in healthcare programs.",
      image: "esther-kariuki.jpg",
    },
  ];

  const boardOfDirectors = [
    {
      name: "John Maina",
      title: "BOARD CHAIRPERSON",
      description:
        "John is a champion for healthcare impact and sustainability, helping shape strategic partnerships and board-led approaches.",
      image: "john-maina.jpg",
    },
    {
      name: "Dr. Alice Oduor",
      title: "BOARD MEMBER, MEDICAL COMMITTEE",
      description:
        "Alice brings valuable experience in clinical practice and healthcare operations, strengthening organizational strategy and development.",
      image: "alice-oduor.jpg",
    },
    {
      name: "Prof. Samuel Mutua",
      title: "BOARD MEMBER, STRATEGIC COMMITTEE",
      description:
        "Prof. Mutua is a public health expert offering education and wellness strategies as a key board member through research and innovation.",
      image: "samuel-mutua.jpg",
    },
  ];

  // Handle scroll-based navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "global-leadership",
        "staff",
        "founders",
        "board-of-directors",
      ];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const TeamMemberCard = ({ member }: { member: any }) => (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="h-48 bg-gray-300 flex items-center justify-center">
        <span className="text-gray-500 text-sm">Profile Image</span>
      </div>
      <div className="p-6">
        <h4 className="text-xl font-bold text-teal-800 mb-2">{member.name}</h4>
        <p className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wide">
          {member.title}
        </p>
        <p className="text-gray-600 leading-relaxed text-sm">
          {member.description}
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Our People label */}
          <div className="mb-12">
            <span className="bg-yellow-400 text-black font-bold px-4 py-2 text-sm uppercase tracking-wide">
              OUR PEOPLE
            </span>
          </div>

          {/* Split layout - Title left, description right */}
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-teal-800 leading-tight">
                Meet the Team Transforming Global Health
              </h1>
            </div>
            <div className="flex items-center">
              <p className="text-xl text-gray-600 leading-relaxed">
                At Ubuntu Afya, our people are the heartbeat of our mission to
                transform global health. From dedicated staff, to our global
                leadership teams, every individual plays a vital role in driving
                sustainable healthcare solutions. Together, we empower
                communities, provide life-saving care, and create lasting change
                for underserved populations around the world.
              </p>
            </div>
          </div>

          {/* Hero image */}
          <div className="w-full h-96 rounded-lg mb-16 overflow-hidden shadow-lg">
            <img
              src={healthcareTeamImage}
              alt="Ubuntu Afya healthcare team working together"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Sticky Navigation Bar */}
      <div className="bg-teal-500 shadow-lg">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex justify-center space-x-8">
            {[
              { id: "global-leadership", label: "Global Leadership Staff" },
              { id: "staff", label: "Staff" },
              { id: "founders", label: "Founders" },
              { id: "board-of-directors", label: "Board of Directors" },
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`py-4 px-4 font-semibold border-b-3 transition-colors duration-200 ${
                  activeSection === id
                    ? "text-yellow-400 border-yellow-400"
                    : "text-white border-transparent hover:text-yellow-200"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Global Leadership Staff Section */}
      <section id="global-leadership" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-gray-200 mb-12">
            <h2 className="text-4xl font-bold text-teal-800 mb-4">
              Global Leadership Staff
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {globalLeadershipStaff.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section id="staff" className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-gray-200 mb-12">
            <h2 className="text-4xl font-bold text-teal-800 mb-4">Staff</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Staff.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section id="founders" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-gray-200 mb-12">
            <h2 className="text-4xl font-bold text-teal-800 mb-4">Founders</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {founders.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section id="board-of-directors" className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-gray-200 mb-12">
            <h2 className="text-4xl font-bold text-teal-800 mb-4">
              Board of Directors
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardOfDirectors.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 leading-tight">
            Join Our Mission
          </h2>

          <p className="text-xl mb-8 leading-relaxed">
            Interested in being part of transforming global health? We're always
            looking for passionate individuals to join our team.
          </p>

          <button className="bg-yellow-400 hover:bg-yellow-500 text-teal-800 font-bold py-3 px-8 rounded-full transition-colors duration-200">
            View Open Positions
          </button>
        </div>
      </section>
    </div>
  );
};

export default OurPeople;
