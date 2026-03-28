'use client';

import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-neutral-900">
      <header className="bg-neutral-950 border-b border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="text-xl font-bold text-white">CogQuiz</Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-white text-center mb-8">Privacy Policy</h1>
        
        <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-8">
          <p className="text-neutral-400 mb-6">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          
          <h2 className="text-xl font-semibold text-teal-400 mb-3 mt-6">1. Introduction</h2>
          <p className="text-neutral-400 mb-4">
            CogQuiz ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our cognitive assessment platform.
          </p>
          
          <h2 className="text-xl font-semibold text-teal-400 mb-3 mt-6">2. Information We Collect</h2>
          <p className="text-neutral-400 mb-2">We collect information that you provide directly to us, including:</p>
          <ul className="text-neutral-400 list-disc list-inside mb-4 space-y-1">
            <li>Personal identification information (name, email, date of birth)</li>
            <li>Demographic information</li>
            <li>Cognitive assessment responses and results</li>
            <li>Usage data and analytics</li>
          </ul>
          
          <h2 className="text-xl font-semibold text-teal-400 mb-3 mt-6">3. How We Use Your Information</h2>
          <p className="text-neutral-400 mb-2">We use the information we collect to:</p>
          <ul className="text-neutral-400 list-disc list-inside mb-4 space-y-1">
            <li>Provide and maintain our cognitive assessment services</li>
            <li>Generate personalized cognitive assessment reports</li>
            <li>Improve and develop new features</li>
            <li>Comply with legal obligations</li>
          </ul>
          
          <h2 className="text-xl font-semibold text-teal-400 mb-3 mt-6">4. Data Protection</h2>
          <p className="text-neutral-400 mb-4">
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. Our platform is HIPAA-compliant and we follow industry-standard security practices.
          </p>
          
          <h2 className="text-xl font-semibold text-teal-400 mb-3 mt-6">5. Your Rights</h2>
          <p className="text-neutral-400 mb-2">You have the right to:</p>
          <ul className="text-neutral-400 list-disc list-inside mb-4 space-y-1">
            <li>Access your personal data</li>
            <li>Request correction of your personal data</li>
            <li>Request deletion of your personal data</li>
            <li>Object to processing of your personal data</li>
            <li>Request restriction of processing your personal data</li>
            <li>Request transfer of your personal data</li>
          </ul>
          
          <h2 className="text-xl font-semibold text-teal-400 mb-3 mt-6">6. Data Retention</h2>
          <p className="text-neutral-400 mb-4">
            We will retain your personal data only for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
          </p>
          
          <h2 className="text-xl font-semibold text-teal-400 mb-3 mt-6">7. Data Deletion</h2>
          <p className="text-neutral-400 mb-4">
            <strong>You may request deletion of your data at any time.</strong> To request deletion of your personal data, please contact us at <a href="mailto:support@cogquiz.com" className="text-blue-400 hover:underline">support@cogquiz.com</a>. We will respond to your request within 30 days.
          </p>
          
          <h2 className="text-xl font-semibold text-teal-400 mb-3 mt-6">8. Third-Party Services</h2>
          <p className="text-neutral-400 mb-4">
            We may share your information with third-party service providers who assist us in operating our platform. These parties are obligated to maintain the confidentiality of your information.
          </p>
          
          <h2 className="text-xl font-semibold text-teal-400 mb-3 mt-6">9. Children's Privacy</h2>
          <p className="text-neutral-400 mb-4">
            Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
          </p>
          
          <h2 className="text-xl font-semibold text-teal-400 mb-3 mt-6">10. Changes to This Policy</h2>
          <p className="text-neutral-400 mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
          
          <h2 className="text-xl font-semibold text-teal-400 mb-3 mt-6">11. Contact Us</h2>
          <p className="text-neutral-400 mb-6">
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@cogquiz.com" className="text-blue-400 hover:underline">support@cogquiz.com</a>.
          </p>
          
          <p className="text-neutral-500 mt-8 text-center text-sm">
            © {new Date().getFullYear()} CogQuiz. All rights reserved.
          </p>
        </div>
      </main>
    </div>
  );
}