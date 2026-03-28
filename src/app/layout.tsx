import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'CogQuiz - Evidence-Based Cognitive Assessments',
    template: '%s | CogQuiz',
  },
  description: 'Professional cognitive assessments for clinical practice. Evidence-based tests for evaluating attention, memory, executive function, and more.',
  keywords: [
    'cognitive assessment',
    'neuropsychological testing',
    'cognitive tests',
    'attention tests',
    'memory assessment',
    'executive function',
  ],
  authors: [{ name: 'CogQuiz' }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_API_URL || 'https://cogquiz.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'CogQuiz',
    title: 'CogQuiz - Evidence-Based Cognitive Assessments',
    description: 'Professional cognitive assessments for clinical practice.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 antialiased">
        {children}
      </body>
    </html>
  );
}
