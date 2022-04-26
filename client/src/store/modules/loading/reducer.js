import { FINISH_LOADING, START_LOADING } from '../actionTypes';

const initialState = {
  loading: false,
};

export function loadingReducer(state = initialState, action) {
  switch (action.type) {
    case START_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case FINISH_LOADING: {
      return {
        ...state,
        loading: false,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
