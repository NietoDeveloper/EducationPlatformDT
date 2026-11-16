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
  error: string | null;
/** Local simulation only
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
      grades: { ...s.gr