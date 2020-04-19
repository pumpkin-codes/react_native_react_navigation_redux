
"use strict";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

/* Containers */
import Tab3 from "../containers/tab_3";
/* Containers */
///////////////////////////////////////////////////////////////////////

const Stack = createStackNavigator();

const WorkHistoryStack = () => {
    return (
        <Stack.Navigator headerMode="none" initialRouteName="History" >
            <Stack.Screen name="Tab3" component={Tab3} />
        </Stack.Navigator>
    );
}

export default WorkHistoryStack;