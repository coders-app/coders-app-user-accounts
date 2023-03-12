import { useEffect } from "react";
import useUser from "../../hooks/useUser/useUser";
import Layout from "../Layout/Layout";

const App = () => {
  const { verifyUser } = useUser();

  useEffect(() => {
    verifyUser();
  }, [verifyUser]);

  return <Layout />;
};

export default App;
