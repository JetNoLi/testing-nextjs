import {createStore, AnyAction, Store, combineReducers } from 'redux';
import {createWrapper, Context, HYDRATE} from 'next-redux-wrapper';
import { counterReducer } from './reducers/counter';
// import createSagaMiddleware, {Task} from 'redux-saga';

export interface State{
    counterReducer: number
}

export default combineReducers({
    counterReducer,
})