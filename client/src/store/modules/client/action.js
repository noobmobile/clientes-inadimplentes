import {
  CLIENT_CREATE_REQUEST,
  CLIENT_CREATE_SUCCESS,
  CLIENT_DELETE_REQUEST,
  CLIENT_DELETE_SUCCESS,
  CLIENT_ERROR,
  CLIENT_LIST_REQUEST,
  CLIENT_LIST_SUCCESS,
} from '../actionTypes';

export function clientListRequest(filters) {
  return {
    type: CLIENT_LIST_REQUEST,
    filters,
  };
}

export function clientListSuccess(data) {
  return {
    type: CLIENT_LIST_SUCCESS,
    data,
  };
}

export function clientDeleteRequest(clientId, filters) {
  return {
    type: CLIENT_DELETE_REQUEST,
    clientId,
    filters,
  };
}

export function clientDeleteSuccess(data) {
  return {
    type: CLIENT_DELETE_SUCCESS,
    data,
  };
}

export function clientCreateRequest(values, filters) {
  return {
    type: CLIENT_CREATE_REQUEST,
    values,
  };
}

export function clientCreateSuccess(data) {
  return {
    type: CLIENT_CREATE_SUCCESS,
    data,
  };
}

export function clientError(error) {
  return {
    type: CLIENT_ERROR,
    error,
  };
}
