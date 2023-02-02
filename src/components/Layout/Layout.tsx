import { RouterProvider } from "react-router-dom";
import LayoutStyled from "./LayoutStyled";
import browserRouter from "../../routers/browserRouter";

const Layout = (): JSX.Element => {
  return (
    <LayoutStyled>
      <RouterProvider router={browserRouter} />
    </LayoutStyled>
  );
};

export default Layout;
