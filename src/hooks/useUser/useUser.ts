import axios from "axios";
import { useCallback, useContext } from "react";
import { useNavigate } from "react-router";
import { apiPaths } from "../../constants/apiPaths/apiPaths";
import routerPaths from "../../routers/routerPaths";
import { showFeedbackActionCreator } from "../../store/actions/uiActions/uiActionCreators";
import {
  loadUserDataActionCreator,
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../store/actions/userActions/userActionCreators";
import { UiContext } from "../../store/contexts/UiContext/UiContext";
import { UserContext } from "../../store/contexts/userContext/userContext";
import { UserCredentials } from "../../types";
import { UseUserStructure, VerifyUserResponse } from "./types";

const useUser = (): UseUserStructure => {
  const navigate = useNavigate();
  const { dispatch: uiDispatch } = useContext(UiContext);
  const { dispatch } = useContext(UserContext);

  const getLoginCookie = async (userCredentialsData: UserCredentials) => {
    try {
      await axios.post(
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

  const verifyUser = useCallback(async () => {
    try {
      const userData = await axios.get<VerifyUserResponse>(
        `${apiPaths.root}${apiPaths.users.verify}`
      );

      dispatch(loadUserDataActionCreator(userData.data.userPayload));
    } catch {
      dispatch(logoutUserActionCreator());
      navigate(routerPaths.login);
    }
  }, [dispatch, navigate]);

  const getLogout = async () => {
    try {
      await axios.post(
        `${apiPaths.root}${apiPaths.users.logout}`,
        {},
        {
          withCredentials: true,
          validateStatus(status) {
            return status === 204;
          },
        }
      );

      dispatch(logoutUserActionCreator());
      navigate(routerPaths.login);
    } catch {
      const errorMessage = "Error on logout, try again later";

      uiDispatch(showFeedbackActionCreator(errorMessage));
    }
  };

  return { getLoginCookie, verifyUser, getLogout };
};

export default useUser;
