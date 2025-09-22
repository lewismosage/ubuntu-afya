import React, { useState } from 'react';
import { Heart, CreditCard, Smartphone, Building2, Users, GraduationCap, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const Donate: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    paymentMethod: 'card'
  });

  const donationAmounts = [25, 50, 100, 250, 500, 1000];

  const impactExamples = [
    {
      amount: 25,
      impact: 'Provides basic health screening for 5 community members',
      icon: Users
    },
    {
      amount: 100,
      impact: 'Funds medical supplies for one kiosk for a month',
      icon: Building2
    },
    {
      amount: 250,
      impact: 'Sponsors training for one community health worker',
      icon: GraduationCap
    },
    {
      amount: 500,
      impact: 'Supports maternal care services for 20 women',
      icon: Heart
    }
  ];

  const getCurrentImpact = () => {
    const amount = customAmount ? parseInt(customAmount) : selectedAmount;
    return impactExamples.reduce((closest, example) => {
      return Math.abs(example.amount - amount) < Math.abs(closest.amount - amount) 
        ? example 
        : closest;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for your generous donation! You will receive a confirmation email shortly.');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Get current impact and create the icon component
  const currentImpact = getCurrentImpact();
  const ImpactIcon = currentImpact.icon;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding gradient-bg text-white">
        <div className="container-custom text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Support Our Mission
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            With your support, Ubuntu Afya can reach more communities, expand digital health tools, 
            and continue training health workers who deliver lifesaving care.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Donation Form */}
            <div className="lg:col-span-2">
              <div className="card animate-fade-in-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Make a Donation</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Donation Type */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-4">
                      Donation Type
                    </label>
                    <div className="flex space-x-4">
                      <button
                        type="button"
                        onClick={() => setDonationType('one-time')}
                        className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
                          donationType === 'one-time'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        One-time
                      </button>
                      <button
                        type="button"
                        onClick={() => setDonationType('recurring')}
                        className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
                          donationType === 'recurring'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        Monthly
                      </button>
                    </div>
                  </div>

                  {/* Amount Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-4">
                      Select Amount
                    </label>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {donationAmounts.map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => {
                            setSelectedAmount(amount);
                            setCustomAmount('');
                          }}
                          className={`py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
                            selectedAmount === amount && !customAmount
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          ${amount}
                        </button>
                      ))}
                    </div>
                    <input
                      type="number"
                      placeholder="Custom amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(0);
                      }}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* Payment Method */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-4">
                      Payment Method
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'card' }))}
                        className={`flex items-center justify-center space-x-2 py-3 px-4 border rounded-lg transition-colors duration-200 ${
                          formData.paymentMethod === 'card'
                            ? 'border-blue-600 bg-blue-50 text-blue-600'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        <CreditCard className="w-5 h-5" />
                        <span>Credit Card</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'paypal' }))}
                        className={`flex items-center justify-center space-x-2 py-3 px-4 border rounded-lg transition-colors duration-200 ${
                          formData.paymentMethod === 'paypal'
                            ? 'border-blue-600 bg-blue-50 text-blue-600'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        <span>PayPal</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'mpesa' }))}
                        className={`flex items-center justify-center space-x-2 py-3 px-4 border rounded-lg transition-colors duration-200 ${
                          formData.paymentMethod === 'mpesa'
                            ? 'border-blue-600 bg-blue-50 text-blue-600'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        <Smartphone className="w-5 h-5" />
                        <span>M-Pesa</span>
                      </button>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full btn-primary text-lg py-4 flex items-center justify-center space-x-2"
                  >
                    <Heart className="w-5 h-5" />
                    <span>
                      Donate ${customAmount || selectedAmount} {donationType === 'recurring' ? '/month' : ''}
                    </span>
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Impact Summary */}
              <div className="card animate-fade-in-right">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Impact</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <ImpactIcon className="w-6 h-6 text-blue-600" />
                    <span className="text-gray-700">{currentImpact.impact}</span>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      Every dollar you donate goes directly to supporting community health initiatives.
                    </p>
                  </div>
                </div>
              </div>

              {/* Impact Examples */}
              <div className="card animate-fade-in-right" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-xl font-bold text-gray-900 mb-6">How Your Donation Helps</h3>
                <div className="space-y-4">
                  {impactExamples.map((example, index) => {
                    const ExampleIcon = example.icon;
                    return (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">${example.amount}</span>
                        </div>
                        <p className="text-sm text-gray-700">{example.impact}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Security Notice */}
              <div className="card bg-green-50 border border-green-200 animate-fade-in-right" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-semibold text-green-800">Secure Donation</h3>
                </div>
                <p className="text-sm text-green-700">
                  Your donation is processed securely through our encrypted payment system. 
                  All contributions are tax-deductible to the full extent allowed by law.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Ways to Give */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Other Ways to <span className="text-gradient">Support</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond monetary donations, there are many ways to support our mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Corporate Sponsorship',
                description: 'Partner with us to sponsor entire kiosks or programs.',
                action: 'Learn More',
                color: 'from-blue-500 to-blue-600'
              },
              {
                title: 'In-Kind Donations',
                description: 'Donate medical equipment, supplies, or technology.',
                action: 'Contact Us',
                color: 'from-purple-500 to-purple-600'
              },
              {
                title: 'Fundraising Events',
                description: 'Organize community fundraising events in your area.',
                action: 'Get Started',
                color: 'from-orange-500 to-orange-600'
              }
            ].map((option, index) => (
              <div 
                key={index}
                className="card group hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${option.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{option.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{option.description}</p>
                <button className="text-blue-600 hover:text-orange-500 font-semibold transition-colors duration-200">
                  {option.action} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;