import { CLIENT_LIST_SUCCESS } from '../actionTypes';

const initialState = {
  list: {},
};
export function clientReducer(state = initialState, action) {
  switch (action.type) {
    case CLIENT_LIST_SUCCESS:
      return {
        ...state,
        list: action.data,
      };
    default: {
      return {
        ...state,
      };
    }
  }
}
