import axios from "axios";
import { useCallback, useContext } from "react";
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

  const verifyUser = useCallback(async () => {
    try {
      await axios.get(`${apiPaths.root}${apiPaths.users.verify}`, {
        validateStatus(status) {
          return status === 200;
        },
      });

      dispatch(loginUserActionCreator());
    } catch {
      dispatch(logoutUserActionCreator());
      navigate(routerPaths.login);
    }
  }, [dispatch, navigate]);

  const logoutUser = () => {
    dispatch(logoutUserActionCreator());
    navigate(routerPaths.login);
  };

  return { getLoginCookie, verifyUser, logoutUser };
};

export default useUser;
