import { ACTIONS_TYPES } from "./../actions/index";
import { AnyAction } from "redux";

export interface iState {
  app: {
    inProgress: boolean;
    error: string;
  };
  user: {
    name: string;
    isLogged: boolean;
  };
}

const initialState: iState = {
  app: {
    inProgress: false,
    error: ""
  },
  user: {
    name: "",
    isLogged: false
  }
};

export const rootReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ACTIONS_TYPES.LOGIN:
      return Object.assign({}, state, {
        app: {
          inProgress: true
        }
      } as iState);
    case ACTIONS_TYPES.LOGIN_OK:
      return Object.assign({}, state, {
        app: {
          inProgress: false
        },
        user: {
          name: action.payload,
          isLogged: true
        }
      } as iState);
    case ACTIONS_TYPES.LOGIN_FAIL:
      return Object.assign({}, state, {
        app: {
          inProgress: false,
          error: action.payload
        },
        user: {
          name: "",
          isLogged: false
        }
      } as iState);
    default:
      return state;
  }
};
