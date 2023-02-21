import { rest } from "msw";
import { apiPaths } from "../store/hooks/apiPaths";

export const handlers = [
  rest.post(
    `${apiPaths.root}${apiPaths.users.login}`,
    async (req, res, ctx) => {
      return res(ctx.status(200));
    }
  ),
];

export const errorHandlers = [
  rest.post(
    `${apiPaths.root}${apiPaths.users.login}`,
    async (req, res, ctx) => {
      return res(ctx.status(404));
    }
  ),
];
