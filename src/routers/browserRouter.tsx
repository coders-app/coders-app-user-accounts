import { createBrowserRouter } from "react-router-dom";
import getRoutes from "./getRoutes";

const routes = getRoutes();

const browserRouter = createBrowserRouter(routes);

export default browserRouter;
