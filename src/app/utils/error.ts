const Error = (status: number, message: string) => ({
  status,
  message,
  isExpected: true,
});

export const ERRORS = {
  CUSTOMER: {
    NOT_FOUND: Error(404, 'Customer not found'),
    ALREADY_TAKEN: Error(409, 'Customer e-mail already taken'),
  },
  BANNER: {
    NOT_FOUND: Error(404, 'Banner not found'),
    INCORRECT_DATES: Error(409, 'Incorrect dates'),
  },
  AUTH: {
    TOKEN_NOT_FOUND: Error(401, 'Token not found'),
    INVALID_TOKEN: Error(403, 'Invalid token'),
  },
};
