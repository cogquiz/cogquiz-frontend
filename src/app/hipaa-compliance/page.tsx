'use client';

import Link from 'next/link';

export default function HipaaCompliance() {
  return (
    <div className="min-h-screen bg-neutral-900">
      <header className="bg-neutral-950 border-b border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="text-xl font-bold text-white">CogQuiz</Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-white text-center mb-8">HIPAA Compliance</h1>
        
        <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-8">
          <p className="text-neutral-300 mb-6">
            At CogQuiz, we take the security and privacy of your health information seriously. We are committed to maintaining compliance with the Health Insurance Portability and Accountability Act (HIPAA).
          </p>
          
          <h2 className="text-xl font-semibold text-teal-400 mb-3 mt-6">Our HIPAA Commitment</h2>
          <p className="text-neutral-400 mb-4">
            We have implemented comprehensive policies, procedures, and technical safeguards to ensure the protection of Protected Health Information (PHI).
          </p>
          
          <h2 className="text-xl font-semibold text-teal-400 mb-3 mt-6">Technical Safeguards</h2>
          <ul className="text-neutral-400 list-disc list-inside mb-4 space-y-1">
            <li>Encryption of data in transit and at rest</li>
            <li>Secure authentication and access controls</li>
            <li>Audit logging and monitoring</li>
            <li>Regular security assessments and penetration testing</li>
            <li>Secure data backup and disaster recovery</li>
          </ul>
          
          <h2 className="text-xl font-semibold text-teal-400 mb-3 mt-6">Administrative Safeguards</h2>
          <ul className="text-neutral-400 list-disc list-inside mb-4 space-y-1">
            <li>Designated HIPAA Privacy Officer</li>
            <li>Employee training on HIPAA requirements</li>
            <li>Written policies and procedures</li>
            <li>Risk assessment and management</li>
            <li>Business Associate Agreements (BAA)</li>
          </ul>
          
          <h2 className="text-xl font-semibold text-teal-400 mb-3 mt-6">Physical Safeguards</h2>
          <p className="text-neutral-400 mb-4">
            Our infrastructure is hosted in secure, SOC 2 compliant data centers with restricted access controls and 24/7 monitoring.
          </p>
          
          <h2 className="text-xl font-semibold text-teal-400 mb-3 mt-6">Your Rights Under HIPAA</h2>
          <p className="text-neutral-400 mb-2">Under HIPAA, you have the right to:</p>
          <ul className="text-neutral-400 list-disc list-inside mb-4 space-y-1">
            <li>Access your health information</li>
            <li>Request corrections to your health information</li>
            <li>Request accounting of disclosures</li>
            <li>Request restrictions on certain uses</li>
            <li>File a complaint if you believe your privacy rights have been violated</li>
          </ul>
          
          <h2 className="text-xl font-semibold text-teal-400 mb-3 mt-6">Reporting Security Incidents</h2>
          <p className="text-neutral-400 mb-4">
            In the event of a security incident involving your PHI, we will notify you in accordance with HIPAA requirements.
          </p>
          
          <h2 className="text-xl font-semibold text-teal-400 mb-3 mt-6">Contact Us</h2>
          <p className="text-neutral-400 mb-4">
            For questions about our HIPAA compliance or to report a security concern, please contact us at <a href="mailto:support@cogquiz.com" className="text-blue-400 hover:underline">support@cogquiz.com</a>.
          </p>
        </div>
      </main>
    </div>
  );
}