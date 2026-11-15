import request from 'supertest';
import { describe, expect, it } from 'vitest';
import { content } from '@edu-dt/content';
import { createApp } from '../src/app';

const app = createApp();

describe('showcase API', () => {
  it('GET /api/health', async () => {
    const res = await request(app).get('/api/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
  });

  it('GET /api/content returns the shared content', async () => {
    const res = await request(app).get('/api/content');
    expect(res.status).toBe(200);
    expect(res.body.brand.name).toBe(content.brand.name);
    expect(res.body.plans).toHaveLength(content.plans.length);
  });

  it('GET /api/plans includes the notice', async () => {
    const res = await request(app).get('/api/plans');
    expect(res.body.notice).toMatch(/indicativos/);
