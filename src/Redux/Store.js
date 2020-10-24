import { createStore } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './RouteReducer';




let Store = createStore(rootReducer,composeWithDevTools())
export default Store