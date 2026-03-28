'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Careers() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert('Thank you! We will keep your CV on file for future opportunities.');
      setEmail('');
      setName('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-neutral-900">
      <header className="bg-neutral-950 border-b border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="text-xl font-bold text-white">CogQuiz</Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-white text-center mb-8">Careers</h1>
        
        <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-8 mb-8">
          <p className="text-neutral-300 text-center mb-6">
            We appreciate your interest in joining the CogQuiz team!
          </p>
          
          <h2 className="text-2xl font-semibold text-teal-400 mb-4 text-center">
            We're Not Currently Hiring
          </h2>
          
          <p className="text-neutral-400 mb-6 text-center">
            At this time, we don't have any open positions. However, we're always interested in 
            connecting with talented individuals who share our passion for cognitive assessment 
            and mental health technology.
          </p>
          
          <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-white mb-2">
              Interested in Future Opportunities?
            </h3>
            <p className="text-neutral-400 mb-4 text-sm">
              If you'd like to be considered for future positions, please submit your CV/Resume below. 
              We'll keep it on file and reach out when a suitable opportunity arises.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-neutral-300 text-sm mb-1">Your Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-neutral-800 border border-neutral-600 rounded-lg px-4 py-2 text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-neutral-300 text-sm mb-1">Your Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-neutral-800 border border-neutral-600 rounded-lg px-4 py-2 text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-neutral-600 disabled:text-neutral-400 transition-colors"
              >
                {isSubmitting ? 'Submitting...' : 'Submit CV for Future Consideration'}
              </button>
            </form>
          </div>
          
          <h2 className="text-xl font-semibold text-white mb-4">Why CogQuiz?</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4">
              <h3 className="text-lg font-medium text-teal-400 mb-1">Mission-Driven Work</h3>
              <p className="text-neutral-400 text-sm">
                Join a team dedicated to improving access to cognitive healthcare through technology.
              </p>
            </div>
            <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4">
              <h3 className="text-lg font-medium text-teal-400 mb-1">Collaborative Culture</h3>
              <p className="text-neutral-400 text-sm">
                Work alongside experts in neuropsychology, software engineering, and clinical research.
              </p>
            </div>
            <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4">
              <h3 className="text-lg font-medium text-teal-400 mb-1">Innovation</h3>
              <p className="text-neutral-400 text-sm">
                Be part of developing cutting-edge cognitive assessment tools used by healthcare professionals.
              </p>
            </div>
            <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4">
              <h3 className="text-lg font-medium text-teal-400 mb-1">Remote-First</h3>
              <p className="text-neutral-400 text-sm">
                Enjoy flexibility with our remote-first work environment.
              </p>
            </div>
          </div>
          
          <p className="text-neutral-500 mt-8 text-center text-sm">
            © {new Date().getFullYear()} CogQuiz. All rights reserved.
          </p>
        </div>
      </main>
    </div>
  );
}