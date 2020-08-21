import {combineReducers} from 'redux';
import {messageReducer} from './messageReducer';
import { productReducer } from './productReducer';
import { cartReducer } from './cartReducer';

export const allReducer = combineReducers({
    messageReducer:messageReducer,
    productReducer:productReducer,
    cartReducer:cartReducer,
})