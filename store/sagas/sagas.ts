import { call, put } from 'redux-saga/effects'
import axios, { Axios } from 'axios';

export interface ActionInterface{
    type: string,
    payload: any
}

export function* helloSaga() {
    console.log('Hello Sagas!')
  }

export function* fetchSaga({type, payload}: ActionInterface) {
    console.log("IN FETCH SAGA", type)
    const response: Axios = yield call(axios.get, "https://jsonplaceholder.typicode.com/todos/" + payload )
    console.log(response)
}