import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Loader2 } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: '',
    preferred_contact_method: 'email'
  });

  const [status, setStatus] = useState<{
    type: 'success' | 'error' | '';
    message: string;
  }>({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // Simulate API call - replace with your actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus({
        type: 'success',
        message: 'Message sent successfully! We will get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        phone: '',
        preferred_contact_method: 'email'
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-900 via-teal-800 to-blue-700 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-6 relative py-24">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <span className="bg-yellow-400 text-black font-bold px-4 py-2 text-sm uppercase tracking-wide">
                CONTACT US
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Ready to transform healthcare together? We're here to answer your questions, 
              discuss partnerships, and help you get involved in our mission.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 -mt-16">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-teal-800 mb-6">
                    Get in Touch
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-teal-600 mt-1" />
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          Visit Us
                        </h3>
                        <p className="mt-1 text-gray-600">
                          Pioneer House, Kenyatta Avenue<br />
                          6th Floor, Suite 8<br />
                          Nairobi, Kenya
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-teal-600 mt-1" />
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          Call Us
                        </h3>
                        <p className="mt-1 text-gray-600">
                          <a
                            href="tel:+254700123456"
                            className="text-teal-600 hover:underline"
                          >
                            +254 700 123 456
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-teal-600 mt-1" />
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          Email Us
                        </h3>
                        <p className="mt-1 text-gray-600">
                          <a
                            href="mailto:info@ubuntuafya.org"
                            className="text-teal-600 hover:underline"
                          >
                            info@ubuntuafya.org
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-6 w-6 text-teal-600 mt-1" />
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          Office Hours
                        </h3>
                        <p className="mt-1 text-gray-600">
                          Monday - Friday: 8:00 AM - 5:00 PM EAT<br />
                          Saturday: 9:00 AM - 1:00 PM EAT
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-teal-800 mb-6">
                    Send Us a Message
                  </h2>

                  {/* Status Message */}
                  {status.type && (
                    <div
                      className={`mb-6 p-4 rounded-md ${
                        status.type === "success"
                          ? "bg-green-50 text-green-700 border border-green-200"
                          : "bg-red-50 text-red-700 border border-red-200"
                      }`}
                    >
                      {status.message}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          className="block text-sm font-medium text-gray-700 mb-2"
                          htmlFor="name"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none transition-colors"
                          required
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label
                          className="block text-sm font-medium text-gray-700 mb-2"
                          htmlFor="email"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none transition-colors"
                          required
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          className="block text-sm font-medium text-gray-700 mb-2"
                          htmlFor="phone"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none transition-colors"
                          placeholder="+254 700 000 000"
                        />
                      </div>
                      <div>
                        <label
                          className="block text-sm font-medium text-gray-700 mb-2"
                          htmlFor="preferred_contact_method"
                        >
                          Preferred Contact Method
                        </label>
                        <select
                          id="preferred_contact_method"
                          name="preferred_contact_method"
                          value={formData.preferred_contact_method}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none transition-colors"
                        >
                          <option value="email">Email</option>
                          <option value="phone">Phone</option>
                          <option value="whatsapp">WhatsApp</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        className="block text-sm font-medium text-gray-700 mb-2"
                        htmlFor="subject"
                      >
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none transition-colors"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="volunteer">Volunteer Program</option>
                        <option value="donation">Donation Question</option>
                        <option value="technical">Technical Support</option>
                        <option value="media">Media Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label
                        className="block text-sm font-medium text-gray-700 mb-2"
                        htmlFor="message"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none transition-colors resize-vertical"
                        required
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center disabled:opacity-75"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps?q=Pioneer+House,+Kenyatta+Avenue,+Nairobi,+Kenya&output=embed"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="flex justify-center p-6">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Pioneer+House,+Kenyatta+Avenue,+Nairobi,+Kenya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-6 py-3 rounded-lg transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;