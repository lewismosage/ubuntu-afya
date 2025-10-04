import React, { useState } from 'react';
import { HeartHandshake, ShieldCheck, Banknote, ArrowRight, Check, CheckCircle, Loader2 } from 'lucide-react';
import donationImg from '../assets/donation.jpg';
import ScrollToTop from '../components/common/ScrollToTop';

const DonatePage: React.FC = () => {
  const [donationAmount, setDonationAmount] = useState<number | null>(50);
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'bank' | 'mobile'>('card');
  const [donationComplete, setDonationComplete] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Form data
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorCountry, setDonorCountry] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [designatedCause, setDesignatedCause] = useState<'general' | 'telemedicine' | 'training' | 'research' | 'emergency'>('general');

  const presetAmounts = [20, 50, 100, 250, 500, 1000];

  if (donationComplete) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-sm text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You for Your Support!</h2>
          <p className="text-lg text-gray-600 mb-8">
            Your donation will help us improve healthcare for communities across Kenya. 
            A receipt has been sent to your email.
          </p>
          <div className="bg-ubuntu-blue-50 p-6 rounded-lg text-left mb-8">
            <h3 className="font-semibold text-gray-900 mb-2">Donation Summary</h3>
            <p className="text-gray-600">Amount: ${donationAmount}</p>
            <p className="text-gray-600">Frequency: {donationType === 'one-time' ? 'One-time' : 'Monthly'}</p>
          </div>
          <button
            onClick={() => setDonationComplete(false)}
            className="w-full bg-ubuntu-blue-600 hover:bg-ubuntu-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Make Another Donation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTop/>
      {/* Hero Section */}
      <div className="relative w-full h-auto lg:h-[440px]">
        <div className="flex flex-col lg:flex-row w-full h-full">
          {/* Left: Ubuntu Afya blue background with content - now comes first in DOM for mobile */}
          <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center bg-gradient-to-r from-ubuntu-blue-700 to-ubuntu-blue-700 px-4 sm:px-6 lg:px-12 py-12 min-h-[300px] lg:min-h-full">
            <div className="w-20 h-20 bg-ubuntu-orange-100 bg-opacity-20 rounded-full flex items-center justify-center mb-6 mx-auto lg:mx-0">
              <HeartHandshake className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-center lg:text-left">
              Support Healthcare in Rural Kenya
            </h1>
            <p className="text-lg lg:text-xl text-ubuntu-blue-100 max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
              Your donation helps build Ubuntu-Afya kiosks, train community health workers, and provide essential healthcare services to underserved communities.
            </p>
          </div>
          
          {/* Right: Image - now stacks below on mobile */}
          <div className="relative w-full lg:w-1/2 h-[300px] lg:h-full">
            <img
              src={donationImg}
              alt="Donation"
              className="absolute inset-0 w-full h-full object-cover lg:rounded-none shadow-lg"
              style={{ objectPosition: 'center' }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"> 
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Donation Form - Now wider */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Make a Donation</h2>
              
              <form onSubmit={(e) => e.preventDefault()}>
                {/* Donation Type */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">I want to give:</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setDonationType('one-time')}
                      className={`py-3 px-6 rounded-lg border ${donationType === 'one-time' ? 'border-ubuntu-orange-600 bg-ubuntu-orange-50 text-ubuntu-orange-700' : 'border-gray-300 text-gray-700'} font-medium transition-colors`}
                    >
                      One-time
                    </button>
                    <button
                      type="button"
                      onClick={() => setDonationType('monthly')}
                      className={`py-3 px-6 rounded-lg border ${donationType === 'monthly' ? 'border-ubuntu-orange-600 bg-ubuntu-orange-50 text-ubuntu-orange-700' : 'border-gray-300 text-gray-700'} font-medium transition-colors`}
                    >
                      Monthly
                    </button>
                  </div>
                </div>

                {/* Amount Selection - Wider buttons */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Select amount (USD)</h3>
                  <div className="grid grid-cols-3 gap-4"> {/* Increased gap */}
                    {presetAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => setDonationAmount(amount)}
                        className={`py-4 px-6 rounded-lg border ${donationAmount === amount ? 'border-ubuntu-orange-600 bg-ubuntu-orange-50 text-ubuntu-orange-700' : 'border-gray-300 text-gray-700'} font-medium transition-colors`}
                      >
                        ${amount}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => setDonationAmount(null)}
                      className={`py-4 px-6 rounded-lg border col-span-3 ${donationAmount === null ? 'border-ubuntu-orange-600 bg-ubuntu-orange-50 text-ubuntu-orange-700' : 'border-gray-300 text-gray-700'} font-medium transition-colors`}
                    >
                      Other amount
                    </button>
                  </div>
                  {donationAmount === null && (
                    <div className="mt-4">
                      <input
                        type="number"
                        placeholder="Enter amount"
                        className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ubuntu-orange-500"
                        min="1"
                        onChange={(e) => setDonationAmount(Number(e.target.value))}
                      />
                    </div>
                  )}
                </div>

                {/* Payment Method - Wider options */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Payment method</h3>
                  <div className="space-y-4"> {/* Increased spacing */}
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`w-full py-4 px-6 rounded-lg border ${paymentMethod === 'card' ? 'border-ubuntu-orange-600 bg-ubuntu-orange-50' : 'border-gray-300'} flex items-center transition-colors`}
                    >
                      <div className={`w-5 h-5 rounded-full border mr-4 ${paymentMethod === 'card' ? 'border-ubuntu-orange-600 bg-ubuntu-orange-600' : 'border-gray-300'}`}></div>
                      <span className="font-medium">Credit/Debit Card</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('bank')}
                      className={`w-full py-4 px-6 rounded-lg border ${paymentMethod === 'bank' ? 'border-ubuntu-orange-600 bg-ubuntu-orange-50' : 'border-gray-300'} flex items-center transition-colors`}
                    >
                      <div className={`w-5 h-5 rounded-full border mr-4 ${paymentMethod === 'bank' ? 'border-ubuntu-orange-600 bg-ubuntu-orange-600' : 'border-gray-300'}`}></div>
                      <span className="font-medium">Bank Transfer</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('mobile')}
                      className={`w-full py-4 px-6 rounded-lg border ${paymentMethod === 'mobile' ? 'border-ubuntu-orange-600 bg-ubuntu-orange-50' : 'border-gray-300'} flex items-center transition-colors`}
                    >
                      <div className={`w-5 h-5 rounded-full border mr-4 ${paymentMethod === 'mobile' ? 'border-ubuntu-orange-600 bg-ubuntu-orange-600' : 'border-gray-300'}`}></div>
                      <span className="font-medium">Mobile Money</span>
                    </button>
                  </div>
                </div>

                {/* Designated Cause */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Where would you like your donation to go?</h3>
                  <select
                    value={designatedCause}
                    onChange={(e) => setDesignatedCause(e.target.value as any)}
                    className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ubuntu-orange-500"
                  >
                    <option value="general">General Fund - Where it's needed most</option>
                    <option value="telemedicine">Ubuntu-Afya Kiosk Expansion</option>
                    <option value="training">Community Health Worker Training</option>
                    <option value="research">Health Research Programs</option>
                    <option value="emergency">Emergency Response</option>
                  </select>
                </div>

                {/* Donor Information */}
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <h3 className="text-lg font-medium text-gray-900">Your information</h3>
                    <label className="ml-4 flex items-center">
                      <input
                        type="checkbox"
                        checked={isAnonymous}
                        onChange={(e) => setIsAnonymous(e.target.checked)}
                        className="mr-2"
                      />
                      <span className="text-sm text-gray-600">Make this donation anonymous</span>
                    </label>
                  </div>
                  
                  {!isAnonymous && (
                    <>
                      <div className="mb-6">
                        <label htmlFor="donorName" className="block text-sm font-medium text-gray-700 mb-2">Full name</label>
                        <input
                          type="text"
                          id="donorName"
                          value={donorName}
                          onChange={(e) => setDonorName(e.target.value)}
                          className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ubuntu-orange-500"
                          required={!isAnonymous}
                        />
                      </div>
                      <div className="mb-6">
                        <label htmlFor="donorEmail" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                          type="email"
                          id="donorEmail"
                          value={donorEmail}
                          onChange={(e) => setDonorEmail(e.target.value)}
                          className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ubuntu-orange-500"
                          required={!isAnonymous}
                        />
                      </div>
                      <div>
                        <label htmlFor="donorCountry" className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                        <select
                          id="donorCountry"
                          value={donorCountry}
                          onChange={(e) => setDonorCountry(e.target.value)}
                          className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ubuntu-orange-500"
                        >
                          <option value="">Select country</option>
                          <option value="US">United States</option>
                          <option value="NG">Nigeria</option>
                          <option value="KE">Kenya</option>
                          <option value="ZA">South Africa</option>
                          <option value="GH">Ghana</option>
                          <option value="EG">Egypt</option>
                          <option value="MA">Morocco</option>
                          <option value="TZ">Tanzania</option>
                          <option value="UG">Uganda</option>
                          <option value="ET">Ethiopia</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </>
                  )}
                </div>

                {/* Error Message */}
                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 text-sm">{error}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="button"
                  onClick={() => setDonationComplete(true)}
                  className="w-full bg-ubuntu-orange-600 hover:bg-ubuntu-orange-700 disabled:bg-gray-400 text-white font-medium py-5 px-6 rounded-lg flex items-center justify-center transition-colors text-lg"
                  disabled={!donationAmount || isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Donate ${donationAmount || ''}
                      <ArrowRight className="w-5 h-5 ml-3" />
                    </>
                  )}
                </button>

                {/* Security Assurance */}
                <div className="mt-6 flex items-center text-sm text-gray-500"> {/* Increased spacing */}
                  <ShieldCheck className="w-5 h-5 mr-3 text-gray-400" />
                  Secure payment processing powered by Stripe
                </div>
              </form>
            </div>
          </div>

          {/* Impact Sidebar - Also wider */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-8 h-full">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Your Impact</h2>
              
              <div className="space-y-8"> {/* Increased spacing */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-ubuntu-orange-100 rounded-full flex items-center justify-center mr-5 flex-shrink-0">
                    <Banknote className="w-6 h-6 text-ubuntu-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-lg mb-1">$50</h3>
                    <p className="text-gray-600">Provides healthcare services for 5 families</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-ubuntu-orange-100 rounded-full flex items-center justify-center mr-5 flex-shrink-0">
                     <Banknote className="w-6 h-6 text-ubuntu-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-lg mb-1">$100</h3>
                    <p className="text-gray-600">Supports one month of training for a community health worker</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-ubuntu-orange-100 rounded-full flex items-center justify-center mr-5 flex-shrink-0">
                    <Banknote className="w-6 h-6 text-ubuntu-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-lg mb-1">$250</h3>
                    <p className="text-gray-600">Funds essential medicines for a Ubuntu-Afya kiosk</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-ubuntu-orange-100 rounded-full flex items-center justify-center mr-5 flex-shrink-0">
                     <Banknote className="w-6 h-6 text-ubuntu-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-lg mb-1">$500+</h3>
                    <p className="text-gray-600">Helps establish new Ubuntu-Afya kiosks in underserved areas</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="font-medium text-gray-900 text-lg mb-4">Why donate to Ubuntu Afya?</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-ubuntu-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>90% of donations go directly to programs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-ubuntu-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Transparent financial reporting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-ubuntu-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Community-owned healthcare model</span>
                  </li>
                </ul>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="font-medium text-gray-900 text-lg mb-4">WHERE YOUR MONEY GOES</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <p>Every donation to Ubuntu Afya supports our mission across Kenya, from building Ubuntu-Afya kiosks to training community health workers, providing essential medicines, and strengthening healthcare systems that serve rural communities.</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-ubuntu-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>We couldn't do any of this work without your support.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-ubuntu-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>You can visit our Impact Report pages for more information about where your money goes.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
