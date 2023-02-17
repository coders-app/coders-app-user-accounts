import axios from "axios";
import { useNavigate } from "react-router";
import { UserCredentials } from "../../models/User";
import { apiPaths } from "../apiPaths";

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

  return { getCookie: getLoginCookie };
};

export default useUser;
