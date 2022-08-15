import { Router } from 'express';

import bannerController from '../controller/banner';
// import bannerMiddleware from '../middleware/banner';
// import authMiddleware from '../middleware/auth';

const bannerRouter = Router();
  
bannerRouter.route('/banner')
  .get(
    // customerMiddleware.validateFilter,
    // authMiddleware.validateToken,
    bannerController.findAll,
  )
  .post(
    // customerMiddleware.validateCreate,
    bannerController.create,
  );

bannerRouter.route('/banner/:id')
  .get(
  // customerMiddleware.validateFilter,
  // authMiddleware.validateToken,
  bannerController.findById,
  )
  .put(
    // customerMiddleware.validateCreate,
    bannerController.updateById,
  )
  .delete(
    // customerMiddleware.validateCreate,
    bannerController.deleteById,
  );

export default bannerRouter;
