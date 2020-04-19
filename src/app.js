"use strict";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
/* Redux */
import { Provider } from "react-redux";
import store from "./redux/store";

/* Redux */
/* Component */
import AppContainer from "./navigators";
/* Component */

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <AppContainer/>
            </NavigationContainer>
        </Provider>
    )
}

export default App;