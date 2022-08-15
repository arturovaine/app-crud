import { Router } from 'express';
import 'express-async-errors';

import customerRouter from './customer';
import bannerRouter from './banner';
import errorMiddleware from '../middleware/error';

const appRouter = Router();

appRouter.use(customerRouter);
appRouter.use(bannerRouter);
appRouter.use(errorMiddleware);

export default appRouter;
