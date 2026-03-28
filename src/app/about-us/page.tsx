'use client';

import Link from 'next/link';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-neutral-900">
      <header className="bg-neutral-950 border-b border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="text-xl font-bold text-white">CogQuiz</Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">About CogQuiz</h1>
          <p className="text-xl text-teal-400">Advancing Cognitive Assessment Through Technology</p>
        </div>
        
        {/* Team Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white text-center mb-6">Our Team</h2>
          <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-4 mb-4 text-center">
            <div className="bg-neutral-700 rounded-lg h-64 mb-4 flex items-center justify-center">
              <span className="text-neutral-400">Team Image</span>
            </div>
            <p className="text-neutral-500 text-sm">
              Our interdisciplinary team of neuropsychologists, researchers, and technologists
            </p>
          </div>
        </div>
        
        {/* Research & Publications */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-teal-400 mb-3">Research & Evidence-Based</h3>
            <p className="text-neutral-300 mb-2">
              CogQuiz is grounded in decades of neuropsychological research. Our assessment 
              tools are developed based on published academic research and validated 
              cognitive testing methodologies.
            </p>
            <p className="text-neutral-300 mb-2">
              We collaborate with leading research institutions to ensure our tests 
              measure what they intend to measure - providing clinicians with reliable 
              data for their evaluations.
            </p>
            <p className="text-neutral-300">
              Our platform incorporates norms from peer-reviewed studies, ensuring 
              accurate comparisons against healthy populations across different 
              age groups.
            </p>
          </div>
          
          <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-teal-400 mb-3">Accuracy & Precision</h3>
            <p className="text-neutral-300 mb-2">
              We prioritize accuracy in every aspect of our cognitive assessments. 
              Our algorithms are designed to minimize false positives and provide 
              consistent, reliable results.
            </p>
            <p className="text-neutral-300 mb-2">
              Each test undergoes rigorous validation to ensure it meets 
              clinical standards for sensitivity and specificity.
            </p>
            <p className="text-neutral-300 mb-2"><strong>Key Principles:</strong></p>
            <ul className="text-neutral-300 list-disc list-inside space-y-1">
              <li>Standardized administration protocols</li>
              <li>Age-adjusted normative data</li>
              <li>Validated scoring algorithms</li>
              <li>Continuous quality improvement</li>
              <li>HIPAA-compliant data handling</li>
            </ul>
          </div>
        </div>
        
        {/* Mission Section */}
        <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6 text-center mb-12">
          <h3 className="text-xl font-semibold text-white mb-3">Our Mission</h3>
          <p className="text-neutral-300 max-w-2xl mx-auto">
            To provide healthcare professionals with accurate, efficient, and accessible 
            cognitive assessment tools. We believe that everyone should have access to 
            quality neuropsychological evaluation, and we're using technology to make 
            that a reality.
          </p>
        </div>
        
        {/* Contact CTA */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-white mb-3">Questions?</h3>
          <p className="text-neutral-500 mb-4">Contact our team to learn more about our assessments</p>
          <Link 
            href="/available-tests"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View Our Tests
          </Link>
        </div>
      </main>
    </div>
  );
}