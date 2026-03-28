'use client';

import Link from 'next/link';

const TESTS = [
  {
    slug: 'nback-test',
    name: 'N-Back Test',
    description: 'Evaluates working memory and attention',
    category: 'Working Memory',
    duration: '15 min',
  },
  {
    slug: 'stroop-effect',
    name: 'Stroop Effect Test',
    description: 'Measures response inhibition and cognitive control',
    category: 'Cognitive Control',
    duration: '8 min',
  },
  {
    slug: 'trail-making-test',
    name: 'Trail Making Test',
    description: 'Assesses processing speed and visual scanning',
    category: 'Processing Speed',
    duration: '10 min',
  },
  {
    slug: 'card-sort-test',
    name: 'Card Sort Test',
    description: 'Assesses executive function and cognitive flexibility',
    category: 'Executive Function',
    duration: '12 min',
  },
  {
    slug: 'syllogisms-test',
    name: 'Syllogisms Test',
    description: 'Assesses deductive reasoning',
    category: 'Reasoning',
    duration: '10 min',
  },
  {
    slug: 'tower-of-hanoi',
    name: 'Tower of Hanoi',
    description: 'Classic puzzle for planning and problem-solving',
    category: 'Problem Solving',
    duration: '15 min',
  },
  {
    slug: 'tower-of-london-test',
    name: 'Tower of London',
    description: 'Evaluates planning ability and problem-solving',
    category: 'Planning',
    duration: '15 min',
  },
];

const CATEGORIES = [
  { name: 'Working Memory', description: 'Tests that evaluate the ability to hold and manipulate information in mind.' },
  { name: 'Cognitive Control', description: 'Tests that measure response inhibition and cognitive flexibility.' },
  { name: 'Processing Speed', description: 'Tests that assess how quickly someone can process information.' },
  { name: 'Executive Function', description: 'Tests that evaluate high-level cognitive processes like planning and decision-making.' },
  { name: 'Reasoning', description: 'Tests that assess logical and deductive reasoning abilities.' },
  { name: 'Problem Solving', description: 'Tests that evaluate planning and problem-solving skills.' },
];

export default function TestCategory() {
  return (
    <div className="min-h-screen bg-neutral-900">
      <header className="bg-neutral-950 border-b border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="text-xl font-bold text-white">CogQuiz</Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white mb-2">Test Categories</h1>
          <p className="text-neutral-400">Browse our cognitive assessments by category</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {CATEGORIES.map((category) => (
            <Link
              key={category.name}
              href={`/available-tests?category=${encodeURIComponent(category.name)}`}
              className="bg-neutral-800 border border-neutral-700 rounded-xl p-6 hover:border-teal-500 transition-colors"
            >
              <h3 className="text-lg font-semibold text-white mb-2">{category.name}</h3>
              <p className="text-neutral-400 text-sm">{category.description}</p>
            </Link>
          ))}
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-6">All Available Tests</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTS.map((test) => (
              <Link
                key={test.slug}
                href={`/tests/${test.slug}`}
                className="bg-neutral-800 border border-neutral-700 rounded-xl p-6 hover:border-blue-500 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-teal-400 bg-teal-400/10 px-2 py-1 rounded-full">
                    {test.category}
                  </span>
                  <span className="text-xs text-neutral-500">{test.duration}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{test.name}</h3>
                <p className="text-neutral-400 text-sm">{test.description}</p>
                <div className="mt-4 text-blue-400 font-medium text-sm">
                  Start Test →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}