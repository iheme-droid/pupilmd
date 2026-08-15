export interface Step {
  type: string;
  content?: string;
  url?: string;
  title?: string;
  alt?: string;
  medicalConcept?: string;
  realLifeReality?: string;
  id?: string | number;
  
  // Fixes the nested deep-dive error: Allows a Step to contain child steps/blocks
  blocks?: Step[]; 
  steps?: Step[];
  [key: string]: any; 
}

export interface Section {
  id: number | string;
  title: string;
  isDeepDive?: boolean;
  pacerType?: string;
  icon?: string;
  steps?: Step[];
  blocks?: Step[];
  
  // Fixes the section-level quiz error: Supports both string arrays and object arrays
  questions?: any[]; 
  [key: string]: any; 
}

export interface TeachingReceipt {
  mastered: string[];
  [key: string]: any;
}

export interface Chapter {
  chapterTitle?: string;
  title?: string;
  moduleSlug?: string;
  slug?: string;
  sections?: Section[];
  teachingReceipt?: TeachingReceipt;
  selfCheckQuestions?: string[];
  
  // Fixes the root-level quiz error: Supports both string arrays and object arrays
  questions?: any[]; 
  courseTitle?: string;
  initialStars?: number;
  dailyRewardActive?: boolean;
  [key: string]: any; 
}