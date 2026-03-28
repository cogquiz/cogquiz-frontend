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

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">CogQuiz</h1>
          <p className="text-gray-600 mt-1">Evidence-Based Cognitive Assessments</p>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Cognitive Testing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Evidence-based assessments for clinical practice. Evaluate attention, memory, executive function, and more.
          </p>
        </div>
      </section>

      {/* Tests Grid */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">Available Assessments</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTS.map((test) => (
            <Link
              key={test.slug}
              href={`/tests/${test.slug}`}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-primary-300 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
                  {test.category}
                </span>
                <span className="text-xs text-gray-500">{test.duration}</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{test.name}</h4>
              <p className="text-gray-600 text-sm">{test.description}</p>
              <div className="mt-4 text-primary-600 font-medium text-sm">
                Start Test →
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <p className="text-center text-gray-500 text-sm">
            © 2026 CogQuiz. For clinical and educational use only.
          </p>
        </div>
      </footer>
    </div>
  );
}
