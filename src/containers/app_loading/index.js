import React from "react";
import { View, ActivityIndicator } from "react-native";

/* store */
import { connect } from "react-redux";
import { setAppLoading } from "./../../redux";
const mapStateToProps = state => ({ language: state.language });
const mapDispatchToProps = (dispatch) => ({
    setAppLoading: (loading) => dispatch(setAppLoading(loading)) 
});
/* store */



const AppLoading = (props) => {
    React.useEffect(() => {
        setTimeout(() => {
            props.setAppLoading(false);
        }, 1500)
    }, []);

    return (
        <View>
            <ActivityIndicator size="large" color="#00ff00" />
        </View>
    )
};



export default connect(mapStateToProps, mapDispatchToProps)(AppLoading);