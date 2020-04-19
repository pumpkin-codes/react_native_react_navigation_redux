"use strict";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
/* Containers */
import Tab1 from "../containers/tab_1";
/* Containers */



///////////////////////////////////////////////////////////////////////

const Stack = createStackNavigator();

const AddFarmerStack = (props) => {
    return (
        <Stack.Navigator initialRouteName="Tab1" headerMode="none" >
            <Stack.Screen name="Tab1" component={Tab1} />   
        </Stack.Navigator>
    );
}

export default AddFarmerStack;