"use strict";
import React from "react";

/* Other lib */
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import messaging from "@react-native-firebase/messaging";
/* Other lib */

/* routes */
import Routes from "./../routes";
/* routes */

/* store */
import { connect } from "react-redux";
const mapStateToProps = state => ({ language : state.language });
/* store */

/* Push Notification Background Handler */
messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
});
/* Push Notification Background Handler */

/* Instance Of TopBar Navigator */
const Tab = createMaterialTopTabNavigator();
/* Instance Of TopBar Navigator */

///////////////////////////////////////////////////////////

const TabContainer = () => { 
    
    const [ initial_route, setInitailRoute] = React.useState("TAB 3");
    React.useEffect(() => {
        messaging().getToken().then((res)=>console.log(res)).catch((error)=>console.log(error));
		messaging().onNotificationOpenedApp( remoteMessage => {
			if (remoteMessage) {  
				console.log(
					'Notification caused app to open from background state:',
					remoteMessage,
				);
			}    
        });
      
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