import type { GradeBand } from './types';

/** Typical Colombian scale: 1.0–5.0 with four performance bands. Used by the on-page demo. */
export const DEMO_SCALE = { min: 1, max: 5, passing: 3 } as const;

export const DEMO_BANDS: readonly GradeBand[] = [
  { name: 'Bajo', from: 1 },
  { name: 'Básico', from: 3 },
  { name: 'Alto', from: 4 },
  { name: 'Superior', from: 4.6 },
];

export function isValidGrade(value: number): boolean {
  return Number.isFinite(value) && value >= DEMO_SCALE.min && value <= DEMO_SCALE.max;
}

export function bandFor(value: number): GradeBand['name'] {
  let chosen: GradeBand['name'] = DEMO_BANDS[0]!.name;
  for (const b of DEMO_BANDS) if (value >= b.from) chosen = b.name;
  return chosen;
}

/** Weighted average; weights are normalised so they do not need to add up to 100. */
export function weightedAverage(rows: ReadonlyArray<{ value: number; weight: number }>): number {
  const totalWeight = rows.reduce((s, r) => s + r.weight, 0);
  if (rows.length === 0 || totalWeight <= 0) return 0;
  const sum = rows.reduce((s, r) => s + r.value * r.weight, 0);
  return Math.round((sum / totalWeight) * 100) / 100;
}
