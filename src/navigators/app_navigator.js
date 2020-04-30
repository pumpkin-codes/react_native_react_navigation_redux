"use strict";
import React from "react";
import { View, Button, Text } from "react-native";
import messaging from "@react-native-firebase/messaging";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";
/* routes */
import Routes from "./../routes";

/* store */
import { connect } from "react-redux";
const mapStateToProps = state => ({ language : state.language });
messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
});

///////////////////////////////////////////////////////////

const Tab = createMaterialTopTabNavigator();
const TabContainer = () => { 
    
    const [ initial_route, setInitailRoute] = React.useState("TAB 3");
    React.useEffect(() => {
        messaging().getToken().then((res)=>console.log(res)).catch((error)=>console.log(error));
        messaging().onNotificationOpenedApp(remoteMessage => {
            console.log(
              'Notification caused app to open from background state:',
              remoteMessage,
            );
            
          });
      
          // Check whether an initial notification is available
          messaging().getInitialNotification()
          .then(remoteMessage => {
            if (remoteMessage) {
              console.log(
                'Notification caused app to open from quit state:',
                remoteMessage,
              );
              
            }
              
        });
    }, []);
    return (
        <Tab.Navigator
            initialRouteName={initial_route}
        >
            <Tab.Screen name="TAB 1" component={Routes.tab_1_stack} />
            <Tab.Screen name="TAB 2" component={Routes.tab_2_stack} />
            <Tab.Screen name="TAB 3" component={Routes.tab_3_stack} />
        </Tab.Navigator>
    )
    
}
export default connect(mapStateToProps)(TabContainer);