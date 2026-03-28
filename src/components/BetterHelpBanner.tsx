interface BetterHelpProps {
  testName: string;
  score?: number;
}

export default function BetterHelpBanner({ testName, score }: BetterHelpProps) {
  return (
    <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 text-white">
      <div className="flex items-start">
        <div className="bg-white/20 rounded-lg p-2 mr-4 flex-shrink-0">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-xl mb-2">
            {score && score < 70 ? 'Want to Improve Your Cognitive Health?' : 'Want Professional Support?'}
          </h3>
          <p className="text-blue-100 text-sm mb-4">
            {score && score < 70 
              ? `Your ${testName} score suggests room for improvement. Get professional support from licensed therapists.`
              : `Based on your ${testName} results, consider speaking with a mental health professional for additional support.`
            }
          </p>
          <a
            href="https://www.betterhelp.com/?utm_source=Web_Partner&utm_medium=cogquiz&utm_campaign=Result_Page"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full bg-white text-blue-700 py-3 rounded-xl font-semibold text-center hover:bg-gray-100 transition-colors"
          >
            Get Professional Help →
          </a>
          <p className="text-center text-blue-200 text-xs mt-3">
            Sponsored · Licensed therapists available 24/7
          </p>
        </div>
      </div>
    </div>
  );
}