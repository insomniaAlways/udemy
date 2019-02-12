import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
  Promise.all([
    Icon.getImageSource('md-map', 30, 'green'),
    Icon.getImageSource('ios-share-alt', 30, 'blue'),
    Icon.getImageSource('ios-menu', 30, 'blue')
  ]).then((icons) => {
    Navigation.setRoot({
      root: {
        sideMenu: {
          left: {
            component: {
              name: 'awesome-place.SideDrawer',
              visible: false,
              id: 'sideLeftMenu'
            }
          },
          center: {
            bottomTabs: {
              children: [
                {
                  stack: {
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
                      },
                      topBar: {
                        title: {
                          text: 'Find Place'
                        },
                        leftButtons: [
                          {
                            id: 'sideDrawerToggle',
                            text: 'Menu',
                            icon: icons[2]
                          }
                        ],
                      }
                    }
                  },
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
                          },
                          topBar: {
                            title: {
                              text: 'Share Place'
                            },
                            leftButtons: [
                              {
                                id: 'sideDrawerToggle',
                                text: 'Menu',
                                icon: icons[2]
                              }
                            ],
                          }
                        }
                      },
                    }]
                  }
                }
              ]
            },
          }
        }
      }
    });   
  }).then(() => {
    Navigation.events().registerNavigationButtonPressedListener((name, params)  => {
      if(name.buttonId === "sideDrawerToggle") {
        Navigation.mergeOptions('sideLeftMenu', {
          sideMenu: {
            left: {
              visible: true
            }
          }
        });
      }  
    })
  })
}

export default startTabs;