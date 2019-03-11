import { takeEvery, put, call, all, fork, select } from 'redux-saga/effects';
import ActionTypes from '../actions/ActionTypes';

export function* addUser() {
  const { userInfo } = yield select(state => state.default.userStore);
  if (userInfo && userInfo.userName) {
    const res = yield fetch(`https://api.github.com/users/${userInfo.userName}`);
    const { name } = yield res.json();
    yield put({ type: ActionTypes.USER_ADD_SUCCESS, userInfo: { userName: name } });
  }
}

export function* watchAddUser() {
  yield takeEvery(ActionTypes.USER_ADD_IN, addUser);
}

export default function* root() {
  yield all([fork(addUser), fork(watchAddUser)]);
}
