import { createApp } from './app';

const port = Number(process.env.PORT ?? 4200);
const app = createApp(process.env.WEB_ORIGIN);

const server = app.listen(port, () => {
  console.log(`Education DT showcase API → http://localhost:${port}/api/health`);
});

function shutdown() {
  server.close(() => process.exit(0));
}
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
