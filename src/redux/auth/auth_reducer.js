import { SET_APP_LOADING, SET_TOKEN, SET_MERCHANT_DETAILS, SET_MERCHANT_SHOP_DETAILS, SET_NAME_AND_SHOP_NAME, SET_FRESH_USER, LOG_OUT } from "./auth_types";


const initial_state = {
    app_loading             : true
}

const authReducer = (state = initial_state, action) => {
    switch (action.type) {
        case SET_APP_LOADING : return {
            ...state,
            app_loading: action.payload
        }
        default : return state
    }
}

export default authReducer;