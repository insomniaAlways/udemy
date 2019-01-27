import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
  Promise.all([
    Icon.getImageSource('md-map', 30, 'green'),
    Icon.getImageSource('ios-share-alt', 30, 'blue')
  ]).then((icons) => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          children: [
            {
              stack: {
                id: 'BottomTabsId',
                children: [{
                  component: {
                    name: 'awesome-place.FindPlaceScreen',
                  },
                }],
                options: {
                  bottomTab: {
                    fontSize: 12,
                    text: 'FindPlace',
                    icon: icons[0],
                  }
                }
              }
            },
            {
              stack: {
                children: [{
                  component: {
                    name: 'awesome-place.SharePlaceScreen',
                    options: {
                      bottomTab: {
                        fontSize: 12,
                        text: 'SharePlace',
                        icon: icons[1],
                      }
                    }
                  },
                }]
              }
            }
          ]
        }
      }
    });   
  })
}

export default startTabs;
  // Navigation.setRoot({
  //   root: {
  //     stack: {
  //       id: 'BottomTabsId',
  //       children: [
  //         {
  //           component: {
  //             name: 'awesome-place.FindPlaceScreen',
  //             passProps: {
  //               text: 'This is tab 1'
  //             },
  //             options: {
  //               topBar: {
  //                 fontSize: 12,
  //                 text: 'FindPlace',
  //                 icon: require('../../assets/icon.png'),
  //               }
  //             }
  //           },
  //         },
  //         {
  //           component: {
  //             name: 'awesome-place.SharePlaceScreen',
  //             passProps: {
  //               text: 'This is tab 2'
  //             },
  //             options: {
  //               topBar: {
  //                 fontSize: 12,
  //                 text: 'SharePlace',
  //                 icon: require('../../assets/icon.png'),
  //               }
  //             }
  //           },
  //         }
  //       ],
  //       options: {
  //         topBar: {
  //           title: {
  //             text: 'Login'
  //           }
  //         }
  //       }
  //     }
  //   }
  // });