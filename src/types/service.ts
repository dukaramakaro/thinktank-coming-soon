export interface CaseStudy {
  problem: string;
  solution: string;
  result: string;
  metric: string;
  metricLabel: string;
}

export interface PainPoint {
  title: string;
  description: string;
  icon: string;
}

export interface ServicePageData {
  slug: string;
  title: string;
  heroStatement: string;
  heroSubtext: string;
  painPoints: PainPoint[];
  solutionTitle: string;
  solutionDescription: string;
  solutionFeatures: string[];
  caseStudies: CaseStudy[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
}
