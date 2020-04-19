"use strict";
import React from "react";
import { View, Button, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
/* routes */
import Routes from "./../routes";

/* store */
import { connect } from "react-redux";
const mapStateToProps = state => ({ language : state.language });


///////////////////////////////////////////////////////////

const Tab = createMaterialTopTabNavigator();
const TabContainer = () => { 
    return (
        <>
        {/* <View style={{flexDirection:"row"}}>
 
        <Text >farMart</Text>
 
        
 
      </View> */}
    
        <Tab.Navigator >
            <Tab.Screen name="TAB 1" component={Routes.tab_1_stack} />
            <Tab.Screen name="TAB 2" component={Routes.tab_2_stack} />
            <Tab.Screen name="TAB 3" component={Routes.tab_3_stack} />
        </Tab.Navigator>
        </>
    )
    
}
export default connect(mapStateToProps)(TabContainer);