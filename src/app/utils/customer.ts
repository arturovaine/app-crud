import 'dotenv/config';
import * as bcrypt from 'bcryptjs';

const encryptPassword = (password: string) => {
  const { PASSWORD_SALT } = process.env;
  return bcrypt.hashSync(password, PASSWORD_SALT);
};

export {
  encryptPassword,
};