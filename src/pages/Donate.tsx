import React, { useState } from 'react';
import { Heart, Users, TrendingUp, ArrowRight, Calendar, Building, Gift,} from 'lucide-react';

const DonatePage: React.FC = () => {
  const [donationType, setDonationType] = useState<'onetime' | 'monthly'>('onetime');
  const [selectedAmount, setSelectedAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>('');

  const predefinedAmounts = [50, 100, 250, 500];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(0);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Donation Form */}
      <section className="py-16 px-6 bg-teal-700 text-white">
        <div className="max-w-7xl mx-auto">
          {/* Donate label */}
          <div className="mb-8">
            <span className="bg-yellow-400 text-black font-bold px-4 py-2 text-sm uppercase tracking-wide">
              DONATE
            </span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Content */}
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-8">
                Every Dollar Creates Hope
              </h1>
              
              <div className="space-y-6 text-lg">
                <p>
                  When you give to Ubuntu Afya, you're not just donating, you're delivering 
                  life-changing care to people who would otherwise go without.
                </p>
                
                <p>
                  You're helping mothers deliver safely. Children access treatment. Families build 
                  trust in a system that will be there tomorrow—and for generations to come.
                </p>
              </div>
            </div>

            {/* Right side - Donation Form */}
            <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center">Choose Your Gift</h3>
              
              {/* Donation Type Toggle */}
              <div className="flex mb-6">
                <button
                  onClick={() => setDonationType('onetime')}
                  className={`flex-1 py-3 px-4 font-semibold rounded-l-lg border-2 transition-colors ${
                    donationType === 'onetime'
                      ? 'bg-teal-500 text-white border-teal-500'
                      : 'bg-white text-teal-500 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  One Time
                </button>
                <button
                  onClick={() => setDonationType('monthly')}
                  className={`flex-1 py-3 px-4 font-semibold rounded-r-lg border-2 border-l-0 transition-colors ${
                    donationType === 'monthly'
                      ? 'bg-teal-500 text-white border-teal-500'
                      : 'bg-white text-teal-500 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Monthly
                </button>
              </div>

              {/* Amount Selection */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {predefinedAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleAmountSelect(amount)}
                    className={`py-3 px-4 font-semibold rounded-lg border-2 transition-colors ${
                      selectedAmount === amount
                        ? 'bg-teal-500 text-white border-teal-500'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-teal-300'
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>

              {/* Custom Amount Input */}
              <div className="mb-8">
                <input
                  type="text"
                  placeholder="Other"
                  value={customAmount}
                  onChange={(e) => handleCustomAmountChange(e.target.value)}
                  className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:outline-none text-lg"
                />
              </div>

              {/* Donate Button */}
              <button className="w-full bg-coral-500 hover:bg-coral-600 text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors">
                Give ${customAmount || selectedAmount}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Your Donation Makes a Difference Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Content */}
            <div>
              <h2 className="text-4xl font-bold text-teal-800 mb-8">
                Your Donation Makes a Difference
              </h2>
              
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  We believe in solutions that last—and grow. With your support, we don't just treat symptoms. We 
                  strengthen healthcare systems that empower communities for generations.
                </p>
                
                <p>
                  Every project we launch is led locally, built for sustainability, and supported to evolve with the needs of 
                  the people it serves.
                </p>
                
                <p>
                  Our model is designed to be sustainable—but that doesn't mean it stops needing support. Patient fees 
                  cover daily operations. But your support is essential to help local providers, expand essential programs, 
                  upgrade equipment, and build new facilities.
                </p>
                
                <p className="font-semibold text-teal-800">
                  This is how we grow from access to excellence.
                </p>
                
                <div className="space-y-2 text-gray-600">
                  <p>This isn't just infrastructure—it's transformation.</p>
                  <p>Not just construction, but connection.</p>
                  <p>Not just treatment—but health systems that last.</p>
                </div>
              </div>
            </div>

            {/* Right side - Image placeholder */}
            <div className="h-96 bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-lg">Community Impact Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Giving and Corporate Partnerships */}
      <section className="py-20 px-6 bg-teal-600">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Monthly Giving */}
            <div className="bg-teal-500 p-8 rounded-2xl text-white">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    Join our Monthly Giving Program
                  </h3>
                  <p className="text-xl font-semibold text-yellow-400 mb-4">
                    Invest in Long-Term Impact
                  </p>
                  <p className="text-teal-100 leading-relaxed mb-6">
                    By becoming a monthly giver, you're providing a steady stream of 
                    support that helps us not just respond to health crises but implement 
                    sustained change. Monthly donations help us plan for the future and continue providing 
                    care long after the initial need is met.
                  </p>
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-teal-800 font-bold py-3 px-6 rounded-lg transition-colors flex items-center">
                    Monthly Giving
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
              
              {/* Image placeholder */}
              <div className="h-48 bg-teal-400 rounded-lg flex items-center justify-center mt-6">
                <span className="text-teal-700 text-sm">Monthly Program Image</span>
              </div>
            </div>

            {/* Corporate Partnerships */}
            <div>
              {/* Image placeholder */}
              <div className="h-48 bg-gray-300 rounded-lg flex items-center justify-center mb-6">
                <span className="text-gray-500 text-sm">Corporate Partnership Image</span>
              </div>
              
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Explore Corporate Partnerships
                </h3>
                <p className="text-xl font-semibold text-yellow-400 mb-4">
                  Amplify Your Company's Impact
                </p>
                <p className="text-teal-100 leading-relaxed mb-6">
                  Partnering with Ubuntu Afya creates an amazing opportunity to 
                  make a global difference. From employee giving programs to corporate 
                  sponsorships, we work with companies large and small to create 
                  meaningful partnerships that deliver results.
                </p>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-teal-800 font-bold py-3 px-6 rounded-lg transition-colors flex items-center">
                  Partnership Info
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Giving Opportunities */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-teal-800 mb-4">
              More Giving Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a range of programs and initiatives for donors of all kinds, from individuals to groups. 
              Explore how you can make a difference with OneWorld Health through our giving programs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Grounded Hearts */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-coral-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-coral-500" />
              </div>
              <h3 className="text-xl font-bold text-teal-800 mb-3">
                Grounded Hearts
              </h3>
              <p className="text-gray-600 mb-4">
                Next-Generation Change-makers
              </p>
              <button className="text-teal-600 font-semibold flex items-center hover:text-teal-700">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

            {/* Beacon */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-teal-800 mb-3">
                Beacon
              </h3>
              <p className="text-gray-600 mb-4">
                Partnering Faith and Health
              </p>
              <button className="text-teal-600 font-semibold flex items-center hover:text-teal-700">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

            {/* Fundraise with Us */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-teal-800 mb-3">
                Fundraise with Us
              </h3>
              <p className="text-gray-600 mb-4">
                Multiply Your Impact
              </p>
              <button className="text-teal-600 font-semibold flex items-center hover:text-teal-700">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Sponsor a Clinic */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Building className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-teal-800 mb-3">
                Sponsor a Clinic
              </h3>
              <p className="text-gray-600 mb-4">
                Build Hope for Generations
              </p>
              <button className="text-teal-600 font-semibold flex items-center hover:text-teal-700">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

            {/* Legacy Giving */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Gift className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-teal-800 mb-3">
                Legacy Giving
              </h3>
              <p className="text-gray-600 mb-4">
                Leave a Lasting Impact
              </p>
              <button className="text-teal-600 font-semibold flex items-center hover:text-teal-700">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stories of Hope Section */}
      <section className="py-20 px-6 bg-teal-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-teal-800">
              Stories of Hope: <span className="text-teal-600">Patients</span>
            </h2>
            <button className="text-teal-700 font-semibold flex items-center hover:text-teal-800">
              More Stories
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Story Image */}
              <div className="h-64 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500 text-lg">Patient Story Image</span>
              </div>
              
              {/* Story Content */}
              <div className="p-8">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-sm text-teal-600 font-semibold">Stories of Hope</span>
                  <span className="text-gray-400">|</span>
                  <span className="text-sm text-gray-600">Kenya → Uganda</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Grace's Second Chance: A Mother's Story from Rural Uganda
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Grace seemed in critical illness and her town lacked the health care in Ubuntu Afya's 
                  maternal care in Uganda. Her premature baby received the loving treatment 
                  and today, both mother and child are thriving.
                </p>
                
                <button className="text-teal-600 font-semibold flex items-center hover:text-teal-700">
                  Read Story
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonatePage;