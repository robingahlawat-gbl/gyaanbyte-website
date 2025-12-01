import SEO from '../components/SEO';

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Terms of Service"
        description="Terms of Service for GyaanByte Labs. Read our terms and conditions for using our website and services."
        canonical="/terms"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gb-blue-600 to-gb-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Terms of Service</h1>
          <p className="text-xl text-blue-100">Last updated: January 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-none">

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms of Service ("Terms") constitute a legally binding agreement between you and GyaanByte Labs Pvt Ltd ("Company," "we," "us," or "our") concerning your access to and use of the <a href="https://www.gyaanbytelabs.com" className="text-gb-blue-600 hover:underline">www.gyaanbytelabs.com</a> website and our services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using our website and services, you agree to be bound by these Terms. If you disagree with any part of these Terms, you should not access our website or use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Services Description</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              GyaanByte Labs provides financial data engineering services, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>QuickBooks and Sage Intacct data migration services</li>
              <li>Custom financial dashboard development</li>
              <li>System integration and API development</li>
              <li>Financial data consulting services</li>
              <li>Training and academy programs</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Specific services, deliverables, timelines, and pricing are detailed in individual Service Agreements or Statements of Work (SOW).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              When using our website and services, you agree to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>Use our services only for lawful purposes</li>
              <li>Not attempt to gain unauthorized access to our systems</li>
              <li>Not transmit any viruses, malware, or harmful code</li>
              <li>Respect intellectual property rights</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Intellectual Property Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Unless otherwise indicated, the website and all content, features, and functionality (including but not limited to text, graphics, logos, images, software, and code) are owned by GyaanByte Labs and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any of our content without our prior written permission.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Service Agreements and Payment Terms</h2>

            <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">5.1 Engagement Process</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              All professional services are provided pursuant to a written Service Agreement or Statement of Work that specifies the scope, deliverables, timeline, and fees.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">5.2 Payment Terms</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Payment terms are specified in individual Service Agreements</li>
              <li>Invoices are typically due within 15-30 days of issuance</li>
              <li>Late payments may incur interest charges as specified in the Service Agreement</li>
              <li>We reserve the right to suspend services for non-payment</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">5.3 Refund Policy</h3>
            <p className="text-gray-700 leading-relaxed">
              Refund policies are project-specific and detailed in the Service Agreement. Generally, deposits and advance payments are non-refundable except as expressly stated in the Service Agreement.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Confidentiality</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Both parties agree to maintain the confidentiality of any proprietary or confidential information disclosed during the course of our engagement. This includes:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Financial data and business information</li>
              <li>Technical specifications and methodologies</li>
              <li>Customer lists and business strategies</li>
              <li>Any information marked as confidential</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Confidential information shall not be disclosed to third parties without prior written consent, except as required by law.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Data Security and Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement industry-standard security measures to protect client data. However, you acknowledge that no method of electronic transmission or storage is 100% secure.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our data handling practices are detailed in our <a href="/privacy" className="text-gb-blue-600 hover:underline">Privacy Policy</a>. By using our services, you agree to our Privacy Policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Warranties and Disclaimers</h2>

            <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">8.1 Service Warranty</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We warrant that services will be performed in a professional and workmanlike manner in accordance with industry standards. Specific warranties are detailed in individual Service Agreements.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">8.2 Disclaimer</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              EXCEPT AS EXPRESSLY PROVIDED IN A SERVICE AGREEMENT, OUR SERVICES AND WEBSITE ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL GYAANBYTE LABS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our total liability for any claim arising out of or relating to these Terms or our services shall not exceed the amount paid by you to us for services in the six (6) months preceding the claim.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">10. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify, defend, and hold harmless GyaanByte Labs, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with your access to or use of our services, or your violation of these Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">11. Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to terminate or suspend your access to our website and services immediately, without prior notice or liability, for any reason, including without limitation if you breach these Terms.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Termination of service engagements is governed by the terms specified in individual Service Agreements.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">12. Dispute Resolution</h2>

            <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">12.1 Governing Law</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">12.2 Jurisdiction</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Any disputes arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the courts in Rohtak, Haryana, India.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">12.3 Arbitration</h3>
            <p className="text-gray-700 leading-relaxed">
              For service-related disputes, parties may agree to binding arbitration as an alternative to litigation, as specified in individual Service Agreements.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">13. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on this page and updating the "Last updated" date. Your continued use of our services after such modifications constitutes your acceptance of the updated Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">14. Severability</h2>
            <p className="text-gray-700 leading-relaxed">
              If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">15. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <p className="text-gray-900 font-semibold mb-2">GyaanByte Labs Pvt Ltd</p>
              <p className="text-gray-700">Email: <a href="mailto:info@gyaanbytelabs.com" className="text-gb-blue-600 hover:underline">info@gyaanbytelabs.com</a></p>
<<<<<<< HEAD
              <p className="text-gray-700">Phone: <a href="tel:+918950709015" className="text-gb-blue-600 hover:underline">+91 8950 709 015</a></p>
=======
              <p className="text-gray-700">Phone: <a href="tel:+918684861010" className="text-gb-blue-600 hover:underline">+91 8950 709 015</a></p>
>>>>>>> f8f4c69 (Initial commit)
              <p className="text-gray-700">Address: 1st Floor, Raj Singh Complex, Near Sheela Bypass Flyover, Rohtak 124001, Haryana, India</p>
              <p className="text-gray-700 mt-2">Company Registration: Startup India Certificate DIPP228466</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Terms;
