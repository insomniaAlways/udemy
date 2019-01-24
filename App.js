import { Navigation } from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/Auth';

//Register Screens
Navigation.registerComponent("awesome-place.AuthScreen", () => AuthScreen);

//Start App
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: "awesome-place.AuthScreen",
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