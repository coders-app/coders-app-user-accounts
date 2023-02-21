import axios from "axios";
import { useNavigate } from "react-router";
import { apiPaths } from "../../constants/apiPaths/apiPaths";
import { UserCredentials } from "../types";

const useUser = () => {
  const navigate = useNavigate();

  const getLoginCookie = async (userCredentialsData: UserCredentials) => {
    await axios.post<Record<string, string>>(
      `${apiPaths.root}${apiPaths.users.login}`,
      userCredentialsData,
      {
        withCredentials: true,
        validateStatus(status) {
          return status === 200;
        },
      }
    );

    navigate("/apps");
  };

  return { getLoginCookie };
};

export default useUser;
