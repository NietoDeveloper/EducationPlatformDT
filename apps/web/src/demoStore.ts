import { create } from 'zustand';
import { isValidGrade } from '@edu-dt/content';

export interface DemoStudent {
  id: string;
  name: string;
}

export const DEMO_STUDENTS: readonly DemoStudent[] = [
  { id: 's1', name: 'Ana Pérez' },
  { id: 's2', name: 'Luis Gómez' },
  { id: 's3', name: 'Camila Rojas' },
];

export interface DemoEvent {
  id: number;
  studentId: string;
  value: number;
  at: string;
}

interface DemoState {
  grades: Record<string, number | undefined>;
  lastChanged: { studentId: string; n: number } | null;
  log: DemoEvent[];
  error: string | null;
  save: (studentId: string, raw: string) => boolean;
  reset: () => void;
}

let counter = 0;

/** Local simulation only: no server, no real data. It illustrates the live-grade idea. */
export const useDemo = create<DemoState>((set) => ({
  grades: {},
  lastChanged: null,
  log: [],
  error: null,
  save: (studentId, raw) => {
    const value = Number(raw.replace(',', '.'));
    if (raw.trim() === '' || !isValidGrade(value)) {
      set({ error: 'Escribe una nota entre 1,0 y 5,0.' });
      return false;
    }
    const rounded = Math.round(value * 10) / 10;
    counter += 1;
    const event: DemoEvent = {
      id: counter,
      studentId,
      value: rounded,
      at: new Date().toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
    };
    set((s) => ({
      grades: { ...s.grades, [studentId]: rounded },
      lastChanged: { studentId, n: counter },
      log: [event, ...s.log].slice(0, 5),
      error: null,
    }));
    return true;
  },
  reset: () => set({ grades: {}, lastChanged: null, log: [], error: null }),
}));
