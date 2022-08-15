import { Router } from 'express';

import customerController from '../controller/customer';
// import customerMiddleware from '../middleware/customer';
// import authMiddleware from '../middleware/auth';

const customerRouter = Router();

customerRouter.route('/customer')
  .get(
    // customerMiddleware.validateFilter,
    // authMiddleware.validateToken,
    customerController.findAll,
  )
  .post(
    // customerMiddleware.validateCreate,
    customerController.create,
  );

customerRouter.route('/customer/:id')
  .get(
  // customerMiddleware.validateFilter,
  // authMiddleware.validateToken,
  customerController.findById,
  )
  .put(
    // customerMiddleware.validateCreate,
    customerController.updateById,
  )
  .delete(
    // customerMiddleware.validateCreate,
    customerController.deleteById,
  );

export default customerRouter;
