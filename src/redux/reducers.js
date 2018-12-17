/*jshint esversion: 6 */

import { combineReducers } from 'redux';

import { SEND_DATA_TO_PARENT } from './actions';

function setDataFromChild(state = {dataFromChild: ''}, action) {
  console.log('state:', state, 'action:', action);
  switch (action.type) {
    case SEND_DATA_TO_PARENT:
      return {
          dataFromChild: action.data
        };
    default:
      return state;
  }
}

const dataPassApp = combineReducers({
  sharedData: setDataFromChild
});

export default dataPassApp;
