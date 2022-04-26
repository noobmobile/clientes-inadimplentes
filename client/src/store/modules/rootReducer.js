import { combineReducers } from 'redux';
import { clientReducer } from './client/reducer';
import { loadingReducer } from './loading/reducer';

export default combineReducers({
  loading: loadingReducer,
  clients: clientReducer,
});
