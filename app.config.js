export default{
  "expo": {
    "name": "ImpactHive",
    "slug": "ImpactHive",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "plugins": [
      "@react-native-google-signin/google-signin"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.ACM.ImpactHive",
      "googleServicesFile": process.env.GOOGLE_SERVICES_INFOPLIST
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "package": "com.ACM.ImpactHive",
      "googleServicesFile": process.env.GOOGLE_SERVICES_JSON
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": {
      "eas": {
        "projectId": "fda419a3-0dd9-43f4-8dce-59edd4c81395"
      }
    }
  }
}
