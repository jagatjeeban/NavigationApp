import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator()


function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          
          let iconName;
          if(route.name === 'Screen_A'){
            iconName='app-store-ios'
            size = focused ? 25 : 20
            focused= true
          } else if(route.name === 'Screen_B'){
            iconName='blogger'
            size = focused ? 25 : 20;
            focused=true
          }
          return (
            <FontAwesome5
              name={iconName}
              size={size}
              color={color}
            />
          )},
          // tabBarLabel:false
      })
    }
      >
        
        <Tab.Screen
        name='Screen_A'
        component={ScreenA}
        // options={{tabBarBadge: 3}}
        />
        <Tab.Screen
        name='Screen_B'
        component={ScreenB}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
 text:{
  color:'#000000',
  fontWeight:'bold',
  fontSize:40,
  margin:20
 }
});

export default App;
