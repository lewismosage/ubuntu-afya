import React, { useState, useEffect } from "react";
import healthTeamImage from "../assets/healthcare-team.jpg";
import { X, ExternalLink } from "lucide-react";

// Import profile images
import charityImage from "../assets/charity.jpg";
import dorcasImage from "../assets/Dorcas-Pacho.png";
import drMosesImage from "../assets/Dr-Moses-Nderitu.png";
import elizabethImage from "../assets/Elizabeth-Ombech.png";
import enockImage from "../assets/Enock-Oloo.png";
import paulImage from "../assets/Paul-Onam.png";
import rodgersImage from "../assets/Rodgers-Omondi.png";
import roseImage from "../assets/Rose-Mitevan.png";
import samImage from "../assets/sam-gwer.jpg";
import valImage from "../assets/val.jpg";


const OurPeople: React.FC = () => {
  const [activeSection, setActiveSection] = useState("board-of-directors");
  const [selectedMember, setSelectedMember] = useState<any>(null);

  const OurTeam = [
    {
      name: "Elizabeth Ombech",
      title: "DIRECTOR, PROGRAMS AND OPERATIONS",
      description:
        "Elizabeth leads ARA's Programs and Operations within the Ubuntu-Afya network, leading the implementation of the organization's programs, monitoring and evaluation strategy. Elizabeth excels in forging partnerships with community groups, county governments, and other stakeholders, while also overseeing program implementation and operations across multiple medical centers. Her expertise extends to program design, research design, qualitative and quantitative methods, as well as data management and analysis. She has over a decade of experience in reproductive, maternal, newborn, child, and adolescent health programming including health programs implementation in primary healthcare settings. Elizabeth holds a Masters in Public Health and a Bachelor of Science in Medical Microbiology from Jomo Kenyatta University of Agriculture and Technology. She is also an accredited trainer for the Joanna Briggs Institute, the University of Adelaide's comprehensive systematic review training program.",
      image: elizabethImage,
    },
    {
      name: "Paul Onam",
      title: "FINANCE MANAGER",
      description:
        "CPA Paul is responsible for leading ARA's Finance and Human Resource. He joined the organization in 2016 as accounts assistant and has risen through the ladder to the current position. Prior to this, he has held similar positions in other service enterprises including Real Estate. With extensive experience in managing accounts, budgeting, financial reporting, human resources and statutory compliance for enterprises and non-profits, Paul ensures compliance with financial and HR regulations, and supports ARA's overall mission. He holds a Bachelor's Degree in Human Resource Management from KCA University and is a Certified Public Accountant (CPA-K).",
      image: paulImage,
    },
    {
      name: "Dorcas Pacho",
      title: "PROCUREMENT MANAGER",
      description:
        "Dorcas leads procurement for Afya Research Africa and the Ubuntu-Afya Kiosk network. She heads pharmaceutical procurement and manages drug stock at all medical centre sites. Dorcas has a Bachelor of Commerce Degree in Supplies and Logistics from KCA University in Nairobi and a Diploma in Library Science from the University of Nairobi. She has more than 8 years experience in administration positions at various organizations in Kenya.",
      image: dorcasImage,
    },
    {
      name: "Enock Oloo",
      title: "STONE-HMIS OFFICER",
      description:
        "Enock is primarily responsible for the programming and maintaining of the in-house digital health information system (STONE-HMIS). Through his innovative problem-solving skills and knowledge of the design and implementation of scalable systems, he has developed sophisticated solutions that not only work flawlessly but also support users in achieving better patient outcomes and efficiency in the operations. In addition to programming, he oversees and plans the strategic development of our centres' IT infrastructure, which includes electronic health records (EHR), cybersecurity, hardware, software, network systems, and technology-related regulations. Enock holds a degree in Computer Science from the University of Nairobi.",
      image: enockImage,
    },
    {
      name: "Rogers Omondi",
      title: "PROJECT ASSOCIATE",
      description:
        "Rogers is a programme coordinator at Afya Research Africa, and leads engagement with health workers and target communities across ARA's Ubuntu-Afya Kiosk network. He has extensive experience in deploying community programs and has more than eight years experience working with rural health, HIV and education programmes. He has diploma in community development",
      image: rodgersImage,
    },
    {
      name: "Rose Mitevan",
      title: "ADMINISTRATIVE ASSISTANT",
      description:
        "Rose manages our reception and other administrative duties.",
      image: roseImage,
    },
    {
      name: "Vanessa Akoth",
      title: "COMMUNICATIONS ASSOCIATE",
      description:
        "Vanessa serves as the Communications Associate, driving the development and execution of internal and external communication strategies. She excels at crafting and sharing captivating content across various platforms, managing the organization's vibrant social media presence, and devising strategies that elevate the organization's mission.\n\nWith a robust background in journalism and social media management, Vanessa has spearheaded numerous successful campaigns that have boosted brand visibility and community engagement. She holds a Bachelor of Arts degree in Linguistics, Media, and Communication from Moi University.",
      image: valImage,
    },
    {
      name: "Charity Adhiambo",
      title: "PROJECT MANAGER",
      description:
        "Charity serves as the Project Officer for the Make Way Programme, a Sexual and Reproductive Health initiative implemented in Kenya, Rwanda, Tanzania, Uganda, and Ethiopia.\n\nThrough this program, she addresses the Sexual and Reproductive Health (SRH) concerns of young people, helping to tackle the compounding factors that interfere with their SRHR. Charity leads the program in Nairobi's informal settlements in partnership with Cheshire Disability Services Kenya (CDSK), targeting young people with disabilities in Kibera and Mukuru Kwa Reuben.\n\nPrior to joining the Make Way Programme, Charity gained extensive experience in clinical practice, leadership, and project coordination. She holds a degree in Clinical Medicine and Community Health and has over four years of experience in her field.",
      image: charityImage,
    },
  ];

  const boardOfDirectors = [
    {
      name: "Dr. Lee Ngugi Kigera",
      title: "BOARD CHAIRPERSON",
      description:
        "Lee is a champion for healthcare impact and sustainability, helping shape strategic partnerships and board-led approaches.",
      image: drMosesImage, // Using available image as placeholder
    },
    {
      name: "Dr. Samson Gwer",
      title: "SECRETARY",
      description:
        "Sam serves as Afya Research Africa's Executive Director and directly oversees the Ubuntu Afya Medical Centre network and the Research and Evidence Programme. He is a Member of the Royal College of Paediatrics in Child Health (UK) and has a PhD from the University of Amsterdam in child neurology. Sam has over 14 years of experience testing and implementing innovative healthcare solutions to strengthen health systems and promote access to sustainable quality healthcare in Kenya.\n\nHe has extensive experience in childhood coma and epilepsy programmes and research and is a recipient of several awards. His mix of entrepreneurial, clinical, and research experience instills in him the ability to design and deploy innovative healthcare solutions that promote system-wide change.",
      image: samImage,
    },
    {
      name: "Geoffrey Awiti",
      title: "TREASURER",
      description:
        "Geoffrey is a seasoned medical professional with extensive experience in paediatrics and child health. He has over 20 years of experience in clinical practice, research, and leadership in the field of paediatrics. Geoffrey has worked in various hospitals and medical institutions, including the Kenyatta National Hospital, the Nairobi Women's Hospital, and the University of Nairobi.\n\nHe is a member of the Royal College of Paediatrics and Child Health (UK) and has a PhD in paediatrics from the University of Nairobi. Geoffrey is also a recipient of several awards for his work in paediatrics and child health.",
      image: drMosesImage, // Using available image as placeholder
    },
    {
      name: "Patricia Griffin",
      title: "BOARD MEMBER, MEDICAL COMMITTEE",
      description:
        "Patricia is a seasoned medical professional with extensive experience in paediatrics and child health. She has over 20 years of experience in clinical practice, research, and leadership in the field of paediatrics. Patricia has worked in various hospitals and medical institutions, including the Kenyatta National Hospital, the Nairobi Women's Hospital, and the University of Nairobi.\n\nShe is a member of the Royal College of Paediatrics and Child Health (UK) and has a PhD in paediatrics from the University of Nairobi. Patricia is also a recipient of several awards for her work in paediatrics and child health.",
      image: drMosesImage, // Using available image as placeholder
    },
    {
      name: "Silvana Wanjiru",
      title: "BOARD MEMBER, MEDICAL COMMITTEE",
      description:
        "Silvana is a seasoned medical professional with extensive experience in paediatrics and child health. She has over 20 years of experience in clinical practice, research, and leadership in the field of paediatrics. Silvana has worked in various hospitals and medical institutions, including the Kenyatta National Hospital, the Nairobi Women's Hospital, and the University of Nairobi.\n\nShe is a member of the Royal College of Paediatrics and Child Health (UK) and has a PhD in paediatrics from the University of Nairobi. Silvana is also a recipient of several awards for her work in paediatrics and child health.",
      image: drMosesImage, // Using available image as placeholder
    },
    {
      name: "Dr. Moses Ndiritu",
      title: "BOARD MEMBER, MEDICAL COMMITTEE",
      description:
        "Moses leads the development and deployment of our electronic health management information system, STONE HMIS®. He is also involved in the provision of clincial services at our medical centres, offering a deep understanding of how electronic applications and processes interface with clinical practice. Moses has over 15 years of clinical experience and holds a Master's of Philosophy Degree in Clinical Epidemiology from the University of Cambridge. He has experience in paediatrics and child health research and has been involved in clinical and epidemiological studies evaluating the effectiveness of vaccines against severe bacterial infections in children. His unique set of skills and experiences set him apart as a practical clinician, epidemiologist, and health informatician.",
      image: drMosesImage,
    },
    {
      name: "Lauren Rosapep",
      title: "BOARD MEMBER, MEDICAL COMMITTEE",
      description:
        "Lauren is a seasoned medical professional with extensive experience in paediatrics and child health. She has over 20 years of experience in clinical practice, research, and leadership in the field of paediatrics. Lauren has worked in various hospitals and medical institutions, including the Kenyatta National Hospital, the Nairobi Women's Hospital, and the University of Nairobi.\n\nShe is a member of the Royal College of Paediatrics and Child Health (UK) and has a PhD in paediatrics from the University of Nairobi. Lauren is also a recipient of several awards for her work in paediatrics and child health.",
      image: drMosesImage, // Using available image as placeholder
    },
  ];

  // Handle scroll-based navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "board-of-directors",
        "our-team",
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

  const handleMemberClick = (member: any) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  const TeamMemberCard = ({ member }: { member: any }) => (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden relative group">
      <div className="h-90 relative overflow-hidden flex items-center justify-center p-8">
        <div className="w-32 h-32 rounded-full overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-center"
            style={{ objectPosition: 'center 30%' }}
          />
        </div>
        <button
          onClick={() => handleMemberClick(member)}
          className="absolute top-4 right-4 bg-ubuntu-orange-500 hover:bg-ubuntu-orange-600 text-white p-2 rounded-full transition-colors duration-200"
        >
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
      <div className="p-6">
        <h4 className="text-xl font-bold text-ubuntu-blue-800 mb-2">{member.name}</h4>
        <p className="text-sm font-semibold text-ubuntu-orange-600 uppercase tracking-wide">
          {member.title}
        </p>
      </div>
    </div>
  );

  const MemberModal = () => {
    if (!selectedMember) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={handleCloseModal}
        />
        
        {/* Modal */}
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
          {/* Close Button */}
          <button
            onClick={handleCloseModal}
            className="absolute top-4 right-4 z-10 bg-ubuntu-orange-500 hover:bg-ubuntu-orange-600 text-white p-2 rounded-lg transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </button>
          
          {/* Modal Content */}
          <div className="flex flex-col lg:flex-row">
            {/* Left Side - Image */}
            <div className="lg:w-2/5 flex items-center justify-center p-8 bg-gray-50">
              <div className="w-full h-80 rounded-lg overflow-hidden">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover object-center"
                  style={{ objectPosition: 'center 30%' }}
                />
              </div>
            </div>
            
            {/* Right Side - Content */}
            <div className="lg:w-3/5 p-8 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-ubuntu-blue-800 mb-4">
                {selectedMember.name}
              </h2>
              <h3 className="text-lg font-semibold text-gray-700 mb-6">
                {selectedMember.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                {selectedMember.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Our People label */}
          <div className="mb-12">
            <span className="bg-ubuntu-orange-500 text-white font-bold px-4 py-2 text-sm uppercase tracking-wide">
              OUR PEOPLE
            </span>
          </div>

          {/* Split layout - Title left, description right */}
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-ubuntu-blue-800 leading-tight">
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
              src={healthTeamImage}
              alt="Ubuntu Afya healthcare team working together"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Sticky Navigation Bar */}
      <div className="bg-ubuntu-blue-600 shadow-lg sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex justify-center space-x-8">
            {[
              { id: "board-of-directors", label: "Board of Directors" },
              { id: "our-team", label: "Our Team" },
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`py-4 px-4 font-semibold border-b-3 transition-colors duration-200 ${
                  activeSection === id
                    ? "text-ubuntu-orange-400 border-ubuntu-orange-400"
                    : "text-white border-transparent hover:text-ubuntu-orange-200"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Board of Directors Section */}
      <section id="board-of-directors" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-gray-200 mb-12">
            <h2 className="text-4xl font-bold text-ubuntu-blue-800 mb-4">
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

      {/* Our Team Section */}
      <section id="our-team" className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-gray-200 mb-12">
            <h2 className="text-4xl font-bold text-ubuntu-blue-800 mb-4">Our Team</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {OurTeam.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Member Modal */}
      <MemberModal />
    </div>
  );
};

export default OurPeople;
