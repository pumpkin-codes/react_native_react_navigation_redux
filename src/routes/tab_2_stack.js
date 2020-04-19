"use strict";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

/* Containers */
import Tab2 from "../containers/tab_2";
/* Containers */
///////////////////////////////////////////////////////////////////////

const Stack = createStackNavigator();

const SmsMarketingStack = () => {
    return (
        <Stack.Navigator initialRouteName="Tab2" headerMode="none">
            <Stack.Screen name="Tab2" component={Tab2} />
        </Stack.Navigator>
    );
}
export default SmsMarketingStack;