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
  hero: {
    title: 'Las notas lle
      price: 'Prueba de 30–60 días',
      note: 'Importación desde hoja de cálculo incluida.',
    },
    {
      id: 'small', 'CI/CD', 'Vercel'] },
  ],
  peers: [
    { name: 'Q10', kind: 'Gestión académica con aula virtual' },
    { name: 'Phidias', kind: 'Gestión escolar y boletines digitales' },
    { name: 'MasterAcademic', kind: 'Gestión académica configurable' },
    { name: 'SEDUCA', kind: 'Suite de gestión escolar' },
    { name: 'Moodle · Canvas · Google Classroom', kind: 'Aulas virtuales (LMS)' },
  ],
  status: [
    { item: 'Notas en vivo para estudiantes y acudientes', status: 'in-progress', note: 'Versión 1 en construcción.' },
    { item: 'Importación desde hoja de cálculo', status: 'in-progress', note: 'Versión 1 en construcción.' },
    { item: 'Boletines en PDF por periodo', status: 'in-progress', note: 'Versión 1 en construcción.' },
    { item: 'Pagos de la suscripción de la institución', status: 'in-progress', note: 'Versión 1 en construcción.' },
    { item: 'Tareas, materiales y mensajería', status: 'roadmap', note: 'Después de la versión 1.' },
    { item: 'Matrículas y pensiones', status: 'roadmap', note: 'Después de la versión 1.' },
    { item: 'Universidades y cursos libres', status: 'roadmap', note: 'Etapas posteriores.' },
    { item: 'Funcionamiento sin conexión y app móvil', status: 'roadmap', note: 'Etapa posterior.' },
    { item: 'Precios indicados', status: 'target', note: 'Se validan con los colegios piloto antes de fijarse.' },
    { item: 'Comparación con otras plataformas', status: 'target', note: 'Sin tabla de precios de terceros hasta verificarlos en su fuente.' },
  ],
  roadmap: [
    { phase: '0', title: 'Descubrimiento', text: 'Conversar con 3–5 colegios y conseguir 2–3 pilotos.' },
    { phase: '1', title: 'Colegios', text: 'Notas en vivo, importación, boletines y suscripción.' },
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
