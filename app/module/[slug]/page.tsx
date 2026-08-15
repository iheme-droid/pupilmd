// Location: app/module/[slug]/page.tsx
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import ModuleTemplate from '@/app/components/ModuleTemplate';

// Dynamic runtime disk scanner (Zero compile-time dependencies)
const getModuleData = (slug: string) => {
  if (!slug) return null;

  // 1. Clean the incoming slug parameter
  const normalizedSlug = slug
    .toLowerCase()
    .replace(/[-_]?crash[-_]?chapter/g, '')
    .replace(/[^a-z0-9]/g, '') // Strips dashes/underscores for safe matching
    .trim();

  // 2. Scan every possible location your data files could be hiding
  const searchPaths = [
    path.join(process.cwd(), 'app', 'data'),
    path.join(process.cwd(), 'src', 'app', 'data'),
    path.join(process.cwd(), 'data'),
    path.join(process.cwd(), 'public', 'data'),
  ];

  let parsedData: any = null;

  for (const dirPath of searchPaths) {
    if (!fs.existsSync(dirPath)) continue;

    try {
      const directoryFiles = fs.readdirSync(dirPath);
      
      // 3. Match filenames seamlessly regardless of camelCase or hyphenation differences
      const targetMatch = directoryFiles.find(file => {
        if (!file.endsWith('.json')) return false;
        const cleanFileName = file.toLowerCase().replace('.json', '').replace(/[^a-z0-9]/g, '');
        return cleanFileName === normalizedSlug || cleanFileName.includes(normalizedSlug);
      });

      if (targetMatch) {
        const fullFilePath = path.join(dirPath, targetMatch);
        const fileContents = fs.readFileSync(fullFilePath, 'utf8');
        parsedData = JSON.parse(fileContents);
        break; 
      }
    } catch (error) {
      console.error(`[FileSystem Engine] Skipped scanning path: ${dirPath}`, error);
    }
  }

  if (!parsedData) return null;

  // 4. Extract content if nested inside a root object key inside the JSON
  if (parsedData && !parsedData.title && !parsedData.sections && !parsedData.chapters) {
    for (const dataKey of Object.keys(parsedData)) {
      const nestedPayload = parsedData[dataKey];
      if (
        nestedPayload && 
        typeof nestedPayload === 'object' && 
        (nestedPayload.title || nestedPayload.sections || nestedPayload.chapters)
      ) {
        return nestedPayload;
      }
    }
  }

  return parsedData;
};

export default async function DynamicModulePage({ params }: any) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  
  const moduleData = getModuleData(slug);

  // If the file cannot be found anywhere, render an elegant recovery screen with a working link
  if (!moduleData) {
    return (
      <div className="min-h-screen bg-[#0A0C10] text-gray-100 font-sans p-6 flex flex-col items-center justify-center">
        <div className="max-w-md w-full bg-[#12161A] border border-red-900/30 rounded-xl p-6 shadow-2xl text-center space-y-4">
          <div className="w-12 h-12 bg-red-950/50 text-red-400 rounded-full flex items-center justify-center mx-auto text-xl font-bold border border-red-900/40">
            !
          </div>
          <h1 className="text-xl font-bold text-red-400">Module Content Missing</h1>
          <p className="text-sm text-gray-400 leading-relaxed">
            The database scanner couldn't locate a JSON file matching the URL slug:{' '}
            <code className="bg-black/40 px-2 py-1 rounded text-yellow-400 font-mono text-xs border border-gray-800">{slug}</code>
          </p>
          <div className="pt-2">
            <Link 
              href="/library"
              className="inline-block w-full py-2.5 bg-gray-800 hover:bg-gray-700 text-gray-100 rounded-lg text-sm font-semibold transition-all border border-gray-700 shadow-md"
            >
              ← Return to Library
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <ModuleTemplate moduleData={moduleData} />;
}