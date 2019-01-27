import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import AuthScreen from './src/screens/Auth/Auth';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';

const store = configureStore();

//Register Screens
Navigation.registerComponentWithRedux("awesome-place.AuthScreen", () => AuthScreen, Provider, store);
Navigation.registerComponentWithRedux("awesome-place.FindPlaceScreen", () => FindPlaceScreen, Provider, store);
Navigation.registerComponentWithRedux("awesome-place.SharePlaceScreen", () => SharePlaceScreen, Provider, store);

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