import { SET_APP_LOADING } from "./auth_types";


export const setAppLoading =  app_loading => {
    return {
        type        : SET_APP_LOADING,
        payload     : app_loading
    }
}
