export const partialApiPaths = {
  users: {
    base: "/users",
    login: "/login",
  },
};

export const apiPaths = {
  root: process.env.REACT_APP_API_URL,
  users: {
    login: `${partialApiPaths.users.base}${partialApiPaths.users.login}`,
  },
};
