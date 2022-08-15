import { App } from './index';
import appRouter from './router';
import 'dotenv/config';

// const PORT = process.env.PORT || 3001;

const app = new App(appRouter);
app.start();
