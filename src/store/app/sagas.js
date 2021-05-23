import { all, takeEvery } from 'redux-saga/effects';
import { ENV } from '../../constants';

function* watchError() {
  yield takeEvery(
    (action) => {
      const { type = '' } = action || {};
      return type.endsWith('Failed');
    },
    (action) => {
      const status = action?.payload?.response?.status;
      if (status === 401) {
        window.localStorage.removeItem('token');
        window.location.href = (`${ENV.oAuthUrl}?redirect_uri=${window.location.href}`);
      }
    },
  );
}

export default function* rootSaga() {
  yield all([watchError()]);
}
