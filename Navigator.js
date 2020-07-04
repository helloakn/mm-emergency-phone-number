import React, { Component} from 'react';
import{ Animated,
        Easing } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import HomeScreen from './Screens/HomeScreen';
import YangonScreen from './Screens/YangonScreen';
import PoliceScreen from './Screens/PoliceScreen';
import AmbulanceScreen from './Screens/AmbulanceScreen';
import FireScreen from './Screens/FireScreen';


//import Sound from 'react-native-sound';
//const requireAudio = require('../assets/audio/bg.mp3');
let CollapseExpand = (index, position) => {
    const inputRange = [index - 1, index, index + 1];
    const opacity = position.interpolate({
      inputRange,
      outputRange: [0, 1, 1],
    });
  
    const scaleY = position.interpolate({
      inputRange,
      outputRange: ([0, 1, 1]),
    });
  
    return {
      opacity,
      transform: [
        { scaleY }
      ]
    };
  };
  
  /*
  ***Right to left***
   screenInterpolator: (sceneProps) => {
        const { layout, position, scene } = sceneProps;
        const width = layout.initWidth;
        const { index, route } = scene
        const params = route.params || {}; // <- That's new
        const transition = params.transition || 'default'; // <- That's new
        return {
          collapseExpand: CollapseExpand(index, position),
          default: SlideFromRight(index, position, width),
        }[transition];
      },
   */
  let SlideFromRight = (index, position, width) => {
    const inputRange = [index - 1, index, index + 1];
    const translateX = position.interpolate({
      inputRange: [index - 1, index, index + 1],
      outputRange: [width, 0, 0]
    })
    const slideFromRight = { transform: [{ translateX }] }
    return slideFromRight
  };
  
  const TransitionConfiguration = () => {
    return {
      transitionSpec: {
        duration: 750,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
        useNativeDriver: true,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
   
        const thisSceneIndex = scene.index;
        const width = layout.initWidth;
   
        const translateX = position.interpolate({
          inputRange: [thisSceneIndex - 1, thisSceneIndex],
          outputRange: [-width, 0],
          extrapolate: 'clamp'
        });
   
        return {
          transform: [{ translateX }]
        }
      }
    }
  }
  /*
 const TransitionConfiguration = () => {
    return {
      transitionSpec: {
        duration: 750,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
        useNativeDriver: true,
      },
      screenInterpolator: (sceneProps) => {
        const { layout, position, scene } = sceneProps;
        const width = layout.initWidth;
        const { index, route } = scene
        const params = route.params || {}; // <- That's new
        const transition = params.transition || 'default'; // <- That's new
        return {
          collapseExpand: CollapseExpand(index, position),
          default: SlideFromRight(index, position, width),
        }[transition];
      },
    }
  }*/
  
const RootStack = createStackNavigator(
    {
        Home : {
            screen : HomeScreen,
            routeName : "Home",
            key: 'Home',
            title:"haha"
        },
        YangonScreen : {
            screen : YangonScreen,
            routeName : "YangonScreen",
            key: 'YangonScreen',
            title:"haha"
        },
        PoliceScreen : {
            screen : PoliceScreen,
            routeName : "PoliceScreen",
            key: 'PoliceScreen',
            title:"haha"
        },
        AmbulanceScreen : {
          screen : AmbulanceScreen,
          routeName : "AmbulanceScreen",
          key: 'AmbulanceScreen',
          title:"AmbulanceScreen"
        },
        FireScreen : {
          screen : FireScreen,
          routeName : "FireScreen",
          key: 'Reporting',
          title:"FireScreen"
        }

                
    },{
        defaultNavigationOptions:
        {
        header: null
        },
        navigationOptions: {
            cardStack: {
              gesturesEnabled: false
            },
            gesturesEnabled: false
          },
          gesturesEnabled: false,
       transitionConfig:TransitionConfiguration
    }
);
const Navigator = createAppContainer(RootStack);

export default Navigator;