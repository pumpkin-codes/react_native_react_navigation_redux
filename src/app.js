"use strict";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import analytics from "@react-native-firebase/analytics";
/* Redux */
import { Provider } from "react-redux";
import store from "./redux/store";

/* Redux */
/* Component */
import AppContainer from "./navigators";
/* Component */


// Gets the current screen from navigation state
const getActiveRouteName = state => {
    const route = state.routes[state.index];
  
    if (route.state) {
      // Dive into nested navigators
      return getActiveRouteName(route.state);
    }
  
    return route.name;
};


const App = () => {
    const routeNameRef = React.useRef();
    const navigationRef = React.useRef();

    React.useEffect(() => {
        const state = navigationRef.current.getRootState();

        // Save the initial route name
        routeNameRef.current = getActiveRouteName(state);
    }, []);

    return (
        <Provider store={store}>
           
            <NavigationContainer
                ref={navigationRef}
                onStateChange={state => {
                    const previousRouteName = routeNameRef.current;
                    const currentRouteName = getActiveRouteName(state);
            
                    if (previousRouteName !== currentRouteName) {
                      // The line below uses the @react-native-firebase/analytics tracker
                      // Change this line to use another Mobile analytics SDK
                      analytics().setUserProperty("user_id","3745092")
                      analytics().setUserId('wingmanID')
                      analytics().logEvent(currentRouteName, {
                        id: "3745092",
                        from : previousRouteName
                
                      })
                      analytics().setCurrentScreen(currentRouteName, currentRouteName);
                    
                    }
            
                    // Save the current route name for later comparision
                    routeNameRef.current = currentRouteName;
                }}
                
            
            >
                <AppContainer/>
            </NavigationContainer>
        </Provider>
    )
}

export default App;