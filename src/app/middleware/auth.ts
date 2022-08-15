import { RequestHandler } from 'express';
import JWT, { JwtPayload } from 'jsonwebtoken';
import { ERRORS } from '../utils/error';

const generateToken: RequestHandler = async (req, res, next) => {
  const { JWT_SECRET = '' } = process.env;
  const { username, password } = req.body;
  console.log(username, password);
  
  const user = { username, password };

  const token = JWT.sign(user, JWT_SECRET, { algorithm: 'HS256', expiresIn: '1d' });
  res.locals.token = token;

  return next();
};

const validateToken: RequestHandler = async (req, res, next) => {
  const { JWT_SECRET = '' } = process.env;
  const { authorization: token } = req.headers;

  if (!token) throw ERRORS.AUTH.TOKEN_NOT_FOUND;

  try {
    const { iat, exp, ...user } = JWT.verify(token, JWT_SECRET) as JwtPayload;
    res.locals.user = user;

    return next();
  } catch(e) {
    return next(ERRORS.AUTH.INVALID_TOKEN);
  }
};

export default {
  generateToken,
  validateToken,
};