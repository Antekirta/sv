import { sendLoggingRequest } from "./../../providers/auth";
import { Dispatch } from "redux";

export const ACTIONS_TYPES = {
  LOGIN: "LOGIN",
  LOGIN_OK: "LOGIN_OK",
  LOGIN_FAIL: "LOGIN_FAIL"
};

export const login = (userName: string, password: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: ACTIONS_TYPES.LOGIN,
      payload: {
        userName,
        password
      }
    });

    try {
      await sendLoggingRequest(userName, password);

      dispatch({
        type: ACTIONS_TYPES.LOGIN_OK,
        payload: userName
      });
    } catch (e) {
      dispatch({
        type: ACTIONS_TYPES.LOGIN_FAIL,
        payload: e
      });
    }
  };
};
