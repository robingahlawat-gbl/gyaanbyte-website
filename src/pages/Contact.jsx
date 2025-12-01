import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const timeoutRef = useRef(null);

  // Cleanup timeout on component unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    // Allow various phone formats: +91 XXXXX XXXXX, XXXXXXXXXX, etc.
    const phoneRegex = /^[\d\s+()-]{10,}$/;
    return phoneRegex.test(phone);
  };

  const sanitizeInput = (value) => {
    // Remove any potentially harmful characters (but keep spaces for natural typing)
    return value.replace(/[<>]/g, '');
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';

      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!validateEmail(value)) return 'Please enter a valid email address';
        return '';

      case 'phone':
        if (!value.trim()) return 'Phone number is required';
        if (!validatePhone(value)) return 'Please enter a valid phone number (min 10 digits)';
        return '';

      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return '';

      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value);

    setFormData({
      ...formData,
      [name]: sanitizedValue
    });

    // Validate on change if field was touched
    if (touched[name]) {
      const error = validateField(name, sanitizedValue);
      setErrors({
        ...errors,
        [name]: error
      });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    setTouched({
      ...touched,
      [name]: true
    });

    const error = validateField(name, value);
    setErrors({
      ...errors,
      [name]: error
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    // Mark all fields as touched
    const allTouched = {};
    Object.keys(formData).forEach(key => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    // If there are errors, don't submit
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE',
          name: formData.name,
          email: formData.email,
          phone: `${formData.countryCode} ${formData.phone}`,
          company: formData.company || 'Not provided',
          service: formData.service || 'Not specified',
          message: formData.message,
          from_name: 'GyaanByte Website Contact Form',
          subject: `New Contact Form Submission from ${formData.name}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          countryCode: '+91',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
        setErrors({});
        setTouched({});

        // Clear success message after 5 seconds
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
          setSubmitted(false);
          timeoutRef.current = null;
        }, 5000);
      } else {
        setSubmitError('Failed to send message. Please try again or email us directly.');
      }
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('Form submission error:', error);
      }
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Call Us',
      primary: '+91 8950 709 015',
<<<<<<< HEAD
      primaryLink: 'tel:+918950709015',
=======
      primaryLink: 'tel:+918684861010',
>>>>>>> f8f4c69 (Initial commit)
      secondary: 'Mon-Sat, 9AM-6PM IST',
      gradient: 'from-gb-blue-500 to-gb-blue-600'
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email Us',
      primary: 'info@gyaanbytelabs.com',
      primaryLink: 'mailto:info@gyaanbytelabs.com',
      secondary: 'sales@gyaanbytelabs.com',
      secondaryLink: 'mailto:sales@gyaanbytelabs.com',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Visit Us',
      primary: 'Rohtak, Haryana, India',
      secondary: '1st Floor, Raj Singh Complex',
      gradient: 'from-gb-orange-500 to-gb-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Contact Us"
        description="Get in touch with GyaanByte Labs. Call +91 8950 709 015 or email info@gyaanbytelabs.com. Free consultation for QuickBooks & Sage Intacct projects. Response time < 4 hours."
        keywords="contact gyaanbyte, quickbooks consultant, sage intacct expert, financial data services, free consultation, rohtak haryana"
        canonical="/contact"
      />
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gb-blue-600 via-gb-blue-700 to-purple-700 text-white pt-20 pb-32 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-white to-transparent rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-white to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Response Time Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold border-2 border-white/30 shadow-lg mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              We typically respond within 24 hours
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 animate-slide-up">
              <span className="block">Let's Talk About</span>
              <span className="block text-gb-orange-400 mt-2">Your Project</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl sm:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Schedule a <span className="font-bold text-white">complimentary 30-minute consultation</span> to discuss your financial data infrastructure needs
            </p>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 sm:mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className={`bg-gradient-to-r ${method.gradient} p-4 sm:p-6 text-white text-center`}>
                  <div className="flex justify-center mb-3">{method.icon}</div>
                  <h3 className="text-xl font-bold">{method.title}</h3>
                </div>
                <div className="p-4 sm:p-6 text-center">
                  {method.primaryLink ? (
                    <a href={method.primaryLink} className="text-lg font-semibold text-gray-900 hover:text-gb-blue-600 transition-colors block mb-2">
                      {method.primary}
                    </a>
                  ) : (
                    <p className="text-lg font-semibold text-gray-900 mb-2">{method.primary}</p>
                  )}
                  {method.secondaryLink ? (
                    <a href={method.secondaryLink} className="text-sm text-gray-600 hover:text-gb-blue-600 transition-colors">
                      {method.secondary}
                    </a>
                  ) : (
                    <p className="text-sm text-gray-600">{method.secondary}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 border border-gray-100">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Send Us a Message</h2>
                <p className="text-gray-600 text-lg">
                  Tell us about your project and we'll get back to you with a detailed proposal and timeline.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-green-900 mb-1">Message Sent Successfully!</p>
                      <p className="text-sm text-green-700">We've received your inquiry and will respond within 24 hours.</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Show submit error if any */}
                {submitError && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                    <p className="text-red-700 text-sm">{submitError}</p>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-gb-blue-500 transition-all ${
                        errors.name && touched.name
                          ? 'border-red-300 focus:border-red-500'
                          : 'border-gray-200 focus:border-gb-blue-500'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && touched.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-gb-blue-500 transition-all ${
                        errors.email && touched.email
                          ? 'border-red-300 focus:border-red-500'
                          : 'border-gray-200 focus:border-gb-blue-500'
                      }`}
                      placeholder="john@company.com"
                    />
                    {errors.email && touched.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="w-28 flex-shrink-0 px-3 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-gb-blue-500 focus:border-gb-blue-500 transition-all text-sm font-medium"
                    >
                      <option value="+1">USA +1</option>
                      <option value="+44">UK +44</option>
                      <option value="+91">IN +91</option>
                      <option value="+61">AUS +61</option>
                      <option value="+81">JPN +81</option>
                      <option value="+86">CHN +86</option>
                      <option value="+33">FRA +33</option>
                      <option value="+49">GER +49</option>
                      <option value="+971">UAE +971</option>
                      <option value="+65">SGP +65</option>
                    </select>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`flex-1 min-w-0 px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-gb-blue-500 transition-all ${
                        errors.phone && touched.phone
                          ? 'border-red-300 focus:border-red-500'
                          : 'border-gray-200 focus:border-gb-blue-500'
                      }`}
                      placeholder="XXXXX XXXXX"
                    />
                  </div>
                  {errors.phone && touched.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-gb-blue-500 focus:border-gb-blue-500 transition-all"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    What are you interested in?
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-gb-blue-500 focus:border-gb-blue-500 transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="migration">Data Migration (QuickBooks/Sage)</option>
                    <option value="dashboards">Dashboard Development</option>
                    <option value="integration">System Integration</option>
                    <option value="consulting">Consulting Services</option>
                    <option value="academy">Training Academy</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tell us about your project <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-gb-blue-500 transition-all resize-y ${
                      errors.message && touched.message
                        ? 'border-red-300 focus:border-red-500'
                        : 'border-gray-200 focus:border-gb-blue-500'
                    }`}
                    placeholder="What challenges are you facing? What are your goals?"
                  />
                  {errors.message && touched.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-gb-blue-600 to-gb-blue-700 text-white hover:shadow-xl transform hover:-translate-y-0.5'
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </span>
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy. We never share your information.
                </p>
              </form>
            </div>

            {/* Right Column - Info Cards */}
            <div className="space-y-6">
              {/* Map */}
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
                <div className="h-[300px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3488.1234567890123!2d76.6109788!3d28.8942414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d85d788294c0d%3A0xaa505b77b28a49c3!2sGyaanByte%20Labs%20Private%20Limited!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="GyaanByte Labs Location"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Office</h3>
                  <p className="text-gray-600 mb-3">
                    1st Floor, Raj Singh Complex<br />
                    Near Sheela Bypass Flyover<br />
                    Rohtak 124001, Haryana, India
                  </p>
                  <a
                    href="https://maps.app.goo.gl/jNc494dWSB7JuJn18"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gb-blue-600 hover:text-gb-blue-700 font-semibold"
                  >
                    <span>View on Maps</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Government Recognition */}
              <div className="bg-gradient-to-br from-gb-blue-50 to-purple-50 rounded-3xl p-8 shadow-lg border-2 border-gb-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <svg className="w-6 h-6 text-gb-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                  Government Recognized
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gb-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Startup India Recognized</p>
                      <p className="text-sm text-gray-600">Certificate: DIPP228466</p>
                      <p className="text-xs text-gray-500">Valid till August 2035</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Skill India Training Partner</p>
                      <p className="text-sm text-gray-600">Ministry of Skill Development</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Business Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Monday - Friday</span>
                    <span className="font-bold text-gray-900">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Saturday</span>
                    <span className="font-bold text-gray-900">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-700 font-medium">Sunday</span>
                    <span className="font-bold text-red-600">Closed</span>
                  </div>
                </div>
                <div className="mt-6 bg-gb-blue-50 rounded-xl p-4">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-gray-900 inline-flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                      </svg>
                      International Clients:
                    </span> We serve US clients across all time zones. Calls can be scheduled outside regular hours via email.
                  </p>
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className="bg-gradient-to-br from-gb-orange-500 to-gb-orange-600 rounded-3xl p-8 text-white shadow-xl">
                <div className="flex items-start gap-4">
                  <svg className="w-12 h-12 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Quick Response Guaranteed</h3>
                    <p className="text-orange-100 leading-relaxed">
                      Expect a detailed, personalized response within 24 hours from our technical team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Why Contact Us */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              What Happens Next?
            </h2>
            <p className="text-xl text-gray-600">
              Here's our simple, transparent process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gb-blue-400 to-gb-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg">
                01
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">We Review Your Request</h3>
              <p className="text-gray-600 leading-relaxed">
                Our team carefully reviews every inquiry to understand your specific requirements and technical challenges.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gb-orange-400 to-gb-orange-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg">
                02
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Consultation Call</h3>
              <p className="text-gray-600 leading-relaxed">
                We schedule a 30-minute consultation to discuss your project scope, timeline, and budget requirements.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg">
                03
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Detailed Proposal</h3>
              <p className="text-gray-600 leading-relaxed">
                You receive a clear proposal with scope, timeline, pricing, and expected outcomes. No surprises.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-gb-blue-600 hover:text-gb-blue-700 font-semibold text-lg"
            >
              <span>Learn more about our team and process</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
