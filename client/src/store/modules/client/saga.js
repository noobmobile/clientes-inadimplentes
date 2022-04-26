import {
  CLIENT_CREATE_REQUEST,
  CLIENT_DELETE_REQUEST,
  CLIENT_LIST_REQUEST,
} from '../actionTypes';
import { call, put, all, takeLatest } from 'redux-saga/effects';
import {
  clientCreateSuccess,
  clientDeleteSuccess,
  clientError,
  clientListRequest,
  clientListSuccess,
} from './action';
import { startLoading, finishLoading } from '../loading/action';
import { ServiceClient } from '../../../services/serviceClient';

function* list({ filters }) {
  try {
    yield put(startLoading());

    //CHAMADA API
    const retorno = yield call(ServiceClient.list, filters);

    //CHAMADA SUCCESS
    yield put(clientListSuccess(retorno));

    yield put(finishLoading());
  } catch (e) {
    // ERROR
    yield put(clientError(e));
    yield put(finishLoading());
  }
}

function* remove({ clientId, filters }) {
  try {
    yield put(startLoading());

    //CHAMADA API
    const retorno = yield call(ServiceClient.remove, clientId);

    //CHAMADA SUCCESS
    yield put(clientDeleteSuccess(retorno));
    yield put(clientListRequest(filters));

    yield put(finishLoading());
  } catch (e) {
    // ERROR
    yield put(clientError(e));
    yield put(finishLoading());
  }
}

function* create({ values, filters }) {
  try {
    yield put(startLoading());
    console.log('b');

    //CHAMADA API
    const retorno = yield call(ServiceClient.create, values);

    //CHAMADA SUCCESS
    yield put(clientCreateSuccess(retorno));
    yield put(clientListRequest(filters));

    yield put(finishLoading());
  } catch (e) {
    // ERROR
    yield put(clientError(e));
    yield put(finishLoading());
  }
}

export default all([
  takeLatest(CLIENT_LIST_REQUEST, list),
  takeLatest(CLIENT_DELETE_REQUEST, remove),
  takeLatest(CLIENT_CREATE_REQUEST, create),
]);
