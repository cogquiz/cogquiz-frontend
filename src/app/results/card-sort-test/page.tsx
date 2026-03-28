'use client';

import BetterHelpBanner from '@/components/BetterHelpBanner';
import Link from 'next/link';

export default function CardSortTestResult() {
  return (
    <div className="min-h-screen bg-neutral-900">
      <header className="bg-neutral-950 border-b border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-white">CogQuiz</Link>
          <Link href="/tests/card-sort-test" className="text-blue-400 hover:text-blue-300 text-sm">
            ← Retake Test
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-8">
          <h1 className="text-2xl font-bold text-white mb-6">Card Sort Test Results</h1>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-neutral-700">
                  <th className="px-4 py-3 text-neutral-300 font-semibold">Metric</th>
                  <th className="px-4 py-3 text-neutral-300 font-semibold">Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-700">
                <tr>
                  <td className="px-4 py-3 text-neutral-400">Total Correct</td>
                  <td className="px-4 py-3 text-white">--</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-neutral-400">Total Errors</td>
                  <td className="px-4 py-3 text-white">--</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-neutral-400">Perseverative Errors</td>
                  <td className="px-4 py-3 text-white">--</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-neutral-400">Conceptual Level Responses</td>
                  <td className="px-4 py-3 text-white">--</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 p-4 bg-neutral-700/50 rounded-lg">
            <p className="text-neutral-300 text-sm">
              The Wisconsin Card Sorting Test assesses executive function, specifically cognitive flexibility, problem-solving, and the ability to adapt to changing rules.
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
        <BetterHelpBanner testName="Card Sort" />
      </div>
    </div>
  );
}