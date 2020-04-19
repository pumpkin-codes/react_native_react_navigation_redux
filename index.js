import "react-native-gesture-handler";
import { AppRegistry } from "react-native";
import App from "./src/app";
import { name as appName } from "./app.json";
import { getAllPermissions } from "./src/permissions/index";
getAllPermissions();
AppRegistry.registerComponent(appName, () => App);
