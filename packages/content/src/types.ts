export interface Step {
  title: string;
  text: string;
}

export interface Role {
  id: 'rector' | 'teacher' | 'student' | 'guardian' | 'person';
  icon: string;
  title: string;
  text: string;
}

export interface Module {
  icon: string;
  title: string;
  text: string;
  phase: 'v1' | 'next' | 'later';
}

export interface Plan {
  id: string;
  name: string;
  audience: string;
  price: string;
  note: string;
  highlight?: boolean;
}

export interface StatusItem {
  item: string;
  status: 'available' | 'in-progress' | 'roadmap' | 'target';
  note: string;
}

export interface RoadmapPhase {
  phase: string;
  title: string;
  text: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface TechGroup {
  title: string;
  items: string[];
}

export interface Peer {
  name: string;
  kind: string;
}

export interface GradeBand {
  name: 'Bajo' | 'Básico' | 'Alto' | 'Superior';
  from: number;
}

export interface SiteContent {
  version: string;
  asOf: string;
  brand: { name: string; tagline: string; owner: string; site: string };
  hero: { title: string; highlight: string; lead: string; cta: string };
  steps: Step[];
  roles: Role[];
  modules: Module[];
  plans: Plan[];
  planNotice: string;
  tech: TechGroup[];
  peers: Peer[];
  status: StatusItem[];
  roadmap: RoadmapPhase[];
  faq: Faq[];
  principles: Step[];
}
