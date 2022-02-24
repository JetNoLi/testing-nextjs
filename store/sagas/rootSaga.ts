import {all, takeEvery} from 'redux-saga/effects'
import {fetchSaga, helloSaga} from './sagas'

export default function* rootSaga() {
    yield all([
      takeEvery('Fetch', fetchSaga)
    ])
  }