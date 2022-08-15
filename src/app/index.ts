import 'dotenv/config';
import express, { Router } from 'express';
import cors from 'cors';
import appRouter from './router';
// import { checkEnvironment } from './utils/app';
// import swaggerUi from 'swagger-ui-express';
// import swaggerTS from 'swagger-ts';
// import swaggerConfig from '../docs/swagger.config';

export class App {
  public router: Router;
  public app = express();
  public swaggerDoc: any;

  constructor(router: Router) {
    this.router = router;
    this.setup();
  }

  private setup() {
    this.app.use(cors()); // front
    this.app.use(express.json());
    this.app.use(this.router);
  }

  public start() {
    // checkEnvironment();

    const APP_PORT = process.env.APP_PORT || 3001;
    this.app.listen(
      APP_PORT,
      () => console.log(`API is running at the port: ${APP_PORT}`),
    );
  }
}

const app = new App(appRouter);
export default app;
app.start();
