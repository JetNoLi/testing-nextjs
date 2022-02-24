import {createStore, AnyAction, Store, applyMiddleware} from 'redux';
import {createWrapper, Context, HYDRATE} from 'next-redux-wrapper';
import createSagaMiddleware, {Task} from 'redux-saga';
import reducer, {State} from './reducer';
import rootSaga from './sagas/rootSaga';

export interface SagaStore extends Store {
    sagaTask?: Task;
}

const makeStore = (context: Context) => {
    const sagaMiddleware = createSagaMiddleware();
    
    // apply middleware
    const store = createStore(reducer, applyMiddleware(sagaMiddleware));
    
    // run sagas on server
    (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

    return store;
}

export const wrapper = createWrapper <Store>(makeStore, {debug: true});