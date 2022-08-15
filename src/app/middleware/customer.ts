import { RequestHandler } from 'express';
import schema from '../schema/customer';

const objectIsEmpty = (object: any) => (
  Object.entries(object).every(([, value]) => value === undefined)
);

const validateLogin: RequestHandler = async (req, res, next) => {
  const { username, password } = req.body;

  const user = await schema.login.validateAsync({ username, password });
  res.locals.user = user;

  return next();
};

const validateFilter: RequestHandler = async (req, res, next) => {
  const { id, username } = req.body;
  if (objectIsEmpty({ id, username })) return next();
  
  const filter = await schema.filter.validateAsync({ id, username });
  res.locals.filter = filter;

  return next();
};

const validateCreate: RequestHandler = async (req, res, next) => {
  const { username, password } = req.body;

  const user = await schema.create.validateAsync({ username, password });
  res.locals.user = user;

  return next();
};

export default {
  validateLogin,
  validateFilter,
  validateCreate,
};