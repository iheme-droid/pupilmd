import { use } from 'react';
import ProgressBar from '@/app/components/ProgressBar';
import TeachingReceipt from '@/app/components/TeachingReceipt';

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ section?: string }>;
}

export default async function CrashChapter({ params, searchParams }: PageProps) {
  // Await BOTH for Next.js 15
  const { slug } = await params;
  const { section } = await searchParams;
  
  const currentSectionIndex = parseInt(section || '0');

  return (
    <main style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
      {/* Progress tracking for Neural Synch */}
      <ProgressBar currentSection={currentSectionIndex + 1} totalSections={10} />
      
      <div style={{ marginTop: '40px' }}>
        <h2 style={{ fontFamily: 'var(--font-sora)', fontWeight: 800 }}>
          {slug.toUpperCase()} : Section {currentSectionIndex + 1}
        </h2>
        {/* Your content rendering logic here */}
      </div>

      <TeachingReceipt 
        moduleSlug={slug}
        mastered={['Mechanism of Action', 'Clinical Presentation']}
        selfCheckQuestions={['How does this affect pH?']}
        checkedQuestions={[]}
        onQuestionToggle={() => {}}
      />
    </main>
  );
}