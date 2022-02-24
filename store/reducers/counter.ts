import {AnyAction} from 'redux';
import {HYDRATE} from 'next-redux-wrapper';


export const counterReducer = ( state: number = 0, action: AnyAction) =>{
    switch (action.type){
        case HYDRATE:
            //Will Overwrite client state
            return action.payload;
        case 'Inc':
            return state + 1;
        case 'Dec':
            return state - 1;
        case 'Rep':
            return action.payload 
        default:
            return state;
    }

};