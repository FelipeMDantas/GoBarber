import { all } from "redux-saga/effects";
import auth from "./auth/sagas";
import user from "./user/sagas";

console.tron.log('modules/rootsaga');

export default function* rootSaga() {
  return yield all([auth, user]);
}
