// Types for the portfolio application

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string;
  technologies: string[];
  features: ProjectFeature[];
  architecture: ArchitectureDiagram[];
  overview: string;
  problem: string;
  solution: string;
  challenges: string[];
  githubUrl?: string;
  liveUrl?: string;
  isFeatured?: boolean;
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ArchitectureDiagram {
  label: string;
  nodes: string[];
}

export interface SkillCategory {
  label: string;
  skills: string[];
}

export interface JourneyMilestone {
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
}
