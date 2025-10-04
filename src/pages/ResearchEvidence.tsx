import React from "react";
import { ArrowRight, BookOpen, GraduationCap, FileText, Award, Users, Target } from "lucide-react";
import medicalResearchImage from "../assets/medical-research.jpg";
import vision2Image from "../assets/vission-2.jpg";

const ResearchEvidence: React.FC = () => {
  const researchAreas = [
    {
      icon: Target,
      title: "Child Health Research",
      description: "Comprehensive studies on pediatric care, vaccination programs, and child development outcomes in rural settings.",
      stats: ["8", "Studies Completed", "5", "Ongoing Projects"]
    },
    {
      icon: Users,
      title: "Health Worker Training",
      description: "Evidence-based training programs and capacity building initiatives for frontline healthcare workers.",
      stats: ["500+", "Workers Trained", "15", "Training Programs"]
    },
    {
      icon: FileText,
      title: "Policy Development",
      description: "Research-informed policy recommendations and implementation strategies for improved healthcare delivery.",
      stats: ["10+", "Policy Changes", "25", "Policy Briefs"]
    }
  ];

  const jbiCollaboration = [
    "Systematic review training and certification",
    "Evidence-based practice implementation",
    "Research methodology workshops",
    "Quality improvement initiatives",
    "Knowledge translation programs",
    "Clinical guideline development"
  ];

  const publications = [
    {
      title: "Community Health Worker Effectiveness in Rural Kenya",
      journal: "Global Health Research",
      year: "2024",
      description: "A comprehensive study on the impact of community health workers in improving maternal and child health outcomes."
    },
    {
      title: "Digital Health Systems in Resource-Limited Settings",
      journal: "Health Informatics Journal",
      year: "2023",
      description: "Evaluation of STONE-HMIS® implementation and its effects on healthcare delivery efficiency."
    },
    {
      title: "Sustainable Healthcare Models in Sub-Saharan Africa",
      journal: "International Health",
      year: "2023",
      description: "Analysis of community-owned healthcare models and their long-term sustainability factors."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-ubuntu-blue-900 to-ubuntu-blue-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <span className="bg-ubuntu-orange-500 text-white font-bold px-4 py-2 text-sm uppercase tracking-wide">
              RESEARCH & EVIDENCE
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Evidence-Based Healthcare Solutions
          </h1>
          
          <p className="text-xl lg:text-2xl mb-8 max-w-4xl leading-relaxed">
            As a collaborating center with the Joanna Briggs Institute, we equip frontline workers 
            with tools and training to translate evidence into practice, shaping policy and improving outcomes.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-ubuntu-blue-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-ubuntu-blue-600 mb-2">500+</div>
              <div className="text-lg font-semibold text-gray-800">Workers Trained</div>
              <div className="text-gray-600">In evidence-based practices</div>
            </div>
            <div className="bg-ubuntu-orange-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-ubuntu-orange-600 mb-2">15</div>
              <div className="text-lg font-semibold text-gray-800">Research Studies</div>
              <div className="text-gray-600">Published in peer-reviewed journals</div>
            </div>
            <div className="bg-ubuntu-blue-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-ubuntu-blue-600 mb-2">10+</div>
              <div className="text-lg font-semibold text-gray-800">Policy Changes</div>
              <div className="text-gray-600">Influenced by our research</div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ubuntu-blue-800 mb-4">
              Our Research Focus Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We conduct rigorous research to generate evidence that informs 
              healthcare policy and practice in resource-limited settings.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-ubuntu-blue-100 rounded-lg mr-4">
                      <IconComponent className="w-8 h-8 text-ubuntu-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{area.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">{area.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-ubuntu-blue-600">{area.stats[0]}</div>
                      <div className="text-sm text-gray-600">{area.stats[1]}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-ubuntu-orange-600">{area.stats[2]}</div>
                      <div className="text-sm text-gray-600">{area.stats[3]}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* JBI Collaboration Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-ubuntu-blue-800 mb-6">
                Joanna Briggs Institute Collaboration
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                As an official collaborating center with the Joanna Briggs Institute, 
                we provide world-class training in evidence-based healthcare practices 
                and systematic review methodologies.
              </p>
              
              <div className="space-y-4 mb-8">
                {jbiCollaboration.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-ubuntu-orange-500 rounded-full mr-4"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <button className="bg-ubuntu-blue-600 hover:bg-ubuntu-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center">
                <span>Learn About JBI Partnership</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
            
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={medicalResearchImage} 
                  alt="Research and evidence-based healthcare"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-20 px-6 bg-ubuntu-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ubuntu-blue-800 mb-4">
              Recent Publications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our research findings are published in leading international journals, 
              contributing to the global knowledge base on healthcare in resource-limited settings.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {publications.map((pub, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-4">
                  <FileText className="w-12 h-12 text-ubuntu-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {pub.title}
                </h3>
                <div className="text-sm text-ubuntu-blue-600 font-semibold mb-2">
                  {pub.journal} • {pub.year}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {pub.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={vision2Image} 
                  alt="Laboratory research and training"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-ubuntu-blue-800 mb-6">
                Capacity Building & Training
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We provide comprehensive training programs that equip healthcare workers 
                with the skills and knowledge needed to implement evidence-based practices 
                in their communities.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-ubuntu-orange-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <GraduationCap className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Systematic Review Training</h4>
                    <p className="text-gray-600">Comprehensive training in systematic review methodologies and evidence synthesis.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-ubuntu-orange-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Evidence Implementation</h4>
                    <p className="text-gray-600">Practical training on translating research evidence into clinical practice.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-ubuntu-orange-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <BookOpen className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Research Methodology</h4>
                    <p className="text-gray-600">Training in research design, data collection, and analysis techniques.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-ubuntu-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join Our Research Network
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Partner with us to advance evidence-based healthcare and contribute 
            to improving health outcomes in underserved communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-ubuntu-orange-500 hover:bg-ubuntu-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Become a Research Partner
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-ubuntu-blue-600 transition-colors">
              View Training Programs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchEvidence;
