import { ActionTypes } from './actionTypes';
import Selectors from './selectors';

export default class API {
  constructor(store) {
    this.store = store;
    this.selectors = new Selectors();
    this.getState = this.getState.bind(this);
  }

  loadData() {
    const requestType = this.getServiceRequestType(ActionTypes.LOAD_DATA);
    const successType = this.getServiceSuccessType(ActionTypes.LOAD_DATA);
    const failureType = this.getServiceFailureType(ActionTypes.LOAD_DATA);
    this.store.dispatch(requestType, {});

    try {
      // rest api call and its result to be stored in response
      const response = {};
      this.store.dispatch(successType, response);
    } catch (error) {
      this.store.dispatch(failureType, error);
    }
  }

  getCount() {
    return this.selectors.getCountSelector(this.getState());
  }

  increaseCount() {
    this.store.dispatch({
      type: ActionTypes.INCREMENT
    });
  }

  decreaseCount() {
    this.store.dispatch({
      type: ActionTypes.DECREMENT
    });
  }

  getState() {
    let state = this.store.getState();
    return state['count'];
  }

  getServiceRequestType(type) {
    return `${type}_REQUEST`;
  }
  getServiceSuccessType(type) {
    return `${type}_SUCCESS`;
  }
  getServiceFailureType(type) {
    return `${type}_FAILURE`;
  }
}
