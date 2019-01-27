import { Navigation } from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/Auth';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';

//Register Screens
Navigation.registerComponent("awesome-place.AuthScreen", () => AuthScreen);
Navigation.registerComponent("awesome-place.FindPlaceScreen", () => FindPlaceScreen);
Navigation.registerComponent("awesome-place.SharePlaceScreen", () => SharePlaceScreen);

//Start App
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            id: "FindPlaceScreen",
            name: 'awesome-place.AuthScreen',
          }
        }],
        options: {
          topBar: {
            title: {
              text: 'Login'
            }
          }
        }
      }
    }
    // root: {
    //   component: {
    //     name: 'Initializing'
    //   },
    //   options: {
    //     topBar: {
    //       title: {
    //         text: 'Login'
    //       }
    //     }
    //   }
    // },
  });
});