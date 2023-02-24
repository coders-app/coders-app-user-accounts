import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { apiPaths } from "../../constants/apiPaths/apiPaths";
import { showErrorActionCreator } from "../../store/actions/uiActions/uiActionsCreators";
import { UiContext } from "../../store/contexts/UiContext/UiContext";
import { UserCredentials } from "../../types";
import { UseUserStructure } from "../types";

const useUser = (): UseUserStructure => {
  const navigate = useNavigate();
  const { dispatch } = useContext(UiContext);

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
      dispatch(showErrorActionCreator("Error on login, try again later"));
    }
  };

  return { getLoginCookie };
};

export default useUser;
