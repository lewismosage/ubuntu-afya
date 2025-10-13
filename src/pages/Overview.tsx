import React from "react";
import pediatricImage from "../assets/pediatric.jpg";
import ourstory from "../assets/OurStory.jpg";

const Overview: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-ubuntu-blue-900/80 to-ubuntu-blue-600/80 text-white min-h-[80vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={ourstory}
            alt="Building a healthier future for every community"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <span className="bg-ubuntu-orange-500 text-white font-bold px-4 py-2 text-sm uppercase tracking-wide">
              OVERVIEW
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Our Story
          </h1>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-ubuntu-blue-800 mb-8">
              Who we are
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Ubuntu Afya is rooted in a belief that every person deserves
              access to quality healthcare, no matter where they live. We are
              the U.S. partner of Afya Research Africa (ARA), a Kenyan
              non-profit that has pioneered community-owned health systems for
              over a decade.
            </p>

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Together, we strengthen locally led solutions by connecting rural
              families with care through Ubuntu-Afya Kiosks, advancing digital
              health innovation through STONE-HMIS®, and equipping health
              workers with evidence and training that improves decision-making.
            </p>

            <p className="text-xl text-gray-700 leading-relaxed">
              Our work is built on collaboration with communities, governments
              and global partners. We exist because we know lasting change comes
              when health systems are owned and sustained by the people they
              serve.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="text-center space-y-16">
            {/* Mission */}
            <div>
              <h3 className="text-5xl font-bold text-ubuntu-blue-800 mb-8">
                Mission
              </h3>
              <p className="text-2xl text-gray-700 italic leading-relaxed max-w-4xl mx-auto">
                To strengthen community-owned health systems and expand access
                to affordable care in Kenya's underserved communities.
              </p>
            </div>

            {/* Vision */}
            <div>
              <h3 className="text-5xl font-bold text-ubuntu-blue-800 mb-8">
                Vision
              </h3>
              <p className="text-2xl text-gray-700 italic leading-relaxed max-w-4xl mx-auto">
                A future where African health systems are locally led, resilient
                and equitable
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-ubuntu-blue-600 text-white relative overflow-hidden">
        <div className="grid lg:grid-cols-2 items-stretch min-h-[500px]">
          {/* Left side - Pediatric care image - Full coverage */}
          <div className="relative">
            <img
              src={pediatricImage}
              alt="Pediatric care moment showing compassionate healthcare"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col justify-center px-12 py-16">
            <h2 className="text-4xl font-bold mb-8 leading-tight">
              Let's transform lives and build healthier futures.
            </h2>

            <p className="text-xl mb-8 leading-relaxed">
              Join us in creating lasting access to care... built by local teams
              and powered by your support. Together, we can transform lives and
              build healthier futures.
            </p>

            <button className="bg-ubuntu-orange-500 hover:bg-ubuntu-orange-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200 self-start">
              Support Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;
