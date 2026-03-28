'use client';

import Link from 'next/link';

const TESTS = [
  {
    slug: 'nback-test',
    name: 'N-Back Test',
    description: 'Evaluates working memory and attention through a continuous performance task where participants must indicate when the current stimulus matches the one from n items earlier.',
    category: 'Working Memory',
    duration: '15 min',
    image: '/images/nback.jpg',
  },
  {
    slug: 'stroop-effect',
    name: 'Stroop Effect Test',
    description: 'Measures response inhibition and cognitive control by asking participants to name the color of ink in which a color word is printed.',
    category: 'Cognitive Control',
    duration: '8 min',
    image: '/images/stroop.jpg',
  },
  {
    slug: 'trail-making-test',
    name: 'Trail Making Test',
    description: 'Assesses processing speed and visual scanning through two parts: connecting numbered circles (Part A) and alternating between numbers and letters (Part B).',
    category: 'Processing Speed',
    duration: '10 min',
    image: '/images/trails.jpg',
  },
  {
    slug: 'card-sort-test',
    name: 'Card Sort Test',
    description: 'Assesses executive function and cognitive flexibility by having participants sort cards according to different rules that change without warning.',
    category: 'Executive Function',
    duration: '12 min',
    image: '/images/cardsort.jpg',
  },
  {
    slug: 'syllogisms-test',
    name: 'Syllogisms Test',
    description: 'Assesses deductive reasoning through logical syllogisms. Participants evaluate whether conclusions follow logically from given premises.',
    category: 'Reasoning',
    duration: '10 min',
    image: '/images/syllogisms.jpg',
  },
  {
    slug: 'tower-of-hanoi',
    name: 'Tower of Hanoi',
    description: 'Classic puzzle for planning and problem-solving. Move disks between pegs following rules about moving only one disk at a time and not placing larger disks on smaller ones.',
    category: 'Problem Solving',
    duration: '15 min',
    image: '/images/hanoi.jpg',
  },
  {
    slug: 'tower-of-london-test',
    name: 'Tower of London',
    description: 'Evaluates planning ability and problem-solving. Participants must rearrange colored balls on pegs to match a target configuration in the minimum number of moves.',
    category: 'Planning',
    duration: '15 min',
    image: '/images/london.jpg',
  },
  {
    slug: 'adult-adhd-test',
    name: 'Adult ADHD Assessment',
    description: 'Comprehensive assessment for evaluating attention deficit hyperactivity disorder symptoms in adults.',
    category: 'Attention',
    duration: '20 min',
    image: '/images/adhd.jpg',
  },
  {
    slug: 'psychopathy-checklist',
    name: 'Psychopathy Checklist',
    description: 'Clinical assessment tool for evaluating psychopathic traits in individuals.',
    category: 'Personality',
    duration: '25 min',
    image: '/images/psychopathy.jpg',
  },
];

export default function AvailableTests() {
  return (
    <div className="min-h-screen bg-neutral-900">
      <header className="bg-neutral-950 border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link href="/" className="text-xl font-bold text-white">CogQuiz</Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white mb-2">Available Cognitive Assessments</h1>
          <p className="text-neutral-400">Professional, evidence-based cognitive tests for clinical and research use</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTS.map((test) => (
            <Link
              key={test.slug}
              href={`/tests/${test.slug}`}
              className="bg-neutral-800 border border-neutral-700 rounded-xl overflow-hidden hover:border-blue-500 transition-all group"
            >
              <div className="bg-neutral-700 h-40 flex items-center justify-center">
                <span className="text-neutral-500 text-sm">{test.name}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-teal-400 bg-teal-400/10 px-2 py-1 rounded-full">
                    {test.category}
                  </span>
                  <span className="text-xs text-neutral-500">{test.duration}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{test.name}</h3>
                <p className="text-neutral-400 text-sm mb-4 line-clamp-3">{test.description}</p>
                <div className="mt-auto text-blue-400 font-medium text-sm group-hover:text-blue-300">
                  Start Assessment →
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-16 bg-neutral-800 border border-neutral-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">About Our Assessments</h2>
          <p className="text-neutral-400 text-center max-w-2xl mx-auto mb-6">
            All CogQuiz assessments are developed based on established neuropsychological research and validated testing methodologies. Our tests provide norm-referenced scores that allow comparison against healthy populations across different age groups.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-lg font-semibold text-teal-400 mb-2">Evidence-Based</h3>
              <p className="text-neutral-500 text-sm">Developed from peer-reviewed research</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-teal-400 mb-2">HIPAA Compliant</h3>
              <p className="text-neutral-500 text-sm">Your data is protected and secure</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-teal-400 mb-2">Professionally Normed</h3>
              <p className="text-neutral-500 text-sm">Age-adjusted normative data</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}