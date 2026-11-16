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
    title: 'Las notas llegan',
    highlight: 'al instante.',
    lead:
      'Una sola plataforma para que colegios, universidades y cursos libres operen y den seguimiento a sus estudiantes. Simple de usar, rápida en el celular y confiable con los datos de las familias.',
    cta: 'Quiero ser colegio piloto',
  principles: [
    { title: 'Simple', text: 'Pocos clics. Lo que necesitas está a la vista.' },
    { title: 'Rápida', text: 'Fluida en el celular y conexiones modestas, también en zonas rurales.' },
    { title: 'Confiable', text: 'Los datos de los estudiantes se tratan con respeto y cuidado.' },
  ],
  steps: [
    {
      title: 'La institución seistra',
      text: 'Configura grados, grupos, asignaturas y periodos, y carga a sus estudiantes desde una hoja de cálculo.',
    },
    {
      title: 'Los profesores cargan las notas',
      text: 'Una planilla pensada para trabajar rápido, desde su propio perfil.',
    },
    {
      title: 'Estudiantes y acudientes las ven al instante',
      text: 'Sin recargar la página y desde cualquier dispositivo.',
    },
    {
      title: 'La institución mantiene el control',
      text: 'Cierra periodos, genera boletines en PDF y consulta reportes.',
    },
  ],
  roles: [
    { id: 'rector', icon: '🏛️', title: 'Rectores y coordinadores', text: 'Avance de notas y asistencia, cierre de periodos y boletines.' },
    { id: 'teacher', icon: '👩‍🏫', title: 'Profesores', text: 'Notas, asistencia, materiales y anuncios en un solo lugar.' },
    { id: 'student', icon: '🎒', title: 'Estudiantes', text: 'Notas, horario y materiales en el celular.' },
    { id: 'guardian', icon: '👨‍👩‍👧', title: 'Acudientes', text: 'Seguimiento del proceso académico de sus hijos.' },
    { id: 'person', icon: '🌐', title: 'Personas con cursos', text: 'Ofrecen sus cursos y llevan el seguimiento de sus estudiantes.' },
  ],
  modules: [
    { icon: '🎓', title: 'Seguimiento académico', text: 'Notas, asistencia y boletines en PDF.', phase: 'v1' },
    { icon: '⚡', title: 'Notas en vivo', text: 'El estudiante y el acudiente ven la nota apenas el profesor la guarda.', phase: 'v1' },
    { icon: '📥', title: 'Importación desde hojas de cálculo', text: 'Cargar a toda una institución sin digitar uno por uno.', phase: 'v1' },
    { icon: '📚', title: 'Aula', text: 'Clases presenciales o virtuales, horarios, materiales y tareas.', phase: 'next' },
    { icon: '💬', title: 'Comunicación', text: 'Anuncios y mensajería entre profesores y acudientes.', phase: 'next' },
    { icon: '💳', title: 'Pagos', text: 'Suscripción de la institución y, más adelante, matrículas y pensiones.', phase: 'next' },
    { icon: '🤖', title: 'Apoyo inteligente', text: 'Alertas tempranas para acompañar a quien lo necesita.', phase: 'next' },
    { icon: '🎓', title: 'Universidades', text: 'Semestres, créditos e inscripción de materias.', phase: 'later' },
    { icon: '🌐', title: 'Cursos libres', text: 'Catálogo, matrícula directa y certificados.', phase: 'later' },
  ],
  planNotice:
    'Valores indicativos en pesos colombianos (COP), a validar con los colegios piloto. Los precios definitivos se publican en softwaredt.com.',
  plans: [
    {
      id: 'pilot',
      name: 'Piloto',
      audience: 'Primeros 2–3 colegios',
      price: 'Prueba de 30–60 días',
      note: 'Importación desde hoja de cálculo incluida.',
    },
    {
      id: 'small',
      name: 'Colegio pequeño',
      audience: 'Hasta 300 estudiantes',
      price: '≈ $2.500–4.000 / estudiante / año',
      note: 'Más una tarifa única de configuración inicial.',
      highlight: true,
    },
    {
      id: 'medium',
      name: 'Colegio mediano',
      audience: '300 a 1.000 estudiantes',
      price: '≈ $2.000–3.200 / estudiante / año',
      note: 'Más una tarifa única de configuración inicial.',
    },
    {
      id: 'large',
      name: 'Grande o multisede',
      audience: 'Más de 1.000 estudiantes',
      price: 'Cotización',
      note: 'Con descuento por volumen.',
    },
  ],
  tech: [
    { title: 'Interfaz', items: ['React + TypeScript', 'Next.js', 'Tailwind CSS', 'Zustand'] },
    { title: 'Servicios', items: ['Node.js + TypeScript', 'MongoDB', 'PostgreSQL', 'Wompi (pagos)'] },
    { title: 'Cálculo', items: ['C++', 'Python', 'Generación de PDF', 'Analítica'] },
    { title: 'Nube y entrega', items: ['AWS', 'Docker', 'CI/CD', 'Vercel'] },
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
