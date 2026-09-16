export interface TestimonialImage {
  id: string;
  url: string;
  title: string;
  subtitle?: string;
  category?: 'hipertrofia' | 'emagrecimento' | 'definicao' | 'postura';
}

export interface DifferentialItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface AuthorityProof {
  id: string;
  title: string;
  description: string;
  badge: string;
}
