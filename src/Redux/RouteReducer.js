import {combineReducers} from 'redux';
import Shoppingreducer from './Shopping/Shopping_Reducer';
let RouteReducer=combineReducers({
   shop:Shoppingreducer
});
export default RouteReducer