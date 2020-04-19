import { combineReducers } from "redux";
/* Reducers */
import authReducer from "./auth/auth_reducer";
/* Reducers */


const rootReducer = combineReducers({ 
    auth     : authReducer
})

export default rootReducer;