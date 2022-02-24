import {AnyAction} from 'redux';
import {HYDRATE} from 'next-redux-wrapper';


export const counterReducer = ( state: any, action: AnyAction) =>{
    switch (action.type){
        case HYDRATE:
            //Will Overwrite client state
            return action.payload;
        case 'getTODOS':
            return {...action.payload}
        default:
            return state;
    }

};