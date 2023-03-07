export const partialApiPaths = {
  users: {
    base: "/users",
    login: "/login",
    verifyToken: "/verify-token",
  },
};

export const apiPaths = {
  root: process.env.REACT_APP_API_URL,
  users: {
    login: `${partialApiPaths.users.base}${partialApiPaths.users.login}`,
    verify: `${partialApiPaths.users.base}${partialApiPaths.users.verifyToken}`,
  },
};
