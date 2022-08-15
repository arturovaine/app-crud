import Joi from 'joi';

const login = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const filter = Joi.object({
  id: Joi.number().min(1),
  username: Joi.string(),
});

const create = Joi.object({
  username: Joi.string().min(6).required(),
  password: Joi.string().min(6).required(),
});

export default {
  login,
  filter,
  create,
};
