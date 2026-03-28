'use client';

import Link from 'next/link';

export default function BAA() {
  return (
    <div className="min-h-screen bg-neutral-900">
      <header className="bg-neutral-950 border-b border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="text-xl font-bold text-white">CogQuiz</Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-white text-center mb-8">Business Associate Agreement</h1>
        
        <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-8">
          <p className="text-neutral-300 mb-6">
            CogQuiz offers Business Associate Agreements (BAA) to healthcare providers, hospitals, and organizations requiring HIPAA-compliant cognitive assessment services.
          </p>
          
          <h2 className="text-xl font-semibold text-teal-400 mb-3 mt-6">What is a BAA?</h2>
          <p className="text-neutral-400 mb-4">
            A Business Associate Agreement is a contract required by HIPAA that establishes the permitted uses and disclosures of Protected Health Information (PHI) between a covered entity and a business associate.
          </p>
          
          <h2 className="text-xl font-semibold text-teal-400 mb-3 mt-6">Our BAA Commitment</h2>
          <p className="text-neutral-400 mb-2">When you sign a BAA with CogQuiz, we agree to:</p>
          <ul className="text-neutral-400 list-disc list-inside mb-4 space-y-1">
            <li>Protect PHI in accordance with HIPAA regulations</li>
            <li>Not disclose PHI without authorization</li>
            <li>Implement appropriate security safeguards</li>
            <li>Report any breaches or security incidents</li>
            <li>Ensure subcontractors comply with HIPAA</li>
            <li>Provide PHI access and amendments upon request</li>
            <li>Return or destroy PHI at the end of the agreement</li>
          </ul>
          
          <h2 className="text-xl font-semibold text-teal-400 mb-3 mt-6">Request a BAA</h2>
          <p className="text-neutral-400 mb-6">
            To request a Business Associate Agreement, please contact us at <a href="mailto:support@cogquiz.com" className="text-blue-400 hover:underline">support@cogquiz.com</a> with your organization details and we will provide you with our standard BAA for review and signature.
          </p>
          
          <p className="text-neutral-500 mt-8 text-center text-sm">
            © {new Date().getFullYear()} CogQuiz. All rights reserved.
          </p>
        </div>
      </main>
    </div>
  );
}