'use client';

import Link from 'next/link';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center">
      <main className="max-w-md mx-auto px-4 text-center">
        <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-12">
          <div className="flex justify-center mb-6">
            <div className="bg-teal-500/20 rounded-full p-4">
              <svg className="w-16 h-16 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-white mb-4">Thank You!</h1>
          <p className="text-neutral-400 mb-8">
            Your purchase has been successfully completed.
          </p>
          
          <Link 
            href="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}