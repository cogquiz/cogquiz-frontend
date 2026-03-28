'use client';

import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-neutral-900">
      <header className="bg-neutral-950 border-b border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="text-xl font-bold text-white">CogQuiz</Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-white text-center mb-8">Terms of Service</h1>
        
        <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-8">
          <p className="text-neutral-400 mb-6">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          
          <h2 className="text-xl font-semibold text-teal-400 mb-3 mt-6">1. Acceptance of Terms</h2>
          <p className="text-neutral-400 mb-4">
            By accessing and using CogQuiz, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
          
          <h2 className="text-xl font-semibold text-teal-400 mb-3 mt-6">2. Use License</h2>
          <p className="text-neutral-400 mb-4">
            CogQuiz grants you a limited, non-exclusive, non-transferable license to use our cognitive assessment platform for personal and clinical use only.
          </p>
          
          <h2 className="text-xl font-semibold text-teal-400 mb-3 mt-6">3. Disclaimer</h2>
          <p className="text-neutral-400 mb-4">
            The cognitive assessments provided by CogQuiz are for informational and screening purposes only. They are not intended to diagnose, treat, or prevent any disease or condition. Always consult with a qualified healthcare professional for clinical decisions.
          </p>
          
          <h2 className="text-xl font-semibold text-teal-400 mb-3 mt-6">4. Limitation of Liability</h2>
          <p className="text-neutral-400 mb-4">
            CogQuiz shall not be liable for any damages arising out of or in connection with the use of our platform or assessments.
          </p>
          
          <h2 className="text-xl font-semibold text-teal-400 mb-3 mt-6">5. Privacy</h2>
          <p className="text-neutral-400 mb-4">
            Your use of CogQuiz is also governed by our Privacy Policy. Please review our Privacy Policy to understand how we collect, use, and protect your information.
          </p>
          
          <h2 className="text-xl font-semibold text-teal-400 mb-3 mt-6">6. Contact Us</h2>
          <p className="text-neutral-400 mb-6">
            If you have any questions about these Terms of Service, please contact us at <a href="mailto:support@cogquiz.com" className="text-blue-400 hover:underline">support@cogquiz.com</a>.
          </p>
          
          <p className="text-neutral-500 mt-8 text-center text-sm">
            © {new Date().getFullYear()} CogQuiz. All rights reserved.
          </p>
        </div>
      </main>
    </div>
  );
}