import { all } from 'redux-saga/effects';
import clientSaga from './client/saga';

export default function* rootSaga() {
  yield all([clientSaga]);
}
