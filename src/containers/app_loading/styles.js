
import { StyleSheet } from "react-native";
import { theme } from "./../../themes/index";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop:50,
        backgroundColor: "#11141D"
    },
    image: {
        width: 280,
        height: 70,
        borderRadius: 10,
    },
    button_style: {
        borderRadius: 20,
        backgroundColor: "#1d2029",
        borderColor: "#ffbf00",
        borderWidth: 1,
        maxWidth:"75%"
    },  
    button_text: {
        fontSize: 12,
        color:"#ffbf00"
    },  
})