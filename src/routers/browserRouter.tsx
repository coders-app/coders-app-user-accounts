import { createBrowserRouter } from "react-router-dom";
import getRoutes from "./getRoutes";

const router = getRoutes();

const browserRouter = createBrowserRouter(router);

export default browserRouter;
