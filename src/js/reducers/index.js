import { combineReducers } from 'redux';
import {reducerPanier} from './reducerPanier';
import {reducerProduit} from './reducerProduit';
export const combineReducer = combineReducers({
    reducerPanier,
  reducerProduit,
});