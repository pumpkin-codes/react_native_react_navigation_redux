import { PermissionsAndroid } from "react-native";

let permissions = [
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
    PermissionsAndroid.PERMISSIONS.CAMERA,
    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    PermissionsAndroid.PERMISSIONS.RECORD_AUDIO
]

export const getAllPermissions = async function () {
    try {
        const userResponse = await PermissionsAndroid.requestMultiple(permissions);
    
        //return userResponse;
    } catch (err) {
      
    }
} 
