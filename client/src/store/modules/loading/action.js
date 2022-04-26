import { FINISH_LOADING, START_LOADING } from '../actionTypes';

export function startLoading() {
  return {
    type: START_LOADING,
  };
}

export function finishLoading() {
  return {
    type: FINISH_LOADING,
  };
}
