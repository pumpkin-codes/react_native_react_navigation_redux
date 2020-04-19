import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
/* Root Reducer */
import rootReducer from "./root_reducer";
/* Root Reducer */
const store = createStore(rootReducer,applyMiddleware(thunk));
export default store
