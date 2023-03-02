import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { apiPaths } from "../../constants/apiPaths/apiPaths";
import routerPaths from "../../routers/routerPaths";
import { showFeedbackActionCreator } from "../../store/actions/uiActions/uiActionCreators";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../store/actions/userActions/userActionCreators";
import { UiContext } from "../../store/contexts/UiContext/UiContext";
import { UserContext } from "../../store/contexts/userContext/userContext";
import { UserCredentials } from "../../types";
import { UseUserStructure } from "../types";

const useUser = (): UseUserStructure => {
  const navigate = useNavigate();
  const { dispatch: uiDispatch } = useContext(UiContext);
  const { dispatch } = useContext(UserContext);

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

      dispatch(loginUserActionCreator());
      navigate("/apps");
    } catch {
      const errorMessage = "Error on login, try again later";
      uiDispatch(showFeedbackActionCreator(errorMessage));
    }
  };

  const logoutUser = () => {
    dispatch(logoutUserActionCreator());
    navigate(routerPaths.login);
  };

  return { getLoginCookie, logoutUser };
};

export default useUser;
