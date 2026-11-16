import type { StatusItem } from '@edu-dt/content';
import LiveDemo from './components/LiveDemo';
import Section from './components/Section';
import { useContent } from './useContent';

const STATUS_LABEL: Record<StatusItem['status'], { text: string; cls: string }> = {
  available: { text: 'Disponible', cls: 'border-ok/40 text-ok' },
  'in-progress': { text: 'En construcción', cls: 'border-gold/40 text-gold' },
  roadmap: { text: 'Hoja de ruta', cls: 'border-zinc-600 text-zinc-400' },
  target: { text: 'Objetivo', cls: 'border-sky-400/40 text-sky-300' },
};

const PHASE_LABEL = { v1: 'Versión 1', next: 'Después', later: 'Más adelante' } as const;

export default function App() {
  const { content: c, source } = useContent
  return (Name="hover:text-gold">Demo</a>
            <a href="#planes" className="hover:text-gold">Planes</a>
            <a href="#estado" clas

      <Section id="demo" title="Pruébalo tú mismo" sub="Guarda una nota como profesor y mira cómo la ven el estudiante y el acudiente.">
        <LiveDemo />
      </Section>
-9 flex-none place-items-center rounded-full bg-gold font-extrabold text-black">{i + 1}</span>
              <div>
            </li>2 lg:grid-cols-3">
          {c.roles.map((r) => (
s