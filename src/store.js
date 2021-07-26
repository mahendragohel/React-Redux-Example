import { createStore, combineReducers } from 'redux';
import countReducer from './api/reducer';

const rootReducer = combineReducers({
  count: countReducer
});

const Store = createStore(rootReducer);

export default Store;
