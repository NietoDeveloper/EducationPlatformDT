import type { SiteContent } from './types';

export const content: SiteContent = {
  version: '1.0.0',
  asOf: '2026-11',
  brand: {
    name: 'Education DT',
    tagline: 'Simple. Rápida. Confiable.',
    owner: 'Software DT',
    site: 'https://www.softwaredt.com',
  },
  hero: {us: 'in-progress', note: 'Versión 1 en construcción.' },
    { item: 'Pagos de la suscripción de la institución', status: 'in-progress', note: 'Versión 1 en construcción.' },
    { item: 'Tareas, materiales y mensajería', statvivo, importación, boletines y suscripción.' },
    { phase: '2', title: 'Crecer en colegios', text: 'Tareas, mensajería, pensiones y apoyo inteligente.' },
    { phase: '3', title: 'Universidades', text: 'Semestres, créditos e inscripción de materias.' },
    { phase: '4', title: 'Cursos libres', text: 'Catálogo, matrícula directa y certificados.' },
  ],
  faq: [
    {
      q: '¿Esto es el producto?',
      a: 'No. Es una vitrina abierta que explica qué hace Education DT, para quién es y con qué se construye. El código del producto es privado.',
    },
    {
      q: '¿Funciona en zonas con internet inestable?',
      a: 'Es uno de los objetivos del diseño: interfaz ligera y consumo de datos reducido. Se valida con los colegios piloto.',
    },
    {
      q: '¿Qué pasa con los datos de menores de edad?',
      a: 'La protección de datos personales (Ley 1581 de 2012) es parte del diseño desde el primer día, y se hace revisión legal antes de recibir datos reales.',
    },
    {
      q: '¿Reemplaza la contabilidad del colegio?',
      a: 'No. Education DT se enfoca en lo académico y en los pagos de la plataforma. Si una institución necesita un ERP, Software DT ofrece módulos independientes.',
    },
    {
      q: '¿Cómo me vuelvo colegio piloto?',
      a: 'Escribe desde softwaredt.com. Buscamos 2–3 colegios para construir la primera versión junto a ellos.',
    },
  ],
};
