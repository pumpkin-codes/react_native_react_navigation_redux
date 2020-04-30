"use strict";
import React from "react";

import LoggedInAppContainer from "./app_navigator";
import SignInStack from "./../routes/sign_in";
import AppLoadingStack from "./../routes/app_loading";

/* store */
import { connect } from "react-redux";
const mapStateToProps = state => ({ auth : state.auth });
/* store */

const checkLoggedIn = () => {
    return true;
}


const AppContainer = (props) => {
    
    

    const app_loading = props.auth.app_loading;
    const logged_in = checkLoggedIn(props.auth);
    return app_loading ? <AppLoadingStack/> : logged_in ? <LoggedInAppContainer/> : <SignInStack/>
}

export default connect(mapStateToProps)(AppContainer);