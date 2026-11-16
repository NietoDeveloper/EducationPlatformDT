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
