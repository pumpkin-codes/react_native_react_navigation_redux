"use strict";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

/* Containers */
import Login from "./../containers/login";
/* Containers */
///////////////////////////////////////////////////////////////////////

const Stack = createStackNavigator();

const SignInStack = () => {
    return (
        <Stack.Navigator initialRouteName="Login" headerMode="none">
            <Stack.Screen name="Login" component={Login} />   
        </Stack.Navigator>
    );
}
export default SignInStack;