"use strict";
import React from "react";
import { NavigationContainer, useLinking } from "@react-navigation/native";
/* Redux */
import { Provider } from "react-redux";
import store from "./redux/store";

/* Redux */
/* Component */
import AppContainer from "./navigators";
/* Component */

const App = () => {

    const ref = React.useRef();

  const { getInitialState } = useLinking(ref, {
    prefixes: ['https://mychat.com', 'mychat://'],
  });

  const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState();

    React.useEffect(() => {
        Promise.race([
            getInitialState(),
            new Promise(resolve =>
            // Timeout in 150ms if `getInitialState` doesn't resolve
            // Workaround for https://github.com/facebook/react-native/issues/25675
                setTimeout(resolve, 150)
            ),
        ])
        .catch(e => {
            console.error(e);
        })
        .then(state => {
            if (state !== undefined) {
            setInitialState(state);
            }

            setIsReady(true);
        });
    }, [getInitialState]);

    if (!isReady) {
        return null;
    }


    return (
        <Provider store={store}>
            <NavigationContainer initialState={initialState} ref={ref} >
                <AppContainer/>
            </NavigationContainer>
        </Provider>
    )
}

export default App;