import { memo } from 'react';
import { Link } from 'react-router-dom';
import { IndiaFlagIcon, GlobeIcon } from './Icons';

const Footer = memo(() => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Data Migration', path: '/services' },
    { name: 'Dashboard Development', path: '/services' },
    { name: 'System Integration', path: '/services' },
    { name: 'Consulting Services', path: '/services' }
  ];

  const company = [
    { name: 'About Us', path: '/about' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const academy = [
    { name: '8-Week Program', path: '/academy' },
    { name: 'Curriculum', path: '/academy#curriculum' },
    { name: 'Apply Now', path: '/contact' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img
              src="/logos/gyaanbyte-logo.svg"
              alt="GyaanByte Labs"
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Financial data engineering excellence. Bridging US standards with Indian talent.
            </p>

            {/* Government Badges */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-xs">
                <div className="w-6 h-6 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-400">Startup India Certified</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-6 h-6 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-400">Skill India Partner</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/gyaanbytelabs/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-gb-blue-600 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/divyanshu-jangra/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-gb-orange-600 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                title="Founder's LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="mailto:info@gyaanbytelabs.com"
                className="w-10 h-10 bg-white/10 hover:bg-purple-600 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 sm:mb-6 text-white">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-gb-blue-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gb-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 sm:mb-6 text-white">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-gb-orange-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gb-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-bold mt-6 sm:mt-8 mb-4 sm:mb-6 text-white">Academy</h3>
            <ul className="space-y-2 sm:space-y-3">
              {academy.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 sm:mb-6 text-white">Get In Touch</h3>
            <div className="space-y-3 sm:space-y-4">
              <a
<<<<<<< HEAD
                href="tel:+918950709015"
=======
                href="tel:+918684861010"
>>>>>>> f8f4c69 (Initial commit)
                className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gb-blue-600 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium">Call Us</div>
                  <div className="text-xs">+91 8950 709 015</div>
                </div>
              </a>

              <a
                href="mailto:info@gyaanbytelabs.com"
                className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium">Email Us</div>
                  <div className="text-xs">info@gyaanbytelabs.com</div>
                </div>
              </a>

              <div className="flex items-start gap-3 text-gray-400">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium mb-1">Office</div>
                  <div className="text-xs leading-relaxed">
                    Rohtak, Haryana, India<br />
                    <a
                      href="https://share.google/NAyDAZsXGkJE7Axo9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gb-blue-400 hover:text-gb-blue-300 inline-flex items-center gap-1 mt-1"
                    >
                      View on Maps
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="mt-6 sm:mt-8 inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-gb-blue-600 to-gb-blue-700 hover:from-gb-blue-700 hover:to-gb-blue-800 text-white rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Get Free Consultation</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
            {/* Copyright */}
            <div className="text-gray-500 text-sm">
              <p>&copy; {currentYear} GyaanByte Labs Pvt Ltd. All rights reserved.</p>
              <p className="text-xs mt-1">Startup India Certificate: DIPP228466</p>
            </div>

            {/* Legal Links */}
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-gray-500 hover:text-gray-300 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-gray-300 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Made with love */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-600 flex items-center justify-center gap-2">
              <span>Built with passion in Rohtak, India</span>
              <IndiaFlagIcon className="w-4 h-4 inline" />
              <span>|</span>
              <span>Serving clients globally</span>
              <GlobeIcon className="w-4 h-4 inline text-gray-500" />
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Accent Bar */}
      <div className="h-1 bg-gradient-to-r from-gb-blue-600 via-gb-orange-500 to-gb-blue-600"></div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
