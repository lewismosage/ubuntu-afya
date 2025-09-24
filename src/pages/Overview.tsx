import React from "react";
import overviewImage from "../overview.avif";

const Overview: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* First Section - Hero with split layout */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Overview label */}
          <div className="mb-12">
            <span className="bg-yellow-400 text-black font-bold px-4 py-2 text-sm uppercase tracking-wide">
              OVERVIEW
            </span>
          </div>

          {/* Split layout - Title left, description right */}
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-teal-800 leading-tight">
                Building a Healthier Future for Every Community
              </h1>
            </div>
            <div className="flex items-center">
              <p className="text-xl text-gray-600 leading-relaxed">
                At Obuntu Afya, we believe everyone no matter where they live
                deserves access to high quality, compassionate care.
              </p>
            </div>
          </div>

          {/* Hero image placeholder */}
          <div className="w-full h-96 bg-gray-300 rounded-lg mb-16 flex items-center justify-center">
            <span className="text-gray-500 text-lg">
              Hero Image Placeholder
            </span>
          </div>
        </div>
      </section>

      {/* Second Section - Mission Content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          {/* Opening paragraph */}
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            That's why we work alongside communities to build healthcare systems
            that last.
          </p>

          {/* Three column text */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 text-center">
            <div>
              <p className="text-base text-gray-600 leading-relaxed">
                Our work isn't just about building clinics—it's about building
                systems.
              </p>
            </div>
            <div>
              <p className="text-base text-gray-600 leading-relaxed">
                Not just access, but excellence.
              </p>
            </div>
            <div>
              <p className="text-base text-gray-600 leading-relaxed">
                Not just care, but compassion and continuity.
              </p>
            </div>
          </div>

          {/* Bottom paragraph */}
          <p className="text-base text-gray-600 mb-16 leading-relaxed">
            We bring projects to life—with local teams, essential services, and
            sustainable systems that meet real needs, every day.
          </p>

          {/* Mission & Vision with images */}
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            {/* Mission column */}
            <div className="text-left">
              <h3 className="text-2xl font-bold text-coral-500 mb-4">
                Our Mission
              </h3>
              <p className="text-teal-800 font-semibold mb-8 leading-relaxed">
                To strengthen community-owned health systems and expand access
                to affordable care in Kenya's underserved communities.
              </p>

              {/* Mission images grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="h-32 bg-gray-300 rounded flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Image 1</span>
                </div>
                <div className="h-32 bg-gray-300 rounded flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Image 2</span>
                </div>
                <div className="h-32 bg-gray-300 rounded flex items-center justify-center col-span-2">
                  <span className="text-gray-500 text-sm">Image 3</span>
                </div>
              </div>
            </div>

            {/* Vision column */}
            <div className="text-left">
              <h3 className="text-2xl font-bold text-coral-500 mb-4">
                Our Vision
              </h3>
              <p className="text-teal-800 font-semibold mb-8 leading-relaxed">
                A future where African health systems are locally led, resilient
                and equitable
              </p>

              {/* Vision images grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="h-32 bg-gray-300 rounded flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Image 4</span>
                </div>
                <div className="h-32 bg-gray-300 rounded flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Image 5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section - Values */}
      <section className="py-16 px-6 bg-teal-600">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left column - Faith section */}
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-8">
                Inspired by Faith, Guided by Action
              </h2>
              <p className="text-lg leading-relaxed mb-12">
                We are driven by the conviction that all people are created
                equal in the image of God, deserving of dignity and respect. Our
                work is guided by a belief that access to basic healthcare,
                including wellness, shouldn't depend on where you are born.
                These values drive our vision, decisions, and work every day.
              </p>
            </div>

            {/* Right column - Values */}
            <div className="space-y-12">
              {/* Service */}
              <div>
                <h4 className="text-xl font-bold text-yellow-400 mb-3">
                  Service
                </h4>
                <p className="text-white mb-2 leading-relaxed font-semibold">
                  Driven to serve all in need, inspired by service.
                </p>
                <p className="text-sm text-gray-300 italic">
                  The true measure of any society can be found in how it treats
                  its most vulnerable members.
                </p>
              </div>

              {/* Humility */}
              <div>
                <h4 className="text-xl font-bold text-yellow-400 mb-3">
                  Humility
                </h4>
                <p className="text-white mb-2 leading-relaxed font-semibold">
                  Empowering communities to lead their healthcare solutions.
                </p>
                <p className="text-sm text-gray-300 italic">
                  We work alongside communities as partners, not saviors,
                  learning from their wisdom, understanding their unique
                  contexts, and supporting their vision for healthier futures.
                </p>
              </div>

              {/* Integrity */}
              <div>
                <h4 className="text-xl font-bold text-yellow-400 mb-3">
                  Integrity
                </h4>
                <p className="text-white mb-2 leading-relaxed font-semibold">
                  Acting with transparency and accountability in all we do.
                </p>
                <p className="text-sm text-gray-300 italic">
                  Every resource entrusted to us is stewarded with care and
                  directed to maximum impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Section - 2030 Goals */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-teal-800 mb-4">
            Our goal by 2030:
          </h2>

          <div className="text-4xl font-bold mb-12 text-teal-800">
            3.6 million patients served, countless communities strengthened.
          </div>

          <p className="text-lg mb-16 leading-relaxed text-gray-700">
            We'll get there by deepening our programs, expanding innovative care
            models, and building healthcare systems that last... led by local
            teams, sustained by smart investment.
          </p>

          {/* Overview image */}
          <div
            className="relative mx-auto mb-16"
            style={{ width: "300px", height: "300px" }}
          >
            <div className="w-full h-full rounded-full overflow-hidden shadow-2xl">
              <img
                src={overviewImage}
                alt="Overview collage showing our mission and impact"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <button className="bg-coral-500 hover:bg-coral-600 text-yellow-400 font-bold py-3 px-8 rounded-full transition-colors duration-200">
            GET INVOLVED
          </button>
        </div>
      </section>

      {/* Fifth Section - Call to Action */}
      <section className="py-20 px-6 bg-teal-600 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image placeholder */}
          <div className="h-96 bg-gray-400 rounded-lg flex items-center justify-center">
            <span className="text-gray-600 text-lg">
              Portrait Image Placeholder
            </span>
          </div>

          {/* Right side - Content */}
          <div>
            <h2 className="text-4xl font-bold mb-8 leading-tight">
              Let's transform lives and build healthier futures.
            </h2>

            <p className="text-xl mb-8 leading-relaxed">
              Join us in creating lasting access to care... built by local teams
              and powered by your support. Together, we can transform lives and
              build healthier futures.
            </p>

            <button className="bg-yellow-400 hover:bg-yellow-500 text-teal-800 font-bold py-3 px-8 rounded-full transition-colors duration-200">
              Support Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;
