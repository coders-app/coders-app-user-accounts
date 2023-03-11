export const partialApiPaths = {
  users: {
    base: "/users",
    login: "/login",
    logout: "/logout",
    verifyToken: "/verify-token",
  },
};

export const apiPaths = {
  root: process.env.REACT_APP_API_URL,
  users: {
    login: `${partialApiPaths.users.base}${partialApiPaths.users.login}`,
    logout: `${partialApiPaths.users.base}${partialApiPaths.users.logout}`,
    verify: `${partialApiPaths.users.base}${partialApiPaths.users.verifyToken}`,
  },
};
