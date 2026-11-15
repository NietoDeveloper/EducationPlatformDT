import request from 'supertest';
import { describe, expect, it } from 'vitest';
import { content } from '@edu-dt/content';
import { createApp } from '../src/app';

const app = createApp();

describe('showcase API', () => {
  it('GET /api/health', async () => {
    const res = await request(app).get('/api/health');
    expect(res.sta
    expect(res.body.stat