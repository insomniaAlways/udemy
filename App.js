import { Navigation } from 'react-native-navigation';
import { Provider } from 'redux';

import AuthScreen from './src/screens/Auth/Auth';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';

//Register Screens
Navigation.registerComponent("awesome-place.AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent("awesome-place.FindPlaceScreen", () => FindPlaceScreen, store, Provider);
Navigation.registerComponent("awesome-place.SharePlaceScreen", () => SharePlaceScreen, store, Provider);
import configureStore from './store/configureStore';

const store = configureStore();
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
  });
});