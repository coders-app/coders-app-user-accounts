import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { UiContext } from "../../contexts/UiContext/UiContext";
import { UserCredentials } from "../../models/User";
import { apiPaths } from "../apiPaths";

const useUser = () => {
  const navigate = useNavigate();
  const { showError } = useContext(UiContext);

  const getLoginCookie = async (userCredentialsData: UserCredentials) => {
    try {
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
    } catch {
      showError("Error on login, try again later");
    }
  };

  return { getCookie: getLoginCookie };
};

export default useUser;
