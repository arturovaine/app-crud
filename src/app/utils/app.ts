const checkEnvironment = () => {
  const REQUIRED_VARIABLES = [
    'JWT_SECRET',
    'PASSWORD_SALT',
  ];

  REQUIRED_VARIABLES.forEach((value) => {
    if (!process.env[value]) {
      throw Error(`${value} must be defined in "/.env"`);
    }
  });
};

export {
  checkEnvironment,
};