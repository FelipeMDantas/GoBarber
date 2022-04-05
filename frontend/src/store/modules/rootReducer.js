import { combineReducers } from "redux";
import auth from "./auth/reducer";
import user from "./user/reducer";

console.tron.log('modules/rootreducer');

export default combineReducers({
  auth,
  user,
});
