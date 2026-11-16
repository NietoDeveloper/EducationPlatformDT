import { createApp } from './app';

const port = Number(process.env.PORT ?? 4200);
const app = createApp(process.env.WEB_ORIGIN);
