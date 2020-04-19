"use strict";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
/* Containers */
import AppLoading from "./../containers/app_loading";
/* Containers */
///////////////////////////////////////////////////////////////////////

const Stack = createStackNavigator();

const AppLoadingStack = () => {
    return (
        <Stack.Navigator initialRouteName="AppLoading" headerMode="none" >
            <Stack.Screen name="AppLoading" component={AppLoading} />            
        </Stack.Navigator>
    );
}

export default AppLoadingStack;