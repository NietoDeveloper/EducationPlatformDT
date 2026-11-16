import { create } from 'zustand';
import { isValidGrade } from '@edu-dt/content';

export interface DemoStudent {
  id: string;
  name: string;
