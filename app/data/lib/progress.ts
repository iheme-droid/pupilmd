export function getModuleProgress(moduleSlug: string) {
  if (typeof window === 'undefined') return { completed: 0, total: 11, percentage: 0 };
  
  const progressKey = `pupilmd_progress_${moduleSlug}`;
  const savedProgress = localStorage.getItem(progressKey);
  
  if (!savedProgress) {
    return { completed: 0, total: 11, percentage: 0 };
  }
  
  const progress = JSON.parse(savedProgress);
  const completed = progress.currentSection || 0;
  const total = 11;
  const percentage = Math.round((completed / total) * 100);
  
  return { completed, total, percentage };
}