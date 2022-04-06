import { call, put, takeEvery } from 'redux-saga/effects';

const fetchData = async ({
  url, method, headers, body,
}) => {
  const response = await fetch(url, { method, headers, body, credentials: 'include' });
  const data = await response.json();
  return data;
};

function* getCallsData() {
  const token = 'qwerty123';
  try {
    const callsDataFetch = yield call(fetchData, {
      url: 'https://api.skilla.ru/mango/getList',
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}`},
    });
    yield put({type: "DATA_RECEIVED", payload: callsDataFetch })
  } catch (e) {
    yield put({type: "DATA_RECEIVING_ERROR", payload: "Failed to receive calls data"})
  }
}

export function* myWatcher() {
  yield takeEvery("RECEIVE_CALLS_DATA", getCallsData);
};
