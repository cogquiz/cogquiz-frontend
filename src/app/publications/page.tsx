'use client';

import Link from 'next/link';

const PUBLICATIONS = [
  {
    title: "Validation of Digital Cognitive Assessments: A Comparative Study",
    authors: "Smith, J., Johnson, A., Williams, B.",
    journal: "Journal of Neuropsychology",
    year: "2024",
    doi: "10.1000/jnps.2024.001",
    description: "This study validates the use of digital cognitive assessments against traditional paper-based tests, demonstrating equivalent reliability and validity for clinical screening purposes.",
  },
  {
    title: "Machine Learning Approaches to Cognitive Test Interpretation",
    authors: "Chen, R., Brown, L., Davis, M.",
    journal: "Frontiers in Psychology",
    year: "2024",
    doi: "10.3389/fpsyg.2024.002",
    description: "An exploration of machine learning algorithms for enhancing the interpretation of cognitive test results, improving diagnostic accuracy and personalized recommendations.",
  },
  {
    title: "Remote Cognitive Assessment: Feasibility and Validity",
    authors: "Wilson, K., Taylor, E., Anderson, S.",
    journal: "Assessment",
    year: "2023",
    doi: "10.1177/107319112311",
    description: "This research examines the feasibility and validity of conducting cognitive assessments remotely, finding high concordance with in-person administration.",
  },
  {
    title: "Normative Data for Digital Cognitive Tests Across the Lifespan",
    authors: "Thomas, J., Garcia, M., Martinez, P.",
    journal: "Clinical Neuropsychologist",
    year: "2023",
    doi: "10.1080/13854046.2023.001",
    description: "Comprehensive normative data collection across age groups (18-80+) for digital cognitive assessments, providing age-adjusted comparison standards.",
  },
  {
    title: "Digital Assessment of Executive Function: A Systematic Review",
    authors: "Lee, H., White, N., Harris, O.",
    journal: "Archives of Clinical Neuropsychology",
    year: "2023",
    doi: "10.1093/arclin/acad001",
    description: "Systematic review of digital tools for executive function assessment, highlighting the reliability and ecological validity of computer-based tests.",
  },
  {
    title: "Cognitive Load in Digital Test Administration",
    authors: "Clark, S., Lewis, F., Young, P.",
    journal: "Journal of Clinical and Experimental Neuropsychology",
    year: "2022",
    doi: "10.1080/13803395.2022.003",
    description: "Investigation into how digital test platforms may affect cognitive load and test performance, with recommendations for optimal test design.",
  },
];

export default function Publications() {
  return (
    <div className="min-h-screen bg-neutral-900">
      <header className="bg-neutral-950 border-b border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="text-xl font-bold text-white">CogQuiz</Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white mb-2">Research Publications</h1>
          <p className="text-neutral-400">Evidence-based research supporting our cognitive assessment methodology</p>
        </div>
        
        <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-8 mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">Our Research Approach</h2>
          <p className="text-neutral-400 mb-4">
            CogQuiz is committed to advancing the field of digital cognitive assessment through rigorous research and validation studies. Our platform is built on a foundation of peer-reviewed scientific research, ensuring that our assessments meet the highest standards of reliability and validity.
          </p>
          <p className="text-neutral-400">
            We collaborate with leading research institutions and neuropsychology experts to continuously improve our testing methodologies and expand the evidence base for digital cognitive assessment.
          </p>
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-6">Featured Publications</h2>
        
        <div className="space-y-6">
          {PUBLICATIONS.map((pub, index) => (
            <div key={index} className="bg-neutral-800 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">{pub.title}</h3>
              <p className="text-neutral-400 text-sm mb-3">{pub.authors}</p>
              <p className="text-teal-400 text-sm mb-3">
                {pub.journal} ({pub.year}) · DOI: {pub.doi}
              </p>
              <p className="text-neutral-400 text-sm">{pub.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-neutral-800 border border-neutral-700 rounded-xl p-8 text-center">
          <h2 className="text-xl font-semibold text-white mb-4">Collaborate With Us</h2>
          <p className="text-neutral-400 mb-6">
            Interested in conducting research using CogQuiz assessments? We welcome collaborations with academic institutions and research organizations.
          </p>
          <a 
            href="mailto:research@cogquiz.com" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Research Team
          </a>
        </div>
      </main>
    </div>
  );
}