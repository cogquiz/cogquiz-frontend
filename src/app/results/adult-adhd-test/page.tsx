'use client';

import BetterHelpBanner from '@/components/BetterHelpBanner';
import Link from 'next/link';

export default function AdultADHDTestResult() {
  return (
    <div className="min-h-screen bg-neutral-900">
      <header className="bg-neutral-950 border-b border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-white">CogQuiz</Link>
          <Link href="/tests/adult-adhd-test" className="text-blue-400 hover:text-blue-300 text-sm">
            ← Retake Test
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-8">
          <h1 className="text-2xl font-bold text-white mb-6">Adult ADHD Assessment Results</h1>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-neutral-700">
                  <th className="px-4 py-3 text-neutral-300 font-semibold">Category</th>
                  <th className="px-4 py-3 text-neutral-300 font-semibold">Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-700">
                <tr>
                  <td className="px-4 py-3 text-neutral-400">Inattention Symptoms</td>
                  <td className="px-4 py-3 text-white">--</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-neutral-400">Hyperactivity Symptoms</td>
                  <td className="px-4 py-3 text-white">--</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-neutral-400">Impulsivity Symptoms</td>
                  <td className="px-4 py-3 text-white">--</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-neutral-400">Total ADHD Score</td>
                  <td className="px-4 py-3 text-white">--</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 p-4 bg-neutral-700/50 rounded-lg">
            <p className="text-neutral-300 text-sm">
              This screening tool evaluates ADHD symptoms in adults. Results are for informational purposes only and should not be used for self-diagnosis. Please consult a healthcare professional for proper evaluation.
            </p>
          </div>
        </div>
        
        <div className="mt-6 flex gap-4">
          <button 
            onClick={() => window.print()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Print Results
          </button>
          <Link 
            href="/available-tests"
            className="px-4 py-2 bg-neutral-700 text-white rounded-lg hover:bg-neutral-600 transition-colors"
          >
            View Other Tests
          </Link>
        </div>
      </main>
      
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <BetterHelpBanner testName="Adult ADHD" score={50} />
      </div>
    </div>
  );
}