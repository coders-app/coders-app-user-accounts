import { rest } from "msw";
import { apiPaths } from "../constants/apiPaths/apiPaths";
import { userMock } from "./userMocks";

export const handlers = [
  rest.post(
    `${apiPaths.root}${apiPaths.users.login}`,
    async (req, res, ctx) => {
      return res(ctx.status(200));
    }
  ),
  rest.get(
    `${apiPaths.root}${apiPaths.users.verify}`,
    async (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ userPayload: userMock }));
    }
  ),
  rest.post(
    `${apiPaths.root}${apiPaths.users.logout}`,
    async (req, res, ctx) => {
      return res(ctx.status(204));
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
  rest.get(
    `${apiPaths.root}${apiPaths.users.verify}`,
    async (req, res, ctx) => {
      return res(ctx.status(401));
    }
  ),
  rest.post(
    `${apiPaths.root}${apiPaths.users.logout}`,
    async (req, res, ctx) => {
      return res(ctx.status(500));
    }
  ),
];
