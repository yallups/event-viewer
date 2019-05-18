import { combineReducers } from "redux";
import inventory from './inventory';
import event from './event'

export default combineReducers({
  inventory,
  event
});
