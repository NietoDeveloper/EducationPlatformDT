import cors from 'cors';
import express from 'express';
import { content } from '@edu-dt/content';

export function createApp(webOrigin?: string) {
  const app = express();
  app.disable('x-powered-by');
  app.use(
    cors({
      origin: webOrigin ? [webOrigin] : true,
      methods: ['GET'],
    }),
  );

  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', service: 'education-dt-showcase-api', version: content.version });
  });

  app.get('/api/content', (_req, res) => {
    res.set('Cache-Control', 'public, max-age=300');
    res.json(content);
  });

  app.get('/api/plans', (_req, res) => {
    res.json({ asOf: content.asOf, notice: content.planNotice, plans: content.plans });
  });

  app.use('/api', (_req, res) => {
    res.status(404).json({ error: { code: 'NOT_FOUND', message: 'Ruta no encontrada' } });
  });

  return app;
}
