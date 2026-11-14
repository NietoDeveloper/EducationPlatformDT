import { describe, expect, it } from 'vitest';
import { bandFor, content, isValidGrade, weightedAverage } from './index';

describe('grades helpers', () => {
  it('maps values to Colombian performance bands', () => {
    expect(bandFor(2.9)).toBe('Bajo');
    expect(bandFor(3)).toBe('Básico');
    expect(bandFor(4)).toBe('Alto');
    expect(bandFor(4.6)).toBe('Superior');
    expect(bandFor(5)).toBe('Superior');
  });

  it('validates the 1.0–5.0 scale', () => {
    expect(isValidGrade(1)).toBe(true);
    expect(isValidGrade(5)).toBe(true);
    expect(isValidGrade(0.9)).toBe(false);
    expect(isValidGrade(5.1)).toBe(false);
    expect(isValidGrade(Number.NaN)).toBe(false);
  });

  it('normalises weights', () => {
    expect(weightedAverage([{ value: 4.5, weight: 40 }, { value: 3.8, weight: 60 }])).toBe(4.08);
    expect(weightedAverage([{ value: 5, weight: 1 }, { value: 3, weight: 1 }])).toBe(4);
    expect(weightedAverage([])).toBe(0);
  });
});

describe('site content', () => {
  it('has the sections the site renders', () => {
    expect(content.steps).toHaveLength(4);
    expect(content.plans.length).toBeGreaterThan(0);
    expect(content.faq.length).toBeGreaterThan(0);
  });

  it('has exactly one highlighted plan', () => {
    expect(content.plans.filter((p) => p.highlight)).toHaveLength(1);
  });

  it('never claims a target as available', () => {
    for (const s of content.status) expect(['available', 'in-progress', 'roadmap', 'target']).toContain(s.status);
  });
});
